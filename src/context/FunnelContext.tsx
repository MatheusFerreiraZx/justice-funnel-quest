
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the types for our funnel data
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

// Initial state for our funnel data
const initialFunnelData: FunnelData = {
  problemType: null,
  description: '',
  timeframe: '',
  name: '',
  email: '',
  phone: '',
};

// Create the context
const FunnelContext = createContext<FunnelContextType | undefined>(undefined);

// Provider component
export const FunnelProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [funnelData, setFunnelData] = useState<FunnelData>(initialFunnelData);

  // Calculate progress percentage based on current step
  const totalSteps = 4; // Update this if you add more steps
  const progressPercentage = Math.floor((currentStep - 1) / totalSteps * 100);

  // Function to update funnel data
  const updateFunnelData = (data: Partial<FunnelData>) => {
    setFunnelData(prev => ({ ...prev, ...data }));
  };

  // Function to reset funnel
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

// Custom hook to use the funnel context
export const useFunnel = () => {
  const context = useContext(FunnelContext);
  if (context === undefined) {
    throw new Error('useFunnel must be used within a FunnelProvider');
  }
  return context;
};
