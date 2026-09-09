import { NextResponse } from "next/server";
import { users } from "@/lib/auth";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { name, email, password } = body;

        // Validate
        if (!name || !email || !password) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Name, email and password are required",
                },
                { status: 400 }
            );
        }

        // Check email
        const existingUser = users.find(
            (user) => user.email.toLowerCase() === email.toLowerCase()
        );

        if (existingUser) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Email already exists",
                },
                { status: 409 }
            );
        }

        // Create user
        const newUser = {
            id: `user_${Date.now()}`,
            name,
            email,
            password,
            role: "customer" as const,
        };

        users.push(newUser);

        // Không trả password
        const { password: _, ...userData } = newUser;

        return NextResponse.json(
            {
                success: true,
                message: "Register successfully",
                data: {
                    user: userData,
                },
            },
            { status: 201 }
        );
    } catch {
        return NextResponse.json(
            {
                success: false,
                message: "Invalid request body",
            },
            { status: 400 }
        );
    }
}