import React from "react";

function SectionHeaders({ subHeader, mainHeader }) {
  return (
    <>
      <h2 className="uppercase text-4xl text-gray-700 font-semibold leading-6">
        {subHeader}
      </h2>
      <h3 className="text-red-600 text-4xl italic font-semibold mt-2">
        {" "}
        {mainHeader}
      </h3>
    </>
  );
}

export default SectionHeaders;
