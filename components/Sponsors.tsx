import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { LuGlobe } from "react-icons/lu";
import { SiX } from "react-icons/si";

export interface Sponsor {
  name: string;
  avatar?: string;
  avatarAlt?: string;
  amount?: string;
  amountType?: "one time" | "monthly" | "yearly";
  total?: string;
  github?: string;
  website?: string;
  twitter?: string;
  isSpecial?: boolean;
  specialSince?: string;
  url?: string;
}

interface SponsorsProps {
  title?: string;
  sponsors?: Sponsor[];
  showDescription?: boolean;
}

const defaultSponsors: Sponsor[] = [
  {
    name: "Aayushman Singh",
    avatar: "/aayushman 1.png",
    avatarAlt: "aayushman singh",
    amount: "$10.00",
    amountType: "one time",
    total: "$10.00",
    github: "aayushman-singh",
    twitter: "aayushman2703",
    website: "https://aayushman.dev",
    url: "https://x.com/aayushman2703",
  },
  {
    name: "Kanak Kumar Mahala",
    avatar: "/kanak kumar mahala.png",
    avatarAlt: "kanak kumar mahala",
    amount: "$7.90",
    amountType: "one time",
    total: "$7.90",
    github: "kanakk365",
    twitter: "Lbringer_nikki",
    website: "https://www.kanakk.me",
    url: "https://x.com/kanak_k365",
  },
  {
    name: "Aditya Garimella",
    avatar: "/aditya garimella.png",
    avatarAlt: "aditya garimella",
    amount: "$7.88",
    amountType: "one time",
    total: "$7.88",
    github: "",
    twitter: "Lbringer_nikki",
    website: "",
    url: "https://x.com/Lbringer_nikki",
  },
  {
    name: "Karan Kendre",
    avatar: "/karan kendre.png",
    avatarAlt: "karan kendre",
    amount: "$5.64",
    amountType: "one time",
    total: "$5.64",
    github: "kendrekaran",
    twitter: "karaan_dev",
    website: "https://www.karaan.me/",
    url: "https://x.com/karaan_dev",
  },
  {
    name: "Fardeen Mansoori",
    avatar: "/fardeen mansoori.png",
    avatarAlt: "fardeen mansoori",
    amount: "$5.64",
    amountType: "one time",
    total: "$5.64",
    github: "Fardeen26",
    twitter: "fardeentwt",
    website: "https://www.fardeen.me/",
    url: "https://x.com/fardeentwt",
  },
  {
    name: "Suhail Roushan",
    avatar: "/suhail roushan.png",
    avatarAlt: "suhail roushan",
    amount: "$5.00",
    amountType: "one time",
    total: "$5.00",
    github: "suhailroushan13",
    twitter: "0xsuhailroushan",
    website: "https://suhailroushan.in/",
    url: "https://x.com/0xsuhailroushan",
  },
  {
    name: "Arinjay Wyawhare",
    avatar: "/arinjay wyawhare.png",
    avatarAlt: "arinjay wyawhare",
    amount: "$4.74",
    amountType: "one time",
    total: "$4.74",
    github: "jaywyawhare",
    twitter: "jaywyawhare",
    website: "https://jaywyawhare-github-io.vercel.app",
    url: "https://x.com/jaywyawhare",
  },
  {
    name: "Chinmay Kabi",
    avatar: "/chinmay kabi.png",
    avatarAlt: "chinmay kabi",
    amount: "$2.82",
    amountType: "one time",
    total: "$2.82",
    github: "",
    twitter: "chinmaykabi",
    website: "https://www.linkedin.com/in/chinmaykabi",
    url: "https://x.com/ChinuKabi",
  },
  {
    name: "Vedant Lamba",
    avatar: "/vedant lamba.png",
    avatarAlt: "vedant lamba",
    amount: "$1.14",
    amountType: "one time",
    total: "$1.14",
    github: "vedantlamba",
    twitter: "Vedantlamba",
    website: "https://www.vedantlamba.com",
    url: "https://x.com/Vedantlamba",
  },
  {
    name: "Pranav Patil",
    avatar: "/pranav patil.png",
    avatarAlt: "pranav patil",
    amount: "$1.14",
    amountType: "one time",
    total: "$1.14",
    github: "21prnv",
    twitter: "21prnv",
    website: "https://www.prnv.space",
    url: "https://x.com/21prnv",
  },
  {
    name: "Atharva Mhaske",
    avatar: "/atharva.png",
    avatarAlt: "atharva",
    amount: "$1.14",
    amountType: "one time",
    total: "$1.14",
    github: "atharvamhaske",
    twitter: "AtharvaXDevs",
    website: "https://atharvaxdevs.xyz/",
    url: "https://x.com/AtharvaXDevs",
  },
];

const Sponsors = ({
  title = "Sponsor Wall",
  sponsors = defaultSponsors,
  showDescription = true,
}: SponsorsProps) => {
  const highlightName = sponsors.reduce((prev, current) => {
    const prevValue = prev ? parseFloat((prev.total ?? prev.amount ?? "0").replace(/[^0-9.]/g, "")) : 0;
    const currentValue = parseFloat((current.total ?? current.amount ?? "0").replace(/[^0-9.]/g, ""));
    return currentValue > prevValue ? current : prev;
  }, sponsors[0])?.name;

  const socialLinks = (sponsor: Sponsor) => [
    sponsor.github && {
      href: sponsor.github.startsWith("http") ? sponsor.github : `https://github.com/${sponsor.github}`,
      label: `${sponsor.name} GitHub`,
      icon: <FaGithub className="h-5 w-5" />,
    },
    sponsor.twitter && {
      href: sponsor.twitter.startsWith("http") ? sponsor.twitter : `https://x.com/${sponsor.twitter}`,
      label: `${sponsor.name} on X`,
      icon: <SiX className="h-5 w-5" />,
    },
    sponsor.website && {
      href: sponsor.website,
      label: `${sponsor.name} website`,
      icon: <LuGlobe className="h-5 w-5" />,
    },
  ].filter(Boolean) as { href: string; label: string; icon: React.ReactNode }[];

  return (
    <section className="max-w-screen-2xl mx-auto w-full min-h-fit flex flex-col gap-10 md:px-24 px-4 py-4">
      <header className="flex flex-col gap-4">
      <h2 className="md:text-[68px] text-5xl leading-[1.1] tracking-tight font-semibold">
        Our <span className="text-gradient">Sponsors</span>
      </h2>
      </header>

      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {sponsors.map((sponsor) => {
          const links = socialLinks(sponsor);
          const highlighted = sponsor.name === highlightName;

          return (
            <article
              key={sponsor.name}
              className={`rounded-xl h-80 border ${
                highlighted ? "border-[#FFA000] inner-shadow" : "border-white/5"
              } bg-[#1E1E1E] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col justify-between gap-6`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{sponsor.name}</h3>
                  {sponsor.total && <p className="text-lg font-semibold text-[#F59E0B] mt-1">Total {sponsor.total}</p>}
                </div>
                <div className="flex items-center gap-3 text-[#9CA3AF]">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:text-white hover:border-white/30"
                    >
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex items-end justify-between gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-2xl bg-white/5">
                  {sponsor.avatar ? (
                    <Image
                      src={sponsor.avatar}
                      alt={sponsor.avatarAlt ?? sponsor.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-white/60">No avatar</div>
                  )}
                </div>
                {sponsor.amount && (
                  <div className="rounded-full bg-[#00BB00]/10 px-4.5 py-1 text-lg font-bold text-[#00BB00]">
                    {sponsor.amount}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Sponsors;