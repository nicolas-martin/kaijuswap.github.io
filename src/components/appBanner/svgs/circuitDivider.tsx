import { motion } from "framer-motion";

interface Props {
  className?: string;
}

function CircuitDivider({ className }: Props) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 800 120" 
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Neon gradient for the main circuit line */}
        <linearGradient x1="0%" y1="0%" x2="100%" y2="0%" id="circuitGrad">
          <stop stopColor="#00E5FF" stopOpacity="0.8" offset="0%" />
          <stop stopColor="#FF2D95" stopOpacity="0.6" offset="50%" />
          <stop stopColor="#FF6F61" stopOpacity="0.8" offset="100%" />
        </linearGradient>
        
        {/* Subtle glow filter */}
        <filter id="circuitGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Pulse animation gradient */}
        <linearGradient x1="0%" y1="0%" x2="100%" y2="0%" id="pulseGrad">
          <stop stopColor="transparent" offset="0%" />
          <stop stopColor="#00E5FF" stopOpacity="0.9" offset="50%" />
          <stop stopColor="transparent" offset="100%" />
        </linearGradient>
      </defs>
      
      {/* Main circuit path - horizontal line with nodes */}
      <g>
        {/* Main horizontal line */}
        <rect 
          x="0" 
          y="58" 
          width="800" 
          height="2" 
          fill="url(#circuitGrad)" 
          filter="url(#circuitGlow)"
          opacity="0.6"
        />
        
        {/* Circuit nodes with subtle animations */}
        <motion.circle 
          cx="100" 
          cy="59" 
          r="4" 
          fill="#00E5FF"
          filter="url(#circuitGlow)"
          animate={{
            opacity: [0.4, 1, 0.4],
            r: [3, 5, 3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0
          }}
        />
        
        <motion.circle 
          cx="200" 
          cy="59" 
          r="3" 
          fill="#FF2D95"
          filter="url(#circuitGlow)"
          animate={{
            opacity: [0.4, 1, 0.4],
            r: [2, 4, 2]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        <motion.circle 
          cx="350" 
          cy="59" 
          r="5" 
          fill="#FF6F61"
          filter="url(#circuitGlow)"
          animate={{
            opacity: [0.4, 1, 0.4],
            r: [4, 6, 4]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.circle 
          cx="500" 
          cy="59" 
          r="3" 
          fill="#00E5FF"
          filter="url(#circuitGlow)"
          animate={{
            opacity: [0.4, 1, 0.4],
            r: [2, 4, 2]
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        
        <motion.circle 
          cx="650" 
          cy="59" 
          r="4" 
          fill="#FF2D95"
          filter="url(#circuitGlow)"
          animate={{
            opacity: [0.4, 1, 0.4],
            r: [3, 5, 3]
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.circle 
          cx="750" 
          cy="59" 
          r="3" 
          fill="#FF6F61"
          filter="url(#circuitGlow)"
          animate={{
            opacity: [0.4, 1, 0.4],
            r: [2, 4, 2]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
        />
      </g>
      
      {/* Subtle geometric pattern above the line */}
      <g opacity="0.2">
        <polygon 
          points="150,45 160,35 170,45" 
          fill="#00E5FF" 
          filter="url(#circuitGlow)"
        />
        <polygon 
          points="300,45 310,35 320,45" 
          fill="#FF2D95" 
          filter="url(#circuitGlow)"
        />
        <polygon 
          points="450,45 460,35 470,45" 
          fill="#FF6F61" 
          filter="url(#circuitGlow)"
        />
        <polygon 
          points="600,45 610,35 620,45" 
          fill="#00E5FF" 
          filter="url(#circuitGlow)"
        />
      </g>
      
      {/* Subtle geometric pattern below the line */}
      <g opacity="0.2">
        <polygon 
          points="100,75 110,85 120,75" 
          fill="#FF2D95" 
          filter="url(#circuitGlow)"
        />
        <polygon 
          points="250,75 260,85 270,75" 
          fill="#FF6F61" 
          filter="url(#circuitGlow)"
        />
        <polygon 
          points="400,75 410,85 420,75" 
          fill="#00E5FF" 
          filter="url(#circuitGlow)"
        />
        <polygon 
          points="550,75 560,85 570,75" 
          fill="#FF2D95" 
          filter="url(#circuitGlow)"
        />
        <polygon 
          points="700,75 710,85 720,75" 
          fill="#FF6F61" 
          filter="url(#circuitGlow)"
        />
      </g>
      
      {/* Animated pulse that travels across the circuit */}
      <motion.rect 
        x="-50" 
        y="57" 
        width="50" 
        height="4" 
        fill="url(#pulseGrad)"
        filter="url(#circuitGlow)"
        animate={{
          x: ["-50", "800"]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </svg>
  );
}

export default CircuitDivider;