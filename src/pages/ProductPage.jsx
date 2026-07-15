import React from "react";

const ProductPage = ({ doc }) => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="bg-white shadow-xl rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left - Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={doc.image}
            alt={doc.title}
            className="h-96 object-contain"
          />
        </div>

        {/* Right - Product Details */}
        <div>

          <h1 className="text-3xl font-bold mb-4">
            {doc.title}
          </h1>

          <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mb-4 capitalize">
            {doc.category}
          </span>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-600 text-white px-2 py-1 rounded">
              ⭐ {doc.rating.rate}
            </span>

            <span className="text-gray-500">
              ({doc.rating.count} Reviews)
            </span>
          </div>

          {/* Price */}
          <h2 className="text-4xl font-bold text-red-600 mb-6">
            ${doc.price}
          </h2>

          {/* Description */}
          <p className="text-gray-700 leading-7 mb-8">
            {doc.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
              Add to Cart
            </button>

            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition">
              Buy Now
            </button>
          </div>

          {/* Extra Information */}
          <div className="mt-8 border-t pt-6">
            <div className="flex justify-between py-2">
              <span className="font-semibold">Category</span>
              <span>{doc.category}</span>
            </div>

            <div className="flex justify-between py-2">
              <span className="font-semibold">Availability</span>
              <span className="text-green-600">In Stock</span>
            </div>

            <div className="flex justify-between py-2">
              <span className="font-semibold">Shipping</span>
              <span>Free Delivery</span>
            </div>

            <div className="flex justify-between py-2">
              <span className="font-semibold">Return Policy</span>
              <span>7 Days Return</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductPage;