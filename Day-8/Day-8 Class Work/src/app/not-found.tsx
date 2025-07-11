"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 text-center p-8">
            <h1 className="text-8xl font-extrabold text-red-600 mb-6 drop-shadow-lg">
                404
            </h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
                Page Not Found
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mb-8">
                Sorry! The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <button
                onClick={() => router.push("/")}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
            >
                Go Back to Home
            </button>
        </div>
    );
}
