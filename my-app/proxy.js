import { jwtVerify } from "jose"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
export async function proxy(req){
    const path = req.nextUrl.pathname
    const CookieStore = await cookies()
    if (req.nextUrl.pathname === '/dashboard') {
        try {
            const token =  CookieStore.get("token")
            if(!token){
                return NextResponse.redirect(new URL('/login',req.url))
            }
            const secret = new TextEncoder().encode(process.env.JWT_SECRET)
        await jwtVerify(token.value,secret)
            
        } catch (error) {
            return NextResponse.redirect(new URL('/login',req.url))

        }
    
 
        





    }
    return NextResponse.next()

}