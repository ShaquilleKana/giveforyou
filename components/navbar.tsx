"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header
        className="navbar fixed w-full z-50 flex items-center justify-between px-5 py-3 shadow-md"
        style={{ backgroundColor: "rgb(153, 64, 80)" }}
      >
        <button
          className="toggle-button bg-transparent border-none text-white text-2xl cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <nav className={`nav-links ${isOpen ? "active" : ""} md:flex md:flex-row md:items-center text-white`}>
          <Link href="/home" className="nav-link p-4">
            Home
          </Link>
          <Link href="/special" className="nav-link p-4">
            Special
          </Link>
          <Link href="/mywish" className="nav-link p-4">
            {"Don't Open"}
          </Link>
        </nav>

        <div className="logo text-white font-bold text-3xl md:text-6xl transition-all duration-300" style={{ fontFamily: "Pacifico, cursive" }}>
          <h1>Happy Birth Day</h1>
        </div>
      </header>

      <style jsx>{`
        .nav-links {
          display: none;
        }
        
        .nav-links.active {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #e6c2d4;
          padding: 10px;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .nav-link {
          margin: 5px 0;
          color: rgb(247, 243, 244);
          font-family: 'Poppins', sans-serif;
          text-decoration: none;
          font-size: larger;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover {
          color: rgb(226, 128, 144);
        }
        
        @media (min-width: 768px) {
          .navbar {
            justify-content: space-between;
          }
          
          .nav-links {
            display: flex !important;
            flex-direction: row;
            align-items: center;
            position: static;
            background: none;
            padding: 0;
            box-shadow: none;
          }
          
          .nav-link {
            margin: 0 15px;
          }
          
          .toggle-button {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
