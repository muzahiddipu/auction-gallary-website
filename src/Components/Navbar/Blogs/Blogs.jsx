import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../../Blog/Blog';
import toast, { Toaster } from "react-hot-toast";



const Blogs = () => {
const [blogs, setBlogs] = useState([]);
const [favorites, setFavorites]=useState([]);

    useEffect(()=>{
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data)
        )
    },[]);

    const handleFavorite = (blog) => {
      const exists = favorites.find((item) => item.id === blog.id);
      if (!exists) {
        setFavorites([...favorites, blog]);
        toast.success("Added to Favorites!");
      } else {
        toast("Already in favorites!", { icon: "⚠️" });
      }
    };


    
   
    return (
      <div className="overflow-x-auto my-10 ">
        <div className='text-black p-10'>
          <h1 className='text-3xl font-bold'>Active <span className='text-orange-400'>Auctions</span></h1>
          <p>Discover and bid on extraordinary items</p>
        </div>
        {/* <div className='grid grid-cols-4 p-10 gap-6'>
              <div className='col-span-3'>
                <table className="min-w-full bg-white rounded-2xl shadow-sm">
                  <thead>
                    <tr className="text-left text-black text-sm border-b">
                      <th className="px-6 py-4">Items</th>
                      <th className="px-6 py-4">Current Bid</th>
                      <th className="px-6 py-4">Time Left</th>
                      <th className="px-6 py-4">Bid Now</th>
                    </tr>
                  </thead>
                      <tbody>
                      {
                          blogs.map(blog=><Blog blog={blog}></Blog>)
                        }
                      </tbody>
                </table>
              </div>

                <div className='text-black bg-white h-auto shadow-md rounded-2xl text-center'>
                 <div className='p-5'>
                  <p className='text-2xl font-bold border-b-2 border-gray-200 mb-8'>♡ <span>Favourite Items</span></p>
                    <div className=' border-b-2 border-gray-200'>
                    <h3 className='text-2xl font-bold'>No favorites yet</h3>
                    <p className='text-gray-400 mt-4 text-xl'>Click the heart icon on any item to add it to your favorites</p>
                    </div>
                    <div>

                    </div>
                    <div className='text-2xl flex justify-between items-center mt-48'>
                      <h3>Total bids Amount</h3>
                      <h3>$0000</h3>
                  </div>
                 </div>
                </div>            
        </div> */}
         <div className="grid grid-cols-4 p-10 gap-6">
      {/* Left side: Blog Table */}
      <div className="col-span-3">
        <table className="min-w-full bg-white rounded-2xl shadow-sm">
          <thead>
            <tr className="text-left text-black text-sm border-b">
              <th className="px-6 py-4">Items</th>
              <th className="px-6 py-4">Current Bid</th>
              <th className="px-6 py-4">Time Left</th>
              <th className="px-6 py-4">Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <Blog
                key={blog.id}
                blog={blog}
                handleFavorite={handleFavorite}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Right side: Favorites section */}
      <div className="text-black bg-white h-auto shadow-md rounded-2xl text-center another-div">
        <div className="p-5">
          <p className="text-2xl font-bold border-b-2 border-gray-200 mb-8">
            ♡ <span>Favourite Items</span>
          </p>

          {favorites.length === 0 ? (
            <div className="border-b-2 border-gray-200 pb-8">
              <h3 className="text-2xl font-bold">No favorites yet</h3>
              <p className="text-gray-400 mt-4 text-xl">
                Click the heart icon on any item to add it to your favorites
              </p>
            </div>
          ) : (
            favorites.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between px-4 py-3 border-b"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-base text-gray-800 truncate max-w-[200px]">
                      {item.title}
                    </h4>
                    <div className="text-sm text-gray-600 mt-1">
                      ${item.currentBidPrice} &nbsp;&nbsp; Bids:{" "}
                      {item.totalBids}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

          <div className="text-2xl flex justify-between items-center mt-10 border-t pt-5">
            <h3 className="font-semibold">Total bids Amount</h3>
            <h3 className="text-blue-700 font-bold">
              $
              {favorites
                .reduce(
                  (acc, item) =>
                    acc + parseInt(item.currentBidPrice.replace(",", "")),
                  0
                )
                .toLocaleString()}
            </h3>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
      
      
    </div>


          
       
        
         
              
    );
};

export default Blogs;