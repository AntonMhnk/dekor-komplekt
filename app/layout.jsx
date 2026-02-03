import "./globals.css";
import { CartProvider } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

const siteUrl = "https://dekor-komplekt.ru";

export const metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "Декор Комплект — Салон декоративных покрытий в Челябинске",
		template: "%s | Декор Комплект",
	},
	description:
		"Премиальные декоративные покрытия: штукатурки, краски, обои, фрески, лепной декор. Салон в Челябинске с 2009 года. Бесплатная консультация.",
	authors: [{ name: "Декор Комплект" }],
	creator: "Декор Комплект",
	publisher: "Декор Комплект",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title: "Декор Комплект — Салон декоративных покрытий",
		description: "Премиальные декоративные покрытия для создания уникальных интерьеров. Более 50 брендов. 15+ лет опыта.",
		url: siteUrl,
		siteName: "Декор Комплект",
		locale: "ru_RU",
		type: "website",
		images: [
			{
				url: "/images/logo.webp",
				width: 200,
				height: 200,
				alt: "Декор Комплект логотип",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Декор Комплект — Салон декоративных покрытий",
		description: "Премиальные декоративные покрытия для создания уникальных интерьеров",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		// Добавить после регистрации в вебмастерах:
		// google: "your-google-verification-code",
		// yandex: "your-yandex-verification-code",
	},
	alternates: {
		canonical: siteUrl,
	},
};

// JSON-LD структурированные данные для организации
const jsonLd = {
	"@context": "https://schema.org",
	"@type": "HomeGoodsStore",
	name: "Декор Комплект",
	description: "Салон декоративных покрытий в Челябинске",
	url: siteUrl,
	telephone: "+7 (351) 727-73-39",
	address: [
		{
			"@type": "PostalAddress",
			streetAddress: "ул. Коммуны, 127",
			addressLocality: "Челябинск",
			addressCountry: "RU",
		},
		{
			"@type": "PostalAddress",
			streetAddress: "ул. Труда, 174",
			addressLocality: "Челябинск",
			addressCountry: "RU",
		},
	],
	openingHours: "Mo-Su 10:00-18:00",
	priceRange: "₽₽",
	image: `${siteUrl}/images/logo.webp`,
	sameAs: [],
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				<link rel="preload" as="image" href="/images/logo.webp" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body>
				<CartProvider>
					<div className="layout">
						<Header />
						<main className="main">{children}</main>
						<Footer />
						<Cart />
					</div>
				</CartProvider>
			</body>
		</html>
	);
}
