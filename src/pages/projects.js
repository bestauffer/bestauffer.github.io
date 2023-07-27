import React from "react";
 
const Projects = () => {
    return (
        <div class="screen-container">
            <h1 class="content">
                My Projects
            </h1>
            <ul>
                <li>KnowBetter App (3 months) - Visual Studio, Git/Github, C#, ASP.NET Core, MS SQL Server, LINQ </li>
                <li>Climbing Buddy App (3 months) - Android Studio, Kotlin, Sensor Data, SQLite, GraphQL with Apollo</li>
                <li><a href="https://earlybirds-ang.azurewebsites.net/823113" target="_blank">Early Bird (3 months)</a> - Angular.js, Express Node.js, Mongo DB</li>
                <li>Entity Relationships Trial App (3 months) - C#, ASP.NET Core, Pig Latin, Data Migration, MS SQL Server, LINQ</li>
                <li><a href="https://apps.apple.com/us/app/envko/id1605823113" target="_blank">Envko iOS App (6 months)</a> - React Native, Node.js, REST API, Mongo DB, Apple App Store </li>

            </ul>
        </div>
    );
};
 
export default Projects;