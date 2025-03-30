
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ProblemType = 
  | 'discrimination' 
  | 'harassment' 
  | 'wages' 
  | 'termination' 
  | 'retaliation'
  | 'safety'
  | 'other';

export type FunnelData = {
  problemType: ProblemType | null;
  description: string;
  timeframe: string;
  name: string;
  email: string;
  phone: string;
};

type FunnelContextType = {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  funnelData: FunnelData;
  updateFunnelData: (data: Partial<FunnelData>) => void;
  resetFunnel: () => void;
  progressPercentage: number;
};

const initialFunnelData: FunnelData = {
  problemType: null,
  description: '',
  timeframe: '',
  name: '',
  email: '',
  phone: '',
};

const FunnelContext = createContext<FunnelContextType | undefined>(undefined);

export const FunnelProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [funnelData, setFunnelData] = useState<FunnelData>(initialFunnelData);

  const totalSteps = 4;
  const progressPercentage = Math.floor((currentStep - 1) / totalSteps * 100);

  const updateFunnelData = (data: Partial<FunnelData>) => {
    setFunnelData(prev => ({ ...prev, ...data }));
  };

  const resetFunnel = () => {
    setCurrentStep(1);
    setFunnelData(initialFunnelData);
  };

  return (
    <FunnelContext.Provider 
      value={{ 
        currentStep, 
        setCurrentStep, 
        funnelData, 
        updateFunnelData, 
        resetFunnel,
        progressPercentage
      }}
    >
      {children}
    </FunnelContext.Provider>
  );
};

export const useFunnel = () => {
  const context = useContext(FunnelContext);
  if (context === undefined) {
    throw new Error('useFunnel must be used within a FunnelProvider');
  }
  return context;
};
