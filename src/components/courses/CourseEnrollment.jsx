import React from 'react'
import { Button } from '@/components/ui/button'
import { Clock, Award, Globe, ShieldCheck, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const CourseEnrollment = ({ slug }) => {
  // In a real app, you would fetch course data based on the slug
  // This is sample data for demonstration
  const course = {
    price: 60.99,
    originalPrice: 84.99,
    discount: true,
    daysLeft: 3,
    startDate: '5 Hrs 20 Min',
    enrolled: 100,
    lectures: 50,
    level: 'Basic',
    language: 'English',
    guarantee: '30-Day Money-Back Guarantee'
  }

  return (
    <div className="sticky top-6">
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {/* Price Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-gray-900">${course.price}</span>
              {course.discount && (
                <span className="ml-2 text-lg text-gray-500 line-through">${course.originalPrice}</span>
              )}
            </div>
            {course.discount && (
              <div className="flex items-center text-red-500 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {course.daysLeft} days left!
              </div>
            )}
          </div>
          
          <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-3">
            Add to Cart
          </Button>
          
          <Button variant="outline" className="w-full border-gray-300">
            Buy Now
          </Button>
          
          <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
            <ShieldCheck className="w-4 h-4 mr-2" />
            {course.guarantee}
          </div>
        </div>
        
        {/* Course Info */}
        <div className="p-6 space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Start Date</span>
            <span className="font-medium">{course.startDate}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Enrolled</span>
            <span className="font-medium">{course.enrolled}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Lectures</span>
            <span className="font-medium">{course.lectures}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Skill Level</span>
            <span className="font-medium">{course.level}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Language</span>
            <span className="font-medium">{course.language}</span>
          </div>
          
          <button className="flex items-center justify-center w-full text-blue-600 font-medium">
            Show More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Share Section */}
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-4">For details about the course</h3>
        <div className="bg-blue-100 rounded-lg p-4">
          <div className="flex items-center justify-center">
            <button className="flex items-center text-blue-600 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Us: +444 555 666 777
            </button>
          </div>
        </div>
      </div>
      
      {/* Social Share */}
      <div className="mt-6 flex items-center justify-center space-x-4">
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <Facebook className="w-6 h-6" />
        </a>
        <a href="#" className="text-blue-400 hover:text-blue-600">
          <Twitter className="w-6 h-6" />
        </a>
        <a href="#" className="text-pink-600 hover:text-pink-800">
          <Instagram className="w-6 h-6" />
        </a>
        <a href="#" className="text-blue-700 hover:text-blue-900">
          <Linkedin className="w-6 h-6" />
        </a>
      </div>
    </div>
  )
}

export default CourseEnrollment
