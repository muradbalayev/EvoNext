'use client';

import React, { useState } from 'react';
import { Plus, Edit, Trash, Eye, Users, Calendar } from 'lucide-react';
import Link from 'next/link';

const TeacherCourses = () => {
  // Mock courses data (would come from API/backend)
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Introduction to Front-End Development',
      description: 'Learn the basics of HTML, CSS, and JavaScript',
      students: 24,
      lessons: 12,
      status: 'active',
      image: 'https://histudy.pixcelsthemes.com/livepreview/histudy/assets/images/course/course-online-02.jpg'
    },
    {
      id: 2,
      title: 'Advanced React Techniques',
      description: 'Master React hooks, context API, and performance optimization',
      students: 18,
      lessons: 10,
      status: 'active',
      image: 'https://histudy.pixcelsthemes.com/livepreview/histudy/assets/images/course/course-online-01.jpg'
    },
    {
      id: 3,
      title: 'Responsive Web Design',
      description: 'Create websites that work on any device and screen size',
      students: 6,
      lessons: 8,
      status: 'draft',
      image: 'https://histudy.pixcelsthemes.com/livepreview/histudy/assets/images/course/course-online-03.jpg'
    }
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCreateCourse = () => {
    setShowCreateModal(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Your Courses</h2>
        <button 
          onClick={handleCreateCourse}
          className="flex items-center gap-2 px-4 py-2 bg-[#111111] text-white rounded-lg hover:bg-[#333333] transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Create Course</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="h-48 bg-gray-200 relative">
              {course.image ? (
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <span className="text-gray-400">No image</span>
                </div>
              )}
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  course.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {course.status === 'active' ? 'Active' : 'Draft'}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
              
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{course.lessons} lessons</span>
                </div>
              </div>
              
              <div className="flex justify-between pt-4 border-t border-gray-100">
                <Link href={`/courses/${course.id}`}>
                  <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm">
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                </Link>
                <button className="text-gray-600 hover:text-gray-800 flex items-center gap-1 text-sm">
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                </button>
                <button className="text-red-600 hover:text-red-800 flex items-center gap-1 text-sm">
                  <Trash className="w-4 h-4" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {courses.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No courses yet</h3>
          <p className="text-gray-500 mb-6">Create your first course to start teaching</p>
          <button 
            onClick={handleCreateCourse}
            className="px-4 py-2 bg-[#111111] text-white rounded-lg hover:bg-[#333333] transition-colors"
          >
            Create Course
          </button>
        </div>
      )}
    </div>
  );
};

export default TeacherCourses;
