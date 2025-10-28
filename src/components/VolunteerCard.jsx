import { motion } from "framer-motion";
import { FaBolt, FaLink } from "react-icons/fa";

export default function VolunteerCard({ item, index }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className="flex items-start gap-6 bg-white rounded-2xl border border-gray-300 
        transition-all duration-300 max-w-4xl mx-auto"
        >
            <div className="flex-1 w-full">
                {/* Header bar (full width, touching borders) */}
                <div className="px-4 py-2">
                    {/* First row → Title + Duration (inline) */}
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white truncate">
                            {item.title}
                        </h3>
                        <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 flex-shrink-0 ml-4">
                            {item.duration}
                        </span>
                    </div>

                    {/* Second row → Role + Organization */}
                    <div className="flex justify-between items-center mt-1">
                        <p className="text-md font-medium text-gray-800 dark:text-gray-200">
                            {item.role}
                        </p>
                        {item.organization && (
                            <h5 className="text-md font-semibold text-gray-700 dark:text-gray-300">
                                {item.organization}
                            </h5>
                        )}
                    </div>
                </div>

                {/* Role / Degree */}
                {item.degree && (
                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3 px-6 mt-3">
                        {item.degree}
                    </p>
                )}

                {/* Details */}
                <div className="p-6 pt-2" style={{ backgroundColor: "#d8e4ed" }}>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        {item.details.map((d, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <FaBolt className="text-orange-500 mt-1 flex-shrink-0" />
                                <span>{d}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Links Section (only show if links exist) */}
                    {item.links && item.links.length > 0 && (
                        <div className="mt-4 border-t border-gray-300 pt-3">
                            <h4 className="text-md font-semibold text-gray-800 flex items-center gap-2">
                                <FaLink className="text-blue-500" /> Related Links
                            </h4>
                            <ul className="mt-2 space-y-2">
                                {item.links.map((link, i) => (
                                    <li key={i}>
                                        <a
                                            href={`${import.meta.env.BASE_URL}${link.url}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline hover:text-blue-800"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
