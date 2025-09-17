import { Button } from "@/components/ui/button";
import { Menu, LogIn, UserPlus, Bell } from "lucide-react";

interface TopNavbarProps {
  onMenuClick: () => void;
  onAuthClick: (type: 'login' | 'register') => void;
  user?: { name: string; balance: number } | null;
}

export const TopNavbar = ({ onMenuClick, onAuthClick, user }: TopNavbarProps) => {
  return (
    <header className="bg-white border-b border-border shadow-sm sticky top-0 z-30">
      <div className="flex items-center justify-between px-4 py-3">
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
            <h1 className="text-xl font-bold text-primary">SPORTEXCH</h1>
          </div>
        </div>

        {/* Center - Welcome message */}
        <div className="hidden md:block">
          <p className="text-sm text-muted-foreground">
            WELCOME TO SPORTEXCHANGE - Live Sports Betting Platform
          </p>
        </div>

        {/* Right side - User actions */}
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <div className="hidden sm:flex items-center gap-3 mr-4">
                <div className="text-right">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-success font-bold">
                    Balance: ${user.balance.toFixed(2)}
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  <Bell className="h-4 w-4" />
                </Button>
              </div>
              <Button 
                onClick={() => onAuthClick('login')}
                variant="outline" 
                size="sm"
              >
                Account
              </Button>
            </>
          ) : (
            <>
              <Button 
                onClick={() => onAuthClick('login')}
                variant="outline" 
                size="sm"
                className="hidden sm:flex items-center gap-2"
              >
                <LogIn className="h-4 w-4" />
                Login
              </Button>
              <Button 
                onClick={() => onAuthClick('register')}
                variant="default"
                size="sm"
                className="flex items-center gap-2"
              >
                <UserPlus className="h-4 w-4" />
                <span className="hidden sm:inline">Register</span>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};