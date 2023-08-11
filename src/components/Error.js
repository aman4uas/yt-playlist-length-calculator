import React from 'react'

export const Error = (props) => {
  return (
    <div className={`${(props.resultOut && props.error) ? `flex` : `hidden`} flex-col md:flex-row justify-center items-center text-center`}>
      <div className="px-4 my-4 md:my-0">
        {/*eslint-disable-next-line*/}
        <img src="error-img.png" alt="Error-Image" className="h-[100px]" />
      </div>
      <div className="px-4 flex items-center justify-center">
        <h1 className="text-xl text-[#FFC048] font-semibold font-mono">{props.error_msg}</h1>
      </div>
    </div>
  )
}
