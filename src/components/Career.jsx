import { Link } from "react-router-dom";
import logoWhite from "../assets/images/logo-white.png";
import { LocaleContext } from "../context/LocaleContext";
import { Button } from "./Button";
import { useContext, useEffect, useState } from "react";
import { JD } from "./JD";

export const Career = () => {
  return (
    <div id="teams" className="teams container" style={{ color: "#fff" }}>
      <div className="row" style={{ justifyContent: "center" }}>
        <span
          className="heading"
          style={{
            textAlign: "center",
          }}
        >
          <span className="heading" style={{ color: "#4cafc8" }}>
            JOB OPENINGS AT
          </span>{" "}
          <img
            src={logoWhite}
            style={{ marginBottom: "8px" }}
            className="logo-header"
            alt="Devster Labs"
          />
        </span>
      </div>
      <div className="team-container">
        <div className="team-item">
          <span className="name">Data Scientist</span>
          <span className="txt18 semi op60">Experience: 5+ years</span>
          <span className="txt18 semi op60">Location: Remote</span>
          <hr style={{ width: "100%" }} />
          <JD
            desc={`
    <p>
      We are a forward-thinking organization dedicated to leveraging
      data-driven insights to solve complex business challenges. As a
      remote-first company, we prioritize flexibility, collaboration, and
      innovation, offering opportunities to work on exciting projects with
      a global team.
    </p>

    <h2>Job Summary</h2>
    <p>
      We are seeking an experienced Data Scientist with 5+ years of
      expertise to join our dynamic team. The ideal candidate will have a
      strong background in statistical analysis, machine learning, and
      data visualization, with a proven ability to translate complex data
      into actionable insights.
    </p>

    <h2>Key Responsibilities</h2>
    <ul>
      <li>
        Analyze large and complex datasets to identify trends, patterns,
        and actionable insights.
      </li>
      <li>
        Design and implement predictive models and machine learning
        algorithms to solve real-world problems.
      </li>
      <li>
        Collaborate with cross-functional teams to define business
        challenges and develop data-driven solutions.
      </li>
      <li>
        Develop and maintain scalable data pipelines and systems for data
        processing and analysis.
      </li>
      <li>
        Create intuitive visualizations and dashboards to communicate
        findings to stakeholders.
      </li>
      <li>
        Stay updated with the latest trends and advancements in data
        science and machine learning.
      </li>
      <li>
        Ensure data integrity and maintain best practices for data privacy
        and security.
      </li>
    </ul>
  `}
          />
        </div>
        <div className="team-item">
          <span className="name">React Native Developer</span>
          <span className="txt18 semi op60">Experience: 5+ years</span>
          <span className="txt18 semi op60">Location: Islamabad, PK</span>
          <hr style={{ width: "100%" }} />
          <JD
            desc={`<p>
  We are an innovative organization committed to building world-class
  mobile applications that deliver exceptional user experiences. Based in
  Islamabad, Pakistan, we foster a culture of collaboration, creativity, and
  growth. Join our dynamic team to work on exciting projects and cutting-edge
  technologies.
</p>

<h2>Job Summary</h2>
<p>
  We are seeking a highly experienced React Native Developer with 5+ years of
  expertise in developing high-performance, cross-platform mobile applications.
  The ideal candidate will have a deep understanding of mobile app development,
  proficiency in React Native, and a passion for delivering top-notch products
  to global clients.
</p>

<h2>Key Responsibilities</h2>
<ul>
  <li>
    Develop and maintain robust, scalable, and user-friendly mobile applications
    using React Native.
  </li>
  <li>
    Collaborate with cross-functional teams, including designers and backend
    developers, to create seamless and visually appealing user interfaces.
  </li>
  <li>
    Optimize applications for maximum performance and scalability across iOS and
    Android platforms.
  </li>
  <li>
    Debug and resolve technical issues, ensuring smooth application performance.
  </li>
  <li>
    Stay updated with the latest trends and advancements in React Native and
    mobile development technologies.
  </li>
  <li>
    Integrate third-party libraries and APIs to enhance application
    functionality.
  </li>
  <li>
    Participate in code reviews and maintain high standards of code quality and
    documentation.
  </li>
</ul>

<h2>Qualifications</h2>
<ul>
  <li>
    Bachelor’s or Master’s degree in Computer Science, Software Engineering, or
    a related field.
  </li>
  <li>
    5+ years of hands-on experience in mobile application development with at
    least 3 years in React Native.
  </li>
  <li>
    Proficiency in JavaScript, TypeScript, and related tools like Redux and
    MobX.
  </li>
  <li>
    Strong understanding of RESTful APIs, GraphQL, and third-party integration.
  </li>
  <li>
    Experience with native mobile development (Java/Kotlin for Android and
    Swift/Objective-C for iOS) is a plus.
  </li>
  <li>
    Familiarity with CI/CD pipelines and version control systems like Git.
  </li>
  <li>
    Excellent problem-solving and debugging skills, with a strong focus on
    performance optimization.
  </li>
  <li>
    Ability to work independently and collaboratively in a fast-paced
    environment.
  </li>
</ul>

<h2>What We Offer</h2>
<ul>
  <li>
    Competitive salary and benefits package, including performance-based
    incentives.
  </li>
  <li>Opportunities to work on challenging and innovative projects.</li>
  <li>
    A collaborative and inclusive work environment that fosters growth and
    learning.
  </li>
  <li>Professional development and training opportunities.</li>
  <li>Modern office facilities in the heart of Islamabad, Pakistan.</li>
</ul>`}
          />
        </div>
      </div>
      <Button />
    </div>
  );
};
