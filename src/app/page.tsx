"use client";

import { useState } from "react";
import QuizComponent from "@/components/QuizComponent";
import FlashCards from "@/components/FlashCards";
import InteractiveLesson from "@/components/InteractiveLesson";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"lessons" | "quiz" | "flashcards">("lessons");

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-indigo-600">📚 交互式教学平台</h1>
          <p className="text-gray-600 mt-2">让学习变得更有趣、更高效</p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("lessons")}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                activeTab === "lessons"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              📖 互动课程
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                activeTab === "quiz"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              ✏️ 测验练习
            </button>
            <button
              onClick={() => setActiveTab("flashcards")}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                activeTab === "flashcards"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              🃏 记忆卡片
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === "lessons" && <InteractiveLesson />}
        {activeTab === "quiz" && <QuizComponent />}
        {activeTab === "flashcards" && <FlashCards />}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-500">
          <p>© 2024 交互式教学平台 | 让学习更有趣 🎯</p>
        </div>
      </footer>
    </main>
  );
}
