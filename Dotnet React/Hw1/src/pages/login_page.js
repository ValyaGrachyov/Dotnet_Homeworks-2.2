import { useNavigate, Routes, Route} from 'react-router'
import React, { useState, useEffect } from 'react';
import  '../Styles/Login_page.css'


const LoginPage = (props) => {

    const [iscorrect,setIscorrect] = useState(true);

    const navigate = useNavigate();

    const RLogin='123';
    const RPass='321';

    let login='';
    let password=''; 

    

    function checkUser (){
        if(RLogin === login && RPass === password)
        {
            props.auth();
            navigate('/main')
        }
        else{
            setIscorrect(false);
        }
    }

    return(        
        <div>            
            <input placeholder="Логин" type='email' onChange={(e) => {
                login = e.target.value;
            }} />
            <input placeholder='Пароль' type='password' onChange={(e) => {
                password = e.target.value;
            }} />
            <button onClick={checkUser}>Войти</button>
            <p className='ErrorMessage' hidden={iscorrect}>Неверно введен логин или пароль</p>
        </div>
    );
}
export default LoginPage;