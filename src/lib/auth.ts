import { User } from "@/types/auth";

export const users: User[] = [
  {
    id: "admin",
    name: "admin",
    email: "admin@mko.com",
    password: "123456",
    role: "admin",
  },
  {
    id: "user_001",
    name: "Test 1",
    email: "test1@mko.com",
    password: "123456",
    role: "customer",
  },
  {
    id: "user_002",
    name: "Test 2",
    email: "test2@mko.com",
    password: "123456",
    role: "customer",
  },
];