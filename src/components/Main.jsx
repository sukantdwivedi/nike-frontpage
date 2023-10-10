import React from 'react';
import shoe from '../images/shoe_image.png';
import amazon from '../images/amazon.png';
import flipkart from '../images/flipkart.png';

const Main = () => {
  return (
    <main className='flex max-w-6xl mx-auto my-10 '>
        <div className='w-6/12'>
            <div>
                <h1 className='text-8xl font-extrabold'>YOUR FEET DESERVE THE BEST</h1>
            </div>
            <div>
                <p className='text-[#5A5959] text-base my-8 font-semibold w-3/4'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            </div>
            <div className='flex gap-14'>
                <button className='bg-[#D01C28] py-1 px-4 font-semibold text-white'>Shop Now</button>
                <button className='border border-black py-1 px-4 font-semibold'>Category</button>
            </div>
            <div className='mt-8 font-normal'>
                <p>Also Available On</p>
                <div className='mt-4 flex gap-4 items-center align-middle'>
                    <img src={flipkart} alt="flipkart" />
                    <img src={amazon} alt="amazon" />
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <img src={shoe} alt="" />
        </div>
    </main>
  )
}

export default Main