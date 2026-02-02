"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getProductsByCategory } from "../../data/products";
import { useCart } from "../../providers";
import ProductCard from "../../components/ProductCard";
import "./ProductPage.css";

gsap.registerPlugin(ScrollTrigger);

export default function ProductPageClient({ product }) {
	const { addItem } = useCart();
	const [quantity, setQuantity] = useState(1);
	const [isAdded, setIsAdded] = useState(false);
	const pageRef = useRef(null);
	const addBtnRef = useRef(null);

	useGSAP(
		() => {
			if (!product) return;

			gsap.fromTo(
				".product-gallery",
				{ opacity: 0, x: -50 },
				{ opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
			);

			const infoTl = gsap.timeline({ delay: 0.2 });
			infoTl
				.fromTo(
					".product-category",
					{ opacity: 0, y: 20 },
					{ opacity: 1, y: 0, duration: 0.5 },
				)
				.fromTo(
					".product-name",
					{ opacity: 0, y: 30 },
					{ opacity: 1, y: 0, duration: 0.6 },
					"-=0.3",
				)
				.fromTo(
					".product-price-block",
					{ opacity: 0, y: 20 },
					{ opacity: 1, y: 0, duration: 0.5 },
					"-=0.3",
				)
				.fromTo(
					".product-description",
					{ opacity: 0, y: 20 },
					{ opacity: 1, y: 0, duration: 0.5 },
					"-=0.2",
				)
				.fromTo(
					".product-actions",
					{ opacity: 0, y: 20 },
					{ opacity: 1, y: 0, duration: 0.5 },
					"-=0.2",
				);

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
				},
			);
		},
		{ scope: pageRef, dependencies: [product?.id] },
	);

	const relatedProducts = getProductsByCategory(product.categorySlug)
		.filter((p) => p.id !== product.id)
		.slice(0, 4);

	const formatPrice = (num) => new Intl.NumberFormat("ru-RU").format(num);

	const handleQuantityChange = (delta) => {
		setQuantity((prev) => Math.max(1, prev + delta));
	};

	const handleAddToCart = () => {
		addItem(product, quantity);
		setIsAdded(true);

		if (addBtnRef.current) {
			gsap.timeline()
				.to(addBtnRef.current, { scale: 0.95, duration: 0.1 })
				.to(addBtnRef.current, {
					scale: 1,
					duration: 0.4,
					ease: "elastic.out(1, 0.5)",
				});
		}

		setTimeout(() => setIsAdded(false), 1500);
	};

	return (
		<div className="product-page" ref={pageRef}>
			<div className="container">
				<nav className="breadcrumb">
					<Link href="/">Главная</Link>
					<span className="breadcrumb-sep">/</span>
					<Link href="/catalog">Каталог</Link>
					<span className="breadcrumb-sep">/</span>
					<Link href={`/catalog/${product.categorySlug}`}>
						{product.category}
					</Link>
					<span className="breadcrumb-sep">/</span>
					<span>{product.name}</span>
				</nav>

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
								<span className="quantity-input">{quantity}</span>
								<button
									className="quantity-btn"
									onClick={() => handleQuantityChange(1)}
								>
									+
								</button>
							</div>

							<button
								ref={addBtnRef}
								className={`btn btn-primary product-add-btn ${isAdded ? "btn-success" : ""}`}
								onClick={handleAddToCart}
							>
								{isAdded ? "Добавлено ✓" : "Добавить в корзину"}
							</button>
						</div>

						<div className="product-features">
							<div className="product-feature">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
								</svg>
								<span>Гарантия качества</span>
							</div>
							<div className="product-feature">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<rect x="1" y="3" width="15" height="13" />
									<polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
									<circle cx="5.5" cy="18.5" r="2.5" />
									<circle cx="18.5" cy="18.5" r="2.5" />
								</svg>
								<span>Доставка по городу</span>
							</div>
							<div className="product-feature">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
									<polyline points="22,6 12,13 2,6" />
								</svg>
								<span>Образцы материалов</span>
							</div>
						</div>
					</div>
				</div>

				{relatedProducts.length > 0 && (
					<section className="related-products">
						<h2 className="section-title">Похожие товары</h2>
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
