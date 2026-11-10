import React from 'react';
import Navbar from '../components/Navbar';

const propertyList = [
  {
    id: 1,
    tag: 'APARTMENT - QUEENS',
    title: 'Modern Stylish Apartment',
    price: '$150,000',
    image: 'https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/feature-01.jpg'
  },
  {
    id: 2,
    tag: 'APARTMENT - QUEENS',
    title: 'Contemporary Apartments',
    price: '$150,000',
    image: 'https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/feature-02.jpg'
  },
  {
    id: 3,
    tag: 'HOUSE - QUEENS',
    title: 'Suburban Single-Family Homes',
    price: '$150,000',
    image: 'https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/feature-03.jpg'
  },
  {
    id: 4,
    tag: 'VILLA - BROOKLYN',
    title: 'Luxury Family Villa',
    price: '$250,000',
    image: 'https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/feature-04.jpg'
  },
  {
    id: 5,
    tag: 'APARTMENT - MANHATTAN',
    title: 'City View Penthouse',
    price: '$320,000',
    image: 'https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/feature-05.jpg'
  },
  {
    id: 6,
    tag: 'HOUSE - BRONX',
    title: 'Cozy Garden House',
    price: '$180,000',
    image: 'https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/feature-06.jpg'
  }
];

export default function Properties() {
  return (
    <>
      {/* Hero */}
      <div className="rounded-ammaar bg-[url('https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/properties-bg.jpg')] bg-cover bg-center w-full">
        <div className="bg-black/60 text-white min-h-[600px] rounded-ammaar p-6 flex flex-col justify-between">
          <Navbar />

          <div className="text-center my-auto">
            <p className="text-xl">Find Your Dream Home</p>
            <h2 className="text-6xl md:text-8xl mt-2 font-normal">Properties</h2>
          </div>

          <div />
        </div>
      </div>

      {/* Grid */}
      <div className="py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-5xl">Featured Properties</h2>
          <p className="mt-6 text-ammaar-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
          </p>
          <div className="w-14 h-px bg-ammaar-1 mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {propertyList.map((item) => (
            <div key={item.id} className="group">
              <div
                className="h-[330px] rounded-[25px] bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.02]"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <p className="mt-6 text-sm tracking-widest">{item.tag}</p>
              <h3 className="text-2xl mt-3">{item.title}</h3>
              <p className="mt-3 text-ammaar-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="mt-4 text-xl font-semibold text-ammaar-4">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}