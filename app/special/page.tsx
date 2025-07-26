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
      
      <div className="video-container w-full max-w-4xl mx-auto p-8 md:p-20 flex-1 flex flex-row items-center justify-center">
        <div className="video-wrapper relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=PLZA14XdnBA0l1eGhp9GBXyGkTZPNLc9Iu"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
          />
        </div>
      </div>
      <footer className="text-center text-white text-lg p-4" style={{ fontFamily: "Pacifico, cursive" }}>
        <h1>Klik Playlist di Kanan Atas yaaa</h1>
      </footer>

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
