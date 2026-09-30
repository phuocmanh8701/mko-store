import ProductCard from "@/components/product-card/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";

export default function ShopDefault() {
    return (
        <>
            <div className="section-page-title text-center flat-spacing-2 pb-0">
                <div className="container">
                    <div className="main-page-title">
                        <div className="breadcrumbs">
                            <Link href="/" className="text-caption-01 cl-text-3 link">
                                Home
                            </Link>
                            <i className="icon icon-CaretRightThin cl-text-3"></i>
                            <p className="text-caption-01">Shop Default</p>
                        </div>
                        <h3 className="letter-space-0">Shop Default</h3>
                        <p className="text-body-1 cl-text-2">
                            Step into our Tops & Shirts Collection, where elegance meets confidence in styles <br />
                            that inspire every moment.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flat-spacing">
                <div className="container">
                    <div className="tf-grid-layout tf-col-4">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
