"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const tabs = [

    {
      href: "/",
      label: "Pest Detection",
    },
    {
      href: "/disease-detection",
      label: "Disease Detection",
    },
    {
      href: "/maturity-detection",
      label: "Maturity Detection",
    },
  ];
  return (
    <header className="w-full bg-gray-50 text-black">
      {/* bg-[#111714] */}
      <div className="flex items-center justify-between border-b border-[#29382f]  px-4 md:px-10 py-3">
        <div className="flex items-center gap-2 text-black">
          <div >
            {/* <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
            </svg> */}
            <Image src="/assets/logo2.png" alt="AgroAegis Logo" width={36} height={36}  />
          </div>
          <h2 className="text-lg font-bold tracking-[-0.015em] mt-2">AgroAegis</h2>
        </div>


      </div>
      <div className="max-w-screen-xl mx-auto flex flex-col px-4 md:px-10 py-5">
        <div className="flex flex-wrap justify-between gap-3 p-0 md:p-4">
          <p className="text-black text-2xl md:text-[32px] font-bold leading-tight min-w-60 md:min-w-72">
            Smart Agriculture 4.0 Dashboard
          </p>
        </div>
        {/* -------------------------- */}
        <div className="pb-3">
          <div className="flex border-b border-[#3d5245] px-2 md:px-4 gap-4 md:gap-8 overflow-x-auto">
            {tabs.map((tab) => {
              const isActive = pathname === tab.href;
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-4 ${isActive
                      ? "border-b-white text-black"
                      : "border-b-transparent text-[#9eb7a8]"
                    }`}
                >
                  <p className={`text-sm font-bold leading-normal tracking-[0.015em] ${isActive ? "text-black" : "text-gray-500"}`}>
                    {/* text-[#9eb7a8] */}
                    {tab.label}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
