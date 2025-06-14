
import React from 'react';
import { ArrowRight, Upload } from 'lucide-react';
import Link from 'next/link';

const Register = () => {
 
 

  const FlowButtonSmall = ({ text, type }) => {
    return (
      <Link href={`/register/${type.toLowerCase()}`}>
        <button
        className="group relative flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-[#333333]/40 bg-transparent px-6 py-2 text-sm font-semibold text-[#111111] cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:text-white active:scale-[0.95]"
      >
        <span className="relative z-[1] group-hover:text-white transition-all duration-[800ms] ease-out">
          {text}
        </span>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#111111] rounded-[50%] opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
      </button>
      </Link>
    );
  };

  const UserTypeCard = ({ type, description }) => {
    return (
      <div 
        className="flex flex-col items-center p-8 border border-[#333333]/40 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-[#111111]"
      >
        <h3 className="text-xl font-bold mb-4">{type}</h3>
        <p className="text-center text-gray-600 mb-6">{description}</p>
        <FlowButtonSmall text={`Register as ${type}`} type={type}/>
      </div>
    );
  };



  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join EvoNext</h1>
          <p className="text-xl text-gray-600">Begin your journey with us</p>
        </div>

        <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <UserTypeCard 
                type="Teacher" 
                description="Join as a teacher to share your knowledge and expertise with students."
              />
              <UserTypeCard 
                type="Student" 
                description="Join as a student to learn from our expert teachers and advance your skills."
              />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Register;
