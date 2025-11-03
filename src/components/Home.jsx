import { hero } from "../data.js";

export default function Home() {
    return (
        <section
            id="home"
            className="w-full min-h-screen flex flex-col justify-center bg-[#fcf9e6] text-gray-800 px-4 sm:px-6 lg:px-8 py-16"
        >
            <div className="max-w-6xl mx-auto flex flex-col gap-20">
                {hero.map((h, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <div
                            key={idx}
                            className={`grid lg:grid-cols-2 gap-6 items-center ${!isEven ? "lg:[&>*:first-child]:order-2" : ""
                                }`}
                        >
                            {/* IMAGE SIDE */}
                            {h.image ? (
                                <div
                                    className={`flex justify-center ${isEven
                                            ? "lg:justify-start"
                                            : "lg:justify-end"
                                        }`}
                                >
                                    <img
                                        src={`${import.meta.env.BASE_URL}${h.image
                                            }`}
                                        alt="Profile"
                                        className={`w-100 h-90 md:w-50 md:h-81 object-contain rounded-md shadow-md border-0 border-white ${isEven
                                                ? "transform rotate-[-2deg]"
                                                : "transform rotate-[2deg]"
                                            }`}
                                    />
                                </div>
                            ) : (
                                <div></div>
                            )}

                            {/* TEXT SIDE */}
                            <div
                                className={`text-left flex flex-col justify-center ${isEven ? "lg:pl-2" : "lg:pr-2"
                                    }`}
                            >
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
                    );
                })}
            </div>
        </section>
    );
}
