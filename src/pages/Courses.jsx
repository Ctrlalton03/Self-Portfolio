import React from 'react';
import '../CSS/Courses.css';

const CoursesPage = () => {
  return (
    <section className="courses-section">
      <h1>Courses & Learning Journey</h1>
      <p>
        Below are the key courses that have shaped my development as a front-end developer. While I’ve primarily self-taught through platforms like YouTube and GitHub, these formal resources provided a structured foundation.
      </p>

      {/* Course 1: The Odin Project */}
      <article className="course">
        <h2>The Odin Project</h2>
        <p>
          The Odin Project is a comprehensive, open-source web development curriculum that helped me build foundational skills in front-end development. I learned the full stack, but my primary focus was on <strong>HTML5, CSS3, JavaScript, and React.</strong> Through hands-on projects, I was able to practice real-world problem-solving.
        </p>
        <div className="Skill_learned">
          <h2>
            Key Skills Learned:
          </h2>
          <ul>
            <li>HTML5 & CSS3 fundamentals</li>
            <li>JavaScript (ES6) and DOM manipulation</li>
            <li>Responsive web design using CSS Grid and Flexbox</li>
            <li>React for building dynamic, interactive applications</li>
            <li>Version control with Git and GitHub</li>
          </ul>
        </div>
        <div className="projectsdone">
          <h2>Projects Completed</h2>
          <ul>
            <li>To-Do List</li>
            <li>Weather app</li>
            <li>Personal Portfolio site</li>
          </ul>
        </div>
        
      </article>

      {/* Course 2: Web Design Class (Community College) */}
      <article className="course">
        <h2>Web Development – Community College</h2>
        <p>
          This course was part of my web development foundation and focused on **design principles** and **basic front-end development**. It provided a solid introduction to web design concepts like layout, typography, and color theory, which I’ve applied in my self-taught journey.
        </p>
        <div className="Skill_learned">
          <h2>
            Key Skills Learned:
          </h2>
          <ul>
            <li>Basic HTML & CSS for building static websites</li>
            <li>Design fundamentals (typography, color theory, and layout)</li>
            <li>Introduction to responsive design</li>
          </ul>
        </div>
        <div className="projectsdone">
          <h2>Projects Completed</h2>
          <ul>
            <li>Several basic web design projects</li>
          </ul>
        </div>
      </article>

    </section>
  );
};

export default CoursesPage;