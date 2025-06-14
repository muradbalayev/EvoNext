import Link from 'next/link'
import React from 'react'

const StudentRegister = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-[#333333]/20 p-8">
    <h2 className="text-2xl font-bold mb-6">Student Registration</h2>
    <p className="text-center text-gray-600 mb-6">Student registration form will be implemented here.</p>
    <div className="flex justify-center">
      <Link href="/register"> 
        <button 
        className="text-sm text-[#111111] hover:underline"
      >
        Go back to selection
      </button>
      </Link>
    </div>
  </div>
  </div>
  </div>
  )
}

export default StudentRegister
