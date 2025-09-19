import { Button } from "@/components/ui/button";
import { Play, Trophy, TrendingUp } from "lucide-react";
import heroSports from "@/assets/hero-sports.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/30 via-primary-dark/20 to-accent/30">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroSports} 
          alt="Sports action collage"
          className="w-full h-full object-cover mix-blend-overlay opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-foreground space-y-6 animate-fade-in">
              <div className="space-y-3">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-primary">Arena</span>
                  <span className="text-accent text-5xl lg:text-7xl">X</span>
                </h1>
                <div className="text-xl lg:text-3xl font-semibold text-muted-foreground">
                  <span className="text-accent">VIRTUAL</span>
                  <br />
                  <span>SPORTS</span>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Experience the thrill of live sports betting with real-time odds, 
                virtual sports action, and the best betting platform in the industry.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={onGetStarted}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary-dark font-semibold text-lg px-8 py-6"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Start Betting Now
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-border text-foreground hover:bg-accent hover:text-accent-foreground font-semibold text-lg px-8 py-6"
                >
                  <Trophy className="mr-2 h-5 w-5" />
                  View Live Markets
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Live Betting</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">Daily Markets</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="hidden lg:block relative">
              <div className="space-y-6">
                {/* Floating Cards */}
                <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 transform rotate-3 animate-pulse-glow border border-border/50">
                  <div className="flex items-center justify-between text-foreground">
                    <div>
                      <div className="text-sm text-muted-foreground">Live Match</div>
                      <div className="font-semibold">Chelsea vs Arsenal</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">2.5</div>
                      <div className="text-xs text-muted-foreground">ODDS</div>
                    </div>
                  </div>
                </div>

                <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 transform -rotate-2 ml-8 animate-pulse-glow border border-border/50">
                  <div className="flex items-center justify-between text-foreground">
                    <div>
                      <div className="text-sm text-muted-foreground">Virtual Cricket</div>
                      <div className="font-semibold">India vs Australia</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">1.8</div>
                      <div className="text-xs text-muted-foreground">ODDS</div>
                    </div>
                  </div>
                </div>

                <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 transform rotate-1 animate-pulse-glow border border-border/50">
                  <div className="flex items-center gap-3 text-foreground">
                    <TrendingUp className="h-8 w-8 text-accent" />
                    <div>
                      <div className="text-sm text-muted-foreground">Today's Hot Pick</div>
                      <div className="font-semibold">Manchester United Win</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-auto">
          <path 
            d="M0,60 C300,120 600,0 1200,60 L1200,120 L0,120 Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};