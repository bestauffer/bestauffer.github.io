import React from "react";
 
const About = () => {

    const education = educations.map((education) =>
    
    <div key={education.id}>
      {/* <h3>{education.title}</h3> */}
      <p style={{marginBottom: 0}}>{education.school}</p>
      <p style={{marginTop: 0, marginBottom: 0}}>{education.gpa}</p>
      <p style={{marginTop: 0, marginBottom: 0}}>{education.attended}</p>
      <p style={{marginTop: 0}}>{education.graduated}</p>
    
    </div>
  );

  const experience = experiences.map((experience) =>
    
    <div key={experience.id}>
      {/* <h3>{education.title}</h3> */}
      <a target="_blank" rel="noopener noreferrer" href={experience.website} style={{marginBottom: 0}}>{experience.employer}</a>
      {/* <p style={{marginTop: 0, marginBottom: 0}}>{experience.website}</p> */}
      <p style={{marginTop: 0, marginBottom: 0}}>{experience.title}</p>
      <p style={{marginTop: 0, marginBottom: 0}}>{experience.years}</p>
      <p style={{ marginTop: 0}}>{experience.description}</p>
    
    </div>
  );

    



    return (
        <div class="screen-container">
            <h1 class="content">
                About Me
            </h1>
            <div style={{paddingLeft:"5%", width:"90%"}}>
            <h3>Education</h3>
            <div>{education}</div>
            <h3>Experience</h3>
            <div>{experience}</div>
            </div>
        </div>
    );
};
const educations = [
    {   id: 0, 
        school: 'Bellevue College - Software Development BAS, Application Development concentration', 
        gpa:'GPA: 3.89', 
        attended:'2020-2023', 
        graduated: 'Graduated: June 2023'
    },
    {   id: 1, 
        school: 'Edmonds Community College - AA', 
        gpa:'GPA: 3.4', 
        attended:'2017-2018',
        graduated: 'Graduated: December 2018'
    }
  ];

  const experiences = [
    {   id: 0, 
        employer: 'Envko', 
        title:'Application Developer Intern', 
        years:'Jan 2023 - June 2023', 
        description: "Throughout this project, I collaborated with envko and the product owner to help determine envkos needs and delegate tasks among the team. I served as the scrum master to ensure the team adhered to project timelines.\n My primary contribution included implementing several enhancements on the sponsors' application that made it more efficient and intuitive. Specifically, I added functionality, such as a Face-ID login, and optimized the codebase to improve its overall performance. Additionally, I resolved pre-existing security issues and incorporated a kg/lb toggle option, CSS updates, and new user content. These updates were instrumental in improving the application's user experience and consequently helped in leading to its successful release on the Apple App Store.",
        website: "https://envko.com/"
    }
  ];
  
  //const root = ReactDOM.createRoot(document.getElementById('root')); 
  //root.render(<About posts={posts} />);
export default About;