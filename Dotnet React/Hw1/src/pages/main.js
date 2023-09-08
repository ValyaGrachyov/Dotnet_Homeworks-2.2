import React, { useEffect, useState} from 'react';
import { Card } from 'antd';
import {  useNavigate } from "react-router";
import '../Styles/Main.css'

const { Meta } = Card;



const Main = () => {

    const [data,setData] = useState([]);
    const navigate = useNavigate()

    useEffect (() => {
        const requestOptions = {
            method : "GET",
            headers : { "Content-Type" : 'application/json',
               'x-api-key' : 'live_sae8Gf9mH4ZPtjuUUstRLdThlSyEH5mtH7EqH5jbnFDEud2OCChpkHTNE42ffPce'
            },
        };
    
        fetch ("https://api.thedogapi.com/v1/images/search?format=json&limit=10&order=ASC&has_breeds=1", requestOptions)
         .then(response => response.json())
         .then(data=>setData(data));         
      }, []);
      
      function More(){
        navigate('/main/about')
      }

      console.log('asd')

   return(
    <>
        <div className='Card'  >                
        {data.map((item) =>
            <button  key={item.id}  onClick={() => {
                navigate(`/main/${item.id}`);
            }}>
                
            <Card   hoverable style={{ width: 240}}
            cover={
                <img alt="LOADING" src={item.url}/>
            }>
        <Meta title={item.breeds.map((x) => x.name)} />
        </Card>
        </button>        
        )}
        <button onClick={More}>О странице</button>
        </div>            
    </> 
   )
}
export default Main;