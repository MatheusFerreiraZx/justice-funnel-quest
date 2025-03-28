
import { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { ProblemType, useFunnel } from '@/context/FunnelContext';

interface ProblemCardProps {
  icon: ReactNode;
  title: string;
  type: ProblemType;
}

const ProblemCard = ({ icon, title, type }: ProblemCardProps) => {
  const { updateFunnelData, setCurrentStep } = useFunnel();

  const handleClick = () => {
    updateFunnelData({ problemType: type });
    setCurrentStep(2);
  };

  return (
    <button 
      className="group w-full bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg"
      onClick={handleClick}
    >
      <div className="p-6 flex flex-col items-center">
        <div className="mb-4">
          {icon}
        </div>
      </div>
      <div className="bg-lawyer-DEFAULT text-white p-4 flex justify-between items-center">
        <span className="font-medium">{title}</span>
        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </div>
    </button>
  );
};

export default ProblemCard;
