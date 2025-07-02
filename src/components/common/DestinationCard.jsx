import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTravel } from '../../contexts/TravelContext';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiStar, FiClock, FiMapPin, FiUsers, FiCamera } = FiIcons;

const DestinationCard = ({ destination, index = 0 }) => {
  const { favorites, toggleFavorite } = useTravel();
  const isFavorite = favorites.includes(destination.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="safari-card bg-white shadow-lg overflow-hidden card-hover group"
    >
      <div className="relative overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        <button
          onClick={() => toggleFavorite(destination.id)}
          className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-sm transition-all ${
            isFavorite 
              ? 'bg-red-500/90 text-white' 
              : 'bg-white/20 text-white hover:bg-white/30'
          }`}
        >
          <SafeIcon icon={FiHeart} className="h-5 w-5" />
        </button>

        <div className="safari-content absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <SafeIcon icon={FiMapPin} className="h-4 w-4" />
            <span className="text-sm font-medium">{destination.location}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 font-serif">{destination.name}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <SafeIcon icon={FiStar} className="h-4 w-4 text-primary-400" />
                <span className="text-sm font-semibold">{destination.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <SafeIcon icon={FiClock} className="h-4 w-4" />
                <span className="text-sm">{destination.duration}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-primary-300">${destination.price}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {destination.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiUsers} className="h-4 w-4" />
              <span>{destination.groupSize}</span>
            </div>
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiCamera} className="h-4 w-4" />
              <span>{destination.difficulty}</span>
            </div>
          </div>
          <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full font-semibold">
            {destination.category}
          </span>
        </div>

        <div className="space-y-2 mb-6">
          <h4 className="font-semibold text-gray-900 text-sm">Highlights:</h4>
          <div className="flex flex-wrap gap-1">
            {destination.highlights.slice(0, 3).map((highlight, idx) => (
              <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <Link
          to={`/destination/${destination.id}`}
          className="block w-full text-center btn-safari"
        >
          Book Safari
        </Link>
      </div>
    </motion.div>
  );
};

export default DestinationCard;