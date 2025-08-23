"use client";

import { useRouter } from "next/navigation";
import MultiStepForm from "@/components/MultiStepForm";
import type { FormData } from "@/types";

const FormPage = () => {
  const router = useRouter();

  const handleSubmit = (data: FormData) => {
    // Handle form submission
    console.log(data);
    router.push("/results");
  };

  return (
    <div className="form-page">
      <div className="container">
        <MultiStepForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default FormPage;
