import SectionWrapper from './SectionWrapper.jsx'
import { blogs } from '../data.js'

export default function Blogs() {
  return (
    <SectionWrapper title="Blogs">
      {blogs.map((b) => (
        <div key={b.title} className="col-span-12 md:col-span-6 card">
          <h3 className="text-lg font-semibold">{b.title}</h3>
          <p className="text-gray-400">{b.summary}</p>
          <div className="pt-2">
            <a href={b.url} className="btn">Read</a>
          </div>
        </div>
      ))}
    </SectionWrapper>
  )
}
