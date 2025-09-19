import { useState, useEffect } from 'react';

interface User {
  name: string;
  balance: number;
  email: string;
}

const STORAGE_KEY = 'arena_auth';

// Demo credentials
const DEMO_CREDENTIALS = {
  email: 'sumit@codebrew.com',
  password: '12345678'
};

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    const storedUser = localStorage.getItem(STORAGE_KEY);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<{ error?: string }> => {
    if (email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
      const userData: User = {
        name: 'Sumit',
        balance: 1000,
        email
      };
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
      setUser(userData);
      return {};
    }
    
    return { error: 'Invalid credentials' };
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  const updateBalance = (newBalance: number) => {
    if (user) {
      const updatedUser = { ...user, balance: newBalance };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUser));
      setUser(updatedUser);
    }
  };

  return {
    user,
    login,
    logout,
    updateBalance,
    loading
  };
};