"use client";

import { useState } from "react";

interface LessonStep {
  id: number;
  title: string;
  content: string;
  interactive: boolean;
  question?: string;
  options?: string[];
  correctAnswer?: number;
  explanation?: string;
}

const lessons: LessonStep[] = [
  {
    id: 1,
    title: "什么是光合作用？",
    content: "光合作用是植物利用阳光将二氧化碳和水转化为葡萄糖和氧气的过程。这是地球上最重要的化学反应之一！",
    interactive: false,
  },
  {
    id: 2,
    title: "光合作用的公式",
    content: "让我们来学习光合作用的化学方程式。",
    interactive: true,
    question: "光合作用的正确公式是？",
    options: [
      "CO₂ + H₂O → C₆H₁₂O₆ + O₂",
      "O₂ + H₂O → CO₂ + C₆H₁₂O₆",
      "CO₂ + O₂ → C₆H₁₂O₆ + H₂O",
    ],
    correctAnswer: 0,
    explanation: "正确！植物吸收二氧化碳和水，在阳光作用下产生葡萄糖和氧气。",
  },
  {
    id: 3,
    title: "光合作用的重要性",
    content: "光合作用不仅为植物提供能量，还为我们提供氧气和食物。没有光合作用，地球上的生命将无法存在！",
    interactive: false,
  },
];

export default function InteractiveLesson() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const step = lessons[currentStep];
  const isLastStep = currentStep === lessons.length - 1;

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === step.correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const resetLesson = () => {
    setCurrentStep(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>进度</span>
          <span>{currentStep + 1} / {lessons.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / lessons.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h2>
        <p className="text-gray-600 text-lg leading-relaxed">{step.content}</p>
      </div>

      {/* Interactive Question */}
      {step.interactive && !showExplanation && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">{step.question}</h3>
          <div className="space-y-3">
            {step.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200"
              >
                <span className="font-medium text-gray-700">{option}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Explanation */}
      {showExplanation && (
        <div className={`mb-6 p-4 rounded-xl ${
          selectedAnswer === step.correctAnswer
            ? "bg-green-50 border-2 border-green-200"
            : "bg-red-50 border-2 border-red-200"
        }`}>
          <p className={`font-semibold mb-2 ${
            selectedAnswer === step.correctAnswer ? "text-green-700" : "text-red-700"
          }`}>
            {selectedAnswer === step.correctAnswer ? "✅ 正确！" : "❌ 不太对哦"}
          </p>
          <p className="text-gray-700">{step.explanation}</p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={resetLesson}
          className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
        >
          🔄 重新开始
        </button>
        
        {isLastStep ? (
          <div className="text-right">
            <p className="text-lg font-semibold text-indigo-600 mb-2">
              🎉 课程完成！得分：{score}/{lessons.filter(l => l.interactive).length}
            </p>
            <button
              onClick={resetLesson}
              className="px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors"
            >
              再学一次
            </button>
          </div>
        ) : (
          <button
            onClick={nextStep}
            disabled={!step.interactive || !showExplanation}
            className={`px-6 py-3 rounded-xl transition-colors ${
              !step.interactive || showExplanation
                ? "bg-indigo-500 text-white hover:bg-indigo-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {step.interactive && !showExplanation ? "请先回答问题" : "下一步 →"}
          </button>
        )}
      </div>
    </div>
  );
}
