import React from "react";

function MenuItem() {
  return (
    <div
      className="bg-gray-200 p-4  rounded-lg text-center hover:bg-white
    hover:shadow-md  hover:shadow-black/35"
    >
      <div className="text-center">
        <img
          src="/salamino.jpg"
          alt="pizza"
          className="max-h-auto max-h-28 block mx-auto rounded-full hover:max-h-35 -z-100"
        />
      </div>
      <h2 className="font-semibold my-2">prosciotto pizza</h2>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
        harum commodi velit, modi corporis fFacilis saepe totam fugit
        perferendis?
      </p>
      <button className="mt-4 bg-red-800 text-2xl text-white py-2 px-9 rounded-full">
        Add to Cark
      </button>
    </div>
  );
}

export default MenuItem;
