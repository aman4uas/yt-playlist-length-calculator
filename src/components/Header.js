import React from 'react'

export const Header = (props) => {
  return (
    <div className="flex flex-col justify-stretch text-center -my-6 md:my-0">
      <h1 className={`font-extrabold text-3xl md:text-5xl py-3 ${(!props.resultOut) ? '' : 'text-2xl md:text-4xl'}`}>YouTube Playlist Length Calculator</h1>
      <p className={`${(!props.resultOut) ? 'block' : 'hidden'} text-[#D9D9D9] m-1 text-xs md:text-base md:m-2`}>Discover the perfect playlist length for your YouTube videos with our Playlist Length Calculator.</p>
    </div>
  )
}
