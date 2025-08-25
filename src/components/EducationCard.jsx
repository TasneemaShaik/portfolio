import { motion } from "framer-motion"

export default function EducationCard({
    degree,
    school,
    duration,
    description,
    gpaUnweighted,
    gpaWeighted,
    classRank,
    subjects = [],
    index,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            className="flex items-start gap-6 bg-white dark:bg-neutral-900 
                 rounded-2xl shadow-md hover:shadow-xl transition-all 
                 duration-300 p-0 max-w-4xl mx-auto overflow-hidden"
            style={{ backgroundColor: "#fcf9e6" }}
        >
            <div className="flex-1 w-full">
                {/* Header bar */}
                <div className="bg-blue-200 px-4 py-2">
                    {/* First row → Degree + Duration */}
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                            {degree}
                        </h3>
                        <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 whitespace-nowrap">
                            {duration}
                        </span>
                    </div>

                    {/* Second row → School */}
                    <div className="flex justify-between items-center mt-1">
                        <p className="text-md font-medium text-gray-800 dark:text-gray-200">
                            {school}
                        </p>
                    </div>
                </div>

                {/* Body */}
                <div className="p-6">
                    {/* Description */}
                    {description && (
                        <p className="text-slate-800 dark:text-gray-200 leading-relaxed mb-4">
                            {description}
                        </p>
                    )}

                    {/* GPA + Rank */}
                    <div className="mb-4 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        {gpaUnweighted && (
                            <p>
                                <span className="font-semibold">Unweighted GPA:</span> {gpaUnweighted}
                            </p>
                        )}
                        {gpaWeighted && (
                            <p>
                                <span className="font-semibold">Weighted GPA:</span> {gpaWeighted}
                            </p>
                        )}
                        {classRank && (
                            <p>
                                <span className="font-semibold">Class Rank:</span> {classRank}
                            </p>
                        )}
                    </div>

                    {/* AP Subjects */}
                    {subjects.length > 0 && (
                        <div>
                            <h4 className="font-semibold text-blue-600 mb-2">AP Subjects</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-gray-300">
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
            </div>
        </motion.div>
    )
}
