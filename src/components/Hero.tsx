
import { ShoppingCart, Star, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Hero = ({ cartItemsCount, onCartClick }: HeroProps) => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-pulse"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23f97316'/%3E%3Ctext x='960' y='540' font-family='Arial' font-size='60' fill='white' text-anchor='middle' dominant-baseline='middle'%3ERestaurant Hero Image%3C/text%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Savoria</div>
          <Button
            onClick={onCartClick}
            variant="outline"
            size="sm"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 relative"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Cart
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to
          <span className="block text-orange-400">Savoria</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in delay-200">
          Experience culinary excellence with our chef-crafted dishes made from the finest ingredients
        </p>
        
        {/* Features */}
        <div className="flex flex-wrap justify-center gap-8 mb-10 animate-fade-in delay-300">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400" />
            <span>5-Star Rated</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-orange-400" />
            <span>30min Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-red-400" />
            <span>Downtown Location</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
          <Button
            onClick={scrollToMenu}
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
          >
            View Menu
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
          >
            Reserve Table
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
