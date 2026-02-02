import { notFound } from "next/navigation";
import { getProductBySlug, products } from "../../data/products";
import ProductPageClient from "./ProductPageClient";

// Генерация статических путей для всех товаров
export async function generateStaticParams() {
	return products.map((product) => ({
		slug: product.slug,
	}));
}

// Динамическое SEO для каждого товара
export async function generateMetadata({ params }) {
	const product = getProductBySlug(params.slug);

	if (!product) {
		return {
			title: "Товар не найден",
		};
	}

	const formatPrice = (num) => new Intl.NumberFormat("ru-RU").format(num);
	const siteUrl = "https://dekor-komplekt.ru";

	return {
		title: product.name,
		description: `${product.description} Цена: ${formatPrice(product.price)} ₽. Купить ${product.category.toLowerCase()} в Челябинске в салоне Декор Комплект.`,
		alternates: {
			canonical: `${siteUrl}/product/${product.slug}`,
		},
		openGraph: {
			title: `${product.name} | Декор Комплект`,
			description: product.description,
			url: `${siteUrl}/product/${product.slug}`,
			images: [
				{
					url: product.image,
					width: 600,
					height: 600,
					alt: product.name,
				},
			],
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: product.name,
			description: product.description,
			images: [product.image],
		},
	};
}

// JSON-LD для товара (Product schema)
function ProductJsonLd({ product }) {
	const siteUrl = "https://dekor-komplekt.ru";
	
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: product.name,
		description: product.description,
		image: `${siteUrl}${product.image}`,
		category: product.category,
		url: `${siteUrl}/product/${product.slug}`,
		offers: {
			"@type": "Offer",
			price: product.price,
			priceCurrency: "RUB",
			availability: "https://schema.org/InStock",
			url: `${siteUrl}/product/${product.slug}`,
			seller: {
				"@type": "Organization",
				name: "Декор Комплект",
			},
		},
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}

export default function ProductPage({ params }) {
	const product = getProductBySlug(params.slug);

	if (!product) {
		notFound();
	}

	return (
		<>
			<ProductJsonLd product={product} />
			<ProductPageClient product={product} />
		</>
	);
}
