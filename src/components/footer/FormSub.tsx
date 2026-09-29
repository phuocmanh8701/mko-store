"use client";

import { FormEvent, useState } from "react";

export default function FormSub() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState<"success" | "error" | "">("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email) {
            setMessage("Please enter your email.");
            setMessageType("error");
            return;
        }

        try {
            setLoading(true);
            setMessage("");
            setMessageType("");

            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                }),
            });

            const data = await response.json();
            // console.log("Email Request here:", email);

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong.");
            }

            setMessage(data.message);
            setMessageType(data.success ? "success" : "error");
            if (data.success) {
                setEmail("");
            }
        } catch (error) {
            setMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong.",
            );
            setMessageType("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form className="form-sub" onSubmit={handleSubmit}>
                <fieldset>
                    <input
                        type="email"
                        placeholder="Enter your e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                        required
                    />
                </fieldset>

                <button
                    type="submit"
                    className="btn-action"
                    disabled={loading}
                >
                    <i className="icon icon-ArrowUpRight" />
                </button>
            </form>
            {message && (<p className={`form-msg text-caption-01 ${messageType === "success" ? "msg-success" : "msg-error"}`} > {message} </p>)}
        </>
    );
}