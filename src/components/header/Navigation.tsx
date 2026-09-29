import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
    return <>
        <nav className="box-navigation">
            <ul className="box-nav-menu">
                <li className="menu-item position-relative">
                    <Link href="#" className="item-link">
                        <span className="text cus-text">
                            Home
                        </span>
                        <i className="icon icon-CaretDown"></i>
                    </Link>
                    <div className="sub-menu mega-menu_home_v2 home-type_2">
                        <ul className="sub-menu_list">
                            <li>
                                <Link href="index.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Main Demo
                                    </span>
                                    <span className="demo-label type-hot">Hot</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="home-mental.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Home Mental
                                    </span>
                                    <span className="demo-label type-new">New</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="home-electronics.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Home Electronics
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="home-pod.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Home POD
                                    </span>
                                    <span className="demo-label type-new">New</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="home-pet-care.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Home Pet Care
                                    </span>
                                    <span className="demo-label type-trend">Trend</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="home-baby.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Home Baby
                                    </span>
                                    <span className="demo-label type-hot">Hot</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="home-auto.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Home Auto
                                    </span>
                                    <span className="demo-label type-new">New</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="sub-menu_list">
                            <li>
                                <Link href="home-decor.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Home Decor
                                    </span>
                                    <span className="demo-label type-new">New</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="home-cosmetic.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Home Cosmetic
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="home-organic.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Home Organic
                                    </span>
                                    <span className="demo-label type-hot">Hot</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="home-fashion.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Home Fashion
                                    </span>
                                    <span className="demo-label type-trend">Trend</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="home-headphone.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Home Headphone
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="home-jewelry.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Home Jewelry
                                    </span>
                                    <span className="demo-label type-hot">Hot</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="home-garden.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Home Garden
                                    </span>
                                    <span className="demo-label type-new">New</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="sub-menu_list">
                            <li>
                                <Link href="home-construction.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Home Construct
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="home-furniture.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Home Furniture
                                    </span>
                                    <span className="demo-label type-hot">Hot</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="home-fashion-2.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Home Fashion 2
                                    </span>
                                    <span className="demo-label type-trend">Trend</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="home-bag-accessories.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Home Bag
                                    </span>
                                    <span className="demo-label type-new">New</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="home-sport.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Home Sport
                                    </span>
                                    <span className="demo-label type-hot">Hot</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="home-office-equipment.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Home Office
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="home-sneaker.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Home Sneaker
                                    </span>
                                    <span className="demo-label type-trend">Trend</span>
                                </Link>
                            </li>
                        </ul>
                        <div className="image-preview">
                            <Image loading="lazy" width="300" height="264"
                                src="/images/section/amerce-html.jpg" alt="Image" />
                        </div>
                    </div>
                </li>
                <li className="menu-item">
                    <a href="#" className="item-link">
                        <span className="text cus-text">
                            Shop
                        </span>
                        <i className="icon icon-CaretDown"></i>
                    </a>
                    <div className="sub-menu mega-menu">
                        <div className="container-full">
                            <div className="row">
                                <div className="col-2">
                                    <div className="mega-menu-item menu-lv-2">
                                        <p className="menu-heading">SHOP LAYOUT</p>

                                        <ul className="sub-menu_list">
                                            <li>
                                                <a href="shop-default.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Default</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="shop-left-sidebar.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Left Sidebar</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="shop-right-sidebar.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Right Sidebar</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="shop-full-width.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Full Width</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="collection.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Collection List</span>
                                                    <span className="demo-label type-hot">Hot</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="shop-sub-collection.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Sub Collection</span>
                                                    <span className="demo-label type-new">New</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="mega-menu-item menu-lv-2">
                                        <p className="menu-heading">SHOP FEATURE</p>

                                        <ul className="sub-menu_list">
                                            <li>
                                                <a href="shop-default.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Pagination Link</span>
                                                    <span className="demo-label type-trend">Trend</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="shop-load-more-button.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Pagination Loadmore</span>
                                                    <span className="demo-label type-hot">Hot</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="shop-infinity-scroll.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Infinite Scroll</span>
                                                    <span className="demo-label type-new">New</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="shop-filter-sidebar.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Filter Sidebar</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="shop-filter-hidden.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Filter Hidden</span>
                                                    <span className="demo-label type-hot">Hot</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="shop-filter-dropdown.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Filter Dropdown</span>
                                                    <span className="demo-label type-trend">Trend</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="shop-filter-drawer.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Filter Drawer</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="mega-menu-item menu-lv-2">
                                        <p className="menu-heading">PRODUCT HOVER</p>

                                        <ul className="sub-menu_list">
                                            <li>
                                                <a href="shop-hover-01.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Product Style 01</span>
                                                    <span className="demo-label type-hot">Hot</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="shop-hover-02.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Product Style 02</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="shop-hover-03.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Product Style 03</span>
                                                    <span className="demo-label type-new">New</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="shop-hover-04.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Product Style 04</span>
                                                    <span className="demo-label type-trend">Trend</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="shop-hover-05.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Product Style 05</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="shop-hover-06.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Product Style 06</span>
                                                    <span className="demo-label type-hot">Hot</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-2">
                                    <div className="mega-menu-item menu-lv-2">
                                        <p className="menu-heading">MY PAGES</p>
                                        <ul className="sub-menu_list">
                                            <li>
                                                <a href="wishlist.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">Wish List</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="search-result.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Search Result</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="view-cart.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">View Cart</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="login.html" className="sub-menu_link has-text">
                                                    <span className="cus-text">Login/Register</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="forget-password.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Forget Password</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="track-order.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Order Tracking</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="account-page.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">My Account</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="box-image_v01 h-100">
                                        <Link href="shop-default.html" className="box-image_img img-style">
                                            <Image loading="lazy" width="700" height="461"
                                                src="/images/collection/cls-7.jpg" alt="Image" />
                                        </Link>

                                        <div className="box-image_content">
                                            <a href="shop-default.html"
                                                className="title h3 fw-medium text-white link-underline-white text-decoration-thickness">
                                                Shop Men
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="menu-item">
                    <a href="#" className="item-link">
                        <span className="text cus-text">
                            Product
                        </span>
                        <i className="icon icon-CaretDown"></i>
                    </a>
                    <div className="sub-menu mega-menu">
                        <div className="container-full">
                            <div className="row">
                                <div className="col-2 ms-auto">
                                    <div className="mega-menu-item menu-lv-2">
                                        <p className="menu-heading">PRODUCT LAYOUT</p>

                                        <ul className="sub-menu_list">
                                            <li>
                                                <a href="product-detail.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Product Default</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-right-thumbnail.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Right Thumbnail</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-bottom-thumbnail.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Bottom Thumbnail</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-grid.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Product Grid</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-grid-2.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Product Grid 2</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-stacked.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Product Stacked</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-description-accordion.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Description Accordion</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-description-list.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Description List</span>
                                                    <span className="demo-label type-new">New</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-description-vertical.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Description Vertical</span>
                                                    <span className="demo-label type-trend">Trend</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-drawer-sidebar.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Drawer Sidebar</span>
                                                    <span className="demo-label type-hot">Hot</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-gift-card.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Gift Cart</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="mega-menu-item menu-lv-2">
                                        <p className="menu-heading">PRODUCT DETAIL</p>

                                        <ul className="sub-menu_list">
                                            <li>
                                                <a href="product-inner-zoom.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Inner Zoom</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-inner-circle-zoom.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Inner Circle Zoom</span>
                                                    <span className="demo-label type-trend">Trend</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-no-zoom.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">No Zoom</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-external-zoom.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">External Zoom</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-open-lightbox.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Open Lightbox</span>
                                                    <span className="demo-label type-new">New</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-video.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Product Video</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-3d.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Product 3D/AR</span>
                                                    <span className="demo-label type-hot">Hot</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-group.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Product Group</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-affiliate.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Product Affiliate</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-out-of-stock.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Out Of Stock</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-sticky-add-to-cart.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Sticky Add To Cart</span>
                                                    <span className="demo-label type-new">New</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="mega-menu-item menu-lv-2">
                                        <p className="menu-heading">PRODUCT FEATURE</p>

                                        <ul className="sub-menu_list">
                                            <li>
                                                <a href="product-together.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Buy Together</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-together-2.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Buy Together 2</span>
                                                    <span className="demo-label type-new">New</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-countdown-timer.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Countdown Timer</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-volume-discount-thumbnail.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Discount Thumbnail</span>
                                                    <span className="demo-label type-new">New</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-available.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Pickup Avaiable</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-pre-order.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Pre Order</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-deals.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Deals</span>
                                                    <span className="demo-label type-trend">Trend</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-customer-note.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Customer Note</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-buyX-getY.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Buy X Get Y</span>
                                                    <span className="demo-label type-hot">Hot</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-vendor-logo.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Vendor Logo</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-real-time-visitor.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Real Time Visitor</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="mega-menu-item menu-lv-2">
                                        <p className="menu-heading">PRODUCT SWATCH</p>

                                        <ul className="sub-menu_list">
                                            <li>
                                                <a href="product-swatch-color.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Swatch Color</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-swatch-image.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Swatch Image</span>
                                                    <span className="demo-label type-new">New</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-swatch-rounded.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Swatch Rounded</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-swatch-radio.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Swatch Radio</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-swatch-rounded-color.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Rounded Color</span>
                                                    <span className="demo-label type-hot">Hot</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-swatch-rounded-image.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Rounded Image</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-swatch-dropdown.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Dropdown</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-swatch-dropdown-color.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Dropdown Color</span>
                                                    <span className="demo-label type-trend">Trend</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-variant-image-group.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Variant Image Group</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-advanced-types.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Advanced Type</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="product-subscription.html"
                                                    className="sub-menu_link has-text">
                                                    <span className="cus-text">Subcription</span>
                                                    <span className="demo-label type-hot">Hot</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-4 me-auto">
                                    {/* Product */}
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="menu-item position-relative">
                    <a href="#" className="item-link">
                        <span className="text cus-text">
                            Blog
                        </span>
                        <i className="icon icon-CaretDown"></i>
                    </a>
                    <div className="sub-menu mega-menu-item">
                        <ul className="sub-menu_list">
                            <li>
                                <a href="blog.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Blog
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="blog-single.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Blog Single
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="menu-item position-relative">
                    <a href="#" className="item-link">
                        <span className="text cus-text">
                            Pages
                        </span>
                        <i className="icon icon-CaretDown"></i>
                    </a>
                    <div className="sub-menu mega-menu-item">
                        <ul className="sub-menu_list">
                            <li>
                                <a href="about.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        About Us
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="contact.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Contact Us
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="our-store.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Our Store
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="invoice.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Invoice
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="404.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        404
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="compare.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Compare
                                    </span>
                                </a>
                            </li>
                            <li className="has-menu-lv2">
                                <a href="#" className="menu-heading-lv2 sub-menu_link has-text">
                                    <span className="cus-text">
                                        My Account
                                    </span>
                                    <i className="icon icon-CaretRightThin"></i>
                                </a>
                                <div className="sub-menu-lv2">
                                    <ul className="sub-menu_list">
                                        <li><a href="account-page.html" className="sub-menu_link has-text">
                                            <span className="cus-text">
                                                My Account
                                            </span>
                                        </a>
                                        </li>
                                        <li><a href="account-orders.html"
                                            className="sub-menu_link has-text">
                                            <span className="cus-text">
                                                My Order
                                            </span>
                                        </a>
                                        </li>
                                        <li><a href="account-addresses.html"
                                            className="sub-menu_link has-text">
                                            <span className="cus-text">
                                                My Addresses
                                            </span>
                                        </a>
                                        </li>
                                        <li><a href="account-setting.html"
                                            className="sub-menu_link has-text">
                                            <span className="cus-text">
                                                My Setting
                                            </span>
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="before-you-leave.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Before You Leave
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="thank-you.html" className="sub-menu_link has-text">
                                    <span className="cus-text">
                                        Thank You
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    </>;
}

export default Navigation;