
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Calendar, Users, Camera, Mountain, Waves } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const featuredDestinations = [
    {
      name: "Serengeti National Park",
      image: "https://media.istockphoto.com/id/1358063108/photo/blue-wildebeest-brindled-gnu.jpg?s=612x612&w=0&k=20&c=9aEn9L_SAfb83dVrknl5_f3PANvxcSuLHmvUiUnHlr4=",
      description: "Witness the Great Migration",
      rating: 4.9,
      price: "From $450/day"
    },
    {
      name: "Mount Kilimanjaro",
      image: "https://media.istockphoto.com/id/1520148356/photo/sunrise-on-mount-kilimanjaro.jpg?s=612x612&w=0&k=20&c=zoFFwM51ZHZdo-dCDMxerKdOR0tNc7A-UcP4wtDrsn8=",
      description: "Conquer Africa's highest peak",
      rating: 4.8,
      price: "From $1200/climb"
    },
    {
      name: "Zanzibar Island",
      image: "https://media.istockphoto.com/id/1139657851/photo/coatline-of-zanzibar-at-the-indian-ocean.jpg?s=612x612&w=0&k=20&c=v8M5qvJKhg0hJ9ok0hFSWaZjs74ifwkdpThv-6TNOIE=",
      description: "Pristine beaches and culture",
      rating: 4.7,
      price: "From $200/day"
    }
  ];

  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Professional Photography",
      description: "Capture stunning wildlife and landscape photos with expert guidance"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Local Guides",
      description: "Learn from passionate guides with deep knowledge of Tanzania's wildlife and culture"
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Adventure Activities",
      description: "From mountain climbing to cultural immersion experiences"
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Beach & Safari Combo",
      description: "Perfect combination of wildlife adventure and tropical relaxation"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "United States",
      rating: 5,
      text: "An absolutely incredible experience! The wildlife viewing was beyond our wildest dreams, and our guide was phenomenal."
    },
    {
      name: "Marco Schmidt",
      country: "Germany",
      rating: 5,
      text: "Mount Kilimanjaro was the adventure of a lifetime. The organization and support from the team was outstanding."
    },
    {
      name: "Emily Chen",
      country: "Australia",
      rating: 5,
      text: "The cultural experiences and connection with local communities made this trip truly special and meaningful."
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center hero-gradient">
        <div className="absolute inset-0 bg-[url('https://i0.wp.com/exclusivesafarispecialist.com/wp-content/uploads/2022/09/afrogateway.jpg?fit=1920%2C1080&ssl=1')] bg-cover bg-center blur-none"></div>
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 fade-in-up">
            Discover Tanzania
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto fade-in-up">
            Experience the breathtaking wildlife, majestic Mount Kilimanjaro, 
            and pristine beaches of Zanzibar with authentic local guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
            <Link to="/destinations">
              <Button size="lg" variant="outline" className="bg-transparent hover:bg-primary/90 text-secdary hover:text-white border-white">
                Explore Destinations
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/safaris">
              <Button size="lg" variant="link" className="border-white text-white hover:bg-primary hover:text-black">
                View Safari Packages
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 safari-pattern opacity-10"></div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the most iconic and breathtaking locations Tanzania has to offer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-black">
                      <Star className="w-3 h-3 mr-1 fill-current text-yellow-500" />
                      {destination.rating}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{destination.name}</CardTitle>
                  <CardDescription className="text-gray-600">{destination.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{destination.price}</span>
                    <Link to="/destinations">
                      <Button variant="outline" className="bg-transparent hover:bg-secondary/90">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience Tanzania with the expertise and passion of local specialists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 group">
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white rounded-lg p-8 shadow-lg text-center text-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-lg opacity-80 border-b-4 border-yellow-500 inline-block pb-1">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-80 border-b-4 border-yellow-500 inline-block pb-1">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-80 border-b-4 border-yellow-500 inline-block pb-1">Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-80 border-b-4 border-yellow-500 inline-block pb-1">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from adventurers who have explored Tanzania with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.country}</CardDescription>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white rounded-lg p-8 shadow-lg text-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Tanzania Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us create a personalized itinerary that matches your interests, budget, and travel style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-emerald-20 hover:bg-primary/90 text-black">
                <Calendar className="mr-2 w-5 h-5" />
                Plan Your Trip
              </Button>
            </Link>
            <Link to="/safaris">
              <Button size="lg" variant="secondary" className="border-white text-white hover:bg-white hover:text-secondary">
                Browse Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
