'use client'
import { ArrowRight, Upload } from "lucide-react";
import React, { useState } from "react";

const TeacherRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    specialty: "",
    email: "",
    phone: "",
    cv: null,
    diploma: null,
    additionalDocs: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;

    if (name === "additionalDocs") {
      setFormData((prev) => ({
        ...prev,
        additionalDocs: [...prev.additionalDocs, ...files],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    
    // Redirect to teacher profile page after submission
    window.location.href = '/profile/teacher';
  };

  const FileUploadField = ({ label, name, onChange }) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">{label}</label>
        <div className="flex items-center gap-2 border border-[#333333]/40 rounded-lg p-3 cursor-pointer hover:border-[#111111] transition-all">
          <Upload size={18} />
          <input
            type="file"
            name={name}
            onChange={onChange}
            className="hidden"
            id={name}
          />
          <label htmlFor={name} className="cursor-pointer flex-1">
            {formData[name] ? formData[name].name : "Choose file"}
          </label>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-[#333333]/20 p-8">
          <h2 className="text-2xl font-bold mb-6">Teacher Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-[#333333]/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Specialty
              </label>
              <select
                name="specialty"
                value={formData.specialty}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-[#333333]/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111] bg-white"
                required
              >
                <option value="">Select your specialty</option>
                <option value="Front-End">Front-End</option>
                <option value="Back-End">Back-End</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-[#333333]/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-[#333333]/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
                required
              />
            </div>

            <div className="mt-8 mb-4">
              <h3 className="text-lg font-semibold mb-4">
                Additional Documents
              </h3>
              <FileUploadField
                label="CV/Resume"
                name="cv"
                onChange={handleFileChange}
              />

              <FileUploadField
                label="Diploma"
                name="diploma"
                onChange={handleFileChange}
              />

              <FileUploadField
                label="Additional Documents"
                name="additionalDocs"
                onChange={handleFileChange}
              />
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="group relative flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-[#333333]/40 bg-transparent px-8 py-3 text-sm font-semibold text-[#111111] cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:text-white active:scale-[0.95]"
              >
                <ArrowRight className="absolute w-4 h-4 left-[-25%] stroke-[#111111] fill-none z-[9] group-hover:left-4 group-hover:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                <span className="relative z-[1] group-hover:text-white -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
                  Complete Registration
                </span>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#111111] rounded-[50%] opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
                <ArrowRight className="absolute w-4 h-4 right-4 stroke-[#111111] fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherRegister;
