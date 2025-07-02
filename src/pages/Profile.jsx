import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useTravel } from '../contexts/TravelContext';
import { useNavigate } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiMail, FiPhone, FiMapPin, FiEdit2, FiSave, FiX, FiHeart, FiCalendar, FiTrendingUp } = FiIcons;

const Profile = () => {
  const { user, logout } = useAuth();
  const { bookings, favorites, destinations } = useTravel();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    bio: 'Travel enthusiast exploring the world one destination at a time.'
  });

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to view your profile</h2>
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

  const handleSave = () => {
    // Here you would typically save to your backend
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const favoriteDestinations = destinations.filter(dest => favorites.includes(dest.id));
  const confirmedBookings = bookings.filter(booking => booking.status === 'confirmed');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="text-center mb-6">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                {!isEditing ? (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{profileData.name}</h2>
                    <p className="text-gray-600">{profileData.email}</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full text-center text-xl font-bold text-gray-900 border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full text-center text-gray-600 border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiPhone} className="h-5 w-5 text-gray-400" />
                  {!isEditing ? (
                    <span className="text-gray-700">{profileData.phone}</span>
                  ) : (
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="flex-1 border border-gray-200 rounded px-3 py-1 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  )}
                </div>

                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiMapPin} className="h-5 w-5 text-gray-400" />
                  {!isEditing ? (
                    <span className="text-gray-700">{profileData.location}</span>
                  ) : (
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="flex-1 border border-gray-200 rounded px-3 py-1 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  )}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">About</h3>
                {!isEditing ? (
                  <p className="text-gray-600 text-sm">{profileData.bio}</p>
                ) : (
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    rows={3}
                    className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                )}
              </div>

              <div className="mt-6 space-y-2">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-full flex items-center justify-center space-x-2 bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <SafeIcon icon={FiEdit2} className="h-4 w-4" />
                    <span>Edit Profile</span>
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSave}
                      className="flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <SafeIcon icon={FiSave} className="h-4 w-4" />
                      <span>Save</span>
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="flex-1 flex items-center justify-center space-x-2 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <SafeIcon icon={FiX} className="h-4 w-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                )}
                
                <button
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                  className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            </motion.div>
          </div>

          {/* Stats and Activity */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Travel Stats</h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <SafeIcon icon={FiCalendar} className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{confirmedBookings.length}</div>
                  <div className="text-sm text-gray-600">Trips Booked</div>
                </div>
                <div className="text-center">
                  <SafeIcon icon={FiHeart} className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{favorites.length}</div>
                  <div className="text-sm text-gray-600">Favorites</div>
                </div>
                <div className="text-center">
                  <SafeIcon icon={FiTrendingUp} className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">
                    ${confirmedBookings.reduce((total, booking) => total + (booking.destination.price * booking.guests), 0)}
                  </div>
                  <div className="text-sm text-gray-600">Total Spent</div>
                </div>
              </div>
            </motion.div>

            {/* Recent Bookings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Recent Bookings</h3>
                <button
                  onClick={() => navigate('/bookings')}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  View All
                </button>
              </div>
              
              {confirmedBookings.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-400 text-4xl mb-2">📅</div>
                  <p className="text-gray-600">No bookings yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {confirmedBookings.slice(0, 3).map((booking) => (
                    <div key={booking.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <img
                        src={booking.destination.image}
                        alt={booking.destination.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{booking.destination.name}</h4>
                        <p className="text-sm text-gray-600">{booking.destination.location}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-primary-600">
                          ${booking.destination.price * booking.guests}
                        </div>
                        <div className="text-xs text-gray-500">{booking.guests} guests</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Favorite Destinations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Favorite Destinations</h3>
                <button
                  onClick={() => navigate('/destinations')}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  Explore More
                </button>
              </div>
              
              {favoriteDestinations.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-400 text-4xl mb-2">❤️</div>
                  <p className="text-gray-600">No favorites yet</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {favoriteDestinations.slice(0, 4).map((destination) => (
                    <div key={destination.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">{destination.name}</h4>
                        <p className="text-xs text-gray-600">{destination.location}</p>
                      </div>
                      <div className="text-primary-600 font-semibold text-sm">
                        ${destination.price}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;