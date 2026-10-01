"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { submitLeadToGHL } from "../app/actions/submitLead";

export default function LeadGenFormContent() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    website: "",
    budget: "",
    targetLeads: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    
    // Call the Next.js Server Action
    const result = await submitLeadToGHL(formData);
    
    if (result.success) {
      console.log("Form Data Submitted to GHL:", formData);
      router.push("/thank-you");
    } else {
      setErrorMsg(result.error || "Failed to submit. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full bg-slate-950">
      
      {/* Left Side */}
      <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center border-r border-slate-800">
        <div className="text-[#5eff00] font-bold tracking-wider text-sm uppercase mb-4">Get Started</div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
          Let's Build a Campaign<br/>That Brings You <span className="text-[#5eff00]">Better Leads</span>
        </h2>
        <p className="text-slate-300 text-base mb-4 leading-relaxed">
          Tell us about your astrology business, your current marketing challenges, and your growth goals.
        </p>

        <div className="flex items-start gap-4 border-t border-slate-800 pt-6 mt-6">
          <div className="text-center">
            <div className="text-[#5eff00] mb-2 flex justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
              </svg>
            </div>
            <div className="text-[10px] text-white font-medium uppercase">Strategic Insights</div>
          </div>
          <div className="text-center">
            <div className="text-[#5eff00] mb-2 flex justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <div className="text-[10px] text-white font-medium uppercase">No Obligations</div>
          </div>
          <div className="text-center">
            <div className="text-[#5eff00] mb-2 flex justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <div className="text-[10px] text-white font-medium uppercase">Tailored Recs</div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2 p-8 lg:p-12 bg-black/50 flex flex-col justify-center">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-200 mb-1">Name *</label>
              <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your Name" className="w-full px-3 py-2 text-sm rounded border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#5eff00]" />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-200 mb-1">Business Name *</label>
              <input required name="businessName" value={formData.businessName} onChange={handleChange} type="text" placeholder="Your Business" className="w-full px-3 py-2 text-sm rounded border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#5eff00]" />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-200 mb-1">Phone *</label>
              <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 98765 43210" className="w-full px-3 py-2 text-sm rounded border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#5eff00]" />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-200 mb-1">Email *</label>
              <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="you@company.com" className="w-full px-3 py-2 text-sm rounded border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#5eff00]" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-[10px] font-bold text-slate-200 mb-1">Website</label>
              <input name="website" value={formData.website} onChange={handleChange} type="text" placeholder="https://yourwebsite.com" className="w-full px-3 py-2 text-sm rounded border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#5eff00]" />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-200 mb-1">Budget *</label>
              <select required name="budget" value={formData.budget} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#5eff00] text-slate-300 bg-black/50">
                <option value="" disabled>Select</option>
                <option value="under50k">Under ₹50k</option>
                <option value="50k-1L">₹50k - ₹1L</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-200 mb-1">Target Leads *</label>
              <select required name="targetLeads" value={formData.targetLeads} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#5eff00] text-slate-300 bg-black/50">
                <option value="" disabled>Select</option>
                <option value="0-50">0 - 50</option>
                <option value="50-100">50 - 100</option>
                <option value="100+">100+</option>
              </select>
            </div>
          </div>

          {errorMsg && (
            <div className="p-3 bg-red-50 text-red-600 text-xs rounded border border-red-200">
              {errorMsg}
            </div>
          )}

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full bg-[#5eff00] text-white font-bold py-3 rounded text-sm transition duration-300 mt-4 shadow-[0_4px_14px_0_rgba(94,255,0,0.39)] flex justify-center items-center gap-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#4bdb00]'}`}
          >
            {isSubmitting ? 'Submitting...' : 'Get My Free Marketing Strategy'}
            {!isSubmitting && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
