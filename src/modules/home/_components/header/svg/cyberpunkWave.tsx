import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  className?: string;
}

function CyberpunkWave({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className={clsx(className)}
      preserveAspectRatio="none"
    >
      <defs>
        {/* Gradient definitions */}
        <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0A0F24" />
          <stop offset="25%" stopColor="#112240" />
          <stop offset="50%" stopColor="#0A0F24" />
          <stop offset="75%" stopColor="#112240" />
          <stop offset="100%" stopColor="#0A0F24" />
        </linearGradient>
        
        <linearGradient id="neonLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0" />
          <stop offset="20%" stopColor="#00E5FF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FF2D95" stopOpacity="1" />
          <stop offset="80%" stopColor="#FF6F61" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FF6F61" stopOpacity="0" />
        </linearGradient>
        
        {/* Glow filter */}
        <filter id="waveGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        {/* Pattern for tech grid */}
        <pattern id="techGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#00E5FF" strokeWidth="0.5" opacity="0.2"/>
          <circle cx="0" cy="0" r="1" fill="#00E5FF" opacity="0.4"/>
          <circle cx="40" cy="0" r="1" fill="#00E5FF" opacity="0.4"/>
          <circle cx="0" cy="40" r="1" fill="#00E5FF" opacity="0.4"/>
          <circle cx="40" cy="40" r="1" fill="#00E5FF" opacity="0.4"/>
        </pattern>
      </defs>
      
      {/* Background tech grid */}
      <rect x="0" y="0" width="1440" height="320" fill="url(#techGrid)" opacity="0.3"/>
      
      {/* Main wave shape */}
      <path
        fill="url(#waveGradient1)"
        d="M0,160L30,144C60,128,120,96,180,106.7C240,117,300,171,360,181.3C420,192,480,160,540,138.7C600,117,660,107,720,122.7C780,139,840,181,900,181.3C960,181,1020,139,1080,117.3C1140,96,1200,96,1260,112C1320,128,1380,160,1410,176L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      />
      
      {/* Secondary wave for depth */}
      <motion.path
        fill="#112240"
        fillOpacity="0.5"
        d="M0,224L30,213.3C60,203,120,181,180,176C240,171,300,181,360,197.3C420,213,480,235,540,224C600,213,660,171,720,165.3C780,160,840,192,900,197.3C960,203,1020,181,1080,160C1140,139,1200,117,1260,122.7C1320,128,1380,160,1410,176L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        animate={{
          d: [
            "M0,224L30,213.3C60,203,120,181,180,176C240,171,300,181,360,197.3C420,213,480,235,540,224C600,213,660,171,720,165.3C780,160,840,192,900,197.3C960,203,1020,181,1080,160C1140,139,1200,117,1260,122.7C1320,128,1380,160,1410,176L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z",
            "M0,192L30,197.3C60,203,120,213,180,208C240,203,300,181,360,165.3C420,149,480,139,540,154.7C600,171,660,213,720,218.7C780,224,840,192,900,176C960,160,1020,160,1080,176C1140,192,1200,224,1260,218.7C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      {/* Neon line accents */}
      <motion.path
        stroke="url(#neonLineGradient)"
        strokeWidth="2"
        fill="none"
        filter="url(#waveGlow)"
        d="M0,160L30,144C60,128,120,96,180,106.7C240,117,300,171,360,181.3C420,192,480,160,540,138.7C600,117,660,107,720,122.7C780,139,840,181,900,181.3C960,181,1020,139,1080,117.3C1140,96,1200,96,1260,112C1320,128,1380,160,1410,176L1440,192"
        animate={{
          strokeDasharray: ["0 1440", "1440 0"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Glitch lines */}
      <motion.g
        animate={{
          opacity: [0, 0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          times: [0, 0.8, 0.82, 1]
        }}
      >
        <rect x="0" y="150" width="1440" height="1" fill="#00E5FF" opacity="0.8"/>
        <rect x="0" y="155" width="1440" height="0.5" fill="#FF2D95" opacity="0.6"/>
        <rect x="0" y="160" width="1440" height="0.5" fill="#FF6F61" opacity="0.4"/>
      </motion.g>
      
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.circle
          key={i}
          r="2"
          fill="#00E5FF"
          filter="url(#waveGlow)"
          initial={{
            x: i * 288,
            y: 140 + Math.sin(i) * 20
          }}
          animate={{
            x: [(i * 288), (i * 288 + 1440)],
            y: [140 + Math.sin(i) * 20, 140 + Math.sin(i + Math.PI) * 20]
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            },
            y: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        />
      ))}
      
      {/* Tech detail lines */}
      <g opacity="0.3">
        <line x1="0" y1="200" x2="1440" y2="200" stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="10 5"/>
        <line x1="0" y1="220" x2="1440" y2="220" stroke="#FF2D95" strokeWidth="0.5" strokeDasharray="5 10"/>
        <line x1="0" y1="240" x2="1440" y2="240" stroke="#FF6F61" strokeWidth="0.5" strokeDasharray="15 5"/>
      </g>
    </svg>
  );
}

export default CyberpunkWave;