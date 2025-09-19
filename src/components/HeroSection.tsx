import { Button } from "@/components/ui/button";
import { Play, Trophy, TrendingUp } from "lucide-react";
import heroSports from "@/assets/hero-sports.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url(${heroSports})`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ARENA <span className="text-5xl sm:text-7xl lg:text-8xl">X</span>
            </span>
            <br />
            <span className="text-foreground text-xl sm:text-3xl lg:text-4xl">
              Virtual Sports
            </span>
          </h1>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button 
              onClick={onGetStarted}
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary-dark shadow-elegant"
            >
              Start Betting Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-white"
            >
              View Live Markets
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-card">
              <div className="w-2 h-2 bg-destructive rounded-full animate-pulse-glow"></div>
              <span className="text-sm font-medium">24/7 Live Betting</span>
            </div>
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-card">
              <span className="text-primary font-bold">500+</span>
              <span className="text-sm font-medium">Daily Markets</span>
            </div>
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-card">
              <span className="text-success font-bold">99.9%</span>
              <span className="text-sm font-medium">Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};