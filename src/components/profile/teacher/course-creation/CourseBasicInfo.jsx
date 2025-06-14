'use client';

import React from 'react';
import { Camera } from 'lucide-react';

const CourseBasicInfo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-6">
      <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
      
      {/* Course Title */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Course Title *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. Complete JavaScript Course 2025"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
          required
        />
      </div>
      
      {/* Course Subtitle */}
      <div className="mb-4">
        <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-1">
          Course Subtitle
        </label>
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          placeholder="e.g. Master modern JavaScript from beginner to advanced"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
        />
      </div>
      
      {/* Course Description */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Course Description *
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          placeholder="Provide a detailed description of your course"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
          required
        />
      </div>
      
      {/* Course Image */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Course Image *
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
          <div className="space-y-1 text-center">
            <Camera className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label htmlFor="course-image" className="relative cursor-pointer bg-white rounded-md font-medium text-[#111111] hover:text-[#333333] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#111111]">
                <span>Upload a file</span>
                <input 
                  id="course-image" 
                  name="image" 
                  type="file" 
                  className="sr-only"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      const file = e.target.files[0];
                      const imageUrl = URL.createObjectURL(file);
                      setFormData(prev => ({
                        ...prev,
                        imageFile: file,
                        imagePreview: imageUrl
                      }));
                    }
                  }}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
        
        {formData.imagePreview && (
          <div className="mt-2">
            <img 
              src={formData.imagePreview} 
              alt="Course preview" 
              className="h-40 w-full object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseBasicInfo;
