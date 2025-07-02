import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTravel } from '../contexts/TravelContext';
import { format } from 'date-fns';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiMapPin, FiUsers, FiClock, FiX, FiEye } = FiIcons;

const Bookings = () => {
  const { user } = useAuth();
  const { bookings, cancelBooking } = useTravel();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to view your bookings</h2>
          <button
            onClick={() => navigate('/login')}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  const filteredBookings = bookings.filter(booking => {
    if (filter === 'all') return true;
    return booking.status === filter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">My Bookings</h1>
          <p className="text-gray-600">Manage your travel bookings and reservations.</p>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-1 mb-8 inline-flex">
          {[
            { key: 'all', label: 'All Bookings' },
            { key: 'confirmed', label: 'Confirmed' },
            { key: 'cancelled', label: 'Cancelled' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                filter === tab.key
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bookings List */}
        {filteredBookings.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No bookings found
            </h3>
            <p className="text-gray-600 mb-6">
              You haven't made any bookings yet. Start exploring amazing destinations!
            </p>
            <button
              onClick={() => navigate('/destinations')}
              className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Explore Destinations
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredBookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={booking.destination.image}
                      alt={booking.destination.name}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {booking.destination.name}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <SafeIcon icon={FiMapPin} className="h-4 w-4 mr-1" />
                          <span className="text-sm">{booking.destination.location}</span>
                        </div>
                      </div>
                      
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)}`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-2" />
                        <div>
                          <div className="text-xs text-gray-500">Check-in</div>
                          <div className="text-sm font-medium">
                            {format(new Date(booking.checkIn), 'MMM dd, yyyy')}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-2" />
                        <div>
                          <div className="text-xs text-gray-500">Check-out</div>
                          <div className="text-sm font-medium">
                            {format(new Date(booking.checkOut), 'MMM dd, yyyy')}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <SafeIcon icon={FiUsers} className="h-4 w-4 mr-2" />
                        <div>
                          <div className="text-xs text-gray-500">Guests</div>
                          <div className="text-sm font-medium">{booking.guests}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <SafeIcon icon={FiClock} className="h-4 w-4 mr-2" />
                        <div>
                          <div className="text-xs text-gray-500">Duration</div>
                          <div className="text-sm font-medium">{booking.destination.duration}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-2xl font-bold text-primary-600">
                          ${booking.destination.price * booking.guests}
                        </span>
                        <span className="text-gray-500 ml-2">total</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button
                          onClick={() => navigate(`/destination/${booking.destination.id}`)}
                          className="flex items-center space-x-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <SafeIcon icon={FiEye} className="h-4 w-4" />
                          <span>View</span>
                        </button>
                        
                        {booking.status === 'confirmed' && (
                          <button
                            onClick={() => {
                              if (window.confirm('Are you sure you want to cancel this booking?')) {
                                cancelBooking(booking.id);
                              }
                            }}
                            className="flex items-center space-x-1 bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors"
                          >
                            <SafeIcon icon={FiX} className="h-4 w-4" />
                            <span>Cancel</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {booking.specialRequests && (
                      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Special Requests:</div>
                        <div className="text-sm text-gray-700">{booking.specialRequests}</div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;