'use client'
import { Button } from "antd";
import React, { useState } from "react";
import UserProfile from "./UserProfile";
import { Flower } from "lucide-react";
import { Trash } from "lucide-react";
import { Pencil } from "lucide-react";
import { Plus } from "lucide-react";
import { Iphone } from "./ui/iphone";

const LinkPage = ({user}) => {
  const [UserData, setUserData] = useState(user)
  const [formData, setformData] = useState({
    username:user.username,
    linkTitle:"",
    linkUrl:""
  })
  const handleChange = (e)=>{
    const {name,value} = e.target
    setformData((prev)=>({
      ...prev,
      [name]:value
    }))
  } 
  const handleDelete = async(l)=>{
    console.log(l)
    const res = await fetch('/api/onboard',{
      method:'DELETE',
      body:JSON.stringify({username:UserData.username, link:l})
    })
    if(res.ok){
      const data = await res.json()
      setUserData(data.user_data)
    }
  }

  const handleSubmit = async(e)=>{
    if(formData.linkTitle && formData.linkUrl){
    const res = await fetch('/api/onboard',{
      method:"POST",
      body:JSON.stringify({user:formData})
    })
    if(res.ok) {
      alert('created link successfully')
      const data = await  res.json()
      setUserData(data.user_data)
  }
}
else alert("please enter something")
  }
  return (
    <div className="w-full min-h-screen p-5 flex flex-col gap-5">
      <UserProfile user={UserData}/>
      <div>
      <div role="alert" className="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Your Website Is  Live!</span>
  <button className="btn">Copy Link</button>
</div>
      </div>
      <div>

<div className="w-full flex justify-center">

<button className="btn w-1/2" onClick={()=>document.getElementById('my_modal_1').showModal()}>Add Link</button>
</div>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
  <fieldset className="fieldset">
  <legend className="fieldset-legend">Enter Link Title</legend>
  <input type="text" className="input" placeholder="Type here" name="linkTitle" value={formData.linkTitle} onChange={handleChange} />
  <p className="label">Optional</p>
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Enter Link Url?</legend>
  <input type="text" className="input" placeholder="Type here" name="linkUrl" value={formData.linkUrl} onChange={handleChange} />
  <p className="label">Optional</p>
</fieldset>


<button onClick={handleSubmit} className="btn">Save Changes</button>

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog> 

    </div>
      <div>
      <ul className="list bg-base-100 rounded-box shadow-md">
  
  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Links Created By {user.username}</li>
  {UserData.links.map((l)=>(
    
      <li className="list-row">
      <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
      <div>
        <div>{l.title}</div>
        <div className="text-xs uppercase font-semibold opacity-60">{l.url}</div>
      </div>
  
        <Pencil className="size-[1.2em]"/>
      <Trash onClick={()=>{
        handleDelete(l)
      }}  className="size-[1.2em]"/>

    </li>

  ))}

  
</ul>
      </div>
      <div className="mx-auto md:w-1/2 w-full h-[500px] border rounded-2xl md:h-screen ">
<iframe src={`${process.env.NEXT_PUBLIC_BASE_URL}/zentro/${user.username}`} className="w-full h-full rounded-2xl" frameborder="0"></iframe>
      </div>

    

    </div>
  );
};

export default LinkPage;
