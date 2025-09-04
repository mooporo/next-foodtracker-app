"use client"; // ต้องอยู่บรรทัดแรกสุด

import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

// import รูปจาก app/images
import FoodImage from "./images/food.png";

const HomePage = () => {
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4 text-center">
        <div className="bg-white/20 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl max-w-lg w-full transition-all duration-300 ease-in-out hover:shadow-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-md mb-2 sm:mb-4 animate-fade-in-down">
            Welcome to Food Tracker
          </h1>
          <p className="text-lg md:text-xl font-medium text-white drop-shadow-sm mb-6 animate-fade-in-up">
            Track your meal!!!
          </p>

          {/* Image จาก app/images */}
          <div className="relative w-36 h-36 md:w-48 md:h-48 mx-auto mb-8 transform transition-transform duration-500 ease-in-out hover:scale-110">
            <Image
              src={FoodImage}
              alt="Food Tracker App Logo"
              fill
              style={{ objectFit: "contain" }}
              className="rounded-full"
              priority
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/register">
              <span className="w-full sm:w-auto px-8 py-3 bg-white text-purple-600 font-bold rounded-full shadow-lg transition-all transform hover:scale-105 hover:bg-gray-100 active:scale-95 text-lg">
                Register
              </span>
            </Link>
            <Link href="/login">
              <span className="w-full sm:w-auto px-8 py-3 bg-purple-600 text-white font-bold rounded-full shadow-lg transition-all transform hover:scale-105 hover:bg-purple-700 active:scale-95 text-lg">
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fadeInDown 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards 0.2s; }
      `}</style>
    </Fragment>
  );
};

export default HomePage;
