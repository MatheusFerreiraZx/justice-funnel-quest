
import { useFunnel } from '@/context/FunnelContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

const Step3ContactInfo = () => {
  const { funnelData, updateFunnelData, setCurrentStep } = useFunnel();
  const [validations, setValidations] = useState({
    name: false,
    email: false,
    phone: true // Phone is optional, so default to true
  });

  useEffect(() => {
    // Validate fields whenever they change
    setValidations({
      name: funnelData.name.trim().length >= 3,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(funnelData.email),
      phone: funnelData.phone === '' || /^(\d{10,11}|\(\d{2}\)\s*\d{4,5}-?\d{4})$/.test(funnelData.phone)
    });
  }, [funnelData.name, funnelData.email, funnelData.phone]);

  const handleBack = () => {
    setCurrentStep(2);
  };

  const handleNext = () => {
    if (validations.name && validations.email && validations.phone) {
      setCurrentStep(4);
    }
  };

  const formatPhoneNumber = (value: string) => {
    // Remove non-numeric characters
    const digits = value.replace(/\D/g, '');
    
    if (digits.length <= 2) {
      return digits;
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    } else if (digits.length <= 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    } else {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    updateFunnelData({ phone: formattedPhone });
  };

  const isFormValid = validations.name && validations.email && validations.phone;

  return (
    <div className="animate-fade-in max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Informações de contato</h2>
      <p className="text-center text-gray-600 mb-8">
        Para que possamos analisar seu caso e entrar em contato
      </p>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="name" className="block text-gray-700">
              Nome completo <span className="text-red-500">*</span>
            </label>
            {funnelData.name && (
              <span className={`text-sm ${validations.name ? 'text-green-500' : 'text-red-500'}`}>
                {validations.name ? (
                  <span className="flex items-center">
                    <Check className="w-4 h-4 mr-1" />
                    Válido
                  </span>
                ) : 'Mínimo 3 caracteres'}
              </span>
            )}
          </div>
          <Input
            id="name"
            placeholder="Digite seu nome completo"
            value={funnelData.name}
            onChange={(e) => updateFunnelData({ name: e.target.value })}
            className={funnelData.name ? (validations.name ? 'border-green-500' : 'border-red-300') : ''}
            required
          />
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="email" className="block text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            {funnelData.email && (
              <span className={`text-sm ${validations.email ? 'text-green-500' : 'text-red-500'}`}>
                {validations.email ? (
                  <span className="flex items-center">
                    <Check className="w-4 h-4 mr-1" />
                    Válido
                  </span>
                ) : 'Email inválido'}
              </span>
            )}
          </div>
          <Input
            id="email"
            type="email"
            placeholder="exemplo@email.com"
            value={funnelData.email}
            onChange={(e) => updateFunnelData({ email: e.target.value })}
            className={funnelData.email ? (validations.email ? 'border-green-500' : 'border-red-300') : ''}
            required
          />
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="phone" className="block text-gray-700">
              Telefone (com DDD)
            </label>
            {funnelData.phone && (
              <span className={`text-sm ${validations.phone ? 'text-green-500' : 'text-red-500'}`}>
                {validations.phone ? (
                  <span className="flex items-center">
                    <Check className="w-4 h-4 mr-1" />
                    Válido
                  </span>
                ) : 'Formato inválido'}
              </span>
            )}
          </div>
          <Input
            id="phone"
            placeholder="(00) 00000-0000"
            value={funnelData.phone}
            onChange={handlePhoneChange}
            className={funnelData.phone ? (validations.phone ? 'border-green-500' : 'border-red-300') : ''}
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
