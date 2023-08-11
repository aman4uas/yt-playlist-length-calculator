import React from 'react'

function Output(props) {
  return (
    <div className={`${(props.resultOut && !props.error) ? 'block' : 'hidden'} text-center`}>
      <div className="text-white font-semibold flex flex-col  justify-center items-center mb-10 leading-4">
        <p className="">Number of Videos : {props.timeString.num}</p><br />
        <p className="">Average length of Videos : {props.timeString.avg_size}</p><br />
        <p className="">Total Length of Playlist : {props.timeString.t100}</p>
      </div>
      <div className="text-[#D9D9D9] leading-3 flex flex-col justify-center items-center">
        <p>At 1.25x : {props.timeString.t125}</p><br />
        <p>At 1.50x : {props.timeString.t150}</p><br />
        <p>At 1.75x : {props.timeString.t175}</p><br />
        <p>At 2.00x : {props.timeString.t200}</p><br />
      </div>
    </div>
  )
}

export default Output