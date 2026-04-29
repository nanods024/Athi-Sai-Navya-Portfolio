import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {

  const [showButton,setShowButton] = useState(false);

  useEffect(()=>{

    const handleScroll = ()=>{
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll",handleScroll);

    return ()=>window.removeEventListener("scroll",handleScroll);

  },[]);


  const scrollToTop = ()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  };


  return (

<footer className="footer">

<div className="footer-container">

<motion.p
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:.6}}
viewport={{once:true}}
className="footer-text"
>
©2026 Athi Sai Navya Portfolio. All Rights Reserved.
</motion.p>


<motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ once: true }}
  className="footer-subtext"
>
  Crafted with ❤️ by{" "}
  <a
    href="https://nanodigitalservices.onrender.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="footer-link"
  >
    Nano Digital Services
  </a>
</motion.p>

</div>


{/* Scroll Button */}

<AnimatePresence>

{showButton && (

<motion.button
initial={{scale:0,opacity:0}}
animate={{scale:1,opacity:1}}
exit={{scale:0,opacity:0}}
whileHover={{scale:1.1}}
whileTap={{scale:.9}}
onClick={scrollToTop}
className="scroll-top"
>

<FaArrowUp/>

</motion.button>

)}

</AnimatePresence>

</footer>

  );
};

export default Footer;