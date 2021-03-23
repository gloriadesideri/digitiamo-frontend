import React from "react";

function ResData({data}) {
    return(
        <div className="p-4  w-3/4 sm:w-1/3 " style={{maxHeight:"500px", minHeight:"500px"}}>
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                <div className="h-full pb-24  rounded-lg overflow-auto">
                    <p className=' text-left '>RESPONSE</p>

                    <div className='bg-gray-300 text-left mb-1 h-auto overflow-hidden   '>
                        <p className=' text-left mb-2  text-base overflow-auto '>{data} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResData
