import { motion } from "framer-motion";
import { FaBolt, FaLink } from "react-icons/fa";

export default function ExtracurricularCard({ item, index }) {
  const hasVideo = item.links?.some(link => link.type === "video");
  const videoLink = item.links?.find(link => link.type === "video");
  const hasImage = !!item.image;

  const renderDetails = () => (
    <ul className="space-y-3 text-gray-700">
      {item.details.map((d, i) => (
        <li key={i} className="flex items-start gap-2">
          <FaBolt className="text-orange-500 mt-1 flex-shrink-0" />
          <span>{d}</span>
        </li>
      ))}
    </ul>
  );

  const renderLinks = () =>
    item.links?.length > 0 && (
      <div className="mt-4 border-t border-gray-300 pt-3">
        <h4 className="text-md font-semibold text-gray-800 flex items-center gap-2">
          <FaLink className="text-blue-500" /> Related Links
        </h4>
        <ul className="mt-2 space-y-2">
          {item.links.map((link, i) => (
            <li key={i}>
              {link.type === "video" ? (
                <span className="text-gray-600 text-sm">{link.label}</span>
              ) : (
                <a
                  href={link.type === "external" ? link.url : `${import.meta.env.BASE_URL}${link.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline hover:text-blue-800"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    );

  const renderMedia = () => {
    if (!hasImage && !hasVideo) return null;

    return (
      <div className="mt-6 flex flex-col md:flex-row items-stretch gap-6">
        {hasVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 rounded-xl overflow-hidden h-full"
          >
            {videoLink.videotype === "youtube" ? (
              <iframe
                src={videoLink.url}
                title={videoLink.label}
                allowFullScreen
                className="w-full h-full object-contain rounded-xl"
                style={{ border: "none" }}
              />
            ) : (
              <video
                src={`${import.meta.env.BASE_URL}${videoLink.url}`}
                controls
                className="w-full h-full object-contain rounded-xl"
              />
            )}
          </motion.div>
        )}

        {hasImage && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 rounded-xl overflow-hidden h-full"
          >
            <img
              src={`${import.meta.env.BASE_URL}${item.image}`}
              alt={item.title}
              className="w-full h-full object-contain rounded-xl"
            />
          </motion.div>
        )}
      </div>
    );
  };

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
