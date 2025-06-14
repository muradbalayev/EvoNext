import React from 'react'
import Link from 'next/link'

const CourseHeader = ({ title, subtitle }) => {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center text-sm mb-4">
          <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-gray-900 font-medium">All Courses</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h1>
            <p className="mt-2 text-gray-600">{subtitle}</p>
          </div>
          <div className="bg-white rounded-full px-4 py-2 flex items-center shadow-sm">
            <span className="text-sm font-medium text-purple-600 mr-2">50 Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseHeader
