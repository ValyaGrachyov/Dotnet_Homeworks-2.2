import './App.css';
import React, {useState} from 'react';
import axious from "axios"
import  './Styles/Task.css'
import JWT from './JWT/JWT';
import { Route, Routes } from 'react-router-dom';
import Admin from './JWT/admin';
import Simple from './JWT/simple';
import Auth from './O-Auth/o-auth';
import AfterAuth from './O-Auth/after-auth';

function App() {

  const [field1,SetField1] = useState();
  
  const SendInfo = () =>{
     axious.get("http://localhost:80/weatherforecast")
    .then((response) => console.log(response))
  }

  return (    

    <div>        
        <button onClick={SendInfo}>SendInfo</button>
    </div>
    // <Routes>
    //   <Route path='/' element={<JWT/>}></Route> 
    //   <Route path='/admin' element={<Admin/>}></Route>
    //   <Route path='/simple' element={<Simple/>}></Route>
    // </Routes>

    // <Routes>
    //   <Route path='/' element={<Auth/>}/>
    //   <Route path='/afterauth' element={<AfterAuth/>}/>
    // </Routes>


    
  );
}

export default App;


//Hw2
{/*
const [variant,setVariant] = useState("outlined")
  const [width,setWidth] = useState(0)
  const [im,setIm] = useState('Image')
  const variants = ['contained', 'outlined', 'text', 'string']
  const [ismoved,SetIsMoved] = useState(false)
  const [width2,setWidth2] = useState(0)
  const [variant2,setVariant2] = useState("text")

  
  function changeButton1 (){
    let random = 100 + Math.random() * 150
    let randomVar =  Math.floor(Math.random() * 4)
    setVariant(variants[randomVar])
    setWidth(random)
  }

  function changeButton2 (){
    let random = 100 + Math.random() * 150
    let randomVar =  Math.floor(Math.random() * 4)
    setVariant2(variants[randomVar])
    setWidth2(random)
  }


  function changeImg (){
    if(ismoved){
      setIm('Image')
      SetIsMoved(false)
    }
    else{
      setIm('ImageMove')
      SetIsMoved(true)
    }      
  }

<div className='DIV'>
      <label class="form-control">
        <input className="Checkbox" type="checkbox" name="checkbox" />
      </label>     
      <Button  variant={variant} sx={{width: {width}}} onClick={changeButton1}>Тык1</Button>
      <Button  variant={variant2} sx={{width: {width2}}} onClick={changeButton2}>Тык2</Button>
      <nav>
      <input type="checkbox" id="switch"
                    class="checkbox" />
        <label for="switch" class="toggle"></label>
          <img onClick={changeImg} className={im} src="https://bipbap.ru/wp-content/uploads/2019/09/kartinki-sobak_11.jpg"/>
      </nav>    
      
    </div> */}

//Hw1
{/*

import {Route, Routes} from 'react-router'
import LoginPage from './pages/login_page';
import ProtectedRoute from './pages/protected_route';
import Main from './pages/main';
import ListElement from './pages/list_element';
 <div >
      <Routes>
        <Route path='/' element= {<LoginPage auth={auth}/>} />
        <Route path='/main' element = {<ProtectedRoute isAuth={isauth}> <Main /></ProtectedRoute>}  />
        <Route path='/main/:id' element = {<ProtectedRoute isAuth={isauth} > <ListElement /> </ProtectedRoute>} /> 
        <Route path='/main/about' element={<ProtectedRoute isAuth={isauth}> {<h1>Песики</h1>}</ProtectedRoute>} />    
      </Routes>
    </div> 
    const [isauth,setIsAuth] = useState(false);

    function auth(){
      setIsAuth(true);
    }*/}