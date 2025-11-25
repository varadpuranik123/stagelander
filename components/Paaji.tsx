import React from 'react'
import Image from 'next/image'

const Paaji = () => {
    return (
        <div className='max-w-screen-2xl relative mx-auto w-full h-fit flex md:flex-row flex-col md:items-center items-start justify-between md:px-24 px-4 md:py-20 py-12 border-y border-[#333] bg-[#141619]'>
            <div className="p-4 bg-[#121212] rounded-xl bg-shadow md:w-fit w-full ">
                <iframe className='rounded-md md:w-[560px] md:h-[315px] w-full  ' width="560" height="315" src="https://www.youtube.com/embed/NAS4BEP2KtA?si=oLbLXU9eNuObj0-I&amp;start=3561" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className=" h-full w-fit flex flex-col items-start justify-between ">
                <div className=" mt-10 ">
                    <h1 className='md:text-[68px] text-5xl md:leading-[1.1] leading-[1.2] tracking-tight font-semibold'>
                        Reviewed by the
                    </h1>
                    <h1 className='md:text-[68px] text-5xl md:leading-[1.1] leading-[1.2] tracking-tight font-semibold'>
                        <span className="text-gradient">Paaji</span> Himself
                    </h1>
                </div>
                <div className="md:h-28 h-8 "></div>
                <div className="">
                    <p className="text-gradient-white font-semibold text-lg">Founder of</p>
                    <Image src="/Aceternitylogo.svg" alt="Paaji" width={1000} height={1000} className="size-42 h-fit object-contain " />
                </div>
            </div>
        </div>
    )
}

export default Paaji