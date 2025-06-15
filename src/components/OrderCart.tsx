
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types/restaurant';
import { useToast } from '@/hooks/use-toast';

interface OrderCartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  totalPrice: number;
}

const OrderCart = ({ isOpen, onClose, items, onRemove, onUpdateQuantity, totalPrice }: OrderCartProps) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    specialRequests: ''
  });
  const { toast } = useToast();

  const handleCheckout = async () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone || !customerInfo.address) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsCheckingOut(true);
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Order Placed Successfully!",
      description: `Your order for $${totalPrice.toFixed(2)} has been confirmed. Estimated delivery: 30-45 minutes.`,
    });
    
    setIsCheckingOut(false);
    onClose();
    
    // Reset form
    setCustomerInfo({
      name: '',
      email: '',
      phone: '',
      address: '',
      specialRequests: ''
    });
  };

  if (items.length === 0) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Your Order
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-center justify-center h-full text-center">
            <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-4">Add some delicious items from our menu!</p>
            <Button onClick={onClose} className="bg-orange-600 hover:bg-orange-700">
              Continue Shopping
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Order ({items.length} items)
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-6 py-6">
          {/* Order Items */}
          <div className="space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <Button
                    onClick={() => onRemove(item.id)}
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="font-semibold min-w-[2rem] text-center">{item.quantity}</span>
                    <Button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <span className="font-bold text-orange-600">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          {/* Customer Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Delivery Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Delivery Address *</Label>
                  <Textarea
                    id="address"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="Enter your complete delivery address"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="special">Special Requests</Label>
                  <Textarea
                    id="special"
                    value={customerInfo.specialRequests}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, specialRequests: e.target.value }))}
                    placeholder="Any special instructions or dietary requirements"
                    rows={2}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Summary */}
          <Card>
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery Fee</span>
                  <span>$3.99</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>${(totalPrice * 0.08).toFixed(2)}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${(totalPrice + 3.99 + totalPrice * 0.08).toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Checkout Button */}
          <Button
            onClick={handleCheckout}
            disabled={isCheckingOut}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold"
          >
            {isCheckingOut ? 'Processing Order...' : `Place Order - $${(totalPrice + 3.99 + totalPrice * 0.08).toFixed(2)}`}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default OrderCart;
