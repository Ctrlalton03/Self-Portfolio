import React from 'react';
import '../CSS/Projectpage.css';
import ProjectCard from '../components/projectcard';




const ProjectsPage = () => {
  const previewUrlMomentManager = 'https://api.microlink.io/?url=https%3A%2F%2Fmomentmanager.netlify.app%2F&screenshot=true&embed=screenshot.url';
  const preivewUrlCosmicAuto = 'https://api.microlink.io/?url=https%3A%2F%2Fcosmicauto.netlify.app%2F&screenshot=true&embed=screenshot.url'
  const previewUrlGoldenRetreat = 'https://api.microlink.io/?url=https%3A%2F%2Fthegoldenretreat.netlify.app%2F%23&screenshot=true&embed=screenshot.url'


  const projects = [
    {
      title:" Cosmic Auto",
      description: "Cosmic Auto is a fully responsive website designed for a professional car detailing service. The goal of this project was to provide an online platform where customers can explore various car detailing services, view past work, and book appointments with ease. The website incorporates modern web design trends to ensure a visually appealing and user-friendly experience.",
      url: "https://cosmicauto.netlify.app/",
      image: preivewUrlCosmicAuto
    },
    {
      title:"The Golden Retreat",
      description:" The Golden Retreat is a luxurious hotel landing page designed to capture the essence of comfort and relaxation. The goal is to create an engaging, informative, and visually striking website that showcases the hotel’s amenities, accommodations, and surrounding attractions.",
      url: "https://thegoldenretreat.netlify.app",
      image: previewUrlGoldenRetreat
    },
    {
      title: "Moment Manager",
      description: "Moment Manager is a task management web application designed to help users organize, create, and manage their daily tasks efficiently. This web app offers features such as task creation, editing, prioritization, and support for recurring events and customizable reminders.",
      url: "https://momentmanager.netlify.app/",
      image: previewUrlMomentManager
    },
  ];


  return (
  <>
    <section>
      <div className='projects-section'>
        <h2>My Projects</h2>

        <div className="projects-grid">
          
          {projects.map((project, index)=>(
            <ProjectCard key={index} project={project} />
          ))}

        </div>
      </div>

      <h1 className='TechStackTitle'>Tech Stack</h1>
      
      <div className='TechStack'>
        <div className='TechStackInfoContainer'>
          <h2>Cosmic Auto: Car Detailing Website</h2>
          <h3>Technologies Used:</h3>
          <p>
            Built with HTML5 and CSS3 for structure and styling, 
            along with JavaScript to power interactive features 
            like service selection and booking forms. The site is 
            fully responsive, designed using CSS Grid and Flexbox 
            to ensure seamless usability across devices.
          </p>
        </div>
        <div className='TechStackInfoContainer'>
          <h2>The Golden Retreat: Hotel Landing Page</h2>
          <h3>Technologies Used:</h3>
          <p>
            Developed using HTML5, CSS3, and JavaScript, with a 
            focus on CSS Animations to create smooth transitions 
            and hover effects. The layout is optimized for all 
            screen sizes through Media Queries and Flexbox.
          </p>
        </div>
        <div className='TechStackInfoContainer'>
          <h2>Moment Manager: Task Management Web App</h2>
          <h3>Technologies Used:</h3>
          <p>
            Built with React for dynamic interactions, alongside 
            HTML5, CSS3, and JavaScript for the core structure. 
            It leverages Local Storage for persistent data storage, 
            ensuring users can manage tasks without requiring login 
            or signup.
          </p>
        </div>
    </div>
    </section>
    
  </>
  );
};

export default ProjectsPage;