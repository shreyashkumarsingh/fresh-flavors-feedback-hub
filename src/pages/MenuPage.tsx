
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, WheatOff, Plus, ShoppingCart, ArrowLeft } from 'lucide-react';
import { MenuItem } from '../types/restaurant';
import { Link } from 'react-router-dom';

interface MenuPageProps {
  onAddToCart: (item: MenuItem, quantity: number) => void;
  cartItemsCount: number;
  onCartClick: () => void;
}

const MenuPage = ({ onAddToCart, cartItemsCount, onCartClick }: MenuPageProps) => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const menuItems: MenuItem[] = [
    // Appetizers
    {
      id: '1',
      name: 'Truffle Arancini',
      description: 'Crispy risotto balls with truffle oil and parmesan',
      price: 14,
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '2',
      name: 'Seared Scallops',
      description: 'Pan-seared scallops with cauliflower purée',
      price: 18,
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '3',
      name: 'Burrata Caprese',
      description: 'Fresh burrata with heirloom tomatoes and basil',
      price: 16,
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '4',
      name: 'Bruschetta Trio',
      description: 'Three varieties of artisanal bruschetta',
      price: 12,
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1572441713132-51c75654db73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '5',
      name: 'Tuna Tartare',
      description: 'Fresh yellowfin tuna with avocado and citrus',
      price: 20,
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },

    // Mains
    {
      id: '6',
      name: 'Wagyu Ribeye',
      description: '12oz wagyu ribeye with roasted vegetables',
      price: 65,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '7',
      name: 'Lobster Risotto',
      description: 'Creamy lobster risotto with fresh herbs',
      price: 42,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d271?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '8',
      name: 'Duck Confit',
      description: 'Slow-cooked duck leg with cherry sauce',
      price: 38,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '9',
      name: 'Chilean Sea Bass',
      description: 'Pan-seared sea bass with miso glaze',
      price: 36,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '10',
      name: 'Lamb Rack',
      description: 'Herb-crusted rack of lamb with red wine jus',
      price: 48,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '11',
      name: 'Osso Buco',
      description: 'Braised veal shank with saffron risotto',
      price: 44,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '12',
      name: 'Stuffed Portobello',
      description: 'Quinoa and vegetable stuffed mushroom',
      price: 28,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '13',
      name: 'Pan-Seared Salmon',
      description: 'Atlantic salmon with lemon butter sauce',
      price: 32,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '14',
      name: 'Beef Tenderloin',
      description: 'Grilled tenderloin with roasted garlic',
      price: 52,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },

    // Desserts
    {
      id: '15',
      name: 'Chocolate Soufflé',
      description: 'Warm chocolate soufflé with vanilla ice cream',
      price: 12,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '16',
      name: 'Crème Brûlée',
      description: 'Classic vanilla crème brûlée with caramelized sugar',
      price: 10,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '17',
      name: 'Tiramisu',
      description: 'Traditional Italian tiramisu with espresso',
      price: 11,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '18',
      name: 'Lemon Tart',
      description: 'Tangy lemon curd with buttery pastry crust',
      price: 9,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '19',
      name: 'Panna Cotta',
      description: 'Vanilla panna cotta with berry compote',
      price: 8,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '20',
      name: 'Chocolate Lava Cake',
      description: 'Molten chocolate cake with ice cream',
      price: 13,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },

    // Beverages
    {
      id: '21',
      name: 'House Wine Selection',
      description: 'Curated selection of red and white wines',
      price: 8,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '22',
      name: 'Craft Cocktails',
      description: 'Signature cocktails made with premium spirits',
      price: 12,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '23',
      name: 'Artisan Coffee',
      description: 'Single-origin coffee beans, expertly roasted',
      price: 4,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '24',
      name: 'Fresh Juices',
      description: 'Freshly squeezed seasonal fruit juices',
      price: 6,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1622597998012-05eb4c1e9e1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const categories = [
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 text-orange-600 hover:text-orange-700">
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Home</span>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="text-2xl font-bold text-gray-800">Savoria Menu</span>
              </div>
            </div>
            <Button
              onClick={onCartClick}
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 relative"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Complete Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our full selection of carefully crafted dishes, each prepared with the finest ingredients and utmost attention to detail
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              className={`px-8 py-3 text-lg font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-orange-600 hover:bg-orange-700 text-white'
                  : 'border-orange-600 text-orange-600 hover:bg-orange-50'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="h-48 w-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {item.isVegetarian && (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                      <Leaf className="h-3 w-3 mr-1" />
                      Veg
                    </Badge>
                  )}
                  {item.isGlutenFree && (
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      <WheatOff className="h-3 w-3 mr-1" />
                      GF
                    </Badge>
                  )}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">${item.price}</span>
                  <Button
                    onClick={() => onAddToCart(item, 1)}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full transform hover:scale-105 transition-all duration-200"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
