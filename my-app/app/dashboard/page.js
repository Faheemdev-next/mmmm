import LinkPage from '@/components/LinkPage'
import { connectDB } from '@/lib/connectDB'
import UserProfile from '@/models/UserProfile'
import React from 'react'

const dashboard = async() => {
  await connectDB()
  const Fake_username  = "bhatfaheem"
  const result = await UserProfile.findOne({username:Fake_username})
  if(result){
    return <div><h1>user already exists</h1></div>
  }
 const doc =  await UserProfile.create({
    username:"bhatfaheem",
    email:"bhat@faheem9797"
  })
  console.log(doc);
  return (
    <div>
        <h1>kxkkxk</h1>
        
    </div>
  )
}

export default dashboard