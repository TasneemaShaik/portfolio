import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EDUCATION } from "../data";

function EducationCard({ degree, school, duration, description }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-gradient-to-r from-blue-100 to-blue-200 text-black rounded-2xl shadow-lg p-8 border border-gray-700 max-w-xl mx-auto"
    >
      <h3 className="text-2xl font-bold text-black-400">{degree}</h3>
      <p className="text-black-300 font-medium">{school}</p>
      <p className="text-sm text-black-400 mb-3">{duration}</p>
      <p className="text-black-300 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function Education() {
  return (
    <div className="py-10 space-y-20">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-16">Education</h2>
      {EDUCATION.map((edu, i) => (
        <EducationCard key={i} {...edu} />
      ))}
    </div>
  );
}
