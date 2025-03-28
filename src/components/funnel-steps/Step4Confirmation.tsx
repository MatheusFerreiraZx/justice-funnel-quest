
import { useFunnel } from '@/context/FunnelContext';
import { Button } from '@/components/ui/button';
import { Check, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getWhatsAppUrl } from '@/utils/whatsapp';

const problemTypeLabels = {
  discrimination: 'Discriminação no trabalho',
  harassment: 'Assédio moral ou sexual',
  wages: 'Problemas salariais',
  termination: 'Demissão indevida',
  retaliation: 'Retaliação',
  safety: 'Segurança no trabalho',
  other: 'Outro problema trabalhista'
};

const Step4Confirmation = () => {
  const { funnelData, resetFunnel } = useFunnel();
  const { toast } = useToast();

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log('Submitting data:', funnelData);
    
    toast({
      title: "Solicitação enviada com sucesso!",
      description: "Redirecionando para WhatsApp...",
    });
    
    // Open WhatsApp with custom message after a short delay
    setTimeout(() => {
      const whatsappUrl = getWhatsAppUrl(
        funnelData.problemType,
        funnelData.description,
        funnelData.timeframe,
        funnelData.name
      );
      
      window.open(whatsappUrl, '_blank');
      
      // Reset the funnel after successful submission
      resetFunnel();
    }, 1500);
  };

  return (
    <div className="animate-fade-in max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="bg-green-100 rounded-full p-3 inline-block mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Confirme seus dados</h2>
        <p className="text-gray-600">
          Verifique se todas as informações estão corretas antes de enviar
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid gap-4">
          <div className="border-b pb-2">
            <h3 className="font-semibold text-gray-700">Tipo de problema</h3>
            <p>{funnelData.problemType ? problemTypeLabels[funnelData.problemType] : 'Não especificado'}</p>
          </div>
          
          <div className="border-b pb-2">
            <h3 className="font-semibold text-gray-700">Descrição do problema</h3>
            <p>{funnelData.description}</p>
          </div>
          
          <div className="border-b pb-2">
            <h3 className="font-semibold text-gray-700">Quando ocorreu</h3>
            <p>{funnelData.timeframe || 'Não especificado'}</p>
          </div>
          
          <div className="border-b pb-2">
            <h3 className="font-semibold text-gray-700">Informações de contato</h3>
            <p><span className="font-medium">Nome:</span> {funnelData.name}</p>
            <p><span className="font-medium">Email:</span> {funnelData.email}</p>
            <p><span className="font-medium">Telefone:</span> {funnelData.phone || 'Não fornecido'}</p>
          </div>
        </div>
      </div>
      
      <div className="text-center space-y-6">
        <Button 
          onClick={handleSubmit}
          className="bg-lawyer-DEFAULT hover:bg-lawyer-accent px-8 py-6 text-lg flex items-center justify-center gap-2 w-full md:w-auto"
        >
          <MessageSquare className="w-5 h-5" />
          Falar com o advogado pelo WhatsApp
        </Button>
        
        <p className="mt-4 text-sm text-gray-500">
          Você será direcionado para o WhatsApp do Dr. Geraldo com uma mensagem personalizada com base nas suas respostas.
        </p>
      </div>
    </div>
  );
};

export default Step4Confirmation;
