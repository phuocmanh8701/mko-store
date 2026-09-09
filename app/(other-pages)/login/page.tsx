"use client";
import { FormEvent, useState } from "react";
import Link from "next/link";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                setError(result.message);
                return;
            }

            console.log("Login success:", result);
        } catch (error) {
            console.error(error);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="section-page-title text-center flat-spacing-2 pb-0">
                <div className="container">
                    <div className="main-page-title">
                        <div className="breadcrumbs">
                            <a href="index.html" className="text-caption-01 cl-text-3 link">
                                Home
                            </a>
                            <i className="icon icon-CaretRightThin cl-text-3"></i>
                            <p className="text-caption-01">Login</p>
                        </div>
                        <h3 className="letter-space-0">Login</h3>
                        <p className="text-body-1 cl-text-2">
                            Sign in to access your personalized experience.
                        </p>
                    </div>
                </div>
            </div>

            <section className="section-log flat-spacing">
                <div className="container">
                    <div className="row align-items-center gy-30">
                        <div className="col-md-5 ms-auto">
                            <div className="col-left">
                                <h4 className="title mb-20">Login</h4>
                                <form onSubmit={handleSubmit} className="form-log">
                                    <div className="form-content">
                                        <fieldset className="tf-field">
                                            <label
                                                htmlFor="user-name-log-2"
                                                className="tf-lable fw-medium"
                                            >
                                                Email address
                                                <span className="text-primary">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="user-name-log-2"
                                                placeholder="Email address*"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </fieldset>
                                        <fieldset className="tf-field password-wrapper">
                                            <label
                                                htmlFor="pass-log-2"
                                                className="tf-lable fw-medium"
                                            >
                                                Password
                                                <span className="text-primary">*</span>
                                            </label>
                                            <div className="password-wrapper w-100">
                                                <span className="toggle-pass icon-EyeSlash fs-20 cl-text-3"></span>
                                                <input
                                                    className="password-field"
                                                    type="password"
                                                    id="pass-log-2"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                        </fieldset>
                                        <fieldset className="field-bottom">
                                            <div className="checkbox-wrap">
                                                <input
                                                    className="tf-check style-2"
                                                    type="checkbox"
                                                    id="remember-2"
                                                />
                                                <label htmlFor="remember-2">Remember me</label>
                                            </div>
                                            <a
                                                href="forget-password.html"
                                                className="link text-decoration-underline"
                                            >
                                                <span className="text-caption-01 fw-semibold">
                                                    Forgot Your Password?
                                                </span>
                                            </a>
                                        </fieldset>
                                    </div>

                                    {error && <p className="text-primary mb-16">{error}</p>}
                                    <button
                                        type="submit"
                                        className="tf-btn animate-btn"
                                        disabled={loading}
                                    >
                                        {loading ? "Logging in..." : "Login"}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5 me-auto">
                            <div className="col-right">
                                <h4 className="mb-8">New Customer</h4>
                                <p className="cl-text-2 mb-20">
                                    Be part of our growing family of new customers! Join us today
                                    and unlock a world of exclusive benefits, offers, and
                                    personalized experiences.
                                </p>
                                <Link href="register" className="tf-btn animate-btn">
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
