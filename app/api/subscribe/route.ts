import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Email is required.",
                },
                {
                    status: 400,
                },
            );
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please enter a valid email.",
                },
                {
                    status: 400,
                },
            );
        }

        // Fake save data
        console.log("New subscriber:", email);

        return NextResponse.json(
            {
                success: true,
                message: "Thank you for subscribing!",
                data: {
                    email,
                },
            },
            {
                status: 201,
            },
        );
    } catch (error) {
        console.error("Subscribe API error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong.",
            },
            {
                status: 500,
            },
        );
    }
}