"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Challenges from "@/components/Challenges";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import LeadGenForm from "@/components/LeadGenForm";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import LeadGenFormContent from "@/components/LeadGenFormContent";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar onOpenModal={openModal} />
      <div id="home"><Hero onOpenModal={openModal} /></div>
      <Challenges onOpenModal={openModal} />
      <div id="services"><Services onOpenModal={openModal} /></div>
      <div id="about"><WhyChooseUs onOpenModal={openModal} /></div>
      <div id="case-studies"><LeadGenForm /></div>
      <FAQ />
      <div id="contact"><FinalCTA onOpenModal={openModal} /></div>
      <Footer />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <LeadGenFormContent />
      </Modal>
    </main>
  );
}
