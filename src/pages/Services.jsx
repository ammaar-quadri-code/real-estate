import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Services() {
  const services = [
    { id: '01', title: 'Property Sales' },
    { id: '02', title: 'Property Rentals' },
    { id: '03', title: 'Property Management' },
    { id: '04', title: 'Lucrative Investments' }
  ];

  return (
    <>
      {/* Hero */}
      <div className="rounded-ammaar bg-[url('https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/services-bg.jpg')] bg-cover bg-center w-full">
        <div className="bg-black/60 text-white min-h-[800px] rounded-ammaar p-6 flex flex-col justify-between">
          <Navbar />

          <div className="text-center my-auto">
            <p className="text-xl">What We Offer</p>
            <h2 className="text-6xl md:text-8xl mt-2 font-normal">Our Services</h2>
          </div>

          <div />
        </div>
      </div>

      {/* Services List */}
      <div className="bg-white rounded-ammaar mt-8 p-6 md:p-ammaar">
        <div className="text-center max-w-2xl mx-auto py-10">
          <h2 className="text-5xl">What We Do</h2>
          <p className="mt-6 text-ammaar-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
          </p>
          <div className="w-14 h-px bg-ammaar-3 mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
          {services.map((service) => (
            <div key={service.id} className="border border-gray-200 rounded-[25px] p-8 hover:border-ammaar-1 transition-colors">
              <p className="text-ammaar-1 font-semibold text-lg">{service.id}</p>
              <h3 className="text-3xl mt-4">{service.title}</h3>
              <p className="mt-4 text-ammaar-3 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="mt-8 rounded-ammaar bg-[url('https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/cta.jpg')] bg-cover bg-center min-h-[500px] flex items-center justify-center p-6">
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