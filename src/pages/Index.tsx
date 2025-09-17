import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopNavbar } from "@/components/TopNavbar";
import { HeroSection } from "@/components/HeroSection";
import { BettingMarkets } from "@/components/BettingMarkets";
import { BetSlip } from "@/components/BetSlip";
import { AuthModal } from "@/components/AuthModal";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isBetSlipOpen, setIsBetSlipOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [activeSection, setActiveSection] = useState("home");
  const [activeSport, setActiveSport] = useState("cricket");
  const [user, setUser] = useState<{ name: string; balance: number } | null>(null);
  const [bets, setBets] = useState<any[]>([]);
  const { toast } = useToast();

  const handleBetSelect = (bet: any) => {
    const newBet = {
      ...bet,
      id: `${bet.matchId}-${bet.type}-${Date.now()}`,
      stake: 0
    };
    
    setBets(prev => [...prev, newBet]);
    setIsBetSlipOpen(true);
    
    toast({
      title: "Bet added to slip",
      description: `${bet.label} at odds ${bet.odds}`,
    });
  };

  const handleRemoveBet = (betId: string) => {
    setBets(prev => prev.filter(bet => bet.id !== betId));
    toast({
      title: "Bet removed",
      description: "Selection removed from bet slip",
    });
  };

  const handleUpdateStake = (betId: string, stake: number) => {
    setBets(prev => prev.map(bet => 
      bet.id === betId ? { ...bet, stake } : bet
    ));
  };

  const handlePlaceBets = () => {
    const totalStake = bets.reduce((sum, bet) => sum + (bet.stake || 0), 0);
    
    if (!user) {
      setIsAuthModalOpen(true);
      setAuthMode('login');
      return;
    }

    if (user.balance < totalStake) {
      toast({
        title: "Insufficient funds",
        description: "Please top up your account to place this bet",
        variant: "destructive",
      });
      return;
    }

    // Simulate bet placement
    setUser(prev => prev ? { ...prev, balance: prev.balance - totalStake } : null);
    setBets([]);
    setIsBetSlipOpen(false);
    
    toast({
      title: "Bets placed successfully!",
      description: `${bets.length} bet(s) placed for $${totalStake.toFixed(2)}`,
    });
  };

  const handleAuth = (userData: any) => {
    setUser(userData);
    toast({
      title: "Welcome to SportExch!",
      description: `Successfully ${authMode === 'login' ? 'logged in' : 'registered'}`,
    });
  };

  const handleAuthClick = (type: 'login' | 'register') => {
    setAuthMode(type);
    setIsAuthModalOpen(true);
  };

  const handleGetStarted = () => {
    setActiveSection("home");
    setActiveSport("cricket");
  };

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <>
            <HeroSection onGetStarted={handleGetStarted} />
            <div className="p-6">
              <BettingMarkets 
                activeSport={activeSport} 
                onBetSelect={handleBetSelect}
              />
            </div>
          </>
        );
      case "in-play":
        return (
          <div className="p-6">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">Live In-Play Betting</h2>
              <p className="text-muted-foreground">Real-time betting on live sports events coming soon!</p>
            </div>
          </div>
        );
      case "premium":
        return (
          <div className="p-6">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">Premium Features</h2>
              <p className="text-muted-foreground">Advanced analytics and premium betting markets</p>
            </div>
          </div>
        );
      case "casino":
        return (
          <div className="p-6">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">Online Casino</h2>
              <p className="text-muted-foreground">Slots, table games, and live dealer experiences</p>
            </div>
          </div>
        );
      case "help":
        return (
          <div className="p-6">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">Help & Support</h2>
              <p className="text-muted-foreground">Contact our 24/7 customer support team</p>
            </div>
          </div>
        );
      case "profile":
        return (
          <div className="p-6">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">My Account</h2>
              {user ? (
                <div className="space-y-4">
                  <p>Welcome back, {user.name}!</p>
                  <p className="text-success font-bold">Balance: ${user.balance.toFixed(2)}</p>
                </div>
              ) : (
                <p className="text-muted-foreground">Please log in to view your account</p>
              )}
            </div>
          </div>
        );
      default:
        return (
          <div className="p-6">
            <BettingMarkets 
              activeSport={activeSport} 
              onBetSelect={handleBetSelect}
            />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNavbar 
        onMenuClick={() => setIsSidebarOpen(true)}
        onAuthClick={handleAuthClick}
        user={user}
      />
      
      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          activeSection={activeSection}
          onSectionChange={(section) => {
            setActiveSection(section);
            setIsSidebarOpen(false);
          }}
          activeSport={activeSport}
          onSportChange={(sport) => {
            setActiveSport(sport);
            setActiveSection("home");
            setIsSidebarOpen(false);
          }}
        />
        
        <main className="flex-1 lg:ml-80">
          {renderContent()}
        </main>
        
        <BetSlip
          bets={bets}
          onRemoveBet={handleRemoveBet}
          onUpdateStake={handleUpdateStake}
          onPlaceBets={handlePlaceBets}
          isOpen={isBetSlipOpen}
          onClose={() => setIsBetSlipOpen(false)}
        />
      </div>

      {/* Floating Bet Slip Toggle */}
      {bets.length > 0 && (
        <div className="fixed bottom-6 right-6 z-40 lg:hidden">
          <button
            onClick={() => setIsBetSlipOpen(true)}
            className="bg-primary text-white rounded-full p-4 shadow-elegant animate-pulse-glow"
          >
            <div className="flex items-center gap-2">
              <span className="font-bold">{bets.length}</span>
              <span className="text-sm">Bet{bets.length > 1 ? 's' : ''}</span>
            </div>
          </button>
        </div>
      )}

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
        onAuth={handleAuth}
      />
    </div>
  );
};

export default Index;
