import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
	name: "Kaiju Swap",
	seo: {
		title: "KAIJU - Enter the Future",
		description: "Enter the neon-soaked future where technology meets possibility",
	},
	// Draws grid behind main container
	backgroundGrid: false,
	logo: "/logo.png",
	theme: "dark",
	// Forces theme to be chosen above, no matter what user prefers
	forceTheme: true,
	// Shows switch to toggle between dark and light modes
	showThemeSwitch: false,
	appStoreLink: "https://apps.apple.com/us/app/google/id284815942",
	googlePlayLink:
		"https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox",
	footer: {
		legalLinks: {
			termsAndConditions: true,
			cookiesPolicy: true,
			privacyPolicy: true,
		},
		socials: {
			twitter: "https://x.com/kaijuswap",
		},
		links: [
			{ href: "/#features", title: "Features" },
			{ href: "/#how-it-works", title: "How it works" },
			{ href: "/#faq", title: "FAQ" },
		],
	},
	topNavbar: {
		cta: "Join Waitlist",
		disableWidthAnimation: false,
		hideAppStore: true,
		hideGooglePlay: true,
		links: [
			{ href: "/#features", title: "Features" },
			{ href: "/#how-it-works", title: "How it works" },
			{ href: "/#faq", title: "FAQ" },
		],
	},
	appBanner: {
		id: "app-banner",
		title: "Join the waitlist!",
		subtitle:
			"Be among the first to access Kaiju Swap - the most advanced Solana meme coin trading platform. Get early access and exclusive benefits.",
		screenshots: [
			"/screenshots/home.png",
			"/screenshots/swap.png",
			"/screenshots/coin_details.png",
		],
	},
	home: {
		seo: {
			title: "KAIJU - Enter the Future",
			description: "Enter the neon-soaked future where technology meets possibility",
		},
		partners: {
			title: "As seen on",
			logos: [
				"/misc/companies/apple.svg",
				"/misc/companies/aws.svg",
				"/misc/companies/google.svg",
				"/misc/companies/tumblr.svg",
			],
		},
		howItWorks: {
			id: "how-it-works",
			title: "How Trading Works",
			subtitle:
				"Start trading meme coins on Solana in just a few simple steps with our intuitive platform",
			steps: [
				{
					title: "Connect Your Wallet",
					subtitle:
						"Securely connect your Solana wallet to access all trading features and manage your portfolio.",
					image: "/screenshots/home.png",
				},
				{
					title: "Discover Trending Coins",
					subtitle:
						"Browse trending meme coins, new tokens, and top gainers with real-time price data and charts.",
					image: "/screenshots/coin_details.png",
				},
				{
					title: "Execute Trades",
					subtitle:
						"Make swaps with Jupiter DEX integration for the best prices, optimal routing, and transparent fees.",
					image: "/screenshots/swap.png",
				},
				{
					title: "Track Your Portfolio",
					subtitle:
						"Monitor your investments with live portfolio valuation, P&L analytics, and complete transaction history.",
					image: "/screenshots/profile.png",
				},
				{
					title: "Optimize Your Strategy",
					subtitle:
						"Use our advanced analytics and market insights to refine your trading strategy and maximize profits.",
					image: "/screenshots/coin_details.png",
				},
			],
		},
		features: {
			id: "features",
			title: "Professional Meme Coin Trading Platform",
			subtitle:
				"Experience the future of Solana trading with our advanced features designed for both beginners and professionals",
			cards: [
				{
					title: "Instant Trading",
					subtitle:
						"Jupiter DEX integration for best prices, multi-hop routing for optimal liquidity, real-time quotes with fee transparency, and smart slippage protection",
					icon: "/misc/money-front-color.webp",
				},
				{
					title: "Portfolio Tracking",
					subtitle:
						"Live portfolio valuation, complete P&L analytics, transaction history, and secure wallet management to keep track of all your investments",
					icon: "/misc/wallet-front-color.webp",
				},
				{
					title: "Market Discovery",
					subtitle:
						"Trending coins with live charts, new token alerts, top gainers tracking, and real-time price data to never miss the next big opportunity",
					icon: "/misc/locker-front-color.webp",
				},
			],
		},
		faq: {
			id: "faq",
			title: "Frequently Asked Questions",
			qa: [
				{
					question: "How much does it cost to trade on Kaiju Swap?",
					answer:
						"You see the full fee before you confirm: Jupiter routing is usually 0.1–0.25%, Solana network is ~0.000005 SOL, first-time ATA setup is ~0.002 SOL, plus a small platform fee, so most trades end up under $1."
				},
				{
					question: "Is my wallet and money safe on Kaiju Swap?",
					answer:
						"Your keys stay on your phone (React Native Keychain), every transaction is signed locally, we never custody funds, Firebase App Check blocks abuse, and you keep your 12‑word seed."
				},
				{
					question: "What tokens can I trade and how do I find new meme coins?",
					answer:
						"You can trade any Solana token—SOL/wSOL, SPL tokens, meme coins, even XStocks—and discover them through the Home tab (trending, new, top gainers) or the Explore search with real‑time Birdeye data."
				},
				{
					question: "How do I track my profits and losses?",
					answer:
						"The Portfolio tab shows live balances, USD value, per‑token P&L, cost basis, full trade history, and allocation so you always know how you're doing."
				},
				{
					question: "How do I get started and what do I need to begin trading?",
					answer:
						"Create or import a wallet, back up your seed, add about 0.01 SOL, pick a token, review the quote and fees, confirm the trade, and then track everything in Portfolio; you just need an iOS or Android device and a bit of SOL for fees."
				}
			]
		},
		header: {
			headline: "Kaiju Swap Enter the neon-soaked future where technology meets possibility",
			subtitle:
				"Professional meme coin trading with Jupiter DEX integration. Trade with confidence using the most advanced routing and best prices on Solana.",
			screenshots: [
				"/screenshots/home.png",
				"/screenshots/swap.png",
				"/screenshots/coin_details.png",
				"/screenshots/profile.png",
			],
			rewards: ["Best Solana DEX", "Top Trading App"],
			// usersDescription: "1000+ traders already using Kaiju Swap",
			headlineMark: [0, 2],
		},
	},
	privacyPolicy: {
		seo: {
			title: "Privacy Policy - KaijuSwap",
			description: "Privacy Policy for KaijuSwap",
		},
		content: `# Privacy Policy for KaijuSwap

**Last updated:** July 7, 2025

## 1. Introduction

This Privacy Policy explains what data KaijuSwap collects, how we use it, and your choices.

## 2. Data We Collect

### Account & Identity
- Name, email address (if you sign up or contact support)

### Usage Data
- Screen views, feature taps, session length

### Crash & Performance
- Error logs, device model, iOS version

### Optional Data
- Location (only if you grant permission)

## 3. How We Use Your Data

- Provide and improve app features
- Diagnose crashes and monitor performance
- Send you updates or reply to support requests at info@kaijuswap.com
- Personalize your experience

## 4. Data Sharing & Third Parties

We don't sell your data. We share only with:

- Service Providers (analytics, crash reporting)
- Apple for in-App purchase processing
- Approved SDKs you've opted into

Integrated partners:
- Firebase Analytics
- Sentry (crash reporting)

## 5. Your Choices

- Privacy Choices URL: https://kaijuswap.com/privacy-choices
- Opt-out of analytics: Turn off "Share with App Developers" in iOS Settings
- Delete your account/data: Email info@kaijuswap.com

## 6. Security

We use industry-standard measures (encryption in transit and at rest) to protect your data.

## 7. Children's Privacy

We don't knowingly collect data from anyone under 16. If we have, contact info@kaijuswap.com to delete it.

## 8. Changes to This Policy

We may update this page. We'll post changes here with a new "Last updated" date.

## 9. Contact Us

For questions or data requests, email info@kaijuswap.com.

`,
	},
	cookiesPolicy: {
		seo: {
			title: "Cookies Policy - Kaiju Swap",
			description: "Cookies Policy for Kaiju Swap",
		},
		content: `# Cookies Policy

**Effective Date:** January 1, 2025

## Introduction

This Cookies Policy explains how Kaiju Swap ("we," "our," or "us") uses cookies and similar technologies to recognize you when you visit our app, Kaiju Swap (the "App"). It explains what these technologies are and why we use them, as well as your rights to control their use.

## What Are Cookies?

Cookies are small data files that are placed on your device when you visit a website or use an app. Cookies are widely used by online service providers to facilitate and help to make the interaction between users and websites/apps faster and easier, as well as to provide reporting information.

### Types of Cookies We Use

We use the following types of cookies in our App:

1. **Strictly Necessary Cookies:**  
   These cookies are essential for you to use some of the features of our App. Without these cookies, some services cannot be provided.

2. **Performance and Analytics Cookies:**  
   These cookies collect information about how users interact with our App, including which pages are visited most often. We use this information to improve how our App works.

3. **Functionality Cookies:**  
   These cookies allow our App to remember choices you make when you use the App, such as remembering your login details or language preference.

4. **Targeting and Advertising Cookies:**  
   These cookies are used to deliver advertisements that are relevant to you. They also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.

### Cookies From Third Parties

In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the App and to deliver advertisements on and through the App.

## How We Use Cookies

We use cookies to:

- **Remember your login details and preferences.**
- **Analyze usage patterns and improve the functionality of our App.**
- **Deliver relevant content and advertisements.**
- **Understand your preferences based on previous or current App activity.**

## Your Choices Regarding Cookies

You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting the settings in your browser. Most browsers allow you to:

- **View what cookies are stored on your device and delete them individually.**
- **Block third-party cookies.**
- **Block cookies from particular websites.**
- **Block all cookies from being set.**
- **Delete all cookies when you close your browser.**

Please note that if you block or delete cookies, some features of the App may not function properly.

## Changes to This Cookies Policy

We may update this Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Cookies Policy.

## Contact Us

If you have any questions or concerns about our use of cookies, please contact us at:

Kaiju Swap  
support@kaijuswap.com  
https://kaijuswap.com/contact
`,
	},
	termsAndConditions: {
		seo: {
			title: "Terms of Service - Kaiju Swap",
			description: "Terms of Service for Kaiju Swap",
		},
		content: `# Terms of Service

**Effective Date:** January 1, 2025

## 1. Acceptance of Terms

By accessing or using Kaiju, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our application.

## 2. Description of Service

Kaiju is a decentralized application that provides a non-custodial wallet interface for trading meme coins on the Solana blockchain. We do not hold, control, or have access to your private keys or funds.

## 3. Wallet Security

You are solely responsible for maintaining the security of your wallet's private keys and recovery phrase. We strongly recommend storing your recovery phrase in a secure location. Loss of your recovery phrase may result in permanent loss of access to your funds.

## 4. Trading Risks

Trading cryptocurrencies, especially meme coins, involves substantial risk of loss. Prices can be extremely volatile. You should only trade with funds you can afford to lose. Past performance is not indicative of future results.

## 5. No Investment Advice

Nothing in this application constitutes investment, financial, legal, or tax advice. We do not recommend or endorse any specific cryptocurrencies. You should conduct your own research and consult with qualified professionals before making any trading decisions.

## 6. Third-Party Services

Kaiju integrates with third-party services including Jupiter aggregator and Birdeye for market data. We are not responsible for the availability, accuracy, or security of these services.

## 7. Fees

You are responsible for all transaction fees on the Solana blockchain. Additional fees may apply for swaps through integrated DEX aggregators. All fees will be clearly displayed before you confirm any transaction.

## 8. Compliance

You are responsible for complying with all applicable laws and regulations in your jurisdiction. The use of this application may not be legal in all jurisdictions.

## 9. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.

## 10. Indemnification

You agree to indemnify and hold harmless Kaiju and its affiliates from any claims, losses, or damages arising from your use of the application or violation of these terms.

## 11. Changes to Terms

We reserve the right to modify these terms at any time. Continued use of the application after changes constitutes acceptance of the modified terms.

## 12. Contact Information

If you have any questions about these Terms of Service, please contact us through our support channels in the application.
`,
	},
};

export default templateConfig;
