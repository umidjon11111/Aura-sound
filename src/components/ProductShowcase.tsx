import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";

const products = [
  {
    id: 1,
    name: "Eclipse Pro",
    price: "$299",
    image: product1,
    color: "Midnight Black",
    description: "Premium ANC with studio-quality sound",
  },
  {
    id: 2,
    name: "Nova Elite",
    price: "$349",
    image: product2,
    color: "Arctic Silver",
    description: "Professional audio for creators",
  },
  {
    id: 3,
    name: "Aurora Lux",
    price: "$399",
    image: product3,
    color: "Pearl White",
    description: "Luxury edition with gold accents",
  },
  {
    id: 4,
    name: "Fusion RGB",
    price: "$329",
    image: product4,
    color: "Gaming Black",
    description: "Ultimate gaming experience",
  },
];

const ProductShowcase = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our <span className="gradient-text">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect headphones for your lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="glass rounded-3xl overflow-hidden group cursor-pointer animate-fade-in hover:glow transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden bg-muted/30">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.color}</p>
                  </div>
                  <span className="text-2xl font-bold gradient-text">{product.price}</span>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm">
                  {product.description}
                </p>

                <Button 
                  className="w-full gradient-primary rounded-full group-hover:glow transition-smooth"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
