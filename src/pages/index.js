import React, { useEffect, useState } from 'react';
import myImg from "../Assets/Images/favicon.jpg";
import { getData, storeData } from '../services/storage.js';

const Home = () => {
  const [username, setUsername] = useState('Message incoming.....');

  useEffect(() => {

    async function fetchData() {
      
        const data = await getData("myMessage");
        if (data) {
          await setUsername(data);
        }

      // You can await here
      try {
        const res = await fetch(`${process.env.REACT_APP_API_PATH}`);
        const response = await res.json();
        await setUsername(response.message);
        await storeData("myMessage", response.message);

      } catch {
        //await storeData("myUser", "error");
        setUsername("error with deno server... \nBut welcome to my profile");
      }
      
    }

    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  return (
    <div class="screen-container">
      <div id="page-top" data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="72">
        <section id="contact">
          <div class="container">
            <h2 class="text-uppercase text-center text-secondary mb-0">{username}</h2>
            <hr />
            <div style={{ display: "flex", flexDirection: "row", backgroundColor: "green" }}>
              <img src={myImg} alt="image of Blake Stauffer" />
              <div style={{ padding: 6, display: "flex", alignItems: "center", flexDirection: "column", backgroundColor: "orange" }}>
                <h2>Blake Stauffer</h2>
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/blake-stauffer-174163156/">LinkedIn Profile</a>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/bestauffer">GitHub Profile</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

};

export default Home;