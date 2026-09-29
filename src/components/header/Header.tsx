import Image from "next/image";
import Navigation from "./Navigation";
import Link from "next/link";

const Header = () => {
    return <>
        <header className="tf-header">
            <div className="br-line fake-class bottom-0"></div>
            <div className="container-full">
                <div className="header-inner">
                    <div className="box-open-menu-mobile d-xl-none">
                        <a href="#mobileMenu" data-bs-toggle="offcanvas" className="btn-open-menu">
                            <i className="icon icon-List"></i>
                        </a>
                    </div>
                    <div className="header-left">
                        <Link href="/" className="logo-site">
                            <Image loading="lazy" width="150" height="30" src="/images/logo/logo.svg" alt="Image" />
                        </Link>
                    </div>
                    <div className="header-center d-none d-xl-block">
                        <Navigation />
                    </div>
                    <div className="header-right">
                        <ul className="nav-icon-list">
                            <li className="d-none d-sm-block">
                                <a href="#search" data-bs-toggle="modal" className="nav-icon-item link">
                                    <i className="icon icon-MagnifyingGlass"></i>
                                </a>
                            </li>
                            <li>
                                <Link href="login" data-bs-toggle="modal" className="nav-icon-item link">
                                    <i className="icon icon-User"></i>
                                </Link>
                            </li>
                            <li className="d-none d-sm-block">
                                <Link href="wishlist" className="nav-icon-item link">
                                    <i className="icon icon-HeartStraight"></i>
                                </Link>
                            </li>
                            <li>
                                <a href="#shoppingCart" data-bs-toggle="offcanvas" className="nav-icon-item link shop-cart">
                                    <i className="icon icon-Handbag"></i>
                                    <span className="count">
                                        12
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </>;
};

export default Header;