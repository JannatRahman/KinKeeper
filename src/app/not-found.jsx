"use client";
import Link from "next/link";


export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300">
      <div className="relative text-center bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-10 max-w-md">
        {/* Animated 404 */}
        

        <h2 className="text-2xl font-semibold mt-4 text-gray-700">
          Oops! Page Not Found 💔
        </h2>

        <p className="text-gray-600 mt-2">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-pink-500 text-white font-medium rounded-full shadow-md hover:bg-pink-600 transition"
          >
            Go Back Home 🏠
          </Link>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-400 rounded-full opacity-30 blur-2xl"></div>
      </div>
    </div>
  );
}

// 👉 Save this file as: app/not-found.jsx (Next.js App Router)
// Next.js will automatically use it for 404 pages
