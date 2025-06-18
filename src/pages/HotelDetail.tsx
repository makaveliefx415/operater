
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Wifi, Car, Utensils, MapPin, Phone, Mail, ArrowLeft, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HotelDetail = () => {
  const { id } = useParams();

  const hotels = [
    {
      id: '1',
      name: "Serengeti Safari Lodge",
      category: "Luxury",
      images: [
        "https://media.istockphoto.com/id/1134561303/photo/tent-camps-in-the-serengeti-national-park-tanzania-africa.jpg?s=612x612&w=0&k=20&c=7rhAMayoMgd-dKa-8fXBidrmiYGCNoF5KHggglq46CQ=",
        "https://media.istockphoto.com/id/2206628521/photo/tents-camping-in-the-african-savanna-during-a-cultural-trip-and-safari-in-tanzania.jpg?s=612x612&w=0&k=20&c=RKlnuRbpN4ddO6QPEZ1hn6j3YmElYgRo6VFu74tCba0=",
        "https://media.istockphoto.com/id/579409398/photo/tent.jpg?s=612x612&w=0&k=20&c=VfruNFhMvzQch1_Tu0lkvjg1953DjQAPgHNeHcoG7fc=",
        "https://media.istockphoto.com/id/2212211803/video/raw-of-special-canvas-luxury-tents-in-camp-site-in-african-safari-inside-park.jpg?s=640x640&k=20&c=l8JYY8zU7EbfjqrSoP7iT0jL_CaRyEAgYMZc1sEt7ck="
      ],
      location: "Serengeti National Park",
      rating: 4.9,
      price: 850,
      description: "Exclusive luxury lodge with panoramic views of the Serengeti plains. Experience the ultimate safari luxury with world-class amenities and unparalleled wildlife viewing opportunities.",
      amenities: ["Free WiFi", "Restaurant", "Pool", "Spa", "Game drives", "Helicopter tours", "24/7 Room Service", "Laundry Service"],
      features: ["All-inclusive", "Private balcony", "24/7 service", "Wildlife viewing", "Sunset cocktails", "Cultural experiences"],
      rooms: [
        { type: "Safari Tent", price: 650, capacity: 2 },
        { type: "Luxury Suite", price: 850, capacity: 4 },
        { type: "Presidential Villa", price: 1200, capacity: 6 }
      ]
    },
    {
      id: '2',
      name: "Kilimanjaro Mountain Resort",
      category: "Luxury",
      images: [
        "https://media.istockphoto.com/id/2148093592/photo/view-of-tent-camp-in-the-african-savannah-tents-in-the-forest-on-the-background-of-mount.jpg?s=612x612&w=0&k=20&c=zyfRhcrjy6S7kQ0Eo-nQ151DM8BMBANweHX_ueOVNWQ=",
        "https://media.istockphoto.com/id/2148096955/photo/view-of-tent-camp-in-the-african-savannah-tents-in-the-forest-on-the-background-of-mount.jpg?s=612x612&w=0&k=20&c=qxkTrIj9qrRKcb4sFu6Hgpj-HZi5P20sRwVJwQoZKQo="
      ],
      location: "Moshi, Kilimanjaro",
      rating: 4.8,
      price: 450,
      description: "Premium resort at the foot of Mount Kilimanjaro with spectacular mountain views and easy access to climbing routes.",
      amenities: ["Free WiFi", "Restaurant", "Gym", "Spa", "Airport transfer", "Tour desk", "Coffee plantation tours"],
      features: ["Mountain views", "Climbing packages", "Coffee plantation tours", "Cultural experiences", "Hiking trails"],
      rooms: [
        { type: "Mountain View Room", price: 350, capacity: 2 },
        { type: "Deluxe Suite", price: 450, capacity: 3 },
        { type: "Family Villa", price: 650, capacity: 6 }
      ]
    },
    {
      id: '3',
      name: "Zanzibar Beach Resort",
      category: "Beachfront",
      images: [
        "https://media.istockphoto.com/id/1136453253/photo/aerial-view-of-umbrellas-palms-on-the-sandy-beach-of-indian-ocean-at-sunset-summer-holiday-in.jpg?s=612x612&w=0&k=20&c=iwN3mCHWmBUDGV3tfU3973RElUhrntXTwDyWOhAtBJY=",
        "https://media.istockphoto.com/id/1396552648/video/aerial-view-of-sea-waves-umbrellas-green-palms-on-the-sandy-beach-at-sunset-summer-in.jpg?s=640x640&k=20&c=DmtFNmHHrJsZyuWh5TXL72M662eThdS_BNOiI-frg_o="
      ],
      location: "Zanzibar Island",
      rating: 4.7,
      price: 200,
      description: "A beachfront paradise with white sandy beaches, crystal clear waters, and vibrant coral reefs. Perfect for relaxation and water sports.",
      amenities: ["Free WiFi", "Beach access", "Water sports", "Spa", "Restaurant", "Bar", "Airport shuttle"],
      features: ["Private beach", "Snorkeling tours", "Cultural tours", "Sunset dinners", "Water sports"],
      rooms: [
        { type: "Ocean View Bungalow", price: 180, capacity: 2 },
        { type: "Beachfront Suite", price: 250, capacity: 4 },
        { type: "Family Villa", price: 350, capacity: 6 }
      ]
    },
    {
      id: '4',
      name: "Arusha Coffee Lodge",
      category: "Boutique",
      images: [
        "https://media.istockphoto.com/id/457090473/photo/tropical-cafe-terrace-in-the-garden.jpg?s=612x612&w=0&k=20&c=uwfHhwKDQETQaYmx3KQz94M4058pjAxv937mPNg8bzs=",
        "https://media.istockphoto.com/id/477810249/photo/la-paz-observatory.jpg?s=612x612&w=0&k=20&c=OATEgFVDp_ZeWdQBDERaetMNFr6xgF7XyXviaV5XbRM="
      ],
      location: "Arusha",
      rating: 4.9,
      price: 600,
      description: "A unique lodge perched on the rim of the Ngorongoro Crater, offering breathtaking views and exclusive wildlife experiences.",
      amenities: ["Free WiFi", "Restaurant", "Spa", "Game drives", "Cultural tours", "24/7 Room Service"],
      features: ["Crater views", "Wildlife viewing", "Cultural experiences", "Sunset cocktails", "Private balconies"],
      rooms: [
        { type: "Crater View Room", price: 500, capacity: 2 },
        { type: "Luxury Suite", price: 700, capacity: 4 },
        { type: "Family Villa", price: 900, capacity: 6 }
      ]
    },
    {
      id: '5',
      name: "Ngorongoro Crater Lodge",
      category: "luxury",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      location: "Ngorongoro Crater",
      rating: 4.6,
      price: 180,
      description: "A charming boutique hotel set in lush coffee plantations, offering a unique blend of comfort and cultural experiences.",
      amenities: ["Free WiFi", "Restaurant", "Coffee tours", "Spa", "Airport transfer", "Cultural experiences"],
      features: ["Coffee plantation tours", "Cultural experiences", "Local cuisine", "Garden views", "Relaxing atmosphere"],
      rooms: [
        { type: "Standard Room", price: 150, capacity: 2 },
        { type: "Deluxe Room", price: 200, capacity: 3 },
        { type: "Family Suite", price: 300, capacity: 5 }
      ]
    },
    {
      id: '6',
      name: "Mount Meru Hotel",
      category: "Business&Luxury",
      images: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/99/79/0d/mount-meru-hotel.jpg?w=1000&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/b5/9f/1b/mount-meru-hotel.jpg?w=1000&h=-1&s=1"
      ],
      location: "Arusha",
      rating: 4.5,
      price: 300,
      description: "A modern hotel in the heart of Arusha, ideal for business travelers and tourists alike. Offers excellent amenities and easy access to local attractions.",
      amenities: ["Free WiFi", "Restaurant", "Conference rooms", "Gym", "Airport shuttle", "Business center"],
      features: ["Business facilities", "City views", "Cultural tours", "Local cuisine", "Relaxing atmosphere"],
      rooms: [
        { type: "Standard Room", price: 250, capacity: 2 },
        { type: "Executive Suite", price: 350, capacity: 3 },
        { type: "Family Suite", price: 450, capacity: 5 }
      ]
    }
  ];

  const hotel = hotels.find(h => h.id === id) || hotels[0];

  const getStarRating = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-current text-yellow-500' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/hotels" className="inline-flex items-center text-primary hover:text-primary/80">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Hotels
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hotel.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${hotel.name} ${index + 1}`}
                  className={`rounded-lg object-cover ${index === 0 ? 'md:col-span-2 h-64' : 'h-32'}`}
                />
              ))}
            </div>

            {/* Hotel Info */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">{hotel.name}</CardTitle>
                    <div className="flex items-center mt-2">
                      <MapPin className="w-4 h-4 mr-1 text-gray-600" />
                      <span className="text-gray-600">{hotel.location}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      {getStarRating(Math.floor(hotel.rating))}
                      <span className="ml-2 text-sm text-gray-600">({hotel.rating})</span>
                    </div>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800">{hotel.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{hotel.description}</p>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Amenities & Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {hotel.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Room Types */}
            <Card>
              <CardHeader>
                <CardTitle>Room Types & Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {hotel.rooms.map((room, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{room.type}</h4>
                        <p className="text-sm text-gray-600">Accommodates {room.capacity} guests</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">${room.price}/night</p>
                        <Link to="/booking">
                          <Button size="sm" variant='outline' className="mt-2 hover:bg-secondary ">Select Room</Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Book Your Stay
                  <span className="text-xl font-bold text-primary">From ${hotel.price}/night</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to="/booking">
                  <Button variant='outline' className="w-full bg-transparent hover:bg-primary/90 text-black fade-in-out" size="lg">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </Link>
                
                <div className="space-y-3 pt-4 border-t">
                  <h4 className="font-semibold">Special Features</h4>
                  {hotel.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="mr-1 mb-1">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <h4 className="font-semibold">Contact Hotel</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Phone className="w-4 h-4 mr-2 text-primary" />
                      <span>+255 123 456 789</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      <span>info@{hotel.name.toLowerCase().replace(/\s+/g, '')}.com</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
