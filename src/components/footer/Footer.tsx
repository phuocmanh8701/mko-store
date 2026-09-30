import Image from "next/image";
import Link from "next/link";
import FormSub from "./FormSub";

const Footer = () => {
    return <>
        <footer className="tf-footer">
            <div className="footer-inner flat-spacing position-relative">
                <div className="br-line fake-class top-0"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="footer-infor d-flex flex-column align-items-start mb-lg-0">
                                <Link href="/" className="logo-site mb-16">
                                    <Image loading="lazy" width="150" height="30" src="/images/logo/logo.svg"
                                        alt="Image" />
                                </Link>
                                <p className="lh-26 cl-text-2">
                                    600 N Michigan Ave, Chicago, IL 60611, USA
                                </p>
                                <Link href="https://www.google.com/maps?q=600+N+Michigan+Ave+Chicago,+IL+60611+USA"
                                    target="_blank" className="text-decoration-underline text-primary lh-26 mb-16">
                                    Open in Maps
                                </Link>
                                <Link href="mailto:hi.amere@gmail.com" className="cl-text-2 link mb-8">
                                    hi.amere@gmail.com
                                </Link>
                                <Link href="tel:3156666688" className="cl-text-2 link mb-16">
                                    315-666-6688
                                </Link>
                                <ul className="tf-social-icon-2">
                                    <li>
                                        <Link href="https://www.facebook.com/" target="_blank">
                                            <i className="icon icon-FacebookLogo"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://x.com/" target="_blank">
                                            <i className="icon icon-XLogo"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.instagram.com/" target="_blank">
                                            <i className="icon icon-InstagramLogo"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.tiktok.com/" target="_blank">
                                            <i className="icon icon-TiktokLogo"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.snapchat.com/" target="_blank">
                                            <i className="icon icon-SnapchatLogo"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-2">
                            <div className="footer-col-block footer-wrap-1 mx-xl-auto">
                                <p className="footer-heading footer-heading-mobile">COMPANY</p>
                                <div className="tf-collapse-content">
                                    <ul className="footer-menu-list">
                                        <li><Link href="about.html" className="cl-text-2 link">About Us</Link></li>
                                        <li><Link href="our-store.html" className="cl-text-2 link">Our Stories</Link></li>
                                        <li><Link href="contact.html" className="cl-text-2 link">Contact us</Link></li>
                                        <li><Link href="blog.html" className="cl-text-2 link">Latest New</Link></li>
                                        <li><Link href="account-page.html" className="cl-text-2 link">My Account</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-2">
                            <div className="footer-col-block footer-wrap-2 mx-xl-auto">
                                <p className="footer-heading footer-heading-mobile">CUSTOMER</p>
                                <div className="tf-collapse-content">
                                    <ul className="footer-menu-list">
                                        <li><Link href="shipping.html" className="cl-text-2 link">Shipping</Link></li>
                                        <li><Link href="return-and-refund.html" className="cl-text-2 link">Return & Refund</Link>
                                        </li>
                                        <li><Link href="privacy-policy.html" className="cl-text-2 link">Privacy Policy</Link></li>
                                        <li><Link href="term-and-condition.html" className="cl-text-2 link">Terms &
                                            Conditions</Link></li>
                                        <li><Link href="faq.html" className="cl-text-2 link">Orders FAQs</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="footer-col-block footer-wrap-3 mb-0">
                                <p className="footer-heading footer-heading-mobile">NEWSLETTER</p>
                                <div className="tf-collapse-content">
                                    <p className="footer-desc cl-text-2">
                                        Subscribe for store updates and discounts.
                                    </p>
                                    <FormSub />
                                    <p className="text-remember cl-text-2">
                                        By clicking subcribe, you agree to the <Link href="term-and-condition" className="text-main link link-underline">
                                            Terms of Service
                                        </Link>
                                        and <Link href="privacy-policy" className="text-main link link-underline">
                                            Privacy Policy
                                        </Link>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="br-line"></div>
                    <div className="inner-bottom">
                        <div className="tf-list list-currenci">
                            <div className="tf-currencies">
                                <select className="tf-dropdown-select style-default type-currencies">
                                    {/* <option selected data-thumbnail="/images/country/us.png">United States (USD $)
                                    </option>
                                    <option data-thumbnail="/images/country/vn.png">Viet Nam (VND ₫)</option> */}
                                </select>
                            </div>
                            <div className="tf-languages">
                                <select className="tf-dropdown-select style-default type-languages">
                                    <option>English</option>
                                    <option>العربية</option>
                                    <option>简体中文</option>
                                    <option>اردو</option>
                                </select>
                            </div>
                        </div>
                        <p className="text-nocopy cl-text-2">
                            ©2026 Amerce. All Rights Reserved.
                        </p>
                        <ul className="tf-list payment-list">
                            <li><Image loading="lazy" width="38" height="24" src="/images/payment/visa.svg"
                                alt="Image" /></li>
                            <li><Image loading="lazy" width="38" height="24" src="/images/payment/master-card.svg"
                                alt="Image" /></li>
                            <li><Image loading="lazy" width="38" height="24" src="/images/payment/amex.svg"
                                alt="Image" /></li>
                            <li><Image loading="lazy" width="38" height="24" src="/images/payment/paypal.svg"
                                alt="Image" /></li>
                            <li><Image loading="lazy" width="38" height="24" src="/images/payment/water.svg"
                                alt="Image" /></li>
                            <li><Image loading="lazy" width="38" height="24" src="/images/payment/discover.svg"
                                alt="Image" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>;
};
export default Footer;