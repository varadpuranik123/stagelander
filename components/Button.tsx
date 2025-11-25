import Image from "next/image";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  label: string;
};

const Button = ({ label }: ButtonProps) => {
  return (
    <Link href="https://www.stagee.art/home"  className=" flex items-center cursor-pointer gap-1 whitespace-nowrap md:text-lg text-sm tracking-tight justify-center md:px-8 px-4 py-3 font-semibold rounded-full bg-[#222222] text-[#E5E5E5] inner-shadow transition-all duration-300">
      <span>{label}</span>
      <Image src="/arrow.svg" alt="arrow" width={20} height={20} />
    </Link>
  );
};

export default Button;