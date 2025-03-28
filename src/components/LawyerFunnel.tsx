
import { useFunnel } from "@/context/FunnelContext";
import ProgressBar from "@/components/ProgressBar";
import LawyerLogo from "@/components/LawyerLogo";
import Step1ProblemSelection from "@/components/funnel-steps/Step1ProblemSelection";
import Step2ProblemDetails from "@/components/funnel-steps/Step2ProblemDetails";
import Step3ContactInfo from "@/components/funnel-steps/Step3ContactInfo";
import Step4Confirmation from "@/components/funnel-steps/Step4Confirmation";

const LawyerFunnel = () => {
  const { currentStep } = useFunnel();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <LawyerLogo />
        <ProgressBar />
        
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          {currentStep === 1 && <Step1ProblemSelection />}
          {currentStep === 2 && <Step2ProblemDetails />}
          {currentStep === 3 && <Step3ContactInfo />}
          {currentStep === 4 && <Step4Confirmation />}
        </div>
      </div>
    </div>
  );
};

export default LawyerFunnel;
