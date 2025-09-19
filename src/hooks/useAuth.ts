import { useState, useEffect } from 'react';

interface User {
  name: string;
  email: string;
  balance: number;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing auth on mount
    const authData = localStorage.getItem('arena_auth');
    if (authData) {
      try {
        const userData = JSON.parse(authData);
        setUser(userData);
      } catch (err) {
        localStorage.removeItem('arena_auth');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    // Demo login logic
    if (email === "sumit@codebrew.com" && password === "12345678") {
      const userData = { 
        name: "Sumit", 
        email,
        balance: 1000 
      };
      localStorage.setItem('arena_auth', JSON.stringify(userData));
      setUser(userData);
      return { success: true };
    }
    
    return { success: false, error: "Invalid credentials" };
  };

  const logout = () => {
    localStorage.removeItem('arena_auth');
    setUser(null);
  };

  const isAuthenticated = !!user;

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated,
  };
};

// Route guard helper
export const requireAuth = (user: User | null): boolean => {
  return !!user;
};