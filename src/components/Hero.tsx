
import { ShoppingCart, Star, Clock, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Hero = ({ cartItemsCount, onCartClick }: HeroProps) => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-orange-900 to-amber-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="text-2xl font-bold text-white">Spice Palace</div>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={scrollToMenu}
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                Contact
              </button>
            </nav>
            <Button
              onClick={onCartClick}
              variant="outline"
              size="sm"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 relative transition-all duration-300"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Star className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">Award-Winning Restaurant</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="block animate-fade-in">Welcome to</span>
            <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-fade-in delay-300">
              Spice Palace
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
            Where authentic Indian flavors meet modern culinary artistry. Experience the rich heritage of Indian cuisine, 
            crafted with traditional spices and served with royal elegance.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in delay-700">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <Star className="h-8 w-8 text-yellow-400" />
            </div>
            <div className="text-3xl font-bold mb-1">4.9</div>
            <div className="text-sm text-gray-300">5-Star Rating</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <Clock className="h-8 w-8 text-orange-400" />
            </div>
            <div className="text-3xl font-bold mb-1">30</div>
            <div className="text-sm text-gray-300">Min Delivery</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <MapPin className="h-8 w-8 text-red-400" />
            </div>
            <div className="text-3xl font-bold mb-1">50K+</div>
            <div className="text-sm text-gray-300">Happy Customers</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center mb-16 animate-fade-in delay-1000">
          <Button
            onClick={scrollToMenu}
            size="lg"
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Explore Menu
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Featured Image */}
        <div className="relative max-w-4xl mx-auto animate-fade-in delay-1200">
          <div className="aspect-video rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Elegant restaurant interior with warm lighting and modern decor"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
            Live Kitchen
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-white/70 text-xs font-medium">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
