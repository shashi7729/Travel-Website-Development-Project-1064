import React, { createContext, useContext, useState } from 'react';

const TravelContext = createContext();

export const useTravel = () => {
  const context = useContext(TravelContext);
  if (!context) {
    throw new Error('useTravel must be used within a TravelProvider');
  }
  return context;
};

export const TravelProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const destinations = [
    {
      id: 1,
      name: 'Kenya Safari Adventure',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      price: 2499,
      rating: 4.9,
      duration: '8 days',
      description: 'Experience the ultimate African safari in Kenya\'s Maasai Mara, witness the Great Migration and encounter the Big Five in their natural habitat.',
      highlights: ['Big Five wildlife viewing', 'Great Migration', 'Maasai cultural experience', 'Hot air balloon safari'],
      location: 'Kenya, East Africa',
      category: 'Safari',
      difficulty: 'Moderate',
      groupSize: '2-12 people',
      includes: ['Professional guide', 'All meals', '4x4 safari vehicle', 'Accommodation', 'Park fees']
    },
    {
      id: 2,
      name: 'Tanzania Serengeti Explorer',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=600&fit=crop',
      price: 2899,
      rating: 4.8,
      duration: '10 days',
      description: 'Explore the endless plains of Serengeti and the Ngorongoro Crater, home to the world\'s largest wildlife concentration.',
      highlights: ['Ngorongoro Crater', 'Serengeti National Park', 'Tree climbing lions', 'Olduvai Gorge'],
      location: 'Tanzania, East Africa',
      category: 'Safari',
      difficulty: 'Easy',
      groupSize: '2-16 people',
      includes: ['Expert naturalist guide', 'All meals', 'Safari vehicle', 'Luxury tented camps', 'Flying doctor insurance']
    },
    {
      id: 3,
      name: 'South Africa Big Five Safari',
      image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&h=600&fit=crop',
      price: 2199,
      rating: 4.7,
      duration: '7 days',
      description: 'Discover South Africa\'s premier safari destinations including Kruger National Park and private game reserves.',
      highlights: ['Big Five encounters', 'Luxury safari lodges', 'Bush walks', 'Wine tasting'],
      location: 'South Africa',
      category: 'Safari',
      difficulty: 'Easy',
      groupSize: '2-10 people',
      includes: ['Professional ranger', 'All meals & drinks', 'Game drives', 'Luxury accommodation', 'Airport transfers']
    },
    {
      id: 4,
      name: 'Botswana Okavango Delta',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop',
      price: 3299,
      rating: 4.9,
      duration: '9 days',
      description: 'Navigate the pristine waterways of the Okavango Delta by mokoro and discover one of Africa\'s last great wilderness areas.',
      highlights: ['Mokoro canoe safaris', 'Water-based game viewing', 'Remote wilderness camps', 'Bird watching paradise'],
      location: 'Botswana',
      category: 'Safari',
      difficulty: 'Moderate',
      groupSize: '2-8 people',
      includes: ['Expert guides', 'All meals', 'Mokoro excursions', 'Scenic flights', 'Luxury tented camps']
    },
    {
      id: 5,
      name: 'Namibia Desert Safari',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      price: 2799,
      rating: 4.6,
      duration: '8 days',
      description: 'Explore the dramatic landscapes of Namibia, from the towering red dunes of Sossusvlei to the wildlife-rich Etosha National Park.',
      highlights: ['Sossusvlei dunes', 'Deadvlei clay pan', 'Etosha National Park', 'Desert-adapted elephants'],
      location: 'Namibia',
      category: 'Safari',
      difficulty: 'Moderate',
      groupSize: '2-12 people',
      includes: ['Professional guide', 'All meals', '4x4 vehicle', 'Desert lodges', 'Scenic flights']
    },
    {
      id: 6,
      name: 'Rwanda Gorilla Trekking',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
      price: 3899,
      rating: 4.9,
      duration: '6 days',
      description: 'Experience the magic of meeting mountain gorillas in their natural habitat in Rwanda\'s Volcanoes National Park.',
      highlights: ['Mountain gorilla encounters', 'Golden monkey tracking', 'Cultural village visits', 'Scenic mountain views'],
      location: 'Rwanda',
      category: 'Wildlife',
      difficulty: 'Challenging',
      groupSize: '2-8 people',
      includes: ['Gorilla permits', 'Expert guides', 'All meals', 'Luxury lodges', 'Airport transfers']
    },
    {
      id: 7,
      name: 'Uganda Wildlife Safari',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop',
      price: 2399,
      rating: 4.7,
      duration: '9 days',
      description: 'Discover Uganda\'s incredible biodiversity from chimpanzee tracking in Kibale to game drives in Queen Elizabeth National Park.',
      highlights: ['Chimpanzee tracking', 'Tree climbing lions', 'Boat safari on Kazinga Channel', 'Bwindi gorilla trekking'],
      location: 'Uganda',
      category: 'Wildlife',
      difficulty: 'Moderate',
      groupSize: '2-10 people',
      includes: ['Professional guides', 'All meals', 'Park fees', 'Comfortable lodges', 'Ground transportation']
    },
    {
      id: 8,
      name: 'Zambia Walking Safari',
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop',
      price: 2699,
      rating: 4.8,
      duration: '7 days',
      description: 'Experience Africa on foot with walking safaris in South Luangwa National Park, known for its exceptional wildlife viewing.',
      highlights: ['Walking safaris', 'Night game drives', 'Leopard capital of Africa', 'Authentic bush experience'],
      location: 'Zambia',
      category: 'Safari',
      difficulty: 'Challenging',
      groupSize: '2-8 people',
      includes: ['Expert walking guides', 'All meals', 'Bush camps', 'Game drives', 'Cultural visits']
    }
  ];

  const addBooking = (destination, bookingDetails) => {
    const newBooking = {
      id: Date.now(),
      destination,
      ...bookingDetails,
      status: 'confirmed',
      bookingDate: new Date().toISOString()
    };
    setBookings(prev => [...prev, newBooking]);
    return newBooking;
  };

  const cancelBooking = (bookingId) => {
    setBookings(prev => prev.map(booking => 
      booking.id === bookingId 
        ? { ...booking, status: 'cancelled' }
        : booking
    ));
  };

  const toggleFavorite = (destinationId) => {
    setFavorites(prev => 
      prev.includes(destinationId)
        ? prev.filter(id => id !== destinationId)
        : [...prev, destinationId]
    );
  };

  const searchDestinations = (query, filters = {}) => {
    let results = destinations;

    if (query) {
      results = results.filter(dest => 
        dest.name.toLowerCase().includes(query.toLowerCase()) ||
        dest.location.toLowerCase().includes(query.toLowerCase()) ||
        dest.category.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (filters.category) {
      results = results.filter(dest => dest.category === filters.category);
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      results = results.filter(dest => dest.price >= min && dest.price <= max);
    }

    if (filters.rating) {
      results = results.filter(dest => dest.rating >= filters.rating);
    }

    if (filters.difficulty) {
      results = results.filter(dest => dest.difficulty === filters.difficulty);
    }

    setSearchResults(results);
    return results;
  };

  const value = {
    destinations,
    bookings,
    favorites,
    searchResults,
    addBooking,
    cancelBooking,
    toggleFavorite,
    searchDestinations
  };

  return (
    <TravelContext.Provider value={value}>
      {children}
    </TravelContext.Provider>
  );
};