import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you! Your message has been received.');
  };

  return (
    <>
      {/* Hero */}
      <div className="rounded-ammaar bg-[url('https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/contact-us-bg.jpg')] bg-cover bg-center w-full">
        <div className="bg-black/60 text-white min-h-[780px] rounded-ammaar p-6 flex flex-col justify-between">
          <Navbar />

          <div className="text-center my-auto">
            <p className="text-xl">We're Just a Message Away</p>
            <h2 className="text-6xl md:text-8xl mt-2 font-normal">Contact Us</h2>
          </div>

          <div />
        </div>
      </div>

      {/* Form & Info Section */}
      <div className="bg-white rounded-ammaar mt-8 p-6 md:p-ammaar grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <p className="text-sm tracking-widest uppercase">CONTACT US</p>
          <h2 className="text-5xl leading-tight mt-4">Schedule an Appointment</h2>
          <div className="w-14 h-px bg-ammaar-1 mt-8" />
          <p className="mt-8 text-ammaar-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
          </p>

          <div className="mt-8 flex flex-col gap-3 text-ammaar-1 text-lg">
            <p>📍 13, Fifth Avenue, New York, NY 101660</p>
            <p>✉️ contact@info.com</p>
            <p>📞 555-345-4599</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-200 rounded-full px-6 py-4 outline-none focus:border-ammaar-1"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-200 rounded-full px-6 py-4 outline-none focus:border-ammaar-1"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-200 rounded-full px-6 py-4 outline-none focus:border-ammaar-1"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border border-gray-200 rounded-full px-6 py-4 outline-none focus:border-ammaar-1 text-ammaar-3"
          />
          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="md:col-span-2 border border-gray-200 rounded-[25px] px-6 py-4 outline-none focus:border-ammaar-1 resize-none"
          />
          <button
            type="submit"
            className="md:col-span-2 bg-ammaar-1 hover:bg-ammaar-4 text-white px-10 py-4 rounded-full tracking-widest transition-colors font-medium cursor-pointer"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </>
  );
}