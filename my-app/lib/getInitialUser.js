import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function  getInitialUser(){
    const CookieStore = await cookies()
    try {
        const token =  CookieStore.get("token")
        if(!token){
            return NextResponse.redirect(new URL('/login',req.url))
        }
        const secret = new TextEncoder().encode(process.env.JWT_SECRET)
        const {payload} = await jwtVerify(token.value,secret)
        return payload
        
    } catch (error) {
        redirect('/login')

        
    }
}