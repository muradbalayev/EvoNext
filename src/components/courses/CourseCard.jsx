import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, BookOpen, Users } from 'lucide-react'

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Course Image */}
      <div className="relative">
        <Link href={`/courses/${course.slug}`}>
          <div className="relative h-48 w-full">
            <Image 
              src={course.image} 
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>
        </Link>
        
        {/* Discount Badge */}
        {course.discount && (
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-sm font-bold rounded-full px-3 py-1">
            -{course.discount}% OFF
          </div>
        )}
        
        {/* Course Info Badges */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          <div className="bg-white/90 backdrop-blur-sm text-xs font-medium rounded px-2 py-1 flex items-center">
            <BookOpen className="w-3 h-3 mr-1" />
            {course.lessons} Class
          </div>
          <div className="bg-white/90 backdrop-blur-sm text-xs font-medium rounded px-2 py-1 flex items-center">
            <Users className="w-3 h-3 mr-1" />
            {course.students} Students
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="p-5">
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < course.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-2">({course.reviews} Reviews)</span>
          
          {/* Bookmark button */}
          <button className="ml-auto text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>
        
        {/* Title */}
        <Link href={`/courses/${course.slug}`}>
          <h3 className="font-bold text-lg mb-2 hover:text-purple-600 transition-colors">{course.title}</h3>
        </Link>
        
        {/* Lessons & Students */}
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 mr-1" />
            <span>{course.lessons} Lessons</span>
          </div>
          <div className="flex items-center ml-4">
            <Users className="w-4 h-4 mr-1" />
            <span>{course.students} Students</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">{course.description}</p>
        
        {/* Instructor */}
        <div className="flex items-center mb-4">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image 
              src={course.instructor.avatar} 
              alt={course.instructor.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="ml-2">
            <span className="text-xs text-gray-500">By</span>{' '}
            <span className="text-sm font-medium">{course.instructor.name}</span>{' '}
            <span className="text-xs text-gray-500">in</span>{' '}
            <span className="text-sm font-medium text-purple-600">{course.category}</span>
          </div>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-lg">${course.price}</span>
            {course.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">${course.originalPrice}</span>
            )}
          </div>
          
          {course.addToCart ? (
            <button className="text-sm flex items-center text-gray-700 hover:text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to Cart
            </button>
          ) : (
            <Link href={`/courses/${course.slug}`} className="text-sm flex items-center text-gray-700 hover:text-purple-600">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default CourseCard
