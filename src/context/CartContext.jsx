import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	const addToCart = (test) => {
		setCart((currentCart) => {
			const alreadyExists = currentCart.some((item) => item.id === test.id);

			if (alreadyExists) {
				return currentCart;
			}

			return [...currentCart, test];
		});
	};

	const removeFromCart = (id) => {
		setCart((currentCart) => currentCart.filter((item) => item.id !== id));
	};

	const clearCart = () => {
		setCart([]);
	};

	const isInCart = (id) => {
		return cart.some((item) => item.id === id);
	};

	const cartTotal = cart.reduce(
		(total, test) => total + Number(test.price || 0),
		0,
	);

	const cartCount = cart.length;

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				clearCart,
				isInCart,
				cartTotal,
				cartCount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);

	if (!context) {
		throw new Error("useCart must be used inside CartProvider");
	}

	return context;
}
