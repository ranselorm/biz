import Image from "next/image";
import React from "react";

const Clientelle = () => {
  return (
    <div className=" h-[180px]">
      <div className="px-[200px]">
        <div className="flex justify-between">
          <div className="relative w-[120px] h-[120px]">
            <Image src="/hair-jem.jpeg" alt="" fill />
          </div>
          <div className="relative w-[120px] h-[120px]">
            <Image src="/hair-jem.jpeg" alt="" fill />
          </div>
          <div className="relative w-[120px] h-[120px]">
            <Image src="/hair-jem.jpeg" alt="" fill />
          </div>
          <div className="relative w-[120px] h-[120px]">
            <Image src="/hair-jem.jpeg" alt="" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientelle;
