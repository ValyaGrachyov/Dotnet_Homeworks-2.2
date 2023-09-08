import axios from "axios";
import React, {useState} from "react";

const AxiousExample = () => {
    
    const [data,SetData] = useState([])
    const [val1,SetVal1] = useState()
    const [val2,SetVal2] = useState()
    const [op,SetOp] = useState()

    function A(){
        axios.post("http://localhost:4000/calc",{v1:val1, v2:val2, op: op })
      .then(function (response) {
        return response;
      })
      .then((response) => {SetData(response.data)})      
    }

    return(        
        <div>
            <input  onChange={(x) => {SetVal1(x.target.value)}} placeholder="Val1"></input>
            <input onChange={(x) => {SetVal2(x.target.value)}} placeholder="Val1"></input>
            <input  onChange={(x) => {SetOp(x.target.value)}} placeholder="Operation <+ - * / >"></input>
            <button onClick={A}>Calc</button>
            <p>Answer: {data}</p>
        </div>
        
    )
}


export default AxiousExample;