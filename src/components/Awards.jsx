import AwardCard from "./AwardCard.jsx";
import { AWARDS } from "../data.js";

export default function Awards() {
    return (
        <div className="py-10 relative">
            <div className="relative mx-auto max-w-4xl">
                {/* Vertical timeline line */}
                <div className="absolute left-1/4 top-0 bottom-0 w-1 bg-gray-300"></div>

                {/* Categories and cards */}
                {Object.keys(AWARDS).map((category) => (
                    <div key={category} className="mb-16 flex">
                        {/* Category on left */}
                        <div className="w-1/4 text-right pr-4">
                            <h3 className="text-xl font-semibold capitalize">{category.replace("-", " ")}</h3>
                        </div>

                        {/* Cards on right */}
                        <div className="w-3/4 pl-4">
                            {AWARDS[category].map((award, i) => (
                                <AwardCard
                                    key={i}
                                    title={award.title}
                                    date={award.date}
                                    details={award.details}
                                    link={award.link}   // 👈 added link support
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
