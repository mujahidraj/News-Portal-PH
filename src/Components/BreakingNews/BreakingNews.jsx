import React from 'react';
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className='flex flex-row gap-5 bg-sky-200 items-center'>
     <button className='btn bg-red-500 text-white'>Latest</button>
     <Marquee className='' pauseOnHover={true}>
       <p className='text-lg font-medium text-red-700 mx-3'>Tulip Siddiq MP given jail sentence in Bangladesh after trial in her absence</p>
       <p className='text-lg font-medium text-red-700 mx-3'>England's Covid plan 'not working as hoped'</p>
       <p className='text-lg font-medium text-red-700 mx-3'>Bangladesh edge out Ireland to level T20 series</p>
       <p className='text-lg font-medium text-red-700 mx-3'>England's Covid plan 'not working as hoped'</p>
     </Marquee>
    
    </div>
  );
};

export default BreakingNews;