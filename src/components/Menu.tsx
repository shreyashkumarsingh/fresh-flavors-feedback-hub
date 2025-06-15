
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, WheatOff, Plus } from 'lucide-react';
import { MenuItem } from '../types/restaurant';
import { Link } from 'react-router-dom';

interface MenuProps {
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

const Menu = ({ onAddToCart }: MenuProps) => {
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
    // Mains
    {
      id: '4',
      name: 'Butter Chicken',
      description: 'Tender chicken in rich tomato and cream curry',
      price: 22,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: '5',
      name: 'Dal Makhani',
      description: 'Creamy black lentils slow-cooked with butter and spices',
      price: 18,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '6',
      name: 'Biryani Hyderabadi',
      description: 'Aromatic basmati rice with tender mutton and spices',
      price: 28,
      category: 'mains',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d271?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    // Desserts
    {
      id: '7',
      name: 'Gulab Jamun',
      description: 'Soft milk dumplings in cardamom-rose syrup',
      price: 8,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1571167913668-572de1ba5c24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    },
    {
      id: '8',
      name: 'Kulfi Faluda',
      description: 'Traditional Indian ice cream with vermicelli and nuts',
      price: 10,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isVegetarian: true
    }
  ];

  const categories = [
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' }
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Menu Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our carefully curated selection of authentic Indian dishes, crafted with traditional spices and the finest ingredients
          </p>
          <Link to="/menu">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold rounded-full">
              View Full Menu
            </Button>
          </Link>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
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
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">${item.price}</span>
                  <Button
                    onClick={() => onAddToCart(item, 1)}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-200"
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
    </section>
  );
};

export default Menu;
