import React, { useState } from 'react'

const ContactMe = () => {

  const handleChange=()=>{
const [form,setForm]=useState({
  name:'',
  email:'',
  phone:'',
  intrested:'',
  budget:'',
  country:'',
  message:'',
})
  }
  return (
    <section className=''>
      <div>
        <div>

        </div>
        <div>
          <form >
            <div className='grid grid-cols-2 '>
                <div className='flex flex-col gap-2'>
                <label className='font-semibold text-xl ' >Your Name*</label>
                <input className='bg-gray-200 w-60 h-10 rounded-lg px-2 border-0'  placeholder='Ex.Jhon Doe' type="text" value={form.name} onChange={handleChange}  />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold text-xl ' >Email*</label>
                <input className='bg-gray-200 w-60 h-10 rounded-lg px-2 border-0'  placeholder='example@gmail.com' type="email" value={form.email} onChange={handleChange}  />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold text-xl ' >Phone*</label>
                <input className='bg-gray-200 w-60 h-10 rounded-lg px-2 border-0'  placeholder='Enter Phone Number' type="tel" value={form.phone} onChange={handleChange}  />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold text-xl ' >I'm Intrested In*</label>
                <input className='bg-gray-200 w-60 h-10 rounded-lg px-2 border-0'  placeholder='Ex.Jhon Doe' type="text" value={form.intrested} onChange={handleChange}  />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold text-xl ' >Your Name*</label>
                <input className='bg-gray-200 w-60 h-10 rounded-lg px-2 border-0'  placeholder='Ex.Jhon Doe' type="text" value={form.name} onChange={handleChange}  />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold text-xl ' >Your Name*</label>
                <input className='bg-gray-200 w-60 h-10 rounded-lg px-2 border-0'  placeholder='Ex.Jhon Doe' type="text" value={form.name} onChange={handleChange}  />
              </div>
            </div>
              

          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactMe
