import "./globals.css";
import { CartProvider } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

export const metadata = {
	title: {
		default: "Декор Комплект — Салон декоративных покрытий в Челябинске",
		template: "%s | Декор Комплект",
	},
	description:
		"Премиальные декоративные покрытия: штукатурки, краски, обои, фрески, лепной декор. Салон в Челябинске с 2009 года.",
	keywords: [
		"декоративная штукатурка",
		"декоративные покрытия",
		"краски",
		"обои",
		"фрески",
		"лепной декор",
		"Челябинск",
	],
	authors: [{ name: "Декор Комплект" }],
	openGraph: {
		title: "Декор Комплект — Салон декоративных покрытий",
		description:
			"Премиальные декоративные покрытия для создания уникальных интерьеров",
		locale: "ru_RU",
		type: "website",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
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
