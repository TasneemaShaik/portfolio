import { motion } from "framer-motion";
import { FaBolt, FaLink } from "react-icons/fa";

export default function VolunteerCard({ item, index }) {
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
                  href={`${import.meta.env.BASE_URL}${link.url}`}
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

  const MediaItem = ({ src, isVideo, type }) => (
    <div className="w-full md:w-1/2 rounded-xl overflow-hidden h-full">
      {isVideo ? (
        type === "youtube" ? (
          <iframe
            src={src}
            title={videoLink.label}
            allowFullScreen
            className="w-full h-full object-contain rounded-xl"
            style={{ border: "none" }}
          />
        ) : (
          <video
            src={`${import.meta.env.BASE_URL}${src}`}
            controls
            className="w-full h-full object-contain rounded-xl"
          />
        )
      ) : (
        <img
          src={`${import.meta.env.BASE_URL}${src}`}
          alt={item.title}
          className="w-full h-full object-contain rounded-xl"
        />
      )}
    </div>
  );

  const renderMediaLayout = () => {
    if (!hasVideo && !hasImage) return null;

    // Only Image
    if (!hasVideo && hasImage)
      return (
        <div className="mt-6 flex flex-col md:flex-row gap-6 items-center">
          {renderDetails()}
          <MediaItem src={item.image} isVideo={false} />
        </div>
      );

    // Only Video
    if (hasVideo && !hasImage)
      return (
        <div className="mt-6 flex justify-start gap-6">
          {renderDetails()}
          <MediaItem src={videoLink.url} isVideo={true} type={videoLink.videotype} />
        </div>
      );

    // Video + Image
    if (hasVideo && hasImage)
      return (
        <div className="mt-6 flex flex-col md:flex-row gap-6 items-center">
          {renderDetails()}
          <MediaItem src={videoLink.url} isVideo={true} type={videoLink.videotype} />
          <MediaItem src={item.image} isVideo={false} />
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
          {item.organization && <h5 className="text-md font-normal text-gray-700 mt-1">{item.organization}</h5>}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 bg-[#d8e4ed]">
        {renderLinks()}
        {renderMediaLayout()}
      </div>
    </motion.div>
  );
}
