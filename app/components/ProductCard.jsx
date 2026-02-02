"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useCart } from "../providers";
import "./ProductCard.css";

export default function ProductCard({ product }) {
	const { slug, name, price, oldPrice, image, category, isNew, isSale } = product;
	const { addItem } = useCart();
	const [isAdded, setIsAdded] = useState(false);
	const cardRef = useRef(null);
	const btnRef = useRef(null);

	const formatPrice = (num) => {
		return new Intl.NumberFormat("ru-RU").format(num);
	};

	const handleAddToCart = () => {
		addItem(product);
		setIsAdded(true);

		// Анимация кнопки при добавлении
		gsap.timeline()
			.to(btnRef.current, {
				scale: 0.95,
				duration: 0.1,
			})
			.to(btnRef.current, {
				scale: 1,
				duration: 0.3,
				ease: "elastic.out(1, 0.5)",
			});

		// Анимация карточки
		gsap.to(cardRef.current, {
			boxShadow: "0 0 0 3px rgba(201, 169, 98, 0.5)",
			duration: 0.2,
			yoyo: true,
			repeat: 1,
		});

		setTimeout(() => setIsAdded(false), 1500);
	};

	return (
		<article className="product-card" ref={cardRef}>
			<Link href={`/product/${slug}`} className="product-card-link">
				<div className="product-card-image">
					<img src={image} alt={name} loading="lazy" />
					{isNew && (
						<span className="product-badge product-badge-new">
							Новинка
						</span>
					)}
					{isSale && (
						<span className="product-badge product-badge-sale">
							Скидка
						</span>
					)}
				</div>

				<div className="product-card-content">
					<span className="product-card-category">{category}</span>
					<h3 className="product-card-name">{name}</h3>
					<div className="product-card-price">
						<span className="product-price-current">
							{formatPrice(price)} ₽
						</span>
						{oldPrice && (
							<span className="product-price-old">
								{formatPrice(oldPrice)} ₽
							</span>
						)}
					</div>
				</div>
			</Link>

			<button
				ref={btnRef}
				className={`product-card-btn ${isAdded ? "product-card-btn-added" : ""}`}
				onClick={handleAddToCart}
			>
				{isAdded ? (
					<>
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<polyline points="20 6 9 17 4 12" />
						</svg>
						<span>Добавлено</span>
					</>
				) : (
					<>
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
							<line x1="3" y1="6" x2="21" y2="6" />
							<path d="M16 10a4 4 0 0 1-8 0" />
						</svg>
						<span>В корзину</span>
					</>
				)}
			</button>
		</article>
	);
}
