import React, { useState } from 'react';
import { FileText, CheckCircle, AlertCircle, Lightbulb, Scale, Calculator, FileCheck, ChevronRight, BookOpen, CalendarCheck, ListChecks, Building, PieChart } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { SocialShareButtons } from './SocialShareButtons';

const taxRateData = [
  {
    name: 'Public (>10% IPO)',
    'With Compliance': 20.0,
    'Without Compliance': 22.5,
  },
  {
    name: 'Public (<10% IPO)',
    'With Compliance': 22.5,
    'Without Compliance': 25.0,
  },
  {
    name: 'Non-Public',
    'With Compliance': 25.0,
    'Without Compliance': 27.5,
  },
  {
    name: 'OPC',
    'With Compliance': 20.0,
    'Without Compliance': 22.5,
  },
];

export default function CompanyTaxReturnPost() {
  const [lang, setLang] = useState<'en' | 'bn'>('bn');

  return (
    <div className="animate-in fade-in duration-500">
      {/* Language Switcher */}
      <div className="flex items-center gap-4 mb-8 bg-blue-50/50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/50">
        <span className="font-semibold text-slate-700 dark:text-slate-300 flex-1 text-sm md:text-base">
          Select Language / ভাষা নির্বাচন করুন:
        </span>
        <div className="flex gap-2">
          <button 
            onClick={() => setLang('en')}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/30'}`}
          >
            English
          </button>
          <button 
            onClick={() => setLang('bn')}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${lang === 'bn' ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/30'}`}
          >
            বাংলা
          </button>
        </div>
      </div>

      {lang === 'bn' ? (
        <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6 flex items-center gap-3">
            <FileText className="h-8 w-8" />
            বাংলাদেশে কোম্পানি আয়কর রিটার্ন দাখিলের সম্পূর্ণ গাইড (২০২৬)
          </h1>
          
          <div>
            <p className="mb-4"><strong>আধুনিক বাংলাদেশ অর্থনীতিতে কর্পোরেট কর পরিপালনের বিবর্তন</strong><br/>
            বাংলাদেশের রাজস্ব খাত বর্তমানে স্বাধীনতার পর সবচেয়ে তাৎপর্যপূর্ণ পরিবর্তনের মধ্য দিয়ে যাচ্ছে। ২০২৬ সালে স্বল্পোন্নত দেশের (LDC) তালিকা থেকে উত্তরণের প্রস্তুতি হিসেবে, অর্থনৈতিক স্থায়িত্ব নিশ্চিত করতে সরকার তার রাজস্ব আদায় ব্যবস্থাকে আধুনিকীকরণে অগ্রাধিকার দিয়েছে। দীর্ঘস্থায়ী আয়কর অধ্যাদেশ ১৯৮৪ বাতিল করে 'আয়কর আইন, ২০২৩' প্রণয়ন এই রূপান্তরের মূল ভিত্তি হিসেবে কাজ করছে। এই আইনি কাঠামোর অধীনে পরিচালিত কোম্পানিগুলোর জন্য ট্যাক্স কমপ্লায়েন্স বা কর পরিপালন এখন আর কেবল একটি সাধারণ প্রশাসনিক কাজ নয়; বরং এটি একটি কেন্দ্রীয় কৌশলগত স্তম্ভ যা মূলধন, আন্তর্জাতিক বাণিজ্য এবং আইনি বৈধতার নিশ্চয়তা দেয়।</p>
            
            <p>ডিজিটাল ট্যাক্স প্রশাসনের দিকে সরকারের এই পরিবর্তনের সবচেয়ে বড় প্রমাণ হলো জাতীয় রাজস্ব বোর্ডের (NBR) "রিটার্ন জমার প্রমাণপত্র" (PSR) ব্যবস্থার কঠোর বাস্তবায়ন, যা বর্তমানে ৪০টিরও বেশি প্রয়োজনীয় ব্যবসায়িক ও নাগরিক সেবার সাথে যুক্ত। ২০২৬ সালের অর্থনীতিতে, এনবিআর স্বচ্ছতা এবং অটোমেশন কাজে লাগিয়ে করের আওতা বাড়ানোর লক্ষ্য নির্ধারণ করেছে।</p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <BookOpen className="h-6 w-6" /> আয়কর আইন ২০২৩ এর অধীনে কোম্পানি ট্যাক্স রিটার্নের সংজ্ঞা
            </h2>
            <p className="mb-4">আয়কর আইন, ২০২৩ এর অধীনে, "কোম্পানি ট্যাক্স রিটার্ন" হলো একটি নির্দিষ্ট আয়বর্ষের জন্য কর্পোরেট সত্তার মোট আয়, অনুমোদনযোগ্য ব্যয়, সম্পদ, দায় এবং ফলস্বরূপ করের বাধ্যবাধকতার একটি বিধিবদ্ধ ঘোষণা। ব্যক্তিগত রিটার্নের মতো নয়, কোম্পানির রিটার্ন হলো একটি জটিল প্রযুক্তিগত দলিল যা আন্তর্জাতিক আর্থিক রিপোর্টিং মানদণ্ডের (IFRS) অধীনে প্রস্তুতকৃত অ্যাকাউন্টিং মুনাফাকে বাংলাদেশের কর আইনের সংজ্ঞায়িত করযোগ্য মুনাফার সাথে সমন্বয় করে।</p>
            <p>আইনের ধারা ২(৩১) এর অধীনে "কোম্পানি"-এর সংজ্ঞায় কেবল কোম্পানি আইন, ১৯৯৪ এর অধীনে নিবন্ধিত প্রতিষ্ঠানগুলোই নয়, বরং সংবিধিবদ্ধ সংস্থা, বিদেশি সমিতি এবং স্থায়ী প্রতিষ্ঠানের বিভিন্ন রূপও অন্তর্ভুক্ত রয়েছে।</p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <Scale className="h-6 w-6" /> আইনি প্রাসঙ্গিকতা এবং কর্পোরেট ফাইলিংয়ের বাধ্যতামূলক প্রকৃতি
            </h2>
            <p className="mb-4">বাংলাদেশে নিবন্ধিত সকল কর্পোরেট প্রতিষ্ঠানের জন্য ট্যাক্স রিটার্ন দাখিল করা সম্পূর্ণ বাধ্যতামূলক। কোম্পানিগুলোর জন্য এমন কোনো ন্যূনতম আয়ের সীমা নেই যার নিচে রিটার্ন দাখিলের বাধ্যবাধকতা মওকুফ হয়; নিবন্ধনের কাজ নিজেই একটি স্থায়ী পরিপালন প্রয়োজনীয়তা তৈরি করে।</p>
            
            <ul className="space-y-4 pl-2">
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>প্রাইভেট লিমিটেড কোম্পানি:</strong> বাংলাদেশে সবচেয়ে বেশি প্রচলিত। ব্যবসা সচল থাকুক বা না থাকুক, তাদের অবশ্যই অডিট করা আর্থিক বিবরণীসহ রিটার্ন জমা দিতে হবে।</span></li>
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>পাবলিক লিমিটেড কোম্পানি:</strong> স্টক এক্সচেঞ্জে তালিকাভুক্ত প্রতিষ্ঠানগুলোর জন্য আরও উচ্চতর প্রকাশনার প্রয়োজনীয়তা রয়েছে, যার মধ্যে BSEC-তে জমাকৃত ত্রৈমাসিক রিপোর্টের সাথে করের তথ্যের সমন্বয় অন্তর্ভুক্ত।</span></li>
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>ব্রাঞ্চ এবং লিয়াজোঁ অফিস:</strong> বাংলাদেশে পরিচালিত বিদেশি প্রতিষ্ঠানগুলোকে কর্পোরেট করদাতা হিসেবে বিবেচনা করা হয়। দ্বৈত কর পরিহার চুক্তি (DTAA) দ্বারা নিয়ন্ত্রিত হয়ে তারা বাংলাদেশে অর্জিত আয় রিপোর্ট করতে বাধ্য।</span></li>
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>এক ব্যক্তি কোম্পানি (OPC):</strong> একক উদ্যোক্তাদের জন্য ডিজাইন করা হলেও, আইনগতভাবে OPC একটি কোম্পানি এবং একেও বৃহৎ কর্পোরেশনগুলোর মতো কঠোর অডিট ও ফাইলিং মানদণ্ড মেনে চলতে হয়।</span></li>
            </ul>

            <div className="bg-blue-50/50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 rounded-r-xl my-8">
              <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                <Building className="h-5 w-5" /> কর্পোরেট এবং ব্যক্তিগত কমপ্লায়েন্সের ছেদবিন্দু
              </h3>
              <p className="text-blue-900/80 dark:text-blue-200/80 text-sm md:text-base">
                ২০২৬ সালে ব্যবসায়ীদের জন্য একটি গুরুত্বপূর্ণ বিষয় হলো কোম্পানির করের অবস্থা এবং এর পরিচালক ও শেয়ারহোল্ডারদের ব্যক্তিগত পরিপালনের মধ্যে ক্রমবর্ধমান সম্পর্ক। পরিচালকদের তাদের বোর্ডে অবস্থান বজায় রাখতে এবং শেয়ারহোল্ডারদের অতিরিক্ত উৎসে কর (WHT) এড়াতে লভ্যাংশ গ্রহণের জন্য "রিটার্ন জমার প্রমাণপত্র" (PSR) বাধ্যতামূলক করা হয়েছে। কোনো কোম্পানি খেলাপি হলে, তার পরিচালকরা ব্যক্তিগতভাবে ট্রেড লাইসেন্স নবায়ন বা ৫ লক্ষ টাকার বেশি ব্যাংক ঋণ প্রাপ্তি থেকে বঞ্চিত হতে পারেন।
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <CalendarCheck className="h-6 w-6" /> ২০২৬ সালের পরিপালন ক্যালেন্ডার: ট্যাক্স ডে এবং সময়সীমা
            </h2>
            <p className="mb-4">"ট্যাক্স ডে" বা কর দিবস হলো সেই আইনি সময়সীমা যার মধ্যে একজন করদাতাকে "খেলাপি করদাতা" (Assessee in Default) হিসেবে পরিগণিত হওয়া এড়াতে রিটার্ন জমা দিতে হয়। আয়বর্ষ শেষ হওয়ার পরবর্তী নবম মাসের ১৫তম দিনকে কোম্পানির জন্য ট্যাক্স ডে হিসেবে সংজ্ঞায়িত করা হয়। যেহেতু বাংলাদেশের সাধারণ আয়বর্ষ ৩০ জুন শেষ হয়, তাই বেশিরভাগ কোম্পানির জন্য ডিফল্ট সময়সীমা হলো পরবর্তী বছরের ১৫ মার্চ। তবে, ২০২৩ সালের আইনের নতুন প্রয়োজনীয়তার সাথে খাপ খাইয়ে নেওয়ার জটিলতা বিবেচনা করে, এনবিআর ২০২৫-২৬ করবর্ষের সময়সীমা <strong>১৫ এপ্রিল ২০২৬</strong> পর্যন্ত বৃদ্ধি করেছে।</p>

            <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <tr>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">প্রতিষ্ঠানের ধরন</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">সাধারণ আয়বর্ষ</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">ডিফল্ট ট্যাক্স ডে</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">২০২৬ সালের বিশেষ সময়সীমা</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">সাধারণ কোম্পানি</td>
                    <td className="p-4">১ জুলাই – ৩০ জুন</td>
                    <td className="p-4">১৫ মার্চ</td>
                    <td className="p-4 font-bold text-blue-600 dark:text-blue-400">১৫ এপ্রিল, ২০২৬</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">ব্যাংক/বীমা/আর্থিক প্রতিষ্ঠান</td>
                    <td className="p-4">১ জানুয়ারি – ৩১ ডিসেম্বর</td>
                    <td className="p-4">১৫ সেপ্টেম্বর</td>
                    <td className="p-4 font-bold text-blue-600 dark:text-blue-400">১৫ সেপ্টেম্বর, ২০২৬</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">বিদেশি সাবসিডিয়ারি</td>
                    <td className="p-4">প্যারেন্ট কোম্পানির অনুরূপ</td>
                    <td className="p-4">পরিবর্তনশীল</td>
                    <td className="p-4 font-bold text-blue-600 dark:text-blue-400">এনবিআর এর অনুমোদন অনুযায়ী</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <ListChecks className="h-6 w-6" /> কৌশলগত প্রস্তুতি: কর্পোরেট ফাইলিং চেকলিস্ট
            </h2>
            <p className="mb-4"><strong>অডিট করা আর্থিক বিবরণী প্রস্তুতি:</strong> বর্তমানে কোনো কোম্পানির পক্ষে কেবল অভ্যন্তরীণ অ্যাকাউন্টের ভিত্তিতে ট্যাক্স রিটার্ন জমা দেওয়া সম্ভব নয়। প্রতিটি নিবন্ধিত কোম্পানিকে অবশ্যই ICAB নিবন্ধিত চার্টার্ড অ্যাকাউন্ট্যান্ট ফার্ম দ্বারা বিধিবদ্ধ অডিট করাতে হবে। বর্তমান ব্যবস্থার একটি যুগান্তকারী উন্নয়ন হলো প্রতিটি অডিট রিপোর্টে <strong>ডিজিটাল ভেরিফিকেশন কোড (DVC)</strong> অন্তর্ভুক্তির বাধ্যবাধকতা। বৈধ DVC ছাড়া এনবিআর স্বয়ংক্রিয়ভাবে যেকোনো কর্পোরেট রিটার্ন প্রত্যাখ্যান করবে。</p>
            
            <p className="mb-4"><strong>করযোগ্য আয় বনাম অ্যাকাউন্টিং মুনাফা গণনা:</strong> অ্যাকাউন্টিং মুনাফাকে করযোগ্য আয়ের সাথে সমন্বয় করা রিটার্ন প্রস্তুতির সবচেয়ে প্রযুক্তিগত পর্যায়। করদাতাদের আইনের ৫৫ ধারার অধীনে "অননুমোদিত ব্যয়" (Inadmissible expenses) চিহ্নিত করতে হবে এবং সেগুলো মুনাফার সাথে যোগ করতে হবে (যেমন- অবচয় সমন্বয়, কর্মীদের ভাতায় সীমা বা Perquisite Caps, এবং রয়্যালটি ফি)।</p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <Building className="h-6 w-6" /> ব্যাংকিং চ্যানেলের বাধ্যবাধকতা: ৫৫ ধারার প্রয়োগ
            </h2>
            <p className="mb-4">২০২৩ সালের আইন লেনদেনের আনুষ্ঠানিকীকরণের ওপর অভূতপূর্ব জোর দিয়েছে। কোনো কাঁচামাল বা সাধারণ ব্যয়ের জন্য ৫ লক্ষ টাকার বেশি একক লেনদেন অবশ্যই ব্যাংকিং চ্যানেলের (ব্যাংক ট্রান্সফার, ক্রসড চেক বা MFS) মাধ্যমে করতে হবে। দ্বিতীয়ত, একটি কোম্পানির মোট বার্ষিক ব্যয়ের ক্ষেত্রেও এটি প্রযোজ্য।</p>
            
            <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <tr>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">ব্যয়ের খাত</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">ব্যাংকিং চ্যানেলের শর্ত</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">পরিপালনে ব্যর্থতার প্রভাব</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">কাঁচামাল ক্রয়</td>
                    <td className="p-4">৫ লক্ষ টাকার বেশি লেনদেন</td>
                    <td className="p-4 text-red-600 dark:text-red-400">সরাসরি ব্যয় অননুমোদিত (Disallowance)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">সাধারণ ব্যয়</td>
                    <td className="p-4">মোট বার্ষিক ব্যয়ের ৫০% এর বেশি</td>
                    <td className="p-4 text-red-600 dark:text-red-400">নগদ অর্থের ২৫% অননুমোদিত হবে</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">বেতন ও বাড়ি ভাড়া</td>
                    <td className="p-4">১০০% ব্যাংকের মাধ্যমে (কিছু ব্যতিক্রম বাদে)</td>
                    <td className="p-4 text-red-600 dark:text-red-400">সম্পূর্ণ ব্যয় অননুমোদিত হবে</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <PieChart className="h-6 w-6" /> ২০২৬ সালে কর্পোরেট করের হার
            </h2>
            <p className="mb-4">সরকার আরও প্রতিযোগিতামূলক ব্যবসায়িক পরিবেশ গড়ে তোলার লক্ষ্যে কর্পোরেট করের হার ক্রমান্বয়ে হ্রাস করেছে, বিশেষ করে যারা স্বচ্ছতা বজায় রাখে। শর্তসাপেক্ষে (যেমন ব্যাংকিং চ্যানেল ব্যবহার) করের হারে ছাড় পাওয়া যায়।</p>

            <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <tr>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">করদাতার ধরন</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">পরিপালনসহ করের হার</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">পরিপালন ব্যতীত করের হার</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">পাবলিকলি ট্রেডেড (IPO &gt; 10% শেয়ার)</td>
                    <td className="p-4 font-mono text-green-600 dark:text-green-400">২০.০%</td>
                    <td className="p-4 font-mono text-red-600 dark:text-red-400">২২.৫%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">পাবলিকলি ট্রেডেড (IPO &lt; 10% শেয়ার)</td>
                    <td className="p-4 font-mono text-green-600 dark:text-green-400">২২.৫%</td>
                    <td className="p-4 font-mono text-red-600 dark:text-red-400">২৫.০%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">নন-পাবলিকলি ট্রেডেড কোম্পানি</td>
                    <td className="p-4 font-mono text-green-600 dark:text-green-400">২৫.০%</td>
                    <td className="p-4 font-mono text-red-600 dark:text-red-400">২৭.৫%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">এক ব্যক্তি কোম্পানি (OPC)</td>
                    <td className="p-4 font-mono text-green-600 dark:text-green-400">২০.০%</td>
                    <td className="p-4 font-mono text-red-600 dark:text-red-400">২২.৫%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">তালিকাভুক্ত ব্যাংক ও আর্থিক প্রতিষ্ঠান</td>
                    <td className="p-4 font-mono text-slate-600 dark:text-slate-400">৩৭.৫%</td>
                    <td className="p-4 font-mono text-slate-600 dark:text-slate-400">৩৭.৫%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">মোবাইল ফোন অপারেটর (অতালিকাভুক্ত)</td>
                    <td className="p-4 font-mono text-slate-600 dark:text-slate-400">৪৫.০%</td>
                    <td className="p-4 font-mono text-slate-600 dark:text-slate-400">৪৫.০%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <AlertCircle className="h-6 w-6" /> পরিপালন কেন গুরুত্বপূর্ণ এবং জরিমানাসমূহ
            </h2>
            <p className="mb-4">সঠিক সময়ে রিটার্ন দিলে ব্যাংক ঋণ, আন্তর্জাতিক বাণিজ্য (IRC/ERC নবায়ন) এবং সরকারি টেন্ডারে অংশগ্রহণের সুবিধা পাওয়া যায়। অন্যদিকে, ১৫ এপ্রিল ২০২৬ এর সময়সীমা মিস করলে ১৭৪ ধারার অধীনে জরিমানা প্রযোজ্য হবে: সর্বশেষ নিরূপিত আয়ের ওপর ধার্যকৃত করের ১০% এককালীন জরিমানা (কোম্পানির জন্য ন্যূনতম ৫,০০০ টাকা), প্রতিদিন ৫০ টাকা হারে অতিরিক্ত জরিমানা এবং ঘাটতি করের ওপর মাসে ২% হারে সুদ। এছাড়াও, ভ্যাট (VAT) পরিপালনে ব্যর্থ হলে মাসিক ২% হারে সুদ এবং ১০,০০০ টাকার বেশি জরিমানা হতে পারে।</p>
            <p className="mb-4">এছাড়া, প্রতিটি কোম্পানিকে তার মোট প্রাপ্তির (Gross Receipts) ওপর ভিত্তি করে <strong>ন্যূনতম কর (Minimum Tax)</strong> দিতে হয়। সাধারণ কোম্পানির ক্ষেত্রে এই হার টার্নওভারের ১.০%।</p>
            
            <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mt-8 mb-4 border-t border-slate-200 dark:border-slate-700 pt-6 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" /> কৌশলগত স্পটলাইট: ই-লইয়ার্স (E-Lawyers) এবং ডিজিটাল ট্যাক্স সলিউশন
            </h3>
            <p className="mb-4">আয়কর আইন ২০২৩-এর ক্রমবর্ধমান জটিলতার কারণে পেশাদার আইনি ও কর সেবার দিকে ঝোঁকা এখন অপরিহার্য। <strong>ই-লইয়ার্স (E-Lawyers)</strong> এর মতো ডিজিটাল প্ল্যাটফর্মগুলো DVC, A-Challan এবং TDS সার্টিফিকেটের স্বয়ংক্রিয় যাচাইকরণ, ৫৫ ধারার প্রি-ফাইলিং অডিট এবং এনবিআর আপিলে বিশেষজ্ঞ প্রতিনিধিত্ব প্রদান করে। ব্যবসায়ীদের জন্য, একজন পেশাদার কর পরামর্শদাতার ফি "খেলাপি করদাতা" হওয়ার ঝুঁকির তুলনায় অতি সামান্য একটি বিনিয়োগ।</p>

            <p>উপসংহারে, বাংলাদেশে কোম্পানি ট্যাক্স রিটার্ন দাখিল করা এখন আর নিছক একটি রুটিন কাজ নয়; বরং দ্রুত আধুনিকীকরণ হওয়া অর্থনীতিতে এটি কর্পোরেট কৌশলের একটি গুরুত্বপূর্ণ উপাদান। ১৫ এপ্রিল ২০২৬ এর সময়সীমা পূরণ করে এবং সকল লেনদেনের সঠিক নথিপত্র বজায় রাখার মাধ্যমে, কোম্পানিগুলো তাদের আইনি বৈধতা রক্ষা করতে এবং এলডিসি উত্তরণ-পরবর্তী যুগে প্রবৃদ্ধির জন্য নিজেদের প্রস্তুত করতে সক্ষম হবে।</p>
          </div>
        </div>
      ) : (
        <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6 flex items-center gap-3">
            <FileText className="h-8 w-8" />
            The Complete Guide to Company Tax Return Filing in Bangladesh (2026)
          </h1>
          
          <div>
            <p className="mb-4"><strong>The Evolution of Corporate Tax Compliance in the Modern Bangladesh Economy</strong><br/>
            The fiscal landscape of Bangladesh is currently undergoing its most significant transformation since the country's independence. As the nation prepares for its graduation from the Least Developed Country (LDC) status in 2026, the government has prioritized the modernization of its revenue collection mechanisms to ensure economic sustainability. The enactment of the Income Tax Act, 2023, which repealed the long-standing Income-tax Ordinance of 1984, serves as the cornerstone of this transition. For companies operating within this jurisdiction, compliance is no longer a peripheral administrative task but a central strategic pillar that dictates access to capital, international trade, and legal standing.</p>
            
            <p>The shift toward a digital-first tax administration is evident in the National Board of Revenue’s (NBR) aggressive implementation of the "Proof of Submission of Return" (PSR) system, which now links tax compliance to over forty essential business and civic services. In the evolving economy of 2026, the NBR seeks to broaden the tax base by leveraging transparency and automation, moving away from discretionary assessment methods toward a robust self-assessment regime.</p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <BookOpen className="h-6 w-6" /> Defining the Company Tax Return Under the Income Tax Act 2023
            </h2>
            <p className="mb-4">Under the Income Tax Act, 2023, a "Company Tax Return" is defined as a comprehensive statutory declaration of a corporate entity's total income, allowable expenses, assets, liabilities, and the resulting tax obligation for a specific income year. Unlike individual filings, which may focus on personal wealth and salary, a company return is a sophisticated technical document that reconciles accounting profits—prepared under International Financial Reporting Standards (IFRS)—with taxable profits as defined by Bangladeshi tax law.</p>
            <p>The legal definition of a "company" under Section 2(31) of the Act is broad, encompassing not only entities registered under the Companies Act, 1994, but also statutory bodies, foreign associations, and various forms of permanent establishments.</p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <Scale className="h-6 w-6" /> Legal Relevance and the Mandatory Nature of Corporate Filing
            </h2>
            <p className="mb-4">The obligation to file a tax return in Bangladesh is absolute for all registered corporate entities. There is no minimum income threshold below which a company is exempt from filing; the act of registration itself creates a permanent compliance requirement.</p>
            
            <ul className="space-y-4 pl-2">
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>Private Limited Companies:</strong> These are the most prevalent forms of business in Bangladesh. They are required to submit returns supported by audited financial statements, regardless of whether they have carried out active business during the year.</span></li>
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>Public Limited Companies:</strong> Entities listed on the stock exchange face even higher disclosure requirements, including the need to reconcile their tax filings with quarterly reports submitted to the Bangladesh Securities and Exchange Commission (BSEC).</span></li>
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>Branch and Liaison Offices:</strong> Foreign establishments operating in Bangladesh are treated as corporate taxpayers. They must report income that accrues, arises, or is received within the country, often governed by Double Taxation Avoidance Agreements (DTAA).</span></li>
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>One Person Companies (OPC):</strong> While designed for individual entrepreneurs, the OPC is legally a company and must adhere to the same rigorous audit and filing standards as larger corporations.</span></li>
            </ul>

            <div className="bg-blue-50/50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 rounded-r-xl my-8">
              <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                <Building className="h-5 w-5" /> Intersection Between Corporate and Individual Compliance
              </h3>
              <p className="text-blue-900/80 dark:text-blue-200/80 text-sm md:text-base">
                A critical insight for business owners in 2026 is the growing intersection between a company’s tax status and the personal compliance of its directors and shareholders. The "Proof of Submission of Return" (PSR) has become a prerequisite for directors to maintain their board positions and for shareholders to receive dividends without excessive withholding tax. If a company is found to be non-compliant, its directors may be personally barred from renewing their trade licenses or obtaining bank loans exceeding BDT 500,000.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <CalendarCheck className="h-6 w-6" /> The 2026 Compliance Calendar: Understanding Tax Day and Extensions
            </h2>
            <p className="mb-4">The "Tax Day" is the legal deadline by which a taxpayer must submit their return to avoid being classified as an "Assessee in Default". For companies, the Tax Day is generally defined as the 15th day of the ninth month following the end of the income year. Given that the standard income year in Bangladesh ends on June 30, the default deadline for most companies is March 15 of the following year. However, recognizing the complexities involved in transitioning to the 2023 Act’s new requirements, the NBR has recently issued a notification extending the deadline for the current assessment year to <strong>April 15, 2026</strong>.</p>

            <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <tr>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">Entity Type</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">Standard Income Year</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">Default Tax Day</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">2026 Special Deadline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">General Companies</td>
                    <td className="p-4">July 1 – June 30</td>
                    <td className="p-4">March 15</td>
                    <td className="p-4 font-bold text-blue-600 dark:text-blue-400">April 15, 2026</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">Banks/Insurance/FI</td>
                    <td className="p-4">January 1 – December 31</td>
                    <td className="p-4">September 15</td>
                    <td className="p-4 font-bold text-blue-600 dark:text-blue-400">September 15, 2026</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">Foreign Subsidiaries</td>
                    <td className="p-4">Parent Aligned</td>
                    <td className="p-4">Variable</td>
                    <td className="p-4 font-bold text-blue-600 dark:text-blue-400">Per NBR Approval</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <ListChecks className="h-6 w-6" /> Strategic Preparation: The Corporate Filing Checklist
            </h2>
            <p className="mb-4"><strong>Preparation of Audited Financial Statements:</strong> It is no longer possible for a company to submit a tax return based on internal accounts alone. Every registered company must undergo a statutory audit by a firm of Chartered Accountants registered with the ICAB. A landmark development in the current regime is the mandatory inclusion of a <strong>Digital Verification Code (DVC)</strong> on every audit report. The NBR will automatically reject any corporate return that lacks a valid DVC.</p>
            
            <p className="mb-4"><strong>Calculation of Taxable Income vs. Accounting Profit:</strong> The reconciliation of accounting profit to taxable income is the most technical phase of return preparation. Taxpayers must identify "inadmissible expenses" under Section 55 of the Act and add them back to the profit (such as depreciation adjustments, perquisite caps, and royalty restrictions).</p>

            <div className="overflow-x-auto my-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <tr>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">Required Document</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">Purpose</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">Compliance Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium text-slate-900 dark:text-slate-100">Audited Financial Statements</td>
                    <td className="p-4 text-slate-700 dark:text-slate-300">Provides the baseline accounting profit for the fiscal year.</td>
                    <td className="p-4 text-slate-600 dark:text-slate-400">Must include a valid Digital Verification Code (DVC) from an ICAB-registered firm.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium text-slate-900 dark:text-slate-100">Tax Computation Sheet</td>
                    <td className="p-4 text-slate-700 dark:text-slate-300">Reconciles accounting profit with taxable income.</td>
                    <td className="p-4 text-slate-600 dark:text-slate-400">Must clearly detail all Section 55 inadmissible expenses and depreciation schedules.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium text-slate-900 dark:text-slate-100">TDS/AIT Challans & Certificates</td>
                    <td className="p-4 text-slate-700 dark:text-slate-300">Proof of tax deducted or collected at source.</td>
                    <td className="p-4 text-slate-600 dark:text-slate-400">Original challans or verified certificates are mandatory for claiming tax credits.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium text-slate-900 dark:text-slate-100">Bank Statements</td>
                    <td className="p-4 text-slate-700 dark:text-slate-300">Verifies cash flows and banking channel compliance.</td>
                    <td className="p-4 text-slate-600 dark:text-slate-400">Required for the full income year to substantiate high-value transactions.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium text-slate-900 dark:text-slate-100">Previous Year's Assessment Order</td>
                    <td className="p-4 text-slate-700 dark:text-slate-300">Reference for carry-forward losses and unabsorbed depreciation.</td>
                    <td className="p-4 text-slate-600 dark:text-slate-400">Ensure consistency with previously declared and assessed figures.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-center my-10">
            <SocialShareButtons title="Company Tax Return Filing" url={window.location.href} />
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <Building className="h-6 w-6" /> The Banking Channel Mandate: Navigating Section 55 Disallowances
            </h2>
            <p className="mb-4">The 2023 Act has placed an unprecedented emphasis on the formalization of transactions. Section 55 of the Act serves as the primary mechanism for penalizing cash-based business operations through expense disallowances. For the 2025-2026 assessment year, companies must navigate two distinct but related banking channel rules.</p>
            
            <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <tr>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">Expenditure Category</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">Banking Channel Condition</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">Impact of Non-Compliance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">Raw Materials</td>
                    <td className="p-4">Transactions &gt; BDT 500,000</td>
                    <td className="p-4 text-red-600 dark:text-red-400">Immediate Disallowance</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">General Expenses</td>
                    <td className="p-4">&gt; 50% of total annual expenses</td>
                    <td className="p-4 text-red-600 dark:text-red-400">25% of cash amount disallowed</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">Salary & Rent</td>
                    <td className="p-4">100% via Bank (with exceptions)</td>
                    <td className="p-4 text-red-600 dark:text-red-400">Total Disallowance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <PieChart className="h-6 w-6" /> Corporate Tax Rates in 2026: A Comparative Analysis
            </h2>
            <p className="mb-4">The government has gradually reduced corporate tax rates to foster a more competitive business environment, particularly for those who comply with transparency mandates. The corporate tax rate a company pays is often "conditional" on its banking compliance.</p>

            <div className="my-8 h-80 w-full bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-4 shadow-sm">
              <h3 className="text-center font-semibold text-slate-800 dark:text-slate-200 mb-4">Corporate Tax Rates by Company Type & Compliance (%)</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={taxRateData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 25,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#64748b', fontSize: 12 }} 
                    tickLine={false}
                    axisLine={{ stroke: '#cbd5e1' }}
                    interval={0}
                    angle={-15}
                    textAnchor="end"
                  />
                  <YAxis 
                    tick={{ fill: '#64748b', fontSize: 12 }} 
                    tickLine={false}
                    axisLine={{ stroke: '#cbd5e1' }}
                    domain={[0, 30]}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                    itemStyle={{ fontWeight: 500 }}
                    formatter={(value) => [`${value}%`, undefined]}
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Bar dataKey="With Compliance" fill="#16a34a" radius={[4, 4, 0, 0]} maxBarSize={50} />
                  <Bar dataKey="Without Compliance" fill="#dc2626" radius={[4, 4, 0, 0]} maxBarSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <tr>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">Category of Taxpayer</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">Rate with Compliance</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">Rate without Compliance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">Publicly Traded (IPO &gt; 10% Shares)</td>
                    <td className="p-4 font-mono text-green-600 dark:text-green-400">20.0%</td>
                    <td className="p-4 font-mono text-red-600 dark:text-red-400">22.5%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">Publicly Traded (IPO &lt; 10% Shares)</td>
                    <td className="p-4 font-mono text-green-600 dark:text-green-400">22.5%</td>
                    <td className="p-4 font-mono text-red-600 dark:text-red-400">25.0%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">Non-Publicly Traded Company</td>
                    <td className="p-4 font-mono text-green-600 dark:text-green-400">25.0%</td>
                    <td className="p-4 font-mono text-red-600 dark:text-red-400">27.5%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">One Person Company (OPC)</td>
                    <td className="p-4 font-mono text-green-600 dark:text-green-400">20.0%</td>
                    <td className="p-4 font-mono text-red-600 dark:text-red-400">22.5%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">Listed Banks & Financial Institutions</td>
                    <td className="p-4 font-mono text-slate-600 dark:text-slate-400">37.5%</td>
                    <td className="p-4 font-mono text-slate-600 dark:text-slate-400">37.5%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">Mobile Phone Operators (Non-Listed)</td>
                    <td className="p-4 font-mono text-slate-600 dark:text-slate-400">45.0%</td>
                    <td className="p-4 font-mono text-slate-600 dark:text-slate-400">45.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <AlertCircle className="h-6 w-6" /> Why Compliance Matters: Benefits and Penalties
            </h2>
            <p className="mb-4">A company with a clean tax record and a valid PSR gains significant operational advantages in financing and credit, international trade (IRC/ERC renewals), and government tenders. Conversely, missing the <strong>April 15, 2026</strong> deadline triggers severe penalties under Section 174: a lump-sum fine of 10% of the tax imposed (minimum BDT 5,000), a daily penalty of BDT 50, and an additional interest tax of 2% per month. Furthermore, failure to maintain VAT compliance may result in an additional 2% monthly interest and fines exceeding BDT 10,000.</p>
            <p className="mb-4">Furthermore, it is a common misconception that a loss-making company pays no tax. Every company is subject to a <strong>Minimum Tax</strong> based on its gross receipts. For general companies, this rate is 1.0% of turnover.</p>
            
            <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mt-8 mb-4 border-t border-slate-200 dark:border-slate-700 pt-6 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" /> Strategic Spotlight: E-Lawyers and Digital Tax Solutions
            </h3>
            <p className="mb-4">The increasing complexity of the Income Tax Act, 2023, has necessitated a shift toward professional legal and tax services. Traditional manual filing is prone to errors that can lead to years of litigation and massive penalties. Digital-first platforms like <strong>E-Lawyers</strong> provide automated verification for DVCs, A-Challans, and pre-filing Section 55 audits, alongside expert NBR representation. For business owners, the cost of a professional tax consultant is a fractional investment compared to the risk of "Assessee in Default" status.</p>

            <p>In conclusion, the filing of a company tax return in Bangladesh is no longer a mere exercise in compliance; it is a vital component of corporate strategy in a rapidly modernizing economy. By meeting the April 15, 2026 deadline and ensuring all transactions are properly documented and verified, companies can protect their "Good Standing," secure their access to the financial system, and position themselves for growth in the post-LDC graduation era.</p>
          </div>
        </div>
      )}

      <div className="mt-12 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500 p-6 rounded-r-xl text-sm text-orange-800 dark:text-orange-300">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
          <p>
            <strong>Disclaimer:</strong> The information provided in this research report is intended for general informational purposes only. It does not constitute legal, financial, or professional tax advice. While every effort has been made to ensure accuracy, tax laws are subject to frequent amendments. Always consult with qualified professionals from E-Lawyers or the NBR before making any compliance decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
