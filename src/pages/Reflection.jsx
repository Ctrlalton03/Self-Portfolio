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
        <div className='ArticleContent'>
          <h3>Skills Learned</h3>
          <ul className='List_Skills'>
            <li>Version Control with Git</li>
            <li>React Framework</li>
            <li>Problem-Solving & Debugging</li>
          </ul>
          <div className='ChallengesContainer'>
            <h3>challenges Faced</h3>
            <p>
              <strong>Understanding JavaScript Closures & Scope:</strong> Learning how closures and 
              scope work in JavaScript was particularly challenging. It took time and several exercises 
              to fully understand how functions retain access to variables within their scope even after 
              execution.
            </p>
            <p>
              <strong>React State Management:</strong> Handling complex state in React, especially when 
              building components that interact with each other, was a major learning curve. It was 
              tough to understand how to manage props and state effectively without causing unnecessary 
              re-renders.
            </p>
            <p>
              <strong>Staying Motivated:</strong> Given that The Odin Project is self-paced, 
              staying motivated through some of the more difficult parts of the curriculum 
              4(like the JavaScript Algorithms section) was challenging. There were times 
              when progress felt slow.
            </p>

          </div>
          <div className='KeyContainer'>
            <h3>Key Takeaways</h3>
            <p>
              <strong>Real-World Projects Are Invaluable:</strong> The Odin Project emphasized 
              hands-on projects that simulate real-world scenarios, which helped me apply what 
              I learned in a meaningful way. These projects taught me how to think critically 
              and solve complex coding problems.
            </p>
            <p>
              <strong>Deeper Understanding of React:</strong> Through persistent practice, 
              I developed a stronger grasp of how to effectively use React Hooks, especially 
              useState and useEffect, to manage component state and lifecycle events.
            </p>
            <p>
              <strong>Community Support is Crucial:</strong> I learned the value of asking for help when 
              needed, as The Odin Project community was incredibly supportive when I encountered obstacles. 
              Engaging with peers also helped me better understand difficult concepts and find new approaches 
              to problem-solving.
            </p>
          </div>
        </div>
      </article>

      <article className='ArticleContainer'>
        <h2>GitHub & Version Control</h2>
        <div className='ArticleContent'>
          <h3>Skills Learned</h3>
          <ul className='List_Skills'>
            <li>Git Commands</li>
            <li>Branching & Merging</li>
            <li>Collaboration and Open Source</li>
            <li>Documentation and Workflow</li>
          </ul>
          <div className='ChallengesContainer'>
            <h3>challenges Faced</h3>
            <p>
              <strong>Understanding Git Workflow:</strong> At first, learning 
              the Git workflow—especially when working with branches—was confusing. 
              I struggled with merge conflicts and understanding when to use 
              different commands like rebase or merge.
            </p>
            <p>
             <strong>Resolving Merge Conflicts:</strong> Early on, resolving merge 
             conflicts was a daunting task. It was difficult to understand why 
             conflicts occurred and how to resolve them without losing important changes.
            </p>
            <p>
              <strong>Documentation Writing:</strong> Writing clear and concise project 
              documentation (e.g., README files) that was helpful to others required 
              practice. It was challenging to determine what information to include to make 
              the project easy to understand for collaborators.
            </p>
          </div>
          <div className='KeyContainer'>
            <h3>Key Takeaway</h3>
            <p>
              <strong>Mastery of Version Control is Essential:</strong> Over time, i became 
              comfortable with the Git workflow, learning how to handle complex branching and 
              merging processes
            </p>
            <p>
              <strong>Importance of Clear Documentation:</strong> Writing documentation taught 
              me the importance of clarity in communication. A well-written README file not 
              only helps others understand the project but also showcases the developer’s 
              professionalism and attention to detail.
            </p>
            <p>
              <strong>Open Source Collaboration is a Powerful Learning Tool:</strong> Contributing 
              to open-source projects helped me gain valuable experience working in collaborative 
              environments. I learned how to review code, follow coding standards, and ensure compatibility 
              across different setups.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ReflectionsPage;