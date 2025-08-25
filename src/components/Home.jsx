import { hero, SITE } from "../data.js";

export default function Home() {
    return (
        <section
            id="home"
            className="w-full min-h-screen flex flex-col gap-20 py-10"
            style={{ backgroundColor: "#fcf9e6" }}
        >
            {hero.map((h, idx) => (
                <div
                    key={idx}
                    className="container mx-auto grid grid-cols-1 gap-8 items-start px-4 sm:px-6 lg:px-8"
                >
                    {/* Left Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        {/* Clickable Title */}
                        <a
                            href={h.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xl sm:text-2xl md:text-4xl font-extrabold text-blue-600 hover:text-accent transition-colors block"
                        >
                            {h.title}
                        </a>

                        {/* Headline */}
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 leading-relaxed">
                            {h.headline}
                        </h2>

                        {/* Subtext */}
                        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 italic">
                            {h.subtext}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}
