import React from "react";
import { GraduationCap, Users, Star, School, Award, Video } from "lucide-react";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";


const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const floatingBoxes = [
    { icon: GraduationCap, label: "UNIVERSITY", position: "top-10 right-10", delay: 0.5 },
    { icon: School, label: "SCHOOL", position: "top-32 left-0", delay: 0.7 },
    { icon: Users, label: "COACHING", position: "bottom-20 left-20", delay: 0.9 },
    { icon: Video, label: "ONLINE COURSES", position: "bottom-40 right-0", delay: 1.1 },
    { icon: Award, label: "CERTIFICATES", position: "top-40 left-40", delay: 1.3 },
  ];

  return (
    <div className="w-full min-h-[700px]  relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-200 opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-blue-200 opacity-30 blur-xl"></div>
      <div className="absolute top-40 right-20 w-20 h-20 rounded-full bg-indigo-300 opacity-20 blur-lg"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div 
            className="flex flex-col space-y-6"
 
          >
            <div variants={itemVariants} className="flex items-center space-x-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">18,000+ TRUSTED USERS</span>
            </div>
            
            <h1 
              
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Have your dream <br />
              <span className="text-gray-800">learning platform</span> <br />
              for <span className="text-blue-600">everyone.</span>
            </h1>
            
            <p 
              
              className="text-lg text-gray-600 max-w-lg"
            >
              The most powerful yet easiest platform for teachers to create, share and monetize their knowledge through online and offline courses.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                Explore Courses
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">200+</span>
                <span className="text-sm text-gray-600">Expert Teachers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">600+</span>
                <span className="text-sm text-gray-600">Quality Courses</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">10k+</span>
                <span className="text-sm text-gray-600">Active Students</span>
              </div>
            </div>
          </div>
          
          {/* Right column - Images and floating elements */}
          <div 
            className="relative h-[500px]"
          >
            {/* Main circular element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[350px] h-[350px] rounded-full bg-blue-600/10 flex items-center justify-center">
                <div className="w-[300px] h-[300px] rounded-full bg-blue-100 flex items-center justify-center relative">
                  <div className="w-[200px] h-[200px] rounded-full bg-blue-200 flex items-center justify-center">
                    <div className="w-[140px]  flex items-center justify-center">
                      <Image src="/icon.png" alt="Logo" width={456} height={355} className="w-full h-full object-contain"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            {floatingBoxes.map((box, index) => (
              <div 
                key={index}
                className={`absolute ${box.position} bg-white rounded-lg p-3 shadow-lg flex items-center justify-center w-24 h-24`}
              >
                <div className="flex flex-col items-center">
                  {React.createElement(box.icon, { className: "w-8 h-8 text-blue-600" })}
                  <span className="text-xs font-medium mt-1 text-center">{box.label}</span>
                </div>
              </div>
            ))}
            
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
              <path 
                d="M175,175 Q200,100 250,100" 
                stroke="#e0e7ff" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="5,5"
              />
              <path 
                d="M175,175 Q100,200 100,250" 
                stroke="#e0e7ff" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="5,5"
              />
              <path 
                d="M175,175 Q150,300 120,320" 
                stroke="#e0e7ff" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="5,5"
              />
              <path 
                d="M175,175 Q250,250 300,220" 
                stroke="#e0e7ff" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="5,5"
              />
              <path 
                d="M175,175 Q120,120 80,140" 
                stroke="#e0e7ff" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="5,5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
