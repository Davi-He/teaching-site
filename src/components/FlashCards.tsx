"use client";

import { useState } from "react";

interface FlashCard {
  id: number;
  front: string;
  back: string;
  category: string;
}

const flashCards: FlashCard[] = [
  {
    id: 1,
    front: "光合作用",
    back: "植物利用阳光将二氧化碳和水转化为葡萄糖和氧气的过程",
    category: "生物",
  },
  {
    id: 2,
    front: "光速",
    back: "约 300,000 公里/秒，是宇宙中最快的速度",
    category: "物理",
  },
  {
    id: 3,
    front: "H₂O",
    back: "水的化学式，由 2 个氢原子和 1 个氧原子组成",
    category: "化学",
  },
  {
    id: 4,
    front: "地球公转周期",
    back: "365 天，即一年",
    category: "地理",
  },
  {
    id: 5,
    front: "人体最大器官",
    back: "皮肤，覆盖整个身体表面",
    category: "生物",
  },
  {
    id: 6,
    front: "牛顿第一定律",
    back: "物体在不受外力作用时，保持静止或匀速直线运动状态",
    category: "物理",
  },
];

export default function FlashCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [mastered, setMastered] = useState<number[]>([]);
  const [shuffle, setShuffle] = useState(false);

  const currentCard = flashCards[currentIndex];
  const isMastered = mastered.includes(currentCard.id);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % flashCards.length);
    }, 200);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + flashCards.length) % flashCards.length);
    }, 200);
  };

  const toggleMastered = () => {
    if (isMastered) {
      setMastered(mastered.filter(id => id !== currentCard.id));
    } else {
      setMastered([...mastered, currentCard.id]);
    }
  };

  const shuffleCards = () => {
    setShuffle(!shuffle);
    setIsFlipped(false);
    setCurrentIndex(Math.floor(Math.random() * flashCards.length));
  };

  const progress = Math.round((mastered.length / flashCards.length) * 100);

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-700">学习进度</h3>
          <span className="text-indigo-600 font-bold">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-2">
          已掌握 {mastered.length} / {flashCards.length} 张卡片
        </p>
      </div>

      {/* Flash Card */}
      <div className="perspective-1000">
        <div
          onClick={handleFlip}
          className={`relative w-full h-80 cursor-pointer transition-transform duration-500 transform-style-preserve-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <div
            className="absolute w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-xl p-8 backface-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="h-full flex flex-col justify-center items-center text-white">
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full mb-4">
                {currentCard.category}
              </span>
              <h2 className="text-4xl font-bold text-center mb-4">{currentCard.front}</h2>
              <p className="text-white/80 text-lg">点击翻转查看解释</p>
              {isMastered && (
                <span className="mt-4 text-green-300 font-semibold">✅ 已掌握</span>
              )}
            </div>
          </div>

          {/* Back */}
          <div
            className="absolute w-full h-full bg-white rounded-2xl shadow-xl p-8 backface-hidden"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="h-full flex flex-col justify-center items-center text-gray-800">
              <span className="text-sm bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full mb-4">
                {currentCard.category}
              </span>
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">{currentCard.front}</h2>
              <p className="text-lg text-center text-gray-600 leading-relaxed">
                {currentCard.back}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={handlePrev}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors"
        >
          ← 上一张
        </button>
        
        <button
          onClick={toggleMastered}
          className={`px-6 py-3 rounded-xl transition-colors ${
            isMastered
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {isMastered ? "✅ 已掌握" : "📌 标记为掌握"}
        </button>
        
        <button
          onClick={handleNext}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors"
        >
          下一张 →
        </button>
      </div>

      {/* Utility Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={shuffleCards}
          className="px-6 py-2 text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          🔀 随机切换
        </button>
        <button
          onClick={() => {
            setCurrentIndex(0);
            setIsFlipped(false);
          }}
          className="px-6 py-2 text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          🔄 从头开始
        </button>
      </div>

      {/* Card Counter */}
      <p className="text-center text-gray-500">
        卡片 {currentIndex + 1} / {flashCards.length}
      </p>
    </div>
  );
}
