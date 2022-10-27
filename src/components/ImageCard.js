import React from 'react';

const ImageCard = ({image}) => {

  //image tags are split and display seperately
  const tags = image.tags.split(',');
  return (
    
     <div className="w-full max-w-xs mb-5 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-slate-100">
    <img className="object-cover w-full h-56 " src={image.webformatURL} alt="avatar" />

    <div className="py-5 text-center">
        <div className="block text-2xl font-bold text-purple-500 " tabIndex="0" role="link">Photo by {image.user}</div>
        <ul className="text-medium text-slate-600">
          <li><strong>Views: </strong>{image.views}</li>
          <li><strong>Downloads: </strong>{image.downloads}</li>
          <li><strong>Likes: </strong>{image.likes}</li>
        </ul>
        <div className="px-6 py-4">
         {tags.map(tag => (<span key={image.id} className ="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>) )} 
         


          {/* <span className ="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
          <span className ="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
          <span className ="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag3</span>
        */} </div>
        
        
    </div>
</div>
    
    
   
  )
}

export default ImageCard;