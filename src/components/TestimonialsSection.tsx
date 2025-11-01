import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Music Producer",
    rating: 5,
    text: "The sound quality is absolutely phenomenal. Best headphones I've ever used for mixing and production work.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Tech Reviewer",
    rating: 5,
    text: "Incredible noise cancellation and battery life. Perfect for long flights and daily commutes.",
  },
  {
    name: "Emily Watson",
    role: "Podcast Host",
    rating: 5,
    text: "Crystal clear audio and supreme comfort. I wear these for 8+ hours and they feel amazing.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-purple/10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-blue/10 blur-[120px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">Professionals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our customers are saying
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass p-8 rounded-3xl hover:scale-105 transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
