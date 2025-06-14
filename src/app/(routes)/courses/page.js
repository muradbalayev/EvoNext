import React from 'react'
import CourseHeader from '@/components/courses/CourseHeader'
import CourseFilters from '@/components/courses/CourseFilters'
import CourseGrid from '@/components/courses/CourseGrid'

const page = () => {
  return (
    <div className="bg-white min-h-screen">
      <CourseHeader title="All Courses" subtitle="Courses that help beginner designers become true unicorns." />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar with filters */}
          <div className="lg:w-1/4">
            <CourseFilters />
          </div>
          
          {/* Main content with course grid */}
          <div className="lg:w-3/4">
            <CourseGrid />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
