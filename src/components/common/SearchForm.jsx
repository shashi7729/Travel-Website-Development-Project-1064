import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiMapPin, FiCalendar, FiUsers, FiCompass } = FiIcons;

const SearchForm = ({ onSearch, className = '' }) => {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 2
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchData);
  };

  const handleChange = (field, value) => {
    setSearchData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className={`search-form p-8 ${className}`}
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Destination */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Safari Destination
          </label>
          <div className="relative">
            <SafeIcon icon={FiMapPin} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Kenya, Tanzania, Botswana..."
              value={searchData.destination}
              onChange={(e) => handleChange('destination', e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Check In */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Start Date
          </label>
          <div className="relative">
            <SafeIcon icon={FiCalendar} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="date"
              value={searchData.checkIn}
              onChange={(e) => handleChange('checkIn', e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Check Out */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            End Date
          </label>
          <div className="relative">
            <SafeIcon icon={FiCalendar} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="date"
              value={searchData.checkOut}
              onChange={(e) => handleChange('checkOut', e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Travelers
          </label>
          <div className="relative">
            <SafeIcon icon={FiUsers} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              value={searchData.guests}
              onChange={(e) => handleChange('guests', parseInt(e.target.value))}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white/80 backdrop-blur-sm"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>
                  {num} Traveler{num > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full md:w-auto mt-8 btn-safari text-lg px-12 py-4 flex items-center justify-center space-x-3"
      >
        <SafeIcon icon={FiCompass} className="h-6 w-6" />
        <span>Find My Safari</span>
      </motion.button>
    </motion.form>
  );
};

export default SearchForm;