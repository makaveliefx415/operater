import React from 'react';
import { Star, Wifi, Car, Utensils, MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const Hotels = () => {
  const hotels = [
    {
      id: "1",
      name: "Serengeti Safari Lodge",
      category: "Luxury",
      image: "https://media.istockphoto.com/id/845962588/photo/serengeti-lodge.jpg?s=612x612&w=0&k=20&c=YyVRJknQi2-ieMB1kuNsy4jbigwQvSBJrkhgrOdTX7I=",
      location: "Serengeti National Park",
      rating: 4.9,
      price: "$850/night",
      description: "Exclusive luxury lodge with panoramic views of the Serengeti plains.",
      amenities: ["Free WiFi", "Restaurant", "Pool", "Spa", "Game drives", "Helicopter tours"],
      features: ["All-inclusive", "Private balcony", "24/7 service", "Wildlife viewing"]
    },
    {
      id: "2",
      name: "Kilimanjaro Mountain Resort",
      category: "Luxury",
      image: "https://media.istockphoto.com/id/1169256865/video/aerial-view-of-bunyonyi-overland-resort-uganda.jpg?s=640x640&k=20&c=COrMFctoMCWoOGeLBEgyIRWOkVi5l-GuNk6i_y7CkYA=",
      location: "Moshi, Kilimanjaro",
      rating: 4.8,
      price: "$450/night",
      description: "Premium resort at the foot of Mount Kilimanjaro with spectacular mountain views.",
      amenities: ["Free WiFi", "Restaurant", "Gym", "Spa", "Airport transfer", "Tour desk"],
      features: ["Mountain views", "Climbing packages", "Coffee plantation tours", "Cultural experiences"]
    },
    {
      id: "3",
      name: "Zanzibar Beach Resort",
      category: "Beach",
      image: "https://media.istockphoto.com/id/1299710059/photo/luxury-resort-zanzibar-island.jpg?s=612x612&w=0&k=20&c=7rZ_Fv9tVnwHbhQvS_-RSqrYonh8cU1pBHZUtYYQDA8=",
      location: "Stone Town, Zanzibar",
      rating: 4.7,
      price: "$320/night",
      description: "Beachfront resort combining modern luxury with traditional Swahili architecture.",
      amenities: ["Free WiFi", "Beach access", "Restaurant", "Pool", "Spa", "Water sports"],
      features: ["Ocean view", "Spice tours", "Historical tours", "Sunset dhow trips"]
    },
    {
      id: "4",
      name: "Arusha Coffee Lodge",
      category: "Mid-range",
      image: "https://media.istockphoto.com/id/673449126/photo/arusha-coffee-lodge.jpg?s=612x612&w=0&k=20&c=i6uAn3x5ZaXZEAIGz_fS3DtL84pOUaiEb5BYU5VYa4Q=",
      location: "Arusha",
      rating: 4.5,
      price: "$180/night",
      description: "Charming lodge set in a working coffee plantation near Arusha National Park.",
      amenities: ["Free WiFi", "Restaurant", "Coffee tours", "Airport transfer", "Garden"],
      features: ["Coffee plantation", "Bird watching", "Cultural visits", "Safari arrangements"]
    },
    {
      id: "5",
      name: "Ngorongoro Crater Lodge",
      category: "Luxury",
      image: "https://media.istockphoto.com/id/1143754364/photo/entrance-to-the-luxury-ngorongoro-wildlife-lodge-viewed-at-sunset.jpg?s=612x612&w=0&k=20&c=QgK8jduEqC_tEzv2itauV-x_3LpjJTxvNen1un8oa5s=",
      location: "Ngorongoro Conservation Area",
      rating: 4.9,
      price: "$950/night",
      description: "Ultra-luxury lodge perched on the rim of Ngorongoro Crater.",
      amenities: ["Free WiFi", "Fine dining", "Butler service", "Spa", "Crater tours", "Cultural visits"],
      features: ["Crater views", "All-inclusive", "Private decks", "Maasai cultural center"]
    },
    {
      id: "6",
      name: "Mount meru Hotel",
      category: "Mid-range",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/7e/19/b2/mount-meru-hotel.jpg?w=1000&h=-1&s=1",
      location: "Arusha",
      rating: 4.2,
      price: "$85/night",
      description: "Modern city hotel perfect for business travelers and city explorers.",
      amenities: ["Free WiFi", "Restaurant", "Business center", "Airport transfer", "Laundry"],
      features: ["City center", "Business facilities", "Local tours", "Ferry access"]
    }
  ];

  const getStarRating = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-current text-yellow-500' : 'text-gray-300'}`}
      />
    ));
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Luxury': return 'bg-purple-100 text-purple-800';
      case 'Mid-range': return 'bg-blue-100 text-blue-800';
      case 'Budget': return 'bg-green-100 text-green-800';
      case 'Beach': return 'bg-cyan-100 text-cyan-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filterHotelsByCategory = (category: string) => {
    if (category === 'all') return hotels;
    return hotels.filter(hotel => hotel.category === category);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-rbg- bg-[url('https://cloudfront.safaribookings.com/blog/2024/08/00-10_Best-value_Luxury_Zambia_Safari_Lodges_Camps-BW-header1200px.jpg')] flex items-center justify-center bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4 fade-in-up">Luxury Accommodations</h1>
          <p className="text-xl mb-8 fade-in-up">From safari lodges to beachfront resorts</p>
          <Link to="/booking">
            <Button size="lg" variant='outline' className="bg-transparent hover:bg-primary/90 text-white hover:text-white border-white fade-in-up">
              Find Your Perfect Stay
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="all" className="w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Choose Your Accommodation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              From luxury safari lodges to budget-friendly city hotels, find the perfect place to stay during your Tanzania adventure.
            </p>
            
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="Luxury">Luxury</TabsTrigger>
              <TabsTrigger value="Mid-range">Mid-range</TabsTrigger>
              <TabsTrigger value="Budget">Budget</TabsTrigger>
            </TabsList>
          </div>

          {['all', 'Luxury', 'Mid-range', 'Budget'].map((category) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filterHotelsByCategory(category).map((hotel) => (
                  <Card key={hotel.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={hotel.image} 
                        alt={hotel.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className={getCategoryColor(hotel.category)}>
                          {hotel.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-black font-semibold">
                          {hotel.price}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{hotel.name}</span>
                        <div className="flex items-center">
                          {getStarRating(Math.floor(hotel.rating))}
                          <span className="ml-1 text-sm text-gray-600">({hotel.rating})</span>
                        </div>
                      </CardTitle>
                      <CardDescription>{hotel.description}</CardDescription>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        {hotel.location}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Amenities:</h4>
                        <div className="flex flex-wrap gap-1">
                          {hotel.amenities.slice(0, 4).map((amenity, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                          {hotel.amenities.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{hotel.amenities.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {hotel.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Link to="/booking" className="flex-1">
                          <Button className="w-full bg-primary hover:bg-primary/90 text-black">
                            Book Now
                          </Button>
                        </Link>
                        <Link to={`/hotels/${hotel.id}`} className="flex-1">
                          <Button variant="outline" className="w-full">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Booking Help Section */}
        <section className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Need Help Choosing?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Call Our Experts</h4>
              <p className="text-gray-600 text-sm mb-2">Speak with our travel consultants</p>
              <p className="text-primary font-semibold">+255 123 456 789</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p className="text-gray-600 text-sm mb-2">Get personalized recommendations</p>
              <p className="text-primary font-semibold">hotels@tanzaniaexplorer.com</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Custom Packages</h4>
              <p className="text-gray-600 text-sm mb-2">Tailored accommodation solutions</p>
              <Link to="/booking">
                <Button size="sm" variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hotels;
