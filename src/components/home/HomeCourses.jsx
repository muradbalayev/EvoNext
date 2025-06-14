import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Code,
  Palette,
  VideoIcon,
  Microscope,
  Calculator,
} from "lucide-react";
import { FlowButton } from "../ui/flow-button";

const HomeCourses = () => {
  const categories = [
    {
      id: 1,
      title: "Development",
      description: "Web, Mobile & Software Development",
      icon: Code,
      courses: 120,
      students: "14K+",
      featured: true,
    },
    {
      id: 2,
      title: "Design",
      description: "UI/UX, Graphic & Motion Design",
      icon: Palette,
      courses: 85,
      students: "9K+",
      featured: false,
    },
    {
      id: 3,
      title: "Business",
      description: "Marketing, Finance & Entrepreneurship",
      icon: Calculator,
      courses: 95,
      students: "11K+",
      featured: false,
    },
    {
      id: 4,
      title: "Science",
      description: "Physics, Chemistry & Biology",
      icon: Microscope,
      courses: 70,
      students: "7K+",
      featured: false,
    },
    {
      id: 5,
      title: "Media",
      description: "Video Production & Photography",
      icon: VideoIcon,
      courses: 60,
      students: "6K+",
      featured: false,
    },
    {
      id: 6,
      title: "Academics",
      description: "Mathematics, Literature & History",
      icon: BookOpen,
      courses: 110,
      students: "13K+",
      featured: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Course Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of course categories designed to help you
            master new skills and advance your career.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`group relative overflow-hidden rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-lg ${
                category.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* Card Content */}
              <div className="flex flex-col h-full p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div className="rounded-full bg-gray-100 p-3 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                    {React.createElement(category.icon, {
                      className: "w-6 h-6",
                    })}
                  </div>
                  <span className="text-sm text-gray-500">
                    {category.courses} courses
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-black">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {category.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm font-medium border-b p-2 rounded-md shadow-sm">
                    {category.students} students
                  </span>
                  
                  <FlowButton text="Explore" />
                </div>
              </div>

              {/* Hover Effect - Bottom Border */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeCourses;
