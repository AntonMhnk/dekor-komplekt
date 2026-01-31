import { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getProductById, getProductsByCategory } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import "./ProductPage.css";

gsap.registerPlugin(ScrollTrigger);

function ProductPage() {
	const { productId } = useParams();
	const product = getProductById(productId);
	const { addItem } = useCart();
	const [quantity, setQuantity] = useState(1);
	const [isAdded, setIsAdded] = useState(false);
	const pageRef = useRef(null);
	const addBtnRef = useRef(null);

	useGSAP(
		() => {
			if (!product) return;

			// Анимация галереи
			gsap.fromTo(
				".product-gallery",
				{ opacity: 0, x: -50 },
				{ opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
			);

			// Анимация информации о продукте
			const infoTl = gsap.timeline({ delay: 0.2 });

			infoTl
				.fromTo(
					".product-category",
					{ opacity: 0, y: 20 },
					{ opacity: 1, y: 0, duration: 0.5 }
				)
				.fromTo(
					".product-name",
					{ opacity: 0, y: 30 },
					{ opacity: 1, y: 0, duration: 0.6 },
					"-=0.3"
				)
				.fromTo(
					".product-price-block",
					{ opacity: 0, y: 20 },
					{ opacity: 1, y: 0, duration: 0.5 },
					"-=0.3"
				)
				.fromTo(
					".product-description",
					{ opacity: 0, y: 20 },
					{ opacity: 1, y: 0, duration: 0.5 },
					"-=0.2"
				)
				.fromTo(
					".product-actions",
					{ opacity: 0, y: 20 },
					{ opacity: 1, y: 0, duration: 0.5 },
					"-=0.2"
				)
				.fromTo(
					".product-feature",
					{ opacity: 0, x: -20 },
					{ opacity: 1, x: 0, stagger: 0.1, duration: 0.4 },
					"-=0.2"
				);

			// Похожие товары
			gsap.fromTo(
				".related-products .product-card",
				{ opacity: 0, y: 40 },
				{
					scrollTrigger: {
						trigger: ".related-products",
						start: "top 85%",
					},
					opacity: 1,
					y: 0,
					stagger: 0.1,
					duration: 0.6,
					ease: "power2.out",
				}
			);
		},
		{ scope: pageRef, dependencies: [productId] }
	);

	if (!product) {
		return (
			<div className="not-found">
				<div className="container">
					<h1>Товар не найден</h1>
					<Link to="/catalog" className="btn btn-primary">
						Вернуться в каталог
					</Link>
				</div>
			</div>
		);
	}

	const relatedProducts = getProductsByCategory(product.categorySlug)
		.filter((p) => p.id !== product.id)
		.slice(0, 4);

	const formatPrice = (num) => {
		return new Intl.NumberFormat("ru-RU").format(num);
	};

	const handleQuantityChange = (delta) => {
		setQuantity((prev) => Math.max(1, prev + delta));
	};

	const handleAddToCart = () => {
		addItem(product, quantity);
		setIsAdded(true);

		// Анимация кнопки
		if (addBtnRef.current) {
			gsap.timeline()
				.to(addBtnRef.current, { scale: 0.95, duration: 0.1 })
				.to(addBtnRef.current, {
					scale: 1,
					duration: 0.4,
					ease: "elastic.out(1, 0.5)",
				});
		}

		setTimeout(() => {
			setIsAdded(false);
		}, 1500);
	};

	return (
		<div className="product-page" ref={pageRef}>
			<div className="container">
				{/* Breadcrumb */}
				<nav className="breadcrumb">
					<Link to="/">Главная</Link>
					<span className="breadcrumb-sep">/</span>
					<Link to="/catalog">Каталог</Link>
					<span className="breadcrumb-sep">/</span>
					<Link to={`/catalog/${product.categorySlug}`}>
						{product.category}
					</Link>
					<span className="breadcrumb-sep">/</span>
					<span>{product.name}</span>
				</nav>

				{/* Product Details */}
				<div className="product-details">
					<div className="product-gallery">
						<div className="product-main-image">
							<img src={product.image} alt={product.name} />
							{product.isNew && (
								<span className="product-badge product-badge-new">
									Новинка
								</span>
							)}
							{product.isSale && (
								<span className="product-badge product-badge-sale">
									Скидка
								</span>
							)}
						</div>
					</div>

					<div className="product-info">
						<span className="product-category">{product.category}</span>
						<h1 className="product-name">{product.name}</h1>

						<div className="product-price-block">
							<span className="product-price">
								{formatPrice(product.price)} ₽
							</span>
							{product.oldPrice && (
								<span className="product-old-price">
									{formatPrice(product.oldPrice)} ₽
								</span>
							)}
						</div>

						<p className="product-description">{product.description}</p>

						<div className="product-actions">
							<div className="product-quantity">
								<button
									className="quantity-btn"
									onClick={() => handleQuantityChange(-1)}
								>
									−
								</button>
								<input
									type="number"
									value={quantity}
									min="1"
									readOnly
									className="quantity-input"
								/>
								<button
									className="quantity-btn"
									onClick={() => handleQuantityChange(1)}
								>
									+
								</button>
							</div>
							<button
								ref={addBtnRef}
								className={`btn product-add-btn ${isAdded ? "btn-success" : "btn-primary"}`}
								onClick={handleAddToCart}
							>
								{isAdded ? (
									<>
										<svg
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
										>
											<polyline points="20 6 9 17 4 12" />
										</svg>
										Добавлено!
									</>
								) : (
									<>
										<svg
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
										>
											<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
											<line x1="3" y1="6" x2="21" y2="6" />
											<path d="M16 10a4 4 0 0 1-8 0" />
										</svg>
										Добавить в корзину
									</>
								)}
							</button>
						</div>

						<div className="product-features">
							<div className="product-feature">
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<rect x="1" y="3" width="15" height="13" />
									<polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
									<circle cx="5.5" cy="18.5" r="2.5" />
									<circle cx="18.5" cy="18.5" r="2.5" />
								</svg>
								<span>Доставка 1-3 дня</span>
							</div>
							<div className="product-feature">
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
								</svg>
								<span>Гарантия качества</span>
							</div>
							<div className="product-feature">
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
									<polyline points="17 6 23 6 23 12" />
								</svg>
								<span>Возврат 14 дней</span>
							</div>
						</div>
					</div>
				</div>

				{/* Related Products */}
				{relatedProducts.length > 0 && (
					<section className="related-products">
						<h2 className="related-title">Похожие товары</h2>
						<div className="grid grid-4">
							{relatedProducts.map((p) => (
								<ProductCard key={p.id} product={p} />
							))}
						</div>
					</section>
				)}
			</div>
		</div>
	);
}

export default ProductPage;
