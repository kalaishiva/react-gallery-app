import React from 'react';

import './index.css';

function App() {
  return (
    <div >
     <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-cyan-50">
    <img className="object-cover w-full h-56" src="https://source.unsplash.com/random" alt="avatar" />

    <div className="py-5 text-center">
        <a href="#" className="block text-2xl font-bold text-purple-500 " tabIndex="0" role="link">Photo by John Doe</a>
        <ul className="text-medium text-slate-600">
          <li><strong>Views: </strong>4000</li>
          <li><strong>Downloads: </strong>300</li>
          <li><strong>Likes: </strong>400</li>
        </ul>
        <div className="px-6 py-4">
          <span className ="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
          <span className ="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
          <span className ="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag3</span>
        </div>
        
        
    </div>
</div>
    
    
    </div>
  );
}

export default App;
