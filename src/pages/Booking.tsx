
import React, { useState } from 'react';
import { Calendar, Users, MapPin, Clock, Phone, Mail, User, CreditCard } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Booking = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: 1,
    checkIn: '',
    checkOut: '',
    specialRequests: ''
  });
  const { toast } = useToast();

  const packages = [
    {
      id: 'serengeti-safari',
      name: 'Serengeti Safari Adventure',
      duration: '5 Days / 4 Nights',
      price: 2250,
      image: 'https://tanzania-specialist.com/wp-content/uploads/2023/07/shutterstock_51072787-1-800x500-1.jpg',
      includes: ['Game Drives', 'Accommodation', 'Meals', 'Transport', 'Guide'],
      description: 'Experience the Great Migration and Big Five in their natural habitat.'
    },
    {
      id: 'kilimanjaro-trek',
      name: 'Mount Kilimanjaro Trek',
      duration: '7 Days / 6 Nights',
      price: 3500,
      image: 'https://57hours.com/wp-content/uploads/2023/08/women-only-kilimanjaro-trek-via-lemosho-route-1440x810.jpg',
      includes: ['Professional Guide', 'Camping Equipment', 'All Meals', 'Park Fees', 'Certificate'],
      description: 'Conquer Africa\'s highest peak via the scenic Machame route.'
    },
    {
      id: 'zanzibar-beach',
      name: 'Zanzibar Beach Retreat',
      duration: '4 Days / 3 Nights',
      price: 1800,
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/7d/e1/5e/zanzibar-beach-resort.jpg?w=500&h=-1&s=1',
      includes: ['Beach Resort', 'Stone Town Tour', 'Spice Tour', 'Snorkeling', 'Airport Transfer'],
      description: 'Relax on pristine beaches and explore rich Swahili culture.'
    },
    {
      id: 'ngorongoro-crater',
      name: 'Ngorongoro Crater Safari',
      duration: '3 Days / 2 Nights',
      price: 1650,
      image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/3e/e7/80.jpg',
      includes: ['Crater Tour', 'Lodge Stay', 'All Meals', 'Game Drives', 'Maasai Village Visit'],
      description: 'Explore the world\'s largest intact volcanic caldera.'
    },
    {
      id: 'tarangire-elephant',
      name: 'Tarangire Elephant Experience',
      duration: '2 Days / 1 Night',
      price: 1200,
      image: 'https://karibu2024.b-cdn.net/wp-content/uploads/2024/08/Animal-Family_1480282913-scaled.jpg',
      includes: ['Game Drives', 'Luxury Tented Camp', 'All Meals', 'Transport', 'Guide'],
      description: 'Witness large herds of elephants and iconic baobab trees in Tarangire.'
    },
    {
      id: 'lake-manyara-birding',
      name: 'Lake Manyara Birding Tour',
      duration: '1 Day',
      price: 300,
      image: 'https://wildlifesafaritanzania.com/wp-content/uploads/2020/10/sasasdf.jpg',
      includes: ['Bird Watching', 'Picnic Lunch', 'Transport', 'Guide'],
      description: 'Discover diverse bird species in the scenic Lake Manyara National Park.'
    },
    {
      id: 'maasai-village-visit',
      name: 'Maasai Village Cultural Experience',
      duration: 'Half Day',
      price: 150,
      image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/Maasai-Village-Visit.jpg',
      includes: ['Village Tour', 'Cultural Performance', 'Traditional Meal'],
      description: 'Immerse yourself in the rich culture of the Maasai people.'
    },
    {
      id: 'hot-air-balloon',
      name: 'Serengeti Hot Air Balloon Safari',
      duration: '1 Day',
      price: 500,
      image: 'https://www.arushapark.com/wp-content/uploads/2023/03/mara-ballooning-hot-air-ballooning-safari-786x416-1-750x416.jpg',
      includes: ['Balloon Ride', 'Champagne Breakfast', 'Transport'],
      description: 'Experience the Serengeti from above with a breathtaking hot air balloon ride.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
    toast({
      title: "Package Selected",
      description: "Scroll down to complete your booking details.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPackage) {
      toast({
        title: "Please Select a Package",
        description: "Choose one of our amazing packages to continue.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.name || !formData.email || !formData.phone || !formData.checkIn) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate booking submission
    toast({
      title: "Booking Submitted Successfully!",
      description: "We'll contact you within 24 hours to confirm your adventure.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      travelers:1,
      checkIn: '',
      checkOut: '',
      specialRequests: ''
    });
    setSelectedPackage(null);
  };

  const selectedPackageDetails = packages.find(pkg => pkg.id === selectedPackage);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 bg-[url('https://www.wildlifekenyasafari.com/wp-content/uploads/2023/12/best-safari-outfitters-micato-safaris-00-SAFARISWB21-b8968854a85c4109a8141fd61029541c-1170x450.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-4xl font-bold mb-4 fade-in-up">Book Your Adventure</h1>
          <p className="text-xl fade-in-up">Choose from our curated Tanzania experiences</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Package Selection */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Select Your Package</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {packages.map((pkg) => (
                <Card 
                  key={pkg.id} 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    selectedPackage === pkg.id ? 'ring-2 ring-primary shadow-lg' : ''
                  }`}
                  onClick={() => handlePackageSelect(pkg.id)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.name}
                      className="w-full h-48 object-cover"
                    />
                    {selectedPackage === pkg.id && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-black">Selected</Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {pkg.name}
                      <span className="text-lg font-bold text-primary">${pkg.price}</span>
                    </CardTitle>
                    <CardDescription className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {pkg.duration}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Includes:</h4>
                      <div className="flex flex-wrap gap-1">
                        {pkg.includes.map((item, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Complete Your Booking
              </CardTitle>
              <CardDescription>
                {selectedPackageDetails 
                  ? `Booking: ${selectedPackageDetails.name} - $${selectedPackageDetails.price}`
                  : 'Please select a package above to continue'
                }
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Number of Travelers *</label>
                      <Input
                        name="travelers"
                        type="number"
                        min="1"
                        max="10"
                        value={formData.travelers}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Travel Dates */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Travel Dates
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Start Date *</label>
                      <Input
                        name="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Alternative Date (Optional)</label>
                      <Input
                        name="checkOut"
                        type="date"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Special Requests</h3>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    placeholder="Any dietary restrictions, accessibility needs, or special occasions?"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    rows={4}
                  />
                </div>

                {/* Summary */}
                {selectedPackageDetails && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Booking Summary</h3>
                    <div className="space-y-1 text-sm">
                      <p><strong>Package:</strong> {selectedPackageDetails.name}</p>
                      <p><strong>Duration:</strong> {selectedPackageDetails.duration}</p>
                      <p><strong>Travelers:</strong> {formData.travelers} person(s)</p>
                      <p><strong>Total:</strong> <span className="text-lg font-bold text-primary">
                        ${selectedPackageDetails.price * formData.travelers}
                      </span></p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  variant="outline"
                  className="w-full bg-transparent hover:bg-primary/90 text-black"
                  disabled={!selectedPackage}
                >
                  {selectedPackage ? 'Submit Booking Request' : 'Please Select a Package'}
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  * This is a booking inquiry. Our team will contact you to confirm details and process payment.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Booking;
