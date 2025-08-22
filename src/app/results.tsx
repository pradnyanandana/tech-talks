import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "@/components/ui/Button";
import LottieAnimation from "@/components/LottieAnimation";
import { FormData } from "@/types";

export default function Results() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    const savedData = sessionStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    } else {
      router.push("/");
    }
  }, [router]);

  const handleRestart = () => {
    sessionStorage.removeItem("formData");
    router.push("/");
  };

  if (!formData) {
    return (
      //   <Layout title="Juicebox - Loading">
      <div className="loading">
        <div className="container">
          <p>Loading...</p>
        </div>
      </div>
      //   </Layout>
    );
  }

  return (
    // <Layout title="Juicebox - Results" showHeader={true}>
    <div className="results-page">
      <div className="container">
        <div className="results">
          <div className="results__animation">
            {/* <LottieAnimation className="results__celebration" /> */}
          </div>

          <div className="results__content">
            <h1 className="results__title">
              Thanks, {formData.firstName}! Now it&apos;s time to get a reality
              check!
            </h1>

            <p className="results__subtitle">This will take 2-3 minutes.</p>

            <div className="results__summary">
              <h2 className="results__summary-title">Your Information:</h2>
              <div className="results__summary-item">
                <strong>Name:</strong> {formData.firstName}
              </div>
              <div className="results__summary-item">
                <strong>Email:</strong> {formData.email}
              </div>
            </div>

            <div className="results__actions">
              <Button
                onClick={() => {
                  /* Handle continue to actual assessment */
                }}
                variant="primary"
                size="lg"
                fullWidth
                className="results__continue"
              >
                Continue
              </Button>

              <Button
                onClick={handleRestart}
                variant="ghost"
                size="md"
                className="results__restart"
              >
                Start Over
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Layout>
  );
}
