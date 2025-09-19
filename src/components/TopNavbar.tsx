import { Button } from "@/components/ui/button";
import { Menu, LogIn, UserPlus, Bell, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TopNavbarProps {
  onMenuClick: () => void;
  onAuthClick: (type: 'login' | 'register') => void;
  user?: { name: string; balance: number } | null;
  onLogout?: () => void;
}

const sportFilters = [
  { name: 'In Play', key: 'in-play', emoji: '🔴' },
  { name: 'Cricket', key: 'cricket', emoji: '🏏' },
  { name: 'Soccer', key: 'soccer', emoji: '⚽' },
  { name: 'Tennis', key: 'tennis', emoji: '🎾' },
  { name: 'Premium Races', key: 'premium', emoji: '🏇' },
  { name: 'Casino', key: 'casino', emoji: '🎰' },
  { name: 'Help', key: 'help', emoji: '❓' },
];

export const TopNavbar = ({ onMenuClick, onAuthClick, user, onLogout }: TopNavbarProps) => {
  const navigate = useNavigate();

  const handleSportClick = (sport: string) => {
    if (sport === 'cricket' || sport === 'soccer') {
      window.dispatchEvent(new CustomEvent('quick-sport', { detail: { sport } }));
    }
  };

  const handleAuthClick = (type: 'login' | 'register') => {
    if (type === 'login') {
      navigate('/login');
    } else {
      onAuthClick(type);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background border-b border-border shadow-sm z-30">
      <div className="flex items-center justify-between px-2 sm:px-4 py-2 sm:py-3 h-16">
        {/* Left side - Menu toggle */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="hidden lg:block">
            <h1 className="text-lg sm:text-xl font-bold text-primary">
              ARENA <span className="text-2xl">X</span>
            </h1>
          </div>
          <div className="lg:hidden">
            <h1 className="text-lg font-bold text-primary">
              ARENA <span className="text-xl">X</span>
            </h1>
          </div>
        </div>

        {/* Center - Sport filter chips */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {sportFilters.map((filter) => (
            <Button 
              key={filter.key}
              variant="ghost" 
              size="sm"
              onClick={() => handleSportClick(filter.key)}
              className="flex items-center gap-1 bg-primary/10 hover:bg-primary/20 text-primary px-2 lg:px-3 py-1.5 rounded-full text-xs font-medium transition-smooth"
            >
              <span>{filter.emoji}</span>
              <span className="hidden lg:inline">{filter.name}</span>
            </Button>
          ))}
        </div>

        {/* Right side - User actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          {user ? (
            <>
              <div className="hidden sm:flex items-center gap-2 mr-2">
                <div className="text-right">
                  <p className="text-xs sm:text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-success font-bold">
                    ${user.balance.toFixed(2)}
                  </p>
                </div>
                <Button variant="ghost" size="sm" className="p-1 sm:p-2">
                  <Bell className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
              <Button 
                onClick={() => onAuthClick('login')}
                variant="outline" 
                size="sm"
                className="text-xs sm:text-sm px-2 sm:px-4"
              >
                Account
              </Button>
              {onLogout && (
                <Button 
                  onClick={onLogout}
                  variant="ghost" 
                  size="sm"
                  className="text-xs sm:text-sm px-2"
                >
                  <LogOut className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              )}
            </>
          ) : (
            <>
              <Button 
                onClick={() => handleAuthClick('login')}
                variant="outline" 
                size="sm"
                className="hidden sm:flex items-center gap-1 text-xs px-2"
              >
                <LogIn className="h-3 w-3" />
                Login
              </Button>
              <Button 
                onClick={() => handleAuthClick('register')}
                className="flex items-center gap-1 text-xs px-2 sm:px-4 bg-primary hover:bg-primary-dark"
                size="sm"
              >
                <UserPlus className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Register</span>
                <span className="sm:hidden">Join</span>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};