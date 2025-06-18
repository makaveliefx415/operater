
import React from 'react';
import { Calendar, Users, Camera, Binoculars, Star, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Safaris = () => {
  const safariPackages = [
    {
      id: 1,
      name: "Great Migration Safari",
      image: "https://media.istockphoto.com/id/1424956086/photo/wildebeest-great-migration-in-the-serengeti.jpg?s=612x612&w=0&k=20&c=hw36oD5lsph_I9ZgElxs3O9yi_AuopFOLPnL6ZEkh4g=",
      duration: "7 days",
      price: "$2,800",
      rating: 4.9,
      participants: "2-8 people",
      description: "Witness the spectacular Great Migration in Serengeti and Maasai Mara.",
      includes: ["Accommodation", "Meals", "Game drives", "Professional guide", "Transport"],
      highlights: ["River crossings", "Predator action", "Endless herds", "Cultural visits"]
    },
    {
      id: 2,
      name: "Big Five Adventure",
      image: "https://media.istockphoto.com/id/2191156282/photo/amazing-safari-tour-at-etosha-in-national-park-namibia-africa-savannah.jpg?s=612x612&w=0&k=20&c=5kJ0CQdSJdCykIxeZE2QAaBAS3kyki3SZyVhwfqwPRA=",
      duration: "5 days",
      price: "$1,950",
      rating: 4.8,
      participants: "2-6 people",
      description: "Track the Big Five across Tanzania's most famous national parks.",
      includes: ["Luxury camps", "All meals", "Game drives", "Expert tracker", "4WD vehicle"],
      highlights: ["Lion prides", "Elephant herds", "Rhino tracking", "Leopard spotting"]
    },
    {
      id: 3,
      name: "Photography Safari",
      image: "https://media.istockphoto.com/id/647803014/photo/man-taking-photo-of-elephants-at-african-savannah.jpg?s=612x612&w=0&k=20&c=_CcOtbP2xxEOAYfufVJPx35Y76TLHs1rvRSvLpKTpak=",
      duration: "6 days",
      price: "$2,400",
      rating: 4.7,
      participants: "4-8 people",
      description: "Perfect for photographers seeking the best wildlife shots and landscapes.",
      includes: ["Photo hides", "Early morning drives", "Professional photo guide", "Equipment tips"],
      highlights: ["Golden hour shoots", "Wildlife portraits", "Landscape photography", "Technical guidance"]
    },
    {
      id: 4,
      name: "Cultural Safari",
      image: "https://media.istockphoto.com/id/2176193180/photo/meeting-a-masai-tribe-in-tanzania.jpg?s=612x612&w=0&k=20&c=ABqi8XfixobpbmO2KFas4I7o8VeeVC4mhmdD8Sg_rfg=",
      duration: "4 days",
      price: "$1,500",
      rating: 4.6,
      participants: "2-10 people",
      description: "Immerse yourself in the rich cultures of Tanzania's indigenous tribes.",
      includes: ["Cultural visits", "Traditional meals", "Guided tours", "Community interactions"],
      highlights: ["Maasai village", "Hadza hunting experience", "Cultural performances", "Local crafts"]
    },
    {
      id: 5,
      name: "Luxury Lodge Safari",
      image: "https://media.istockphoto.com/id/157429505/photo/tented-safari-camp-by-night.jpg?s=612x612&w=0&k=20&c=hZjtRQUp47hgkNX3H9U4vZTNdx3PrMDpH4bU7YG7Kwo=",
      duration: "5 days",
      price: "$3,500",
      rating: 4.9,
      participants: "2-4 people",
      description: "Experience the ultimate in comfort and service while exploring Tanzania's wildlife.",
      includes: ["Luxury lodges", "Gourmet meals", "Private guide", "Spa treatments"],
      highlights: ["Private game drives", "Sunset dinners", "Exclusive campsites", "Wildlife photography sessions"]
    },
    {
     id: 6,
      name: "Family Safari",
      image: "https://media.istockphoto.com/id/2099246240/photo/way-kambas-national-reserve-sumatra-asian-woman-with-her-child-observing-elephants-in-the-wild.jpg?s=612x612&w=0&k=20&c=-6VOsPWeuBaJcrs3zLa5Cv48-PCMT8bwISGdrhw1MPo=",
      duration: "7 days",
      price: "$2,200",
      rating: 4.8,
      participants: "4-6 people",
      description: "Family-friendly safari with activities for all ages in Serengeti and Ngorongoro.",
      includes: ["Family lodges", "Kids' activities", "Game drives", "Cultural visits"],
      highlights: ["Junior ranger program", "Maasai village visit", "Wildlife tracking", "Nature walks"],
    },
    {
      id: 7,
      name: "Adventure Safari",
      image: "https://media.istockphoto.com/id/2148955990/photo/game-drive-at-sunset.jpg?s=612x612&w=0&k=20&c=bf6mEnGVtu8Xz3xzaHOmzK4B1fLv7hmWyUMJ9W1-WgU=",
      duration: "8 days",
      price: "$2,700",
      rating: 4.7,
      participants: "2-6 people",
      description: "For the adventurous spirit, combining wildlife with thrilling activities.",
      includes: ["Camping gear", "Meals", "Game drives", "Adventure activities"],
      highlights: ["Walking safaris", "Night drives", "Hot air ballooning", "Canoeing"]
    },
    {
      id: 8,
      name: "Birdwatching Safari",
      image: "https://media.istockphoto.com/id/2187974005/photo/the-brown-hooded-kingfisher-in-national-kruger-park-south-africa.jpg?s=612x612&w=0&k=20&c=cut-nUra5G-1kCOpyCHmG9XyePhlnFU3EglwACSETWU=",
      duration: "5 days",
      price: "$1,800",
      rating: 4.6,
      participants: "2-8 people",
      description: "Explore Tanzania's diverse birdlife in prime habitats.",
      includes: ["Birding guides", "Binoculars", "Meals", "Transport"],
      highlights: ["Endemic species", "Migratory birds", "Wetland habitats", "Photography tips"]
    },
    {
      id: 9,
      name: "Honeymoon Safari",
      image: "https://media.istockphoto.com/id/502992633/photo/wedding-couple.jpg?s=612x612&w=0&k=20&c=YdGoZ9xz5NCJlwxkpXN-XaUN4mcatJ8LhD10p0le57U=",
      duration: "6 days",
      price: "$3,000",
      rating: 4.9,
      participants: "2 people",
      description: "Romantic safari experience with private accommodations and special touches.",
      includes: ["Luxury tented camps", "Private dinners", "Couples' spa", "Game drives"],
      highlights: ["Sunset picnics", "Private game viewing", "Candlelit dinners", "Couples' massages"]
    },
    {
      id: 10,
      name: "Eco Safari",
      image: "https://media.istockphoto.com/id/2187481014/photo/tourists-enjoying-a-safari-trip-in-a-4x4-vehicle.jpg?s=612x612&w=0&k=20&c=DeCmh6Lng9AEHTW7Uspzt_0xBL6C_Lre2Qi7Jw0bUGI=",
      duration: "5 days",
      price: "$2,000",
      rating: 4.8,
      participants: "2-6 people",
      description: "Sustainable safari experience focused on conservation and community.",
      includes: ["Eco-lodges", "Community visits", "Conservation talks", "Game drives"],
      highlights: ["Wildlife conservation", "Community projects", "Sustainable practices", "Nature walks"]
    },
    {
      id: 11,
      name: "Kilimanjaro Trekking",
      image: "https://media.istockphoto.com/id/626339564/photo/hiker-at-uhuru-peak-kilimanjaro-tanzania-africa.jpg?s=612x612&w=0&k=20&c=KH517bPOMgshgWFQIlB7Mgjl2tyvEL54vEnaXPQXvzA=",
      duration: "8 days",
      price: "$1,800",
      rating: 4.9,
      participants: "2-10 people",
      description: "Climb Africa's highest peak with expert guides and support.",
      includes: ["Guides", "Porters", "Meals", "Camping gear"],
      highlights: ["Uhuru Peak", "Stunning views", "Cultural interactions", "Summit celebration"]
    },
    {
      id: 12,
      name: "Zanzibar Beach & Safari",
      image: "https://media.istockphoto.com/id/2191376209/photo/female-tourist-is-relaxing-in-the-crystal-clear-waters-of-maalum-cave-a-natural-wonder.jpg?s=612x612&w=0&k=20&c=hMRvXLzBIcjtxe3554Wah2OZENvd9m7YGt1ci2sfBVQ=",
      duration: "6 days",
      price: "$2,500",
      rating: 4.8,
      participants: "2-8 people",
      description: "Combine beach relaxation with thrilling safari adventures.",
      includes: ["Beachfront accommodations", "Game drives", "Snorkeling trips", "Meals"],
      highlights: ["Zanzibar beaches", "Serengeti wildlife", "Cultural experiences", "Water sports"]
    }
  ]; 

  const safariTypes = [
    {
      name: "Game Drives",
      icon: <Binoculars className="w-8 h-8" />,
      description: "Traditional 4WD vehicle safaris with expert guides"
    },
    {
      name: "Walking Safaris",
      icon: <Users className="w-8 h-8" />,
      description: "Get up close with nature on guided walking tours"
    },
    {
      name: "Hot Air Balloon",
      icon: <Camera className="w-8 h-8" />,
      description: "Aerial views of the Serengeti at sunrise"
    },
    {
      name: "Night Safaris",
      icon: <Star className="w-8 h-8" />,
      description: "Discover nocturnal wildlife after dark"
    },
    {
      name: "Cultural Tours",
      icon: <Clock className="w-8 h-8" />,
      description: "Engage with local tribes and learn about their traditions"
    },
    {
      name: "Photography Tours",
      icon: <Camera className="w-8 h-8" />,
      description: "Specialized tours for wildlife and landscape photography"
    },
    {
      name: "Luxury Safaris",
      icon: <Users className="w-8 h-8" />,
      description: "High-end experiences with exclusive accommodations"
    },
    {
      name: "Family Safaris",
      icon: <Users className="w-8 h-8" />,
      description: "Family-friendly adventures with activities for all ages"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96 bg-[url('https://cdn2.wanderlust.co.uk/media/1061/dreamstime_xxl_80975530.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=1320300467900000000')] flex items-center justify-center bg-cover bg-center bg-no-repeat">"
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4 fade-in-up">Safari Adventures</h1>
          <p className="text-xl mb-8 fade-in-up">Experience the wild heart of Tanzania</p>
          <Button size="lg" variant='outline' className="bg-transparent hover:bg-primary/90 text-white hover:text-white border-white fade-in-up">
            Book Your Safari
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="packages" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="packages">Safari Packages</TabsTrigger>
            <TabsTrigger value="types">Safari Types</TabsTrigger>
          </TabsList>

          <TabsContent value="packages" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Safari Packages</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Carefully crafted safari experiences that bring you face-to-face with Africa's most magnificent wildlife.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {safariPackages.map((safari) => (
                <Card key={safari.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={safari.image} 
                      alt={safari.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-black">
                        <Star className="w-3 h-3 mr-1 fill-current text-yellow-500" />
                        {safari.rating}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-black font-semibold">
                        {safari.price}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle>{safari.name}</CardTitle>
                    <CardDescription>{safari.description}</CardDescription>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 pt-2">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {safari.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {safari.participants}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Includes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {safari.includes.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {safari.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant='outline' className="w-full bg-tranparent hover:bg-secondary/90">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book This Safari
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="types" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Types of Safari Experiences</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose from various safari styles to match your adventure preferences and comfort level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {safariTypes.map((type, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 group">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{type.name}</h3>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Our Safaris?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Expert Guides</h4>
                  <p className="text-gray-600 text-sm">Professional local guides with deep knowledge of wildlife and culture</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Best Locations</h4>
                  <p className="text-gray-600 text-sm">Access to prime wildlife viewing areas and exclusive campsites</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Comfort & Safety</h4>
                  <p className="text-gray-600 text-sm">High-quality equipment and accommodations with safety as priority</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Safaris;
