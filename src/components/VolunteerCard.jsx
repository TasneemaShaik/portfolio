import { motion } from "framer-motion";
import { FaBolt, FaLink } from "react-icons/fa";

export default function VolunteerCard({ item, index }) {
  // Render main details
  const renderDetails = () =>
    item.details?.length > 0 && (
      <ul className="space-y-3 text-gray-700">
        {item.details.map((d, i) => (
          <li key={i} className="flex items-start gap-2">
            <FaBolt className="text-orange-500 mt-1 flex-shrink-0" />
            <span>{d}</span>
          </li>
        ))}
      </ul>
    );

  // Render related links (non-video)
  const renderLinks = () => {
    const nonVideoLinks = item.links?.filter(link => link.type !== "video" && link.type !== "podcast");
    if (!nonVideoLinks || nonVideoLinks.length === 0) return null;

    return (
      <div className="mt-4 border-t border-gray-300 pt-3">
        <h4 className="text-md font-semibold text-gray-800 flex items-center gap-2">
          <FaLink className="text-blue-500" /> Related Links
        </h4>
        <ul className="mt-2 space-y-2">
          {nonVideoLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.type === "external" ? link.url : `${import.meta.env.BASE_URL}${link.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Render media (videos, podcasts, images) with captions
// Render media (videos, podcasts, images) with captions
const renderMedia = () => {
  const mediaItems = [];

  // Add videos/podcasts first
  (item.links || []).forEach(link => {
    if (link.type === "video" || link.type === "podcast") mediaItems.push(link);
  });

  // Add image
  if (item.image) {
    mediaItems.push({
      type: "image",
      url: item.image,
      label: item.imageLabel || item.title || "Image",
    });
  }

  if (mediaItems.length === 0) return null;

  return (
    <div className="mt-6 flex flex-wrap justify-center gap-6">
      {mediaItems.map((media, i) => {
        const label = media.label || media.title || "";

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {media.type === "image" ? (
              <img
                src={`${import.meta.env.BASE_URL}${media.url}`}
                alt={label}
                className="w-[300px] md:w-[400px] max-w-full object-contain rounded-xl"
              />
            ) : media.type === "podcast" ? (
              <iframe
                src={media.url}
                title={label}
                allow="autoplay; encrypted-media"
                className="w-[300px] md:w-[400px] h-64 md:h-72 rounded-xl"
                style={{ border: "none" }}
              />
            ) : (
              <video
                src={`${import.meta.env.BASE_URL}${media.url}`}
                controls
                className="w-[300px] md:w-[400px] aspect-video rounded-xl object-contain"
              />
            )}

            {/* Caption under media */}
            {label && (
              <p className="mt-2 text-sm text-gray-700 font-medium text-center">
                {label}
              </p>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-gray-300 shadow-sm overflow-hidden max-w-5xl mx-auto"
    >
      {/* Header */}
      <div className="w-full bg-white px-6 py-4 border-b border-gray-300 flex justify-between items-start">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-gray-900">{item.title}</h3>
          <p className="text-md font-medium text-gray-800 mt-1">{item.role}</p>
        </div>
        <div className="text-right">
          <span className="block text-sm md:text-base text-gray-700">{item.duration}</span>
          {item.organization && (
            <h5 className="text-md font-normal text-gray-700 mt-1">{item.organization}</h5>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 bg-[#d8e4ed]">
        {renderDetails()}
        {renderLinks()}
        {renderMedia()}
      </div>
    </motion.div>
  );
}
