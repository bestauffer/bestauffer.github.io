import React, { useEffect, useState } from 'react';
import myImg from "../Assets/Images/favicon.jpg";
import { getData, storeData } from '../services/storage.js';
import { apiPath } from "../config";


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
    return (
        <div class="screen-container">
            <h1 class="content">
                {username}
            </h1>
            <div style={{display:"flex", flexDirection:"row", backgroundColor:"green"}}>
              <img src={myImg} alt="image of Blake Stauffer"/>
              <div style={{padding:6, display:"flex", alignItems:"center", flexDirection:"column", backgroundColor:"orange"}}>
              <h2>Blake Stauffer</h2>
              <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/blake-stauffer-174163156/">LinkedIn Profile</a>
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/bestauffer">GitHub Profile</a>
              </div>
              
            </div>

            
        </div>
    );
};
 
export default Home;