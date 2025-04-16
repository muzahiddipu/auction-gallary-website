import React, { useState } from "react";

const Blog = ({ blog, handleFavorite }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    if (!clicked) {
      setClicked(true);
    }

    handleFavorite(blog)
  };

  return (
    <tr className="border-b hover:bg-gray-50 transition duration-150">
      <td className="px-6 py-4 flex items-center gap-4">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-14 w-14 object-cover rounded-md"
        />
        <span className="text-gray-800 font-medium">{blog.title}</span>
      </td>
      <td className="px-6 py-4 text-gray-700">{blog.currentBidPrice}</td>
      <td className="px-6 py-4 text-gray-700">{blog.timeLeft}</td>
      <td className="px-6 py-4">
        {/* <button
          onClick={handleClick}
          className={`text-2xl text-black hover:scale-110 transition ${
            clicked ? "text-red-500" : "text-gray-400"
          }`}
        >
          ♡
        </button> */}

       <button
      onClick={handleClick}
      disabled={clicked} // disables the button after it's clicked
      className={`text-4xl transition duration-300 transform hover:scale-110 
        ${clicked ? "text-red-500 cursor-not-allowed" : "text-black cursor-pointer"}`}
    >
      {/* Toggle between outlined and filled heart */}
      {clicked ? "♥" : "♡"}
       </button>
      </td>
    </tr>
  
  );
};

export default Blog;

