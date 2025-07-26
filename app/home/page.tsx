"use client"

import { useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import { photoData } from "@/lib/photo-data"

export default function HomePage() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Auto-play background music
    if (audioRef.current) {
      const audio = audioRef.current
      audio.volume = 0.3 // Mulai dari volume 0

      audio
        .play()
        .then(() => {
          // Fade-in volume setelah berhasil play
          let volume = 0
          const fadeInterval = setInterval(() => {
            if (volume < 0.5) {
              volume += 0.02
              audio.volume = Math.min(volume, 1)
            } else {
              clearInterval(fadeInterval)
            }
          }, 200) // Tambah setiap 200ms
        })
        .catch(console.error)
    }
  }, [])

  return (
    <div style={{ backgroundColor: "rgb(177, 134, 141)", minHeight: "100vh", color: "#ffffff" }}>
      <Navbar />

      <audio ref={audioRef} controls className="hidden fixed top-20 left-4 z-50">
        <source src="/music/sound.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <section className="hero relative flex items-center justify-center text-center h-[80vh] text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/3/9.jpg")' }} />
        <div
          className="absolute inset-0 z-10"
          style={{ background: "linear-gradient(to bottom, rgba(226, 159, 159, 0.5), rgb(177, 134, 141))" }}
        />
        <div className="relative z-20">
          <h1 className="text-5xl font-bold mb-5 animate-fade-in">Happy Birth Day My One And Only Bocil Gemash</h1>
          <h2 className="text-3xl">Adinda Savira Azzahra</h2>
        </div>
      </section>

      <section className="categories p-5 mt-20">
        {Object.entries(photoData).map(([categoryKey, category]) => (
          <div key={categoryKey} className="category mb-10">
            <h2 className="text-2xl mb-5 ml-5 relative">
              {category.title}
              <span className="block w-25 h-1 bg-pink-400 mt-1 rounded"></span>
            </h2>
            <div className="photo-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
              {category.photos.map((photo, index) => (
                <div
                  key={index}
                  className="photo-card relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:z-10"
                >
                  <img
                    src={photo.src || "/placeholder.svg"}
                    alt="Memory"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="photo-caption absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {photo.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in-out;
        }
      `}</style>
    </div>
  )
}
