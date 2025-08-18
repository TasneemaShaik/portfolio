import React from "react";
import { SITE } from "../data.js";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaInstagram, 
  FaYoutube 
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="text-black">
      
      {/* Section 1 - Contact */}
      <section className="flex flex-col items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black-400">Contact Me</h2>
          <p className="text-black-300 text-base mt-4 leading-relaxed">
            I am available on almost every social media. You can message me and I’ll reply within 24 hours.  
            I can help you with <span className="font-semibold text-black-400">ML, AI, React, Android, Cloud, and Open Source Development</span>.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8 text-3xl">
            <a href={SITE.linkedin} className="hover:text-blue-400 transition"><FaLinkedin /></a>
            <a href={SITE.github} className="hover:text-black-200 transition"><FaGithub /></a>
            <a href={SITE.youtube} className="hover:text-red-500 transition"><FaYoutube /></a>
            <a href={SITE.twitter} className="hover:text-sky-400 transition"><FaTwitter /></a>
            <a href={SITE.facebook} className="hover:text-blue-600 transition"><FaFacebook /></a>
            <a href={SITE.instagram} className="hover:text-pink-500 transition"><FaInstagram /></a>
          </div>

          <a
            href={SITE.resume}
            target="_blank"
            className="mt-10 px-8 py-3 bg-blue-600 text-black rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
          >
            See My Resume
          </a>
        </motion.div>
      </section>

      {/* Section 2 - Blogs */}
      <section className="flex flex-col items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center max-w-md"
        >
          <img
            src="/path/to/profile.png" 
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-blue-400 shadow-md hover:scale-105 transition"
          />
          <h2 className="text-3xl md:text-4xl font-semibold mt-6 text-black-400">Blogs</h2>
          <p className="text-black-300 text-base mt-4 leading-relaxed">
            I like to document some of my experiences in my professional career journey  
            as well as share technical knowledge.
          </p>
          <a
            href={SITE.blog || "#"}
            target="_blank"
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
          >
            Visit My Blogsite
          </a>
        </motion.div>
      </section>

    </div>
  );
}
