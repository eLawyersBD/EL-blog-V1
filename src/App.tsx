import React, { useState, useEffect, useMemo, useRef } from 'react';
import Fuse from 'fuse.js';
import { 
  Search, 
  BookOpen, 
  FileText,
  Building, 
  Briefcase, 
  Users, 
  Clock, 
  AlertCircle,
  FileCheck,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Loader2,
  Bot,
  MessageSquare,
  PenTool,
  Send,
  FileSignature,
  Calendar,
  User,
  Tag,
  MoreHorizontal,
  Home,
  PhoneCall,
  X,
  Languages,
  ListChecks,
  ShieldCheck,
  Calculator,
  Image as ImageIcon
} from 'lucide-react';
import { categories, blogData } from './data';
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState("home"); // home, post
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // --- Mobile Menu State ---
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- Gemini AI State ---
  const [simplifiedText, setSimplifiedText] = useState("");
  const [isSimplifying, setIsSimplifying] = useState(false);

  const [bengaliTranslation, setBengaliTranslation] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);

  const [planDetails, setPlanDetails] = useState("");
  const [actionPlan, setActionPlan] = useState("");
  const [isPlanning, setIsPlanning] = useState(false);

  const [postQuestion, setPostQuestion] = useState("");
  const [postAnswer, setPostAnswer] = useState("");
  const [isAsking, setIsAsking] = useState(false);

  const [draftPrompt, setDraftPrompt] = useState("");
  const [draftResult, setDraftResult] = useState("");
  const [isDrafting, setIsDrafting] = useState(false);

  const [reviewText, setReviewText] = useState("");
  const [reviewResult, setReviewResult] = useState("");
  const [isReviewing, setIsReviewing] = useState(false);

  const [scenarioText, setScenarioText] = useState("");
  const [estimateResult, setEstimateResult] = useState("");
  const [isEstimating, setIsEstimating] = useState(false);

  const [prepDetails, setPrepDetails] = useState("");
  const [prepResult, setPrepResult] = useState("");
  const [isPrepping, setIsPrepping] = useState(false);

  const [illustrationPrompt, setIllustrationPrompt] = useState("");
  const [isGeneratingIllustration, setIsGeneratingIllustration] = useState(false);

  const [aiImages, setAiImages] = useState<Record<number, string[]>>({});
  const [activeAiImageIndex, setActiveAiImageIndex] = useState(0);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  // --- Fuse.js Initialization ---
  const fuse = useMemo(() => {
    return new Fuse(blogData, {
      keys: ['title', 'intro', 'category', 'tags'],
      threshold: 0.4,
      distance: 100,
      includeMatches: true,
    });
  }, []);

  // --- Handle Search and Suggestions ---
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const results = fuse.search(searchQuery);
      setSuggestions(results.slice(0, 5).map(r => r.item));
    } else {
      setSuggestions([]);
    }
  }, [searchQuery, fuse]);

  // --- Close suggestions on click outside ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // --- Gemini API Call Implementation ---
  const callGemini = async (prompt: string, systemInstruction: string) => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          systemInstruction: systemInstruction,
        },
      });
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      throw error;
    }
  };

  const handleSimplify = async () => {
    if (!selectedPost) return;
    setIsSimplifying(true);
    try {
      const systemInstruction = "You are an expert legal summarizer. Translate complex Bangladeshi legal text into simple, easy-to-understand everyday language (Explain Like I'm 5). Use bullet points for readability.";
      const prompt = `Simplify this legal guide:\n\nTitle: ${selectedPost.title}\nGuidelines: ${selectedPost.guidelines}\nDeadlines: ${selectedPost.deadlines}\nProcess: ${selectedPost.process.join(" ")}\nPenalties: ${selectedPost.penalties}\n\nProvide a simplified summary in plain English. Focus on the most important actions the user needs to take.`;
      
      const result = await callGemini(prompt, systemInstruction);
      setSimplifiedText(result || "");
    } catch (err) {
      setSimplifiedText("Sorry, I couldn't simplify this right now. Please try again later.");
    } finally {
      setIsSimplifying(false);
    }
  };

  const handleTranslate = async () => {
    if (!selectedPost) return;
    setIsTranslating(true);
    try {
      const systemInstruction = "You are an expert legal translator from Bangladesh. Translate the provided English text into clear, formal, and accurate Bengali (Bangla). Ensure legal terms make sense in the local context.";
      const prompt = `Translate this summary of a legal guide into Bengali:\n\nTitle: ${selectedPost.title}\nIntro: ${selectedPost.intro}\nGuidelines: ${selectedPost.guidelines}`;
      
      const result = await callGemini(prompt, systemInstruction);
      setBengaliTranslation(result || "");
    } catch (err) {
      setBengaliTranslation("দুঃখিত, অনুবাদ করা সম্ভব হয়নি। (Sorry, translation failed.)");
    } finally {
      setIsTranslating(false);
    }
  };

  const handleActionPlan = async () => {
    if (!selectedPost || !planDetails.trim()) return;
    setIsPlanning(true);
    setActionPlan("");
    try {
      const systemInstruction = "You are a highly organized legal project manager. Create a practical, step-by-step checklist/action plan based on the user's specific timeline/details and the provided legal process. Use markdown formatting with checkboxes (- [ ]).";
      const prompt = `Legal Context: ${selectedPost.title}\nProcess: ${selectedPost.process.join(" ")}\nPenalties: ${selectedPost.penalties}\nDeadlines: ${selectedPost.deadlines}\n\nUser's specific situation/timeline: ${planDetails}\n\nCreate a clear, bulleted action plan with recommended estimated deadlines for this user.`;
      const result = await callGemini(prompt, systemInstruction);
      setActionPlan(result || "");
    } catch (err) {
      setActionPlan("Sorry, I couldn't generate the action plan. Please try again.");
    } finally {
      setIsPlanning(false);
    }
  };

  const handleReviewDocument = async () => {
    if (!selectedPost || !reviewText.trim()) return;
    setIsReviewing(true);
    setReviewResult("");
    try {
      const systemInstruction = "You are an expert Bangladeshi legal compliance auditor. Review the user's draft document against the provided legal guidelines. Highlight what is missing, identify compliance risks, and provide constructive feedback using bullet points.";
      const prompt = `Legal Context: ${selectedPost.title}\nGuidelines: ${selectedPost.guidelines}\nMandatory Documents: ${selectedPost.documents}\n\nUser's Document Draft/Excerpt:\n"${reviewText}"\n\nPlease review this draft against the rules. Is anything legally missing? Are there risks?`;
      const result = await callGemini(prompt, systemInstruction);
      setReviewResult(result || "");
    } catch (err) {
      setReviewResult("Sorry, I couldn't review the document. Please try again.");
    } finally {
      setIsReviewing(false);
    }
  };

  const handleEstimate = async () => {
    if (!selectedPost || !scenarioText.trim()) return;
    setIsEstimating(true);
    setEstimateResult("");
    try {
      const systemInstruction = "You are a Bangladeshi legal and financial risk analyst. Calculate/estimate potential fines, fees, or legal consequences for the user's situation based strictly on the provided Rates and Penalties data. Be direct and clear.";
      const prompt = `Legal Context: ${selectedPost.title}\nRates: ${selectedPost.rates}\nPenalties: ${selectedPost.penalties}\nDeadlines: ${selectedPost.deadlines}\n\nUser's Situation:\n"${scenarioText}"\n\nEstimate the potential financial exposure, fines, or legal consequences for this situation.`;
      const result = await callGemini(prompt, systemInstruction);
      setEstimateResult(result || "");
    } catch (err) {
      setEstimateResult("Sorry, I couldn't calculate the estimate. Please try again.");
    } finally {
      setIsEstimating(false);
    }
  };

  const handlePrepQuestions = async () => {
    if (!selectedPost) return;
    setIsPrepping(true);
    setPrepResult("");
    try {
      const systemInstruction = "You are a strategic legal advisor in Bangladesh. Generate 3 to 5 critical, highly specific questions the user MUST ask their lawyer during a consultation regarding this legal topic. Focus on uncovering hidden costs, obscure risks, and protective strategies. Format as a bulleted list.";
      const prompt = `Legal Topic: ${selectedPost.title}\nGuidelines: ${selectedPost.guidelines}\n\nUser's Specific Context (if any): ${prepDetails}\n\nBased on this, what are the most crucial questions they should ask their consultant/lawyer to protect themselves?`;
      const result = await callGemini(prompt, systemInstruction);
      setPrepResult(result || "");
    } catch (err) {
      setPrepResult("Sorry, I couldn't generate the questions. Please try again.");
    } finally {
      setIsPrepping(false);
    }
  };

  const handleAskQuestion = async () => {
    if (!selectedPost || !postQuestion.trim()) return;
    setIsAsking(true);
    setPostAnswer("");
    try {
      const systemInstruction = "You are a helpful legal assistant. Answer the user's question based STRICTLY on the provided legal guide context. If the answer is not in the guide, say 'I cannot find the exact answer to that in the current guide, please consult an attorney.'";
      const prompt = `Context Guide - ${selectedPost.title}:\nGuidelines: ${selectedPost.guidelines}\nDeadlines: ${selectedPost.deadlines}\nProcess: ${selectedPost.process.join(" ")}\nPenalties: ${selectedPost.penalties}\n\nUser Question: ${postQuestion}\n\nAnswer concisely based only on the context above:`;
      const result = await callGemini(prompt, systemInstruction);
      setPostAnswer(result || "");
    } catch (err) {
      setPostAnswer("Sorry, I encountered an error. Please try again.");
    } finally {
      setIsAsking(false);
    }
  };

  useEffect(() => {
    if (selectedPost && !aiImages[selectedPost.id] && !isGeneratingImage) {
      handleGenerateAiImage();
    }
  }, [selectedPost]);

  const handleDraftDocument = async () => {
    if (!selectedPost || !draftPrompt.trim()) return;
    setIsDrafting(true);
    setDraftResult("");
    try {
      const systemInstruction = "You are an expert legal drafter. Create professional, well-formatted document templates (letters, notices, emails) based on the user's request and the legal context. Use placeholders like [Company Name], [Address], or [Date] where appropriate.";
      const prompt = `Legal Context: ${selectedPost.title}\n\nUser Request: ${draftPrompt}\n\nPlease draft the requested document template. Make it professional and ready to use.`;
      const result = await callGemini(prompt, systemInstruction);
      setDraftResult(result || "");
    } catch (err) {
      setDraftResult("Sorry, I couldn't generate the draft. Please try again.");
    } finally {
      setIsDrafting(false);
    }
  };

  const handleGenerateCustomIllustration = async () => {
    if (!selectedPost || !illustrationPrompt.trim()) return;
    setIsGeneratingIllustration(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `A professional, high-quality editorial illustration for the legal topic: "${selectedPost.title}". 
      User Request: ${illustrationPrompt}. 
      Style: Modern, clean, professional, Bangladeshi context. 
      No text in the image. Cinematic lighting, 4k resolution, professional photography style.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9",
          },
        },
      });

      let newImageUrl = "";
      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            newImageUrl = `data:image/png;base64,${part.inlineData.data}`;
            break;
          }
        }
      }

      if (newImageUrl) {
        setAiImages(prev => ({
          ...prev,
          [selectedPost.id]: [newImageUrl, ...(prev[selectedPost.id] || [])].slice(0, 5)
        }));
        setIllustrationPrompt("");
      }
    } catch (error) {
      console.error("Custom Illustration Error:", error);
    } finally {
      setIsGeneratingIllustration(false);
    }
  };

  const handleGenerateAiImage = async () => {
    if (!selectedPost) return;
    setIsGeneratingImage(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `A professional, high-quality editorial illustration depicting the legal concept: "${selectedPost.title}". 
      Context: ${selectedPost.intro}. 
      Style: Modern, clean, professional, Bangladeshi context where appropriate. 
      Visual elements: Legal documents, gavels, scales of justice, or professional office settings in Bangladesh. 
      No text in the image. Cinematic lighting, 4k resolution, professional photography style.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9",
          },
        },
      });

      let newImageUrl = "";
      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            newImageUrl = `data:image/png;base64,${part.inlineData.data}`;
            break;
          }
        }
      }

      if (newImageUrl) {
        setAiImages(prev => ({
          ...prev,
          [selectedPost.id]: [newImageUrl, ...(prev[selectedPost.id] || [])].slice(0, 3)
        }));
      }
    } catch (error) {
      console.error("Image Generation Error:", error);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const filteredPosts = useMemo(() => {
    let results = blogData;

    if (selectedCategory !== "All") {
      results = results.filter(post => post.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const fuseResults = fuse.search(searchQuery);
      // If we have a category filter, we should only show items that match both
      if (selectedCategory !== "All") {
        results = fuseResults
          .map(r => r.item)
          .filter(post => post.category === selectedCategory);
      } else {
        results = fuseResults.map(r => r.item);
      }
    }

    return results;
  }, [searchQuery, selectedCategory, fuse]);

  const getRelatedPosts = () => {
    if (!selectedPost) return [];
    return blogData
      .filter(post => post.category === selectedPost.category && post.id !== selectedPost.id)
      .slice(0, 3);
  };

  const handleReadMore = (post: any) => {
    setSelectedPost(post);
    setActiveAiImageIndex(0);
    setSimplifiedText("");
    setBengaliTranslation("");
    setPostQuestion("");
    setPostAnswer("");
    setDraftPrompt("");
    setDraftResult("");
    setPlanDetails("");
    setActionPlan("");
    setReviewText("");
    setReviewResult("");
    setScenarioText("");
    setEstimateResult("");
    setPrepDetails("");
    setPrepResult("");
    setActiveTab("post");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedPost(null);
    setSimplifiedText("");
    setBengaliTranslation("");
    setPostQuestion("");
    setPostAnswer("");
    setDraftPrompt("");
    setDraftResult("");
    setPlanDetails("");
    setActionPlan("");
    setReviewText("");
    setReviewResult("");
    setScenarioText("");
    setEstimateResult("");
    setPrepDetails("");
    setPrepResult("");
    setActiveTab("home");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20 md:pb-0 relative">
      {/* Navigation */}
      <nav className="bg-white sticky top-0 z-40 shadow-sm border-b border-slate-200 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => { handleBack(); setIsMobileMenuOpen(false); }}>
              <img 
                src="https://elawyersbd.com/wp-content/uploads/2026/03/Profile-1.jpg" 
                alt="E-Lawyers Icon" 
                className="h-9 w-9 md:h-10 md:w-10 rounded-md object-cover border border-slate-700" 
              />
              <div className="flex flex-col justify-center">
                <span className="font-bold text-lg md:text-xl tracking-wider leading-tight text-slate-900">E-LAWYERS</span>
                <span className="text-[9px] md:text-[11px] text-blue-600 font-medium tracking-wide">Legal & Business Consultancy Firm</span>
              </div>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2 lg:space-x-4">
                <button onClick={handleBack} className="px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition">Law and Business Guide Blog</button>
                <a href="https://client.elawyersbd.com/#/appointment" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition">Consultation</a>
                <a href="https://elawyersbd.com" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition">About Us</a>
                <a href="https://client.elawyersbd.com" target="_blank" rel="noopener noreferrer" className="ml-2 lg:ml-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-bold text-white transition shadow-sm flex items-center gap-2">Client Portal</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE BOTTOM NAVIGATION */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
        <div className="flex justify-around items-center h-16 pb-safe">
          <button onClick={() => { handleBack(); setIsMobileMenuOpen(false); }} className={`flex flex-col items-center justify-center w-full h-full transition-colors ${activeTab === 'home' && !isMobileMenuOpen ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>
            <Home className="h-5 w-5 mb-1" />
            <span className="text-[10px] font-semibold">Home</span>
          </button>
          <a href="https://client.elawyersbd.com/#/appointment" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col items-center justify-center w-full h-full text-slate-500 hover:text-blue-600 transition-colors">
            <PhoneCall className="h-5 w-5 mb-1" />
            <span className="text-[10px] font-semibold">Consult</span>
          </a>
          <a href="https://client.elawyersbd.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col items-center justify-center w-full h-full text-slate-500 hover:text-blue-600 transition-colors">
            <User className="h-5 w-5 mb-1" />
            <span className="text-[10px] font-semibold">Portal</span>
          </a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`flex flex-col items-center justify-center w-full h-full transition-colors ${isMobileMenuOpen ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>
            <MoreHorizontal className="h-5 w-5 mb-1" />
            <span className="text-[10px] font-semibold">More</span>
          </button>
        </div>
      </div>

      {/* MOBILE 'MORE' OVERLAY MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity animate-in fade-in" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="absolute bottom-16 left-0 right-0 bg-white rounded-t-2xl p-6 shadow-2xl animate-in slide-in-from-bottom-8 border-t border-slate-200" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <img src="https://elawyersbd.com/wp-content/uploads/2026/03/Profile-1.jpg" alt="E-Lawyers Icon" className="h-8 w-8 rounded-md object-cover border border-slate-200" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-3">
              <a href="https://elawyersbd.com" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-xl hover:bg-slate-50 text-slate-700 font-semibold transition-colors border border-transparent hover:border-slate-100">
                <Building className="h-5 w-5 mr-4 text-slate-400" /> About Us
              </a>
              <a href="https://client.elawyersbd.com/#/appointment" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-xl hover:bg-slate-50 text-slate-700 font-semibold transition-colors border border-transparent hover:border-slate-100">
                <PhoneCall className="h-5 w-5 mr-4 text-slate-400" /> Book Consultation
              </a>
              <a href="https://client.elawyersbd.com" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-xl bg-blue-50 text-blue-700 font-bold border border-blue-100 hover:bg-blue-100 transition-colors">
                <User className="h-5 w-5 mr-4 text-blue-500" /> Client Portal Login
              </a>
            </div>
            <div className="h-4"></div>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "home" && (
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8 text-center border border-slate-200"
            >
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Bangladesh Law & Compliance Guide</h1>
              <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-8">Your definitive portal for corporate, legal, and statutory regulations in Bangladesh. Explore critical domains to ensure your business remains compliant.</p>
              <div className="relative max-w-xl mx-auto" ref={suggestionRef}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Search className="h-5 w-5 text-slate-400" /></div>
                <input 
                  type="text" 
                  className="block w-full pl-10 pr-3 py-3 md:py-4 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm text-sm" 
                  placeholder="Search legal topics, corporate compliance, tax..." 
                  value={searchQuery} 
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                />
                
                {/* Suggestions Dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion.id}
                        className="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-center gap-3 border-b border-slate-100 last:border-0 transition-colors"
                        onClick={() => {
                          setSearchQuery(suggestion.title);
                          setShowSuggestions(false);
                          handleReadMore(suggestion);
                        }}
                      >
                        <div className="bg-blue-50 p-2 rounded-md">
                          <FileText className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 line-clamp-1">{suggestion.title}</p>
                          <p className="text-[10px] text-slate-500 uppercase tracking-wider">{suggestion.category}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
            <div className="flex overflow-x-auto py-2 mb-6 space-x-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
              {categories.map((cat, index) => (
                <motion.button 
                  key={index} 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(cat)} 
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === cat ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post, idx) => (
                  <motion.div 
                    key={post.id} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleReadMore(post)} 
                    className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col group cursor-pointer"
                  >
                    <div className="h-48 w-full overflow-hidden border-b border-slate-100 bg-slate-100">
                      <img src={post.images[0]} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5 md:p-6 flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[10px] sm:text-xs font-semibold rounded-full">{post.category}</span>
                        <span className="text-xs text-slate-400 flex items-center"><Clock className="h-3 w-3 mr-1" /> {post.readTime}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.intro}</p>
                    </div>
                    <div className="px-5 md:px-6 py-4 bg-slate-50 border-t border-slate-100 mt-auto flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-xs mr-2 border border-slate-300">{post.author.charAt(0)}</div>
                        <div className="flex flex-col">
                          <span className="text-xs font-medium text-slate-900 line-clamp-1">{post.author}</span>
                          <span className="text-[10px] text-slate-500">{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-800 transition pl-2">Read <ChevronRight className="h-4 w-4 ml-1" /></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-900">No guides found</h3>
                <p className="text-slate-500">Try adjusting your search or category filter.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "post" && selectedPost && (
          <div className="animate-in fade-in duration-300">
            <button onClick={handleBack} className="flex items-center text-slate-500 hover:text-blue-600 font-medium mb-6 transition"><ArrowLeft className="h-4 w-4 mr-2" /> Back to Guides</button>
            <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-900 px-5 py-8 md:px-12 md:py-16 text-white">
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-200 text-xs md:text-sm font-semibold rounded-full mb-6 border border-blue-400/30">{selectedPost.category}</span>
                <h1 className="text-2xl md:text-5xl font-extrabold mb-6 leading-tight">{selectedPost.title}</h1>
                <p className="text-base md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">{selectedPost.intro}</p>
                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm text-slate-400 mb-8 border-t border-slate-700 pt-6">
                  <div className="flex items-center"><User className="h-4 w-4 mr-1 md:mr-2" /> By <span className="text-slate-200 font-medium ml-1">{selectedPost.author}</span></div>
                  <div className="flex items-center"><Calendar className="h-4 w-4 mr-1 md:mr-2" /> Published on {selectedPost.date}</div>
                  <div className="flex items-center"><Clock className="h-4 w-4 mr-1 md:mr-2" /> {selectedPost.readTime}</div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button onClick={handleSimplify} disabled={isSimplifying || !!simplifiedText} className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 md:py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed border border-blue-500 shadow-sm">
                    {isSimplifying ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Simplifying...</> : <><Sparkles className="h-4 w-4 mr-2 text-yellow-300" /> ✨ Explain Like I'm 5</>}
                  </button>
                  <button onClick={handleTranslate} disabled={isTranslating || !!bengaliTranslation} className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 md:py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed border border-emerald-500 shadow-sm">
                    {isTranslating ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Translating...</> : <><Languages className="h-4 w-4 mr-2" /> ✨ বাংলায় অনুবাদ</>}
                  </button>
                </div>
              </div>

              {simplifiedText && (
                <div className="mx-4 md:mx-12 mt-6 md:mt-8 bg-indigo-50 p-5 md:p-8 rounded-xl border border-indigo-200 shadow-inner animate-in fade-in">
                  <div className="flex items-center text-indigo-900 font-bold mb-4 text-base md:text-lg"><Bot className="h-5 w-5 md:h-6 md:w-6 mr-2 text-indigo-600" /> AI Simplified Explanation</div>
                  <div className="text-slate-800 leading-relaxed whitespace-pre-wrap text-sm md:text-base font-medium">{simplifiedText}</div>
                </div>
              )}

              {bengaliTranslation && (
                <div className="mx-4 md:mx-12 mt-4 md:mt-6 bg-emerald-50 p-5 md:p-8 rounded-xl border border-emerald-200 shadow-inner animate-in fade-in">
                  <div className="flex items-center text-emerald-900 font-bold mb-4 text-base md:text-lg"><Languages className="h-5 w-5 md:h-6 md:w-6 mr-2 text-emerald-600" /> বাংলায় সারসংক্ষেপ</div>
                  <div className="text-slate-800 leading-relaxed whitespace-pre-wrap text-sm md:text-base font-medium">{bengaliTranslation}</div>
                </div>
              )}

              <div className="w-full h-48 sm:h-64 md:h-[400px] overflow-hidden mt-6 md:mt-8 relative group bg-slate-100 rounded-xl shadow-md">
                {isGeneratingImage && !aiImages[selectedPost.id]?.[0] ? (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-slate-50">
                    <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
                    <p className="text-slate-500 font-medium animate-pulse text-sm">Generating AI Illustration...</p>
                  </div>
                ) : (
                  <>
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={aiImages[selectedPost.id]?.[activeAiImageIndex] || selectedPost.images[0]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        src={aiImages[selectedPost.id]?.[activeAiImageIndex] || selectedPost.images[0]} 
                        alt="Legal Concept" 
                        className="w-full h-full object-cover" 
                      />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button 
                        onClick={handleGenerateAiImage}
                        disabled={isGeneratingImage}
                        className="bg-white/90 hover:bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all"
                      >
                        {isGeneratingImage ? (
                          <><Loader2 className="h-4 w-4 animate-spin" /> Regenerating...</>
                        ) : (
                          <><Sparkles className="h-4 w-4 text-blue-600" /> Regenerate AI Illustration</>
                        )}
                      </button>
                    </div>
                    {aiImages[selectedPost.id]?.[activeAiImageIndex] && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest shadow-lg">
                        AI Generated
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* AI Image Gallery Thumbnails */}
              {aiImages[selectedPost.id] && aiImages[selectedPost.id].length > 1 && (
                <div className="flex justify-center gap-3 mt-4 px-4">
                  {aiImages[selectedPost.id].map((img, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setActiveAiImageIndex(idx)}
                      className={`w-16 h-10 md:w-20 md:h-12 rounded-lg overflow-hidden border-2 transition-all ${activeAiImageIndex === idx ? 'border-blue-600 ring-2 ring-blue-100 scale-110' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                      <img src={img} alt={`AI Gen ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <div className="p-5 md:p-12 space-y-8 md:space-y-10">
                <section className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-shrink-0"><div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center"><BookOpen className="h-5 w-5 text-blue-600" /></div></div>
                  <div><h2 className="text-lg md:text-xl font-bold text-slate-900 mb-2 mt-1 sm:mt-0">Official Guidelines & Regulations</h2><p className="text-sm md:text-base text-slate-700 leading-relaxed">{selectedPost.guidelines}</p></div>
                </section>
                <hr className="border-slate-100" />
                <section className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-shrink-0"><div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center"><Clock className="h-5 w-5 text-orange-600" /></div></div>
                  <div><h2 className="text-lg md:text-xl font-bold text-slate-900 mb-2 mt-1 sm:mt-0">Specific Deadlines</h2><p className="text-sm md:text-base text-slate-700 leading-relaxed">{selectedPost.deadlines}</p></div>
                </section>
                <hr className="border-slate-100" />
                <section className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-shrink-0"><div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center"><Briefcase className="h-5 w-5 text-green-600" /></div></div>
                  <div><h2 className="text-lg md:text-xl font-bold text-slate-900 mb-2 mt-1 sm:mt-0">Current Rates & Metrics</h2><p className="text-sm md:text-base text-slate-700 leading-relaxed">{selectedPost.rates}</p></div>
                </section>
                <hr className="border-slate-100" />
                <div className="w-full h-48 sm:h-56 md:h-80 overflow-hidden rounded-xl shadow-sm border border-slate-200 my-6 md:my-8">
                  <img src={selectedPost.images[1]} alt="Compliance Details" className="w-full h-full object-cover" />
                </div>
                <section className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-shrink-0"><div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center"><FileCheck className="h-5 w-5 text-purple-600" /></div></div>
                  <div><h2 className="text-lg md:text-xl font-bold text-slate-900 mb-2 mt-1 sm:mt-0">Mandatory Documents</h2><p className="text-sm md:text-base text-slate-700 leading-relaxed">{selectedPost.documents}</p></div>
                </section>
                <hr className="border-slate-100" />
                <section className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-shrink-0"><div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center"><Building className="h-5 w-5 text-indigo-600" /></div></div>
                  <div className="w-full">
                    <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-6 mt-1 sm:mt-0 flex items-center gap-2">
                      <ListChecks className="h-5 w-5 text-blue-600" />
                      Step-by-Step Process
                    </h2>
                    <div className="relative space-y-8 pl-4 border-l-2 border-blue-100 ml-2">
                      {selectedPost.process.map((step: any, idx: number) => (
                        <div key={idx} className="relative group">
                          <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-white border-2 border-blue-600 group-hover:bg-blue-600 transition-colors z-10" />
                          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all group-hover:border-blue-200">
                            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1 block">Step {idx + 1}</span>
                            <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                <hr className="border-slate-100" />
                <div className="w-full h-48 sm:h-56 md:h-80 overflow-hidden rounded-xl shadow-sm border border-slate-200 my-6 md:my-8">
                  <img src={selectedPost.images[2]} alt="Process Execution" className="w-full h-full object-cover" />
                </div>
                <section className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-5 md:p-6 bg-red-50 rounded-lg border border-red-100">
                  <div className="flex-shrink-0"><AlertCircle className="h-6 w-6 text-red-600" /></div>
                  <div><h2 className="text-lg md:text-xl font-bold text-red-900 mb-2 mt-1 sm:mt-0">Penalties & Legal Consequences</h2><p className="text-sm md:text-base text-red-800 leading-relaxed">{selectedPost.penalties}</p></div>
                </section>

                <hr className="border-slate-100 my-8 md:my-10" />
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-5 md:p-10 border border-indigo-100 shadow-sm">
                  <h2 className="text-xl md:text-2xl font-extrabold text-indigo-900 mb-6 md:mb-8 flex items-center"><Bot className="h-6 w-6 md:h-8 md:w-8 mr-3 text-indigo-600" /> AI Assistant Toolkit</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                    <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-slate-200 flex flex-col">
                      <h3 className="text-base md:text-lg font-bold text-slate-800 mb-2 md:mb-3 flex items-center"><MessageSquare className="h-5 w-5 mr-2 text-blue-500" /> Ask a Question</h3>
                      <p className="text-xs md:text-sm text-slate-600 mb-4">Have a specific question about this guide?</p>
                      <div className="relative mb-4">
                        <input type="text" placeholder="What is the deadline?" className="w-full pl-3 md:pl-4 pr-12 py-3 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500 text-sm bg-slate-50" value={postQuestion} onChange={e => setPostQuestion(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleAskQuestion()} />
                        <button onClick={handleAskQuestion} disabled={isAsking || !postQuestion.trim()} className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-4 rounded-md transition disabled:opacity-50">{isAsking ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}</button>
                      </div>
                      {postAnswer && <div className="mt-auto bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm text-slate-800 animate-in fade-in"><p className="font-semibold text-blue-900 mb-1 flex items-center"><Bot className="h-4 w-4 mr-1" /> Answer:</p><p className="leading-relaxed whitespace-pre-wrap text-xs md:text-sm">{postAnswer}</p></div>}
                    </div>
                    <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-slate-200 flex flex-col">
                      <h3 className="text-base md:text-lg font-bold text-slate-800 mb-2 md:mb-3 flex items-center"><PenTool className="h-5 w-5 mr-2 text-indigo-500" /> Draft a Document</h3>
                      <p className="text-xs md:text-sm text-slate-600 mb-4 flex-grow">Need an email, notice, or letter related to this topic?</p>
                      <textarea rows={2} placeholder="e.g. Draft an email to HR..." className="w-full px-3 md:px-4 py-3 rounded-lg border border-slate-300 focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-slate-50 mb-3 resize-none" value={draftPrompt} onChange={e => setDraftPrompt(e.target.value)} />
                      <button onClick={handleDraftDocument} disabled={isDrafting || !draftPrompt.trim()} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 md:py-2.5 rounded-lg text-sm font-medium transition disabled:opacity-50 flex items-center justify-center shadow-sm">{isDrafting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Sparkles className="h-4 w-4 mr-2 text-yellow-300" />} <span className="truncate">✨ Draft Template</span></button>
                    </div>
                    <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-slate-200 flex flex-col">
                      <h3 className="text-base md:text-lg font-bold text-slate-800 mb-2 md:mb-3 flex items-center"><ListChecks className="h-5 w-5 mr-2 text-emerald-500" /> Action Plan</h3>
                      <p className="text-xs md:text-sm text-slate-600 mb-4 flex-grow">Input your specific start date or situation to get a customized checklist.</p>
                      <textarea rows={2} placeholder="e.g. I want to start this process next Monday..." className="w-full px-3 md:px-4 py-3 rounded-lg border border-slate-300 focus:ring-emerald-500 focus:border-emerald-500 text-sm bg-slate-50 mb-3 resize-none" value={planDetails} onChange={e => setPlanDetails(e.target.value)} />
                      <button onClick={handleActionPlan} disabled={isPlanning || !planDetails.trim()} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 md:py-2.5 rounded-lg text-sm font-medium transition disabled:opacity-50 flex items-center justify-center shadow-sm">{isPlanning ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Sparkles className="h-4 w-4 mr-2 text-yellow-300" />} <span className="truncate">✨ Create Checklist</span></button>
                    </div>
                    <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-slate-200 flex flex-col">
                      <h3 className="text-base md:text-lg font-bold text-slate-800 mb-2 md:mb-3 flex items-center"><ShieldCheck className="h-5 w-5 mr-2 text-purple-500" /> Review Document</h3>
                      <p className="text-xs md:text-sm text-slate-600 mb-4 flex-grow">Paste a snippet of your notice or contract.</p>
                      <textarea rows={2} placeholder="Paste document text here..." className="w-full px-3 md:px-4 py-3 rounded-lg border border-slate-300 focus:ring-purple-500 focus:border-purple-500 text-sm bg-slate-50 mb-3 resize-none" value={reviewText} onChange={e => setReviewText(e.target.value)} />
                      <button onClick={handleReviewDocument} disabled={isReviewing || !reviewText.trim()} className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 md:py-2.5 rounded-lg text-sm font-medium transition disabled:opacity-50 flex items-center justify-center shadow-sm">{isReviewing ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Sparkles className="h-4 w-4 mr-2 text-yellow-300" />} <span className="truncate">✨ Analyze Draft</span></button>
                    </div>
                    <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-slate-200 flex flex-col">
                      <h3 className="text-base md:text-lg font-bold text-slate-800 mb-2 md:mb-3 flex items-center"><Calculator className="h-5 w-5 mr-2 text-orange-500" /> Penalty Estimator</h3>
                      <p className="text-xs md:text-sm text-slate-600 mb-4 flex-grow">Describe your violation or delay.</p>
                      <textarea rows={2} placeholder="e.g. I am 3 months late on filing..." className="w-full px-3 md:px-4 py-3 rounded-lg border border-slate-300 focus:ring-orange-500 focus:border-orange-500 text-sm bg-slate-50 mb-3 resize-none" value={scenarioText} onChange={e => setScenarioText(e.target.value)} />
                      <button onClick={handleEstimate} disabled={isEstimating || !scenarioText.trim()} className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 md:py-2.5 rounded-lg text-sm font-medium transition disabled:opacity-50 flex items-center justify-center shadow-sm">{isEstimating ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Sparkles className="h-4 w-4 mr-2 text-yellow-300" />} <span className="truncate">✨ Estimate Risk</span></button>
                    </div>
                    <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-slate-200 flex flex-col">
                      <h3 className="text-base md:text-lg font-bold text-slate-800 mb-2 md:mb-3 flex items-center"><Users className="h-5 w-5 mr-2 text-rose-500" /> Consultation Prep</h3>
                      <p className="text-xs md:text-sm text-slate-600 mb-4 flex-grow">Booking a consultation? Get the 5 most critical questions.</p>
                      <textarea rows={2} placeholder="e.g. I am starting a tech company..." className="w-full px-3 md:px-4 py-3 rounded-lg border border-slate-300 focus:ring-rose-500 focus:border-rose-500 text-sm bg-slate-50 mb-3 resize-none" value={prepDetails} onChange={e => setPrepDetails(e.target.value)} />
                      <button onClick={handlePrepQuestions} disabled={isPrepping} className="w-full bg-rose-600 hover:bg-rose-700 text-white px-4 py-3 md:py-2.5 rounded-lg text-sm font-medium transition disabled:opacity-50 flex items-center justify-center shadow-sm">{isPrepping ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Sparkles className="h-4 w-4 mr-2 text-yellow-300" />} <span className="truncate">✨ Generate Questions</span></button>
                    </div>
                    <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-slate-200 flex flex-col">
                      <h3 className="text-base md:text-lg font-bold text-slate-800 mb-2 md:mb-3 flex items-center"><Sparkles className="h-5 w-5 mr-2 text-amber-500" /> AI Illustration</h3>
                      <p className="text-xs md:text-sm text-slate-600 mb-4 flex-grow">Generate a custom visual illustration for this legal topic.</p>
                      <textarea rows={2} placeholder="e.g. A futuristic courtroom in Dhaka..." className="w-full px-3 md:px-4 py-3 rounded-lg border border-slate-300 focus:ring-amber-500 focus:border-amber-500 text-sm bg-slate-50 mb-3 resize-none" value={illustrationPrompt} onChange={e => setIllustrationPrompt(e.target.value)} />
                      <button onClick={handleGenerateCustomIllustration} disabled={isGeneratingIllustration || !illustrationPrompt.trim()} className="w-full bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 md:py-2.5 rounded-lg text-sm font-medium transition disabled:opacity-50 flex items-center justify-center shadow-sm">{isGeneratingIllustration ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Sparkles className="h-4 w-4 mr-2 text-yellow-300" />} <span className="truncate">✨ Generate Illustration</span></button>
                    </div>
                  </div>
                  {(draftResult || actionPlan || reviewResult || estimateResult || prepResult) && (
                    <div className="mt-6 md:mt-8 bg-white p-5 md:p-6 rounded-xl border border-indigo-200 shadow-sm animate-in fade-in flex flex-col gap-6">
                       {draftResult && <div><p className="font-semibold text-indigo-900 mb-4 flex items-center"><FileSignature className="h-5 w-5 mr-2 text-indigo-600" /> Template:</p><div className="bg-slate-50 p-4 md:p-6 rounded-lg border border-slate-200 whitespace-pre-wrap text-xs md:text-sm font-mono text-slate-800 max-h-96 overflow-y-auto">{draftResult}</div></div>}
                       {actionPlan && <div><p className="font-semibold text-emerald-900 mb-4 flex items-center"><ListChecks className="h-5 w-5 mr-2 text-emerald-600" /> Action Plan:</p><div className="bg-emerald-50 p-4 md:p-6 rounded-lg border border-emerald-200 whitespace-pre-wrap text-xs md:text-sm text-slate-800 max-h-96 overflow-y-auto font-medium">{actionPlan}</div></div>}
                       {reviewResult && <div><p className="font-semibold text-purple-900 mb-4 flex items-center"><ShieldCheck className="h-5 w-5 mr-2 text-purple-600" /> Review Analysis:</p><div className="bg-purple-50 p-4 md:p-6 rounded-lg border border-purple-200 whitespace-pre-wrap text-xs md:text-sm text-slate-800 max-h-96 overflow-y-auto font-medium">{reviewResult}</div></div>}
                       {estimateResult && <div><p className="font-semibold text-orange-900 mb-4 flex items-center"><Calculator className="h-5 w-5 mr-2 text-orange-600" /> Risk Estimate:</p><div className="bg-orange-50 p-4 md:p-6 rounded-lg border border-orange-200 whitespace-pre-wrap text-xs md:text-sm text-slate-800 max-h-96 overflow-y-auto font-medium">{estimateResult}</div></div>}
                       {prepResult && <div><p className="font-semibold text-rose-900 mb-4 flex items-center"><Users className="h-5 w-5 mr-2 text-rose-600" /> Questions:</p><div className="bg-rose-50 p-4 md:p-6 rounded-lg border border-rose-200 whitespace-pre-wrap text-xs md:text-sm text-slate-800 max-h-96 overflow-y-auto font-medium">{prepResult}</div></div>}
                    </div>
                  )}
                </div>

                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-200">
                  <div className="flex flex-wrap items-center gap-2">
                    <Tag className="h-4 w-4 md:h-5 md:w-5 text-slate-400" />
                    <span className="font-medium text-slate-700 mr-1 md:mr-2 text-sm md:text-base">Tags:</span>
                    {selectedPost.tags.map((tag: any, idx: number) => (<span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] md:text-xs font-medium hover:bg-slate-200 cursor-pointer transition">{tag}</span>))}
                  </div>
                </div>
              </div>
            </article>

            {getRelatedPosts().length > 0 && (
              <div className="mt-10 md:mt-12">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Related Articles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {getRelatedPosts().map((relatedPost) => (
                    <div key={relatedPost.id} onClick={() => handleReadMore(relatedPost)} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
                      <div className="h-32 w-full overflow-hidden bg-slate-100"><img src={relatedPost.images[0]} alt={relatedPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                      <div className="p-4"><span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider mb-1 block">{relatedPost.category}</span><h4 className="font-bold text-slate-900 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">{relatedPost.title}</h4></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-10 text-center border-t border-slate-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="bg-white px-4 py-2 rounded-lg mb-6 shadow-sm inline-block">
            <img src="https://elawyersbd.com/wp-content/uploads/2024/12/Logo_E-Layers-02.png" alt="E-Lawyers Logo" className="h-10 md:h-12 w-auto object-contain" />
          </div>
          <p className="text-sm font-medium">© 2026 E-Lawyers. All rights reserved.</p>
          <p className="text-[10px] md:text-xs mt-3 text-slate-500 px-4 max-w-xl">Disclaimer: This guide provides general information and does not constitute formal legal advice.</p>
        </div>
      </footer>
    </div>
  );
}
