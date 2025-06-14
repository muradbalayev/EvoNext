'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TeacherCourses from '@/components/profile/teacher/TeacherCourses';
import TeacherLessons from '@/components/profile/teacher/TeacherLessons';
import TeacherStudents from '@/components/profile/teacher/TeacherStudents';
import TeacherStats from '@/components/profile/teacher/TeacherStats';
import Link from 'next/link';

const TeacherProfile = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock teacher data (would come from API/backend)
  const teacher = {
    name: 'Alex Johnson',
    specialty: 'Front-End',
    email: 'alex@example.com',
    phone: '+1234567890',
    joinDate: 'June 10, 2025',
    totalStudents: 48,
    totalCourses: 3,
    rating: 4.8
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
              <p className="mt-1 text-sm text-gray-500">Welcome back, {teacher.name}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button 
                className="group relative flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-[#333333]/40 bg-transparent px-6 py-2 text-sm font-semibold text-[#111111] cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:text-white active:scale-[0.95]"
              >
                <Link href="/profile/teacher/create" className="relative z-[1] group-hover:text-white transition-all duration-[800ms] ease-out">
                  Create New Course
                </Link>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#111111] rounded-[50%] opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TeacherStats teacher={teacher} />

        {/* Tabs */}
        <div className="mt-8">
          <Tabs defaultValue="courses" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="lessons">Lessons</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
            </TabsList>
            <TabsContent value="courses">
              <TeacherCourses />
            </TabsContent>
            <TabsContent value="lessons">
              <TeacherLessons />
            </TabsContent>
            <TabsContent value="students">
              <TeacherStudents />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
