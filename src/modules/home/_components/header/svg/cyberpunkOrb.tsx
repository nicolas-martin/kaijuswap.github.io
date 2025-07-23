import { easeIn, motion, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";

interface Props {
	className?: string;
	scrollYProgress: MotionValue<number>;
}

function CyberpunkOrb({ className, scrollYProgress }: Props) {
	const y = useTransform(scrollYProgress, [0.85, 1], ["0%", "-30%"], {
		ease: easeIn,
	});

	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			style={{ y }}
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			viewBox="0 0 800 800"
		>
			<defs>
				{/* Neon Cyan Gradient */}
				<radialGradient id="neonCyan" cx="50%" cy="50%" r="50%">
					<stop offset="0%" stopColor="#00E5FF" stopOpacity="1" />
					<stop offset="50%" stopColor="#00E5FF" stopOpacity="0.6" />
					<stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
				</radialGradient>

				{/* Hot Pink Gradient */}
				<radialGradient id="hotPink" cx="50%" cy="50%" r="50%">
					<stop offset="0%" stopColor="#FF2D95" stopOpacity="1" />
					<stop offset="50%" stopColor="#FF2D95" stopOpacity="0.6" />
					<stop offset="100%" stopColor="#FF2D95" stopOpacity="0" />
				</radialGradient>

				{/* Electric Magenta Gradient */}
				<linearGradient id="electricMagenta" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#FF6F61" />
					<stop offset="100%" stopColor="#FF2D95" />
				</linearGradient>

				{/* Deep Background Gradient */}
				<radialGradient id="deepBg" cx="50%" cy="50%" r="50%">
					<stop offset="0%" stopColor="#112240" stopOpacity="0.3" />
					<stop offset="100%" stopColor="#0A0F24" stopOpacity="0" />
				</radialGradient>

				{/* Glow Filter */}
				<filter id="neonGlow">
					<feGaussianBlur stdDeviation="4" result="coloredBlur" />
					<feMerge>
						<feMergeNode in="coloredBlur" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>

				{/* Glitch Filter */}
				<filter id="glitch">
					<feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="1" result="turbulence" seed="2">
						<animate attributeName="seed" from="0" to="10" dur="0.5s" repeatCount="indefinite" />
					</feTurbulence>
					<feDisplacementMap in="SourceGraphic" in2="turbulence" scale="5" />
				</filter>
			</defs>

			{/* Background Orb */}
			<motion.circle
				cx="400"
				cy="400"
				r="250"
				fill="url(#deepBg)"
				initial={{ scale: 0 }}
				animate={{ scale: [1, 1.1, 1] }}
				transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
			/>

			{/* Outer Ring - Rotating */}
			<motion.g
				animate={{ rotate: 360 }}
				transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
			>
				<circle
					cx="400"
					cy="400"
					r="220"
					fill="none"
					stroke="#00E5FF"
					strokeWidth="1"
					strokeDasharray="10 5"
					opacity="0.6"
					filter="url(#neonGlow)"
				/>
				<circle
					cx="400"
					cy="400"
					r="210"
					fill="none"
					stroke="#FF2D95"
					strokeWidth="1"
					strokeDasharray="5 10"
					opacity="0.4"
				/>
			</motion.g>

			{/* Hexagon Grid Pattern */}
			<motion.g opacity="0.3">
				{[0, 60, 120, 180, 240, 300].map((rotation, i) => (
					<motion.polygon
						key={i}
						points="400,250 485,310 485,390 400,450 315,390 315,310"
						fill="none"
						stroke="#00E5FF"
						strokeWidth="1"
						transform={`rotate(${rotation} 400 400)`}
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{
							scale: [0.8, 1.1, 0.8],
							opacity: [0, 0.6, 0]
						}}
						transition={{
							duration: 3,
							delay: i * 0.2,
							repeat: Infinity,
							ease: "easeInOut"
						}}
					/>
				))}
			</motion.g>

			{/* Central Core */}
			<motion.g>
				{/* Inner Hexagon */}
				<motion.polygon
					points="400,320 450,350 450,410 400,440 350,410 350,350"
					fill="none"
					stroke="url(#electricMagenta)"
					strokeWidth="2"
					filter="url(#neonGlow)"
					animate={{
						scale: [1, 1.1, 1],
						rotate: [0, 30, 0],
					}}
					transition={{
						duration: 3,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>

				{/* Central Circle */}
				<motion.circle
					cx="400"
					cy="380"
					r="30"
					fill="#0A0F24"
					stroke="#00E5FF"
					strokeWidth="2"
					filter="url(#neonGlow)"
				/>

				{/* Pulsing Core */}
				<motion.circle
					cx="400"
					cy="380"
					r="20"
					fill="url(#neonCyan)"
					animate={{
						scale: [1, 1.3, 1],
						opacity: [0.8, 1, 0.8]
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
			</motion.g>

			{/* Orbiting Elements */}
			<motion.g
				animate={{ rotate: -360 }}
				transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
			>
				{[0, 120, 240].map((angle, i) => (
					<motion.g key={i} transform={`rotate(${angle} 400 400)`}>
						<motion.circle
							cx="400"
							cy="200"
							r="8"
							fill="#FF2D95"
							filter="url(#neonGlow)"
							animate={{
								scale: [1, 1.5, 1],
								opacity: [0.6, 1, 0.6]
							}}
							transition={{
								duration: 2,
								delay: i * 0.3,
								repeat: Infinity,
								ease: "easeInOut"
							}}
						/>
						<line
							x1="400"
							y1="210"
							x2="400"
							y2="370"
							stroke="#00E5FF"
							strokeWidth="1"
							opacity="0.3"
							strokeDasharray="5 5"
						/>
					</motion.g>
				))}
			</motion.g>

			{/* Glitch Lines */}
			<motion.g
				animate={{
					opacity: [0, 1, 0],
				}}
				transition={{
					duration: 0.1,
					repeat: Infinity,
					repeatDelay: 3,
					times: [0, 0.5, 1]
				}}
			>
				<rect x="350" y="375" width="100" height="2" fill="#FF2D95" />
				<rect x="360" y="380" width="80" height="1" fill="#00E5FF" />
				<rect x="355" y="385" width="90" height="1" fill="#FF6F61" />
			</motion.g>

			{/* Corner Accents */}
			<g opacity="0.6">
				<motion.path
					d="M 250 250 L 270 250 L 270 270"
					stroke="#00E5FF"
					strokeWidth="2"
					fill="none"
					filter="url(#neonGlow)"
					animate={{ opacity: [0.3, 0.8, 0.3] }}
					transition={{ duration: 3, repeat: Infinity }}
				/>
				<motion.path
					d="M 550 250 L 530 250 L 530 270"
					stroke="#FF2D95"
					strokeWidth="2"
					fill="none"
					filter="url(#neonGlow)"
					animate={{ opacity: [0.3, 0.8, 0.3] }}
					transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
				/>
				<motion.path
					d="M 250 550 L 270 550 L 270 530"
					stroke="#FF6F61"
					strokeWidth="2"
					fill="none"
					filter="url(#neonGlow)"
					animate={{ opacity: [0.3, 0.8, 0.3] }}
					transition={{ duration: 3, repeat: Infinity, delay: 1 }}
				/>
				<motion.path
					d="M 550 550 L 530 550 L 530 530"
					stroke="#00E5FF"
					strokeWidth="2"
					fill="none"
					filter="url(#neonGlow)"
					animate={{ opacity: [0.3, 0.8, 0.3] }}
					transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
				/>
			</g>
		</motion.svg>
	);
}

export default CyberpunkOrb;
