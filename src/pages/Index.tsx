
import LawyerFunnel from "@/components/LawyerFunnel";
import { FunnelProvider } from "@/context/FunnelContext";

const Index = () => {
  return (
    <FunnelProvider>
      <LawyerFunnel />
    </FunnelProvider>
  );
};

export default Index;
