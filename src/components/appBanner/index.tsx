import { useContext } from "react";
import { ConfigContext } from "../../utils/configContext";
import IphoneFrame from "../../components/iphoneFrame";
import EmailSignup from "../emailSignup";
import { motion } from "framer-motion";
import clsx from "clsx";
import CircuitDivider from "./svgs/circuitDivider";

function AppBanner() {
	const { googlePlayLink, appStoreLink, appBanner } =
		useContext(ConfigContext)!;

	if (!appBanner) return null;
	return (
		<motion.section
			id={appBanner.id}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.4 }}
			className="relative max-w-screen-lg mx-auto px-4 -mb-6 z-10 md:-mb-10 lg:-mb-14"
		>
			<motion.div
				variants={{
					hidden: {
						opacity: 0,
						scale: 0.9,
					},
					visible: {
						opacity: 1,
						scale: 1,
					},
				}}
				transition={{
					mass: 0.4,
					type: "spring",
					duration: 0.2,
				}}
			>
				<div className="p-4 text-white flex flex-col items-center md:flex-row relative overflow-hidden">
					<div className="flex-1 flex flex-col items-center justify-center min-h-full">
						<motion.h2
							initial={{ opacity: 0, y: "-100%" }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="mt-0 mb-4 text-4xl md:text-6xl relative bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent"
							style={{
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent"
							}}
						>
							{appBanner.title}
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: "100%" }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
							className="text-white/80 whitespace-pre-wrap text-left m-0 mt-1 md:text-lg"
						>
							{appBanner.subtitle}
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: "100%" }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8 }}
							className="w-full max-w-md my-6"
						>
							<div className="cyberpunk-cta-wrapper">
								<EmailSignup
									buttonText="Join Waitlist"
									showFullForm={false}
								/>
							</div>
						</motion.div>
					</div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.4 }}
						className="relative flex-1 flex justify-center"
					>
						{appBanner.screenshots.map((src, index) => (
							<motion.div
								key={index}
								variants={{
									hidden: {
										scale: index > 0 ? 0.9 : 1,
										opacity: 0,
										rotate: 0,
									},
									visible: {
										scale: index > 0 ? 0.9 : 1,
										opacity: 1,
										rotate: index === 0 ? 0 : index === 1 ? "-30deg" : "30deg",
									},
								}}
								transition={{
									stiffness: 150,
									mass: 0.5,
									type: "spring",
									delay: index > 0 ? 0.8 : 0.5,
								}}
								className={clsx(
									"h-[30rem]",
									index === 0 && "relative z-20 block",
									index === 1 && "absolute origin-bottom-left hidden xl:block",
									index === 2 && "absolute origin-bottom-right hidden xl:block"
								)}
							>
								<IphoneFrame src={src} />
							</motion.div>
						))}
					</motion.div>
				</div>
			</motion.div>
			
			{/* Circuit separator */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1, delay: 0.5 }}
				className="relative mt-16 mb-8"
			>
				<CircuitDivider className="w-full h-24 opacity-70" />
			</motion.div>
		</motion.section>
	);
}

export default AppBanner;
