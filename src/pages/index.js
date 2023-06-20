import { useState, useEffect } from 'react';
//import {myMessag} from '../services/MyAPI.js';
import { getData, storeData } from '../services/storage.js'; 
import http from "../services/http.js";
import axios from "axios";
const apiPath = "https://blakes-deno-server.onrender.com/users/1";
//const apiPath = "https://api.github.com/users/eunit99/repos"

// const get = (url) => {
//   //console.log(apiPath + url);
//   return axios.get( url, );
// };

const Home = () => {
    const [username, setUsername] = useState('');
    // useEffect(async () => {
        
    // }, []);

    useEffect(() => {


        // const githubResponse = async () => {
        //     const response = await fetch("https://api.github.com/search/repositories?q=android", {
        //         method: "GET",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //     });
        //     return response.json(); // For JSON Response
        //     //   return response.text(); // For HTML or Text Response
        // }




        async function fetchData() {
          // You can await here
          try {
            //    await axios.get(apiPath)
            //    .then(res => {
    
            const response = await fetch(apiPath, {
                method: "GET",
                headers: {
                    accept: "application/json",
                },
            });
            setUsername(response)
              } catch (error) {
                //await storeData("myUser", "error");
                setUsername("Welcome to my page");
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