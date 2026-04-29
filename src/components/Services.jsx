import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";
import "./Services.css";

const Services = () => {

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="services" className="services-section">

      <div className="container-custom">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="services-title"
        >
          Services
        </motion.h2>


        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="services-grid"
        >

          {servicesData.map((service) => {

            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={item}
                whileHover={{ y: -12 }}
                className="service-card"
              >

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="service-icon"
                >
                  <Icon />
                </motion.div>

                <h3 className="service-title">
                  {service.title}
                </h3>

                <p className="service-desc">
                  {service.description}
                </p>

              </motion.div>
            );

          })}

        </motion.div>

      </div>

    </section>
  );
};

export default Services;