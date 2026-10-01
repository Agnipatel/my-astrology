"use client";

import { useState } from "react";
import Modal from "./Modal";

export default function TelegramJoinButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="w-10 h-10 rounded-full bg-transparent border border-pink-200 flex items-center justify-center hover:bg-[#4bdb00] hover:text-white hover:border-[#4bdb00] transition-colors text-slate-400 cursor-pointer"
        aria-label="Join Telegram"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"></path><path d="M22 2L15 22L11 13L2 9L22 2z"></path></svg>
      </button>

      <Modal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); setStep(1); }}>
        <div className="bg-black text-white p-8 md:p-12 text-center rounded-3xl">
          <h2 className="text-3xl font-bold mb-6">Join VIP Telegram Group</h2>
          
          {step === 1 ? (
            <div className="flex flex-col items-center">
              <p className="text-slate-300 mb-6 max-w-md mx-auto">
                Step 1: Please scan the QR code below or click the button to pay ₹2 via UPI.
              </p>
              
              <div className="bg-white p-4 rounded-xl mb-6 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent('upi://pay?pa=patelagni239@oksbi&pn=Agni Patel&am=2&cu=INR')}`} 
                  alt="UPI QR Code" 
                  className="w-48 h-48 md:w-56 md:h-56 object-contain"
                />
              </div>
              
              <a 
                href="upi://pay?pa=patelagni239@oksbi&pn=Agni%20Patel&am=2&cu=INR"
                className="bg-[#5eff00] hover:bg-[#4bdb00] text-slate-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-[0_4px_14px_0_rgba(94,255,0,0.39)] mb-6"
              >
                Pay ₹2 via UPI App
              </a>

              <button 
                onClick={() => setStep(2)}
                className="text-slate-400 hover:text-white underline text-sm transition mt-2"
              >
                I have completed the payment
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#5eff00]/20 text-[#5eff00] rounded-full flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <p className="text-slate-300 mb-8 max-w-md mx-auto">
                Thank you! Click the button below to join the group.
              </p>
              <a 
                href="https://t.me/+bciimpRaons0MGM1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { setIsModalOpen(false); setStep(1); }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] flex items-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"></path><path d="M22 2L15 22L11 13L2 9L22 2z"></path></svg>
                Join Telegram
              </a>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}
