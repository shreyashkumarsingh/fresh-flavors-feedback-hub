
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, WheatOff, Plus } from 'lucide-react';
import { MenuItem } from '../types/restaurant';

interface MenuProps {
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

const Menu = ({ onAddToCart }: MenuProps) => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const menuItems: MenuItem[] = [
    // Appetizers
    {
      id: '1',
      name: 'Truffle Arancini',
      description: 'Crispy risotto balls with truffle oil and parmesan',
      price: 14,
      category: 'appetizers',
      image: 'appetizer1',
      isVegetarian: true
    },
    {
      id: '2',
      name: 'Seared Scallops',
      description: 'Pan-seared scallops with cauliflower purée',
      price: 18,
      category: 'appetizers',
      image: 'appetizer2'
    },
    {
      id: '3',
      name: 'Burrata Caprese',
      description: 'Fresh burrata with heirloom tomatoes and basil',
      price: 16,
      category: 'appetizers',
      image: 'appetizer3',
      isVegetarian: true
    },
    // Mains
    {
      id: '4',
      name: 'Wagyu Ribeye',
      description: '12oz wagyu ribeye with roasted vegetables',
      price: 65,
      category: 'mains',
      image: 'main1'
    },
    {
      id: '5',
      name: 'Lobster Risotto',
      description: 'Creamy lobster risotto with fresh herbs',
      price: 42,
      category: 'mains',
      image: 'main2'
    },
    {
      id: '6',
      name: 'Duck Confit',
      description: 'Slow-cooked duck leg with cherry sauce',
      price: 38,
      category: 'mains',
      image: 'main3'
    },
    // Desserts
    {
      id: '7',
      name: 'Chocolate Soufflé',
      description: 'Warm chocolate soufflé with vanilla ice cream',
      price: 12,
      category: 'desserts',
      image: 'dessert1',
      isVegetarian: true
    },
    {
      id: '8',
      name: 'Crème Brûlée',
      description: 'Classic vanilla crème brûlée with caramelized sugar',
      price: 10,
      category: 'desserts',
      image: 'dessert2',
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
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, crafted with passion and the finest ingredients
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <div 
                  className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-semibold transform group-hover:scale-110 transition-transform duration-300"
                >
                  {item.name}
                </div>
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
