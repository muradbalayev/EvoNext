import React from 'react'
import Image from 'next/image'
import { BookOpen, Video, Users, Star } from 'lucide-react'

const CourseHero = ({ slug }) => {
  // In a real app, you would fetch course data based on the slug
  // This is sample data for demonstration
  const course = {
    title: 'Difficult Things About Education',
    date: '01 JANUARY - 15 MARCH',
    instructor: 'ELIANA ELENA',
    image: 'https://histudy.pixcelsthemes.com/livepreview/histudy/assets/images/course/course-online-01.jpg',
    classes: 26,
    videos: 65,
    students: 40,
    rating: 5,
    reviews: 15
  }

  return (
    <div className="bg-gradient-to-t from-slate-700 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Course info */}
          <div className="space-y-6">
            <div className="text-sm font-medium">{course.date}</div>
            
            <h1 className="text-4xl md:text-5xl font-bold">{course.title}</h1>
            
            <div className="text-lg">
              Courses by <span className="font-medium">/{course.instructor}</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-md px-4 py-2 flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>{course.classes} Class</span>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-md px-4 py-2 flex items-center">
                <Video className="w-5 h-5 mr-2" />
                <span>{course.videos} Videos</span>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-md px-4 py-2 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>{course.students} Enroll Students</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Course image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image 
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
            />
            
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseHero
