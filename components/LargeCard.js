import Image from "next/image";
import React from "react";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          alt=""
          fill
          sizes="70vw"
          className="rounded-2xl object-cover object-right"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>

        <button className="text-sm tet-white bg-gray-900 px-4 py-2 rounded-lg mt-5 text-white">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
