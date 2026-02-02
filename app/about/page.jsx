"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutPage.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
	const pageRef = useRef(null);

	useGSAP(
		() => {
			gsap.set(".breadcrumb", { autoAlpha: 0, x: -20 });
			gsap.set(".about-hero-title", { autoAlpha: 0, y: 30 });
			gsap.set(".about-hero-subtitle", { autoAlpha: 0, y: 20 });
			gsap.set(".stat-item", { autoAlpha: 0, y: 30 });
			gsap.set(".about-text", { autoAlpha: 0, x: -40 });
			gsap.set(".about-image", { autoAlpha: 0, x: 40 });
			gsap.set(".value-card", { autoAlpha: 0, y: 40, scale: 0.95 });
			gsap.set(".why-content", { autoAlpha: 0, x: -40 });
			gsap.set(".why-image", { autoAlpha: 0, x: 40 });

			const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
			heroTl
				.to(".breadcrumb", { autoAlpha: 1, x: 0, duration: 0.5 })
				.to(
					".about-hero-title",
					{ autoAlpha: 1, y: 0, duration: 0.7 },
					"-=0.3",
				)
				.to(
					".about-hero-subtitle",
					{ autoAlpha: 1, y: 0, duration: 0.6 },
					"-=0.4",
				);

			gsap.to(".stat-item", {
				autoAlpha: 1,
				y: 0,
				stagger: 0.1,
				duration: 0.6,
				delay: 0.5,
				ease: "back.out(1.4)",
			});

			const statNumbers = pageRef.current?.querySelectorAll(".stat-number");
			statNumbers?.forEach((el) => {
				const text = el.textContent || "";
				const num = parseInt(text.replace(/\D/g, "")) || 0;
				const prefix = text.match(/^[^\d]*/)?.[0] || "";
				const suffix = text.match(/[^\d]*$/)?.[0] || "";

				const obj = { val: 0 };
				gsap.to(obj, {
					val: num,
					duration: 2,
					delay: 0.8,
					ease: "power1.out",
					onUpdate: () => {
						el.textContent =
							prefix + Math.round(obj.val).toLocaleString() + suffix;
					},
				});
			});

			gsap.to(".about-text", {
				scrollTrigger: { trigger: ".about-content", start: "top 75%" },
				autoAlpha: 1,
				x: 0,
				duration: 0.8,
				ease: "power3.out",
			});
			gsap.to(".about-image", {
				scrollTrigger: { trigger: ".about-content", start: "top 75%" },
				autoAlpha: 1,
				x: 0,
				duration: 0.8,
				delay: 0.2,
				ease: "power3.out",
			});

			gsap.to(".value-card", {
				scrollTrigger: { trigger: ".values-grid", start: "top 80%" },
				autoAlpha: 1,
				y: 0,
				scale: 1,
				stagger: 0.1,
				duration: 0.6,
				ease: "back.out(1.4)",
			});

			gsap.to(".why-content", {
				scrollTrigger: { trigger: ".why-grid", start: "top 75%" },
				autoAlpha: 1,
				x: 0,
				duration: 0.8,
				ease: "power3.out",
			});
			gsap.to(".why-image", {
				scrollTrigger: { trigger: ".why-grid", start: "top 75%" },
				autoAlpha: 1,
				x: 0,
				duration: 0.8,
				delay: 0.2,
				ease: "power3.out",
			});
		},
		{ scope: pageRef },
	);

	const stats = [
		{ number: "15+", label: "лет на рынке" },
		{ number: "10 000+", label: "довольных клиентов" },
		{ number: "50+", label: "брендов в каталоге" },
		{ number: "2", label: "филиала в Челябинске" },
	];

	const values = [
		{
			icon: (
				<svg
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
				>
					<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
				</svg>
			),
			title: "Качество",
			description:
				"Работаем только с проверенными поставщиками и гарантируем подлинность всей продукции",
		},
		{
			icon: (
				<svg
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
				>
					<circle cx="12" cy="12" r="10" />
					<path d="M8 14s1.5 2 4 2 4-2 4-2" />
					<line x1="9" y1="9" x2="9.01" y2="9" />
					<line x1="15" y1="9" x2="15.01" y2="9" />
				</svg>
			),
			title: "Клиентоориентированность",
			description:
				"Индивидуальный подход к каждому клиенту и помощь в подборе материалов",
		},
		{
			icon: (
				<svg
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
				>
					<path d="M12 2L2 7l10 5 10-5-10-5z" />
					<path d="M2 17l10 5 10-5" />
					<path d="M2 12l10 5 10-5" />
				</svg>
			),
			title: "Широкий ассортимент",
			description:
				"Более 5000 наименований отделочных материалов от ведущих производителей",
		},
		{
			icon: (
				<svg
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
				>
					<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
					<circle cx="9" cy="7" r="4" />
					<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
					<path d="M16 3.13a4 4 0 0 1 0 7.75" />
				</svg>
			),
			title: "Профессионализм",
			description:
				"Команда опытных специалистов с глубоким знанием отделочных материалов",
		},
	];

	return (
		<div className="about-page" ref={pageRef}>
			<section className="about-hero">
				<div className="container">
					<nav className="breadcrumb">
						<Link href="/">Главная</Link>
						<span className="breadcrumb-sep">/</span>
						<span>О компании</span>
					</nav>
					<h1 className="about-hero-title">О компании</h1>
					<p className="about-hero-subtitle">
						Салон декоративных покрытий в Челябинске с 2009 года
					</p>
				</div>
			</section>

			<section className="about-stats">
				<div className="container">
					<div className="stats-grid">
						{stats.map((stat, index) => (
							<div key={index} className="stat-item">
								<span className="stat-number">{stat.number}</span>
								<span className="stat-label">{stat.label}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="about-content section">
				<div className="container">
					<div className="about-grid">
						<div className="about-text">
							<h2>Декор Комплект — ваш надёжный партнёр</h2>
							<p>
								Компания «Декор Комплект» — это салон декоративных
								покрытий, специализирующийся на продаже премиальных
								отделочных материалов для создания уникальных
								интерьеров.
							</p>
							<p>
								Мы предлагаем широкий ассортимент продукции:
								декоративные краски и штукатурки, дизайнерские обои,
								художественные фрески, лепной декор, напольные
								покрытия, ковры ручной работы и профессиональные
								клеевые материалы.
							</p>
							<p>
								За годы работы мы заслужили доверие тысяч клиентов
								благодаря безупречному качеству продукции и высокому
								уровню сервиса.
							</p>
						</div>
						<div className="about-image">
							<img
								src="https://placehold.co/600x400/e8e4e0/666666?text=Наш+салон"
								alt="Интерьер салона"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="about-values section">
				<div className="container">
					<h2 className="section-title">Наши ценности</h2>
					<div className="values-grid">
						{values.map((value, index) => (
							<div key={index} className="value-card">
								<div className="value-icon">{value.icon}</div>
								<h3 className="value-title">{value.title}</h3>
								<p className="value-description">
									{value.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="about-why section">
				<div className="container">
					<div className="why-grid">
						<div className="why-content">
							<h2>Почему выбирают нас?</h2>
							<ul className="why-list">
								<li>
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
									<span>
										Только оригинальная продукция с сертификатами
										качества
									</span>
								</li>
								<li>
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
									<span>
										Бесплатные образцы материалов для оценки
									</span>
								</li>
								<li>
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
									<span>
										Профессиональная консультация по подбору
										материалов
									</span>
								</li>
								<li>
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
									<span>
										Выгодные цены напрямую от производителей
									</span>
								</li>
								<li>
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
									<span>
										Быстрая доставка по Челябинску и области
									</span>
								</li>
								<li>
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
									<span>Гарантия на всю продукцию</span>
								</li>
							</ul>
							<Link href="/contact" className="btn btn-primary">
								Связаться с нами
							</Link>
						</div>
						<div className="why-image">
							<img
								src="https://placehold.co/600x450/e8e4e0/666666?text=Образцы"
								alt="Образцы материалов"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
