"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ตัวอย่าง: หลัง login สำเร็จ ไปหน้า dashboard
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 relative">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h1>

        <form className="space-y-4" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
              required
              autoComplete="email"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
              required
              autoComplete="current-password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-xl font-medium hover:bg-indigo-600 transition"
          >
            Login
          </button>
        </form>

        {/* Register link */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-indigo-500 font-semibold hover:underline">
            Register here
          </Link>
        </p>

        {/* Back to Home */}
        <div className="mt-4 text-center">
          <Link
            href="/"
            className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-300 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
