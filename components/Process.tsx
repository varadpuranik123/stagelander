import Image from "next/image";
import React from "react";

const processCards = [
  {
    id: 1,
    icon: "/processCards1.svg",
    title: "Image Upload & Customization",
    description:
      "Upload images and customize size, opacity, borders, shadows, and border radius for precise control over your visuals.",
  },
  {
    id: 2,
    icon: "/processCards2.svg",
    title: "Text Overlays & Backgrounds",
    description:
      "Add multiple text layers with custom fonts, colors, and shadows. Choose gradients, solid colors, or upload your own backgrounds.",
  },
  {
    id: 3,
    icon: "/processCards3.svg",
    title: "Professional Export",
    description:
      "Export transparent PNGs with adjustable quality and scale up to 5x. Everything processes locally for social-ready, high-res output.",
  },
];

const Process = () => {
  return (
    <section className="max-w-screen-2xl mx-auto w-full min-h-fit flex flex-col gap-12 md:px-24 px-6 md:py-16 py-8">
      <h2 className="md:text-[68px] text-6xl leading-[1.1] tracking-tight font-semibold">
        This is how <span className="text-gradient">simple</span> it is
      </h2>

      <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {processCards.map((card) => (
          <article
            key={card.id}
            className=""
          >
            <div className="mb-6 flex h-fit w-full items-center justify-center rounded-2xl p-2 border-2 border-[#333] bg-[#141619]">
              <Image src={card.icon} alt={card.title} width={48} height={48} className="w-full h-full object-contain" />
            </div>
            <h3 className="mb-3 text-2xl font-semibold">{card.title}</h3>
            <p className="text-base text-white/70 leading-relaxed">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Process;