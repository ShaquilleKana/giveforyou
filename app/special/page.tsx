"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"

export default function SpecialPage() {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div")
      heart.classList.add("heart")
      heart.innerHTML = "❤️"
      heart.style.position = "fixed"
      heart.style.fontSize = "24px"
      heart.style.left = Math.random() * 100 + "vw"
      heart.style.animation = `float ${Math.random() * 3 + 2}s linear forwards`
      heart.style.pointerEvents = "none"
      heart.style.zIndex = "1000"
      document.body.appendChild(heart)

      setTimeout(() => {
        heart.remove()
      }, 4000)
    }

    const interval = setInterval(createHeart, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{ backgroundColor: "rgb(177, 134, 141)", minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />

      <div className="video-container w-full max-w-4xl mx-auto p-8 md:p-20 flex-1 flex items-center">
        <div className="video-wrapper relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden">
          <iframe
            src="https://drive.google.com/file/d/1sUDrTvM2sC5lDTxGN7zRhB7_NSm5_we-/preview"
            allow="autoplay"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
          />
        </div>
      </div>
      <div className="video-container w-full max-w-4xl mx-auto p-8 md:p-20 flex-1 flex items-center">
        <div className="video-wrapper relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden">
          <iframe
            src="https://drive.google.com/file/d/1sUDrTvM2sC5lDTxGN7zRhB7_NSm5_we-/preview"
            allow="autoplay"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          to {
            transform: translateY(-100vh);
          }
        }
      `}</style>
    </div>
  )
}
