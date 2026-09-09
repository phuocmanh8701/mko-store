import { NextResponse } from "next/server";
import { users } from "@/lib/auth";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { email, password } = body;

        // 1. Validate
        if (!email || !password) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Email and password are required",
                },
                { status: 400 }
            );
        }

        // 2. Find user
        const user = users.find(
            (user) => user.email.toLowerCase() === email.toLowerCase()
        );

        // 3. Check email + password
        if (!user || user.password !== password) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid email or password",
                },
                { status: 401 }
            );
        }

        // 4. Không trả password về client
        const { password: _, ...userData } = user;

        // 5. Response
        return NextResponse.json(
            {
                success: true,
                message: "Login successfully",
                data: {
                    user: userData,
                },
            },
            { status: 200 }
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