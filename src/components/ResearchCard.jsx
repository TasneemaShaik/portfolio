import { motion } from "framer-motion";

export default function ResearchCard({ research, index }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            className="bg-white dark:bg-neutral-900 rounded-2xl border border-gray-300 
                 transition-all duration-300 max-w-4xl mx-auto overflow-hidden"
            style={{ backgroundColor: "#d8e4ed" }}
        >
            <div className="flex-1 w-full">
                {/* Header bar (full width, touching borders) */}
                <div className="bg-blue-200 px-4 py-2">
                    {/* First row → Title + Duration */}
                    <div className="flex justify-between items-center gap-4">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                            {research.title}
                        </h3>
                        <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 whitespace-nowrap">
                            {research.duration}
                        </span>
                    </div>

                    {/* Second row → Role + Organization */}
                    <div className="flex justify-between items-center mt-1">
                        <p className="text-md font-medium text-gray-800 dark:text-gray-200">
                            {research.role}
                        </p>
                        {research.organization && (
                            <h5 className="text-md font-semibold text-gray-700 dark:text-gray-300">
                                {research.organization}
                            </h5>
                        )}
                    </div>
                </div>

                {/* Details */}
                <div className="p-6">
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        {research.details.map((d, i) => (
                            <li key={i}>{d}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}
