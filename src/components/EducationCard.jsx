import { motion } from "framer-motion"
import { FaBolt } from "react-icons/fa"

export default function EducationCard({ item, index }) {
  const renderDetails = () => {
    const details = []

    if (item.description) details.push(item.description)
    if (item.NationalMerit) details.push(`National Merit Semi-finalist: ${item.NationalMerit}`)
    if (item.gpaUnweighted) details.push(`Unweighted GPA: ${item.gpaUnweighted}`)
    if (item.gpaWeighted) details.push(`Weighted GPA: ${item.gpaWeighted}`)
    if (item.classRank) details.push(`Class Rank: ${item.classRank}`)

    return details.length > 0 ? (
      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
        {details.map((d, i) => (
          <li key={i} className="flex items-start gap-2">
            <FaBolt className="text-orange-500 mt-1 flex-shrink-0" />
            <span>{d}</span>
          </li>
        ))}
      </ul>
    ) : null
  }

  const renderSubjects = () => {
    if (!item.subjects || item.subjects.length === 0) return null

    return (
      <div className="mt-4">
        <h4 className="font-semibold text-blue-600 mb-2">AP Subjects</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          {item.subjects.map((subj, idx) => (
            <li key={idx}>
              {subj.name}: <span className="font-semibold">{subj.score}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const renderMedia = () => {
    const mediaItems = []

    // Add videos first
    (item.links || []).forEach(link => {
      if (link.type === "video") mediaItems.push(link)
    })

    // Add image
    if (item.image) {
      mediaItems.push({
        type: "image",
        url: item.image,
        label: item.imageLabel || item.degree || "Image",
      })
    }

    if (mediaItems.length === 0) return null

    return (
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {mediaItems.map((media, i) => {
          const isVideo = media.type === "video"
          const label = media.label || media.degree || ""

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden flex flex-col"
            >
              {isVideo ? (
                media.videotype === "youtube" ? (
                  <iframe
                    src={
                      media.url.includes("embed")
                        ? media.url
                        : media.url.replace("youtu.be/", "www.youtube.com/embed/")
                    }
                    title={label}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-video rounded-xl"
                    style={{ border: "none" }}
                  />
                ) : (
                  <video
                    src={`${import.meta.env.BASE_URL}${media.url}`}
                    controls
                    className="w-full aspect-video rounded-xl object-contain"
                  />
                )
              ) : (
                <img
                  src={`${import.meta.env.BASE_URL}${media.url}`}
                  alt={label}
                  className="w-full h-full object-contain rounded-xl"
                />
              )}

              {label && (
                <p className="mt-2 text-sm text-gray-700 font-medium text-center">{label}</p>
              )}
            </motion.div>
          )
        })}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-gray-300 shadow-sm overflow-hidden transition-all duration-300 max-w-5xl mx-auto"
    >
      {/* Header */}
      <div className="w-full bg-white px-6 py-4 border-b border-gray-300">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">{item.degree}</h3>
            <p className="text-md font-medium text-gray-800 mt-1">{item.school}</p>
          </div>
          <div className="text-right">
            <span className="block text-sm md:text-base text-gray-700">{item.duration}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 bg-[#d8e4ed]">
        {renderDetails()}
        {renderSubjects()}

        {/* Media always below content */}
        {renderMedia()}
      </div>
    </motion.div>
  )
}
