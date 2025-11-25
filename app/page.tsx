import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Paaji from "@/components/Paaji";
import Creations from "@/components/Creations";
import Process from "@/components/Process";
import Sponsors from "@/components/Sponsors";
import Faqs from "@/components/Faqs";
import Ctasection from "@/components/Ctasection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="text-[#E5E5E5] bg-[#121212] min-h-screen w-full border flex flex-col items-center justify-start capitalize md:gap-y-12 gap-y-6">
      <Navbar />
      <Hero />
      <Paaji />
      <Creations />
      <Process />
      <Sponsors />
      <Faqs />
      <Ctasection />
      <Footer />
    </div>
  );
}


