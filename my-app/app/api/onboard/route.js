import { connectDB } from "@/lib/connectDB"
import UserProfile from "@/models/UserProfile"
import { NextResponse } from "next/server";


export async function DELETE(req) {
  try {
    const body = await req.json();
    const { username, link } = body; 
    console.log(username,link);
    // linkId = the _id of the link to delete
    await connectDB()
    const updatedDoc = await UserProfile.findOneAndUpdate(
      { username },
      { $pull: { links: { _id: link} } },   // remove only one link
      { new: true }
    ).lean();
    console.log(updatedDoc)

    return Response.json({
      success: true,
      message: "Link deleted successfully",
      user_data: updatedDoc,
    });

  } catch (err) {
    return Response.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}


export async function POST(req){
    const body = await req.json()
    const {user} = body
    console.log("user Dta :",user);
    await connectDB()

    const userDoc = await UserProfile.findOneAndUpdate(
      { username:user.username},
      {
        $push: {
          links: { title: user.linkTitle, url: user.linkUrl },
        },
      },
      { new: true }
    ).lean()
    
      console.log(userDoc);

      return NextResponse.json({user_data:userDoc})

}