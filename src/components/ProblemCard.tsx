
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
      className="w-full bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md transition-all duration-300"
      onClick={handleClick}
    >
      <div className="p-6 flex flex-col items-center">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="font-medium text-gray-800 mb-2">{title}</h3>
      </div>
      <div className="bg-lawyer-DEFAULT text-white p-4 flex justify-between items-center">
        <span className="font-medium">Selecionar</span>
        <ChevronRight className="w-5 h-5" />
      </div>
    </button>
  );
};

export default ProblemCard;
