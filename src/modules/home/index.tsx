import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import AppBanner from "../../components/appBanner";
import { ConfigContext } from "../../utils/configContext";
import type { TemplateConfig } from "../../utils/configType";
import Header from "./_components/header";
import Faq from "./_components/faq";

interface Props {
	config: TemplateConfig;
}

function Home({ config }: Props) {
	return (
		<ConfigContext.Provider value={config}>
			<main>
				<Navbar />
				<Header />
				<Faq />
				<AppBanner />
				<Footer />
			</main>
		</ConfigContext.Provider>
	);
}

export default Home;
