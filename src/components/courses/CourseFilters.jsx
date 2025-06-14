import React from 'react'

const CourseFilters = () => {
  const categories = [
    { id: 'development', name: 'Development', count: 15 },
    { id: 'design', name: 'Design', count: 12 },
    { id: 'business', name: 'Business', count: 8 },
    { id: 'marketing', name: 'Marketing', count: 6 },
    { id: 'photography', name: 'Photography', count: 5 },
    { id: 'music', name: 'Music', count: 4 },
  ]

  const levels = [
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
  ]

  const prices = [
    { id: 'free', name: 'Free' },
    { id: 'paid', name: 'Paid' },
  ]

  return (
    <div className="space-y-8">
      {/* View Type */}
      <div className="bg-white p-5 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">View</h3>
        <div className="flex gap-2">
          <button className="flex-1 py-2 bg-purple-600 text-white rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2">Showing 1-9 of 19 results</p>
      </div>

      {/* Categories */}
      <div className="bg-white p-5 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500 h-4 w-4" />
                <span className="ml-2 text-gray-700">{category.name}</span>
              </label>
              <span className="text-sm text-gray-500">({category.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Level */}
      <div className="bg-white p-5 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Level</h3>
        <div className="space-y-2">
          {levels.map((level) => (
            <div key={level.id} className="flex items-center">
              <input
                id={`level-${level.id}`}
                name="level"
                type="radio"
                className="h-4 w-4 border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <label htmlFor={`level-${level.id}`} className="ml-3 text-gray-700">
                {level.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="bg-white p-5 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Price</h3>
        <div className="space-y-2">
          {prices.map((price) => (
            <div key={price.id} className="flex items-center">
              <input
                id={`price-${price.id}`}
                name="price"
                type="radio"
                className="h-4 w-4 border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <label htmlFor={`price-${price.id}`} className="ml-3 text-gray-700">
                {price.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Reset Filters */}
      <button className="w-full py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
        Reset Filters
      </button>
    </div>
  )
}

export default CourseFilters
