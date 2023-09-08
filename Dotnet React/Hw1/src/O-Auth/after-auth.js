import axios from "axios";
import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"


const AfterAuth = () => {
    
    const [code,setCode] = useState('');
    const [searQuery, setSearchquery] = useSearchParams();
    const [actoken, setaccToken] = useState();
    const [idToken, setidToken] = useState();
    const [name,setName] = useState();
    const [email, setEmail] = useState();


    useEffect(()=>{
        setCode(searQuery.get("code"));
    },[])

    useEffect(() => {
        axios.get("https://localhost:7037/Auth?code="+ code)
        .then(function (response) {
            console.log(response);
            setaccToken(response.data.access_token);
            setidToken(response.data.id_token);
        } )
    },[code])
    
    function decode(){
        axios.get("https://oauth2.googleapis.com/tokeninfo?id_token="+ idToken)
        .then(function (response) {
            console.log(response);
            setEmail(response.data.email);
            setName(response.data.name);
        })
    }

    function info() {
        const bearer = `${actoken} `
        axios.options("https://www.googleapis.com/gmail/v1/users/valentinegrachyov@gmail.com/profile", {
            headers:{
                'Authorization' : bearer,
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Credentials': 'false',
                'Access-Control-Allow-Headers': 'content-type'
            }
        })
    }
    return(
        <>
            <p> Код с гугла : {code}</p>
            <p>Токен JWT: {actoken}</p>
            <button onClick={decode}>Дешифровать Токен</button>
            <button onClick={info}>Инфа о почте</button>
            <p>Email: {email}</p>
            <p>Name: {name}</p>
        </>
    )
}
export default AfterAuth