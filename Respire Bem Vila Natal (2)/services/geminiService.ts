
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error("API_KEY não encontrada. Certifique-se de que process.env.API_KEY está configurada.");
  // You might throw an error here or handle it differently depending on your app's needs.
  // For this example, we'll allow the app to run but API calls will fail if key is truly missing.
}

const ai = new GoogleGenAI({ apiKey: API_KEY! }); // Use non-null assertion if you handle missing key elsewhere

const SYSTEM_INSTRUCTION = `
Você é 'Respire Bem Vila Natal IA', um assistente virtual especializado em questões ambientais e de saúde pública, com foco na comunidade da Vila Natal em Cubatão, SP, Brasil. 
Suas respostas devem ser em português brasileiro, claras, objetivas, informativas e úteis para os moradores.
Concentre-se em poluição do ar, problemas respiratórios, impacto da industrialização local, iniciativas de melhoria ambiental e dicas de saúde.
Se a pergunta for sobre um tópico completamente não relacionado, como receitas de bolo ou física quântica, gentilmente redirecione o usuário para o foco principal, por exemplo: "Minha especialidade é ajudar com questões sobre poluição e saúde na Vila Natal. Você tem alguma pergunta sobre esses temas?".
Evite respostas excessivamente longas; seja conciso e direto ao ponto.
Não invente informações se não tiver certeza. É melhor dizer que não sabe ou que a informação não está disponível.
`;

export const callGeminiApi = async (prompt: string): Promise<string> => {
  if (!API_KEY) {
    return "Erro: A chave da API do Gemini não está configurada. Por favor, contate o administrador.";
  }
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-04-17",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7, // Adjust for creativity vs. factualness
        topK: 32,
        topP: 0.9,
      }
    });
    
    // The .text property directly gives the string output.
    const text = response.text;
    if (text) {
      return text;
    } else {
      // Fallback if .text is empty but other parts might exist (though unlikely for pure text model)
      console.warn("Gemini response.text was empty, checking candidates.");
      const candidateText = response.candidates?.[0]?.content?.parts?.[0]?.text;
      if (candidateText) return candidateText;
      return "Não foi possível extrair uma resposta do modelo.";
    }
  } catch (error) {
    console.error('Erro ao chamar a API Gemini:', error);
    if (error instanceof Error) {
        if (error.message.includes('API key not valid')) {
            return "Erro: A chave da API do Gemini não é válida. Verifique a configuração.";
        }
        if (error.message.includes('fetch_error')) {
            return "Erro de conexão ao tentar acessar a API do Gemini. Verifique sua internet ou as configurações de CORS se estiver no navegador.";
        }
         return `Erro ao processar sua solicitação: ${error.message}`;
    }
    return 'Ocorreu um erro desconhecido ao tentar se comunicar com o assistente.';
  }
};
