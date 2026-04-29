import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import profileImage from "../assets/profile2.png";
import "./Hero.css";

const roles = [
  "Data Analyst",
  "ML Enthusiast",
  "Cloud Explorer",
  "AI Researcher",
  "Data digger",
  "Web Developer",
  "Data Scientist",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home">
      <div className="container-custom">
        <div className="hero-grid">

          {/* TEXT SECTION */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p>Hello, I'm</p>

            <h1 className="hero-title">
              Athi Sai Navya
            </h1>

            <h2 className="hero-subtitle">
             Data Science Student
            </h2>

            {/* ROLE ANIMATION */}
            <div className="hero-role">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <p className="hero-description">
              Passionate about transforming data into insights and building
              beautiful web experiences. Currently exploring machine learning,
              cloud technologies, and modern web development.
            </p>

            {/* BUTTONS */}
            <div className="hero-buttons">

              <motion.a
                href="https://drive.google.com/file/d/1XiTbLyZ_f9F-u_HZgoNndbYI_0ZQ02sf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <FaDownload /> Download Resume
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline"
              >
                <FaEnvelope /> Contact Me
              </motion.a>

            </div>
          </motion.div>

          {/* IMAGE SECTION */}
          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hero-image-card"
            >

              {/* PROFILE IMAGE */}
              <div className="hero-placeholder">
                <img
                    src={profileImage}
                    alt="Athi Sai Navya"
                    className="hero-profile-image"
                    />
              </div>

              {/* GLOW EFFECT */}
              <div className="hero-glow"></div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;