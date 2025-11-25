import Image from "next/image";
import React from "react";

const gridImages = [
  { id: 1, src: "/gridImages01.png", alt: "Minimalist poster", width: 512, height: 640 },
  { id: 2, src: "/gridImages02.png", alt: "Typography layout", width: 512, height: 640 },
  { id: 3, src: "/gridImages03.png", alt: "Gradient landscape", width: 512, height: 640 },
  { id: 4, src: "/gridImages04.png", alt: "Album artwork", width: 512, height: 640 },
  { id: 5, src: "/gridImages05.png", alt: "Neon abstract", width: 512, height: 640 },
  { id: 6, src: "/gridImages06.png", alt: "Product mockup", width: 512, height: 640 },
  { id: 7, src: "/gridImages07.png", alt: "Poster vibes", width: 512, height: 640 },
  { id: 8, src: "/gridImages08.png", alt: "Vaporwave cover", width: 512, height: 640 },
  { id: 9, src: "/gridImages09.png", alt: "Futuristic collage", width: 512, height: 640 },
  { id: 10, src: "/gridImages10.png", alt: "Futuristic collage", width: 512, height: 640 },
  { id: 11, src: "/gridImages11.png", alt: "Futuristic collage", width: 512, height: 640 },
  { id: 12, src: "/gridImages12.png", alt: "Futuristic collage", width: 512, height: 640 },
];

const Creations = () => {
  return (
    <section className="max-w-screen-2xl mx-auto w-full min-h-fit flex flex-col gap-10 md:px-24 px-4 md:py-24 py-12">
      <span className="text-gradient md:text-[68px] text-5xl leading-[1.1] tracking-tight font-semibold">
        Creations
      </span>

      <div className="grid w-full gap-6 self-center md:grid-cols-3 grid-cols-1 sm:grid-cols-2 md:mask-b-from-90% mask-b-from-90%">
        {gridImages.map((image) => (
          <div
            key={image.id}
            className="relative w-full overflow-hidden rounded-md "
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="w-full h-full rounded-md object-contain hover:scale-105 transition-all duration-300"
              priority={image.id <= 3}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Creations;