import React, {useState} from "react";
import {useCookies} from "react-cookie";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const JWT =() => {
const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');
   const [cookies, setCookie] = useCookies(['user']);
   const [token, setToken] = useState('');
   const [role, setRole] = useState('');
   const navigate = useNavigate();


   const auth = () => {

      

      
      setCookie('Token', token, {path: '/'});
      setCookie('Role', role, {path: '/'});

    axios.post('https://localhost:7130/Token/CreateToken', {
        name: name,
        password: pwd
      })
      .then(function (response) {
        setToken(response.data);
        setRole(jwtDecode(response.data)['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
      })
      .catch(function (error) {
        console.log(error);
      });    

      move();
   };
   
   const move =() => {
      if(role === 'admin')
      {
         navigate(`/admin`)
      }
      else if(role === `simple`)
      {
         navigate('/simple')
      }
      else{alert("Вас нет в базе")}
   }


   return (
      <div className="App">
      <h1>Name of the user:</h1>
      <input
         placeholder="name"
         value={name}
         onChange={(e) => setName(e.target.value)}
      />
      <h1>Password of the user:</h1>
      <input
         type="password"
         placeholder="password"
         value={pwd}
         onChange={(e) => setPwd(e.target.value)}
      />
      <div>
         <button onClick={auth}>Authorize</button>
      </div>
   </div>
   )
}
export default JWT;