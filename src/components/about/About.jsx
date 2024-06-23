import React from 'react';
import './about.css'; // Import the CSS file for styling

const About = () => {
  const skills = [
    { skill: 'JavaScript', percentage: 85 },
    { skill: 'CSS', percentage: 80 },
    { skill: 'HTML', percentage: 85 },
    { skill: 'React', percentage: 75 },
    { skill: 'NodeJs', percentage: 70 },
    { skill: 'MongoDB', percentage: 70 },
    { skill: 'Git', percentage: 60 },
  ];
  return (
    <div id="about">
      <div className="content">
        <div className="card">
          <div className="card-left">
            <h2>About Me</h2>
            <p>
            I am a dynamic and detail-oriented Full Stack Developer with 1 year of hands-on experience at Gaian Solutions, specializing in coding and building scalable, responsive web applications. My journey as a developer has equipped me with proficiency in a wide array of technologies, including React, JavaScript, CSS, Node.js, MongoDB, Express.js, and MySQL. I have a demonstrated expertise in front-end development, API orchestration, and integrating complex features such as interactive maps and multilingual support.I have developed and deployed critical front-end components, designed robust software solutions, and created multiple UML diagrams, schemas, and API orchestration workflows.
              <br />
              <br />
              Education-wise, I completed a Full Stack Web Development course at 10X Academy from July 2022 to May 2023. I also hold a B.Tech degree in Food Technology from K.K. Wagh College of Technology, Nashik.
              <br />
              <br />
              In addition to my technical skills, I possess valuable soft skills such as being a team player, effective time management, and adaptability. These skills have been instrumental in collaborating with teams and delivering successful projects. I am committed to continuous learning and improvement, consistently striving to deliver high-quality software solutions in a professional setting.
            </p>
          </div>
          <div className="card-right">
            <h2>Technical Skills</h2>
            {skills.map((skill) => (
            <div className="skill-bar" key={skill.skill}>
              <span className="skill-name">{skill.skill}</span>
              <div className="bar">
                <div className="progress" style={{ width: `${skill.percentage}%` }}>
                  <span className="percentage">{skill.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
