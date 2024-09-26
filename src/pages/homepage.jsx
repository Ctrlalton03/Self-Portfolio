import React from 'react';
import '../CSS/Homepage.css';
import myImage from '../assets/Images/Portfolio-selfie.png';

const HomePage = () => {
  return (
    <div className='Contentbody'>
    
      <section className='HeaderText'>
        <h1>Welcome to My Self-Development Project</h1>
        <p>This portfolio showcases my journey in learning front-end development.</p>
      </section>
      <section className='BodyContentContainer'>
        <h1>About Me</h1>
      <div className='BodyContent'>
      <img src={myImage} alt="Myself" />
      <div className='BodyContentText'>
        <p>
          Hi, I’m Alton Simpson! I’m passionate about front-end development and currently learning how to create beautiful and interactive web experiences.
          When I’m not coding, I love going out and enjoying life with friends. Whether it's grabbing dinner, attending fun events, or simply hanging out, I believe that balance is key.
        </p>
        <p>
          My journey in web development started with HTML and CSS, and I’m now diving deep into JavaScript, React, and modern development tools. I’m fascinated by how the front-end can bring designs to life and improve user experiences.
          I enjoy turning ideas into functional, responsive websites, and I’m always looking for opportunities to learn and grow as a developer.
        </p>
        <p>
          Feel free to explore my projects and learning reflections. I hope my portfolio gives you a sense of both my technical journey and my personality.
        </p>
      </div>
        
      </div>
        
      </section>  
      <section className='BodyContentContainer'>
        <h2>My Skills</h2>
        <div className='SkillsListContainer'>
          <p>Here are some of the technologies and tools I've worked with:</p>
          <ul className="skills-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>C++</li>
            <li>Bootstrap</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Premiere Pro</li>
            <li>Adobe After Effects</li>
            <li>Responsive Design</li>
            <li>Git & GitHub</li>
            <li>Figma & Adobe XD</li>
            <li>PowerPoint</li>
            <li>Microsoft Word</li>
          </ul>
        </div>
      </section>
      <section className='BodyContentContainer' >
        <h2>Here Are the links to the Other Sections of my Project</h2>
      <div className="cta-buttons">
        <a href="/projects"><button>View My Personal Projects</button></a>
        <a href="/courses"><button>Completed Courses</button></a>
        <a href="/reflections"><button>Learning Reflections</button></a>
        <a href="/contact"><button>Contact Me</button></a>
      </div>
      </section>
      

    </div>
  );
};

export default HomePage;