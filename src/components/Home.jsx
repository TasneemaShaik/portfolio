import { hero } from "../data.js";

export default function Home() {
    return (
        <section
            id="home"
            className="w-full min-h-screen flex flex-col justify-center bg-[#fcf9e6] text-gray-800 px-4 sm:px-6 lg:px-8 py-16"
        >
            {hero.map((h, idx) => (
                <div
                    key={idx}
                    className={`max-w-6xl mx-auto mb-20 ${h.image
                        ? "grid lg:grid-cols-[300px_1fr] gap-8 items-start"
                        : "grid lg:grid-cols-[300px_1fr] gap-8 items-start" // keep same grid alignment for vertical symmetry
                        }`}
                >
                    {/* Left: Empty placeholder (if no image) to preserve alignment */}
                    {h.image ? (
                        <div className="flex justify-center lg:justify-start mt-2">
                            <div className="relative">
                                <img
                                    src={`${import.meta.env.BASE_URL}${h.image}`}
                                    alt="Profile"
                                    className="w-60 h-60 object-cover rounded-md shadow-lg border-4 border-white transform rotate-[-3deg]"
                                />
                                <p className="absolute -top-5 left-2 text-green-700 text-base italic font-semibold">
                                    That’s me →
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div></div> // keeps column structure consistent for vertical alignment
                    )}

                    {/* Right: Text Content */}
                    <div className="text-left flex flex-col justify-start mt-3">
                        <a
                            href={h.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 hover:text-green-700 transition-colors mb-2"
                        >
                            {h.title}
                        </a>

                        <h2 className="text-gray-700 text-base md:text-lg leading-relaxed mb-3">
                            {h.headline}
                        </h2>

                        <p className="text-slate-600 text-base md:text-lg italic">
                            {h.subtext}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}
