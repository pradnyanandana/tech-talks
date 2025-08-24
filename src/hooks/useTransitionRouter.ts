import { useApp } from "@/hooks/useAppContext";
import { useRouter } from "next/navigation";

/**
 * Order of routes for determining navigation direction.
 * Used to calculate whether we're moving forward or backward in the flow.
 */
const ROUTE_ORDER = ['/', '/walkthrough', '/form', '/results'];

/**
 * Custom hook for handling route transitions with animations.
 * Manages transition states and navigation direction between routes.
 * 
 * @returns {Object} Navigation utilities
 * @returns {Function} navigate - Function to handle route transitions
 */
export const useTransitionRouter = () => {
  const router = useRouter();
  const { setIsTransitioning, setDirection } = useApp();

  /**
   * Handles route transition with animation states
   * @param {string} path - Target route path
   */
  const navigate = (path: string) => {
    // Determine navigation direction based on route order
    const currentIndex = ROUTE_ORDER.indexOf(window.location.pathname);
    const nextIndex = ROUTE_ORDER.indexOf(path);
    setDirection(nextIndex > currentIndex ? 'forward' : 'back');
    setIsTransitioning(true);

    // Wait for GSAP animation to finish before navigating
    // You can use a global event or callback from your GSAP animation if needed
    setTimeout(() => {
      router.push(path);
      setIsTransitioning(false);
    }, 600); // Match this to your GSAP animation duration
  };

  return { navigate };
};
