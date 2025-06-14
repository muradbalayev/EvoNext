import React from 'react';
import { Users, BookOpen, Star } from 'lucide-react';

const TeacherStats = ({ teacher }) => {
  const stats = [
    {
      name: 'Total Students',
      value: teacher.totalStudents,
      icon: <Users className="w-6 h-6 text-blue-500" />,
      description: 'Students enrolled in your courses'
    },
    {
      name: 'Total Courses',
      value: teacher.totalCourses,
      icon: <BookOpen className="w-6 h-6 text-green-500" />,
      description: 'Active courses you are teaching'
    },
    {
      name: 'Rating',
      value: teacher.rating,
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      description: 'Average rating from students'
    }
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-gray-50 p-3">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm font-medium text-gray-500">{stat.name}</div>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherStats;
