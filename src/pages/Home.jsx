import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTravel } from '../contexts/TravelContext';
import SearchForm from '../components/common/SearchForm';
import DestinationCard from '../components/common/DestinationCard';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAward, FiUsers, FiGlobe, FiStar, FiCamera, FiCompass, FiMapPin, FiClock } = FiIcons;

const Home = () => {
  const { destinations, searchDestinations } = useTravel();
  const navigate = useNavigate();
  
  const featuredDestinations = destinations.slice(0, 6);

  const handleSearch = (searchData) => {
    searchDestinations(searchData.destination);
    navigate('/destinations');
  };

  const stats = [
    { icon: FiUsers, value: '15K+', label: 'Happy Travelers' },
    { icon: FiGlobe, value: '25+', label: 'Safari Destinations' },
    { icon: FiAward, value: '4.9', label: 'Average Rating' },
    { icon: FiStar, value: '100%', label: 'Wildlife Guarantee' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'California, USA',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      text: 'Absolutely incredible experience! The Kenya safari exceeded all expectations. Saw all Big Five and the guide was phenomenal.',
      rating: 5,
      safari: 'Kenya Safari Adventure'
    },
    {
      name: 'David Thompson',
      location: 'London, UK',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      text: 'The gorilla trekking in Rwanda was life-changing. Professional organization and unforgettable wildlife encounters.',
      rating: 5,
      safari: 'Rwanda Gorilla Trekking'
    },
    {
      name: 'Maria Garcia',
      location: 'Barcelona, Spain',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      text: 'Perfect blend of adventure and luxury. The Okavango Delta safari was magical - highly recommend Safari Tours!',
      rating: 5,
      safari: 'Botswana Okavango Delta'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center parallax-bg"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow font-serif">
              Discover Africa's
              <span className="block text-primary-300">Wild Heart</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-shadow">
              Embark on extraordinary safari adventures and witness Africa's magnificent wildlife in their natural habitat. Your journey of a lifetime starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/destinations" className="btn-safari text-lg px-8 py-4">
                <SafeIcon icon={FiCompass} className="mr-2 h-5 w-5" />
                Explore Safaris
              </Link>
              <Link to="/about" className="btn-adventure text-lg px-8 py-4">
                <SafeIcon icon={FiCamera} className="mr-2 h-5 w-5" />
                Our Story
              </Link>
            </div>
          </motion.div>

          <SearchForm onSearch={handleSearch} className="max-w-5xl mx-auto" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-32 left-10 floating-animation">
          <div className="w-24 h-24 bg-primary-500/20 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute bottom-32 right-10 floating-animation" style={{ animationDelay: '2s' }}>
          <div className="w-20 h-20 bg-secondary-500/20 rounded-full backdrop-blur-sm"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <SafeIcon icon={stat.icon} className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 font-serif">{stat.value}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Safaris */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Featured Safari Adventures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked safari experiences that showcase Africa's most spectacular wildlife destinations. Each journey promises unforgettable encounters with nature's greatest treasures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredDestinations.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                index={index}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/destinations"
              className="btn-safari text-lg px-8 py-4"
            >
              <SafeIcon icon={FiGlobe} className="mr-2 h-5 w-5" />
              View All Safaris
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section 
        className="section-padding parallax-bg relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1549366021-9f761d040a94?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow font-serif">
              Why Safari Tours?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto text-shadow">
              We're passionate about creating authentic African experiences that connect you with wildlife and local communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Local Guides',
                description: 'Our certified guides have decades of experience and intimate knowledge of wildlife behavior and habitats.',
                image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
                icon: FiUsers
              },
              {
                title: 'Sustainable Tourism',
                description: 'We support conservation efforts and local communities, ensuring your safari contributes to wildlife protection.',
                image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop',
                icon: FiGlobe
              },
              {
                title: 'Luxury & Comfort',
                description: 'Experience the wild in style with premium accommodations, gourmet meals, and world-class service.',
                image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
                icon: FiAward
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 group">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-3">
                      <SafeIcon icon={feature.icon} className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-serif">{feature.title}</h3>
                <p className="text-white/90">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Safari Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from fellow adventurers who've experienced the magic of African safaris with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="h-5 w-5 text-primary-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-primary-600 font-semibold text-sm">{testimonial.safari}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding safari-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow font-serif">
              Ready for Your Safari Adventure?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-shadow">
              Join thousands of travelers who've discovered Africa's wild beauty. Your extraordinary safari journey awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/destinations"
                className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Book Your Safari Now
              </Link>
              <Link
                to="/contact"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors"
              >
                Plan Custom Safari
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;