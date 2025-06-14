'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Video, MapPin, Users, Plus, Edit, Trash } from 'lucide-react';

const TeacherLessons = () => {
  // Mock lessons data (would come from API/backend)
  const [lessons, setLessons] = useState([
    {
      id: 1,
      title: 'Introduction to HTML & CSS',
      courseTitle: 'Introduction to Front-End Development',
      date: '2025-06-15',
      time: '10:00 AM',
      duration: '2 hours',
      type: 'online',
      link: 'https://zoom.us/j/1234567890',
      attendees: 18,
      maxAttendees: 24
    },
    {
      id: 2,
      title: 'JavaScript Basics',
      courseTitle: 'Introduction to Front-End Development',
      date: '2025-06-18',
      time: '10:00 AM',
      duration: '2 hours',
      type: 'online',
      link: 'https://zoom.us/j/1234567890',
      attendees: 20,
      maxAttendees: 24
    },
    {
      id: 3,
      title: 'React Hooks Workshop',
      courseTitle: 'Advanced React Techniques',
      date: '2025-06-20',
      time: '2:00 PM',
      duration: '3 hours',
      type: 'offline',
      location: 'Tech Hub, Room 204',
      attendees: 12,
      maxAttendees: 18
    }
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [lessonType, setLessonType] = useState('online');

  const handleCreateLesson = () => {
    setShowCreateModal(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Upcoming Lessons</h2>
        <button 
          onClick={handleCreateLesson}
          className="flex items-center gap-2 px-4 py-2 bg-[#111111] text-white rounded-lg hover:bg-[#333333] transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Create Lesson</span>
        </button>
      </div>

      <div className="space-y-4">
        {lessons.map(lesson => (
          <div 
            key={lesson.id} 
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-bold text-lg">{lesson.title}</h3>
                <p className="text-gray-600 text-sm">{lesson.courseTitle}</p>
                
                <div className="mt-3 flex flex-wrap gap-4">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{lesson.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{lesson.time} ({lesson.duration})</span>
                  </div>
                  {lesson.type === 'online' ? (
                    <div className="flex items-center gap-1 text-sm text-blue-600">
                      <Video className="w-4 h-4" />
                      <span>Online (Zoom)</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-sm text-green-600">
                      <MapPin className="w-4 h-4" />
                      <span>{lesson.location}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>{lesson.attendees}/{lesson.maxAttendees} Attendees</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center gap-3">
                {lesson.type === 'online' && (
                  <a 
                    href={lesson.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200 transition-colors"
                  >
                    Join Zoom
                  </a>
                )}
                <button className="text-gray-600 hover:text-gray-800">
                  <Edit className="w-5 h-5" />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {lessons.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No lessons scheduled</h3>
          <p className="text-gray-500 mb-6">Create your first lesson to start teaching</p>
          <button 
            onClick={handleCreateLesson}
            className="px-4 py-2 bg-[#111111] text-white rounded-lg hover:bg-[#333333] transition-colors"
          >
            Schedule Lesson
          </button>
        </div>
      )}

      {/* Lesson Type Selection */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Lesson Settings</h3>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Lesson Type</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="lessonType" 
                  value="online" 
                  checked={lessonType === 'online'}
                  onChange={() => setLessonType('online')}
                  className="mr-2"
                />
                <span>Online</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="lessonType" 
                  value="offline" 
                  checked={lessonType === 'offline'}
                  onChange={() => setLessonType('offline')}
                  className="mr-2"
                />
                <span>Offline</span>
              </label>
            </div>
          </div>

          {lessonType === 'online' ? (
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Zoom Link</label>
                <input 
                  type="text" 
                  placeholder="https://zoom.us/j/..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
                />
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Location</label>
                <input 
                  type="text" 
                  placeholder="Enter classroom location"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
                />
              </div>
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Maximum Participants</label>
            <input 
              type="number" 
              min="1"
              placeholder="Enter maximum number of participants"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherLessons;
