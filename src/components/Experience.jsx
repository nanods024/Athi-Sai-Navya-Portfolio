import React from "react";
import { motion } from "framer-motion";
import { timelineData } from "../data/timelineData";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container-custom">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="experience-title"
        >
          Project Timeline
        </motion.h2>

        <div className="timeline-container">

          <div className="timeline-line"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="timeline-card"
              >

                {/* DOT */}
                <div className="timeline-dot"></div>

                {/* YEAR */}
                <span className="timeline-year">{item.year}</span>

                {/* ICON + TITLE */}
                <h3 className="timeline-title">
                  <span className="timeline-icon">{item.icon}</span>
                  {item.title}
                </h3>

                {/* TYPE BADGE */}
                <span className="timeline-type">{item.type}</span>

                {/* DESCRIPTION */}
                <p className="timeline-desc">{item.description}</p>

              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;