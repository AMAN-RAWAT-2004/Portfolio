import React, { useState } from 'react';

const ContactMe = () => {

  // ✅ State should be here (top level)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interested: '',
    budget: '',
    country: '',
    message: '',
  });

  // ✅ Proper change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section>
      <div className="flex flex-col justify-center items-center mb-10" >
         <h1 className="md:text-2xl text-xl mb-4 font-semibold"><span className='text-yellow-500 text-4xl'>-</span> Contact Us</h1>
         <h2 className="text-4xl md:text-5xl mb-3 font-semibold italic text-yellow-500"> Let's Talk For</h2>
            <h1 className="text-4xl md:text-5xl mb-10 font-bold underline "> Our Next Projects</h1>
          </div>
      <div className='p-10 border m-10 border-gray-500'>
        <form>
          <div className="grid grid-cols-2 gap-4">

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-xl">Your Name*</label>
              <input
                name="name"
                className="bg-gray-200 w-60 h-10 rounded-lg px-2"
                placeholder="Ex. John Doe"
                type="text"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-xl">Email*</label>
              <input
                name="email"
                className="bg-gray-200 w-60 h-10 rounded-lg px-2"
                placeholder="example@gmail.com"
                type="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-xl">Phone*</label>
              <input
                name="phone"
                className="bg-gray-200 w-60 h-10 rounded-lg px-2"
                placeholder="Enter Phone Number"
                type="tel"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            {/* Interested */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-xl">I'm Interested In*</label>
              <input
                name="interested"
                className="bg-gray-200 w-60 h-10 rounded-lg px-2"
                placeholder="Web Development"
                type="text"
                value={form.interested}
                onChange={handleChange}
              />
            </div>

            {/* Budget */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-xl">Budget*</label>
              <input
                name="budget"
                className="bg-gray-200 w-60 h-10 rounded-lg px-2"
                placeholder="$500 - $1000"
                type="text"
                value={form.budget}
                onChange={handleChange}
              />
            </div>

            {/* Country */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-xl">Country*</label>
              <input
                name="country"
                className="bg-gray-200 w-60 h-10 rounded-lg px-2"
                placeholder="India"
                type="text"
                value={form.country}
                onChange={handleChange}
              />
            </div>

          </div>

          {/* Message */}
          <div className="mt-4 flex flex-col gap-2">
            <label className="font-semibold text-xl">Message</label>
            <textarea
              name="message"
              className="bg-gray-200 rounded-lg p-2"
              rows={4}
              value={form.message}
              onChange={handleChange}
            />
          </div>

        </form>
      </div>
    </section>
  );
};

export default ContactMe;