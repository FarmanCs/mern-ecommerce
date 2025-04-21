import Image from "next/image";
import React from "react";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

function HomeMenu() {
  return (
    <section>
      <div className="absolute right-0 left-0 w-full">
        <div className="absolute -left-0 -top-24 text-[70px] -z-10">
          <Image
            src="/saled1.jpg"
            alt="saled"
            width={195}
            height={188}
            // objectFit="contain"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="h-48  absolute -top-24 right-0 -z-10">
          <Image src="/saled.jpg" alt="saled" width={300} height={120} />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders subHeader={"check out"} mainHeader={"Menu"} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}

export default HomeMenu;
