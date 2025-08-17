import SectionWrapper from './SectionWrapper.jsx'
import { hero, SITE } from '../data.js'

export default function Home() {
  return (
    <SectionWrapper title="Home">
      <div className="col-span-12 lg:col-span-7 space-y-3">
        <span className="badge">{hero.title}</span>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{hero.headline}</h1>
        <p className="text-gray-400">{hero.subtext}</p>
        <div className="flex gap-2 pt-2 flex-wrap">
          {SITE.socials.map(s => (
            <a key={s.name} href={s.url} className="badge">{s.name}</a>
          ))}
        </div>
      </div>
      <div className="col-span-12 lg:col-span-5">
        <div className="aspect-square rounded-2xl border border-white/10 bg-[var(--panel)] grid place-items-center">
          <img src={hero.image} alt="Hero" className="w-2/3 opacity-95 rounded-xl" />
        </div>
      </div>
    </SectionWrapper>
  )
}
