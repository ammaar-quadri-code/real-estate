import React from 'react';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      {/* Hero */}
      <div className="rounded-ammaar bg-[url('https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/about-bg.jpg')] bg-cover bg-center w-full">
        <div className="bg-black/60 text-white min-h-[820px] rounded-ammaar p-6 flex flex-col justify-between">
          <Navbar />

          <div className="text-center my-auto">
            <p className="text-xl">Know More About Us</p>
            <h2 className="text-6xl md:text-8xl mt-2 font-normal">About Us</h2>
          </div>

          <div />
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-white rounded-ammaar mt-8 p-6 md:p-ammaar grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="h-[500px] rounded-[25px] bg-[url('https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/about-us.jpg')] bg-cover bg-center" />
        <div>
          <h1 className="text-6xl font-bold">About Us</h1>
          <h2 className="text-5xl leading-tight mt-2">Connecting people with perfect homes is our passion.</h2>
          <div className="w-14 h-px bg-ammaar-3 mt-8" />
          <p className="mt-8 text-ammaar-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-4 text-ammaar-3">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
        </div>
      </div>

      {/* Numbers */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div className="bg-white rounded-[25px] p-8 text-center shadow-sm">
          <h3 className="text-5xl text-ammaar-1 font-bold">15+</h3>
          <p className="mt-2 text-ammaar-3">Years Experience</p>
        </div>
        <div className="bg-white rounded-[25px] p-8 text-center shadow-sm">
          <h3 className="text-5xl text-ammaar-1 font-bold">500+</h3>
          <p className="mt-2 text-ammaar-3">Properties Sold</p>
        </div>
        <div className="bg-white rounded-[25px] p-8 text-center shadow-sm">
          <h3 className="text-5xl text-ammaar-1 font-bold">300+</h3>
          <p className="mt-2 text-ammaar-3">Happy Clients</p>
        </div>
        <div className="bg-white rounded-[25px] p-8 text-center shadow-sm">
          <h3 className="text-5xl text-ammaar-1 font-bold">20+</h3>
          <p className="mt-2 text-ammaar-3">Expert Agents</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white rounded-ammaar mt-8 p-6 md:p-ammaar grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <p className="text-7xl text-ammaar-1 leading-none font-serif">“</p>
          <h2 className="text-5xl leading-tight">
            Read from clients who have found the perfect place where they can create...
          </h2>
          <div className="w-14 h-px bg-ammaar-3 mt-8" />
          <p className="mt-8 text-ammaar-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="border border-gray-200 rounded-[25px] p-8">
            <p className="text-ammaar-5 text-xl">★★★★★</p>
            <p className="mt-4">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id convallis neque nam scelerisque.”</p>
            <p className="mt-4 text-ammaar-1 tracking-widest font-semibold">SUHAIB MUZAFFAR</p>
          </div>
          <div className="border border-gray-200 rounded-[25px] p-8">
            <p className="text-ammaar-5 text-xl">★★★★★</p>
            <p className="mt-4">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id convallis neque nam scelerisque.”</p>
            <p className="mt-4 text-ammaar-1 tracking-widest font-semibold">OSMAN GHANI</p>
          </div>
        </div>
      </div>
    </>
  );
}