'use client';

import React from 'react';
import { Clock, Users, BookOpen } from 'lucide-react';

const CourseDetailsAndPricing = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const categories = [
    'Front-End Development',
    'Back-End Development',
    'Full-Stack Development',
    'Mobile Development',
    'UI/UX Design',
    'Data Science',
    'Machine Learning',
    'DevOps',
    'Blockchain',
    'Other'
  ];

  const levels = ['Beginner', 'Intermediate', 'Advanced', 'All Levels'];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-6">
      <h3 className="text-lg font-semibold mb-4">Course Details & Pricing</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Category */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category *
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
            required
          >
            <option value="" disabled>Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        {/* Level */}
        <div className="mb-4">
          <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
            Level *
          </label>
          <select
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
            required
          >
            <option value="" disabled>Select a level</option>
            {levels.map((level, index) => (
              <option key={index} value={level}>{level}</option>
            ))}
          </select>
        </div>
        
        {/* Duration */}
        <div className="mb-4">
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
            Duration (hours) *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Clock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              min="1"
              placeholder="e.g. 10"
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
              required
            />
          </div>
        </div>
        
        {/* Max Students */}
        <div className="mb-4">
          <label htmlFor="maxStudents" className="block text-sm font-medium text-gray-700 mb-1">
            Maximum Students
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Users className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="maxStudents"
              name="maxStudents"
              value={formData.maxStudents}
              onChange={handleChange}
              min="1"
              placeholder="e.g. 50"
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
            />
          </div>
        </div>
        
        {/* Total Lessons */}
        <div className="mb-4">
          <label htmlFor="totalLessons" className="block text-sm font-medium text-gray-700 mb-1">
            Total Lessons *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BookOpen className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="totalLessons"
              name="totalLessons"
              value={formData.totalLessons}
              onChange={handleChange}
              min="1"
              placeholder="e.g. 12"
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
              required
            />
          </div>
        </div>
        
        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Price ($) *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              step="0.01"
              placeholder="e.g. 49.99"
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
              required
            />
          </div>
        </div>
        
        {/* Original Price (for discounts) */}
        <div className="mb-4">
          <label htmlFor="originalPrice" className="block text-sm font-medium text-gray-700 mb-1">
            Original Price ($)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <input
              type="number"
              id="originalPrice"
              name="originalPrice"
              value={formData.originalPrice}
              onChange={handleChange}
              min="0"
              step="0.01"
              placeholder="e.g. 99.99"
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">Leave empty if there's no discount</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsAndPricing;
