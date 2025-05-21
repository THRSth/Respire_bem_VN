
import React, { useState, useCallback } from 'react';
import { callGeminiApi } from '../services/geminiService';
import LoadingSpinner from './LoadingSpinner';
import SendIcon from './icons/SendIcon';

const GeminiInteraction: React.FC = () => {
  const [question, setQuestion] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();
    if (!question.trim()) {
      setError('Por favor, digite uma pergunta.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResponse('');

    try {
      const apiResponse = await callGeminiApi(question);
      setResponse(apiResponse);
    } catch (err) {
      console.error("Gemini API error:", err);
      setError('Desculpe, não foi possível obter uma resposta. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  }, [question]);

  return (
    <div className="mt-6 p-6 bg-white/90 rounded-lg shadow-md text-gray-800">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Digite sua pergunta aqui..."
          className="flex-grow p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none text-gray-700"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="bg-brand-green hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition duration-150 ease-in-out flex items-center justify-center disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? <LoadingSpinner /> : <SendIcon />}
          <span className="ml-2">Enviar</span>
        </button>
      </form>

      {error && <p className="mt-4 text-red-500 bg-red-100 p-3 rounded-md">{error}</p>}
      
      {isLoading && !response && (
        <div className="mt-6 text-center">
          <p className="text-gray-600">Pensando...</p>
        </div>
      )}

      {response && (
        <div className="mt-6 p-4 bg-light-green border border-brand-green rounded-md">
          <h4 className="font-semibold text-brand-green mb-2">Resposta do Assistente:</h4>
          <p className="text-gray-700 whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
};

export default GeminiInteraction;
