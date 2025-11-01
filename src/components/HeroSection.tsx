import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import headphoneHero from "@/assets/headphone-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-primary-purple/20 blur-[120px] animate-glow-pulse"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="text-center lg:text-left animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Feel the <span className="gradient-text">Sound</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl">
            Immerse yourself in crystal-clear audio with our premium wireless headphones. 
            Experience sound like never before.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="gradient-primary text-lg px-8 py-6 rounded-full glow hover:scale-105 transition-smooth group"
            >
              Shop Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 rounded-full border-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-smooth"
            >
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto lg:mx-0">
            <div>
              <div className="text-3xl font-bold gradient-text">50h</div>
              <div className="text-sm text-muted-foreground">Battery Life</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">ANC</div>
              <div className="text-sm text-muted-foreground">Active Noise</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">5.3</div>
              <div className="text-sm text-muted-foreground">Bluetooth</div>
            </div>
          </div>
        </div>

        {/* Headphone Image */}
        <div className="relative animate-scale-in">
          <div className="absolute inset-0 bg-primary-purple/30 blur-[100px] rounded-full animate-float"></div>
          <img 
            src={headphoneHero} 
            alt="Premium Wireless Headphones" 
            className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl animate-float"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
