import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, Award, Heart, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: ChefHat,
      title: "Expert Chefs",
      description: "Our experienced chefs bring years of culinary expertise to every dish"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in fine dining and customer service"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish is prepared with passion and attention to detail"
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "We source the freshest ingredients daily for optimal flavor"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Savoria
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2015, Savoria has been a cornerstone of fine dining in the heart of downtown. 
            Our commitment to exceptional cuisine, impeccable service, and an unforgettable dining 
            experience has made us a favorite among food enthusiasts and critics alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-amber-50">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              What started as a dream to create extraordinary dining experiences has evolved into 
              one of the city's most beloved restaurants. Our head chef, trained in the finest 
              culinary schools of France, brings together traditional techniques with modern innovation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe that great food brings people together, creates memories, and nourishes 
              both the body and soul. Every dish we serve tells a story of passion, creativity, 
              and dedication to the craft of cooking.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-600">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">8+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">15+</div>
                <div className="text-sm text-gray-600">Award Winning Dishes</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl font-semibold shadow-2xl">
              Restaurant Interior & Chef Image
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-t-4 border-orange-600">
              <div className="text-2xl font-bold text-gray-800">4.9/5</div>
              <div className="text-sm text-gray-600">Customer Rating</div>
              <div className="flex mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
