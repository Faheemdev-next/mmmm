import UserProfile from "@/models/UserProfile";
import { connectDB } from "./connectDB";

export async function getUserProfile(email){
    'use cache'
    try {

        await connectDB()
        const user = await UserProfile.findOne({email}).lean()
        console.log(user);
        return user
    } catch (error) {
        
    }

}