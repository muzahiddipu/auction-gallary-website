import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-background'>
           <div className='text-white flex flex-col gap-5 pt-[13%] pl-[10%]'>
            <div>
           <h1 className='font-bold text-5xl mb-6'>Bid on Unique Items from <br />Around the World</h1>
            </div>
            <div>
          <p className='text-xl mb-6'>Discover rare collectibles, luxury goods, and vintage <br />treasures in our curated auctions</p>
            </div>
            <div>
         <button className='btn btn-wide rounded-4xl font-bold text-base bg-white text-black'>Explore Auctions</button>
            </div>
           </div>
        </div>
    );
};

export default Banner;