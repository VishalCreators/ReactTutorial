import React from 'react'
import Card from './Card'
import data from './Data'
function Foreground() {
  const ref=React.useRef(null);
  return (
   <div ref={ref} className='relative w-full h-screen z-3   '>
    
    <div className='absolute top-1/7 flex gap-10 flex-wrap justify-center px-10 '>
        {data.map((item,index)=>(
          <Card data={item} reference={ref}/>
        ))}
        

    </div>
   </div>
  )
}

export default Foreground