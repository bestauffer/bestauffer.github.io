import { useState, useEffect } from 'react';
//import {myMessag} from '../services/MyAPI.js';
import { getData, storeData } from '../services/storage.js'; 
import http from "../services/http.js";
import axios from "axios";
//const apiPath = "https://blakes-deno-server.onrender.com/static/message.txt";
const apiPath = "http://localhost:8000";

// const get = (url) => {
//   //console.log(apiPath + url);
//   return axios.get( url, );
// };

const Home = () => {
    const [username, setUsername] = useState('');
    // useEffect(async () => {
        
    // }, []);

    useEffect(() => {
        
        async function fetchData() {
          // You can await here
          try {
            //    await axios.get(apiPath)
            //    .then(res => {
    
            const res = await fetch(`${apiPath}`);
            const response = await res.json();
            setUsername(response.message);
            
              } catch {
                //await storeData("myUser", "error");
                setUsername("hi");
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

    const getMyUser = async () => {
        
        
      }

    //console.log("MyMessage");
   // const words = myMessag;
    //const words = 'hello';
    return (
        <div class="screen-container">
            <h1 class="content">
                {username}
            </h1>
            
        </div>
    );
};
 
export default Home;