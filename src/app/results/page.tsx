import ResultMessage from "@/components/features/ResultMessage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results - Tech Talks",
  description: "Get insights into how your tech perspectives align with industry trends.",
  openGraph: {
    title: "Your Tech Insights Revealed",
    description: "Discover how your technology perspectives compare with industry professionals.",
    type: "website",
    siteName: "Tech Talks"
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Tech Insights Revealed",
    description: "Discover how your technology perspectives compare with industry professionals."
  }
};

/**
 * Results page component
 * Features:
 * - Form data validation
 * - Animated transitions
 * - Navigation to survey
 */
const ResultsPage = () => {
  return <ResultMessage />;
};

export default ResultsPage;
