import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Ctasection = () => {
    return (
        <div className='max-w-screen-2xl relative mx-auto w-full h-fit flex md:flex-row flex-col items-center justify-between md:px-24 px-4 md:py-20 py-12 border-y border-[#333] bg-[#141619] space-y-12 md:space-y-0'>
            <div className=" h-full w-full flex flex-col items-start justify-between ">
                <div className="  ">
                    <h1 className='md:text-[68px] text-5xl leading-[1.1] tracking-tight font-semibold'>
                        Start <span className="text-gradient">Creating</span> With <br /> Stagee.art
                    </h1>
                </div>
                <div className="md:h-28 h-12 "></div>
                <div className="">
                    <Button label="Try Now it's free" />
                </div>
            </div>
            <div className="md:p-8 p-4 w-full h-full flex items-center justify-center">
                <Image src="/Banner1.png" alt="Stagee.art" width={800} height={800} className=' w-full h-full ' />
            </div>
        </div>
    )
}

export default Ctasection