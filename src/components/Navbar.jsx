import { NAV_ITEMS } from '../data.js'

export default function Navbar({ active, setActive }) {
  return (
    <nav className="flex flex-wrap gap-2 md:gap-3">
      {NAV_ITEMS.map(item => (
        <button 
          key={item}
          onClick={() => setActive(item)}
          className={`nav-link ${active === item ? 'nav-link-active' : ''}`}
        >
          {item}
        </button>
      ))}
    </nav>
  )
}
