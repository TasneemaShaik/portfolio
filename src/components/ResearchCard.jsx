import { motion } from "framer-motion";
import { FaBolt, FaLink } from "react-icons/fa";

export default function ResearchCard({ research, index }) {
    const hasVideo = research.links?.some(link => link.type === "video");
    const videoLink = research.links?.find(link => link.type === "video");
    const hasImage = !!research.image;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="bg-white rounded-2xl border border-gray-300 shadow-sm overflow-hidden transition-all duration-300 max-w-5xl mx-auto"
        >
            {/* Header */}
            <div className="w-full bg-white px-6 py-4 border-b border-gray-300">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">
                            {research.title}
                        </h3>
                        <p className="text-md font-medium text-gray-800 mt-1">
                            {research.role}
                        </p>
                    </div>
                    <div className="text-right">
                        <span className="block text-sm md:text-base text-gray-700">
                            {research.duration}
                        </span>
                        {research.organization && (
                            <h5 className="text-md font-normal text-gray-700 mt-1">
                                {research.organization}
                            </h5>
                        )}
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="p-6" style={{ backgroundColor: "#d8e4ed" }}>
                {/* CASE 1️⃣ — No Video & No Image */}
                {!hasVideo && !hasImage && (
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div className="flex-1">
                            <ul className="space-y-3 text-gray-700">
                                {research.details.map((d, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <FaBolt className="text-orange-500 mt-1 flex-shrink-0" />
                                        <span>{d}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Related Links */}
                            {research.links?.length > 0 && (
                                <div className="mt-4 border-t border-gray-300 pt-3">
                                    <h4 className="text-md font-semibold text-gray-800 flex items-center gap-2">
                                        <FaLink className="text-blue-500" /> Related Links
                                    </h4>
                                    <ul className="mt-2 space-y-2">
                                        {research.links.map((link, i) => (
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
                )}

                {/* CASE 2️⃣ — Only Image */}
                {!hasVideo && hasImage && (
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div className="flex-1">
                            <ul className="space-y-3 text-gray-700">
                                {research.details.map((d, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <FaBolt className="text-orange-500 mt-1 flex-shrink-0" />
                                        <span>{d}</span>
                                    </li>
                                ))}
                            </ul>

                            {research.links?.length > 0 && (
                                <div className="mt-4 border-t border-gray-300 pt-3">
                                    <h4 className="text-md font-semibold text-gray-800 flex items-center gap-2">
                                        <FaLink className="text-blue-500" /> Related Links
                                    </h4>
                                    <ul className="mt-2 space-y-2">
                                        {research.links.map((link, i) => (
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

                        {/* Image on right */}
                        <div className="w-full md:w-1/2 flex justify-center items-start">
                            <img
                                src={`${import.meta.env.BASE_URL}${research.image}`}
                                alt={research.title}
                                className="rounded-xl shadow-md max-h-[250px] object-contain"
                            />
                        </div>
                    </div>
                )}

                {/* CASE 3️⃣ — Video + Image */}
                {hasVideo && hasImage && (
                    <>
                        <ul className="space-y-3 text-gray-700">
                            {research.details.map((d, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <FaBolt className="text-orange-500 mt-1 flex-shrink-0" />
                                    <span>{d}</span>
                                </li>
                            ))}
                        </ul>

                        {research.links?.length > 0 && (
                            <div className="mt-4 border-t border-gray-300 pt-3">
                                <h4 className="text-md font-semibold text-gray-800 flex items-center gap-2">
                                    <FaLink className="text-blue-500" /> Related Links
                                </h4>
                                <ul className="mt-2 space-y-2">
                                    {research.links.map((link, i) => (
                                        <li key={i}>
                                            {link.type === "video" ? (
                                                <span className="text-gray-600 text-sm">
                                                    {link.label}
                                                </span>
                                            ) : (
                                                <a
                                                    href={`${import.meta.env.BASE_URL}${link.url}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline hover:text-blue-800"
                                                >
                                                    {link.label}
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-6">
                            <div className="w-full md:w-1/2 flex justify-center">
                                <div className="relative pb-[56.25%] w-full max-w-md h-0 overflow-hidden rounded-xl shadow-md">
                                    <iframe
                                        src={videoLink.url}
                                        title={videoLink.label}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute top-0 left-0 w-full h-full rounded-xl"
                                    ></iframe>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 flex justify-center">
                                <img
                                    src={`${import.meta.env.BASE_URL}${research.image}`}
                                    alt={research.title}
                                    className="rounded-xl shadow-md max-h-[250px] object-contain"
                                />
                            </div>
                        </div>
                    </>
                )}

                {/* CASE 4️⃣ — Only Video (left-aligned) */}
                {hasVideo && !hasImage && (
                    <>
                        <ul className="space-y-3 text-gray-700">
                            {research.details.map((d, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <FaBolt className="text-orange-500 mt-1 flex-shrink-0" />
                                    <span>{d}</span>
                                </li>
                            ))}
                        </ul>

                        {research.links?.length > 0 && (
                            <div className="mt-4 border-t border-gray-300 pt-3">
                                <h4 className="text-md font-semibold text-gray-800 flex items-center gap-2">
                                    <FaLink className="text-blue-500" /> Related Links
                                </h4>
                                <ul className="mt-2 space-y-2">
                                    {research.links.map((link, i) => (
                                        <li key={i}>
                                            {link.type === "video" ? (
                                                <span className="text-gray-600 text-sm">
                                                    {link.label}
                                                </span>
                                            ) : (
                                                <a
                                                    href={`${import.meta.env.BASE_URL}${link.url}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline hover:text-blue-800"
                                                >
                                                    {link.label}
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="mt-6 flex justify-start">
                            <div className="relative pb-[29.25%] w-full max-w-md h-0 overflow-hidden rounded-xl shadow-md">
                                <iframe
                                    src={videoLink.url}
                                    title={videoLink.label}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                                ></iframe>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </motion.div>
    );
}
