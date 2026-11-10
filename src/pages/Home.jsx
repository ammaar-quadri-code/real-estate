import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="rounded-ammaar bg-[url('https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/hero-bg.jpg')] bg-cover bg-center w-full">
        <div className="bg-black/60 text-white min-h-[820px] rounded-ammaar p-6 flex flex-col justify-between">
          <Navbar />

          <div className="text-center flex flex-col items-center gap-6 my-auto">
            <p className="text-2xl">Discover Your Dream Home with Us</p>
            <h2 className="text-5xl md:text-8xl font-normal leading-tight">
              Find the Perfect Property <br /> for Your Lifestyle
            </h2>
            <Link
              to="/properties"
              className="bg-ammaar-1 hover:bg-ammaar-4 px-10 py-4 rounded-full tracking-widest transition-colors font-medium mt-4"
            >
              START SEARCHING
            </Link>
          </div>

          <div />
        </div>
      </div>

      {/* What We Do */}
      <div className="bg-white rounded-ammaar mt-8 p-6 md:p-ammaar">
        <div className="text-center max-w-2xl mx-auto py-10">
          <h2 className="text-5xl">What We Do</h2>
          <p className="mt-6 text-ammaar-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
          </p>
          <div className="w-14 h-px bg-ammaar-3 mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
          <div>
            <p className="text-ammaar-1 font-semibold">01</p>
            <h3 className="text-2xl mt-4">Property Sales</h3>
            <p className="mt-4 text-ammaar-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
          </div>
          <div>
            <p className="text-ammaar-1 font-semibold">02</p>
            <h3 className="text-2xl mt-4">Property Rentals</h3>
            <p className="mt-4 text-ammaar-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
          </div>
          <div>
            <p className="text-ammaar-1 font-semibold">03</p>
            <h3 className="text-2xl mt-4">Property Management</h3>
            <p className="mt-4 text-ammaar-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
          </div>
          <div>
            <p className="text-ammaar-1 font-semibold">04</p>
            <h3 className="text-2xl mt-4">Lucrative Investments</h3>
            <p className="mt-4 text-ammaar-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
          </div>
        </div>
      </div>

      {/* Featured Properties Teaser */}
      <div className="py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-5xl">Featured Properties</h2>
          <p className="mt-6 text-ammaar-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
          </p>
          <div className="w-14 h-px bg-ammaar-1 mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div>
            <div className="h-[330px] rounded-[25px] bg-[url('https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/feature-01.jpg')] bg-cover bg-center" />
            <p className="mt-6 text-sm tracking-widest">APARTMENT - QUEENS</p>
            <h3 className="text-2xl mt-3">Modern Stylish Apartment</h3>
            <p className="mt-3 text-ammaar-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="mt-4 text-xl font-semibold text-ammaar-4">$150,000</p>
          </div>
          <div>
            <div className="h-[330px] rounded-[25px] bg-[url('https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/feature-02.jpg')] bg-cover bg-center" />
            <p className="mt-6 text-sm tracking-widest">APARTMENT - QUEENS</p>
            <h3 className="text-2xl mt-3">Contemporary Apartments</h3>
            <p className="mt-3 text-ammaar-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="mt-4 text-xl font-semibold text-ammaar-4">$150,000</p>
          </div>
          <div>
            <div className="h-[330px] rounded-[25px] bg-[url('https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/feature-03.jpg')] bg-cover bg-center" />
            <p className="mt-6 text-sm tracking-widest">APARTMENT - QUEENS</p>
            <h3 className="text-2xl mt-3">Suburban Single-Family Homes</h3>
            <p className="mt-3 text-ammaar-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="mt-4 text-xl font-semibold text-ammaar-4">$150,000</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white rounded-ammaar p-6 md:p-ammaar grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <p className="text-7xl text-ammaar-1 leading-none font-serif">“</p>
          <h2 className="text-5xl leading-tight">
            Read from clients who have found the perfect place where they can create...
          </h2>
          <div className="w-14 h-px bg-ammaar-3 mt-8" />
          <p className="mt-8 text-ammaar-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
          </p>
          <a
            href="#"
            className="inline-block mt-8 bg-ammaar-1 hover:bg-ammaar-4 text-white px-10 py-4 rounded-full tracking-widest transition-colors"
          >
            MORE TESTIMONIALS
          </a>
        </div>

        <div className="flex flex-col gap-6">
          <div className="border border-gray-200 rounded-[25px] p-8">
            <p className="text-ammaar-5 text-xl">★★★★★</p>
            <p className="mt-4">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id convallis neque nam scelerisque.”
            </p>
            <p className="mt-4 text-ammaar-1 tracking-widest font-semibold">SUHAIB MUZAFFAR</p>
          </div>
          <div className="border border-gray-200 rounded-[25px] p-8">
            <p className="text-ammaar-5 text-xl">★★★★★</p>
            <p className="mt-4">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id convallis neque nam scelerisque.”
            </p>
            <p className="mt-4 text-ammaar-1 tracking-widest font-semibold">OSMAN GHANI</p>
          </div>
        </div>
      </div>

      {/* About Teaser */}
      <div className="bg-white rounded-ammaar mt-8 p-6 md:p-ammaar grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="h-[500px] rounded-[25px] bg-[url('https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/connecting-with-customers.jpg')] bg-cover bg-center" />
        <div>
          <h2 className="text-5xl leading-tight">Connecting people with perfect homes is our passion.</h2>
          <div className="w-14 h-px bg-ammaar-3 mt-8" />
          <p className="mt-8 text-ammaar-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
          </p>
          <Link
            to="/about"
            className="inline-block mt-8 bg-ammaar-1 hover:bg-ammaar-4 text-white px-10 py-4 rounded-full tracking-widest transition-colors"
          >
            READ MORE
          </Link>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="mt-8 rounded-ammaar bg-[url('https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/cta.jpg')] bg-cover bg-center min-h-[590px] flex items-center justify-center p-6">
        <div className="bg-white rounded-[25px] w-full max-w-3xl p-10 text-center shadow-lg">
          <p className="text-sm tracking-widest uppercase">CONTACT US</p>
          <h2 className="text-4xl mt-4">Schedule an Appointment</h2>
          <div className="w-12 h-px bg-ammaar-1 mx-auto mt-6" />
          <Link
            to="/contact"
            className="inline-block mt-8 bg-ammaar-1 hover:bg-ammaar-4 text-white px-10 py-4 rounded-full tracking-widest transition-colors"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </>
  );
}