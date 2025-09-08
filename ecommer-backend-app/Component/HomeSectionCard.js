import React from 'react';

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center rounded-lg shadow-lg overflow-hidden max-w-[15rem] w-full py-2 border-2">
      {/* Image Container */}
      <div className="h-[13rem] w-[10rem] flex justify-center items-center overflow-hidden">
        <img
          className="object-cover object-center w-full h-full"
          src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Product"
        />
      </div>
      {/* Product Info */}
      <div className="px-2 py-2">
        <h3 className="text-gray-800 font-semibold text-base">Product Name</h3>
        <h2 className="text-gray-800 font-semibold text-base">Product price</h2>
      </div>
    </div>
  );
};

export default HomeSectionCard;
