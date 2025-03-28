
import { useFunnel } from '@/context/FunnelContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Step3ContactInfo = () => {
  const { funnelData, updateFunnelData, setCurrentStep } = useFunnel();

  const handleBack = () => {
    setCurrentStep(2);
  };

  const handleNext = () => {
    if (funnelData.name && funnelData.email) {
      setCurrentStep(4);
    }
  };

  const isFormValid = funnelData.name.trim().length > 0 && 
                     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(funnelData.email);

  return (
    <div className="animate-fade-in max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Informações de contato</h2>
      <p className="text-center text-gray-600 mb-8">
        Para que possamos analisar seu caso e entrar em contato
      </p>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Nome completo <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            placeholder="Digite seu nome completo"
            value={funnelData.name}
            onChange={(e) => updateFunnelData({ name: e.target.value })}
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            type="email"
            placeholder="exemplo@email.com"
            value={funnelData.email}
            onChange={(e) => updateFunnelData({ email: e.target.value })}
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-gray-700 mb-2">
            Telefone
          </label>
          <Input
            id="phone"
            placeholder="(00) 00000-0000"
            value={funnelData.phone}
            onChange={(e) => updateFunnelData({ phone: e.target.value })}
          />
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <Button 
          variant="outline" 
          onClick={handleBack}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Button>
        
        <Button 
          onClick={handleNext}
          className="bg-lawyer-DEFAULT hover:bg-lawyer-accent flex items-center gap-2"
          disabled={!isFormValid}
        >
          Continuar
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default Step3ContactInfo;
