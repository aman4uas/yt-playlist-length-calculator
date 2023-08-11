import React from 'react'

export const Input = (props) => {
  return (
    <>
      <div className="hidden md:flex h-[50px] my-12 flex-row p-1 bg-transparent border  border-[#0DDB94] rounded ">
        <input className="w-[400px] text-white bg-transparent m-1" type="text" placeholder="https://www.youtube.com/playlist?list=ID" value={props.urlLink} onChange={props.urlChangeHandler} />
        <div className="w-[150px] flex justify-center items-center ml-1  hover:cursor-pointer bg-[#0DDB94] text-white text-bold rounded text-bold" onClick={props.getTime}>Get&nbsp;Duration</div>
      </div>

      <div className="flex md:hidden flex-col justify-center items-center -my-6">
        <div className="h-[45px] my-6 p-1 bg-transparent border  border-[#0DDB94] rounded ">
          <input className="w-[300px] text-white bg-transparent m-1 mt-1.5" type="text" placeholder="https://www.youtube.com/playlist?list=ID" value={props.urlLink} onChange={props.urlChangeHandler} />
        </div>
        <div className="w-[200px] h-[35px] flex justify-center items-center ml-1  hover:cursor-pointer bg-[#0DDB94] text-white text-bold rounded text-bold" onClick={props.getTime}><h1>Get&nbsp;Duration</h1></div>
      </div>
    </>

  )
}
