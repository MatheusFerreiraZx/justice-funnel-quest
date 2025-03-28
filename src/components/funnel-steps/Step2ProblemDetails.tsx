
import { useFunnel } from '@/context/FunnelContext';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const problemTypeLabels = {
  discrimination: 'Discriminação no trabalho',
  harassment: 'Assédio moral ou sexual',
  wages: 'Problemas salariais',
  termination: 'Demissão indevida',
  retaliation: 'Retaliação',
  safety: 'Segurança no trabalho',
  other: 'Outro problema trabalhista'
};

const Step2ProblemDetails = () => {
  const { funnelData, updateFunnelData, setCurrentStep } = useFunnel();

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleNext = () => {
    if (funnelData.description.trim().length > 0) {
      setCurrentStep(3);
    }
  };

  return (
    <div className="animate-fade-in max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Descreva seu problema</h2>
      
      <div className="bg-lawyer-light p-4 rounded-lg mb-6">
        <p className="text-lawyer-dark font-medium">
          Problema selecionado: {funnelData.problemType ? problemTypeLabels[funnelData.problemType] : ''}
        </p>
      </div>
      
      <div className="mb-6">
        <label htmlFor="description" className="block text-gray-700 mb-2">
          Conte-nos mais sobre seu problema trabalhista:
        </label>
        <Textarea
          id="description"
          placeholder="Descreva a situação que você enfrentou ou está enfrentando no seu local de trabalho..."
          className="min-h-32"
          value={funnelData.description}
          onChange={(e) => updateFunnelData({ description: e.target.value })}
        />
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
          className="bg-lawyer-DEFAULT hover:bg-lawyer-accent flex items-center gap-2"
          disabled={!funnelData.description.trim()}
        >
          Continuar
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default Step2ProblemDetails;
