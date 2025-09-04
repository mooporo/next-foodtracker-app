"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Mock Data
const mockFoods = [
  { id: 1, date: "2025-09-01", image: "/images/food.png", name: "Pasta", meal: "Lunch" },
  { id: 2, date: "2025-09-01", image: "/images/food.png", name: "Salad", meal: "Dinner" },
  { id: 3, date: "2025-09-02", image: "/images/food.png", name: "Burger", meal: "Lunch" },
  { id: 4, date: "2025-09-02", image: "/images/food.png", name: "Pizza", meal: "Dinner" },
  { id: 5, date: "2025-09-03", image: "/images/food.png", name: "Sushi", meal: "Lunch" },
  { id: 6, date: "2025-09-03", image: "/images/food.png", name: "Steak", meal: "Dinner" },
  { id: 7, date: "2025-09-04", image: "/images/food.png", name: "Sandwich", meal: "Lunch" },
  { id: 8, date: "2025-09-04", image: "/images/food.png", name: "Ramen", meal: "Dinner" },
  { id: 9, date: "2025-09-05", image: "/images/food.png", name: "Omelette", meal: "Breakfast" },
  { id: 10, date: "2025-09-05", image: "/images/food.png", name: "Salmon", meal: "Dinner" },
];

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredFoods = mockFoods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);
  const paginatedFoods = filteredFoods.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl">

        {/* Header: Add Food + Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
          <Link
            href="/addfood"
            className="bg-purple-600 text-white px-4 py-2 rounded-xl shadow hover:bg-purple-700 transition font-semibold"
          >
            + Add Food
          </Link>

          <div className="flex w-full md:w-auto">
            <input
              type="text"
              placeholder="Search food..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border rounded-l-xl w-full md:w-64 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            <button
              onClick={() => setCurrentPage(1)}
              className="bg-purple-600 text-white px-4 rounded-r-xl hover:bg-purple-700 transition font-semibold"
            >
              Search
            </button>
          </div>
        </div>

        {/* Food Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-purple-600 text-white">
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Food Name</th>
                <th className="px-4 py-2">Meal</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedFoods.map(food => (
                <tr key={food.id} className="border-b hover:bg-purple-50">
                  <td className="px-4 py-2">{food.date}</td>
                  <td className="px-4 py-2 w-20 h-20 relative">
                    <Image
                      src={food.image}
                      alt={food.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                      unoptimized
                    />
                  </td>
                  <td className="px-4 py-2">{food.name}</td>
                  <td className="px-4 py-2">{food.meal}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition">Edit</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50 hover:bg-gray-400 transition"
          >
            Prev
          </button>
          <span className="font-semibold">{currentPage} / {totalPages}</span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50 hover:bg-gray-400 transition"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}
