
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
      className="w-full bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md"
      onClick={handleClick}
    >
      <div className="p-4 sm:p-6 flex flex-col items-center">
        <div className="mb-3 sm:mb-4">
          <div className="transform scale-90 sm:scale-100">
            {icon}
          </div>
        </div>
        <h3 className="text-sm sm:text-base font-medium text-gray-800 mb-2 text-center">{title}</h3>
      </div>
      <div className="bg-lawyer-DEFAULT text-white p-3 sm:p-4 flex justify-between items-center">
        <span className="text-sm sm:text-base font-medium">Selecionar</span>
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
    </button>
  );
};

export default ProblemCard;
