import React, { useEffect, useState } from 'react';
import Blog from '../../Blog/Blog';
import './Blogs.css'



const Blogs = () => {
const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data)
        )
    },[])
    
    const [clicked, setClicked] = useState(false);
    const handleClick = () => setClicked(!clicked);  

    
    return (
        <div >


            <div className='my-20 '>
            <table className="table-auto border-collapse border-none w-[60%] mx-[5%] bg-white rounded-3xl text-xl mb-10 text-black">
      {/* Static Header */}
      <thead className=''>
        <tr className='text-left border-b-2 border-gray-200 '>
          <th className="border-none p-7">Items</th>
          <th className="border-none p-7">Current Bid</th>
          <th className="border-none p-7">Time Left</th>
          <th className="border-none p-7">Bid Now</th>
        </tr>
      </thead>

      {/* Dynamic Rows */}
      <tbody >
        {blogs.map((item) => (
          <tr  className='text-left border-t-2 border-gray-200' key={item.id}>
            <td className="border-none px-4 py-2 flex items-center gap-3">
               <img className='h-25 w-25 rounded-2xl' src={item.image} alt="" />
               <p>{item.title}</p> 

            </td>
            <td className="border-none px-4 py-2">{item.currentBidPrice}</td>
            <td className="border-none px-4 py-2">{item.timeLeft}</td>
            <td className="border-none px-4 py-2"><button onClick={handleClick} className={`text-4xl text-center ${clicked? 'text-red-400' : 'bg-white'}`}>♡</button></td>
            {/* <td className="border-none px-4 py-2"><img onClick={handleClick} className= {`h-7 w-7 ${
        clicked ? 'bg-red-600' : 'bg-white'
      }`} src={item.icon} alt="" /></td>  */}
          </tr>
        ))}
      </tbody>
    </table>

            </div>
           
        </div>
    );
};

export default Blogs;