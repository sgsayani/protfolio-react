import React, { useState } from "react";
import "./Mywork.css";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Mywork = ({ showAllProjects = false }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Only show 3 projects if not on ProjectsPage
  const projectsToShow = showAllProjects ? mywork_data : mywork_data.slice(0, 3);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleShowMore = () => {
    window.open("/projects", "_blank");
  };

  return (
    <section id="work" className="mywork">
      <div className="mywork-title">
        <h1>Projects</h1>
        <div className="title-underline" />
      </div>

      <div className="mywork-container">
        {projectsToShow.map((work, index) => {
          const isReverse = index % 2 === 1;
          return (
            <article
              key={index}
              className={`mywork-card ${isReverse ? "reverse" : ""}`}
            >
              <div className="mywork-content">
                <h2 className="project-title">{work.title}</h2>

                <div className="mywork-tags">
                  {work.skills?.map((s, i) => (
                    <span key={i} className="tag">
                      {s}
                    </span>
                  ))}
                </div>

                <p className="mywork-description">{work.description}</p>

                <div className="project-meta">
                  {work.company && (
                    <div className="meta-row">
                      <strong>Company:</strong> {work.company}
                    </div>
                  )}
                  {work.duration && (
                    <div className="meta-row">
                      <strong>Duration:</strong> {work.duration}
                    </div>
                  )}
                </div>

                <div className="mywork-buttons">
                  {work.github && (
                    <a
                      href={work.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-github"
                    >
                      View GitHub
                    </a>
                  )}
                  {work.demo && (
                    <a
                      href={work.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-demo"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>

              <div
                className="mywork-image"
                onClick={() => handleImageClick(work.w_img)}
              >
                <img src={work.w_img} alt={work.title} />
              </div>
            </article>
          );
        })}
      </div>

      {/* Show More Button only on Home */}
      {!showAllProjects && (
        <div className="mywork-showmore" onClick={handleShowMore}>
          <p>Show More</p>
          <img src={arrow_icon} alt="arrow" />
        </div>
      )}

      {/* Modal for previewing image */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="preview" />
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Mywork;
