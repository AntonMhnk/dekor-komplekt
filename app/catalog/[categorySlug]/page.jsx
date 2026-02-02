import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "../../components/ProductCard";
import {
	getCategoryBySlug,
	getProductsByCategory,
	categories,
} from "../../data/products";
import "./CategoryPage.css";

export async function generateStaticParams() {
	return categories.map((category) => ({
		categorySlug: category.slug,
	}));
}

export async function generateMetadata({ params }) {
	const category = getCategoryBySlug(params.categorySlug);
	if (!category) return { title: "Категория не найдена" };

	return {
		title: category.name,
		description: category.description,
	};
}

export default function CategoryPage({ params }) {
	const category = getCategoryBySlug(params.categorySlug);
	const products = getProductsByCategory(params.categorySlug);

	if (!category) {
		notFound();
	}

	return (
		<div className="category-page">
			<div className="category-hero">
				<img
					src={category.image}
					alt={category.name}
					className="category-hero-bg"
				/>
				<div className="category-hero-overlay" />
				<div className="container">
					<div className="category-hero-content">
						<nav className="breadcrumb breadcrumb-light">
							<Link href="/">Главная</Link>
							<span className="breadcrumb-sep">/</span>
							<Link href="/catalog">Каталог</Link>
							<span className="breadcrumb-sep">/</span>
							<span>{category.name}</span>
						</nav>
						<h1 className="category-hero-title">{category.name}</h1>
						<p className="category-hero-desc">{category.description}</p>
					</div>
				</div>
			</div>

			<div className="container">
				<section className="category-products">
					<div className="catalog-header">
						<h2 className="catalog-section-title">Товары категории</h2>
						<span className="catalog-count">
							{products.length} товаров
						</span>
					</div>

					{products.length > 0 ? (
						<div className="grid grid-4">
							{products.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					) : (
						<div className="no-products">
							<p>В данной категории пока нет товаров</p>
							<Link href="/catalog" className="btn btn-outline">
								Смотреть все товары
							</Link>
						</div>
					)}
				</section>
			</div>
		</div>
	);
}
