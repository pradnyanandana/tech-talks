import { useRouter } from "next/router";
import Layout from "@/components/ui/Layout";
import MultiStepForm from "@/components/MultiStepForm";
import { FormData } from "@/types";

export default function Form() {
  const router = useRouter();

  const handleFormSubmit = (data: FormData) => {
    // Store form data (in a real app, you'd send this to an API)
    sessionStorage.setItem("formData", JSON.stringify(data));
    router.push("/results");
  };

  return (
    <Layout title="Juicebox - Form" showHeader={true}>
      <div className="form-page">
        <div className="container">
          <MultiStepForm onSubmit={handleFormSubmit} />
        </div>
      </div>
    </Layout>
  );
}
