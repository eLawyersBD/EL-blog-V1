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
  ChevronLeft,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  Loader2,
  Calendar,
  User,
  Tag,
  MoreHorizontal,
  MoreVertical,
  Home,
  PhoneCall,
  X,
  ListChecks,
  Moon,
  Sun
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

  // --- NEW: Pagination State ---
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // --- Mobile Menu State ---
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [aiImages, setAiImages] = useState<Record<number, string[]>>({});
  const [activeAiImageIndex, setActiveAiImageIndex] = useState(0);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatingIds, setGeneratingIds] = useState<Set<string>>(new Set());
  const [darkMode, setDarkMode] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false);
  const blogDropdownRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // --- Case Tracker State ---
  const [trackingId, setTrackingId] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [trackingResult, setTrackingResult] = useState<any>(null);

  const handleTrackCase = () => {
    if (!trackingId.trim()) return;
    setIsTracking(true);
    setTrackingResult(null);
    
    // Simulate API call
    setTimeout(() => {
      setIsTracking(false);
      setTrackingResult({
        id: trackingId.toUpperCase(),
        status: "In Progress - Hearing Scheduled",
        lastUpdated: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        nextAction: "Court Hearing on " + new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        remarks: "All preliminary documents have been submitted. Awaiting the judge's review during the upcoming hearing."
      });
    }, 1500);
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // --- Fuse.js Initialization ---
  const fuse = useMemo(() => {
    return new Fuse(blogData, {
      keys: ['title', 'intro', 'category', 'tags'],
      threshold: 0.4,
      distance: 100,
      includeMatches: true,
    });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

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

  // --- Close blog dropdown on click outside ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (blogDropdownRef.current && !blogDropdownRef.current.contains(event.target as Node)) {
        setIsBlogDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (activeTab === "post" && selectedPost) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight <= 0) {
          setScrollProgress(100);
          return;
        }
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab, selectedPost]);

  useEffect(() => {
    if (selectedPost && !aiImages[selectedPost.id] && !isGeneratingImage) {
      handleGenerateAiImage();
    }
  }, [selectedPost]);

  const handleGenerateAiImage = async (postToGen?: any, index: number = 0) => {
    const post = postToGen || selectedPost;
    if (!post) return;

    const genKey = `${post.id}-${index}`;
    if (generatingIds.has(genKey)) return;

    setGeneratingIds(prev => new Set(prev).add(genKey));
    setIsGeneratingImage(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `A professional, high-quality editorial illustration depicting the legal concept: "${post.title}". 
      Context: ${post.intro}. 
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
        setAiImages(prev => {
          const currentImages = prev[post.id] || [];
          const updatedImages = [...currentImages];
          // If index is 0, we prepend to keep it as the main featured image
          if (index === 0) {
            return {
              ...prev,
              [post.id]: [newImageUrl, ...currentImages.filter(img => img !== newImageUrl)].slice(0, 5)
            };
          }
          // Otherwise update specific index
          updatedImages[index] = newImageUrl;
          return {
            ...prev,
            [post.id]: updatedImages.slice(0, 5)
          };
        });
      }
    } catch (error) {
      console.error("Image Generation Error:", error);
    } finally {
      setIsGeneratingImage(false);
      setGeneratingIds(prev => {
        const next = new Set(prev);
        next.delete(genKey);
        return next;
      });
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

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const getRelatedPosts = () => {
    if (!selectedPost) return [];
    return blogData
      .filter(post => post.category === selectedPost.category && post.id !== selectedPost.id)
      .slice(0, 5);
  };

  const handleReadMore = (post: any) => {
    setSelectedPost(post);
    setActiveAiImageIndex(0);
    setScrollProgress(0);
    setActiveTab("post");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedPost(null);
    setScrollProgress(0);
    setActiveTab("home");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-200 pb-20 md:pb-0 relative transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-white dark:bg-slate-900 sticky top-0 z-40 shadow-sm border-b border-slate-200 dark:border-slate-800 transition-all">
        {activeTab === "post" && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 overflow-hidden transition-colors">
            <motion.div 
              className="h-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${scrollProgress}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20, restDelta: 0.001 }}
            />
          </div>
        )}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => { handleBack(); setIsMobileMenuOpen(false); }}>
              <img 
                src="https://elawyersbd.com/wp-content/uploads/2026/03/Profile-1.jpg" 
                alt="E-Lawyers Icon" 
                className="h-9 w-9 md:h-10 md:w-10 rounded-md object-cover border border-slate-700" 
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col justify-center">
                <span className="font-bold text-xl tracking-wider leading-tight text-slate-900">E-LAWYERS</span>
                <span className="text-[11px] text-blue-600 font-medium tracking-wide">Legal & Business Consultancy Firm</span>
              </div>
            </div>

            {activeTab === "post" && (
              <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 bg-slate-50 dark:bg-slate-800 rounded-full border border-slate-100 dark:border-slate-700 transition-colors">
                <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Progress</div>
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 tabular-nums">{Math.round(scrollProgress)}%</div>
              </div>
            )}

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2 lg:space-x-4">
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                
                <div className="relative" ref={blogDropdownRef}>
                  <button 
                    onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)} 
                    className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition"
                  >
                    Law & Business Guide
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isBlogDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isBlogDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl overflow-hidden z-50 py-2"
                      >
                        <button 
                          onClick={() => {
                            handleBack();
                            setSelectedCategory("All");
                            setCurrentPage(1);
                            setIsBlogDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors"
                        >
                          All Topics
                        </button>
                        <div className="h-px bg-slate-100 dark:bg-slate-800 my-1" />
                        {categories.filter(c => c !== "All").map((cat, idx) => (
                          <button 
                            key={idx}
                            onClick={() => {
                              handleBack();
                              setSelectedCategory(cat);
                              setCurrentPage(1);
                              setIsBlogDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${selectedCategory === cat ? 'text-blue-600 bg-blue-50/50 dark:bg-blue-900/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600'}`}
                          >
                            {cat}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a href="https://client.elawyersbd.com/#/appointment" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition">Consultation</a>
                <button onClick={() => setActiveTab('tracker')} className={`px-3 py-2 rounded-md text-sm font-semibold transition ${activeTab === 'tracker' ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600'}`}>Track Case</button>
                <a href="https://elawyersbd.com" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition">About Us</a>
                <a href="https://client.elawyersbd.com" target="_blank" rel="noopener noreferrer" className="ml-2 lg:ml-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-bold text-white transition shadow-sm flex items-center gap-2">Client Portal</a>
              </div>
            </div>

            {/* Mobile Top Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-full transition-colors ${isMobileMenuOpen ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                <MoreVertical className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE BOTTOM NAVIGATION */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
        <div className="flex justify-around items-center h-16 pb-safe">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="flex flex-col items-center justify-center w-full h-full text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors"
          >
            {darkMode ? <Sun className="h-5 w-5 mb-1" /> : <Moon className="h-5 w-5 mb-1" />}
            <span className="text-[10px] font-semibold">{darkMode ? "Light" : "Dark"}</span>
          </button>
          <button onClick={() => { handleBack(); setIsMobileMenuOpen(false); }} className={`flex flex-col items-center justify-center w-full h-full transition-colors ${activeTab === 'home' && !isMobileMenuOpen ? 'text-blue-600' : 'text-slate-500 dark:text-slate-400 hover:text-blue-600'}`}>
            <Home className="h-5 w-5 mb-1" />
            <span className="text-[10px] font-semibold">Home</span>
          </button>
          <a href="https://client.elawyersbd.com/#/appointment" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col items-center justify-center w-full h-full text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors">
            <PhoneCall className="h-5 w-5 mb-1" />
            <span className="text-[10px] font-semibold">Consult</span>
          </a>
          <a href="https://client.elawyersbd.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col items-center justify-center w-full h-full text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors">
            <User className="h-5 w-5 mb-1" />
            <span className="text-[10px] font-semibold">Portal</span>
          </a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`flex flex-col items-center justify-center w-full h-full transition-colors ${isMobileMenuOpen ? 'text-blue-600' : 'text-slate-500 dark:text-slate-400 hover:text-blue-600'}`}>
            <MoreVertical className="h-5 w-5 mb-1" />
            <span className="text-[10px] font-semibold">More</span>
          </button>
        </div>
      </div>

      {/* MOBILE 'MORE' OVERLAY MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-[60] bg-white dark:bg-slate-950 flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 h-20 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://elawyersbd.com/wp-content/uploads/2026/03/Profile-1.jpg" 
                  alt="E-Lawyers Icon" 
                  className="h-9 w-9 rounded-md object-cover border border-slate-200 dark:border-slate-700" 
                  referrerPolicy="no-referrer" 
                />
                <div className="flex flex-col">
                  <span className="font-bold text-base tracking-wider text-slate-900 dark:text-white">E-LAWYERS</span>
                  <span className="text-[8px] text-blue-600 font-medium uppercase tracking-tighter">Legal & Business Consultancy</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsMobileSubMenuOpen(false);
                }} 
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {!isMobileSubMenuOpen ? (
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="flex flex-col space-y-2"
                >
                  <button 
                    onClick={() => {
                      handleBack();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 font-bold transition-all border border-transparent hover:border-blue-100 dark:hover:border-blue-900/30"
                  >
                    <Home className="h-5 w-5 mr-4 text-blue-500" /> Home
                  </button>

                  <button 
                    onClick={() => setIsMobileSubMenuOpen(true)}
                    className="flex items-center justify-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 font-bold transition-all border border-transparent hover:border-blue-100 dark:hover:border-blue-900/30"
                  >
                    <Tag className="h-5 w-5 text-blue-500" />
                    <span className="flex-1 text-left">Legal and Business Guidelines</span>
                    <ChevronRight className="h-5 w-5 text-slate-400" />
                  </button>

                  <button 
                    onClick={() => {
                      setActiveTab('tracker');
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 font-bold transition-all border border-transparent hover:border-blue-100 dark:hover:border-blue-900/30"
                  >
                    <Search className="h-5 w-5 mr-4 text-blue-500" /> Track Case
                  </button>

                  <a href="https://client.elawyersbd.com/#/appointment" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 font-bold transition-all border border-transparent hover:border-blue-100 dark:hover:border-blue-900/30">
                    <PhoneCall className="h-5 w-5 mr-4 text-blue-500" /> Book Consultation
                  </a>

                  <a href="https://elawyersbd.com" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 font-bold transition-all border border-transparent hover:border-blue-100 dark:hover:border-blue-900/30">
                    <Building className="h-5 w-5 mr-4 text-blue-500" /> About Us
                  </a>

                  <a href="https://client.elawyersbd.com" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-2xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-200 dark:shadow-none transition-all mt-4">
                    <User className="h-5 w-5 mr-4" /> Client Portal Login
                  </a>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="flex flex-col"
                >
                  <button 
                    onClick={() => setIsMobileSubMenuOpen(false)}
                    className="flex items-center text-blue-600 font-bold mb-6 px-2"
                  >
                    <ChevronLeft className="h-5 w-5 mr-1" /> Back to Menu
                  </button>
                  
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 px-2">Legal and Business Guidelines</h3>
                  
                  <div className="flex flex-col space-y-2">
                    <button 
                      onClick={() => {
                        handleBack();
                        setSelectedCategory("All");
                        setCurrentPage(1);
                        setIsMobileMenuOpen(false);
                        setIsMobileSubMenuOpen(false);
                      }}
                      className={`flex items-center justify-start gap-3 px-4 py-4 rounded-2xl text-sm font-bold transition-all border ${selectedCategory === "All" ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border-transparent hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                    >
                      {selectedCategory === "All" && <div className="h-2 w-2 rounded-full bg-white" />}
                      <span>All Topics</span>
                    </button>
                    {categories.filter(c => c !== "All").map((cat, idx) => (
                      <button 
                        key={idx}
                        onClick={() => {
                          handleBack();
                          setSelectedCategory(cat);
                          setCurrentPage(1);
                          setIsMobileMenuOpen(false);
                          setIsMobileSubMenuOpen(false);
                        }}
                        className={`flex items-center justify-start gap-3 px-4 py-4 rounded-2xl text-sm font-bold transition-all border ${selectedCategory === cat ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border-transparent hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                      >
                        {selectedCategory === cat && <div className="h-2 w-2 rounded-full bg-white" />}
                        <span className="text-left">{cat}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-8 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
              <div className="flex justify-center space-x-6">
                <button onClick={() => setDarkMode(!darkMode)} className="flex flex-col items-center text-slate-500 dark:text-slate-400">
                  <div className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-sm mb-2">
                    {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">{darkMode ? "Light" : "Dark"}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "home" && (
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-sm p-6 md:p-8 mb-8 text-center border border-slate-200 dark:border-slate-800 transition-colors"
            >
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Bangladesh Law & Compliance Guide</h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">Your definitive portal for corporate, legal, and statutory regulations in Bangladesh. Explore critical domains to ensure your business remains compliant.</p>
              <div className="relative max-w-xl ml-0 md:mx-auto" ref={suggestionRef}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Search className="h-5 w-5 text-slate-400 dark:text-slate-500" /></div>
                <input 
                  type="text" 
                  className="block w-full pl-10 pr-3 py-3 md:py-4 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm text-sm bg-white dark:bg-slate-800 dark:text-white transition-colors" 
                  placeholder="Search legal topics, corporate compliance, tax..." 
                  value={searchQuery} 
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                    setCurrentPage(1);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                />
                
                {/* Suggestions Dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute z-50 w-full mt-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 transition-colors">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion.id}
                        className="w-full text-left px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 last:border-0 transition-colors"
                        onClick={() => {
                          setSearchQuery(suggestion.title);
                          setShowSuggestions(false);
                          handleReadMore(suggestion);
                        }}
                      >
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-2 rounded-md transition-colors">
                          <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">{suggestion.title}</p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">{suggestion.category}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
            <div className="bg-white dark:bg-slate-900/50 rounded-[2.5rem] p-6 md:p-10 shadow-2xl shadow-blue-100/50 dark:shadow-none border border-slate-100 dark:border-slate-800 mb-16 text-center">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Explore Legal & Business Categories</h2>
              <div className="grid grid-cols-4 gap-2 md:gap-4">
                {categories.map((cat, index) => (
                  <motion.button 
                    key={index} 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCurrentPage(1);
                    }} 
                    className={`px-2 md:px-4 py-3 md:py-4 rounded-2xl text-[9px] md:text-sm font-bold transition-all shadow-sm border flex items-center justify-center text-center h-full min-h-[60px] md:min-h-[80px] ${selectedCategory === cat ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200 dark:shadow-none' : 'bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border-transparent hover:bg-white dark:hover:bg-slate-800 hover:border-blue-200 dark:hover:border-blue-700'}`}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>
            </div>
            {currentPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentPosts.map((post, idx) => (
                  <motion.div 
                    key={post.id} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleReadMore(post)} 
                    className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer"
                  >
                    <div className="h-48 w-full overflow-hidden border-b border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 transition-colors relative group/img">
                      <img 
                        src={aiImages[post.id]?.[0] || post.images[0]} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (target.src !== post.images[0] && !aiImages[post.id]?.[0] && !generatingIds.has(`${post.id}-0`)) {
                            handleGenerateAiImage(post, 0);
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none" />
                      {generatingIds.has(`${post.id}-0`) && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <Loader2 className="h-6 w-6 animate-spin text-white" />
                        </div>
                      )}
                    </div>
                    <div className="p-5 md:p-6 flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 text-[10px] sm:text-xs font-semibold rounded-full transition-colors">{post.category}</span>
                        <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center"><Clock className="h-3 w-3 mr-1" /> {post.readTime}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{post.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">{post.intro}</p>
                    </div>
                    <div className="px-5 md:px-6 py-4 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 mt-auto flex items-center justify-between transition-colors">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 font-bold text-xs mr-2 border border-slate-300 dark:border-slate-700 transition-colors">{post.author.charAt(0)}</div>
                        <div className="flex flex-col">
                          <span className="text-xs font-medium text-slate-900 dark:text-slate-200 line-clamp-1">{post.author}</span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-500">{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:text-blue-800 dark:group-hover:text-blue-300 transition pl-2">Read <ChevronRight className="h-4 w-4 ml-1" /></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-slate-300 dark:text-slate-700 mx-auto mb-4 transition-colors" />
                <h3 className="text-lg font-medium text-slate-900 dark:text-white transition-colors">No guides found</h3>
                <p className="text-slate-500 dark:text-slate-400 transition-colors">Try adjusting your search or category filter.</p>
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12 pb-20">
                <button 
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 disabled:opacity-30 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 dark:text-white" />
                </button>
                
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={`w-10 h-10 rounded-lg font-bold transition-all ${currentPage === i + 1 ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none' : 'hover:bg-slate-50 dark:hover:bg-slate-800 dark:text-slate-400'}`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button 
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 disabled:opacity-30 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <ChevronRight className="h-5 w-5 dark:text-white" />
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === "post" && selectedPost && (
          <div className="animate-in fade-in duration-300">
            <button onClick={handleBack} className="flex items-center text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium mb-6 transition-colors"><ArrowLeft className="h-4 w-4 mr-2" /> Back to Guides</button>
            <article className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors">
              <div className="bg-slate-900 dark:bg-slate-950 px-5 py-8 md:px-12 md:py-16 text-white">
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-200 text-xs md:text-sm font-semibold rounded-full mb-6 border border-blue-400/30">{selectedPost.category}</span>
                <h1 className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight">{selectedPost.title}</h1>
                <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">{selectedPost.intro}</p>
                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm text-slate-400 border-t border-slate-700 dark:border-slate-800 pt-6">
                  <div className="flex items-center"><User className="h-4 w-4 mr-1 md:mr-2" /> By <span className="text-slate-200 font-medium ml-1">{selectedPost.author}</span></div>
                  <div className="flex items-center"><Calendar className="h-4 w-4 mr-1 md:mr-2" /> Published on {selectedPost.date}</div>
                  <div className="flex items-center"><Clock className="h-4 w-4 mr-1 md:mr-2" /> {selectedPost.readTime}</div>
                </div>
              </div>

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
                        key={aiImages[selectedPost.id]?.[activeAiImageIndex] || selectedPost.images[activeAiImageIndex]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        src={aiImages[selectedPost.id]?.[activeAiImageIndex] || selectedPost.images[activeAiImageIndex]} 
                        alt="Legal Concept" 
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (!aiImages[selectedPost.id]?.[activeAiImageIndex] && !generatingIds.has(`${selectedPost.id}-${activeAiImageIndex}`)) {
                            handleGenerateAiImage(selectedPost, activeAiImageIndex);
                          }
                        }}
                      />
                    </AnimatePresence>
                    {generatingIds.has(`${selectedPost.id}-${activeAiImageIndex}`) && (
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center text-white">
                        <Loader2 className="h-10 w-10 animate-spin mb-4" />
                        <p className="text-sm font-medium">Generating Illustration...</p>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* AI Image Gallery Thumbnails */}
              <div className="flex justify-center gap-4 mt-6 px-4 overflow-x-auto py-2 scrollbar-hide max-w-full">
                {selectedPost.images.map((img: string, idx: number) => {
                  const isAiGenerated = !!aiImages[selectedPost.id]?.[idx];
                  const displayImg = aiImages[selectedPost.id]?.[idx] || img;
                  const isGenerating = generatingIds.has(`${selectedPost.id}-${idx}`);
                  const isActive = activeAiImageIndex === idx;
                  
                  return (
                    <div key={idx} className="relative group/thumb flex-shrink-0">
                      <button 
                        onClick={() => setActiveAiImageIndex(idx)}
                        className={`w-20 h-12 md:w-28 md:h-16 rounded-xl overflow-hidden border-2 transition-all relative shadow-sm ${isActive ? 'border-blue-600 ring-4 ring-blue-100 dark:ring-blue-900/30 scale-105 z-10' : 'border-slate-200 dark:border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-300 dark:hover:border-slate-700'}`}
                      >
                        <img src={displayImg} alt={`Gallery ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        {isGenerating && (
                          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center">
                            <Loader2 className="h-5 w-5 animate-spin text-white" />
                          </div>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="p-5 md:p-12 space-y-8 md:space-y-12">
                <section className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                  <div className="flex-shrink-0"><div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center"><BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" /></div></div>
                  <div><h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 mt-1 sm:mt-0">Official Guidelines & Regulations</h2><p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">{selectedPost.guidelines}</p></div>
                </section>
                <hr className="border-slate-100 dark:border-slate-800" />
                <section className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                  <div className="flex-shrink-0"><div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center"><Clock className="h-6 w-6 text-orange-600 dark:text-orange-400" /></div></div>
                  <div><h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 mt-1 sm:mt-0">Specific Deadlines</h2><p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">{selectedPost.deadlines}</p></div>
                </section>
                <hr className="border-slate-100 dark:border-slate-800" />
                <section className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                  <div className="flex-shrink-0"><div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"><Briefcase className="h-6 w-6 text-green-600 dark:text-green-400" /></div></div>
                  <div><h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 mt-1 sm:mt-0">Current Rates & Metrics</h2><p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">{selectedPost.rates}</p></div>
                </section>
                <hr className="border-slate-100 dark:border-slate-800" />
                <section className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                  <div className="flex-shrink-0"><div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center"><FileCheck className="h-6 w-6 text-purple-600 dark:text-purple-400" /></div></div>
                  <div><h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 mt-1 sm:mt-0">Mandatory Documents</h2><p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">{selectedPost.documents}</p></div>
                </section>
                <hr className="border-slate-100 dark:border-slate-800" />
                <section className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                  <div className="flex-shrink-0"><div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center"><Building className="h-6 w-6 text-indigo-600 dark:text-indigo-400" /></div></div>
                  <div className="w-full">
                    <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-6 mt-1 sm:mt-0 flex items-center gap-2">
                      <ListChecks className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      Step-by-Step Process
                    </h2>
                    <div className="relative space-y-8 pl-4 border-l-2 border-blue-100 dark:border-blue-900/50 ml-2">
                      {selectedPost.process.map((step: any, idx: number) => (
                        <div key={idx} className="relative group">
                          <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 group-hover:bg-blue-600 transition-colors z-10" />
                          <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all group-hover:border-blue-200 dark:group-hover:border-blue-800">
                            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1 block">Step {idx + 1}</span>
                            <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                <hr className="border-slate-100 dark:border-slate-800" />
                <section className="flex flex-col sm:flex-row gap-3 sm:gap-6 p-5 md:p-8 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-100 dark:border-red-900/30">
                  <div className="flex-shrink-0"><AlertCircle className="h-8 w-8 text-red-600 dark:text-red-500" /></div>
                  <div><h2 className="text-lg md:text-xl font-bold text-red-900 dark:text-red-300 mb-3 mt-1 sm:mt-0">Penalties & Legal Consequences</h2><p className="text-sm md:text-base text-red-800 dark:text-red-400 leading-relaxed">{selectedPost.penalties}</p></div>
                </section>

                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-200 dark:border-slate-800 transition-colors">
                  <div className="flex flex-wrap items-center gap-2">
                    <Tag className="h-4 w-4 md:h-5 md:w-5 text-slate-400 dark:text-slate-500" />
                    <span className="font-medium text-slate-700 dark:text-slate-300 mr-1 md:mr-2 text-sm md:text-base">Tags:</span>
                    {selectedPost.tags.map((tag: any, idx: number) => (<span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-[10px] md:text-xs font-medium hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer transition">{tag}</span>))}
                  </div>
                </div>
              </div>
            </article>

            {getRelatedPosts().length > 0 && (
              <div className="mt-10 md:mt-12">
                <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white transition-colors">Related Articles</h3>
                  <div className="flex gap-2">
                    <button onClick={() => scrollCarousel('left')} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button onClick={() => scrollCarousel('right')} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div 
                  ref={carouselRef}
                  className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 hide-scrollbar"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {getRelatedPosts().map((relatedPost) => (
                    <div 
                      key={relatedPost.id} 
                      onClick={() => handleReadMore(relatedPost)} 
                      className="min-w-[280px] sm:min-w-[320px] md:min-w-[350px] flex-shrink-0 snap-start bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-md transition-all cursor-pointer group"
                    >
                      <div className="h-40 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative group/img">
                        <img 
                          src={aiImages[relatedPost.id]?.[0] || relatedPost.images[0]} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            if (!aiImages[relatedPost.id]?.[0] && !generatingIds.has(`${relatedPost.id}-0`)) {
                              handleGenerateAiImage(relatedPost, 0);
                            }
                          }}
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider mb-2 block">{relatedPost.category}</span>
                        <h4 className="font-bold text-slate-900 dark:text-white text-base line-clamp-2 group-hover:text-blue-600 transition-colors">{relatedPost.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        {activeTab === "tracker" && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-blue-100/50 dark:shadow-none border border-slate-100 dark:border-slate-800 text-center">
              <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Track Your Case</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
                Enter your Case ID or Reference Number below to check the real-time status of your legal proceedings.
              </p>
              
              <form onSubmit={(e) => { e.preventDefault(); handleTrackCase(); }} className="max-w-md mx-auto relative">
                <input 
                  type="text" 
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder="e.g., EL-2026-8492" 
                  className="w-full pl-6 pr-32 py-4 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
                <button 
                  type="submit" 
                  disabled={isTracking}
                  className="absolute right-2 top-2 bottom-2 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-colors flex items-center justify-center disabled:opacity-70"
                >
                  {isTracking ? <Loader2 className="h-5 w-5 animate-spin" /> : "Track"}
                </button>
              </form>

              {trackingResult && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-10 text-left bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-700"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold mb-1">Case Reference</p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">{trackingResult.id}</p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold mb-1">Status</p>
                      <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold rounded-full">
                        {trackingResult.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-1">Last Updated</p>
                      <p className="text-sm text-slate-700 dark:text-slate-300">{trackingResult.lastUpdated}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-1">Next Hearing / Action</p>
                      <p className="text-sm text-slate-700 dark:text-slate-300">{trackingResult.nextAction}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-1">Remarks</p>
                      <p className="text-sm text-slate-700 dark:text-slate-300">{trackingResult.remarks}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-slate-900 dark:bg-black text-slate-400 py-10 text-center border-t border-slate-800 mt-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-lg mb-6 shadow-sm inline-block transition-colors">
            <img src="https://elawyersbd.com/wp-content/uploads/2024/12/Logo_E-Layers-02.png" alt="E-Lawyers Logo" className="h-10 md:h-12 w-auto object-contain" referrerPolicy="no-referrer" />
          </div>
          <p className="text-sm font-medium">© 2026 E-Lawyers. All rights reserved.</p>
          <p className="text-[10px] md:text-xs mt-3 text-slate-500 px-4 max-w-xl">Disclaimer: This guide provides general information and does not constitute formal legal advice.</p>
        </div>
      </footer>
    </div>
  );
}
