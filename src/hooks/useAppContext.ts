import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';

/**
 * Custom hook to access the AppContext state and actions.
 * Provides type-safe access to global app state including:
 * - Navigation state (slides, transitions)
 * - Form state (steps, data, validation)
 * - Animation states
 * 
 * @throws {Error} When used outside of AppProvider
 * @returns {AppContextType} The app context value
 */
export const useApp = () => {
  // Get context value with type inference
  const context = useContext(AppContext);

  // Ensure hook is used within provider
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }

  return context;
};
