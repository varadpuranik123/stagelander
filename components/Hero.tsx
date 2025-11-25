import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='max-w-screen-2xl relative mx-auto w-full h-fit flex flex-col items-start justify-center md:px-24 px-4 md:pt-40 md:pb-40 pb-12 pt-24'>
            <div className='flex flex-col items-start justify-center gap-6 z-1'>
                <a className='w-72' href="https://peerlist.io/code_kartik/project/stage" target="_blank" rel="noreferrer">
                    <img
                        src="https://peerlist.io/api/v1/projects/embed/PRJHOK88O79K6BNNNCG7GMP7BR6Q7K?showUpvote=true&theme=dark"
                        alt="Stage"
                        style={{ width: "auto", height: "72px" }}
                    />
                </a>
                <div className="">
                    <h1 className='md:text-[68px] text-4xl md:leading-[1.1] leading-[1.3] tracking-tight font-semibold'>
                        Create stunning visual 
                    </h1>
                    <h1 className='md:text-[68px] text-4xl md:leading-[1.1] leading-[1.3] tracking-tight font-semibold'>
                        designs <span className="text-gradient">With Stage</span>
                    </h1>
                </div>
                <p className="md:text-lg text-sm max-w-160 text-[#A3A3A3] ">
                    A fully in-browser canvas editor that brings your ideas to life. Add images, text, backgrounds, and export your creations in  high quality all without external services. Built for designers and creators.
                </p>
                <div className="">
                    <Button label="Try Now it's free" />
                </div>
            </div>

            <div className="md:absolute relative mt-8 md:mt-0 bottom-0 right-0 p-3 bg-white/5 rounded-xl w-fit h-fit mask-b-from-40% ">
                <Image src="/hero-image.png" alt="Hero" width={1000} height={1000} className="size-200 h-fit rounded-xl object-contain " />
                <Image src="/play icon.svg" alt="Hero" width={1000} height={1000} className="md:size-28 size-14 absolute top-[50%] md:left-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-fit rounded-xl object-contain " />
            </div>
        </div>
    )
}

export default Hero