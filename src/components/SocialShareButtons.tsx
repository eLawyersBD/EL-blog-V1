import React from 'react';
import { Twitter, Facebook, Linkedin, Share2, MessageCircle, Mail } from 'lucide-react';

export const SocialShareButtons = ({ title, url, className = "", lightText = false }: { title: string, url: string, className?: string, lightText?: boolean }) => {
  const textColor = lightText ? "text-slate-300" : "text-slate-700 dark:text-slate-300";
  const iconColor = lightText ? "text-slate-400" : "text-slate-400 dark:text-slate-500";
  const buttonBg = lightText ? "bg-slate-800 text-slate-300" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`font-medium ${textColor} text-sm md:text-base flex items-center gap-2`}>
        <Share2 className={`h-4 w-4 md:h-5 md:w-5 ${iconColor}`} />
        Share:
      </span>
      <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')} className={`p-2 rounded-full ${buttonBg} hover:bg-[#1DA1F2] hover:text-white dark:hover:bg-[#1DA1F2] dark:hover:text-white transition-colors`} title="Share on Twitter">
        <Twitter className="h-4 w-4" />
      </button>
      <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')} className={`p-2 rounded-full ${buttonBg} hover:bg-[#4267B2] hover:text-white dark:hover:bg-[#4267B2] dark:hover:text-white transition-colors`} title="Share on Facebook">
        <Facebook className="h-4 w-4" />
      </button>
      <button onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank')} className={`p-2 rounded-full ${buttonBg} hover:bg-[#0077B5] hover:text-white dark:hover:bg-[#0077B5] dark:hover:text-white transition-colors`} title="Share on LinkedIn">
        <Linkedin className="h-4 w-4" />
      </button>
      <button onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + url)}`, '_blank')} className={`p-2 rounded-full ${buttonBg} hover:bg-[#25D366] hover:text-white dark:hover:bg-[#25D366] dark:hover:text-white transition-colors`} title="Share on WhatsApp">
        <MessageCircle className="h-4 w-4" />
      </button>
      <button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent('Check out this post: ' + url)}`, '_self')} className={`p-2 rounded-full ${buttonBg} hover:bg-slate-600 hover:text-white dark:hover:bg-slate-500 dark:hover:text-white transition-colors`} title="Share via Email">
        <Mail className="h-4 w-4" />
      </button>
    </div>
  );
};
