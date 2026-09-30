"use client";

import Link from "next/link";

import ProductCard from "../product-card/ProductCard";
import { useContextElement } from "@/contexts/Context";

export default function Wishlist() {
    const { wishList } = useContextElement();

    return (
        <>
            {wishList.length > 0 ? (
                <div className="tf-grid-layout tf-col-2 md-col-3 xl-col-4">
                    {wishList.map((product, i) => (
                        <ProductCard
                            key={i}
                            product={product}
                        />
                    ))}
                </div>
            ) : (
                <div className="tf-wishlist-empty text-center wd-full">
                    <p className="text-notice cl-text-2 mb-20">No products were added to the wishlist.</p>
                    <Link href="/shop-default" className="tf-btn animate-btn">Back To Shopping</Link>
                </div>
            )}
        </>
    );
}