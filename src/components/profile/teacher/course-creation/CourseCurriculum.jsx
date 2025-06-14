'use client';

import React, { useState } from 'react';
import { Plus, X, GripVertical, ChevronDown, ChevronUp } from 'lucide-react';

const CourseCurriculum = ({ formData, setFormData }) => {
  const [newSection, setNewSection] = useState('');
  const [newLessonTitle, setNewLessonTitle] = useState('');
  const [newLessonDuration, setNewLessonDuration] = useState('');
  const [activeSectionIndex, setActiveSectionIndex] = useState(null);
  const [activeEditSection, setActiveEditSection] = useState(null);

  const handleAddSection = () => {
    if (newSection.trim() === '') return;
    
    setFormData(prev => ({
      ...prev,
      curriculum: [
        ...prev.curriculum,
        {
          title: newSection,
          lessons: []
        }
      ]
    }));
    
    setNewSection('');
    setActiveSectionIndex(formData.curriculum.length);
  };

  const handleAddLesson = (sectionIndex) => {
    if (newLessonTitle.trim() === '') return;
    
    const updatedCurriculum = [...formData.curriculum];
    updatedCurriculum[sectionIndex].lessons.push({
      title: newLessonTitle,
      duration: newLessonDuration || '00:30',
      type: 'video'
    });
    
    setFormData(prev => ({
      ...prev,
      curriculum: updatedCurriculum
    }));
    
    setNewLessonTitle('');
    setNewLessonDuration('');
  };

  const handleRemoveSection = (sectionIndex) => {
    const updatedCurriculum = formData.curriculum.filter((_, index) => index !== sectionIndex);
    setFormData(prev => ({
      ...prev,
      curriculum: updatedCurriculum
    }));
    
    if (activeSectionIndex === sectionIndex) {
      setActiveSectionIndex(null);
    } else if (activeSectionIndex > sectionIndex) {
      setActiveSectionIndex(activeSectionIndex - 1);
    }
  };

  const handleRemoveLesson = (sectionIndex, lessonIndex) => {
    const updatedCurriculum = [...formData.curriculum];
    updatedCurriculum[sectionIndex].lessons.splice(lessonIndex, 1);
    
    setFormData(prev => ({
      ...prev,
      curriculum: updatedCurriculum
    }));
  };

  const toggleSectionCollapse = (index) => {
    setActiveSectionIndex(activeSectionIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-6">
      <h3 className="text-lg font-semibold mb-4">Course Curriculum</h3>
      
      {/* Add New Section */}
      <div className="mb-6 flex gap-2">
        <input
          type="text"
          value={newSection}
          onChange={(e) => setNewSection(e.target.value)}
          placeholder="Enter section title (e.g. Introduction)"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
        />
        <button
          onClick={handleAddSection}
          className="px-4 py-2 bg-[#111111] text-white rounded-lg hover:bg-[#333333] transition-colors flex items-center gap-1"
        >
          <Plus className="w-4 h-4" />
          <span>Add Section</span>
        </button>
      </div>
      
      {/* Curriculum Sections */}
      <div className="space-y-4">
        {formData.curriculum.map((section, sectionIndex) => (
          <div key={sectionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Section Header */}
            <div className="bg-gray-50 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GripVertical className="w-5 h-5 text-gray-400 cursor-move" />
                {activeEditSection === sectionIndex ? (
                  <input
                    type="text"
                    value={section.title}
                    onChange={(e) => {
                      const updatedCurriculum = [...formData.curriculum];
                      updatedCurriculum[sectionIndex].title = e.target.value;
                      setFormData(prev => ({
                        ...prev,
                        curriculum: updatedCurriculum
                      }));
                    }}
                    onBlur={() => setActiveEditSection(null)}
                    autoFocus
                    className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#111111]"
                  />
                ) : (
                  <h4 
                    className="font-medium text-gray-900 cursor-pointer"
                    onClick={() => setActiveEditSection(sectionIndex)}
                  >
                    {section.title}
                  </h4>
                )}
                <span className="text-sm text-gray-500">
                  ({section.lessons.length} {section.lessons.length === 1 ? 'lesson' : 'lessons'})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleSectionCollapse(sectionIndex)}
                  className="p-1 rounded-full hover:bg-gray-200"
                >
                  {activeSectionIndex === sectionIndex ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                <button
                  onClick={() => handleRemoveSection(sectionIndex)}
                  className="p-1 rounded-full hover:bg-gray-200 text-red-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Section Content (Lessons) */}
            {activeSectionIndex === sectionIndex && (
              <div className="p-4 bg-white">
                {/* Existing Lessons */}
                <ul className="space-y-2 mb-4">
                  {section.lessons.map((lesson, lessonIndex) => (
                    <li 
                      key={lessonIndex}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        <GripVertical className="w-4 h-4 text-gray-400 cursor-move" />
                        <span className="font-medium">{lesson.title}</span>
                        <span className="text-xs text-gray-500">({lesson.duration})</span>
                      </div>
                      <button
                        onClick={() => handleRemoveLesson(sectionIndex, lessonIndex)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </li>
                  ))}
                </ul>
                
                {/* Add New Lesson */}
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    value={newLessonTitle}
                    onChange={(e) => setNewLessonTitle(e.target.value)}
                    placeholder="Lesson title"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
                  />
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newLessonDuration}
                      onChange={(e) => setNewLessonDuration(e.target.value)}
                      placeholder="Duration (e.g. 00:30)"
                      className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
                    />
                    <button
                      onClick={() => handleAddLesson(sectionIndex)}
                      className="px-4 py-2 bg-[#111111] text-white rounded-lg hover:bg-[#333333] transition-colors flex items-center gap-1"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Lesson</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {formData.curriculum.length === 0 && (
        <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500 mb-2">No sections added yet</p>
          <p className="text-sm text-gray-400">Add sections and lessons to build your course curriculum</p>
        </div>
      )}
    </div>
  );
};

export default CourseCurriculum;
