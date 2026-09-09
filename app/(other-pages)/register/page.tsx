"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");

        // Check password
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                setError(result.message);
                return;
            }

            console.log("Register success:", result);
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
                                <h4 className="title mb-20">Create Account</h4>
                                <form onSubmit={handleSubmit} className="form-log">
                                    <div className="form-content">
                                        <fieldset className="tf-field">
                                            <label
                                                htmlFor="username-register_2"
                                                className="tf-lable fw-medium"
                                            >
                                                Username
                                                <span className="text-primary">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="username-register_2"
                                                placeholder="Username*"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </fieldset>
                                        <fieldset className="tf-field">
                                            <label
                                                htmlFor="email-register_2"
                                                className="tf-lable fw-medium"
                                            >
                                                Email
                                                <span className="text-primary">*</span>
                                            </label>

                                            <input
                                                type="email"
                                                id="email-register_2"
                                                placeholder="Email*"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </fieldset>
                                        <fieldset className="tf-field password-wrapper">
                                            <label
                                                htmlFor="password-register_2"
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
                                                    id="password-register_2"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                        </fieldset>
                                        <fieldset className="tf-field password-wrapper">
                                            <label
                                                htmlFor="re_password-register_2"
                                                className="tf-lable fw-medium"
                                            >
                                                Confirm Password
                                                <span className="text-primary">*</span>
                                            </label>
                                            <div className="password-wrapper w-100">
                                                <span className="toggle-pass icon-EyeSlash fs-20 cl-text-3"></span>
                                                <input
                                                    className="password-field"
                                                    type="password"
                                                    id="re_password-register_2"
                                                    placeholder="Confirm Password"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                />
                                            </div>
                                        </fieldset>
                                    </div>
                                    {error && <p className="text-primary mb-16">{error}</p>}
                                    <button
                                        type="submit"
                                        className="action-create-account tf-btn animate-btn"
                                        disabled={loading}
                                    >
                                        {loading ? "Creating..." : "Create Account"}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5 me-auto">
                            <div className="col-right">
                                <h4 className="mb-8">Already have an account?</h4>
                                <p className="cl-text-2 mb-20">
                                    Welcome back. Sign in to access your personalized experience,
                                    saved preferences, and more. Were thrilled to have you with us
                                    again!
                                </p>
                                <Link href="login" className="tf-btn animate-btn">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
