import { motion } from "framer-motion";

interface Props {
  className?: string;
}

function CyberpunkSpill({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 325 100" preserveAspectRatio="none">
      <defs>
        {/* Cyberpunk gradient */}
        <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="cyberSpillGrad">
          <stop stopColor="#0A0F24" stopOpacity="1" offset="0%" />
          <stop stopColor="#112240" stopOpacity="1" offset="50%" />
          <stop stopColor="#0A0F24" stopOpacity="1" offset="100%" />
        </linearGradient>
        
        {/* Neon accent gradient */}
        <linearGradient x1="0%" y1="0%" x2="100%" y2="0%" id="neonAccent">
          <stop stopColor="#00E5FF" stopOpacity="0.8" offset="0%" />
          <stop stopColor="#FF2D95" stopOpacity="0.8" offset="50%" />
          <stop stopColor="#FF6F61" stopOpacity="0.8" offset="100%" />
        </linearGradient>
        
        {/* Glow filter */}
        <filter id="spillGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Main container */}
      <rect width="100%" height="40" fill="url(#cyberSpillGrad)" />
      
      {/* Tech grid pattern overlay */}
      <pattern id="techGridSpill" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="20" height="20" fill="none" stroke="#00E5FF" strokeWidth="0.3" opacity="0.2"/>
        <circle cx="0" cy="0" r="0.5" fill="#00E5FF" opacity="0.3"/>
        <circle cx="20" cy="0" r="0.5" fill="#00E5FF" opacity="0.3"/>
      </pattern>
      <rect width="100%" height="40" fill="url(#techGridSpill)" />
      
      {/* Animated drip elements */}
      <g>
        {/* Primary drips with motion */}
        <motion.rect 
          x="0" 
          width="7.69%" 
          height="65" 
          rx="4" 
          fill="#112240"
          initial={{ height: 40 }}
          animate={{ height: [40, 65, 55, 65] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect 
          x="50" 
          width="7.69%" 
          height="80" 
          rx="4" 
          fill="#112240"
          initial={{ height: 40 }}
          animate={{ height: [40, 80, 70, 80] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.rect 
          x="100" 
          width="7.69%" 
          height="60" 
          rx="4" 
          fill="#112240"
          initial={{ height: 40 }}
          animate={{ height: [40, 60, 50, 60] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
        <motion.rect 
          x="150" 
          width="7.69%" 
          height="70" 
          rx="4" 
          fill="#112240"
          initial={{ height: 40 }}
          animate={{ height: [40, 70, 60, 70] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
        <motion.rect 
          x="200" 
          width="7.69%" 
          height="68" 
          rx="4" 
          fill="#112240"
          initial={{ height: 40 }}
          animate={{ height: [40, 68, 58, 68] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        <motion.rect 
          x="250" 
          width="7.69%" 
          height="75" 
          rx="4" 
          fill="#112240"
          initial={{ height: 40 }}
          animate={{ height: [40, 75, 65, 75] }}
          transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.rect 
          x="300" 
          width="7.69%" 
          height="85" 
          rx="4" 
          fill="#112240"
          initial={{ height: 40 }}
          animate={{ height: [40, 85, 75, 85] }}
          transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
      </g>
      
      {/* Neon edge highlights */}
      <g>
        <rect x="0" y="39" width="7.69%" height="2" fill="url(#neonAccent)" filter="url(#spillGlow)" opacity="0.8" />
        <rect x="50" y="39" width="7.69%" height="2" fill="url(#neonAccent)" filter="url(#spillGlow)" opacity="0.8" />
        <rect x="100" y="39" width="7.69%" height="2" fill="url(#neonAccent)" filter="url(#spillGlow)" opacity="0.8" />
        <rect x="150" y="39" width="7.69%" height="2" fill="url(#neonAccent)" filter="url(#spillGlow)" opacity="0.8" />
        <rect x="200" y="39" width="7.69%" height="2" fill="url(#neonAccent)" filter="url(#spillGlow)" opacity="0.8" />
        <rect x="250" y="39" width="7.69%" height="2" fill="url(#neonAccent)" filter="url(#spillGlow)" opacity="0.8" />
        <rect x="300" y="39" width="7.69%" height="2" fill="url(#neonAccent)" filter="url(#spillGlow)" opacity="0.8" />
      </g>
      
      {/* Background shadow drips */}
      <g opacity="0.3">
        <rect x="25" y="30" width="7.69%" height="35" rx="4" fill="#0A0F24" />
        <rect x="75" y="25" width="7.69%" height="40" rx="4" fill="#0A0F24" />
        <rect x="125" y="15" width="7.69%" height="55" rx="4" fill="#0A0F24" />
        <rect x="175" y="15" width="7.69%" height="55" rx="4" fill="#0A0F24" />
        <rect x="225" y="25" width="7.69%" height="45" rx="4" fill="#0A0F24" />
        <rect x="275" y="26" width="7.69%" height="45" rx="4" fill="#0A0F24" />
      </g>
      
      {/* Glitch effect lines */}
      <motion.g
        animate={{
          opacity: [0, 0, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          times: [0, 0.85, 0.87, 1]
        }}
      >
        <rect x="0" y="38" width="100%" height="0.5" fill="#00E5FF" />
        <rect x="0" y="40" width="100%" height="0.5" fill="#FF2D95" />
        <rect x="0" y="42" width="100%" height="0.5" fill="#FF6F61" />
      </motion.g>
    </svg>
  );
}

export default CyberpunkSpill;