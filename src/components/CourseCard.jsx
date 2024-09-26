import React from 'react';

const CourseCard = ({ courseTitle, description, certificateUrl }) => {
  return (
    <div className="course-card">
      <h3>{courseTitle}</h3>
      <p>{description}</p>
      {certificateUrl && <a href={certificateUrl} target="_blank">View Certificate</a>}
    </div>
  );
};

export default CourseCard;