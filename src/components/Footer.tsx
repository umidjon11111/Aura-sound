import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 pt-16 pb-8">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-primary-purple/10 blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <div className="glass p-12 rounded-3xl mb-16 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">
            Stay Updated with <span className="gradient-text">SoundWave</span>
          </h3>
          <p className="text-muted-foreground mb-6">
            Get exclusive deals and early access to new releases
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-background/50 border-primary/30 rounded-full px-6"
            />
            <Button className="gradient-primary rounded-full px-8">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">SoundWave</h3>
            <p className="text-muted-foreground">
              Premium audio experiences for the modern listener.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Headphones</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Earbuds</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Speakers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border/50">
          <p className="text-muted-foreground text-sm">
            © 2025 SoundWave. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glow transition-smooth">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glow transition-smooth">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glow transition-smooth">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glow transition-smooth">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
