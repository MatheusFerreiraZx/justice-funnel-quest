
import { Building } from "lucide-react";

const LawyerLogo = () => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="relative">
        <div className="w-20 h-20 flex items-center justify-center bg-lawyer-light rounded-full">
          <Building className="w-12 h-12 text-lawyer-DEFAULT" />
        </div>
        <div className="w-32 h-1 bg-lawyer-DEFAULT absolute -bottom-3 left-1/2 -translate-x-1/2" />
      </div>
      <div className="text-center mt-6">
        <h1 className="text-2xl font-bold text-lawyer-dark uppercase tracking-wider">Dr. Richard</h1>
        <p className="text-sm text-gray-500 uppercase tracking-widest">Advogado Trabalhista</p>
      </div>
    </div>
  );
};

export default LawyerLogo;
