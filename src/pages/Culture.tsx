import React from 'react';
import { Music, Users, MapPin, Calendar, Heart, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Culture = () => {
  const tribes = [
    {
      name: "Maasai",
      image: "https://media.istockphoto.com/id/1196123919/photo/maasai-warriors-chanting-and-jumping.jpg?s=612x612&w=0&k=20&c=s6c2ndr4poVN7FF5ZCIlHmb3LZCCLGMT7YudBkn_UBg=",
      description: "Semi-nomadic warriors known for their distinctive culture and traditions.",
      population: "900,000+",
      location: "Northern Tanzania",
      traditions: ["Cattle herding", "Warrior culture", "Traditional dress", "Jumping dance"]
    },
    {
      name: "Hadza",
      image: "https://media.istockphoto.com/id/1304663802/photo/hadzabe-hunters-are-resting-in-shade.jpg?s=612x612&w=0&k=20&c=oNV3a2Ppgxlf7yJBk3R30AiIspFdA08AxDviUunEswY=",
      description: "One of the last hunter-gatherer tribes in Africa.",
      population: "1,000+",
      location: "Lake Eyasi",
      traditions: ["Hunting with bow", "Gathering", "Click language", "Fire making"]
    },
    {
      name: "Chagga",
      image: "https://media.istockphoto.com/id/1267435656/photo/hadzabe-tribe-man-smoking-a-pipe-and-exhaling-smoke-through-the-mouth.jpg?s=612x612&w=0&k=20&c=E7zQRpHae_Cwocu717YN-h1DAAoNXRLzAMf0ducPBtQ=",
      description: "Bantu-speaking people living on the slopes of Mount Kilimanjaro.",
      population: "2,000,000+",
      location: "Kilimanjaro Region",
      traditions: ["Coffee farming", "Irrigation systems", "Traditional medicine", "Mountain culture"]
    }
  ];

  const festivals = [
    {
      name: "Saba Saba",
      date: "July 7th",
      description: "Tanzania's International Trade Fair celebrating commerce and culture",
      activities: ["Trade exhibitions", "Cultural performances", "Food festivals", "Music concerts"]
    },
    {
      name: "Zanzibar International Film Festival",
      date: "July",
      description: "Celebrating African and international cinema and arts",
      activities: ["Film screenings", "Art exhibitions", "Music performances", "Cultural workshops"]
    },
    {
      name: "Kilimanjaro Marathon",
      date: "February/March",
      description: "International marathon around the base of Mount Kilimanjaro",
      activities: ["Marathon race", "Cultural exchanges", "Local cuisine", "Community celebrations"]
    }
  ];

  const traditions = [
    {
      title: "Traditional Music & Dance",
      icon: <Music className="w-8 h-8" />,
      description: "Experience ngoma drums, traditional songs, and ceremonial dances that tell stories of Tanzania's rich heritage."
    },
    {
      title: "Swahili Culture",
      icon: <Globe className="w-8 h-8" />,
      description: "Learn about the Swahili language and culture that serves as a unifying force across Tanzania."
    },
    {
      title: "Traditional Crafts",
      icon: <Heart className="w-8 h-8" />,
      description: "Discover intricate woodcarvings, beadwork, and textiles created by talented local artisans."
    },
    {
      title: "Community Life",
      icon: <Users className="w-8 h-8" />,
      description: "Experience the warmth of Tanzanian hospitality and ubuntu philosophy in local communities."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-[url('https://www.tanzaniaadventures.co.tz/pics/Tanzania-Cultural-Experiences.webp')] item-center justify-content bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4 fade-in-up">Tanzanian Culture</h1>
          <p className="text-xl mb-8 fade-in-up">Discover the rich heritage and vibrant traditions</p>
          <Link to="/booking">
            <Button size="lg" variant='outline' className="bg-transparent hover:bg-primary/90 text-white hover:text-white border-white fade-in-up">
              Explore Cultural Tours
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Indigenous Tribes Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Indigenous Tribes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tanzania is home to over 120 ethnic groups, each with unique traditions, languages, and ways of life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tribes.map((tribe, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={tribe.image} 
                    alt={tribe.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {tribe.name}
                    <Badge variant="outline">{tribe.population}</Badge>
                  </CardTitle>
                  <CardDescription>{tribe.description}</CardDescription>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {tribe.location}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Traditions:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tribe.traditions.map((tradition, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tradition}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Link to="/booking">
                    <Button variant='outline' className="w-full bg-transparent hover:bg-accent/90 text-black hover:text-white fade-in-up">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cultural Traditions Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cultural Traditions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Immerse yourself in the living traditions that have been passed down through generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {traditions.map((tradition, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 group">
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tradition.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{tradition.title}</h3>
                <p className="text-gray-600 text-sm">{tradition.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Festivals & Events Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Festivals & Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join the celebration of Tanzania's vibrant culture through colorful festivals and events.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {festivals.map((festival, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {festival.name}
                    <div className="flex items-center text-sm text-primary">
                      <Calendar className="w-4 h-4 mr-1" />
                      {festival.date}
                    </div>
                  </CardTitle>
                  <CardDescription>{festival.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <h4 className="font-semibold text-sm mb-2">Activities:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {festival.activities.map((activity, idx) => (
                      <li key={idx}>• {activity}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cultural Experience CTA */}
        <section className="bg-white rounded-lg p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Experience Authentic Tanzania</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our cultural tours and connect with local communities to experience the real Tanzania. 
            Learn traditional crafts, participate in ceremonies, and create lasting memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" variant='link'className="bg-primary hover:bg-primary/90 text-black">
                Book Cultural Tour
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Community Visits
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Culture;
