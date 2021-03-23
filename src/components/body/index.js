import React, { useState} from 'react'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {useDispatch,useSelector} from "react-redux";
import {getResponse, getRoutes} from "../../actions/index";
import Response from "./Response";
import UrlDomain from "./UrlDomain";
import ResData from "./ResData";


function Body() {


    const[reqMethod, setReqMethod]=useState('get')
    const [endpoint, setEnd]=useState('')
    const [token,setToken]=useState('')
    const [body, setBody]=useState('{}')
    const response=useSelector(state=>state.routes).response
    const requests=useSelector(state=>state.routes).routes
    const dispatch=useDispatch()




    const handleSubmit= async (e) => {
        e.preventDefault()
        let jbody = JSON.parse(body)
        await dispatch(getResponse(endpoint,jbody,token,reqMethod))
        await dispatch(getRoutes())

    }
    const handleRestore= (req)=>{
        setReqMethod(req.method)
        setEnd(req.url)
    }



    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20 align-items-center px-4">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">{(response && response.responseData)? response.responseData.status:"CODE"}</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{(response && response.responseData) ?response.responseData.message:"YOUR MESSAGE"}</p>
                    <form onSubmit={handleSubmit} >

                        <div className='lg:w-1/2 w-auto  h-25 p-2 flex justify-content-between bg-gray-200 rounded-lg mb-4'>
                            <select  className='bg-white p-1 rounded-lg' onChange={(e)=>setReqMethod(e.target.value)}>
                                <option value='get' >GET</option>
                                <option value='post' >POST</option>
                                <option value='put' >PUT</option>
                                <option value='delete' >DELETE</option>


                            </select>
                            <input type='text' required value={endpoint} onChange={(e)=>setEnd(e.target.value)} className= 'bg-gray-200 focus:outline-none px-4'/>
                            <button type='submit' className='bg-blue-400 text-white p-1  rounded-lg'>SEND</button>
                        </div>


                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example mt-4">
                            <Tab eventKey="home" title="Body" >
                                <textarea id='myTextArea' className='w-100 h-50 border-2 border-gray-200 mt-4 rounded-lg' value={body} onChange={(e)=>setBody(e.target.value)}  placeholder='body in j-son string'></textarea>
                            </Tab>
                            <Tab eventKey="auth" title="Auth">
                                <input type="text" className='border-2 border-gray-200 mt-4 w-100 rounded-lg' value={token} onChange={(e)=>setToken(e.target.value)} placeholder='Bearer token'/>
                            </Tab>


                        </Tabs>

                    </form>

                </div>
                <div className="flex flex-wrap -m-4 justify-content-center ">


                    <UrlDomain
                        server={(response && response.responseData)? response.responseData.server:""}
                        protocol={(response && response.responseData)? response.responseData.protocol + response.responseData.version:""}
                        path={(response && response.responseData)? response.responseData.path:""}/>


                    <Response
                        server={(response && response.responseData)? response.responseData.serverName:""}
                        date={(response && response.responseData)? response.responseData.date:""}
                        location={(response && response.responseData)? response.responseData.location:""}/>



                    <ResData
                        data={(response && response.responseData)? response.responseData.data:""}/>
                    <div className="p-4  w-3/4 sm:w-1/3" >
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-auto" style={{maxHeight:"500px", minHeight:"500px"}}>
                            <div className="h-full pb-24  rounded-lg overflow-auto">
                                <p className=' text-left '>PAST REQUESTS</p>
                                {
                                    (requests && requests["requests"]) && requests["requests"].map(req=>{
                                        return (
                                            <div className='bg-gray-300 text-left mb-1 max-h-1/4 cursor-pointer ' onClick={()=>handleRestore(req)}>
                                                <p className=' text-left mb-2  text-base'>{req.url}</p>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </section>
    )

}

export default Body
