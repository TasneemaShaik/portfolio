import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EDUCATION } from "../data";
import { FaBolt, FaLink } from "react-icons/fa";

function EducationCard({
    degree,
    school,
    duration,
    description,
    gpaUnweighted,
    gpaWeighted,
    classRank,
    subjects = [],
    links = []
}) {
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
            className="rounded-2xl shadow-lg border border-gray-300 bg-white overflow-hidden max-w-full max-h-full"
        >
            {/* Header Bar (matches Volunteer pattern) */}
            <div className="px-4 py-2">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        {degree}
                    </h3>
                    <span className="text-sm md:text-base text-gray-800">{duration}</span>
                </div>
                <p className="text-md font-medium text-gray-800">{school}</p>
            </div>

            {/* Body Content */}
            <div className="p-6" style={{ backgroundColor: "#d8e4ed" }}>
                {description && (
                    <p className="text-gray-800 leading-relaxed mb-4">{description}</p>
                )}

                {(gpaUnweighted || gpaWeighted || classRank) && (
                    <div className="mb-4 space-y-1 text-sm text-gray-700">
                        {gpaUnweighted && (
                            <p>
                                <span className="font-semibold">Unweighted GPA:</span>{" "}
                                {gpaUnweighted}
                            </p>
                        )}
                        {gpaWeighted && (
                            <p>
                                <span className="font-semibold">Weighted GPA:</span>{" "}
                                {gpaWeighted}
                            </p>
                        )}
                        {classRank && (
                            <p>
                                <span className="font-semibold">Class Rank:</span> {classRank}
                            </p>
                        )}
                    </div>
                )}

                {subjects.length > 0 && (
                    <div>
                        <h4 className="font-semibold text-blue-600 mb-2">AP Subjects</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            {subjects.map((subj, idx) => (
                                <li key={idx}>
                                    {subj.name}:{" "}
                                    <span className="font-semibold">{subj.score}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Links Section (only show if links exist) */}
                {links && links.length > 0 && (
                    <div className="mt-4 border-t border-gray-300 pt-3">
                        <h4 className="text-md font-semibold text-gray-800 flex items-center gap-2">
                            <FaLink className="text-blue-500" /> Related Links
                        </h4>
                        <ul className="mt-2 space-y-2">
                            {links.map((link, i) => (
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
        </motion.div>
    );
}

export default function Education() {
    return (
        <div className="py-10 space-y-20">
            {EDUCATION.map((edu, i) => (
                <EducationCard key={i} {...edu} />
            ))}
        </div>
    );
}
