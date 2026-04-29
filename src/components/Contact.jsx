import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram
} from "react-icons/fa";

import "./Contact.css";

const Contact = () => {

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    subject:"",
    message:""
  });

  const [submitted,setSubmitted] = useState(false);

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();

    setSubmitted(true);

    setTimeout(()=>{
      setFormData({
        name:"",
        email:"",
        subject:"",
        message:""
      });

      setSubmitted(false);

    },2000);
  };

  return (

<section id="contact" className="contact-section">

<div className="container-custom">

{/* TITLE */}
<motion.h2
initial={{opacity:0,y:-40}}
whileInView={{opacity:1,y:0}}
transition={{duration:.6}}
viewport={{once:true}}
className="contact-title"
>
Get In Touch
</motion.h2>


<div className="contact-grid">

{/* LEFT SIDE */}
<motion.div
initial={{opacity:0,x:-50}}
whileInView={{opacity:1,x:0}}
transition={{duration:.6}}
viewport={{once:true}}
className="contact-info"
>

<div className="info-item">
<FaMapMarkerAlt className="contact-icon"/>

<div>
<h3>Address</h3>
<p>
1400 Washington Ave<br/>
Albany, NY 12222, USA
</p>
</div>
</div>


<div className="info-item">
<FaEnvelope className="contact-icon"/>

<div>
<h3>Email</h3>
<a href="mailto:sainavyaathi@gmail.com">
sainavyaathi@gmail.com
</a>
</div>
</div>


{/* SOCIAL */}
<div className="info-item">

<div className="contact-icon">🔗</div>

<div>

<h3>Follow Me</h3>

<div className="social-links">

<a href="https://www.linkedin.com/in/sai-navya-athi-b54977248/">
<FaLinkedin/>
</a>

<a href="https://github.com/sainavyaathi">
<FaGithub/>
</a>

<a href="https://www.instagram.com/sai__navya03/">
<FaInstagram/>
</a>

</div>

</div>

</div>

</motion.div>


{/* FORM */}
<motion.form
initial={{opacity:0,x:50}}
whileInView={{opacity:1,x:0}}
transition={{duration:.6}}
viewport={{once:true}}
onSubmit={handleSubmit}
className="contact-form"
>

<input
type="text"
name="name"
placeholder="Your Name"
value={formData.name}
onChange={handleChange}
required
/>

<input
type="email"
name="email"
placeholder="Your Email"
value={formData.email}
onChange={handleChange}
required
/>

<input
type="text"
name="subject"
placeholder="Subject"
value={formData.subject}
onChange={handleChange}
required
/>

<textarea
name="message"
placeholder="Your message..."
rows="5"
value={formData.message}
onChange={handleChange}
required
/>

<button type="submit">

{submitted ? "✓ Message Sent!" : "Send Message"}

</button>

</motion.form>

</div>

</div>

</section>

  );
};

export default Contact;