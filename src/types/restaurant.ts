
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Feedback {
  id: string;
  name: string;
  email: string;
  rating: number;
  comment: string;
  date: string;
}
