import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, filterOptions } from "../data/projectsData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4 }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.9,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container-custom">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="projects-title"
        >
          Academic Projects
        </motion.h2>

        {/* FILTER */}
        <div className="filter-container">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn ${
                activeFilter === filter ? "active-filter" : ""
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div
          layout
          variants={container}
          initial="hidden"
          animate="visible"
          className="projects-grid"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={item}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="project-card"
              >
                {/* IMAGE */}
                <div className="project-image">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-img"
                    />
                  ) : (
                    <span className="project-letter">
                      {project.title.charAt(0)}
                    </span>
                  )}

                  {/* OVERLAY */}
                  <div className="project-overlay">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-icon"
                    >
                      <FaGithub />
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-icon"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>

                  <span className="project-category">
                    {project.category}
                  </span>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="tech-stack">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;