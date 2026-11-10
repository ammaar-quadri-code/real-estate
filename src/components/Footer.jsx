import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-8">
      {/* 4-Column Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
        <h1 className="text-2xl">
          Real<span className="font-bold">Estate</span>
        </h1>

        <div>
          <h3 className="text-xl tracking-widest uppercase">About Us</h3>
          <p className="mt-4 text-ammaar-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.
          </p>
        </div>

        <div>
          <h3 className="text-xl tracking-widest uppercase">Contact Info</h3>
          <div className="mt-4 flex flex-col gap-1 text-ammaar-1">
            <p>13, Fifth Avenue, New York, NY 101660</p>
            <p>contact@info.com</p>
            <p>555-345-4599</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl tracking-widest uppercase">Property Search</h3>
          <p className="mt-4 text-ammaar-3">Lorem ipsum dolor sit amet, consectetur elit.</p>
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              placeholder="Search Properties"
              className="w-full border border-gray-300 bg-white px-3 py-2 outline-none focus:border-ammaar-1 rounded"
            />
            <button className="bg-ammaar-1 hover:bg-ammaar-4 text-white px-4 rounded-full transition-colors">
              🔍
            </button>
          </div>
        </div>
      </div>

      {/* Credit tag */}
      <div className="text-center py-6 border-t border-gray-300">
        <p className="text-ammaar-3">
          Made by{' '}
          <span className="text-2xl font-bold bg-gradient-to-r from-ammaar-4 to-ammaar-5 bg-clip-text text-transparent">
            Ammaar Quadri
          </span>
        </p>
      </div>
    </footer>
  );
}