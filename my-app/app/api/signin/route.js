import { connectDB } from '@/lib/connectDB'
import UserProfile from '@/models/UserProfile'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
export async function POST(req){
    const body = await req.json()
    const CookieStore = await cookies()
    try {
        const {user} = body
        if(user){
            const exists = await UserProfile.findOne({email:user.email})
            console.log("user exixting :",exists)
            if(exists) return NextResponse.json({message:'already exists please login'},{status:409})
            const hashedpassword = await bcrypt.hash(user.password,10)
            await connectDB()
            const userDoc = await UserProfile.create({
                username:user.firstName,
                email:user.email,
                password:hashedpassword
            })
            console.log(userDoc);
            const token = jwt.sign({email:userDoc.email,username:userDoc.username},process.env.JWT_SECRET,{expiresIn:"6h"})
            console.log(token);
            CookieStore.set({
                name: 'token',
                value: token,
                httpOnly: true,
                path: '/',
              })
            return NextResponse.json({status:400},{message:"Created Account Succesfully"})
            

        }

        
    } catch (error) {
        console.log(error)
        return NextResponse.json({status:403},{message:"authentication failed"})  
    }
}