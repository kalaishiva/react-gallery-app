import React from 'react'
import { useState } from 'react';

const ImageSearch = () => {

    const[text, setText] = useState("");
  return (
   
            <div className="flex w-full justify-center m-[50px] items-center ">
                <form className='w-full max-w-sm'>
                <div className="flex border border-purple-200 rounded">
                    <input
                    onChange={e =>setText(e.target.value)}
                        type="text"
                        className="block w-full px-6 py-3 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Search..."
                    />
                    <button className="px-7 text-white bg-purple-600 border-l rounded " type='submit'>
                        Search
                    </button>
                </div>
                </form>
            </div>
        );
    
  
}

export default ImageSearch