
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
      name: 'Samosa Chaat',
      description: 'Crispy samosas topped with spiced chickpeas and chutneys',
      price: 12,
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '2',
      name: 'Tandoori Chicken Wings',
      description: 'Marinated chicken wings grilled in tandoor oven',
      price: 16,
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '3',
      name: 'Paneer Tikka',
      description: 'Grilled cottage cheese cubes with bell peppers and onions',
      price: 14,
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '4',
      name: 'Aloo Tikki Chaat',
      description: 'Crispy potato patties with yogurt and tamarind chutney',
      price: 10,
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1606471842876-e0d8fb6f7b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '5',
      name: 'Seekh Kebab',
      description: 'Spiced minced lamb grilled on skewers',
      price: 18,
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },

    // Mains
    {
      id: '6',
      name: 'Butter Chicken',
      description: 'Tender chicken in rich tomato and cream curry',
      price: 22,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '7',
      name: 'Dal Makhani',
      description: 'Creamy black lentils slow-cooked with butter and spices',
      price: 18,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '8',
      name: 'Biryani Hyderabadi',
      description: 'Aromatic basmati rice with tender mutton and spices',
      price: 28,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d271?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '9',
      name: 'Palak Paneer',
      description: 'Cottage cheese cubes in creamy spinach curry',
      price: 20,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '10',
      name: 'Rogan Josh',
      description: 'Aromatic lamb curry with traditional Kashmiri spices',
      price: 26,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '11',
      name: 'Chicken Tikka Masala',
      description: 'Grilled chicken in spiced tomato-cream sauce',
      price: 24,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '12',
      name: 'Chole Bhature',
      description: 'Spiced chickpeas with fluffy fried bread',
      price: 16,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '13',
      name: 'Fish Curry Kerala',
      description: 'Fresh fish in coconut and curry leaf gravy',
      price: 25,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1627662168223-7df99068099a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '14',
      name: 'Tandoori Mixed Grill',
      description: 'Assorted tandoori meats and vegetables',
      price: 32,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },

    // Desserts
    {
      id: '15',
      name: 'Gulab Jamun',
      description: 'Soft milk dumplings in cardamom-rose syrup',
      price: 8,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1571167913668-572de1ba5c24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '16',
      name: 'Kulfi Faluda',
      description: 'Traditional Indian ice cream with vermicelli and nuts',
      price: 10,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '17',
      name: 'Ras Malai',
      description: 'Soft cottage cheese dumplings in cardamom milk',
      price: 9,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '18',
      name: 'Kheer Badam',
      description: 'Rice pudding with almonds and cardamom',
      price: 7,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '19',
      name: 'Jalebi',
      description: 'Crispy spiral sweets soaked in sugar syrup',
      price: 6,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '20',
      name: 'Gajar Halwa',
      description: 'Carrot pudding with nuts and cardamom',
      price: 8,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },

    // Beverages
    {
      id: '21',
      name: 'Masala Chai',
      description: 'Traditional spiced tea with milk and aromatic spices',
      price: 4,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '22',
      name: 'Mango Lassi',
      description: 'Creamy yogurt drink with fresh mango pulp',
      price: 6,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '23',
      name: 'Nimbu Pani',
      description: 'Fresh lime water with mint and black salt',
      price: 5,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '24',
      name: 'Thandai',
      description: 'Traditional spiced milk drink with nuts and rose',
      price: 7,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
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
                <span className="text-2xl font-bold text-gray-800">Spice Palace Menu</span>
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
            Complete Indian Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our authentic Indian cuisine featuring traditional recipes passed down through generations, prepared with the finest spices and ingredients
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
