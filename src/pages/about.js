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
      <p style={{marginTop: 0}}>{experience.description}</p>
    
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
        description: 'In this Capstone internship I worked on an application that focused on React-Native development for iOS. The application takes bank data and transforms that into a real carbon footprint that the user can see. We expanded the functionality of the app to include stock data and real estate data to help give a more realistic footprint & to allow the user to see the potential carbon footprint impacts of investing.  ',
        website: "https://envko.com/"
    }
  ];
  
  //const root = ReactDOM.createRoot(document.getElementById('root')); 
  //root.render(<About posts={posts} />);
export default About;