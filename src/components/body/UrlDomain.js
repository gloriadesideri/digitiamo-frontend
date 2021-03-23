import React from "react";

function UrlDomain({server,protocol,path}) {

    return(
        <div className="p-4  w-3/4 sm:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-auto">
                <div className="h-full pb-24  rounded-lg overflow-hidden">
                    <p className=' text-left '>URL DOMAIN</p>
                    <div className='bg-gray-300 text-left mb-1 h-1/4 '>
                        <p className='padding-1 text-left mb-1 text-sm font-weight-bold md:text-lg'>DOMAIN</p>
                        <p className=' text-left mb-2  text-base'>{server}</p>
                    </div>
                    <div className='bg-gray-300 text-left mb-1 h-1/4  '>
                        <p className='padding-1 text-left mb-1 text-sm font-weight-bold md:text-lg'>SCHEME</p>
                        <p className='text-left mb-2  text-base'>{protocol} </p>
                    </div>
                    <div className='bg-gray-300 text-left mb-1 min-h-1/4  '>
                        <p className='padding-1 text-left mb-1 text-sm font-weight-bold md:text-lg'>PATH</p>
                        <p className=' text-left mb-2  text-base'>{path}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UrlDomain
