import React from 'react';
import CourseCard from '../components/CourseCard';

const CoursesPage = () => {
  const courses = [
    {
      title: 'React for Beginners',
      description: 'Learn the basics of React, components, hooks, and state management.',
      certificateUrl: 'https://example.com/certificate'
    },
    {
      title: 'CSS Flexbox and Grid',
      description: 'Master modern layout techniques with CSS Flexbox and Grid.',
      certificateUrl: 'https://example.com/certificate'
    }
  ];

  return (
    <section>
      <h2>Completed Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            courseTitle={course.title}
            description={course.description}
            certificateUrl={course.certificateUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default CoursesPage;