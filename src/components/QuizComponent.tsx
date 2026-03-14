"use client";

import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "地球绕太阳公转一周需要多长时间？",
    options: ["24 小时", "365 天", "30 天", "7 天"],
    correctAnswer: 1,
    explanation: "地球绕太阳公转一周需要 365 天，这就是我们的一年。",
  },
  {
    id: 2,
    question: "人体最大的器官是什么？",
    options: ["心脏", "肝脏", "皮肤", "大脑"],
    correctAnswer: 2,
    explanation: "皮肤是人体最大的器官，覆盖整个身体表面。",
  },
  {
    id: 3,
    question: "水的化学式是什么？",
    options: ["CO₂", "H₂O", "O₂", "NaCl"],
    correctAnswer: 1,
    explanation: "水的化学式是 H₂O，由两个氢原子和一个氧原子组成。",
  },
  {
    id: 4,
    question: "光速大约是多少？",
    options: ["300,000 km/s", "1,000 km/s", "100 km/s", "10 km/s"],
    correctAnswer: 0,
    explanation: "光速约为 300,000 公里/秒，是宇宙中最快的速度。",
  },
  {
    id: 5,
    question: "植物进行光合作用的场所是？",
    options: ["线粒体", "叶绿体", "细胞核", "液泡"],
    correctAnswer: 1,
    explanation: "叶绿体是植物进行光合作用的细胞器，含有叶绿素。",
  },
];

export default function QuizComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const question = questions[currentQuestion];

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const submitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1);
    }
    setAnswers([...answers, selectedAnswer]);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
    setAnswers([]);
  };

  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">
          {percentage >= 80 ? "🏆" : percentage >= 60 ? "👍" : "📚"}
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">测验完成！</h2>
        <p className="text-xl text-gray-600 mb-2">
          得分：<span className="font-bold text-indigo-600">{score}</span> / {questions.length}
        </p>
        <p className="text-lg text-gray-500 mb-8">正确率：{percentage}%</p>
        
        <div className="space-y-4 mb-8">
          {questions.map((q, index) => (
            <div
              key={q.id}
              className={`p-4 rounded-xl ${
                answers[index] === q.correctAnswer
                  ? "bg-green-50 border-2 border-green-200"
                  : "bg-red-50 border-2 border-red-200"
              }`}
            >
              <p className="font-medium text-gray-700">{q.question}</p>
              <p className="text-sm text-gray-600 mt-2">{q.explanation}</p>
            </div>
          ))}
        </div>

        <button
          onClick={restartQuiz}
          className="px-8 py-4 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors text-lg font-semibold"
        >
          🔄 再测一次
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>问题 {currentQuestion + 1} / {questions.length}</span>
          <span>得分：{score}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{question.question}</h2>

      {/* Options */}
      <div className="space-y-3 mb-8">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={showResult}
            className={`w-full p-4 text-left border-2 rounded-xl transition-all duration-200 ${
              showResult
                ? index === question.correctAnswer
                  ? "border-green-500 bg-green-50"
                  : index === selectedAnswer
                  ? "border-red-500 bg-red-50"
                  : "border-gray-200 text-gray-400"
                : selectedAnswer === index
                ? "border-indigo-500 bg-indigo-50"
                : "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50"
            }`}
          >
            <span className="font-medium">{option}</span>
          </button>
        ))}
      </div>

      {/* Explanation */}
      {showResult && (
        <div className={`mb-6 p-4 rounded-xl ${
          selectedAnswer === question.correctAnswer
            ? "bg-green-50 border-2 border-green-200"
            : "bg-red-50 border-2 border-red-200"
        }`}>
          <p className={`font-semibold mb-2 ${
            selectedAnswer === question.correctAnswer ? "text-green-700" : "text-red-700"
          }`}>
            {selectedAnswer === question.correctAnswer ? "✅ 正确！" : "❌ 答案不对哦"}
          </p>
          <p className="text-gray-700">{question.explanation}</p>
        </div>
      )}

      {/* Action Button */}
      <div className="flex justify-end">
        {!showResult ? (
          <button
            onClick={submitAnswer}
            disabled={selectedAnswer === null}
            className={`px-8 py-3 rounded-xl transition-colors ${
              selectedAnswer !== null
                ? "bg-indigo-500 text-white hover:bg-indigo-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            提交答案
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="px-8 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors"
          >
            {currentQuestion < questions.length - 1 ? "下一题 →" : "查看结果"}
          </button>
        )}
      </div>
    </div>
  );
}
