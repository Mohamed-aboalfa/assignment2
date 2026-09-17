import React from 'react'

function Card({title,description,img,alt,children}) {
  return (
    <div className='w-full flex flex-row justify-center items-center'>
    <div className='bg-white flex flex-col justify-center items-center w-1/3 h-64 gap-4 '>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={img} alt={alt} />
      {children}

  </div>
    </div>
  )
}

export default Card
