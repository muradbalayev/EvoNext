import React from 'react'
import CourseCard from './CourseCard'
import { Search } from 'lucide-react'

const CourseGrid = () => {
  // Sample course data - in a real app, this would come from an API
  const courses = [
    {
      id: 1,
      slug: 'react-front-to-back',
      title: 'React Front To Back',
      description: 'It is a long established fact that a reader will be distracted.',
      image: 'https://histudy.pixcelsthemes.com/livepreview/histudy/assets/images/course/course-online-02.jpg',
      lessons: 12,
      students: 50,
      rating: 5,
      reviews: 15,
      price: 60,
      originalPrice: 120,
      discount: 40,
      instructor: {
        name: 'Angela',
        avatar: 'https://histudy.pixcelsthemes.com/livepreview/histudy/assets/images/course/course-online-03.jpg',
      },
      category: 'Development',
      addToCart: false
    },
    {
      id: 2,
      slug: 'php-beginner-advanced',
      title: 'PHP Beginner Advanced',
      description: 'It is a long established fact that a reader will be distracted.',
      image: 'https://histudy.pixcelsthemes.com/livepreview/histudy/assets/images/course/course-online-01.jpg',
      lessons: 12,
      students: 50,
      rating: 5,
      reviews: 15,
      price: 60,
      originalPrice: 120,
      discount: 0,
      instructor: {
        name: 'Angela',
        avatar: 'https://histudy.pixcelsthemes.com/livepreview/histudy/assets/images/course/course-online-04.jpg',
      },
      category: 'Development',
      addToCart: true
    },
    {
      id: 3,
      slug: 'angular-zero-to-mastery',
      title: 'Angular Zero to Mastery',
      description: 'Angular is long fact that a reader will be distracted by the readable.',
      image: 'https://histudy.pixcelsthemes.com/livepreview/histudy/assets/images/course/course-online-04.jpg',
      lessons: 8,
      students: 30,
      rating: 4,
      reviews: 5,
      price: 80,
      originalPrice: 100,
      discount: 20,
      instructor: {
        name: 'Slaughter',
        avatar: 'https://histudy.pixcelsthemes.com/livepreview/histudy/assets/images/course/course-online-05.jpg',
      },
      category: 'Languages',
      addToCart: false
    },
    {
      id: 4,
      slug: 'javascript-fundamentals',
      title: 'JavaScript Fundamentals',
      description: 'Learn the core concepts of JavaScript programming language.',
      image: 'https://histudy.pixcelsthemes.com/livepreview/histudy/assets/images/course/course-online-05.jpg',
      lessons: 15,
      students: 75,
      rating: 4,
      reviews: 20,
      price: 70,
      originalPrice: 140,
      discount: 50,
      instructor: {
        name: 'Michael',
        avatar: 'https://histudy.pixcelsthemes.com/livepreview/histudy/assets/images/course/course-online-04.jpg',
      },
      category: 'Development',
      addToCart: false
    },
    {
      id: 5,
      slug: 'ui-ux-design-principles',
      title: 'UI/UX Design Principles',
      description: 'Master the principles of user interface and user experience design.',
      image: 'https://histudy.pixcelsthemes.com/livepreview/histudy/assets/images/course/course-online-03.jpg',
      lessons: 10,
      students: 45,
      rating: 5,
      reviews: 12,
      price: 90,
      originalPrice: 120,
      discount: 25,
      instructor: {
        name: 'Sophia',
        avatar: 'https://histudy.pixcelsthemes.com/livepreview/histudy/assets/images/course/course-online-05.jpg',
      },
      category: 'Design',
      addToCart: true
    },
    {
      id: 6,
      slug: 'python-data-science',
      title: 'Python for Data Science',
      description: 'Learn how to analyze and visualize data using Python.',
      image: 'https://histudy.pixcelsthemes.com/livepreview/histudy/assets/images/course/course-online-06.jpg',
      lessons: 18,
      students: 60,
      rating: 4,
      reviews: 18,
      price: 85,
      originalPrice: 110,
      discount: 0,
      instructor: {
        name: 'Robert',
        avatar: 'https://histudy.pixcelsthemes.com/livepreview/histudy/assets/images/course/course-online-05.jpg',
      },
      category: 'Data Science',
      addToCart: false
    }
  ]

  return (
    <div>
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="relative flex-1 w-full md:max-w-md">
          <input
            type="text"
            placeholder="Search Your Course..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-2 text-sm font-medium">
          Filter
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <nav className="flex items-center space-x-2">
          <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="px-4 py-2 rounded-md bg-purple-600 text-white">1</button>
          <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">2</button>
          <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">3</button>
          <button className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  )
}

export default CourseGrid
