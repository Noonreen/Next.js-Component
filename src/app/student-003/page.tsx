"use client"

import React from "react";
import Image from "next/image";
import Link from 'next/link'
import { useRouter } from "next/navigation";


export default function IdCard() {
const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-slate-200 p-12 rounded-xl shadow-lg w-full max-w-lg border-2 border-sky-400 relative">
        
          {/*Logo */}

          <Image
            src={"/images/logo.png"}
            alt="logo"
            width={40}
            height={18}
            className="absolute top-[25px] left-10 z-10"
          />
      {/*background */}

          <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <Image
                src="/images/bg-removebg-preview.png"
                alt="background photo"
                width={400}
                height={300}
                className="object-cover"
              />
            </div>

          {/*Left section*/}

          
          <div className="relative pt-12 relative z-10">
            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong>Name:</strong>
              </span>
              <span> Fatima khan </span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong>Roll no:</strong>
              </span>
              <span> 000999999 </span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong>Distance Learning:</strong>
              </span>
              <span> No </span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong>City:</strong>
              </span>
              <span> Karachi </span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong>Campus:</strong>
              </span>
              <span> Main </span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> Batch:</strong>
              </span>
              <span> 1 </span>
            </p>
          

          {/*lower section*/}

          <div className="mt-6">
            <button className="relative w-full p-2 rounded-lg border border-gray-400 bg-sky-600 text-white font-bold items-center justify-center flex">
              <span
                className="absolute inset-0 bg-slate-500"
                style={{ width: "50%" }}
              ></span>
              <span className="relative z-10"> Q1 & WMD</span>
            </button>
            </div>
          </div>

          {/*right section*/}

          <div className="absolute top-10 right-4 w-1/3 text-center">
            <Image
              src={"/images/2.jpg"}
              alt={"photo"}
              width={80}
              height={80}
              className="rounded-lg mb-6 w-full border border-sky-500"
            />

            <p className="border-t-2 border-slate-400 pt-2 font-bold text-sky-500 mt-4 text-xl">
              Authorized Signature{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="
     text-center">
     <button
          onClick={() => router.push("/")}
          className="mb-12 p-5 bg-sky-500 text-white rounded-xl"
        >
          Home page
        </button>
     </div>
    </div>

  );
}
