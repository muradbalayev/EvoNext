'use client';

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const CourseRequirements = ({ formData, setFormData }) => {
  const [newRequirement, setNewRequirement] = useState('');
  const [newOutcome, setNewOutcome] = useState('');

  const handleAddRequirement = () => {
    if (newRequirement.trim() === '') return;
    
    setFormData(prev => ({
      ...prev,
      requirements: [...prev.requirements, newRequirement]
    }));
    
    setNewRequirement('');
  };

  const handleRemoveRequirement = (index) => {
    const updatedRequirements = formData.requirements.filter((_, i) => i !== index);
    
    setFormData(prev => ({
      ...prev,
      requirements: updatedRequirements
    }));
  };

  const handleAddOutcome = () => {
    if (newOutcome.trim() === '') return;
    
    setFormData(prev => ({
      ...prev,
      outcomes: [...prev.outcomes, newOutcome]
    }));
    
    setNewOutcome('');
  };

  const handleRemoveOutcome = (index) => {
    const updatedOutcomes = formData.outcomes.filter((_, i) => i !== index);
    
    setFormData(prev => ({
      ...prev,
      outcomes: updatedOutcomes
    }));
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Requirements */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Course Requirements</h3>
          <p className="text-sm text-gray-500 mb-4">
            List the knowledge, tools, or skills that students need to have before taking this course
          </p>
          
          <div className="mb-4 flex gap-2">
            <input
              type="text"
              value={newRequirement}
              onChange={(e) => setNewRequirement(e.target.value)}
              placeholder="e.g. Basic HTML knowledge"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
            />
            <button
              onClick={handleAddRequirement}
              className="px-4 py-2 bg-[#111111] text-white rounded-lg hover:bg-[#333333] transition-colors flex items-center gap-1"
            >
              <Plus className="w-4 h-4" />
              <span>Add</span>
            </button>
          </div>
          
          <ul className="space-y-2">
            {formData.requirements.map((requirement, index) => (
              <li 
                key={index}
                className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
              >
                <span>{requirement}</span>
                <button
                  onClick={() => handleRemoveRequirement(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
          
          {formData.requirements.length === 0 && (
            <div className="text-center py-4 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <p className="text-sm text-gray-400">No requirements added yet</p>
            </div>
          )}
        </div>
        
        {/* Outcomes */}
        <div>
          <h3 className="text-lg font-semibold mb-4">What Students Will Learn</h3>
          <p className="text-sm text-gray-500 mb-4">
            List the skills and knowledge students will gain after completing your course
          </p>
          
          <div className="mb-4 flex gap-2">
            <input
              type="text"
              value={newOutcome}
              onChange={(e) => setNewOutcome(e.target.value)}
              placeholder="e.g. Build responsive websites"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111]"
            />
            <button
              onClick={handleAddOutcome}
              className="px-4 py-2 bg-[#111111] text-white rounded-lg hover:bg-[#333333] transition-colors flex items-center gap-1"
            >
              <Plus className="w-4 h-4" />
              <span>Add</span>
            </button>
          </div>
          
          <ul className="space-y-2">
            {formData.outcomes.map((outcome, index) => (
              <li 
                key={index}
                className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
              >
                <span>{outcome}</span>
                <button
                  onClick={() => handleRemoveOutcome(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
          
          {formData.outcomes.length === 0 && (
            <div className="text-center py-4 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <p className="text-sm text-gray-400">No outcomes added yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseRequirements;
