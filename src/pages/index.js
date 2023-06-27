import { useState, useEffect } from 'react';
//import {myMessag} from '../services/MyAPI.js';
 import { getData, storeData } from '../services/storage.js'; 
 import myImg from "../Assets/Images/favicon.jpg";
// import axios from "axios";
//const apiPath = "https://blakes-deno-server.onrender.com/static/message.txt";
//const apiPath = "http://localhost:8000";
const apiPath = "https://blakes-test-deno-server.onrender.com";
// const get = (url) => {
//   //console.log(apiPath + url);
//   return axios.get( url, );
// };

const Home = () => {
    const [username, setUsername] = useState('Message incoming.....');
    // useEffect(async () => {
      
    // }, []);

    useEffect(() => {
        
        async function fetchData() {
          try{
            const data = await getData("myMessage");
            if(data){
              await setUsername(data);
            }
            
          }
          catch{}
          
          // You can await here
          try {
            //    await axios.get(apiPath)
            //    .then(res => {
    
            const res = await fetch(`${apiPath}`);
            const response = await res.json();
            await setUsername(response.message);
            await storeData("myMessage", response.message);
            
              } catch {
                //await storeData("myUser", "error");
                setUsername("error with deno server... \nBut welcome to my profile");
                //if (onError) onError(error);
              }
        //setUsername(await getData("myUser"));
          // ...
        }
        fetchData();
      }, []); // Or [] if effect doesn't need props or state

    // const myMessag = () => {
    //     return async () => {
          
    //     };
    //   }
    //console.log("MyMessage");
   // const words = myMessag;
    //const words = 'hello';
    return (
        <div class="screen-container">
            <h1 class="content">
                {username}
            </h1>
            <div style={{display:"flex", flexDirection:"row", backgroundColor:"green"}}>
              <img src={myImg} alt="image of Blake Stauffer"/>
              <div style={{padding:6, display:"flex", alignItems:"center", flexDirection:"column", backgroundColor:"orange"}}>
              <h2>Blake Stauffer</h2>
              <p><a rel="noopener noreferrer" href="https://www.linkedin.com/in/blake-stauffer-174163156/">LinkedIn Profile</a></p>
              </div>
              
            </div>

            
        </div>
    );
};
 
export default Home;