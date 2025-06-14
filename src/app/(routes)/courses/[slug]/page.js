import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import CourseHero from '@/components/courses/CourseHero'
import CourseTabs from '@/components/courses/CourseTabs'
import CourseEnrollment from '@/components/courses/CourseEnrollment'

const CourseDetailPage = ({ params }) => {
  const { slug } = params

  return (
    <div className="bg-white min-h-screen">
      {/* Course Hero Section */}
      <CourseHero slug={slug} />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/courses" className="hover:text-gray-700">Courses</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">{slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <CourseTabs slug={slug} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <CourseEnrollment slug={slug} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailPage
