import { useState } from "react"
import { motion } from "framer-motion"
import { NAV_ITEMS } from "../data.js"

export default function Navbar({ active, setActive }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative">
            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 font-medium text-blue-900">
                {NAV_ITEMS.map((item) => (
                    <button
                        key={item}
                        onClick={() => setActive(item)}
                        className={`px-3 py-1 rounded-md transition ${active === item
                                ? "bg-blue-200 font-semibold"
                                : "hover:bg-blue-100"
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </nav>

            {/* Hamburger Toggle */}
            <button
                className="md:hidden text-gray-900 text-2xl"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "✕" : "☰"}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.nav
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute right-0 mt-3 w-48 bg-white/90 backdrop-blur-md rounded-lg shadow-lg flex flex-col py-4 px-6 space-y-4 md:hidden z-50"
                >
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                setActive(item)
                                setIsOpen(false)
                            }}
                            className={`text-left transition ${active === item
                                    ? "text-blue-600 font-semibold"
                                    : "text-gray-700 hover:text-blue-600"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </motion.nav>
            )}
        </div>
    )
}
