import UserProfile from "@/models/UserProfile";
import { message } from "antd";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import { connectDB } from "@/lib/connectDB";
export async function POST(req){
    const {user} = await req.json()
    const cookieStore = await cookies()
    try {
        console.log(user);
        if(!user) return NextResponse.json({message:"nothing found"})
            await connectDB()
            const Userdoc = await UserProfile.findOne({email:user.email})
            const verified = await bcrypt.compare(user.password,Userdoc.password)
            const token = jwt.sign({email:Userdoc.email,username:Userdoc.username},process.env.JWT_SECRET,{expiresIn:"6h"})
            if(!verified) return NextResponse.json({message:"failed to authenticate"})
                cookieStore.set({
                    name:'token',
                    value:token,
                    httpOnly:true,
                    path:"/"
                })
                

                return NextResponse.json({message:"logged in "})

        
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"auth failed"})

    }
}