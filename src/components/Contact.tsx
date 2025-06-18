import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Gourmet Street", "Downtown District", "New York, NY 10001"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567", "For Reservations", "(555) 123-4568"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@spicepalace.com", "reservations@spicepalace.com", "events@spicepalace.com"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Thu: 5:00 PM - 10:00 PM", "Fri-Sat: 5:00 PM - 11:00 PM", "Sun: 4:00 PM - 9:00 PM"]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" }
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@spicepalace.com';
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience fine dining at its best. Make a reservation or visit us for an unforgettable culinary journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full mb-4">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-300 text-sm">{detail}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Find Us</h3>
            <div className="aspect-video bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center text-white font-semibold text-lg">
              Interactive Map Coming Soon
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              Located in the heart of downtown, easily accessible by public transport with valet parking available.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Make a Reservation</h3>
            <div className="space-y-4">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold">
                <Phone className="h-5 w-5 mr-2" />
                Call (555) 123-4567
              </Button>
              <Button 
                onClick={handleEmailClick}
                variant="outline" 
                className="w-full border-orange-400 text-white bg-orange-600/80 hover:bg-orange-700 border-2 py-3 text-lg font-semibold shadow-lg transition-all duration-200"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </Button>
              <div className="text-center pt-4">
                <p className="text-gray-300 mb-4">Follow us on social media</p>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className={`text-white ${social.color} hover:bg-white/20 p-3`}
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold">Spice Palace</div>
            <p className="text-gray-400">© 2024 Spice Palace Restaurant. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
