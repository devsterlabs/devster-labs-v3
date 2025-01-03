import { Link } from "react-router-dom";
import logoWhite from "../assets/images/logo-white.png";
import { Button } from "./Button";
import JobModalCSS from "./JobModal.module.css";
import { useState } from "react";

const JobModal = ({ isOpen, onClose, job }) => {
  if (!isOpen) return null;

  return (
    <div className={JobModalCSS.modalOverlay}>
      <div className={JobModalCSS.modalContent}>
        <button className={JobModalCSS.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>{job.title}</h2>
        <p>
          <strong>Experience:</strong> {job.experience} years
        </p>
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        <h2 style={{ marginTop: "20px" }}>Description:</h2>
        <div
          dangerouslySetInnerHTML={{ __html: job.description }}
          style={{ textAlign: "left" }} // Optional styling
          className={JobModalCSS.description}
        />
        <button
          onClick={() => {
            window.open("https://apply.devsterlabs.com");
          }}
          className={JobModalCSS.applyButton}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export const Career = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState({});
  const openJob = (id) => {
    const job = jobs.filter((job) => job.id === id)[0];
    console.log(job);
    setSelectedJob({ ...job });
    setIsOpen(true);
  };
  const jobs = [
    {
      title: "Data Scientist",
      experience: "5+ years",
      location: "Remote",
      id: "1",
      description:
        "<p>We are looking for an experienced <strong>Data Scientist</strong> to join our team. Your responsibilities include:</p><ul><li>Analyzing large datasets</li><li>Building predictive models</li><li>Collaborating with cross-functional teams</li></ul>",
    },
    {
      title: "React Native Developer",
      experience: "5+ years",
      location: "Islamabad, PK",
      id: "2",
      description:
        "<p>As a <strong>React Native Developer</strong>, you will:</p><ul><li>Develop mobile applications</li><li>Work with cross-platform frameworks</li><li>Ensure app performance and stability</li></ul>",
    },
    {
      title: "Data Annotator",
      experience: "1 year",
      location: "Remote",
      id: "3",
      description:
        "<p>Join us as a <strong>Data Annotator</strong> to:</p><ul><li>Label and classify datasets</li><li>Work remotely</li><li>Contribute to AI projects</li></ul>",
    },
  ];

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
      <div className="career-container">
        {jobs.map((job, index) => (
          <div className="team-item" key={job.id}>
            <span className="name">{job.title}</span>
            <span className="txt18 semi op60">
              Experience: {job.experience}
            </span>
            <span className="txt18 semi op60">Location: {job.location}</span>
            <hr style={{ width: "100%" }} />
            <div className="btn-container">
              <span className="txt18 semi op60" style={{ color: "#fff" }}>
                Posted: 05/01/2025
              </span>
              <Link
                to={"/career?id=" + job.id}
                onClick={() => {
                  openJob(job.id.toString());
                }}
              >
                View Job Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Button />
      <JobModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(!isOpen);
        }}
        job={selectedJob}
      />
    </div>
  );
};
