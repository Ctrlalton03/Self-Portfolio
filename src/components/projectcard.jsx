import React from "react";
import '../CSS/projectcard.css';

const ProjectCard = ({project}) => {
    

    return (
        <div className="ProjectCard">
            <div className="ImgContainer">
                <img src={project.image} alt={project.title} />
            </div>
            <div className="Project-Info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <button>View Project</button>
                </a>
            </div>

        </div>
    );
};

export default ProjectCard;