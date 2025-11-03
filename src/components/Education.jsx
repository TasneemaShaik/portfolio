import { motion } from "framer-motion";
import { FaBolt, FaLink } from "react-icons/fa";
import { EDUCATION } from "../data";

function EducationCard({
    degree,
    school,
    duration,
    description,
    NationalMerit,
    gpaUnweighted,
    gpaWeighted,
    classRank,
    subjects = [],
    links = [],
    image,
    index,
}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            className="flex flex-col md:flex-row justify-between items-stretch bg-white 
            rounded-2xl border border-gray-300 shadow-sm overflow-hidden 
            hover:shadow-md transition-all duration-300 max-w-6xl mx-auto"
        >
            {/* LEFT CONTENT */}
            <div className="flex-1 p-6">
                {/* HEADER – full width */}
                <div className="w-full bg-white mb-4 pb-2 border-b border-gray-300">
                    {/* Row 1: Degree + Duration */}
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">{degree}</h3>
                        </div>
                        <div className="text-right">
                            <span className="block text-sm md:text-base text-gray-700">
                                {duration}
                            </span>
                        </div>
                    </div>

                    {/* Row 2: School (below degree) */}
                    <div className="flex justify-between items-start mt-1">
                        <p className="text-md font-semibold text-gray-800">{school}</p>
                    </div>
                </div>

                {description && (
                    <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
                )}

                {/* GPA + RANK INFO */}
                {(NationalMerit || gpaUnweighted || gpaWeighted || classRank) && (
                    <div className="bg-[#d8e4ed] rounded-xl p-4 mb-4">
                        <ul className="space-y-2 text-gray-800">
                            {NationalMerit && (
                                <li className="flex items-start gap-2">
                                    <FaBolt className="text-orange-500 mt-1 flex-shrink-0" />
                                    <span>
                                        <strong>National Merit Semi-Finalist:</strong> {NationalMerit}
                                    </span>
                                </li>
                            )}
                            {gpaUnweighted && (
                                <li className="flex items-start gap-2">
                                    <FaBolt className="text-orange-500 mt-1 flex-shrink-0" />
                                    <span>
                                        <strong>Unweighted GPA:</strong> {gpaUnweighted}
                                    </span>
                                </li>
                            )}
                            {gpaWeighted && (
                                <li className="flex items-start gap-2">
                                    <FaBolt className="text-orange-500 mt-1 flex-shrink-0" />
                                    <span>
                                        <strong>Weighted GPA:</strong> {gpaWeighted}
                                    </span>
                                </li>
                            )}
                            {classRank && (
                                <li className="flex items-start gap-2">
                                    <FaBolt className="text-orange-500 mt-1 flex-shrink-0" />
                                    <span>
                                        <strong>Class Rank:</strong> {classRank}
                                    </span>
                                </li>
                            )}
                        </ul>
                    </div>
                )}

                {/* SUBJECTS */}
                {subjects.length > 0 && (
                    <div className="bg-[#d8e4ed] rounded-xl p-4 mb-4">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
                            <FaBolt className="text-orange-500" /> AP Subjects
                        </h4>
                        <ul className="space-y-2 text-gray-800">
                            {subjects.map((subj, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span>
                                        {subj.name}:{" "}
                                        <strong className="text-gray-900">{subj.score}</strong>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* LINKS */}
                {links && links.length > 0 && (
                    <div className="border-t border-gray-300 pt-3">
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
                                        className="text-blue-600 hover:text-blue-800 hover:underline"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* RIGHT IMAGE */}
            {image && (
                <div className="md:w-1/2 w-full bg-gray-50 flex justify-center items-center p-4 border-l border-gray-200">
                    <img
                        src={`${import.meta.env.BASE_URL}${image}`}
                        alt={degree}
                        className="rounded-xl shadow-xl w-full h-auto object-contain max-h-[900px] md:max-h-[900px]"
                    />
                </div>
            )}
        </motion.div>
    );
}

export default function Education() {
    return (
        <div className="py-10 space-y-16">
            {EDUCATION.map((edu, i) => (
                <EducationCard key={i} {...edu} index={i} />
            ))}
        </div>
    );
}
