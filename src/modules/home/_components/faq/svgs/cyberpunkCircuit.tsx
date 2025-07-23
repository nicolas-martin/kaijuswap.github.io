import { motion } from "framer-motion";

function CyberpunkCircuit() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.3 }}
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
          {/* Enhanced gradient with better visibility */}
          <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="cyber-grad">
            <stop stopColor="#00E5FF" stopOpacity="0.3" offset="0%" />
            <stop stopColor="#FF2D95" stopOpacity="0.3" offset="50%" />
            <stop stopColor="#FF6F61" stopOpacity="0.3" offset="100%" />
          </linearGradient>
          
          {/* Enhanced glow for better visibility */}
          <filter id="cyber-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Background fill gradient */}
          <radialGradient cx="50%" cy="50%" r="50%" id="bg-grad">
            <stop stopColor="#00E5FF" stopOpacity="0.05" offset="0%" />
            <stop stopColor="#FF2D95" stopOpacity="0.02" offset="50%" />
            <stop stopColor="transparent" offset="100%" />
          </radialGradient>
        </defs>
        
        {/* Enhanced cyberpunk circuit */}
        <g transform="translate(400, 400)">
          {/* Background glow circle */}
          <circle
            cx="0"
            cy="0"
            r="150"
            fill="url(#bg-grad)"
          />
          
          {/* Outer hexagon with enhanced visibility */}
          <motion.polygon
            points="-120,-69 -120,69 0,139 120,69 120,-69 0,-139"
            fill="none"
            stroke="url(#cyber-grad)"
            strokeWidth="3"
            filter="url(#cyber-glow)"
            animate={{ 
              rotate: [0, 360],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          {/* Main hexagon with better stroke */}
          <motion.polygon
            points="-100,-58 -100,58 0,116 100,58 100,-58 0,-116"
            fill="none"
            stroke="url(#cyber-grad)"
            strokeWidth="2"
            filter="url(#cyber-glow)"
            opacity="0.4"
            animate={{ 
              rotate: [0, -360]
            }}
            transition={{ 
              rotate: { duration: 40, repeat: Infinity, ease: "linear" }
            }}
          />
          
          {/* Inner hexagon with improved visibility */}
          <motion.polygon
            points="-60,-35 -60,35 0,70 60,35 60,-35 0,-70"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="2"
            opacity="0.3"
            filter="url(#cyber-glow)"
          />
          
          {/* Circuit nodes */}
          <motion.circle
            cx="0"
            cy="-116"
            r="6"
            fill="#00E5FF"
            filter="url(#cyber-glow)"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              r: [4, 8, 4]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.circle
            cx="100"
            cy="-58"
            r="5"
            fill="#FF2D95"
            filter="url(#cyber-glow)"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              r: [3, 7, 3]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          />
          <motion.circle
            cx="100"
            cy="58"
            r="5"
            fill="#FF6F61"
            filter="url(#cyber-glow)"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              r: [3, 7, 3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6
            }}
          />
          <motion.circle
            cx="0"
            cy="116"
            r="6"
            fill="#00E5FF"
            filter="url(#cyber-glow)"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              r: [4, 8, 4]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9
            }}
          />
          <motion.circle
            cx="-100"
            cy="58"
            r="5"
            fill="#FF2D95"
            filter="url(#cyber-glow)"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              r: [3, 7, 3]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2
            }}
          />
          <motion.circle
            cx="-100"
            cy="-58"
            r="5"
            fill="#FF6F61"
            filter="url(#cyber-glow)"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              r: [3, 7, 3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
          
          {/* Enhanced center core */}
          <motion.circle
            cx="0"
            cy="0"
            r="8"
            fill="#FF2D95"
            filter="url(#cyber-glow)"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              r: [6, 10, 6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </g>
      </motion.svg>
    </motion.div>
  );
}

export default CyberpunkCircuit;