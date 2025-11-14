import { cookies } from "next/headers"
import { NextResponse } from "next/server"
export async function proxy(req){
    const path = req.nextUrl.pathname
    const CookieStore = await cookies()
    if (req.nextUrl.pathname === '/dashboard') {
        const token =  CookieStore.get("token")
        if(!token){
            return NextResponse.redirect(new URL('/login',req.url))
        }
        const payload = jwtverify
        





    }
}