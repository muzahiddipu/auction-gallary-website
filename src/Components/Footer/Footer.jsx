import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white'>
           <div className='flex flex-col gap-5 justify-center items-center p-20'>
                <div>
                    <h1 className='text-3xl font-semibold  text-[#003EA4]'>Auction <span className='text-[#FFD337] font-bold'>Gallary</span></h1>
                </div>
                <div className='flex gap-5 font-semibold text-xl text-black'>
                    <p>Bid.</p>
                    <p>Win.</p>
                    <p>Own.</p>
                </div>
                <div className='flex gap-7 text-black'>  
                    <p>Home</p>
                    <p>Auction</p>
                    <p>Categories</p>
                    <p>How to win</p>
                </div>
                <div className='font-semibold text-black'>
                    <p>©2025 AuctionHub. All rights reserved.</p>
                </div>
            </div> 
        </div>
    );
};

export default Footer;