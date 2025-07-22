import { motion } from "framer-motion";

function CyberpunkCircuit() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.6 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      className="absolute -z-10 left-0 -top-4 h-full w-full overflow-hidden md:top-0"
    >
      <motion.svg
        initial={{ scale: 0 }}
        whileInView={{ scale: "var(--sc)" }}
        transition={{ duration: 1, stiffness: 150, type: "spring" }}
        viewport={{ once: true, amount: 0.4 }}
        className="h-full w-full [--sc:2] md:[--sc:1]"
        viewBox="0 0 800 800"
      >
        <defs>
          {/* Simple gradient */}
          <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="cyber-grad">
            <stop stopColor="#00E5FF" stopOpacity="0.6" offset="0%" />
            <stop stopColor="#FF2D95" stopOpacity="0.6" offset="100%" />
          </linearGradient>
          
          {/* Subtle glow */}
          <filter id="cyber-glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Simple hexagon */}
        <g transform="translate(400, 400)">
          {/* Main hexagon */}
          <motion.polygon
            points="-100,-58 -100,58 0,116 100,58 100,-58 0,-116"
            fill="none"
            stroke="url(#cyber-grad)"
            strokeWidth="2"
            filter="url(#cyber-glow)"
            animate={{ 
              rotate: [0, 360],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ 
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          {/* Inner hexagon */}
          <motion.polygon
            points="-60,-35 -60,35 0,70 60,35 60,-35 0,-70"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="1"
            opacity="0.3"
          />
          
          {/* Center dot */}
          <circle
            cx="0"
            cy="0"
            r="4"
            fill="#FF2D95"
            filter="url(#cyber-glow)"
          />
        </g>
      </motion.svg>
    </motion.div>
  );
}

export default CyberpunkCircuit;