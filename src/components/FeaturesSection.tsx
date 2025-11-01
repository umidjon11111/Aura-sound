import { Volume2, Battery, Bluetooth, Headphones } from "lucide-react";

const features = [
  {
    icon: Volume2,
    title: "Active Noise Cancellation",
    description: "Block out the world with industry-leading ANC technology for immersive listening.",
  },
  {
    icon: Battery,
    title: "50 Hour Battery Life",
    description: "All-day power with quick charge support. 10 minutes = 5 hours of playtime.",
  },
  {
    icon: Bluetooth,
    title: "Bluetooth 5.3",
    description: "Seamless connectivity with low latency and extended range up to 30 meters.",
  },
  {
    icon: Headphones,
    title: "Premium Comfort Fit",
    description: "Memory foam ear cushions and adjustable headband for hours of comfortable wear.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-primary-blue/10 blur-[120px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Premium <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Engineered for perfection, designed for comfort
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass p-8 rounded-3xl hover:scale-105 transition-smooth group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:glow transition-smooth">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
