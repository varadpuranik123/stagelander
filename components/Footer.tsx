import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='max-w-screen-2xl relative mx-auto w-full h-fit flex flex-col items-center justify-between md:px-24 px-6 md:py-20 py-12 bg-linear-to-b from-[#121212]/0 via-[#121212]/0 to-[#F59E0B]/15 '>
            <div className="w-full h-fit flex md:flex-row flex-col gap-y-8 md:gap-y-0 items-start justify-between">
                <div className=" h-fit space-y-3 ">
                    <Image src="/logo.svg" alt="logo" width={100} height={100} className="w-42" />
                    <p className="text-lg text-white/60 max-w-70 leading-tight tracking-tight font-medium ">Create stunning visual designs with Stage fully in browser canvas editor</p>
                    <p className="text-lg text-white/60 max-w-70 font-bold leading-tight tracking-tight  ">&copy; 2025 Stage</p>
                </div>
                <a
                    href="https://www.producthunt.com/products/stage-4/reviews/new?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-stage&#0045;4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-80"
                >
                    <img
                        src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1127654&theme=dark"
                        alt="Stage - browser canvas editor that brings your ideas to life | Product Hunt"
                        style={{ width: "250px", height: "54px" }}
                        width="250"
                        height="54"
                    />
                </a>
            </div>
            <span className="text-gradient opacity-45 font-semibold h-28 md:h-78 md:text-[280px] text-7xl sm:text-8xl tracking-[-0.025em] normal-case mt-20">Stagee.art</span>
        </div>
    )
}

export default Footer