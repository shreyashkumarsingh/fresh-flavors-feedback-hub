import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Star, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    rating: 0,
    comment: ''
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackList, setFeedbackList] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    fetch('http://localhost:4000/api/feedback')
      .then(res => res.json())
      .then(data => setFeedbackList(data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedback.name || !feedback.email || !feedback.rating || !feedback.comment) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields and provide a rating",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const res = await fetch('http://localhost:4000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedback)
      });
      if (!res.ok) throw new Error('Failed to submit');
      const saved = await res.json();
      setFeedbackList(prev => [saved, ...prev]);
      toast({
        title: "Thank you for your feedback!",
        description: "Your review has been submitted successfully.",
      });
      setFeedback({ name: '', email: '', rating: 0, comment: '' });
    } catch {
      toast({
        title: "Submission failed",
        description: "Could not submit feedback. Please try again later.",
        variant: "destructive"
      });
    }
    
    setIsSubmitting(false);
  };

  const handleRatingClick = (rating: number) => {
    setFeedback(prev => ({ ...prev, rating }));
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            We Value Your Feedback
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us improve by sharing your dining experience with us
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <MessageSquare className="h-6 w-6 text-orange-600" />
              Share Your Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="feedback-name">Name *</Label>
                  <Input
                    id="feedback-name"
                    value={feedback.name}
                    onChange={(e) => setFeedback(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your full name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="feedback-email">Email *</Label>
                  <Input
                    id="feedback-email"
                    type="email"
                    value={feedback.email}
                    onChange={(e) => setFeedback(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label className="text-base font-semibold">Rating *</Label>
                <div className="flex items-center gap-2 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingClick(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-all duration-200 transform hover:scale-110"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= (hoveredRating || feedback.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {feedback.rating > 0 && (
                      <>
                        {feedback.rating} out of 5 stars
                        {feedback.rating === 5 && " - Excellent!"}
                        {feedback.rating === 4 && " - Very Good!"}
                        {feedback.rating === 3 && " - Good"}
                        {feedback.rating === 2 && " - Fair"}
                        {feedback.rating === 1 && " - Poor"}
                      </>
                    )}
                  </span>
                </div>
              </div>

              <div>
                <Label htmlFor="feedback-comment">Your Review *</Label>
                <Textarea
                  id="feedback-comment"
                  value={feedback.comment}
                  onChange={(e) => setFeedback(prev => ({ ...prev, comment: e.target.value }))}
                  placeholder="Tell us about your experience - what did you love? What could we improve?"
                  rows={4}
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Sample Reviews */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">What Our Customers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {feedbackList.length === 0 && (
              <p className="text-center col-span-3 text-gray-500">No feedback yet.</p>
            )}
            {feedbackList.map((review, index) => (
              <Card key={review.id || index} className="bg-white/80 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">{review.date ? new Date(review.date).toLocaleDateString() : ''}</span>
                  </div>
                  <p className="text-gray-700 mb-3 italic">"{review.comment}"</p>
                  <p className="font-semibold text-gray-800">- {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
