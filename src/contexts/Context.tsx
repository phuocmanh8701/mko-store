"use client";

import { allProducts } from "@/data/products";
import React, {
    createContext,
    type ReactNode,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

type Product = (typeof allProducts)[number];

type CartProduct = Product & {
    quantity: number;
};

type ContextProps = {
    children: ReactNode;
};

type ContextType = {
    cartProducts: CartProduct[];
    setCartProducts: React.Dispatch<React.SetStateAction<CartProduct[]>>;

    totalPrice: number;

    addProductToCart: (id: Product["id"], qty?: number) => void;
    isAddedToCartProducts: (id: Product["id"]) => boolean;
    removeProductFromCart: (id: Product["id"]) => void;

    removeFromWishlist: (product: Product) => void;
    addToWishlist: (product: Product) => void;
    isAddedtoWishlist: (product: Product) => boolean;

    quickViewItem: Product | null;
    setQuickViewItem: React.Dispatch<React.SetStateAction<Product | null>>;

    quickAddItem: Product | null;
    setQuickAddItem: React.Dispatch<React.SetStateAction<Product | null>>;

    addToCompareItem: (product: Product) => void;
    isAddedtoCompareItem: (product: Product) => boolean;
    removeFromCompareItem: (product: Product) => void;

    compareItem: Product[];
    setCompareItem: React.Dispatch<React.SetStateAction<Product[]>>;

    updateQuantity: (id: Product["id"], qty: number) => void;
    quantityInCart: (id: Product["id"]) => number;

    wishList: Product[];
};

const dataContext = createContext<ContextType | undefined>(undefined);

export const useContextElement = () => {
    const context = useContext(dataContext);

    if (!context) {
        throw new Error("useContextElement must be used within a Context provider");
    }

    return context;
};

export default function Context({ children }: ContextProps) {
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
    const [wishList, setWishList] = useState<Product[]>([]);
    const [compareItem, setCompareItem] = useState<Product[]>([]);

    const [quickViewItem, setQuickViewItem] = useState<Product | null>(null);
    const [quickAddItem, setQuickAddItem] = useState<Product | null>(null);

    const [isHydrated, setIsHydrated] = useState(false);

    /**
     * Load data from localStorage
     */
    useEffect(() => {
        const loadStoredData = () => {
            try {
                const storedCart = JSON.parse(
                    localStorage.getItem("cartList") || "[]"
                );

                const storedWish = JSON.parse(
                    localStorage.getItem("wishlist") || "[]"
                );

                const storedCompare = JSON.parse(
                    localStorage.getItem("compareList") || "[]"
                );

                setCartProducts(
                    Array.isArray(storedCart) ? storedCart : []
                );

                setWishList(
                    Array.isArray(storedWish) ? storedWish : []
                );

                setCompareItem(
                    Array.isArray(storedCompare) ? storedCompare : []
                );
            } catch {
                setCartProducts([]);
                setWishList([]);
                setCompareItem([]);
            } finally {
                setIsHydrated(true);
            }
        };

        const frame = requestAnimationFrame(loadStoredData);

        return () => {
            cancelAnimationFrame(frame);
        };
    }, []);

    /**
     * Save data to localStorage
     */
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (!isHydrated) return;

        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            localStorage.setItem(
                "cartList",
                JSON.stringify(cartProducts)
            );

            localStorage.setItem(
                "wishlist",
                JSON.stringify(wishList)
            );

            localStorage.setItem(
                "compareList",
                JSON.stringify(compareItem)
            );
        }, 300);

        return () => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
        };
    }, [
        cartProducts,
        wishList,
        compareItem,
        isHydrated,
    ]);

    /**
     * Calculate total price
     */
    const totalPrice = useMemo(() => {
        return cartProducts.reduce(
            (acc, product) =>
                acc + product.quantity * product.price,
            0
        );
    }, [cartProducts]);

    /**
     * Cart
     */
    const isAddedToCartProducts = (
        id: Product["id"]
    ) => {
        return cartProducts.some(
            (product) => product.id === id
        );
    };

    const addProductToCart = (
        id: Product["id"],
        qty = 1
    ) => {
        setCartProducts((prev) => {
            const exists = prev.some(
                (product) => product.id === id
            );

            if (exists) {
                return prev;
            }

            const product = allProducts.find(
                (product) => product.id == id
            );

            if (!product) {
                return prev;
            }

            const item: CartProduct = {
                ...product,
                quantity: qty,
            };

            return [...prev, item];
        });
    };

    const removeProductFromCart = (
        id: Product["id"]
    ) => {
        setCartProducts((prev) =>
            prev.filter(
                (product) => product.id !== id
            )
        );
    };

    const updateQuantity = (
        id: Product["id"],
        qty: number
    ) => {
        if (qty < 1) {
            return;
        }

        setCartProducts((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: qty,
                    }
                    : item
            )
        );
    };

    const quantityInCart = (
        id: Product["id"]
    ) => {
        const item = cartProducts.find(
            (product) => product.id === id
        );

        return item ? item.quantity : 0;
    };

    /**
     * Wishlist
     */
    const addToWishlist = (product: Product) => {
        setWishList((prev) => {
            const exists = prev.some(
                (item) => item.id === product.id
            );

            if (exists) {
                return prev;
            }

            return [...prev, product];
        });
    };

    const removeFromWishlist = (product: Product) => {
        setWishList((prev) =>
            prev.filter((item) => item.id !== product.id)
        );
    };

    const isAddedtoWishlist = (product: Product) => {
        return wishList.some(
            (item) => item.id === product.id
        );
    };

    /**
     * Compare
     */
    const addToCompareItem = (
        product: Product
    ) => {
        setCompareItem((prev) =>
            prev.includes(product)
                ? prev
                : [...prev, product]
        );
    };

    const removeFromCompareItem = (
        product: Product
    ) => {
        setCompareItem((prev) =>
            prev.filter(
                (item) => item !== product
            )
        );
    };

    const isAddedtoCompareItem = (
        product: Product
    ) => {
        return compareItem.includes(product);
    };

    /**
     * Context value
     */
    const contextElement = useMemo<ContextType>(
        () => ({
            cartProducts,
            setCartProducts,

            totalPrice,

            addProductToCart,
            isAddedToCartProducts,
            removeProductFromCart,

            removeFromWishlist,
            addToWishlist,
            isAddedtoWishlist,

            quickViewItem,
            setQuickViewItem,

            quickAddItem,
            setQuickAddItem,

            addToCompareItem,
            isAddedtoCompareItem,
            removeFromCompareItem,

            compareItem,
            setCompareItem,

            updateQuantity,
            quantityInCart,

            wishList,
        }),
        [
            cartProducts,
            totalPrice,
            wishList,
            compareItem,
            quickViewItem,
            quickAddItem,
        ]
    );

    return (
        <dataContext.Provider value={contextElement}>
            {children}
        </dataContext.Provider>
    );
}