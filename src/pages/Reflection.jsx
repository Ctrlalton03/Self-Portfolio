import React from 'react';
import '../CSS/Reflection.css';

const ReflectionsPage = () => {
  return (
    <section className="reflections-section">
      <h1>My Learning Reflections</h1>
      <p>
      As a self-taught front-end developer, I tailored my education through a combination of YouTube tutorials, The Odin Project, and hands-on learning with GitHub. This approach allowed me to focus on real-world projects, continuously improving my skills in HTML, CSS, JavaScript, and React, while learning how to collaborate and contribute through GitHub. In this reflection, I’ll outline the challenges I faced, what I learned, and how these experiences align with my career goal of becoming a proficient front-end developer.
      </p>

      <article className='ArticleContainer'>
        <h2>Yotube Tutorials</h2>
        <div className='ArticleContent'>
          <h3>Skills Learned</h3>
          <ul className='List_Skills'>
            <li>HTML5 and CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>Responsive Web Design</li>
            <li>JavaScript Dom Manipulation</li>
            <li>Building Components in React</li>
          </ul>
          <div className='ChallengesContainer'>
            <h3>Challenges Faced</h3>
            <p>
              <strong>Understanding Asynchronous Javascript:</strong> Initially, it was 
              challenging to grasp the concept of asynchronous JavaScript, especially
              with callbacks, promises, and async/await. However, with practice and
              building projects, I gained a better understanding of how to handle
              asynchronous code.
            </p>
            <p>
              <strong>Overwhelming Information:</strong> With so many tutorials and teaching 
              styles on youtube, it was often hard to decide which resources were the most reliable
              or how to structure the learning process effectively.
            </p>
            <p>
              <strong>Project-Based Learning:</strong> While Youtube offers plenty of tutorials, some 
              lacked deeper explanations for more complex projects. This led to confusion when building
              more complex projects.
            </p>
          </div>
          <div className='KeyContainer'>
            <h3>Key Takeaways</h3>
            <p>
              <strong>Persistence with Complex Concepts:</strong> Understanding async programming
              took time, but through multiple examples, rewatching tutorials, and practice, I eventually
              grasped the concept. it reinforced the importance of learning by repetition and practical application.
            </p>
            <p>
              <strong>Curating Reliable Resources:</strong> I learned to find trusted channels like Traversy 
              Media, Net Ninja, and Bro Code which provided clear explanations and project-based learning that made 
              complex topics easier to understand.
            </p>
            <p>
              <strong>Project Creation as Learning:</strong> YouTube tutorials provided a hands-on approach that 
              allowed me to build smaller projects and gradually tackle more complex ones, which helped solidify 
              the concepts I was learning.
            </p>
          </div>
        </div>
      </article>

      <article className='ArticleContainer'>
        <h2>The Odin Project</h2>
        <p>
          In addition to React, I spent a considerable amount of time improving my CSS skills. Learning Flexbox and Grid has made it easier to create responsive designs. I've also explored CSS frameworks like Bootstrap and Tailwind to speed up development and ensure consistency in my designs.
        </p>
      </article>

      <article className='ArticleContainer'>
        <h2>Reflection 3: Building Projects from Scratch</h2>
        <p>
          Building projects from scratch has been the most effective way to solidify my learning. Starting with simple projects like a To-Do List app, I gradually moved to more complex ones. Each project posed unique challenges, from debugging to refining UI elements, and each one taught me new strategies to enhance user experience.
        </p>
      </article>
    </section>
  );
};

export default ReflectionsPage;