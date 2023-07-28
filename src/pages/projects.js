import React, {useEffect, useState} from "react";

const Projects = () => {
    const [getDate, setDate] = useState("1 month");
    useEffect(() => {

        async function fetchData() {
          // Gets the current date and checks how many months its been since 06/2023
          try {
            const date = new Date();
            const dateYear = date.getFullYear() - 2023;
            const dateMonth = date.getMonth() + 1;
            const totalMonths = ((dateYear * 12) + dateMonth) - 6;
            const monthString = (totalMonths != 1 ? totalMonths.toString() + " months" : totalMonths.toString() + " month");
            setDate(monthString);
    
          } catch {
            //await storeData("myUser", "error");
            setDate("1 month");
          }
          
        }
        fetchData();
      }, []); // Or [] if effect doesn't need props or state
    return (
        <div class="screen-container">
            <div id="page-top" data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="72">
                <section id="contact">
                    <div class="container">
                        <h2 class="text-uppercase text-center text-secondary mb-0">Projects</h2>
                        <hr />
                        <ul>
                            <li>KnowBetter App (3 months) - Visual Studio, Git/Github, C#, ASP.NET Core, MS SQL Server, LINQ </li>
                            <li>Climbing Buddy App (3 months) - Android Studio, Kotlin, Sensor Data, SQLite, GraphQL with Apollo</li>
                            <li><a href="https://earlybirds-ang.azurewebsites.net/823113" rel="noopener noreferrer" target="_blank">Early Bird (3 months)</a> - Angular.js, Express Node.js, Mongo DB</li>
                            <li>Entity Relationships Trial App (3 months) - C#, ASP.NET Core, Pig Latin, Data Migration, MS SQL Server, LINQ</li>
                            <li><a href="https://apps.apple.com/us/app/envko/id1605823113" rel="noopener noreferrer" target="_blank">Envko iOS App (6 months)</a> - React Native, JavaScript, JSX, HTML, CSS, Express Node.js, REST API, Mongo DB, Apple App Store, Heroku </li>
                            <li>Current Portfolio ({getDate}) - React, JavaScript, JSX, HTML, Sass, Deno.js, GitHub Static Hosting</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Projects;