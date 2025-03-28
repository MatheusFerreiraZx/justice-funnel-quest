
import { useFunnel } from "@/context/FunnelContext";

const ProgressBar = () => {
  const { progressPercentage } = useFunnel();
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
      <div 
        className="bg-lawyer-DEFAULT h-2 rounded-full transition-all duration-500 ease-in-out" 
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
