'use client';

import React, { useState } from 'react';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';
import CourseBasicInfo from '@/components/profile/teacher/course-creation/CourseBasicInfo';
import CourseDetailsAndPricing from '@/components/profile/teacher/course-creation/CourseDetailsAndPricing';
import CourseCurriculum from '@/components/profile/teacher/course-creation/CourseCurriculum';
import CourseRequirements from '@/components/profile/teacher/course-creation/CourseRequirements';

const CreateCourse = () => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    imageFile: null,
    imagePreview: null,
    category: '',
    level: '',
    duration: '',
    maxStudents: '',
    totalLessons: '',
    price: '',
    originalPrice: '',
    requirements: [],
    outcomes: [],
    curriculum: [],
    status: 'draft' // draft or active
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Here you would typically upload the image and send the data to your API
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Course data submitted:', formData);
      
      // Redirect to teacher profile page
      window.location.href = '/profile/teacher';
    } catch (error) {
      console.error('Error creating course:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <Link href="/profile/teacher" className="flex items-center text-gray-600 hover:text-gray-900 mb-2">
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span>Back to Dashboard</span>
          </Link>
          <h1 className="text-3xl font-bold">Create New Course</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Save as Draft
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-6 py-2 bg-[#111111] text-white rounded-lg hover:bg-[#333333] transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Creating...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Create Course</span>
              </>
            )}
          </button>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <CourseBasicInfo formData={formData} setFormData={setFormData} />
        <CourseDetailsAndPricing formData={formData} setFormData={setFormData} />
        <CourseCurriculum formData={formData} setFormData={setFormData} />
        <CourseRequirements formData={formData} setFormData={setFormData} />
        
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-[#111111] text-white rounded-lg hover:bg-[#333333] transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Creating Course...</span>
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                <span>Create Course</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
