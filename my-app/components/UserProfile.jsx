import React from 'react'

const UserProfile = () => {
  
  return (
    <div className='flex items-center gap-3'>

<div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
  </div>
</div> 
<div className='flex flex-col gap-1'>
    <h2>@404faheem</h2>
    <h3 onClick={()=>document.getElementById('my_modal_2').showModal()}>Add Bio</h3>
</div>
<div>
{/* <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" >Add Link</button> */}
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
  <fieldset className="fieldset">
  <legend className="fieldset-legend">What is your name?</legend>
  <input type="text" className="input" placeholder="Type here" />
  <p className="label">Optional</p>
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">What is your name?</legend>
  <input type="text" className="input" placeholder="Type here" />
  <p className="label">Optional</p>
</fieldset>
<button className="btn">Save Changes</button>

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog> 
</div>
{/* <div className='ml-auto'>
  <h1>jjj</h1>
</div> */}
    </div>
  )
}

export default UserProfile