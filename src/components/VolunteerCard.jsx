import { motion } from "framer-motion";

export default function VolunteerCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.3 }}
      className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl shadow-lg p-6 border border-gray-700 hover:shadow-2xl max-w-3xl mx-auto my-4"
    >
      <h3 className="text-xl font-bold text-blue-400 mb-1">{item.title}</h3>
      <p className="text-gray-300 font-medium mb-1">
        {item.role} {item.organization && `– ${item.organization}`}
      </p>
      <p className="text-sm text-gray-400 mb-3">{item.duration}</p>
      <ul className="list-disc list-inside space-y-1 text-gray-300">
        {item.details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </motion.div>
  );
}
