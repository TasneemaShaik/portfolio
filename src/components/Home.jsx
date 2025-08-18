import { hero, SITE } from '../data.js'

export default function Home() {
    return (
        <section
            id="home"
            className="w-full min-h-screen flex items-center"
            style={{ backgroundColor: "rgb(237, 249, 254)" }}
        >
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-4 sm:px-6 lg:px-8">

                {/* Left Content */}
                <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                    {/* Small Intro */}
                    <span className="text-accent tracking-wide text-sm uppercase block">
                        {hero.title}
                    </span>

                    {/* Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
                        {hero.headline}
                        <span className="text-accent">.</span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-slate-600 max-w-xl mx-auto lg:mx-0">
                        {hero.subtext}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-3 pt-4 flex-wrap justify-center lg:justify-start">
                        {SITE.socials.map((s) => (
                            <a
                                key={s.name}
                                href={s.url}
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent/10 transition"
                            >
                                {s.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
                    <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-2xl border border-accent/40 bg-white shadow-md overflow-hidden">
                        <img
                            src={hero.image}
                            alt="Hero"
                            className="w-full h-full object-cover rounded-2xl opacity-95 hover:scale-105 transition duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
