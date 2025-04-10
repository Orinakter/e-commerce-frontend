import Image from "next/image";
import React from "react";

const FeatureProduct = () => {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Featured Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow-sm flex items-center gap-4">
            <Image
              src="/images/beg.jpg"
              alt="13. Product Media"
              width={300}
              height={300}
              className="mx-auto h-40 object-contain"
            />
            <div>
              <p className="text-sm text-gray-500">Bags & Wallets</p>
              <h3 className="text-base font-semibold">Bags & Baubles</h3>
              <p className="text-orange-500 font-semibold">$79.00</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-sm flex items-center gap-4">
            <Image
              src="/images/image10.jpg"
              alt="13. Product Media"
              width={300}
              height={300}
              className="mx-auto h-40 object-contain"
            />
            <div>
              <p className="text-sm text-gray-500">Gadget and Accessories</p>
              <h3 className="text-base font-semibold">Samsung S22 Ulta Pro</h3>
              <p className="text-orange-500 font-semibold">$39.00</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-sm flex items-center gap-4">
            <Image
              src="/images/image8.jpg"
              alt=""
              width={300}
              height={300}
              className="mx-auto h-40 object-contain"
            />
            <div>
              <p className="text-sm text-gray-500">Beauty & Health</p>
              <h3 className="text-base font-semibold">Blush Blossom</h3>
              <p className="text-orange-500 font-semibold">$29.00</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-sm flex items-center gap-4">
            <Image
              src="/images/images30.jpg"
              alt=""
              width={300}
              height={300}
              className="mx-auto h-40 object-contain"
            />{" "}
            <div>
              <p className="text-sm text-gray-500">Footwear</p>
              <h3 className="text-base font-semibold">Vogue Walk</h3>
              <p className="text-orange-500 font-semibold">$55.00</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow-sm flex items-center gap-4">
            <Image
              src="/images/images21.jpg"
              alt="13. Product Media"
              width={300}
              height={300}
              className="mx-auto h-40 object-contain"
            />{" "}
            <div>
              <p className="text-sm text-gray-500">Perfumes & body mists</p>
              <h3 className="text-base font-semibold">Essence of Elegance</h3>
              <p className="text-orange-500 font-semibold">$55.00</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow-sm flex items-center gap-4">
            <Image
              src="/images/images15.jpg"
              alt="13. Product Media"
              width={300}
              height={300}
              className="mx-auto h-40 object-contain"
            />{" "}
            <div>
              <p className="text-sm text-gray-500">Clothes</p>
              <h3 className="text-base font-semibold">Comfort Collective</h3>
              <p className="text-orange-500 font-semibold">$55.00</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FeatureProduct;
