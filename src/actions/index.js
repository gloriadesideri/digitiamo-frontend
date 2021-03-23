import axios from 'axios'

export const getResponse =(url,body,token,method)=>dispatch=>{
     axios.post('http://localhost:5000/api/HTTP', {
        url: url,
        method: method,
        jbody: body,
        token: token
    }).then(res => {
        dispatch({
            type:'GET_RES',
            payload:res.data
             }
         )
    }).catch(e => {
        console.log(e)
    })

    }
export const getRoutes=()=>dispatch=>{

    axios.get('http://localhost:5000/api/pastRequests').then(res=>{
        dispatch({
                type:'GET_ROUTES',
                payload:res.data
            }
        )
    }).catch(e=>{
        console.log(e)
    })

}


