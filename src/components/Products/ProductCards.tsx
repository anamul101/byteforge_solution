import React from "react";
import ProductsCards from "./ProductsCards";

const ProductCards = () => {
  return (
    <section className="text-white">
      <div className="container">
        <div>
          <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-10 md:mb-20 md:mt-12 ρi ρihcq">
            <h1 className="font-aeonik leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">
              Products
            </h1>
            <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 lg:text-xl [text-wrap:balance] [white-space:inherit] block font-normal">
              Scale's Platform and products were developed by ML engineers for
              ML engineers to deliver large volumes of unbiased, highly accurate
              training data at speed.
            </p>
          </div>
        </div>
        <ProductsCards />
      </div>
    </section>
  );
};

export default ProductCards;
