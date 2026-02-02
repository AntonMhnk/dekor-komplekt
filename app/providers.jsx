"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
	const [items, setItems] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [mounted, setMounted] = useState(false);

	// Загружаем корзину из localStorage после монтирования
	useEffect(() => {
		setMounted(true);
		const saved = localStorage.getItem("cart");
		if (saved) {
			setItems(JSON.parse(saved));
		}
	}, []);

	// Сохраняем корзину в localStorage
	useEffect(() => {
		if (mounted) {
			localStorage.setItem("cart", JSON.stringify(items));
		}
	}, [items, mounted]);

	const addItem = (product, quantity = 1) => {
		setItems((prev) => {
			const existing = prev.find((item) => item.id === product.id);
			if (existing) {
				return prev.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + quantity }
						: item,
				);
			}
			return [...prev, { ...product, quantity }];
		});
	};

	const removeItem = (productId) => {
		setItems((prev) => prev.filter((item) => item.id !== productId));
	};

	const updateQuantity = (productId, quantity) => {
		if (quantity <= 0) {
			removeItem(productId);
			return;
		}
		setItems((prev) =>
			prev.map((item) =>
				item.id === productId ? { ...item, quantity } : item,
			),
		);
	};

	const clearCart = () => {
		setItems([]);
	};

	const openCart = () => setIsOpen(true);
	const closeCart = () => setIsOpen(false);
	const toggleCart = () => setIsOpen((prev) => !prev);

	const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
	const totalPrice = items.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);

	return (
		<CartContext.Provider
			value={{
				items,
				isOpen,
				addItem,
				removeItem,
				updateQuantity,
				clearCart,
				openCart,
				closeCart,
				toggleCart,
				totalItems,
				totalPrice,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
}
