import React, { createContext, useState, useMemo, useEffect } from 'react';
import { palettes, PaletteName } from '../palettes';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  paletteName: PaletteName;
  setPaletteName: (name: PaletteName) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light');
  const [paletteName, setPaletteName] = useState<PaletteName>('baseline');

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    const palette = palettes[paletteName];
    const colors = palette[mode];

    for (const [key, value] of Object.entries(colors)) {
      root.style.setProperty(`--color-${key}`, value);
    }
    
    root.style.setProperty('--color-scrim', '0 0 0');

  }, [mode, paletteName]);

  const value = useMemo(() => ({
    mode,
    setMode,
    paletteName,
    setPaletteName,
  }), [mode, paletteName]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
