"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">My_React_App</h1>
            <ul className="flex gap-6">
                <li>
                    <Link href="/" className="hover:text-gray-400">Home</Link>
                </li>
                <li>
                    <Link href="/login" className="hover:text-gray-400">Login</Link>
                </li>
                <li>
                    <Link href="/about" className="hover:text-gray-400">About</Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:text-gray-400">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
