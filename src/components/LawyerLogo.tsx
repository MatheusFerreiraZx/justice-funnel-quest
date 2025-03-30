
import { Building } from "lucide-react";

const LawyerLogo = () => {
  return (
    <div className="flex items-center">
      <div className="relative mr-3">
        <div className="w-12 h-12 flex items-center justify-center bg-lawyer-light rounded-full">
          <Building className="w-8 h-8 text-lawyer-DEFAULT" />
        </div>
        <div className="w-16 h-1 bg-lawyer-DEFAULT absolute -bottom-2 left-1/2 -translate-x-1/2" />
      </div>
      <div>
        <h1 className="text-xl font-bold text-lawyer-dark uppercase tracking-wider">Dr. Richard</h1>
        <p className="text-xs text-gray-500 uppercase tracking-widest">Advogado Trabalhista</p>
      </div>
    </div>
  );
};

export default LawyerLogo;
