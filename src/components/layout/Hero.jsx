import Image from "next/image";
import React from "react";
import Right from "../icons/Right";

function Hero() {
  return (
    <section className="hero mt-6">
      <div className="py-12">
        <h1 className="text-5xl font-semibold">
          Everything
          <br /> is better with
          <br /> a&nbsp;
          <span className="text-red-500">Pizza</span>
        </h1>
        <p className="my-6 text-gray-600 tex-sm">
          pizza is the missing thing that makes every day complete, a yet
          delicious, joy in life
        </p>
        <div className="flex gap-5 ">
          <button className="flex items-center gap-4 bg-amber-700 text-white px-4 py-2 rounded-full uppercase text-sm">
            Order Now
            <Right />
          </button>
          <button className="flex items-center border-0  gap-2 py-2 text-gray-650 font-semibold">
            Learn More
            <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/margherita.jpg"
          alt="piza imag"
          layout="fill"
          objectFit="contain"
          className="rounded-full py-3"
        />
      </div>
    </section>
  );
}

export default Hero;
