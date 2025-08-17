import { motion } from 'framer-motion'

export default function SectionWrapper({ title, children }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="grid grid-cols-12 gap-4"
      >
        {children}
      </motion.div>
    </div>
  )
}
