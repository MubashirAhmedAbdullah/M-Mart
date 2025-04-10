"use client"
import React, { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';

const FancySearchBar = ({ categories = ['All', 'Electronics', 'Books', 'Clothing', 'Home & Kitchen'] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(categories[0]); // Default to the first category
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setIsFilterOpen(false); // Close filter when category changes
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchTerm, 'in category:', category);
    // Implement your search logic here
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="relative w-full md:w-3/4 lg:w-1/2 mx-auto">
      <form
        className="flex items-center rounded-lg overflow-hidden border border-gray-300 focus-within:border-blue-500"
        onSubmit={handleSubmit}
      >
        {/* Filter Button (Mobile/Smaller Screens) */}
        <button
          type="button"
          className="bg-gray-100 text-gray-600 px-3 focus:outline-none md:hidden"
          onClick={toggleFilter}
        >
          <FaFilter className="h-5 w-5" />
        </button>

        {/* Category Dropdown (Desktop) */}
        <div className="relative md:block hidden">
          <select
            className="bg-gray-100 text-gray-700 border-none py-2 pl-3 pr-9 appearance-none focus:outline-none text-sm"
            value={category}
            onChange={handleCategoryChange}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
            <svg className="fill-current h-4 w-4 text-gray-500 mr-2" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        {/* Search Input */}
        <input
          type="text"
          className="flex-grow py-2 px-3 text-gray-700 focus:outline-none text-lg"
          placeholder={`Search for ${category === 'All' ? 'products' : category}...`}
          value={searchTerm}
          onChange={handleInputChange}
        />

        {/* Search Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 focus:outline-none rounded-r-lg"
        >
          <FaSearch className="h-5 w-5" />
        </button>
      </form>

      {/* Mobile Filter Dropdown */}
      {isFilterOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md rounded-b-lg z-10 mt-1">
          <ul className="py-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => handleCategoryChange({ target: { value: cat } })}
                  className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left ${
                    category === cat ? 'bg-gray-100 font-semibold' : ''
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FancySearchBar;