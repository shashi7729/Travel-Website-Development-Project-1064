import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAward, FiUsers, FiGlobe, FiHeart, FiShield, FiCompass } = FiIcons;

const About = () => {
  const values = [
    {
      icon: FiHeart,
      title: 'Passion for Travel',
      description: 'We are committed to creating unforgettable travel experiences that inspire and connect people with the world.'
    },
    {
      icon: FiUsers,
      title: 'Customer Excellence',
      description: 'Our dedicated team ensures every journey exceeds expectations with personalized service and attention to detail.'
    },
    {
      icon: FiShield,
      title: 'Safety & Trust',
      description: 'Your safety is our priority. We maintain the highest standards in travel planning, partnerships, and emergency support.'
    },
    {
      icon: FiGlobe,
      title: 'Global Reach',
      description: 'We connect travelers to destinations worldwide, promoting cultural exchange and responsible tourism practices.'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: '15+ years in travel industry with expertise in luxury and adventure travel',
      speciality: 'Global Travel Strategy'
    },
    {
      name: 'Sarah Chen',
      role: 'Travel Operations Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Expert in destination management and customer experience optimization',
      speciality: 'Luxury Travel Planning'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Adventure Travel Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Adventure travel expert with deep knowledge of unique destinations',
      speciality: 'Adventure & Cultural Tours'
    }
  ];

  const achievements = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '25,000+', label: 'Happy Travelers' },
    { number: '50+', label: 'Global Destinations' },
    { number: '99%', label: 'Customer Satisfaction' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 md:h-[500px] flex items-center justify-center parallax-bg"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow font-serif">Our Story</h1>
            <p className="text-xl md:text-2xl text-shadow max-w-2xl mx-auto">
              Passionate about travel and committed to creating extraordinary journeys around the world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
                Born from a Love of Travel
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Sky Travels was founded in 2014 by Alex Johnson, a passionate travel enthusiast with a vision to make extraordinary travel accessible to everyone. 
                  Starting from a small office in downtown, Alex's dream was to create personalized travel experiences that go beyond ordinary tourism.
                </p>
                <p>
                  What began as a boutique travel agency has evolved into a leading travel company, serving thousands of travelers worldwide. 
                  Our core values remain unchanged: exceptional service, authentic experiences, and creating memories that last a lifetime.
                </p>
                <p>
                  Every journey we plan is crafted with care, attention to detail, and deep knowledge of destinations, 
                  ensuring that each traveler discovers the world in their own unique way.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/destinations" className="btn-safari">
                  <SafeIcon icon={FiCompass} className="mr-2 h-5 w-5" />
                  Explore Destinations
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1549366021-9f761d040a94?w=600&h=800&fit=crop"
                alt="Travel adventure"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from planning your journey to supporting local communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                  <SafeIcon icon={value.icon} className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our passionate team of travel experts and destination specialists are dedicated to creating unforgettable experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
                  />
                  <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 bg-primary-600 text-white p-3 rounded-full">
                    <SafeIcon icon={FiAward} className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 mb-2">{member.bio}</p>
                <p className="text-sm text-primary-500 font-medium">{member.speciality}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section 
        className="section-padding parallax-bg relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 text-shadow font-serif">
              Our Achievements
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto text-shadow">
              Proud milestones that reflect our commitment to excellence and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-primary-300 font-serif">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold">{achievement.label}</div>
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
            <h2 className="text-4xl font-bold mb-6 text-shadow font-serif">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-shadow">
              Join thousands of travelers who've discovered the world with Sky Travels. Your extraordinary journey awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/destinations"
                className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Book Your Trip
              </Link>
              <Link
                to="/contact"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;