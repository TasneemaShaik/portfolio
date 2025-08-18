import { useState } from "react"
import { NAV_ITEMS } from "../data.js"

export default function Navbar({ active, setActive }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative">
            {/* Hamburger toggle (mobile only) */}
            <button
                className="md:hidden text-[rgb(0,28,85)] font-extrabold px-2 py-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "✖" : "☰"}
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex flex-wrap gap-2 md:gap-3">
                {NAV_ITEMS.map((item) => (
                    <button
                        key={item}
                        onClick={() => setActive(item)}
                        className={`text-[rgb(0,28,85)] font-extrabold py-2 px-2 rounded transition-colors ${active === item ? "bg-gray-200" : "hover:bg-gray-100"
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </nav>

            {/* Mobile dropdown */}
            {isOpen && (
                <div className="fixed inset-0 top-14 bg-white z-50 md:hidden">
                    <nav className="flex flex-col gap-4 px-6 py-6">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item}
                                onClick={() => {
                                    setActive(item)
                                    setIsOpen(false)
                                }}
                                className={`text-[rgb(0,28,85)] font-extrabold text-lg text-left rounded py-2 transition ${active === item ? "bg-gray-200" : "hover:bg-gray-100"
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </nav>
                </div>
            )}

        </div>
    )
}
