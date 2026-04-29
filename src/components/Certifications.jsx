import React from "react";
import { motion } from "framer-motion";
import { certificationsData } from "../data/certificationsData";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Certifications.css";

const Certifications = () => {

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="certifications" className="cert-section">

      <div className="container-custom">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="cert-title"
        >
          Certifications
        </motion.h2>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="cert-grid"
        >

          {certificationsData.map((cert) => (

            <motion.div
              key={cert.id}
              variants={item}
              whileHover={{ y: -8 }}
              className="cert-card"
            >

              {/* IMAGE */}
              <div className="cert-image-wrapper">

                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-image"
                />

                {/* OVERLAY */}
                <div className="cert-overlay">

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-button"
                  >
                    View Certificate <FaExternalLinkAlt />
                  </a>

                </div>

              </div>

              {/* CONTENT */}
              <div className="cert-content">

                <h3 className="cert-name">
                  {cert.title}
                </h3>

                <p className="cert-org">
                  {cert.organization}
                </p>

                <span className="cert-year">
                  {cert.year}
                </span>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default Certifications;