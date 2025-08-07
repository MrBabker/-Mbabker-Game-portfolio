import Link from "next/link";
import React from "react";

export default function HeadBar() {
  const bungeef = {
    fontFamily: "var(--font-bungee), sans-serif",
  };
  return (
    <div>
      <div className="  justify-center   justify-items-center text-center  p-4 bg-gray-600 w-full h-20 md:h-12 overflow-hidden ">
        <div className="  md:flex">
          <div>
            {" "}
            <span className=" text-gray-300 font-semibold">Email : </span>
            <span className="ml-1 text-blue-300  mr-2">
              {"  "}
              <Link href="mailto:smilemedo@outlook.com">
                smilemedo@outlook.com
              </Link>
            </span>
          </div>
          <div>
            {" "}
            <span className="ml-2 text-gray-300 font-semibold">
              Phone number :{" "}
            </span>
            <span className="ml-1 text-blue-300 ">971502385815</span> 📱 💬
          </div>
        </div>
      </div>
    </div>
  );
}
