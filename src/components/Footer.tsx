import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ChevronRight, Youtube } from 'lucide-react';
import { categories, blogData } from '../data';

export const Footer = () => {
  const recentPosts = blogData.slice(0, 3);

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-400 pt-16 pb-8 border-t border-slate-800 mt-12 transition-colors relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          
          {/* About Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-block transition-colors">
              <img 
                src="https://elawyersbd.com/wp-content/uploads/2026/04/946c2587-e7b3-406c-beef-8c1a076de30b_1703870003__1_-removebg-preview.png" 
                alt="E-Lawyers Logo" 
                className="h-14 w-auto object-contain brightness-0 invert" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-400 dark:text-slate-500 pr-4">
              E-Lawyers provides comprehensive legal, corporate, and tax solutions. Our mission is to simplify complex legal processes and empower businesses with expert guidance and strategic advice in Bangladesh.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-800/50 text-slate-400 hover:bg-[#1DA1F2] hover:text-white hover:scale-110 transition-all duration-300" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-800/50 text-slate-400 hover:bg-[#4267B2] hover:text-white hover:scale-110 transition-all duration-300" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-800/50 text-slate-400 hover:bg-[#0077B5] hover:text-white hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-800/50 text-slate-400 hover:bg-[#E1306C] hover:text-white hover:scale-110 transition-all duration-300" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-800/50 text-slate-400 hover:bg-[#FF0000] hover:text-white hover:scale-110 transition-all duration-300" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Categories Section */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500 rounded-full inline-block"></span>
              Categories
            </h3>
            <ul className="space-y-3">
              {categories.filter(c => c !== "All").slice(0, 5).map((category, idx) => (
                <li key={idx}>
                  <a href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                    <ChevronRight className="h-3 w-3 mr-2 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-purple-500 rounded-full inline-block"></span>
              Recent Posts
            </h3>
            <ul className="space-y-5">
              {recentPosts.map((post, idx) => (
                <li key={idx} className="group cursor-pointer flex gap-3">
                  <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-slate-800">
                    <img 
                      src={post.images?.[0] || `https://images.unsplash.com/photo-${['1589829085413-56de8ae18c73', '1554224155-8d04cb21cd6c', '1664575602276-acd073f104c1'][idx]}?auto=format&fit=crop&w=100&q=80`} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <a href="#" className="block">
                      <h4 className="text-sm font-medium text-slate-300 group-hover:text-blue-400 transition-colors line-clamp-2 mb-1 leading-snug">
                        {post.title}
                      </h4>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        {post.date}
                      </span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-pink-500 rounded-full inline-block"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm group">
                <div className="p-2 rounded-lg bg-slate-800/50 text-blue-400 group-hover:bg-blue-500/20 transition-colors shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="mt-1.5 text-slate-400">144/1, G-5, bti Centara Grand, 144 Green Rd, Dhaka 1215</span>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <div className="p-2 rounded-lg bg-slate-800/50 text-green-400 group-hover:bg-green-500/20 transition-colors shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-slate-400">+88 01313-583838</span>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <div className="p-2 rounded-lg bg-slate-800/50 text-purple-400 group-hover:bg-purple-500/20 transition-colors shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <a href="mailto:info@eLawyersBD.com" className="text-slate-400 hover:text-white transition-colors">
                  info@eLawyersBD.com
                </a>
              </li>
            </ul>
            
            {/* Free Consultation Box */}
            <div className="mt-6">
              <a 
                href="https://client.elawyersbd.com/#/appointment" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-blue-900/20"
              >
                Free Consultation
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-slate-500">
            © {new Date().getFullYear()} E-Lawyers. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 max-w-xl text-center md:text-right">
            Disclaimer: This guide provides general information and does not constitute formal legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
};
