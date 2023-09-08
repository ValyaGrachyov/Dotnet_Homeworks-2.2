import React, { useState }  from "react"
import axios from "axios"
import { useEffect } from "react"
import { useCookies } from "react-cookie"

const Admin = () => {
    const [data,setData] = useState();
    const [cookies, setCookie] = useCookies(['user']);
    

    const bearer = `Bearer ${cookies.Token} `

    useEffect(  () =>{
        axios.get("https://localhost:7130/Admin",{
        headers: {
            'Authorization' : bearer 
        }}

        ).then(function(response){
            setData(response.data)
        })
    },[])

    return(
        <div>
            <p>{data}</p>
        </div>
        
    )
    
    
}

export default Admin