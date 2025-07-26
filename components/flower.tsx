"use client"

import Link from "next/link"

export default function Flower() {
  return (
    <Link href="/">
      <div className="flower-container flex flex-col items-center justify-center relative animate-sway cursor-pointer">
        <div className="flower-head relative w-30 h-30 flex justify-center items-center -mb-2">
          <div
            className="petal absolute w-12 h-20 rounded-full shadow-md"
            style={{
              background: "linear-gradient(45deg, #f06292, #ec407a)",
              transformOrigin: "bottom center",
              transform: "rotate(0deg)",
            }}
          ></div>
          <div
            className="petal absolute w-12 h-20 rounded-full shadow-md"
            style={{
              background: "linear-gradient(45deg, #f06292, #ec407a)",
              transformOrigin: "bottom center",
              transform: "rotate(45deg)",
            }}
          ></div>
          <div
            className="petal absolute w-12 h-20 rounded-full shadow-md"
            style={{
              background: "linear-gradient(45deg, #f06292, #ec407a)",
              transformOrigin: "bottom center",
              transform: "rotate(90deg)",
            }}
          ></div>
          <div
            className="petal absolute w-12 h-20 rounded-full shadow-md"
            style={{
              background: "linear-gradient(45deg, #f06292, #ec407a)",
              transformOrigin: "bottom center",
              transform: "rotate(135deg)",
            }}
          ></div>
          <div
            className="petal absolute w-12 h-20 rounded-full shadow-md"
            style={{
              background: "linear-gradient(45deg, #f06292, #ec407a)",
              transformOrigin: "bottom center",
              transform: "rotate(180deg)",
            }}
          ></div>
          <div
            className="petal absolute w-12 h-20 rounded-full shadow-md"
            style={{
              background: "linear-gradient(45deg, #f06292, #ec407a)",
              transformOrigin: "bottom center",
              transform: "rotate(225deg)",
            }}
          ></div>
          <div
            className="petal absolute w-12 h-20 rounded-full shadow-md"
            style={{
              background: "linear-gradient(45deg, #f06292, #ec407a)",
              transformOrigin: "bottom center",
              transform: "rotate(270deg)",
            }}
          ></div>
          <div
            className="petal absolute w-12 h-20 rounded-full shadow-md"
            style={{
              background: "linear-gradient(45deg, #f06292, #ec407a)",
              transformOrigin: "bottom center",
              transform: "rotate(315deg)",
            }}
          ></div>
        </div>

        <div
          className="flower-center absolute w-12 h-12 rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, 40%)",
            background: "radial-gradient(circle, #ffe4e1, #ff69b4)",
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes sway {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(100deg); }
        }
        
        .animate-sway {
          animation: sway 6s infinite alternate ease-in-out;
        }
      `}</style>
    </Link>
  )
}
