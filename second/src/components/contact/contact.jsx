import React from 'react'
import "./contact.css"
const Contact


= () => {
  return (
    <div className='contact w-full min-h-[80vh] flex items-center justify-center '>
        <form action="" className='max-w-[500px] w-[90%] h-[500px] flex items-center justify-center flex-col gap-5  '>
            <input type="text" placeholder='enter your name ' name='username' required />
            <input type="email" name="email" id="" placeholder='enter your email'  required/>
            <textarea name="messagename" id="" placeholder='enter message for us' required></textarea>
            <button>submit</button>

        </form>


        
    </div>
  )
}

export default Contact


