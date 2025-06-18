import React from 'react';
import { MapPin, Clock, Users, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Serengeti National Park",
      image: "https://media.istockphoto.com/id/1864407185/photo/from-above-a-very-big-group-of-wildebeest-in-the-savannah-during-the-great-migration-taken.jpg?s=612x612&w=0&k=20&c=qysMMQqjIYRys4_i0BzAEM1t4zmZQZxue8IZz0MNSF0=",
      description: "Home to the Great Migration and endless plains teeming with wildlife.",
      duration: "3-7 days",
      difficulty: "Easy",
      rating: 4.9,
      price: "$450/day",
      highlights: ["Great Migration", "Big Five", "Hot Air Balloon Safari"]
    },
    {
      id: 2,
      name: "Mount Kilimanjaro",
      image: "https://media.istockphoto.com/id/626339564/photo/hiker-at-uhuru-peak-kilimanjaro-tanzania-africa.jpg?s=612x612&w=0&k=20&c=KH517bPOMgshgWFQIlB7Mgjl2tyvEL54vEnaXPQXvzA=",
      description: "Africa's highest peak offering breathtaking views and challenging climbs.",
      duration: "5-9 days",
      difficulty: "Challenging",
      rating: 4.8,
      price: "$1200/climb",
      highlights: ["Uhuru Peak", "Machame Route", "Sunrise Views"]
    },
    {
      id: 3,
      name: "Zanzibar Island",
      image: "https://media.istockphoto.com/id/2191376209/photo/female-tourist-is-relaxing-in-the-crystal-clear-waters-of-maalum-cave-a-natural-wonder.jpg?s=612x612&w=0&k=20&c=hMRvXLzBIcjtxe3554Wah2OZENvd9m7YGt1ci2sfBVQ=",
      description: "Pristine beaches, spice tours, and rich Swahili culture.",
      duration: "2-5 days",
      difficulty: "Easy",
      rating: 4.7,
      price: "$200/day",
      highlights: ["Stone Town", "Spice Tours", "Pristine Beaches"]
    },
    {
      id: 4,
      name: "Ngorongoro Crater",
      image: "https://media.istockphoto.com/id/1566880534/photo/flamingoes-in-a-pink-lake-in-the-wild.jpg?s=612x612&w=0&k=20&c=KEpxMq1Iv9__dBGiBg7MoVF3in7JaupO7dOrldryICU=",
      description: "A natural wonder and UNESCO World Heritage site with incredible wildlife density.",
      duration: "1-2 days",
      difficulty: "Easy",
      rating: 4.9,
      price: "$350/day",
      highlights: ["Black Rhinos", "Flamingos", "Maasai Culture"]
    },
    {
      id: 5,
      name: "Tarangire National Park",
      image: "https://media.istockphoto.com/id/1405251627/photo/herd-of-african-elephants-at-the-tarangire-river-in-tarangire-national-park-tanzania-view.jpg?s=612x612&w=0&k=20&c=Hh7jx1Avl2n8fCz4G5Be0ghBHFBETCiE6v3NBuIoxqU=",
      description: "Famous for its large elephant herds and iconic baobab trees.",
      duration: "1-3 days",
      difficulty: "Easy",
      rating: 4.6,
      price: "$300/day",
      highlights: ["Elephant Herds", "Baobab Trees", "Bird Watching"]
    },
    {
      id: 6,
      name: "Lake Manyara",
      image: "https://media.istockphoto.com/id/173009115/photo/flamingos-at-lake-manyara.jpg?s=612x612&w=0&k=20&c=W6TXuoYYjYt7uy69WGLFW3a9Lufz5GJfpVmAWCbeL-g=",
      description: "Tree-climbing lions and diverse ecosystems in a compact park.",
      duration: "1-2 days",
      difficulty: "Easy",
      rating: 4.5,
      price: "$280/day",
      highlights: ["Tree-climbing Lions", "Flamingo Flocks", "Diverse Wildlife"]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Challenging': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="relative h-96 bg-[url('https://www.andbeyond.com/wp-content/uploads/sites/5/Africa-Tanzania-Serengeti-National-Park-hot-air-balloons-Website-1920x1080-fill-gravityauto-Q_AutoBest.jpg')] flex items-center justify-center bg-cover bg-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4 fade-in-up">Explore Tanzania</h1>
          <p className="text-xl mb-8 fade-in-up">Discover the most breathtaking destinations in East Africa</p>
          <Link to="/booking">
            <Button size="lg" variant='outline' className="bg-transparent hover:bg-primary/90 text-white hover:text-white border-white fade-in-up">
              Plan Your Journey
            </Button>
          </Link>
        </div>
        <div className="absolute inset-0 safari-pattern opacity-20"></div>
      </div>

      {/* Destinations Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Top Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From the wildlife-rich Serengeti to the pristine beaches of Zanzibar, 
            Tanzania offers unforgettable experiences for every type of traveler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-black">
                    <Star className="w-3 h-3 mr-1 fill-current text-yellow-500" />
                    {destination.rating}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {destination.name}
                  <span className="text-lg font-bold text-primary">{destination.price}</span>
                </CardTitle>
                <CardDescription>{destination.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-10">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {destination.duration}
                  </div>
                  <Badge className={getDifficultyColor(destination.difficulty)}>
                    {destination.difficulty}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Highlights:</h4>
                  <div className="flex flex-wrap gap-5">
                    {destination.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Link to="/booking">
                  <Button variant='outline' className="w-full bg-transparent hover:bg-primary/90 text-black">
                    <MapPin className="w-6 h-6 mr-6" />
                    Book This Destination
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
