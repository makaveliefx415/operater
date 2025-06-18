
import React, { useState } from 'react';
import { Camera, Download, Heart, Share2, ZoomIn, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { title } from 'process';
import { url } from 'inspector';
import { Description } from '@radix-ui/react-toast';
import { dataTagErrorSymbol } from '@tanstack/react-query';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const photos = [
    {
      id: 1,
      url: "https://media.istockphoto.com/id/148231593/photo/three-giraffes-parents-and-kid.jpg?s=612x612&w=0&k=20&c=j2QxHxNi19vDxwMom7QKXeufArptFqxsD3cbRIcADnI=",
      title: "Giraffes in Serengeti",
      category: "Wildlife",
      description: "Majestic giraffes roaming the endless plains of Serengeti",
      photographer: "Safari Explorer",
      date: "2025-01-15"
    },
    {
      id: 2,
      url: "https://media.istockphoto.com/id/2179522582/photo/high-angle-view-wild-animals-on-lake.jpg?s=612x612&w=0&k=20&c=p-XgSG6Wy3lt47lan-MkVt7Hid8q1B8ZUJ1FN1_uPjE=",
      title: "Wildlife Migration",
      category: "Wildlife",
      description: "The great migration - one of nature's most spectacular events",
      photographer: "Nature Photographer",
      date: "2025-02-20"
    },
    {
      id: 3,
      url: "https://media.istockphoto.com/id/908224360/photo/mount-kilimanjaro.jpg?s=612x612&w=0&k=20&c=kz3VWPI64PzZhzsJmZmVlgydc8In5Cn0A1kUWePSNOg=",
      title: "Mount Kilimanjaro",
      category: "Landscapes",
      description: "Africa's highest peak rising majestically above the clouds",
      photographer: "Mountain Guide",
      date: "2025-03-10"
    },
    {
      id: 4,
      url: "https://media.istockphoto.com/id/510483306/photo/middle-eastern-and-multi-ethnic-friends-enjoying-conversation-at-desert-camp.jpg?s=612x612&w=0&k=20&c=cHZM7X6j26s6TVV-YJKtNWAHluQdjw21dCrWtZbSniI=",
      title: "Luxury Camping Experience Safari",
      category: "Camping",
      description: "Traditional camel caravan crossing the African plains",
      photographer: "Cultural Guide",
      date: "2025-04-05"
    },
    {
      id: 5,
      url: "https://media.istockphoto.com/id/143922295/photo/serengeti-africa-sunset-behind-trees-and-a-safari-vehicle.jpg?s=612x612&w=0&k=20&c=bW4kDWTBRXxq2IWp_3Qtas5PT4DdedPSG4EcetPMi5I=",
      title: "Serengeti Sunset",
      category: "Landscapes",
      description: "Golden sunset over the vast Serengeti plains",
      photographer: "Landscape Artist",
      date: "2025-05-12"
    },
    {
      id: 6,
      url: "https://media.istockphoto.com/id/2194813085/photo/the-monument-in-stone-town-zanzibar.jpg?s=612x612&w=0&k=20&c=Ej_ySu6clfs0wgDuIMPxCMbwvBQShzQ_TjyYDMfQBss=",
      title: "Historical Places",
      category: "Culture",
      description: "Historic buildings showcasing Swahili and Arabic architecture",
      photographer: "Heritage Photographer",
      date: "2025-06-18"
    },
    {
      id: 7,
      url: "https://media.istockphoto.com/id/182921931/photo/wide-angle-photograph-of-some-grey-elephants-at-a-waterhole.jpg?s=612x612&w=0&k=20&c=IIR4O9tKb9W8CYjI5Aze1tICGwlZ5Vionoy5F3vfqfE=",
      title: "Elephants at Waterhole",
      category: "Wildlife",
      description: "African elephants gathering at a watering hole",
      photographer: "Wildlife Expert",
      date: "2025-07-22"
    },
    {
      id: 8,
      url: "https://media.istockphoto.com/id/1196998582/photo/safari-vehicles-in-between-large-herds-of-animals-ngorongoro-crater-tanzania.jpg?s=612x612&w=0&k=20&c=6IPz2RV65rRN3OW3n9S1sljcZXaUf-O5ccUe0-yMVag=",
      title: "Ngorongoro Crater",
      category: "Landscapes",
      description: "The world's largest unbroken caldera teeming with wildlife",
      photographer: "Conservation Photographer",
      date: "2025-08-14"
    },
    {
      id: 9,
      url: "https://media.istockphoto.com/id/640057166/photo/warrior-from-samburu-tribe-performing-traditional-jumping-dance-kenya-africa.jpg?s=612x612&w=0&k=20&c=M5wLVBhPrTYYZNuRvckvnZuVr80dD2IGkZ85TdVFus0=",
      title: "Maasai Warrior",
      category: "Culture",
      description: "Traditional Maasai warrior in ceremonial dress",
      photographer: "Cultural Documentarian",
      date: "2025-09-08"
    },
    {
      id: 10,
      url: "https://media.istockphoto.com/id/502221257/photo/masai-warriors-dancing-traditional-jumps-as-cultural-ceremony-tanzania.jpg?s=612x612&w=0&k=20&c=EO_fZw62Hat6G9YTn6ek0iHr_SMaKyUSn4U_JUw5lKM=",
      title: "Maasai Dance",
      category: "Culture",
      description: "Vibrant Maasai dance showcasing cultural heritage",
      photographer: "Cultural Photographer",
      date: "2025-10-01"
    },
    {
      id: 11,
      url:"https://media.istockphoto.com/id/941491662/photo/giraffes-herd-in-savannah.jpg?s=612x612&w=0&k=20&c=4_YcLLNLRJXUReR3L6mvLK3IIyXljIjEU2YfPQrGA7E=",
      title: "Giraffes in Savannah",
      category: "Wildlife",
      description: "A herd of giraffes grazing in the savannah",
      photographer: "Wildlife Photographer",
      date: "2025-10-15"
    },
    {
      id: 12,
      url: "https://media.istockphoto.com/id/1416834065/photo/african-elephant-walking-with-tourist-car-stop-by-watching-during-sunset-at-masai-mara.jpg?s=612x612&w=0&k=20&c=OoRz5qTlXU4UTqhrXQ-c4bTO-avWBG-QE30iSOE_1Hg=",
      title: "Elephant at Sunset",
      category: "Wildlife",
      description: "An African elephant silhouetted against a stunning sunset",
      photographer: "Brian Photographer",
      date: "2025-10-01"
    },
    {
      id: 13,
      url: "https://media.istockphoto.com/id/167768212/photo/cheetah-family.jpg?s=612x612&w=0&k=20&c=I1yeZzXS3b4R70JvOBOHMfWvav4uiUXQh3r1CLEoqII=",
      title: "Cheetah Family",
      category: "Wildlife",
      description: "A family of cheetahs resting in the shade",
      photographer: "Wildlife Enthusiast",
      date: "2025-10-20"
    },
    {
      id: 14,
      url: "https://media.istockphoto.com/id/1185317987/photo/mother-and-baby-rhino-getting-ready-to-drink.jpg?s=612x612&w=0&k=20&c=CdDoIFUwSEqOpyXj457exFu51jJr4CtYARg2ALMgAKc=",
      title: "Big Five",
      category: "Wildlife",
      description: "The Big Five of Africa - lion, leopard, rhinoceros, elephant, and Cape buffalo",
      photographer: "Safari Guide",
      date: "2025-11-05"
    },
    {
      id: 15,
      url: "https://media.istockphoto.com/id/1324485884/photo/cute-lion-family.jpg?s=612x612&w=0&k=20&c=QqRN63XYju8cNbmIoQZaLVoPxGg6g2d7vFfq4ylBY5E=",
      title: "Lion Family",
      category: "Wildlife",
      description: "A pride of lions with a cub",
      photographer: "Wildlife Photographer",
      date: "2025-11-20"
    },
    {
      id: 16,
      url: "https://media.istockphoto.com/id/103963118/photo/a-flock-of-flamingos-in-the-water.jpg?s=612x612&w=0&k=20&c=yRJcODQad5ryow6Zs0P-LoRkvx96kSjrvNCCnks_Ee4=",
      title: "Flamingos at Lake Manyara",
      category: "Wildlife",
      description: "A flock of flamingos wading in the shallow waters of Lake Manyara",
      photographer: "Birdwatching Expert",
      date: "2025-12-01"
    },
    {
      id: 17,
      url: "https://media.istockphoto.com/id/2189835154/photo/leopard-quenching-thirst-at-wilpattu-national-park.jpg?s=612x612&w=0&k=20&c=TQMx2HSc9VGtNS992fqDUx1gTF81xHJ9rBiOCkhZ5AM=",
      title: "Leopard at Waterhole",
      category: "Wildlife",
      description: "A leopard drinking water at a waterhole in the wild",
      photographer: "Wildlife Photographer",
      date: "2025-12-15"
    },
    {
      id: 18,
      url: "https://media.istockphoto.com/id/1307291444/photo/safari-car-is-waiting-for-crossing-elephants.jpg?s=612x612&w=0&k=20&c=aFAgY-FdU2Ko1OQJRpFcg5FY70SawNnEIPqMFlgu6Ps=",
      title: "Safari Car with Elephants",
      category: "Wildlife",
      description: "A safari car waiting for elephants to cross the road",
      photographer: "Safari Guide",
      date: "2025-12-30"
    },
    {
      id: 19,
      url: "https://media.istockphoto.com/id/683812350/photo/sunset-over-the-african-plains.jpg?s=612x612&w=0&k=20&c=bOACfhhv5UWYrjvGTKoRaYe5aSX3LwmLS8Gv9ZM3vmQ=",
      title: "Sunset Over the Plains",
      category: "Landscapes",
      description: "A sunset Moment",
      photographer: "Photographer",
      date: "2025-01-10"
    },
    {
      id: 20,
      url: "https://media.istockphoto.com/id/841495890/photo/kilimanjaro-mountain-tanzania-travel-africa.jpg?s=612x612&w=0&k=20&c=jPi1zlr8rWVlbqo1wHcdxD1all7rFrHqewmyg71OtM0=",
      title: "Kilimanjaro Mountain",
      category: "Landscapes",
      description: "The majestic Mount Kilimanjaro, Africa's highest peak",
      photographer: "Mountain Climber",
      date: "2025-01-25"
    },
    {
      id: 21,
      url: "https://media.istockphoto.com/id/472048307/photo/balloon-ride-over-the-serengeti-tanzania.jpg?s=612x612&w=0&k=20&c=dcomIG9TEXM62DsejkigoDVBR1PFdCwqL2FlKTGeac8=",
      title: "Balloon Ride Over Serengeti",
      category: "Landscapes",
      description: "A hot air balloon ride over the Serengeti at sunrise",
      photographer: "Adventure Photographer",
      date: "2025-02-05"
    },
    {
      id: 22,
      url: "https://media.istockphoto.com/id/2208963902/photo/a-farmer-in-the-village-in-usambara-mountains-tanzania.jpg?s=612x612&w=0&k=20&c=YZ_qCGKcnpZ-9GQRRONihhxfwYf0epVShr7oLdBFUz0=",
      title: "Usambara Mountains",
      category: "Culture",
      description: "A farmer in the village in the Usambara Mountains",
      photographer: "Cultural Photographer",
      date: "2025-02-20"
    },
    {
      id: 23,
      url: "https://media.istockphoto.com/id/1304662475/photo/the-hadzabe-tribesmen-in-tanzania-gathered-near-a-fire-place.jpg?s=612x612&w=0&k=20&c=cEpzXM4oh8nMjEHcUdTeVy5asOPvF42DbBCi6UqfjmY=",
      title: "Hadzabe Tribesmen",
      category: "Culture",
      description: "Hadzabe tribesmen gathered near a fire place in Tanzania",
      photographer: "Cultural Documentarian",
      date: "2025-03-05"
    },
    {
      id: 24,
      url: "https://media.istockphoto.com/id/1153917974/photo/burial-relics-of-bagamoyo.jpg?s=612x612&w=0&k=20&c=O-P2ZYuLbYBQE_g4PxZPKNf-iiSqO3PArQU2hQsbjHM=",
      title: "Burial Relics of Bagamoyo",
      category: "Culture",
      description: "Historical burial relics of Bagamoyo, a coastal town in Tanzania",
      photographer: "Heritage Photographer",
      date: "2010-03-20"
    }
  ];

  const filterPhotosByCategory = (category: string) => {
    if (category === 'all') return photos;
    return photos.filter(photo => photo.category === category);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Wildlife': return 'bg-green-100 text-green-800';
      case 'Landscapes': return 'bg-blue-100 text-blue-800';
      case 'Culture': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const openLightbox = (photo: any) => {
    setSelectedImage(photo);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="relative h-96 bg-[url('https://hawkinsphotoalchemy.net/wp-content/uploads/2013/08/Cultural-Heritage-7.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="relative inset-0 "></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4 fade-in-up">Tanzania Gallery</h1>
          <p className="text-xl mb-8 fade-in-up">Capturing the essence of East Africa</p>
          <Button size="lg" variant='outline' className="bg-transparent hover:bg-primary/90 text-white fade-in-up">
            <Camera className="w-5 h-5 mr-2" />
            View All Photos
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="all" className="w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Photo Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Explore Tanzania through our lens - from breathtaking wildlife encounters to stunning landscapes and rich cultural heritage.
            </p>
            
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="Wildlife">Wildlife</TabsTrigger>
              <TabsTrigger value="Landscapes">Landscapes</TabsTrigger>
              <TabsTrigger value="Culture">Culture</TabsTrigger>
            </TabsList>
          </div>

          {['all', 'Wildlife', 'Landscapes', 'Culture'].map((category) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterPhotosByCategory(category).map((photo) => (
                  <Card key={photo.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                        onClick={() => openLightbox(photo)}>
                    <div className="relative overflow-hidden">
                      <img 
                        src={photo.url} 
                        alt={photo.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className={getCategoryColor(photo.category)}>
                          {photo.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h3 className="font-semibold text-sm">{photo.title}</h3>
                          <p className="text-xs text-gray-300 mt-1">{photo.description}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Photography Tips Section */}
        <section className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Photography Tips for Tanzania</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Golden Hour Magic</h4>
              <p className="text-gray-600 text-sm">Capture stunning wildlife and landscapes during sunrise and sunset for the best lighting.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ZoomIn className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Telephoto Lens</h4>
              <p className="text-gray-600 text-sm">Bring a long telephoto lens for wildlife photography while maintaining safe distances.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Respect Wildlife</h4>
              <p className="text-gray-600 text-sm">Always maintain respectful distances and follow park guidelines for ethical photography.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>
            
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm text-white p-6 rounded-b-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                  <p className="text-gray-300 text-sm">by {selectedImage.photographer} • {selectedImage.date}</p>
                </div>
                <Badge className={getCategoryColor(selectedImage.category)}>
                  {selectedImage.category}
                </Badge>
              </div>
              <p className="text-gray-300 mb-4">{selectedImage.description}</p>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Heart className="w-4 h-4 mr-2" />
                  Like
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
