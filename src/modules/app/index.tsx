import EmailSignup from "components/emailSignup";
import type { TemplateConfig } from "utils/configType";

interface Props {
	config: TemplateConfig;
}

function AppRedirectionPage({ config }: Props) {
	return (
		<main className="w-screen h-screen flex flex-col items-center justify-center px-4">
			<div className="text-center mb-8">
				<img
					src={config.logo}
					alt={config.name}
					className="w-16 h-16 mx-auto mb-4"
				/>
				<h1 className="text-3xl font-bold mb-2">Kaiju Swap</h1>
				<p className="text-lg text-base-content/70">
					Lightning-Fast Solana Meme Trading
				</p>
			</div>

			<EmailSignup
				title="Join the Waitlist"
				subtitle="Be among the first to access the most advanced Solana meme coin trading platform"
				buttonText="Join Waitlist"
				showFullForm={true}
			/>

			<div className="mt-8 text-center">
				<a href="/" className="link link-primary">
					← Back to homepage
				</a>
			</div>
		</main>
	);
}

export default AppRedirectionPage;
