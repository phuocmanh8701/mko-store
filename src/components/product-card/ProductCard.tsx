"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { useContextElement } from "@/contexts/Context";
import type { Product } from "@/data/products";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const [currentImage, setCurrentImage] = useState(
        product?.imgSrc || "",
    );

    const [activeColor, setActiveColor] = useState(
        product?.colors?.find((color) => color.active)?.name || "",
    );

    const {
        addToWishlist,
        removeFromWishlist,
        isAddedtoWishlist,
    } = useContextElement();

    const isWishlist = isAddedtoWishlist(product);

    const handleWishlist = () => {
        if (isWishlist) {
            removeFromWishlist(product);
        } else {
            addToWishlist(product);
        }
    };

    const colors = product?.colors || [];

    return (
        <div className="card-product">
            <div className="card-product_wrapper">
                <Link
                    href={`/product/${product.id}`}
                    className="product-img"
                >
                    {currentImage ? (
                        <Image
                            className="img-product"
                            width={330}
                            height={440}
                            src={currentImage}
                            alt="Image"
                        />
                    ) : null}

                    {product?.imgHover ? (
                        <Image
                            className="img-hover"
                            width={330}
                            height={440}
                            src={product.imgHover}
                            alt="Image"
                        />
                    ) : null}
                </Link>

                <ul className="product-action_list">
                    <li
                        className={`wishlist ${isWishlist ? "active" : ""
                            }`}
                    >
                        <button
                            type="button"
                            className="hover-tooltip tooltip-left box-icon"
                            onClick={handleWishlist}
                        >
                            <span
                                className={`icon ${isWishlist
                                    ? "icon-trash"
                                    : "icon-heart"
                                    }`}
                            ></span>

                            <span className="tooltip">
                                {isWishlist
                                    ? "Remove Wishlist"
                                    : "Add to Wishlist"}
                            </span>
                        </button>
                    </li>

                    <li className="compare">
                        <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip tooltip-left box-icon"
                        >
                            <span className="icon icon-ArrowsLeftRight"></span>
                            <span className="tooltip">
                                Compare
                            </span>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#quickView"
                            data-bs-toggle="offcanvas"
                            className="hover-tooltip tooltip-left box-icon"
                        >
                            <span className="icon icon-Eye"></span>
                            <span className="tooltip">
                                Quick view
                            </span>
                        </a>
                    </li>
                </ul>

                {product?.badges?.length > 0 && (
                    <ul className="product-badge_list">
                        {product.badges.map((badge, index) => (
                            <li
                                key={`${badge.type}-${index}`}
                                className={`product-badge_item text-caption-01 ${badge.type.toLowerCase()}`}
                            >
                                {badge.text}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="product-action_bot">
                    <a
                        href="#quickAdd"
                        data-bs-toggle="modal"
                        className="tf-btn btn-white small w-100"
                    >
                        Quick Add
                    </a>
                </div>
            </div>

            <div className="card-product_info">
                <Link
                    href={`/product/${product.id}`}
                    className="name-product lh-24 fw-medium link-underline-text"
                >
                    {product.name}
                </Link>

                <div className="star-wrap d-flex align-items-center">
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                    <i className="icon icon-Star"></i>
                </div>

                <div className="price-wrap">
                    {typeof product.price === "number" && (
                        <span className="price-new text-primary fw-semibold">
                            ${product.price.toFixed(2)}
                        </span>
                    )}

                    {typeof product.oldPrice === "number" && product.oldPrice > 0 && (
                        <span className="price-old text-caption-01 cl-text-3">
                            ${product.oldPrice.toFixed(2)}
                        </span>
                    )}
                </div>

                {colors.length > 0 && (
                    <ul className="product-color_list">
                        {colors.map((color) => (
                            <li
                                key={color.name}
                                className={`product-color-item color-swatch hover-tooltip tooltip-bot ${activeColor === color.name
                                    ? "active"
                                    : ""
                                    }`}
                                onMouseEnter={() => {
                                    if (color.image) {
                                        setCurrentImage(color.image);
                                    }

                                    setActiveColor(color.name);
                                }}
                            >
                                <span className="tooltip color-filter">
                                    {color.name}
                                </span>

                                <span
                                    className={`swatch-value ${color.value}`}
                                ></span>

                                {color.image ? (
                                    <Image
                                        src={color.image}
                                        width={330}
                                        height={440}
                                        alt={color.name}
                                    />
                                ) : null}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}