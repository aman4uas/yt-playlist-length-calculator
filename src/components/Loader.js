import React from 'react'

export const Loader = (props) => {
  return (
    <div className={`${(props.loading) ? 'block' : 'hidden'}`}>
      <img className='h-[250px]' src="loader-img.gif" alt="Loader" />
    </div>
  )
}
