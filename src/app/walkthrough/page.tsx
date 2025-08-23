import WalkthroughSlider from "@/components/features/WalkthroughSlider";
import { Metadata } from "next";

/**
 * Metadata configuration for walkthrough page
 */
export const metadata: Metadata = {
  title: "Walkthrough - Tech Talks",
  description: "Learn how professionals around the world feel about technology and share your thoughts.",
  openGraph: {
    title: "Join the Tech Conversation",
    description: "Discover how industry professionals view technology and add your voice to the discussion.",
    type: "website",
    siteName: "Tech Talks"
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Tech Conversation",
    description: "Discover how industry professionals view technology and add your voice to the discussion."
  }
};

/**
 * Walkthrough page component
 * Features:
 * - Multi-step introduction
 * - Animated transitions
 * - Progress indicators
 */
const Walkthrough = () => {
  return <WalkthroughSlider />;
};

export default Walkthrough;
