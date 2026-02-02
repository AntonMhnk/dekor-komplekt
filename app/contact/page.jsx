"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ContactPage.css";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
	const pageRef = useRef(null);

	useGSAP(
		() => {
			gsap.set(".breadcrumb", { autoAlpha: 0, x: -20 });
			gsap.set(".page-title", { autoAlpha: 0, y: 30 });
			gsap.set(".section-subtitle", { autoAlpha: 0, y: 20 });
			gsap.set(".branch-card", { autoAlpha: 0, y: 30, scale: 0.98 });
			gsap.set(".contact-card", { autoAlpha: 0, x: -30 });
			gsap.set(".contact-form-wrapper", { autoAlpha: 0, y: 40 });
			gsap.set(".map-section", { autoAlpha: 0, y: 30 });

			const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
			heroTl
				.to(".breadcrumb", { autoAlpha: 1, x: 0, duration: 0.5 })
				.to(".page-title", { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.3")
				.to(
					".section-subtitle",
					{ autoAlpha: 1, y: 0, duration: 0.5 },
					"-=0.3",
				);

			gsap.to(".branch-card", {
				autoAlpha: 1,
				y: 0,
				scale: 1,
				stagger: 0.15,
				duration: 0.6,
				delay: 0.4,
				ease: "back.out(1.4)",
			});

			gsap.to(".contact-card", {
				scrollTrigger: { trigger: ".contact-grid", start: "top 80%" },
				autoAlpha: 1,
				x: 0,
				stagger: 0.1,
				duration: 0.5,
				ease: "power2.out",
			});

			gsap.to(".contact-form-wrapper", {
				scrollTrigger: { trigger: ".contact-grid", start: "top 80%" },
				autoAlpha: 1,
				y: 0,
				duration: 0.7,
				delay: 0.2,
				ease: "power3.out",
			});

			gsap.to(".map-section", {
				scrollTrigger: { trigger: ".map-section", start: "top 85%" },
				autoAlpha: 1,
				y: 0,
				duration: 0.8,
				ease: "power3.out",
			});
		},
		{ scope: pageRef },
	);

	const branches = [
		{
			id: 1,
			name: "Филиал на Коммуны",
			address: "г. Челябинск, ул. Коммуны, 127",
			phone: "8 (351) 727-73-39",
			phoneLink: "+73517277339",
			rating: "4.6",
			reviews: 22,
			hours: "Открыто до 18:00",
		},
		{
			id: 2,
			name: "Филиал на Труда",
			address: "г. Челябинск, ул. Труда, 174",
			phone: "8 (351) 727-73-39",
			phoneLink: "+73517277339",
			rating: "5.0",
			reviews: 14,
			hours: "Открыто до 18:00",
		},
	];

	return (
		<div className="contact-page" ref={pageRef}>
			<div className="container">
				<nav className="breadcrumb">
					<Link href="/">Главная</Link>
					<span className="breadcrumb-sep">/</span>
					<span>Контакты</span>
				</nav>

				<h1 className="page-title">Контакты</h1>

				<section className="branches-section">
					<h2 className="section-subtitle">Наши филиалы</h2>
					<div className="branches-grid">
						{branches.map((branch) => (
							<div key={branch.id} className="branch-card">
								<div className="branch-header">
									<h3 className="branch-name">{branch.name}</h3>
									<div className="branch-rating">
										<svg
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="#ffc107"
											stroke="#ffc107"
											strokeWidth="2"
										>
											<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
										</svg>
										<span>{branch.rating}</span>
										<span className="branch-reviews">
											({branch.reviews} отзывов)
										</span>
									</div>
								</div>
								<div className="branch-info">
									<div className="branch-row">
										<svg
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
										>
											<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
											<circle cx="12" cy="10" r="3" />
										</svg>
										<span>{branch.address}</span>
									</div>
									<div className="branch-row">
										<svg
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
										>
											<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
										</svg>
										<a href={`tel:${branch.phoneLink}`}>
											{branch.phone}
										</a>
									</div>
									<div className="branch-row">
										<svg
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
										>
											<circle cx="12" cy="12" r="10" />
											<polyline points="12 6 12 12 16 14" />
										</svg>
										<span className="branch-open">
											{branch.hours}
										</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				<div className="contact-grid">
					<div className="contact-info">
						<div className="contact-card">
							<div className="contact-card-icon">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
								</svg>
							</div>
							<div className="contact-card-content">
								<h3>Телефон</h3>
								<a href="tel:+73517277339">8 (351) 727-73-39</a>
								<p className="contact-note">
									Единый номер для всех филиалов
								</p>
							</div>
						</div>

						<div className="contact-card">
							<div className="contact-card-icon">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<circle cx="12" cy="12" r="10" />
									<polyline points="12 6 12 12 16 14" />
								</svg>
							</div>
							<div className="contact-card-content">
								<h3>Режим работы</h3>
								<p>Пн-Вс: 10:00 — 18:00</p>
								<p className="contact-note">
									Без перерыва и выходных
								</p>
							</div>
						</div>

						<div className="contact-card">
							<div className="contact-card-icon">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
									<circle cx="12" cy="10" r="3" />
								</svg>
							</div>
							<div className="contact-card-content">
								<h3>Адреса</h3>
								<p>ул. Коммуны, 127</p>
								<p>ул. Труда, 174</p>
								<p className="contact-note">г. Челябинск</p>
							</div>
						</div>
					</div>

					<div className="contact-form-wrapper">
						<h2 className="contact-form-title">Напишите нам</h2>
						<p className="contact-form-desc">
							Оставьте заявку и наш специалист свяжется с вами в
							ближайшее время
						</p>
						<form className="contact-form">
							<div className="form-group">
								<label htmlFor="name">Ваше имя</label>
								<input
									type="text"
									id="name"
									placeholder="Введите имя"
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="phone">Телефон</label>
								<input
									type="tel"
									id="phone"
									placeholder="+7 (___) ___-__-__"
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									placeholder="email@example.com"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="message">Сообщение</label>
								<textarea
									id="message"
									rows="4"
									placeholder="Опишите ваш запрос..."
								></textarea>
							</div>
							<button
								type="submit"
								className="btn btn-primary contact-submit"
							>
								Отправить заявку
							</button>
							<p className="form-disclaimer">
								Нажимая кнопку, вы соглашаетесь с политикой
								конфиденциальности
							</p>
						</form>
					</div>
				</div>

				<section className="map-section">
					<h2 className="section-subtitle">Мы на карте</h2>
					<div className="maps-grid">
						<div className="map-card">
							<h3 className="map-title">
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
									<circle cx="12" cy="10" r="3" />
								</svg>
								Филиал на Коммуны
							</h3>
							<div className="map-wrapper">
								<iframe
									src="https://yandex.ru/map-widget/v1/?ll=61.382117%2C55.162139&z=17&pt=61.382117%2C55.162139%2Cpm2rdm"
									width="100%"
									height="300"
									frameBorder="0"
									allowFullScreen
									title="Филиал на Коммуны"
								></iframe>
							</div>
							<div className="map-footer">
								<p className="map-address">
									г. Челябинск, ул. Коммуны, 127
								</p>
								<a
									href="https://yandex.ru/maps/?text=Челябинск%20улица%20Коммуны%20127"
									target="_blank"
									rel="noopener noreferrer"
									className="map-link"
								>
									Открыть в Яндекс Картах
									<svg
										width="14"
										height="14"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
										<polyline points="15 3 21 3 21 9" />
										<line x1="10" y1="14" x2="21" y2="3" />
									</svg>
								</a>
							</div>
						</div>
						<div className="map-card">
							<h3 className="map-title">
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
									<circle cx="12" cy="10" r="3" />
								</svg>
								Филиал на Труда
							</h3>
							<div className="map-wrapper">
								<iframe
									src="https://yandex.ru/map-widget/v1/?ll=61.365696%2C55.171488&z=17&pt=61.365696%2C55.171488%2Cpm2rdm"
									width="100%"
									height="300"
									frameBorder="0"
									allowFullScreen
									title="Филиал на Труда"
								></iframe>
							</div>
							<div className="map-footer">
								<p className="map-address">
									г. Челябинск, ул. Труда, 174
								</p>
								<a
									href="https://yandex.ru/maps/?text=Челябинск%20улица%20Труда%20174"
									target="_blank"
									rel="noopener noreferrer"
									className="map-link"
								>
									Открыть в Яндекс Картах
									<svg
										width="14"
										height="14"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
										<polyline points="15 3 21 3 21 9" />
										<line x1="10" y1="14" x2="21" y2="3" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
