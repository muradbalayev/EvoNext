"use client"
import React, { useState } from 'react'
import { Check } from 'lucide-react'

const CourseTabs = ({ slug }) => {
  const [activeTab, setActiveTab] = useState('overview')
  
  // In a real app, you would fetch course data based on the slug
  // This is sample data for demonstration
  const courseData = {
    overview: {
      title: "What you'll learn",
      description: "Are you new to PHP or need a refresher? Then this course will help you get all the fundamentals of Procedural PHP, Object Oriented PHP, MYSQLi and ending the course by building a CMS system similar to WordPress, Joomla or Drupal. Knowing PHP has allowed me to make enough money to stay home and make courses like this one for students all over the world.",
      learningPoints: [
        "Become an advanced, confident, and modern JavaScript developer from scratch.",
        "Use the Jupyter Notebook Environment. JavaScript developer from scratch.",
        "Use the pandas module with Python to create and structure data.",
        "Have a fundamental understanding of the Python programming language.",
        "Understand how to create basic data visualizations using matplotlib and seaborn.",
        "Have a portfolio of various data analysis projects."
      ]
    },
    content: {
      sections: [
        {
          title: "Getting Started with PHP",
          lessons: [
            { title: "Introduction to PHP", duration: "15:00", preview: true },
            { title: "Setting Up Your Environment", duration: "20:30", preview: false },
            { title: "Basic Syntax and Variables", duration: "18:45", preview: false }
          ]
        },
        {
          title: "Working with Databases",
          lessons: [
            { title: "Introduction to MySQL", duration: "22:15", preview: true },
            { title: "Creating and Managing Databases", duration: "25:00", preview: false },
            { title: "CRUD Operations", duration: "30:10", preview: false }
          ]
        },
        {
          title: "Building a CMS",
          lessons: [
            { title: "Project Setup", duration: "18:30", preview: false },
            { title: "User Authentication", duration: "27:45", preview: false },
            { title: "Content Management", duration: "35:20", preview: false }
          ]
        }
      ]
    },
    details: {
      includes: [
        "12 hours on-demand video",
        "Full lifetime access",
        "Access on mobile and TV",
        "Certificate of completion"
      ],
      requirements: [
        "Basic knowledge of HTML and CSS",
        "A computer with internet connection",
        "Desire to learn PHP"
      ],
      audience: [
        "Beginners with no prior PHP experience",
        "Web developers looking to expand their skills",
        "Anyone interested in building dynamic websites"
      ]
    },
    instructor: {
      name: "Eliana Elena",
      role: "Senior Web Developer",
      bio: "Eliana has been teaching web development for over 10 years and has helped thousands of students launch their careers in tech.",
      experience: "15+ years of experience in web development",
      courses: 12,
      students: 15000,
      rating: 4.8,
      avatar: "https://histudy.pixcelsthemes.com/assets/images/course/instructor-01.jpg"
    },
    reviews: [
      {
        id: 1,
        user: "John Doe",
        avatar: "https://histudy.pixcelsthemes.com/assets/images/course/student-01.jpg",
        rating: 5,
        date: "2 weeks ago",
        comment: "This course exceeded my expectations. The instructor explains complex concepts in a way that's easy to understand."
      },
      {
        id: 2,
        user: "Jane Smith",
        avatar: "https://histudy.pixcelsthemes.com/assets/images/course/student-02.jpg",
        rating: 4,
        date: "1 month ago",
        comment: "Great course with practical examples. I've learned a lot and feel confident in my PHP skills now."
      }
    ]
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">{courseData.overview.title}</h2>
            <p className="text-gray-600">{courseData.overview.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {courseData.overview.learningPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3 text-gray-600">{point}</p>
                </div>
              ))}
            </div>
            
            <button className="flex items-center text-blue-600 font-medium">
              Show More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        );
      
      case 'content':
        return (
          <div className="space-y-8">
            {courseData.content.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-6 py-4">
                  <h3 className="font-semibold text-lg">Section {sectionIndex + 1}: {section.title}</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {section.lessons.map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className="flex items-center justify-between px-6 py-4">
                      <div className="flex items-center">
                        {lesson.preview ? (
                          <button className="mr-4 text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </button>
                        ) : (
                          <div className="mr-4 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                        )}
                        <span className="text-gray-800">{lesson.title}</span>
                        {lesson.preview && (
                          <span className="ml-3 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">Preview</span>
                        )}
                      </div>
                      <span className="text-gray-500 text-sm">{lesson.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'details':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">This Course Includes</h3>
              <ul className="space-y-2">
                {courseData.details.includes.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Requirements</h3>
              <ul className="list-disc pl-5 space-y-2">
                {courseData.details.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Who This Course is For</h3>
              <ul className="list-disc pl-5 space-y-2">
                {courseData.details.audience.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      
      case 'instructor':
        return (
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <img 
                  src={courseData.instructor.avatar} 
                  alt={courseData.instructor.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold">{courseData.instructor.name}</h3>
                <p className="text-gray-600">{courseData.instructor.role}</p>
                
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-2">{courseData.instructor.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < Math.floor(courseData.instructor.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="mx-4 text-gray-300">|</span>
                  <span className="text-gray-600">{courseData.instructor.courses} Courses</span>
                  <span className="mx-4 text-gray-300">|</span>
                  <span className="text-gray-600">{courseData.instructor.students.toLocaleString()} Students</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">About Me</h4>
              <p className="text-gray-600">{courseData.instructor.bio}</p>
              <p className="text-gray-600 mt-4">{courseData.instructor.experience}</p>
            </div>
          </div>
        );
      
      case 'reviews':
        return (
          <div className="space-y-8">
            {courseData.reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-6">
                <div className="flex items-start">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={review.avatar} 
                      alt={review.user}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <h4 className="font-semibold">{review.user}</h4>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-500 text-sm">{review.date}</span>
                    </div>
                    
                    <div className="flex mt-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
              View All Reviews
            </button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <div className="flex overflow-x-auto">
          <button
            className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'content' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('content')}
          >
            Course Content
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'details' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('details')}
          >
            Details
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'instructor' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('instructor')}
          >
            Instructor
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('reviews')}
          >
            Review
          </button>
        </div>
      </div>
      
      {/* Tab Content */}
      {renderTabContent()}
    </div>
  )
}

export default CourseTabs
