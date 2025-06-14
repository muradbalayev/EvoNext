'use client';

import React, { useState } from 'react';
import { Search, Check, X, Mail, Phone, Download } from 'lucide-react';

const TeacherStudents = () => {
  // Mock students data (would come from API/backend)
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Emma Wilson',
      email: 'emma@example.com',
      phone: '+1234567890',
      course: 'Introduction to Front-End Development',
      attendance: 10,
      totalLessons: 12,
      progress: 83,
      lastActive: '2 days ago'
    },
    {
      id: 2,
      name: 'Michael Brown',
      email: 'michael@example.com',
      phone: '+1234567891',
      course: 'Introduction to Front-End Development',
      attendance: 8,
      totalLessons: 12,
      progress: 67,
      lastActive: '1 day ago'
    },
    {
      id: 3,
      name: 'Sophia Garcia',
      email: 'sophia@example.com',
      phone: '+1234567892',
      course: 'Advanced React Techniques',
      attendance: 9,
      totalLessons: 10,
      progress: 90,
      lastActive: 'Today'
    },
    {
      id: 4,
      name: 'James Johnson',
      email: 'james@example.com',
      phone: '+1234567893',
      course: 'Advanced React Techniques',
      attendance: 7,
      totalLessons: 10,
      progress: 70,
      lastActive: '3 days ago'
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('all');
  
  // Get unique courses for filter
  const courses = ['all', ...new Set(students.map(student => student.course))];
  
  // Filter students based on search query and selected course
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          student.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCourse = selectedCourse === 'all' || student.course === selectedCourse;
    
    return matchesSearch && matchesCourse;
  });

  // Mock attendance data for the selected lesson
  const [selectedLesson, setSelectedLesson] = useState('lesson-1');
  const [attendanceData, setAttendanceData] = useState({
    'lesson-1': {
      title: 'Introduction to HTML & CSS',
      date: '2025-06-15',
      attendance: {
        1: true,
        2: true,
        3: true,
        4: false
      }
    },
    'lesson-2': {
      title: 'JavaScript Basics',
      date: '2025-06-18',
      attendance: {
        1: true,
        2: false,
        3: true,
        4: true
      }
    }
  });

  const toggleAttendance = (studentId) => {
    setAttendanceData(prev => ({
      ...prev,
      [selectedLesson]: {
        ...prev[selectedLesson],
        attendance: {
          ...prev[selectedLesson].attendance,
          [studentId]: !prev[selectedLesson].attendance[studentId]
        }
      }
    }));
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Students</h2>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
            />
          </div>
          
          <div className="md:w-1/4">
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111] bg-white"
            >
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course === 'all' ? 'All Courses' : course}
                </option>
              ))}
            </select>
          </div>
          
          <button className="px-4 py-2 bg-[#111111] text-white rounded-lg hover:bg-[#333333] transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span>Export List</span>
          </button>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attendance
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Active
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                        {student.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-500">{student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.course}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.attendance}/{student.totalLessons}</div>
                    <div className="text-xs text-gray-500">{Math.round((student.attendance / student.totalLessons) * 100)}% attendance</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${student.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{student.progress}% complete</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.lastActive}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Mail className="w-5 h-5" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Phone className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredStudents.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300 mt-4">
            <p className="text-gray-500">No students found matching your search criteria</p>
          </div>
        )}
      </div>
      
      {/* Attendance Tracking Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Attendance Tracking</h2>
        
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Select Lesson</label>
            <select
              value={selectedLesson}
              onChange={(e) => setSelectedLesson(e.target.value)}
              className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111] bg-white"
            >
              {Object.keys(attendanceData).map((lessonId) => (
                <option key={lessonId} value={lessonId}>
                  {attendanceData[lessonId].title} ({attendanceData[lessonId].date})
                </option>
              ))}
            </select>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Attendance
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {students.map((student) => (
                  <tr key={student.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{student.name}</div>
                          <div className="text-sm text-gray-500">{student.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {attendanceData[selectedLesson]?.attendance[student.id] ? (
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Present
                        </span>
                      ) : (
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Absent
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => toggleAttendance(student.id)}
                        className={`inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white ${
                          attendanceData[selectedLesson]?.attendance[student.id]
                            ? 'bg-red-600 hover:bg-red-700'
                            : 'bg-green-600 hover:bg-green-700'
                        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                      >
                        {attendanceData[selectedLesson]?.attendance[student.id] ? (
                          <>
                            <X className="w-4 h-4 mr-1" />
                            Mark Absent
                          </>
                        ) : (
                          <>
                            <Check className="w-4 h-4 mr-1" />
                            Mark Present
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherStudents;
