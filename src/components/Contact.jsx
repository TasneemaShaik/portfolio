import React from "react";
import { SITE } from "../data.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700">Contact Me</h2>
                    <p className="text-black-300 text-base mt-4 leading-relaxed">
                        I am available on almost every social media. You can message me and I will reply within 24 hours.
                        I can help you with <span className="font-semibold text-black-400">ML, AI, React, Android, Cloud, and Open Source Development</span>.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-6 mt-8 text-3xl">
                        {SITE.socials.filter(s =>
                            ["github", "linkedin"].includes(s.name.toLowerCase())
                        ).map((s) => (
                            <a
                                key={s.name}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400 transition"
                            >
                                {s.name.toLowerCase() === "github" && <FaGithub />}
                                {s.name.toLowerCase() === "linkedin" && <FaLinkedin />}
                            </a>
                        ))}
                    </div>

                    <a
                        href={`${import.meta.env.BASE_URL}${SITE.resume}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
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
                    <h2 className="text-3xl md:text-4xl font-semibold mt-6 text-blue-700">Blogs</h2>
                    <p className="text-black-300 text-base mt-4 leading-relaxed">
                        I like to document some of my experiences in my professional career journey
                        as well as share technical knowledge.
                    </p>
                    <a
                        href={`${import.meta.env.BASE_URL}${SITE.blog}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
                    >
                        Visit My Blogsite
                    </a>
                </motion.div>
            </section>
        </div>
    );
}
