import React from "react";

function Response({server,location,date}) {
    return(
        <div className="p-4  w-3/4 sm:w-1/3 ">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="h-full pb-24  rounded-lg overflow-hidden">
                    <p className=' text-left '>RESPONSE</p>
                    <div className='bg-gray-300 text-left mb-1 h-1/4 '>
                        <p className=' text-left mb-2  text-base'>Server Name: {server}</p>
                    </div>
                    <div className='bg-gray-300 text-left mb-1 h-1/4  '>
                        <p className='text-left mb-2  text-base'>Date: {date} </p>
                    </div>
                    <div className='bg-gray-300 text-left mb-1 h-1/4  '>
                        <p className=' text-left mb-2  text-base'>Location: {location} </p>
                    </div>
                </div>
            </div>
        </div>
        )

}

export default Response
