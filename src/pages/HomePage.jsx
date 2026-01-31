import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "../components/ProductCard";
import { categories, getNewProducts } from "../data/products";
import "./HomePage.css";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
	const newProducts = getNewProducts().slice(0, 4);
	const containerRef = useRef(null);

	useGSAP(
		() => {
			// Сохраняем данные счетчиков до анимации
			const counterData = [];
			const counters = containerRef.current?.querySelectorAll(
				".hero-feature-number",
			);
			counters?.forEach((counter, i) => {
				const text = counter.textContent || "";
				const num = parseInt(text) || 0;
				const suffix = text.replace(String(num), "");
				counterData[i] = { num, suffix, el: counter };
			});

			// Hero анимация - последовательное появление элементов
			const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

			heroTl
				.fromTo(
					".hero-label",
					{ opacity: 0, y: 30 },
					{ opacity: 1, y: 0, duration: 0.8 },
				)
				.fromTo(
					".hero-title",
					{ opacity: 0, y: 50 },
					{ opacity: 1, y: 0, duration: 1 },
					"-=0.5",
				)
				.fromTo(
					".hero-text",
					{ opacity: 0, y: 30 },
					{ opacity: 1, y: 0, duration: 0.8 },
					"-=0.6",
				)
				.fromTo(
					".hero-actions .btn",
					{ opacity: 0, y: 20 },
					{ opacity: 1, y: 0, stagger: 0.15, duration: 0.6 },
					"-=0.4",
				)
				.fromTo(
					".hero-feature",
					{ opacity: 0, y: 30 },
					{ opacity: 1, y: 0, stagger: 0.1, duration: 0.6 },
					"-=0.3",
				);

			// Анимация счетчиков
			counterData.forEach(({ num, suffix, el }) => {
				const obj = { val: 0 };
				gsap.to(obj, {
					val: num,
					duration: 2,
					ease: "power1.out",
					delay: 0.8,
					onUpdate: () => {
						el.textContent = Math.round(obj.val) + suffix;
					},
				});
			});

			// Features секция - появление при скролле
			gsap.fromTo(
				".feature",
				{ opacity: 0, y: 60 },
				{
					scrollTrigger: {
						trigger: ".features-grid",
						start: "top 80%",
					},
					opacity: 1,
					y: 0,
					stagger: 0.1,
					duration: 0.8,
					ease: "power2.out",
				},
			);

			// Категории - stagger эффект
			gsap.fromTo(
				".category-card",
				{ opacity: 0, scale: 0.9 },
				{
					scrollTrigger: {
						trigger: ".categories-grid",
						start: "top 80%",
					},
					opacity: 1,
					scale: 1,
					stagger: 0.12,
					duration: 0.7,
					ease: "back.out(1.4)",
				},
			);

			// Новые товары
			gsap.fromTo(
				".new-products-section .product-card",
				{ opacity: 0, y: 50 },
				{
					scrollTrigger: {
						trigger: ".new-products-section .grid",
						start: "top 85%",
					},
					opacity: 1,
					y: 0,
					stagger: 0.1,
					duration: 0.6,
					ease: "power2.out",
				},
			);

			// Заголовки секций
			gsap.utils
				.toArray(".section-header-left, .section-header")
				.forEach((header) => {
					gsap.fromTo(
						header,
						{ opacity: 0, x: -30 },
						{
							scrollTrigger: {
								trigger: header,
								start: "top 85%",
							},
							opacity: 1,
							x: 0,
							duration: 0.8,
							ease: "power2.out",
						},
					);
				});

			// CTA Banner
			gsap.fromTo(
				".cta-content",
				{ scale: 0.95, opacity: 0 },
				{
					scrollTrigger: {
						trigger: ".cta-banner",
						start: "top 75%",
					},
					scale: 1,
					opacity: 1,
					duration: 1,
					ease: "power3.out",
				},
			);

			gsap.fromTo(
				".cta-content > *",
				{ opacity: 0, y: 30 },
				{
					scrollTrigger: {
						trigger: ".cta-banner",
						start: "top 75%",
					},
					opacity: 1,
					y: 0,
					stagger: 0.1,
					duration: 0.8,
					delay: 0.2,
					ease: "power2.out",
				},
			);
		},
		{ scope: containerRef },
	);

	return (
		<div className="home" ref={containerRef}>
			{/* Hero Section */}
			<section className="hero">
				<div className="hero-bg"></div>
				<div className="container hero-container">
					<div className="hero-content">
						<span className="hero-label">
							Салон декоративных покрытий
						</span>
						<h1 className="hero-title">
							Открой - свой цвет
							<br />
							<span className="hero-accent">С нами легко</span>
						</h1>
						<p className="hero-text">
							Эксклюзивные отделочные материалы от ведущих мировых
							брендов. Декоративные штукатурки, краски, обои и лепной
							декор для самых изысканных проектов.
						</p>
						<div className="hero-actions">
							<Link to="/catalog" className="btn btn-white">
								Смотреть каталог
							</Link>
							<Link
								to="/contact"
								className="btn btn-outline hero-btn-outline"
							>
								Консультация
							</Link>
						</div>
					</div>
					<div className="hero-features">
						<div className="hero-feature">
							<span className="hero-feature-number">15+</span>
							<span className="hero-feature-text">лет опыта</span>
						</div>
						<div className="hero-feature">
							<span className="hero-feature-number">50+</span>
							<span className="hero-feature-text">брендов</span>
						</div>
						<div className="hero-feature">
							<span className="hero-feature-number">2</span>
							<span className="hero-feature-text">филиала</span>
						</div>
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="features">
				<div className="container">
					<div className="features-grid">
						<div className="feature">
							<div className="feature-icon">
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
								>
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
								</svg>
							</div>
							<div className="feature-content">
								<h3 className="feature-title">Гарантия качества</h3>
								<p className="feature-text">
									Сертифицированная продукция от официальных
									дистрибьюторов
								</p>
							</div>
						</div>
						<div className="feature">
							<div className="feature-icon">
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
								>
									<rect x="1" y="3" width="15" height="13" />
									<polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
									<circle cx="5.5" cy="18.5" r="2.5" />
									<circle cx="18.5" cy="18.5" r="2.5" />
								</svg>
							</div>
							<div className="feature-content">
								<h3 className="feature-title">Доставка по городу</h3>
								<p className="feature-text">
									Бесплатно при заказе от 15 000 ₽
								</p>
							</div>
						</div>
						<div className="feature">
							<div className="feature-icon">
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
								>
									<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
									<circle cx="12" cy="7" r="4" />
								</svg>
							</div>
							<div className="feature-content">
								<h3 className="feature-title">Консультация</h3>
								<p className="feature-text">
									Профессиональный подбор материалов
								</p>
							</div>
						</div>
						<div className="feature">
							<div className="feature-icon">
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
								>
									<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
									<polyline points="22,6 12,13 2,6" />
								</svg>
							</div>
							<div className="feature-content">
								<h3 className="feature-title">Образцы</h3>
								<p className="feature-text">
									Бесплатные образцы материалов
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Categories */}
			<section className="section categories-section">
				<div className="container">
					<div className="section-header-left">
						<span className="section-label">Каталог</span>
						<h2>Категории товаров</h2>
					</div>
					<div className="categories-grid">
						{categories.map((category) => (
							<Link
								key={category.slug}
								to={`/catalog/${category.slug}`}
								className="category-card"
							>
								<div className="category-card-image">
									<img
										src={category.image}
										alt={category.name}
										loading="lazy"
									/>
									<div className="category-card-overlay"></div>
								</div>
								<div className="category-card-content">
									<h3 className="category-card-name">
										{category.name}
									</h3>
									<span className="category-card-link">
										Подробнее
										<svg
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
										>
											<line x1="5" y1="12" x2="19" y2="12" />
											<polyline points="12 5 19 12 12 19" />
										</svg>
									</span>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* New Products */}
			<section className="section new-products-section">
				<div className="container">
					<div className="section-header">
						<div>
							<span className="section-label">Новинки</span>
							<h2>Новые поступления</h2>
						</div>
						<Link to="/catalog" className="section-link">
							Весь каталог
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<line x1="5" y1="12" x2="19" y2="12" />
								<polyline points="12 5 19 12 12 19" />
							</svg>
						</Link>
					</div>
					<div className="grid grid-4">
						{newProducts.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</div>
			</section>

			{/* CTA Banner */}
			<section className="cta-banner">
				<div className="container">
					<div className="cta-content">
						<span className="cta-label">Бесплатная консультация</span>
						<h2 className="cta-title">Поможем подобрать материалы</h2>
						<p className="cta-text">
							Наши эксперты помогут выбрать идеальное решение для
							вашего интерьера
						</p>
						<div className="cta-actions">
							<a href="tel:+73517277339" className="btn btn-white">
								8 (351) 727-73-39
							</a>
							<Link
								to="/contact"
								className="btn btn-outline cta-btn-outline"
							>
								Оставить заявку
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default HomePage;
