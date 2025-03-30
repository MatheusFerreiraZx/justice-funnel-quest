
import { useFunnel } from '@/context/FunnelContext';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, ArrowRight, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const problemTypeLabels = {
  discrimination: 'Discriminação no trabalho',
  harassment: 'Assédio moral ou sexual',
  wages: 'Problemas salariais',
  termination: 'Demissão indevida',
  retaliation: 'Retaliação',
  safety: 'Segurança no trabalho',
  other: 'Outro problema trabalhista'
};

const problemHints = {
  discrimination: 'Exemplos: tratamento diferente devido a gênero, raça, idade, etc.',
  harassment: 'Situações de humilhação, constrangimento, assédio sexual, etc.',
  wages: 'Falta de pagamento, horas extras não pagas, valores incorretos, etc.',
  termination: 'Demissão sem justa causa, sem aviso prévio, etc.',
  retaliation: 'Punição por denunciar problemas ou exercer direitos trabalhistas.',
  safety: 'Condições de trabalho perigosas, falta de equipamentos de segurança, etc.',
  other: 'Descreva qualquer outro problema trabalhista que você esteja enfrentando.'
};

const Step2ProblemDetails = () => {
  const { funnelData, updateFunnelData, setCurrentStep } = useFunnel();
  const [charCount, setCharCount] = useState(funnelData.description.length);
  
  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleNext = () => {
    if (funnelData.description.trim().length > 0) {
      setCurrentStep(3);
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setCharCount(value.length);
    updateFunnelData({ description: value });
  };

  const getProgressColor = () => {
    if (charCount === 0) return 'bg-gray-300';
    if (charCount < 20) return 'bg-red-400';
    if (charCount < 50) return 'bg-yellow-400';
    return 'bg-green-500';
  };

  const isFormValid = funnelData.description.trim().length > 0;

  return (
    <div className="animate-fade-in max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Descreva seu problema</h2>
      
      <div className="bg-lawyer-light p-4 rounded-lg mb-6">
        <p className="text-lawyer-dark font-medium">
          Problema selecionado: {funnelData.problemType ? problemTypeLabels[funnelData.problemType] : ''}
        </p>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="description" className="block text-gray-700">
            Conte-nos mais sobre seu problema trabalhista:
          </label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button type="button" className="text-gray-400 hover:text-lawyer-DEFAULT">
                  <HelpCircle className="w-5 h-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">
                  {funnelData.problemType ? problemHints[funnelData.problemType] : 'Descreva seu problema com detalhes para melhor avaliação.'}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Textarea
          id="description"
          placeholder="Descreva a situação que você enfrentou ou está enfrentando no seu local de trabalho..."
          className="min-h-32"
          value={funnelData.description}
          onChange={handleDescriptionChange}
        />
        <div className="flex items-center justify-between mt-1 text-xs text-gray-500">
          <span>Caracteres: {charCount}</span>
          <div className="w-32 bg-gray-200 rounded-full h-1.5 overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all ${getProgressColor()}`} 
              style={{ width: `${Math.min(100, (charCount / 100) * 100)}%` }}
            />
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="timeframe" className="block text-gray-700 mb-2">
          Quando isso aconteceu?
        </label>
        <Textarea
          id="timeframe"
          placeholder="Ex: Há 2 semanas, desde janeiro deste ano, etc."
          value={funnelData.timeframe}
          onChange={(e) => updateFunnelData({ timeframe: e.target.value })}
        />
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
          className={`flex items-center gap-2 transition-all ${
            isFormValid 
              ? "bg-lawyer-DEFAULT hover:bg-lawyer-accent text-white" 
              : "bg-gray-700 text-white cursor-not-allowed"
          }`}
          disabled={!isFormValid}
        >
          Continuar
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default Step2ProblemDetails;
