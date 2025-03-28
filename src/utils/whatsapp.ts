
import { ProblemType } from "@/context/FunnelContext";

// Lawyer's phone number (replace with the actual number)
const LAWYER_PHONE = "5511999999999"; // Format: country code + phone number without + or spaces

// Generate custom messages based on problem type and user data
export const generateWhatsAppMessage = (
  problemType: ProblemType | null,
  description: string,
  timeframe: string,
  name: string
): string => {
  let baseMessage = `Olá Dr. Geraldo, me chamo ${name}. `;
  
  switch (problemType) {
    case "discrimination":
      return baseMessage + `Estou passando por uma situação de discriminação no trabalho ${timeframe && `há ${timeframe}`}. ${description}`;
    case "harassment":
      return baseMessage + `Estou sofrendo assédio ${timeframe && `há ${timeframe}`} no meu ambiente de trabalho. ${description}`;
    case "wages":
      return baseMessage + `Estou com problemas relacionados ao meu pagamento ${timeframe && `desde ${timeframe}`}. ${description}`;
    case "termination":
      return baseMessage + `Fui demitido de forma que acredito ser indevida ${timeframe && `há ${timeframe}`}. ${description}`;
    case "retaliation":
      return baseMessage + `Estou sofrendo retaliação no trabalho ${timeframe && `há ${timeframe}`}. ${description}`;
    case "safety":
      return baseMessage + `Estou com problemas relacionados à segurança no trabalho ${timeframe && `desde ${timeframe}`}. ${description}`;
    default:
      return baseMessage + `Gostaria de uma consulta sobre um problema trabalhista. ${description}`;
  }
};

// Generate WhatsApp URL with the message
export const getWhatsAppUrl = (
  problemType: ProblemType | null,
  description: string,
  timeframe: string,
  name: string
): string => {
  const message = generateWhatsAppMessage(problemType, description, timeframe, name);
  return `https://wa.me/${LAWYER_PHONE}?text=${encodeURIComponent(message)}`;
};
