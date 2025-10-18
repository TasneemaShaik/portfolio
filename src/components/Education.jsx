import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EDUCATION } from "../data";

function EducationCard({
    degree,
    school,
    duration,
    description,
    gpaUnweighted,
    gpaWeighted,
    classRank,
    subjects = [],
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
            className="rounded-2xl shadow-lg border border-gray-300 bg-white overflow-hidden max-w-xl mx-auto"
        >
            {/* Header Bar (matches Volunteer pattern) */}
            <div className="bg-yellow-200 px-4 py-2">
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
