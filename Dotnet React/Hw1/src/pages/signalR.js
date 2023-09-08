import React, {useEffect, useState} from "react";
import { HubConnectionBuilder, HttpTransportType } from "@microsoft/signalr";

const SignalR = () =>{

  const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [connection, setConnection] = useState(null);
    const [ chat, setChat ] = useState([]);

    
      useEffect(() => {
        if (connection == null) {
          const newConnection = new HubConnectionBuilder()
            .withUrl("https://localhost:7242/hub", {
                skipNegotiation: true,
                transport: HttpTransportType.WebSockets
            })
            .withAutomaticReconnect()
            .build();
          setConnection(newConnection);
        }
    
      }, [])

    useEffect(() => {
        if (connection) {
        connection.start().then(() => {
            console.log('Connected!');

            connection.on('ReceiveMessage', message => {  
            console.log(message)});
        }).catch(e => console.log('Connection failed: ', e));
      }
    }, [connection])

    const handleButtonClick = async () => {
          const chatMessage = {name: name, message: message}
        console.log(chatMessage)
        await connection.send('NewMessage', chatMessage)
    }

    return(
        <div>
            <input placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <input placeholder="Message" onChange={(e) => setMessage(e.target.value)}/>
            <button onClick={handleButtonClick}>Send Message</button>
            <div>
                <p>{chat}</p>
            </div>
        </div>
    )

    // const [connection, setConnection] = useState(null);    

    // useEffect(() => {
    //     if (connection == null) {
    //       const newConnection = new HubConnectionBuilder()
    //         .withUrl("https://localhost:7242/hub", {
    //             skipNegotiation: true,
    //             transport: HttpTransportType.WebSockets
    //         })
    //         .withAutomaticReconnect()
    //         .build();
    //       setConnection(newConnection);
    //     }
    
    //   }, [])

    // useEffect(() => {
        
    //     if (connection) {
    //     connection.start().then(() => {
    //         connection.on('NewMessage', (message) => {
    //         console.log("hi")
            
    //     })
    //   })
    // }
    // }, [connection])


    // function Send(){
    //     connection.send('SendMessage', {message :"hi"})
    // }

    // return(
    //     <div>
    //         <input></input>
    //         <button onClick={Send}>Send</button>
    //     </div>
    // )
}
export default SignalR;