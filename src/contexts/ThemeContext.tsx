import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'pure-white' | 'true-black' | 'ecommerce-dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  themes: Array<{ value: Theme; label: string; description: string }>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themes = [
  { 
    value: 'light' as Theme, 
    label: 'Light', 
    description: 'Clean and modern light theme' 
  },
  { 
    value: 'dark' as Theme, 
    label: 'Dark (NeoPOP)', 
    description: 'Cyberpunk-inspired neon theme' 
  },
  { 
    value: 'pure-white' as Theme, 
    label: 'Pure White', 
    description: 'Minimal high-contrast theme' 
  },
  { 
    value: 'true-black' as Theme, 
    label: 'True Black', 
    description: 'OLED-optimized dark theme' 
  },
  { 
    value: 'ecommerce-dark' as Theme, 
    label: 'E-Commerce Dark', 
    description: 'Premium shopping experience theme' 
  },
];

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('ui-theme') as Theme;
    if (savedTheme && themes.some(t => t.value === savedTheme)) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all theme classes
    themes.forEach(t => root.classList.remove(t.value));
    
    // Add current theme class
    root.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem('ui-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const currentIndex = themes.findIndex(t => t.value === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].value);
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
    themes,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}