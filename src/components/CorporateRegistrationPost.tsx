import React, { useState } from 'react';
import { Building, FileText, CheckCircle, AlertCircle, Lightbulb, Scale, Calculator, FileCheck, ChevronRight } from 'lucide-react';
import { SocialShareButtons } from './SocialShareButtons';

export default function CorporateRegistrationPost() {
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
            <Building className="h-8 w-8" />
            বাংলাদেশে কর্পোরেট নিবন্ধন, আর্থিক পরিপালন এবং নিয়ন্ত্রক কাঠামোর বিস্তৃত গাইড
          </h1>
          
          <div>
            <p className="mb-4"><strong>বিবর্তিত কর্পোরেট নিয়ন্ত্রক পরিবেশের ভূমিকা</strong><br/>
            বাংলাদেশের সামষ্টিক অর্থনীতির গতিপথ, যা আনুমানিক ৬.৪% টেকসই জিডিপি প্রবৃদ্ধি এবং ১৮.৫ কোটিরও বেশি ব্যক্তির বিশাল দেশীয় ভোক্তা বাজার দ্বারা চিহ্নিত, দেশটিকে দেশীয় উদ্যোক্তা এবং সরাসরি বিদেশি বিনিয়োগ (FDI) উভয়ের জন্য একটি অত্যন্ত আকর্ষণীয় কেন্দ্রে পরিণত করেছে। এই দ্রুত অর্থনৈতিক সম্প্রসারণ এবং আনুষ্ঠানিকীকরণের একেবারে কেন্দ্রবিন্দুতে রয়েছে যৌথমূলধন কোম্পানি ও ফার্মসমূহের পরিদপ্তর (RJSC)। বাংলাদেশের ভৌগোলিক সীমানার মধ্যে পরিচালিত সকল কর্পোরেট সত্তা, অংশীদারি ফার্ম এবং অলাভজনক সোসাইটির গঠন, আইনি রক্ষণাবেক্ষণ এবং চূড়ান্ত বিলোপ সাধনের তদারকি করার জন্য RJSC একমাত্র সংবিধিবদ্ধ কর্তৃপক্ষ হিসেবে কাজ করে।</p>
            
            <p>RJSC ফ্রেমওয়ার্ক নেভিগেট করার জন্য সংবিধিবদ্ধ প্রয়োজনীয়তা, ফি কাঠামো এবং নিবন্ধন-পরবর্তী কঠোর পরিপালনের বাধ্যবাধকতা সম্পর্কে গভীর ও বিস্তৃত ধারণা প্রয়োজন। নিয়ন্ত্রক পরিবেশটি মূলত তিনটি ভিত্তিগত আইন দ্বারা পরিচালিত হয়: কোম্পানি আইন ১৯৯৪, সোসাইটি নিবন্ধন আইন ১৮৬০ এবং অংশীদারি আইন ১৯৩২। সাম্প্রতিক বছরগুলোতে, বাংলাদেশ সরকার এক ব্যক্তি কোম্পানি (OPC) এবং আয়কর আইন ২০২৩ প্রবর্তনের মাধ্যমে ডিজিটাল অর্থনীতি ও কর্পোরেট স্বচ্ছতা বৃদ্ধির জন্য ব্যাপক আইনি আধুনিকীকরণ করেছে।</p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <Scale className="h-6 w-6" /> কর্পোরেট সত্তার ধরন এবং কৌশলগত নির্বাচন
            </h2>
            <p className="mb-4">RJSC-এর সাথে পদ্ধতিগত কাজ শুরু করার আগে, উদ্যোক্তাদের অবশ্যই তাদের উদ্যোগের আইনি কাঠামো সম্পর্কে একটি মৌলিক সিদ্ধান্ত নিতে হবে। সত্তার ধরন নির্বাচন দীর্ঘমেয়াদী করের দায় এবং অভ্যন্তরীণ পরিচালনার কাঠামো নির্ধারণ করে।</p>
            
            <ul className="space-y-4 pl-2">
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>প্রাইভেট লিমিটেড কোম্পানি:</strong> বাংলাদেশে বাণিজ্যিক উদ্যোগের প্রধান মাধ্যম। এটি শেয়ারহোল্ডারদের জন্য সীমিত দায়ের আইনি সুরক্ষা প্রদান করে। কোম্পানি আইন ১৯৯৪ অনুযায়ী, ন্যূনতম ২ জন পরিচালক ও শেয়ারহোল্ডার প্রয়োজন এবং সর্বোচ্চ সীমা ৫০ জন।</span></li>
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>পাবলিক লিমিটেড কোম্পানি (PLC):</strong> বড় পরিসরে মূলধন সংগ্রহের জন্য ডিজাইন করা হয়েছে। শেয়ার বাজারে তালিকাভুক্ত হতে ইচ্ছুক বিশাল এন্টারপ্রাইজগুলোর জন্য এই কাঠামো বাধ্যতামূলক। এর আর্থিক প্রকাশনার প্রয়োজনীয়তা এবং নিয়ন্ত্রক যাচাই-বাছাই অনেক বেশি।</span></li>
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>এক ব্যক্তি কোম্পানি (OPC):</strong> ২০২০ সালের সংশোধনীর মাধ্যমে প্রবর্তিত এই কাঠামো একক মালিকদের সীমিত দায়ের সুবিধা দেয়। একটি OPC-এর ন্যূনতম পরিশোধিত মূলধন (Paid-up Capital) ২৫ লক্ষ টাকা এবং সর্বোচ্চ ৫ কোটি টাকা হতে হবে। বার্ষিক টার্নওভার ১ কোটি থেকে ৫০ কোটি টাকার মধ্যে থাকতে হবে। এই সীমা অতিক্রম করলে এটিকে সাধারণ প্রাইভেট বা পাবলিক কোম্পানিতে রূপান্তর করতে হবে।</span></li>
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>বিদেশি কোম্পানি (Foreign Companies):</strong> বহুজাতিক কোম্পানিগুলো শাখা (Branch) বা লিয়াজোঁ অফিস স্থাপনের মাধ্যমে বাজারে প্রবেশ করে। এগুলোর জন্য BIDA-এর অনুমোদন এবং ক্রস-বর্ডার ব্যাংকিং অ্যাকাউন্ট প্রয়োজন হয়।</span></li>
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>সোসাইটি এবং ট্রেড অর্গানাইজেশন:</strong> অলাভজনক সংস্থা ও দাতব্য প্রতিষ্ঠানগুলো ১৮৬০ সালের আইনের অধীনে নিবন্ধিত হয়। এগুলোর ফি কাঠামো শেয়ার মূলধনের ওপর নয়, বরং সদস্য সংখ্যার ওপর ভিত্তি করে নির্ধারিত হয়।</span></li>
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>অংশীদারি ফার্ম:</strong> ১৯৩২ সালের আইনের অধীনে পরিচালিত এই ফার্মগুলোর কোনো পৃথক আইনি সত্তা নেই, যার ফলে অংশীদারদের ব্যক্তিগত দায় অসীম থাকে। সরকার এদের নিবন্ধনের জন্য কোনো ফি আরোপ করে না (সম্পূর্ণ বিনামূল্যে নিবন্ধন)।</span></li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <FileText className="h-6 w-6" /> কর্পোরেট পরিচয়ের সূচনা: নাম ছাড়পত্র (Name Clearance)
            </h2>
            <p className="mb-4">বাংলাদেশে কর্পোরেট গঠনের একেবারে প্রথম ধাপ হলো একটি বৈধ নাম ছাড়পত্র (NC) সার্টিফিকেট সংগ্রহ করা। বিদেশি কোম্পানি এবং অংশীদারি ফার্ম ব্যতীত সকল প্রস্তাবিত আইনি সত্তাকে অবশ্যই তাদের মূল দলিলগুলো তৈরি করার আগে এই সংবিধিবদ্ধ অনুমোদন নিতে হবে। RJSC তাদের ডিজিটাল ডেটাবেস ব্যবহার করে নিশ্চিত করে যে প্রস্তাবিত নামটি বিদ্যমান কোনো কোম্পানির সাথে মিলে না যায়।</p>

            <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <tr>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">সেবার ক্যাটাগরি</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">সরকারি ফি (টাকা)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">নাম ছাড়পত্র (NC) আবেদন</td>
                    <td className="p-4 font-mono">৫০০.০০</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">সময়সীমা বৃদ্ধির আবেদন (প্রতিবার)</td>
                    <td className="p-4 font-mono">২০০.০০</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>সাধারণ কর্পোরেট সত্তাগুলোর জন্য (প্রাইভেট, পাবলিক, এবং OPC), এই ছাড়পত্রটি ইস্যুর তারিখ থেকে ঠিক <strong>৩০ দিন</strong> পর্যন্ত কার্যকর থাকে। তবে প্রয়োজনীয় ফি প্রদান করে এই মেয়াদ সর্বোচ্চ ৯০ দিন পর্যন্ত বাড়ানো যায়।</p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <Calculator className="h-6 w-6" /> অনুমোদিত মূলধনের অর্থনীতি এবং প্রগতিশীল স্ট্যাম্প ডিউটি
            </h2>
            <p className="mb-4">পরবর্তী ধাপে মেমোরেন্ডাম অফ অ্যাসোসিয়েশন (MoA) এবং আর্টিকেলস অফ অ্যাসোসিয়েশন (AoA) প্রস্তুত করতে হয়। MoA কোম্পানির বাহ্যিক সীমানা এবং মূল বাণিজ্যিক উদ্দেশ্য নির্ধারণ করে, আর AoA অভ্যন্তরীণ পরিচালনার নিয়মাবলি নির্ধারণ করে।</p>
            <p className="mb-4">RJSC নিবন্ধন প্রক্রিয়ার সামগ্রিক আর্থিক কাঠামো কোম্পানির ঘোষিত <strong>"অনুমোদিত শেয়ার মূলধন" (Authorized Capital)</strong> এর ওপর ভিত্তি করে নির্ধারিত হয়। অনুমোদিত মূলধন হলো সেই সর্বোচ্চ শেয়ারের মূল্য যা কোম্পানি তার জীবদ্দশায় ইস্যু করতে পারে, যা পরিশোধিত মূলধনের (Paid-up Capital) চেয়ে ভিন্ন।</p>

            <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <tr>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">সংবিধিবদ্ধ দলিলের ধরন</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">ঘোষিত অনুমোদিত মূলধনের স্তর</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">প্রয়োজনীয় স্ট্যাম্প ডিউটি (টাকা)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">মেমোরেন্ডাম অফ অ্যাসোসিয়েশন (MoA)</td>
                    <td className="p-4">সর্বজনীন (সব মূলধন স্তরের জন্য প্রযোজ্য)</td>
                    <td className="p-4 font-mono">১,০০০.০০</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">আর্টিকেলস অফ অ্যাসোসিয়েশন (AoA)</td>
                    <td className="p-4">অনুমোদিত মূলধন ১০,০০,০০০ টাকা পর্যন্ত</td>
                    <td className="p-4 font-mono">২,০০০.০০</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">আর্টিকেলস অফ অ্যাসোসিয়েশন (AoA)</td>
                    <td className="p-4">১০ লক্ষ টাকার বেশি থেকে ৩ কোটি টাকা পর্যন্ত</td>
                    <td className="p-4 font-mono">৪,০০০.০০</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">আর্টিকেলস অফ অ্যাসোসিয়েশন (AoA)</td>
                    <td className="p-4">৩ কোটি টাকার বেশি হলে</td>
                    <td className="p-4 font-mono">১০,০০০.০০</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-center my-10">
            <SocialShareButtons title="Corporate Registration in Bangladesh" url={window.location.href} />
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <FileCheck className="h-6 w-6" /> RJSC নিবন্ধন ফির বিস্তারিত বিভাজন (প্রাইভেট কোম্পানি)
            </h2>
            <p className="mb-4">প্রাইভেট লিমিটেড কোম্পানির নিবন্ধনের মোট খরচ দুটি ভাগে বিভক্ত: একটি ফিক্সড ডকুমেন্ট ফাইলিং ফি এবং একটি পরিবর্তনশীল অনুমোদিত মূলধন ফি। প্রাইভেট কোম্পানির জন্য ৬টি প্রধান দলিল (Form I, VI, IX, X, XII, এবং MoA/AoA) জমা দিতে হয়, যার প্রতিটির জন্য ২০০ টাকা করে মোট <strong>১,২০০ টাকা</strong> ফাইলিং ফি ধার্য করা হয়।</p>

            <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <tr>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">মূলধন মূল্যায়নের সীমা</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">প্রগতিশীল ফি মূল্যায়ন হার</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">প্রথম ১০,০০,০০০ (১০ লক্ষ) টাকা</td>
                    <td className="p-4 font-mono">০.০০ টাকা (সম্পূর্ণ মওকুফ)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">১০ লক্ষ টাকার পর থেকে ৫০ লক্ষ টাকা পর্যন্ত (প্রতি ১ লক্ষ টাকার জন্য)</td>
                    <td className="p-4 font-mono">৮০.০০ টাকা</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">৫০ লক্ষ টাকার বেশি হলে (প্রতি ১ লক্ষ টাকার জন্য)</td>
                    <td className="p-4 font-mono">১৩০.০০ টাকা</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50/50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 rounded-r-xl my-8">
              <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" /> ভ্যালু অ্যাডেড ট্যাক্স (VAT) সতর্কতা
              </h3>
              <p className="text-blue-900/80 dark:text-blue-200/80 text-sm md:text-base">
                প্রাথমিক খরচ বিশ্লেষণে প্রায়শই যে বিষয়টি বাদ পড়ে তা হলো ভ্যালু অ্যাডেড ট্যাক্স (VAT) প্রয়োগ। বাংলাদেশ সরকারের নিয়ম অনুযায়ী, প্রায় সমস্ত RJSC সরকারি ফি, বেস রেজিস্ট্রেশন ফি এবং সার্টিফাইড কপি ইস্যুর ওপর <strong>১৫% স্ট্যান্ডার্ড ভ্যাট</strong> সরাসরি যুক্ত করা হয়। সুতরাং, যেকোনো সঠিক আর্থিক মডেলিংয়ে প্রাথমিক RJSC গণনার সাথে এই ১৫% ভ্যাট যোগ করতে হবে।
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" /> পেশাদার আইনি সেবার ভূমিকা এবং খরচ
            </h2>
            <p className="mb-4">উপরে উল্লেখিত ফিগুলো কেবল সরকারি ফি। তবে ত্রুটিহীন MoA/AoA ড্রাফটিং, শেয়ারহোল্ডারদের চুক্তি এবং আইনি জটিলতা এড়াতে প্রফেশনাল কর্পোরেট আইনজীবী বা চার্টার্ড অ্যাকাউন্ট্যান্টদের সেবা গ্রহণ অপরিহার্য। দেশীয় ল ফার্মগুলো সাধারণত প্রাইভেট কোম্পানির প্রাথমিক গঠনের জন্য ১০,০০০ থেকে ৩০,০০০ টাকা ফি নিয়ে থাকে। তবে ট্রেড লাইসেন্স, ভ্যাট নিবন্ধন এবং ব্যাংকিং সেটআপসহ পূর্ণাঙ্গ টার্নকি (Turnkey) সলিউশনের জন্য এই ফি ৫০,০০০ থেকে ১,০০,০০০ টাকা (৫০০-১০০০ ইউএসডি) পর্যন্ত হতে পারে। বিদেশি বিনিয়োগের (FDI) ক্ষেত্রে BIDA এবং বাংলাদেশ ব্যাংকের জটিলতার কারণে এই ফি বহুগুণ বৃদ্ধি পায়।</p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <AlertCircle className="h-6 w-6" /> সামষ্টিক রাজস্ব দৃশ্যপট: আয়কর আইন ২০২৩ এবং মাসিক ফাইলিং
            </h2>
            <p className="mb-4">কোম্পানি নিবন্ধন কেবল একটি শুরু। আধুনিক বাংলাদেশে কর্পোরেট সংস্থাগুলোকে আয়কর আইন ২০২৩ এবং NBR-এর নিয়মাবলি কঠোরভাবে মেনে চলতে হয়।</p>
            <ul className="space-y-4 pl-2 mb-6">
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>কর্পোরেট করের হার:</strong> একটি সাধারণ অতালিকাভুক্ত প্রাইভেট কোম্পানির করের হার ২৭.৫%। তবে শেয়ার বাজারে তালিকাভুক্ত কোম্পানি এবং OPC-গুলো ২০% থেকে ২২.৫% এর মধ্যে হ্রাসকৃত করের সুবিধা ভোগ করে।</span></li>
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>ন্যূনতম কর (Minimum Tax):</strong> লাভ-ক্ষতি যাই হোক না কেন, কোম্পানিগুলোকে তাদের মোট প্রাপ্তির (Gross Receipts) ওপর ভিত্তি করে ন্যূনতম কর দিতে হয়।</span></li>
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>পর্যায়ক্রমিক রিটার্ন:</strong> সমস্ত ভ্যাট-নিবন্ধিত প্রতিষ্ঠানকে পরবর্তী মাসের ১৫ তারিখের মধ্যে মূসক ৯.১ (Mushak 9.1) জমা দিতে হয়। এছাড়া, কর্মীদের বেতন এবং ভাড়ার ওপর উৎস কর (TDS/P-Tax) কেটে এনবিআর-এ জমা দেওয়া বাধ্যতামূলক।</span></li>
            </ul>
            <p>উপসংহারে, বাংলাদেশে কোম্পানি গঠনের আর্কিটেকচার একটি অত্যন্ত সুপরিকল্পিত এবং কঠোর আইনি বাস্তুতন্ত্র। দেশীয় এবং বিদেশি উদ্যোক্তাদের সফল হতে হলে RJSC ম্যান্ডেট, ১৫% ভ্যাট, পেশাদার ফি এবং NBR-এর কর নীতি সম্পর্কে একটি সামগ্রিক ধারণা থাকা অপরিহার্য। এই জটিল কাঠামো বুঝতে পারলে তারা শাস্তিমূলক আইনি দায় এড়িয়ে বাংলাদেশের দ্রুত প্রসারিত অর্থনীতির পুরো সুবিধা নিতে পারবেন।</p>
          </div>
        </div>
      ) : (
        <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6 flex items-center gap-3">
            <Building className="h-8 w-8" />
            Comprehensive Guide to Corporate Registration, Fiscal Compliance, and the Regulatory Landscape in Bangladesh
          </h1>
          
          <div>
            <p className="mb-4"><strong>Introduction to the Evolving Corporate Regulatory Environment</strong><br/>
            The macroeconomic trajectory of Bangladesh, characterized by a sustained estimated gross domestic product (GDP) growth rate of 6.4% and a burgeoning domestic consumer market exceeding 185 million individuals, has fundamentally repositioned the jurisdiction as a highly attractive nexus for both indigenous entrepreneurship and foreign direct investment (FDI). At the epicenter of this rapid economic expansion lies the Registrar of Joint Stock Companies and Firms (RJSC). The RJSC serves as the sole statutory authority mandated by the state to oversee the formation, legal maintenance, and dissolution of all corporate entities, partnership firms, and non-profit societies operating within Bangladesh.</p>
            
            <p>Navigating the RJSC framework is a complex undertaking that requires a granular understanding of statutory requirements, dynamically scaling fee structures, and rigorous post-incorporation compliance obligations. The regulatory environment is governed primarily by three foundational pieces of legislation: the Companies Act of 1994, the Societies Registration Act of 1860, and the Partnership Act of 1932. Recent statutory modernizations, including amendments for One Person Companies (OPCs) and the Income Tax Act 2023, reflect a highly calculated governmental initiative to digitize the economy and enhance corporate transparency.</p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <Scale className="h-6 w-6" /> Taxonomy and Strategic Selection of Corporate Entities
            </h2>
            <p className="mb-4">Before an enterprise can engage with the fiscal mechanics of the RJSC, the promoters must make a foundational decision regarding the legal architecture of their venture. This dictates authorized capital, registration fees, and long-term tax liabilities.</p>
            
            <ul className="space-y-4 pl-2">
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>Private Limited Companies:</strong> The predominant vehicle for commercial enterprise in Bangladesh, offering the protective veil of limited liability. Requires a minimum of two shareholders and two directors, bound by a maximum cap of fifty shareholders.</span></li>
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>Public Limited Companies:</strong> Designed for large-scale capital mobilization. Requires exponentially heightened regulatory scrutiny and financial disclosure. It is the mandatory choice for massive enterprises seeking eventual listing on the Dhaka or Chittagong Stock Exchange.</span></li>
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>One Person Companies (OPC):</strong> Targeted directly at successful sole proprietors. An OPC requires a minimum paid-up capital of BDT 2,500,000 and is restricted by a maximum ceiling of BDT 50,000,000. It must demonstrate a minimum annual turnover of BDT 10,000,000.</span></li>
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>Foreign Companies:</strong> Multinational corporations penetrate the market through branch or liaison/representative offices. These require RJSC clearance followed by rigorous approval from the Bangladesh Investment Development Authority (BIDA).</span></li>
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>Societies and Trade Organizations:</strong> Non-profits, trusts, and industry associations are regulated under different statutes. Their fees are often decoupled from share capital, scaling instead based on their membership base.</span></li>
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>Partnership Firms:</strong> Partners are jointly and severally liable for all firm debts. To encourage the formalization of these micro-commercial collaborations, the state deregulates their entry costs, resulting in a completely free registration process at the RJSC.</span></li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <FileText className="h-6 w-6" /> The Genesis of Corporate Identity: Name Clearance (NC)
            </h2>
            <p className="mb-4">The absolute genesis of corporate formation is the procurement of a valid Name Clearance (NC) certificate. With the exception of Foreign Companies and Partnership Firms, all proposed legal entities must secure this statutory approval prior to drafting their foundational incorporation documents. The RJSC employs a centralized digital database to prevent corporate identity theft and brand confusion.</p>

            <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <tr>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">Service Category</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">Official Government Fee (BDT)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">Name Clearance (NC) Application</td>
                    <td className="p-4 font-mono">500.00</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">Time Extension Application (Per instance)</td>
                    <td className="p-4 font-mono">200.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>For standard corporate entities (Private, Public, and OPCs), the clearance remains valid for a strictly enforced period of <strong>30 days</strong> from the date of issue. This can be extended up to a maximum of 90 days via specific extension applications.</p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <Calculator className="h-6 w-6" /> The Economics of Authorized Capital and Progressive Stamp Duties
            </h2>
            <p className="mb-4">Following Name Clearance, the next phase requires the precise drafting of the Memorandum of Association (MoA) and Articles of Association (AoA). The overarching fiscal architecture of the RJSC registration process is heavily weighted against the entity's declared <strong>"Authorized Share Capital."</strong></p>

            <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <tr>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">Statutory Document Type</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">Declared Authorized Capital Tier</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">Required Stamp Duty Fee (BDT)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">Memorandum of Association (MoA)</td>
                    <td className="p-4">Universal Base Rate (Applies to all Tiers)</td>
                    <td className="p-4 font-mono">1,000.00</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">Articles of Association (AoA)</td>
                    <td className="p-4">Authorized Capital up to BDT 10,00,000</td>
                    <td className="p-4 font-mono">2,000.00</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">Articles of Association (AoA)</td>
                    <td className="p-4">Authorized Capital &gt; BDT 10,00,000 up to 30,000,000</td>
                    <td className="p-4 font-mono">4,000.00</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-medium">Articles of Association (AoA)</td>
                    <td className="p-4">Authorized Capital &gt; BDT 30,000,000</td>
                    <td className="p-4 font-mono">10,000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-center my-10">
            <SocialShareButtons title="Corporate Registration in Bangladesh" url={window.location.href} />
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <FileCheck className="h-6 w-6" /> Exhaustive Breakdown of RJSC Registration Fees
            </h2>
            <p className="mb-4">The total registration cost for a standard Private Limited Company is bifurcated into a fixed document filing fee and a variable authorized capital fee. A Private Company must file six core foundational documents during incorporation, calculated uniformly at BDT 200.00 per document (Total: <strong>BDT 1,200.00</strong>).</p>

            <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <tr>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">Capital Assessment Tranche</th>
                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">Marginal Fee Assessment Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">First BDT 10,00,000</td>
                    <td className="p-4 font-mono">BDT 0.00 (Fully Exempt)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">For every BDT 1,00,000 after the first 10,00,000 up to 50,00,000</td>
                    <td className="p-4 font-mono">BDT 80.00</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">For every BDT 1,00,000 exceeding 50,00,000</td>
                    <td className="p-4 font-mono">BDT 130.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50/50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 rounded-r-xl my-8">
              <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" /> Value Added Tax (VAT) Dynamics
              </h3>
              <p className="text-blue-900/80 dark:text-blue-200/80 text-sm md:text-base">
                A critical factor that is universally omitted in amateur preliminary cost analyses is the ruthless application of Value Added Tax (VAT). Bangladesh standardized VAT at a <strong>15% rate</strong> across a massive spectrum of goods and services. Crucially, this 15% VAT is universally appended directly to almost all RJSC government fees (base registration fees, document filing, certified copy issuances). Any accurate financial modeling must unilaterally increase raw RJSC estimates by this 15% margin.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" /> The Role and Cost of Professional Advisory Services
            </h2>
            <p className="mb-4">A highly critical distinction must be drawn between the raw statutory RJSC government fees and the true professional capital required. Domestic law firms and established CA practices typically assess professional service fees ranging between BDT 10,000 and BDT 30,000 simply for basic Private Limited Company formations. For full turnkey solutions (including Trade License, VAT registration, and banking setups), total professional expenditure escalates to BDT 50,000 – BDT 1,00,000. Foreign Direct Investment (FDI) facilitation costs are exponentially higher due to multi-jurisdictional compliance and BIDA approvals.</p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <AlertCircle className="h-6 w-6" /> The Macro-Fiscal Landscape: Taxation, VAT, and Compliance
            </h2>
            <p className="mb-4">Incorporation is merely the threshold. The modernized Income Tax Act 2023 represents a seismic shift in how corporate entities are financially assessed.</p>
            <ul className="space-y-4 pl-2 mb-6">
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>Corporate Tax:</strong> A standard non-publicly traded Private Limited Company faces a baseline corporate tax rate of 27.5%. Publicly traded companies and OPCs enjoy a reduced tax burden between 20% and 22.5%.</span></li>
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>Minimum Tax:</strong> The Act introduced an inescapable Minimum Tax Regime levied directly on gross corporate receipts, ignoring profitability.</span></li>
              <li className="flex gap-3"><ChevronRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" /> <span><strong>Periodic Filings:</strong> VAT-registered entities must submit Mushak 9.1 returns by the 15th of the following month. Corporations must also deduct income tax at source (TDS) from salaries and commercial rent, depositing funds strictly on a monthly basis.</span></li>
            </ul>
            <p>In conclusion, the fundamental architecture of corporate registration in Bangladesh represents a highly calculated ecosystem of scalable fees and unrelenting post-incorporation compliance demands. By deeply understanding this holistic, interconnected web of RJSC mandates, NBR tax policies, and digital payment infrastructure, domestic entrepreneurs and foreign direct investors can confidently navigate the jurisdiction and capitalize on the historic economic expansion of the Bangladeshi market.</p>
          </div>
        </div>
      )}

      <div className="mt-12 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500 p-6 rounded-r-xl text-sm text-orange-800 dark:text-orange-300">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
          <p>
            <strong>Disclaimer:</strong> This research report is intended for general informational purposes. It does not constitute formal legal, financial, or professional tax advice. While every effort has been made to ensure accuracy, corporate laws and RJSC fees are subject to frequent amendments. Always consult with certified corporate lawyers or professionals for individualized assessment and statutory filing procedures.
          </p>
        </div>
      </div>
    </div>
  );
}
