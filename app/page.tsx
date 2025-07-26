"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function QuizPage() {
  const [password, setPassword] = useState("")
  const [showMessage, setShowMessage] = useState(false)
  const router = useRouter()

  const checkPassword = async () => {
    try {
      const response = await fetch("/api/unlock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (data.success) {
        setShowMessage(true)
        // Add confetti effect
        if (typeof window !== "undefined" && (window as any).confetti) {
          ;(window as any).confetti()
        }
      } else {
        alert("Try again! Hint: Think about our favorite co-op game 🎮")
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      checkPassword()
    }
  }

  return (
    <>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/canvas-confetti/1.4.0/confetti.browser.min.js"></script>
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#FFF0F5" }}>
        <div className="text-center p-8 max-w-xl">
          <h1 className="text-4xl font-bold text-pink-600 mb-6">🎮 Level 1: Find the Password 🎮</h1>

          <div className="bg-pink-200 rounded-2xl p-5 mb-8">
            <p className="text-lg mb-4 text-gray-800">
              Remember our favorite game together?
              <br />
              The one where we worked as a team...
              <br />
              What was it called? 🤔
            </p>
          </div>

          <div className="mt-8">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full p-3 rounded border-2 border-pink-300 focus:border-pink-500 outline-none text-gray-800"
              placeholder="Enter the password..."
            />
            <button
              onClick={checkPassword}
              className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Unlock My Heart ❤️
            </button>
          </div>

          {showMessage && (
            <div className="mt-8">
              <div className="text-6xl mb-4 animate-pulse">❤️</div>
              <div className="space-y-4 text-pink-600">
                <p className="text-lg mt-4">
                  Happy Birthday my Queen my Bocil Gemash my Beautiful!
                  <br />
                  You make my life complete every single day.
                  <br />
                </p>
                <button
                  onClick={() => router.push("/home")}
                  className="w-full py-4 px-6 rounded-lg text-white font-bold text-lg shadow-lg bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 hover:scale-105 transition-transform duration-300"
                  style={{
                    background: "linear-gradient(-45deg, #FF1493, #FF69B4, #FFB6C1, #FFC0CB)",
                    backgroundSize: "400% 400%",
                    animation: "gradientBG 15s ease infinite",
                  }}
                >
                  See Your Birthday Surprise 🎂
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  )
}
