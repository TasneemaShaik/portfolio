import { motion } from "framer-motion";

export default function EducationCard({ degree, school, duration, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-gradient-to-r from-blue-100 to-blue-200 text-white rounded-2xl shadow-lg p-6 hover:shadow-2xl border border-gray-700"
    >
      <h3 className="text-xl font-bold text-blue-400">{degree}</h3>
      <p className="text-gray-300 font-medium">{school}</p>
      <p className="text-sm text-gray-400 mb-3">{duration}</p>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  );
}
