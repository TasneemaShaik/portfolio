import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa";

export default function ExtracurricularCard({ item, index }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.10, ease: "easeOut" }}
            className="flex items-start gap-6 bg-white dark:bg-neutral-900 
           rounded-2xl border border-gray-300 
           transition-all duration-300 max-w-4xl mx-auto"
            style={{ backgroundColor: "#e4edd8" }}
        >
            <div className="flex-1 w-full">
                {/* Header bar (full width, touching borders) */}
                <div className="bg-white-200 rounded-t-2xl px-4 py-2">
                    {/* First row → Title + Duration */}
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                            {item.title}
                        </h3>
                        <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
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

                {/* Details */}
                <div className="p-6">
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        {item.details.map((d, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <FaBolt className="text-orange-500 mt-1 flex-shrink-0" />
                                <span>{d}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}
