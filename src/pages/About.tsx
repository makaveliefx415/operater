
import React from 'react';
import { Users, Award, MapPin, Clock, Heart, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function About() {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "50,000+", label: "Happy Travelers" },
    { icon: <Award className="w-8 h-8" />, number: "15+", label: "Years Experience" },
    { icon: <MapPin className="w-8 h-8" />, number: "25+", label: "Destinations" },
    { icon: <Globe className="w-8 h-8" />, number: "100+", label: "Countries Served" }
  ];

  const team = [
    {
      name: "Makaveli 2pac",
      role: "Founder & CEO",
      image: "data:image/jpeg;base64,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",
      description: "Born and raised in Tanzania, Joseph founded our company with a passion for sharing Tanzania's natural beauty with the world."
    },
    {
      name: "Amina Hassan",
      role: "Safari Guide & Cultural Expert",
      image: "data:image/jpeg;base64,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",
      description: "With over 12 years of guiding experience, Amina specializes in wildlife tracking and cultural immersion experiences."
    },
    {
      name: "David Kimaro",
      role: "Mountain Guide & Adventure Specialist",
      image: "data:image/jpeg;base64,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",
      description: "A certified mountain guide with 200+ successful Kilimanjaro climbs, David ensures safe and memorable mountain adventures."
    }
  ];

  const values = [
    {
      title: "Sustainable Tourism",
      icon: <Heart className="w-8 h-8" />,
      description: "We're committed to responsible tourism that benefits local communities and protects Tanzania's natural heritage."
    },
    {
      title: "Authentic Experiences",
      icon: <Globe className="w-8 h-8" />,
      description: "We provide genuine cultural exchanges and wildlife encounters that create lasting memories and understanding."
    },
    {
      title: "Expert Knowledge",
      icon: <Award className="w-8 h-8" />,
      description: "Our local guides and experts share deep knowledge of Tanzania's wildlife, culture, and history."
    },
    {
      title: "Safety First",
      icon: <Users className="w-8 h-8" />,
      description: "We prioritize the safety and well-being of our guests while delivering exceptional adventure experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-[12px] md:text-[23px] ">
      {/* Hero Section */}
      <div className="relative h-96  bg-[url('https://www.easytravel.co.tz/wp-content/uploads/2020/07/client-practising-maasai-culture.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4 fade-in-up">About Tanzania Explorer</h1>
          <p className="text-xl mb-8 fade-in-up">Your gateway to authentic African adventures</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 text-[12px] md:text-[23px] ">
        {/* Our Story Section */}
        <section className="mb-30">
          <div className="grid grid-col-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-20">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2025 by passionate Tanzanian locals, Tanzania Explorer began as a small family business
                with a simple mission: to share the incredible beauty and rich culture of Tanzania with travelers
                from around the world.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we've grown into one of Tanzania's most trusted tour operators, but we've never
                lost sight of our core values: authentic experiences, sustainable tourism, and creating meaningful
                connections between our guests and local communities.
              </p>
              <p className="text-gray-600 mb-8">
                Today, we're proud to have welcomed over 50,000 travelers to Tanzania, each leaving with
                unforgettable memories and a deeper appreciation for this magnificent country and its people.
               </p>
              <Button size="lg" variant='outline' className="w-full bg-secondary hover:bg-primary/90 text-black bottom-25px" asChild>
                <Link to="/booking">Start Your Journey</Link>
              </Button>
           
            </div>
            <div className="relative">
              <img
                src="https://www.asiliaafrica.com/wp-content/smush-webp/2024/04/Asilia-Walking-Safari-7-800x800.jpg.webp"
                alt="Tanzania landscape"
                className="rounded-lg shadow-lg" />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our passionate team of local experts, guides, and adventure specialists are dedicated to
              providing you with an unforgettable Tanzanian experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and ensure that every experience with us is
              meaningful, responsible, and transformative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 group">
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-primary/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-6">
            To provide authentic, sustainable, and transformative travel experiences that showcase
            the natural beauty and rich culture of Tanzania while supporting local communities and
            conservation efforts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black">
              Plan Your Adventure
            </Button>
            <Button size="lg" variant="outline">
              Contact Our Team
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
