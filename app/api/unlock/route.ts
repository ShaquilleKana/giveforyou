import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    if (!password) {
      return NextResponse.json({ success: false, message: "Password is required" })
    }

    const cleanPassword = password.toLowerCase().replace(/\s+/g, "")

    if (cleanPassword === "ittakestwo") {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ success: false })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" })
  }
}
