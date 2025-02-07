"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const page = () => {
const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
     <div>
      <h1 className='text-xl font-bold mb-8'> Giaic Student Card</h1>
     </div>
      <div className="bg-slate-200 p-12 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold text-sky-600 mb-8" >ID Card</h1>
        <h2 className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong>Name:</strong>
              </span>
              <span> Noureen Malik </span>
            </h2>
        <button
          onClick={() => router.push("/student-001")}
          className="mt-2 p-2 bg-sky-500 text-white rounded"
        >
          Admit card
        </button>
        <h2 className="mb-2 mt-8 ">
              <span className="text-sky-500">
                {" "}
                <strong>Name:</strong>
              </span>
              <span> Noor saba </span>
            </h2>
        <button
          onClick={() => router.push("/student-002")}
          className="mt-2 p-2 bg-sky-500 text-white rounded"
        >
          Admit card
        </button>
        <h2 className="mb-2 mt-8">
              <span className="text-sky-500">
                {" "}
                <strong>Name:</strong>
              </span>
              <span> Fatima khan</span>
            </h2>
            
        <button
          onClick={() => router.push("/student-003")}
          className="mt-2 p-2 bg-sky-500 text-white rounded"
        >
          Admit card
        </button>
      </div>
    </div>
  )
}
export default page