"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../data/products";
import "./CatalogPage.css";

gsap.registerPlugin(ScrollTrigger);

// Metadata нужно вынести в отдельный layout.jsx для 'use client' страниц
// или использовать generateMetadata в серверном компоненте-обёртке

export default function CatalogPage() {
	const pageRef = useRef(null);

	useGSAP(
		() => {
			gsap.set(".breadcrumb", { autoAlpha: 0, x: -20 });
			gsap.set(".page-title", { autoAlpha: 0, y: 30 });
			gsap.set(".category-mini-card", { autoAlpha: 0, scale: 0.9, y: 20 });
			gsap.set(".catalog-products .product-card", { autoAlpha: 0, y: 40 });

			const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

			tl.to(".breadcrumb", { autoAlpha: 1, x: 0, duration: 0.5 })
				.to(".page-title", { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.3")
				.to(
					".category-mini-card",
					{
						autoAlpha: 1,
						scale: 1,
						y: 0,
						stagger: 0.05,
						duration: 0.4,
						ease: "back.out(1.4)",
					},
					"-=0.3",
				);

			ScrollTrigger.batch(".catalog-products .product-card", {
				onEnter: (batch) => {
					gsap.to(batch, {
						autoAlpha: 1,
						y: 0,
						stagger: 0.05,
						duration: 0.4,
						ease: "power2.out",
					});
				},
				start: "top 92%",
			});
		},
		{ scope: pageRef },
	);

	return (
		<div className="catalog-page" ref={pageRef}>
			<div className="container">
				<nav className="breadcrumb">
					<Link href="/">Главная</Link>
					<span className="breadcrumb-sep">/</span>
					<span>Каталог</span>
				</nav>

				<h1 className="page-title">Каталог товаров</h1>

				<section className="catalog-categories">
					<h2 className="catalog-section-title">Категории</h2>
					<div className="categories-mini-grid">
						{categories.map((category) => (
							<Link
								key={category.slug}
								href={`/catalog/${category.slug}`}
								className="category-mini-card"
							>
								<div className="category-mini-image">
									<img
										src={category.image}
										alt={category.name}
										loading="lazy"
									/>
								</div>
								<span className="category-mini-name">
									{category.name}
								</span>
							</Link>
						))}
					</div>
				</section>

				<section className="catalog-products">
					<div className="catalog-header">
						<h2 className="catalog-section-title">Все товары</h2>
						<span className="catalog-count">
							{products.length} товаров
						</span>
					</div>
					<div className="grid grid-4">
						{products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
