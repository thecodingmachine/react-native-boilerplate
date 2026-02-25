import { useContext } from 'react';

import { ThemeContext } from '@/components/providers/theme-provider/theme-provider';

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
