import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaBrain, FaUsers, FaCheckCircle } from "react-icons/fa";
import profileImage from "../assets/profile4.png";
import "./About.css";

const About = () => {
  const highlights = [
    {
      icon: FaBriefcase,
      title: "Project Management",
      desc: "Managing workflows efficiently",
    },
    {
      icon: FaBrain,
      title: "Problem Solving",
      desc: "Analytical thinking approach",
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      desc: "Team-oriented mindset",
    },
    {
      icon: FaCheckCircle,
      title: "Projects Completed",
      desc: "7",
    },
  ];

  return (
    <section id="about" className="section bg-bg">
      <div className="container-custom">
        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl text-5xl font-bold text-center mb-16 gradient-text"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* LEFT SIDE IMAGE */}
      
            <div className="relative">
              <div >
                {/* PROFILE IMAGE */}
                <img
                  src={profileImage}
                  alt="Athi Sai Navya"
                  className="hero-profile-image"
                />
              </div>
            </div>
             

          {/* RIGHT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-text-muted mb-16 leading-relaxed">
              Passionate Data Science student with strong knowledge in Python,
              SQL, Machine Learning, and Cloud technologies. Experienced in
              building data-driven solutions and completing multiple real-world
              projects. Interested in solving real problems using analytics, AI,
              and modern web technologies.
            </p>

            {/* HIGHLIGHT CARDS */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    className="glass rounded-xl p-6 cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                  >
                    <Icon className="text-accent text-2xl mb-3" />

                    <h3 className="text-text-primary mb-2">{item.title}</h3>

                    <p className="text-text-muted text-sm">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
