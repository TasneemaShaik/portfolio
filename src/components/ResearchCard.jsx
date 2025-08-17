import { motion } from "framer-motion";

export default function ResearchCard({ research, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl shadow-lg p-6 hover:shadow-2xl border border-gray-700"
    >
      <h3 className="text-xl font-bold text-blue-400">{research.title}</h3>
      <p className="text-gray-300 font-medium">{research.role} – {research.organization}</p>
      <p className="text-sm text-gray-400 mb-3">{research.duration}</p>
      <ul className="list-disc list-inside space-y-1">
        {research.details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </motion.div>
  );
}
