import { useState, useEffect } from 'react';
//import {myMessag} from '../services/MyAPI.js';
import { getData, storeData } from '../services/storage.js'; 
import http from "../services/http.js";
const Home = () => {
    const [username, setUsername] = useState('hi');
    // useEffect(async () => {
        
    // }, []);

    useEffect(() => {
        async function fetchData() {
          // You can await here
        await getMyUser;
        setUsername(await getData("myUser"));
          // ...
        }
        fetchData();
      }, []); // Or [] if effect doesn't need props or state

    // const myMessag = () => {
    //     return async () => {
          
    //     };
    //   }

    const getMyUser = async () => {
        try {
            const res = await http.get("/users/1");
            //console.log("resssss=>", res);
            //const { data } = res;
            //console.log("data=>", data);
           await storeData("myUser", res);
           //  dispatch(setUser(data));
           //  const { tokens } = data;
           //  dispatch(setToken(tokens.token));
           //  dispatch(setUser(data.user));
           //  await storeData("xAuthToken", tokens.token);
      
           //  await storeData("user", data.user);
           //  // await storeData("authState", tokens.token);
           //  // await storeData("user", user);
           //  // await storage.store("user", data.user);
           //  onSuccess(res);
          } catch (error) {
            //if (onError) onError(error);
          }
        
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