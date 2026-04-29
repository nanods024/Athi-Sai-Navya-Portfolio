import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../data/skillsData";
import "./Skills.css";

const Skills = () => {

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="skills" className="skills-section">

      <div className="container-custom">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="skills-title"
        >
          Skills & Expertise
        </motion.h2>


        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="skills-grid"
        >

          {skillsData.map((skill, index) => (

            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              className="skill-card"
            >

              <div className="skill-header">

                <h3 className="skill-name">
                  {skill.name}
                </h3>

                <span className="skill-percentage">
                  {skill.percentage}%
                </span>

              </div>


              {/* Progress Bar */}
              <div className="progress-bar">

                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                />

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default Skills;