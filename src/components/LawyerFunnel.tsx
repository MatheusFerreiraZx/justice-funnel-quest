
import { useFunnel } from "@/context/FunnelContext";
import ProgressBar from "@/components/ProgressBar";
import Header from "@/components/Header";
import Step1ProblemSelection from "@/components/funnel-steps/Step1ProblemSelection";
import Step2ProblemDetails from "@/components/funnel-steps/Step2ProblemDetails";
import Step3ContactInfo from "@/components/funnel-steps/Step3ContactInfo";
import Step4Confirmation from "@/components/funnel-steps/Step4Confirmation";
import { useIsMobile } from "@/hooks/use-mobile";

const LawyerFunnel = () => {
  const { currentStep } = useFunnel();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="px-4 py-10 max-w-4xl mx-auto">
        <ProgressBar />
        
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-10 mt-8">
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
