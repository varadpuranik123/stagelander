"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: "What is Stage?",
    answer:
      "Stage is a modern web-based canvas editor that runs entirely in your browser. Create professional-looking designs for social media, presentations, or personal projects without any design software installation required.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No account required! Stage is completely free to use. Simply visit the editor and start creating your designs immediately—no sign-up, no login, no hassle.",
  },
  {
    question: "Is Stage free to use?",
    answer:
      "Yes, Stage is completely free. Create unlimited designs, export without restrictions, and access all features at no cost. Just open your browser and start designing.",
  },
  {
    question: "What can I create with Stage?",
    answer:
      "You can create social media graphics (Instagram posts, stories, reels), image showcases, presentation visuals, and custom designs. Upload your images, add text overlays, customize backgrounds, apply professional presets, and export high-quality graphics.",
  },
  {
    question: "What export formats are available?",
    answer:
      "Export your designs as PNG (with transparency support) or JPG. You can adjust the quality for JPG files and scale your exports up to 5x the original size for high-resolution output. Perfect for both digital use and printing.",
  },
  {
    question: "Which aspect ratios does Stage support?",
    answer:
      "Stage supports Instagram formats (Square 1:1, Portrait 4:5, Story/Reel 9:16), social media formats (Landscape 16:9, Portrait 3:4), and standard photo formats. All formats are optimized for their respective platforms.",
  },
  {
    question: "What are presets and how do I use them?",
    answer:
      "Presets are one-click styling options that instantly transform your design. Stage includes 5 professional presets: Social Ready, Story Style, Minimal Clean, Bold Gradient, and Dark Elegant. Click any preset to apply it instantly to your canvas.",
  },
  {
    question: "What image file formats can I upload?",
    answer:
      "You can upload PNG, JPG, JPEG, or WEBP images. Each image can be up to 100MB in size. The editor handles all processing in your browser for fast, secure editing.",
  },
  {
    question: "Can I save my designs to my computer?",
    answer:
      "Yes! Export your completed designs directly to your device as PNG or JPG files. Save them anywhere you like—your desktop, cloud storage, or any folder. Your designs are yours to keep.",
  },
  {
    question: "What customization options are available?",
    answer:
      "For images: adjust size, opacity, borders (width, color, style), shadows, and border radius. For text: add multiple text overlays with custom fonts, colors, sizes, positions, and text shadows. For backgrounds: choose from gradients, solid colors, or upload your own background images.",
  },
];

const FAQItemRow = ({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQItem & { isOpen: boolean; onToggle: () => void }) => (
  <div className="border-b border-white/10 last:border-0 ">
    <button
      className="flex w-full items-center justify-between gap-6 py-6 text-left"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <div className="flex-1">
        <p className="text-xl font-semibold">{question}</p>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.p
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mt-3 overflow-hidden text-sm text-white/70"
            >
              {answer}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-full ">
        <Image
          src="/bottomArrow.svg"
          alt="Toggle FAQ"
          width={24}
          height={24}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>
    </button>
  </div>
);

const Faqs = ({ title = "Frequently Asked Questions", faqs = defaultFAQs }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="max-w-screen-2xl mx-auto w-full min-h-fit flex md:flex-row flex-col justify-between items-start gap-10 md:px-24 px-4 py-16">
      <div>
        <h2 className="md:text-[68px] text-5xl leading-[1.1] tracking-tight font-semibold">
          Frequently Asked <span className="text-gradient"> <br /> Questions</span>
        </h2>
      </div>

      <div className="md:w-[50%] w-full rounded-3xl ">
        {faqs.map((faq, index) => (
          <FAQItemRow
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => toggleIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Faqs;