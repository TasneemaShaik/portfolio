import { motion } from "framer-motion";

export default function AwardCard({ title, date, details, link }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mb-12 flex items-start"
        >
            {/* Connector from timeline line */}
            <div className="absolute left-0 top-8 flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-400 shadow"></div>
                <div className="w-8 h-0.5 bg-blue-400"></div>
            </div>

            {/* Card */}
            <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-gray-900 rounded-lg shadow-lg p-6 ml-12 max-w-md hover:scale-105 transition-transform">
                {link ? (
                    <a
                        href={`${import.meta.env.BASE_URL}${link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold mb-1 text-blue-700 hover:underline"
                    >
                        {title}
                    </a>
                ) : (
                    <h3 className="text-xl font-bold mb-1">{title}</h3>
                )}
                <p className="text-gray-600 mb-2">{date}</p>
                {details && details.length > 0 && (
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {details.map((d, idx) => (
                            <li key={idx}>{d}</li>
                        ))}
                    </ul>
                )}
            </div>
        </motion.div>
    );
}
