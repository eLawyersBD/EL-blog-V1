import React, { useState } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Search, MapPin, Loader2, Send } from 'lucide-react';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const LegalAssistant = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [groundingChunks, setGroundingChunks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (type: 'search' | 'maps') => {
    if (!query) return;
    setLoading(true);
    setResponse(null);
    setGroundingChunks([]);

    try {
      const config: any = {
        tools: type === 'search' ? [{ googleSearch: {} }] : [{ googleMaps: {} }],
      };

      if (type === 'maps') {
        config.toolConfig = {
          retrievalConfig: {
            latLng: {
              latitude: 23.7509, // Dhaka coordinates
              longitude: 90.3807
            }
          }
        };
      }

      const result: GenerateContentResponse = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: query,
        config: config,
      });

      setResponse(result.text || "No response generated.");
      setGroundingChunks(result.candidates?.[0]?.groundingMetadata?.groundingChunks || []);
    } catch (error) {
      console.error("Error:", error);
      setResponse("An error occurred while fetching information.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 mt-8 mb-8">
      <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
        <Search className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
        E-Lawyers Legal Assistant
      </h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about tax laws or find locations..."
          className="flex-1 p-2.5 md:p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs md:text-sm"
        />
        <button 
          onClick={() => handleSearch('search')}
          disabled={loading}
          className="p-2.5 md:p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          <Search className="h-4 w-4 md:h-5 md:w-5" />
        </button>
        <button 
          onClick={() => handleSearch('maps')}
          disabled={loading}
          className="p-2.5 md:p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          <MapPin className="h-4 w-4 md:h-5 md:w-5" />
        </button>
      </div>

      {loading && <div className="flex justify-center p-4"><Loader2 className="h-6 w-6 md:h-8 md:w-8 animate-spin text-blue-600" /></div>}
      
      {response && (
        <div className="prose dark:prose-invert max-w-none text-xs md:text-sm">
          <p>{response}</p>
          {groundingChunks.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <h4 className="font-semibold mb-2">Sources:</h4>
              <ul className="space-y-1">
                {groundingChunks.map((chunk, idx) => {
                  const uri = chunk.web?.uri || chunk.maps?.uri;
                  const title = chunk.web?.title || chunk.maps?.title;
                  return uri && (
                    <li key={idx}>
                      <a href={uri} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        {title || uri}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
