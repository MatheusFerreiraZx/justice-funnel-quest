
import { FileText, Users, BanknoteIcon, AlertTriangle, ShieldAlert, HardHat } from 'lucide-react';
import ProblemCard from '@/components/ProblemCard';

const Step1ProblemSelection = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-center">Qual tipo de problema você teve?</h2>
      <p className="text-lg text-center text-gray-600 mb-4">
        Selecione uma opção para continuar.
      </p>
      <p className="text-sm text-center text-gray-500 mb-8">
        O questionário leva poucos segundos e é gratuito.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <ProblemCard 
          icon={<Users className="w-16 h-16 text-lawyer-DEFAULT" />}
          title="Discriminação no trabalho" 
          type="discrimination"
        />
        <ProblemCard 
          icon={<ShieldAlert className="w-16 h-16 text-lawyer-DEFAULT" />}
          title="Assédio moral ou sexual" 
          type="harassment"
        />
        <ProblemCard 
          icon={<BanknoteIcon className="w-16 h-16 text-lawyer-DEFAULT" />}
          title="Problemas salariais" 
          type="wages"
        />
        <ProblemCard 
          icon={<FileText className="w-16 h-16 text-lawyer-DEFAULT" />}
          title="Demissão indevida" 
          type="termination"
        />
        <ProblemCard 
          icon={<AlertTriangle className="w-16 h-16 text-lawyer-DEFAULT" />}
          title="Retaliação" 
          type="retaliation"
        />
        <ProblemCard 
          icon={<HardHat className="w-16 h-16 text-lawyer-DEFAULT" />}
          title="Segurança no trabalho" 
          type="safety"
        />
      </div>
      
      <div className="mt-12 text-center text-xs text-gray-500">
        <p>
          Ao clicar em alguma das opções, você concorda com os{" "}
          <a href="#" className="text-lawyer-DEFAULT hover:underline">Termos de utilização</a> de serviço,{" "}
          <a href="#" className="text-lawyer-DEFAULT hover:underline">Política de privacidade</a>,{" "}
          <a href="#" className="text-lawyer-DEFAULT hover:underline">Política de subscrição</a> e{" "}
          <a href="#" className="text-lawyer-DEFAULT hover:underline">Política de cookies</a>.
        </p>
      </div>
    </div>
  );
};

export default Step1ProblemSelection;
