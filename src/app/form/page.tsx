import MultiStepForm from "@/components/features/MultiStepForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Share Your Perspective - Tech Talks",
  description: "Share your thoughts on technology and industry trends in this quick survey.",
  openGraph: {
    title: "Share Your Tech Perspective",
    description: "Take a moment to share your views on technology and see how they compare with industry trends.",
    type: "website",
    siteName: "Tech Talks"
  },
  twitter: {
    card: "summary_large_image",
    title: "Share Your Tech Perspective",
    description: "Take a moment to share your views on technology and see how they compare with industry trends."
  }
};

/**
 * Form page component
 * Features:
 * - Multi-step form interface
 * - Input validation
 * - Animated transitions
 */
const FormPage = () => {
  return <MultiStepForm />;
};

export default FormPage;
