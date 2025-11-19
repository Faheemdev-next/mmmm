import UserPage from '@/components/UserPage'
import { connectDB } from '@/lib/connectDB'
import UserProfile from '@/models/UserProfile'
import React, { Suspense } from 'react'

const user = async({params}) => {
    const {username}= await params
    await connectDB()
    const user = await UserProfile.findOne({username}).lean()
    if(!user) return <h1 className='text-3xl  font-bold md:text-6xl'>User Not found</h1>
    console.log(user);

    
  return (


    <div>
                <UserPage user={user}/>
    </div>
  )
}

export default user