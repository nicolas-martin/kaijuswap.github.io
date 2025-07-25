import { motion, useScroll } from "framer-motion";
import { useContext, useRef } from "react";
import { ConfigContext } from "../../../../utils/configContext";
import SingleScreenshot from "./singleScreenshot";
import CyberpunkWave from "./svg/cyberpunkWave";
import CyberpunkOrb from "./svg/cyberpunkOrb";
import EmailSignup from "../../../../components/emailSignup";

function Header() {
	const {
		googlePlayLink,
		appStoreLink,
		home: { header, partners },
	} = useContext(ConfigContext)!;

	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
	});

	return (
		<section id={header.id} className="relative pb-8 md:pb-4">
			<div className="max-w-screen-lg mx-auto py-4 px-4 md:py-16 relative z-10">
				<div className="flex flex-col md:flex-row">
					<div className="flex flex-1 items-center md:items-start md:h-[300vh]">
						<div className="static top-40 flex flex-col prose justify-center py-8 md:sticky md:h-[548px]">
							<div className="flex flex-col gap-2 my-4 3xs:flex-row">
								{header.rewards?.map((reward, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, scale: 0 }}
										animate={{ opacity: 1, scale: 1 }}
										className="flex items-center self-center h-8 md:h-12"
									>
										<img src="/misc/wreath-left.webp" className="h-full" />
										<p className="text-xs text-gray-500 whitespace-pre text-center">
											{reward}
										</p>
										<img src="/misc/wreath-right.webp" className="h-full" />
									</motion.div>
								))}
							</div>
							<motion.h2
								initial={{ opacity: 0, rotateZ: -10 }}
								animate={{ opacity: 1, rotateZ: 0 }}
								className="mt-0 mb-4 text-4xl md:text-6xl cyberpunk-title"
							>
								{header.headlineMark ? (
									<>
										{header.headline
											.split(" ")
											.slice(0, header.headlineMark[0])
											.join(" ")}{" "}
										<span
											className="inline-block relative bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent"
											style={{
												WebkitBackgroundClip: "text",
												WebkitTextFillColor: "transparent"
											}}
										>
											{header.headline
												.split(" ")
												.slice(...header.headlineMark)
												.join(" ")}
										</span>{" "}
										{header.headline
											.split(" ")
											.slice(header.headlineMark[1])
											.join(" ")}
									</>
								) : (
									header.headline
								)}
							</motion.h2>
							<motion.p
								initial={{ opacity: 0, x: -50 }}
								animate={{ opacity: 0.7, x: 0 }}
								transition={{ delay: 0.5, ease: "easeInOut" }}
								className="whitespace-pre-wrap text-left m-0 my-1 max-w-md md:text-lg md:max-w-lg"
							>
								{header.subtitle}
							</motion.p>
							<motion.div
								initial={{ opacity: 0, y: "100%" }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6 }}
								className="max-w-sm mt-4"
							>
								<div className="cyberpunk-cta-wrapper">
									<EmailSignup
										buttonText="Get Notified"
										showFullForm={false}
									/>
								</div>
							</motion.div>
							{header.usersDescription && (
								<motion.div
									className="not-prose flex items-center gap-2 my-6"
									initial={{ scale: 0, opacity: 0, y: "100%" }}
									animate={{ scale: 1, opacity: 1, y: 0 }}
									transition={{ delay: 1.1 }}
								>
									<div className="flex -space-x-2">
										{Array.from(Array(5)).map((_, index) => (
											<div
												key={index}
												className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full border-2 border-base-100 flex items-center justify-center text-xs font-bold text-primary-content"
											>
												{String.fromCharCode(65 + index)}
											</div>
										))}
									</div>
									<p className="text-sm ml-2">
										{header.usersDescription}
									</p>
								</motion.div>
							)}
						</div>
					</div>
					<div className="min-h-[300vh] z-[-1]" ref={ref}>
						<div className="flex justify-center sticky top-28 md:top-40">
							<CyberpunkOrb
								scrollYProgress={scrollYProgress}
								className="-z-10 absolute hidden w-[800px] -top-20 -right-60 md:hidden xl:block"
							/>
							<motion.div
								initial={{ scale: 0.4, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{
									type: "spring",
									stiffness: 200,
									mass: 0.4,
									duration: 0.5,
									delay: 0.3,
								}}
								className="relative h-[548px] 2xs:h-[720px] sm:h-[648px] md:h-[548px] rounded-[3rem]"
							>
								<div className="absolute top-2.5 left-3 w-[calc(100%-24px)] h-[calc(100%-16px)] rounded-[1rem] 2xs:rounded-[2rem] overflow-hidden">
									{header.screenshots.map((src, index) => (
										<SingleScreenshot
											key={src}
											src={src}
											scrollYProgress={scrollYProgress}
											index={index}
											totalCount={header.screenshots.length}
										/>
									))}
								</div>
								<img
									src="/misc/iphone-frame.webp"
									alt="iphone-frame"
									className="relative z-10 h-full"
								/>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
			{partners && (
				<CyberpunkWave className="absolute -bottom-1 left-0 right-0 z-0 pointer-events-none" />
			)}
		</section>
	);
}

export default Header;
