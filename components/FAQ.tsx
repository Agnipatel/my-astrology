"use client";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "What are performance marketing services for astrologers?",
      a: "Performance marketing services for astrologers use measurable digital marketing strategies to attract relevant audiences, generate enquiries, and improve conversions. These can include Google Ads, Meta Ads, landing-page optimization, tracking, and campaign optimization."
    },
    {
      q: "Why should an astrology business invest in performance marketing?",
      a: "Performance marketing can help astrology businesses reach people actively searching for their services, generate relevant enquiries, and understand how their advertising investment contributes to business growth."
    },
    {
      q: "What does a Performance Marketing Agency for Astrology Businesses do?",
      a: "A Performance Marketing Agency for Astrology Businesses develops and manages digital campaigns designed around measurable business objectives such as lead generation, customer acquisition, conversion improvement, and advertising efficiency."
    },
    {
      q: "Do you run Google Ads and Meta Ads?",
      a: "Yes. Campaigns can be developed across Google and Meta depending on your audience, services, objectives, and advertising budget."
    },
    {
      q: "Can you generate leads for astrology consultations?",
      a: "Yes. Lead generation can be a core campaign objective, with advertising, landing pages, audience targeting, tracking, and optimization structured around generating relevant consultation enquiries."
    },
    {
      q: "Do you work with established astrology businesses?",
      a: "Yes. Campaigns can be designed for individual astrologers, growing businesses, platforms, and established astrology enterprises."
    },
    {
      q: "How do I choose between performance marketing companies for astrologers?",
      a: "Look beyond promises of clicks or lead volume. Consider the agency's understanding of your industry, campaign strategy, targeting approach, conversion optimization, reporting, and ability to connect marketing activity with business outcomes."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-transparent pt-24 pb-12 px-6 sm:px-12 lg:px-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side */}
        <div className="lg:col-span-4">
          <div className="text-[#4bdb00] font-bold tracking-wider text-sm uppercase mb-4">FAQ</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Frequently<br/>Asked Questions
          </h2>
        </div>
        
        {/* Right Side (Accordion) */}
        <div className="lg:col-span-8 space-y-2">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-black/50 rounded-xl border border-slate-200 hover:border-[#4bdb00]/50 transition-colors duration-300 overflow-hidden shadow-sm"
            >
              <button 
                onClick={() => toggleFaq(i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <h3 className="text-lg font-bold text-white pr-8">{faq.q}</h3>
                <span className={`transform transition-transform duration-300 flex-shrink-0 text-[#4bdb00] ${openIndex === i ? 'rotate-180' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-300 leading-relaxed border-t border-slate-100 pt-4 mt-2">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
