import React from 'react';
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className='flex flex-row gap-5  items-center'>
     <button className='btn bg-red-500 text-white'>Latest</button>
     <Marquee className='' pauseOnHover={true}>
       <p className='text-lg font-medium  mx-3'><span className='text-red-700'>National:</span> Tulip Siddiq MP given jail sentence in Bangladesh after trial in her absence</p>
       <p className='text-lg font-medium  mx-3'><span className='text-red-700'>International:</span> England's Covid plan 'not working as hoped'</p>
       <p className='text-lg font-medium  mx-3'><span className='text-red-700'>Cricket:</span> Bangladesh edge out Ireland to level T20 series</p>
       <p className='text-lg font-medium  mx-3'><span className='text-red-700'>International:</span> England's Covid plan 'not working as hoped'</p>
     </Marquee>
    
    </div>
  );
};

export default BreakingNews;