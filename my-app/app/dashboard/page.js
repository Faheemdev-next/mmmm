import LinkPage from '@/components/LinkPage'
import { connectDB } from '@/lib/connectDB'
import { getInitialUser } from '@/lib/getInitialUser'
import { getUserProfile } from '@/lib/getUserProfile'
import UserProfile from '@/models/UserProfile'
import React from 'react'

const dashboard = async() => {
  const userInitial = await getInitialUser()
  const user = await getUserProfile(userInitial.email)



  return (
    <div>
        <h1>kxkkxk</h1>
        
    </div>
  )
}

export default dashboard