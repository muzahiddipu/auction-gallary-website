import React from 'react';
import './Blog.css'
const Blog = ({blog}) => {
    return (
        <div>
           <table className='w-10/12 mx-auto'>
           <tr >
                <td className='p-5 flex gap-16  items-center'>
                    <img className='h-25 w-25 rounded-2xl'src= {blog.image} alt="" />
                    <p>{blog.title}</p>
                </td>
                <td className='flex gap-5 items-center'>
                    <p>{blog.currentBidPrice}</p>
                    <p>{blog.timeLeft}</p>
                    <img className='h-8 w-8' src="https://cdn-icons-png.flaticon.com/512/3141/3141738.png" alt="" />
                </td>
                
                
                    
                
            </tr>
           </table>
        </div>
    );
};

export default Blog;
