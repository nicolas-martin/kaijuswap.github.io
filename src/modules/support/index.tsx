import AppBanner from "@components/appBanner";
import Footer from "@components/footer";
import Navbar from "@components/navbar";
import { ConfigContext } from "utils/configContext";
import type { TemplateConfig } from "utils/configType";
import { useState } from "react";
import validator from 'validator';
import DOMPurify from 'dompurify';

interface Props {
	config: TemplateConfig;
}

function SupportPage({ config }: Props) {
	const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const faqs = [
		{
			question: "How do I connect my wallet to Kaiju Swap?",
			answer:
				"Click the 'Connect Wallet' button in the app and select your preferred Solana wallet (Phantom, Solflare, etc.). Follow the prompts to authorize the connection. Make sure you're on the official Kaiju Swap app and verify the connection request.",
		},
		{
			question: "What are the trading fees?",
			answer:
				"Kaiju Swap charges a small platform fee of 0.5% per trade. Additionally, you'll pay standard Solana network fees (typically less than $0.01) and DEX fees from Jupiter aggregator. All fees are transparent and shown before you confirm any trade.",
		},
		{
			question: "Is my wallet safe when using Kaiju Swap?",
			answer:
				"Yes! Kaiju Swap never has access to your private keys. We use secure wallet connections where you approve each transaction directly in your wallet. Always verify transaction details before approving and never share your seed phrase with anyone.",
		},
		{
			question: "How do I report a bug or technical issue?",
			answer:
				"You can report bugs through the contact form below, or email us directly at support@kaijuswap.com. Please include details about the issue, your device/browser, and any error messages you encountered.",
		},
		{
			question: "What wallets are supported?",
			answer:
				"Kaiju Swap supports all major Solana wallets including Phantom, Solflare, Backpack, Glow, and Ledger (via Phantom). We're constantly adding support for new wallets based on user demand.",
		},
		{
			question: "How can I track my trading history?",
			answer:
				"Navigate to your Profile page in the app to view your complete trading history, including all swaps, dates, amounts, and transaction hashes. You can also export your history as a CSV file for tax or record-keeping purposes.",
		},
		{
			question: "What should I do if a transaction fails?",
			answer:
				"Failed transactions usually occur due to slippage or network congestion. Try increasing your slippage tolerance in settings, or wait a few minutes and try again. If the problem persists, contact our support team with the transaction details.",
		},
		{
			question: "How do I get updates about new features?",
			answer:
				"Follow us on Twitter @kaijuswap for the latest updates, or join our email list through the form on our homepage. We also post major updates in the app's notification center.",
		},
	];

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<{
		type: 'success' | 'error' | null;
		message: string;
	}>({ type: null, message: '' });

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus({ type: null, message: '' });

		// Sanitize all form inputs
		const sanitizedData = {
			name: DOMPurify.sanitize(formData.name.trim(), {
				ALLOWED_TAGS: [],
				ALLOWED_ATTR: []
			}),
			email: DOMPurify.sanitize(formData.email.trim(), {
				ALLOWED_TAGS: [],
				ALLOWED_ATTR: []
			}),
			subject: DOMPurify.sanitize(formData.subject.trim(), {
				ALLOWED_TAGS: [],
				ALLOWED_ATTR: []
			}),
			message: DOMPurify.sanitize(formData.message.trim(), {
				ALLOWED_TAGS: [],
				ALLOWED_ATTR: []
			})
		};

		// Validate email
		if (!validator.isEmail(sanitizedData.email, {
			allow_display_name: false,
			require_display_name: false,
			allow_utf8_local_part: false,
			require_tld: true,
			allow_ip_domain: false,
			domain_specific_validation: false,
			blacklisted_chars: '',
			host_blacklist: []
		})) {
			setSubmitStatus({
				type: 'error',
				message: 'Please enter a valid email address',
			});
			setIsSubmitting(false);
			return;
		}

		// Check email length
		if (sanitizedData.email.length > 254) {
			setSubmitStatus({
				type: 'error',
				message: 'Email address is too long',
			});
			setIsSubmitting(false);
			return;
		}

		// Check for disposable emails
		const disposableEmailDomains = ['mailinator.com', 'guerrillamail.com', '10minutemail.com', 'tempmail.com', 'throwaway.email'];
		const emailDomain = sanitizedData.email.split('@')[1];
		if (disposableEmailDomains.includes(emailDomain)) {
			setSubmitStatus({
				type: 'error',
				message: 'Please use a permanent email address',
			});
			setIsSubmitting(false);
			return;
		}

		// Validate name length
		if (sanitizedData.name.length < 2 || sanitizedData.name.length > 100) {
			setSubmitStatus({
				type: 'error',
				message: 'Name must be between 2 and 100 characters',
			});
			setIsSubmitting(false);
			return;
		}

		// Validate message length
		if (sanitizedData.message.length < 10 || sanitizedData.message.length > 5000) {
			setSubmitStatus({
				type: 'error',
				message: 'Message must be between 10 and 5000 characters',
			});
			setIsSubmitting(false);
			return;
		}

		// Rate limiting check
		const lastSubmission = localStorage.getItem('lastSupportSubmission');
		const now = Date.now();
		if (lastSubmission && now - parseInt(lastSubmission) < 60000) { // 1 minute cooldown
			setSubmitStatus({
				type: 'error',
				message: 'Please wait a minute before submitting again',
			});
			setIsSubmitting(false);
			return;
		}

		// Get script URL from environment variable
		const SCRIPT_URL = import.meta.env.PUBLIC_SUPPORT_SCRIPT_URL;

		// Fallback to mailto if Script URL is not configured
		if (!SCRIPT_URL) {
			const mailto = `mailto:support@kaijuswap.com?subject=${encodeURIComponent(
				sanitizedData.subject
			)}&body=${encodeURIComponent(
				`Name: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\n\nMessage:\n${sanitizedData.message}`
			)}`;
			window.location.href = mailto;
			setIsSubmitting(false);
			return;
		}

		try {
			await fetch(SCRIPT_URL, {
				method: 'POST',
				mode: 'no-cors', // Google Apps Script doesn't support CORS
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(sanitizedData),
			});

			// Store submission time for rate limiting
			localStorage.setItem('lastSupportSubmission', Date.now().toString());

			// With no-cors, we can't read the response, so we assume success
			setSubmitStatus({
				type: 'success',
				message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.',
			});
			
			// Reset form
			setFormData({
				name: '',
				email: '',
				subject: '',
				message: '',
			});
		} catch (error) {
			console.error('Error submitting form:', error);
			setSubmitStatus({
				type: 'error',
				message: 'Sorry, there was an error sending your message. Please try again or email us directly.',
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		let sanitizedValue = value;

		// Apply specific validation based on field
		if (name === 'email') {
			// Only allow valid email characters while typing
			sanitizedValue = validator.trim(value);
			if (sanitizedValue !== '' && !value.match(/^[a-zA-Z0-9.@_+-]*$/)) {
				return; // Don't update if invalid characters
			}
			sanitizedValue = sanitizedValue.substring(0, 254);
		} else if (name === 'name') {
			// Limit name length
			sanitizedValue = value.substring(0, 100);
		} else if (name === 'message') {
			// Limit message length
			sanitizedValue = value.substring(0, 5000);
		}

		setFormData({
			...formData,
			[name]: sanitizedValue,
		});
		
		// Clear error message when user starts typing
		if (submitStatus.type === 'error') {
			setSubmitStatus({ type: null, message: '' });
		}
	};

	return (
		<ConfigContext.Provider value={config}>
			<main>
				<Navbar />
				
				<section className="max-w-screen-lg mx-auto py-8 px-4 md:py-16">
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-5xl font-bold mb-4">Support Center</h1>
						<p className="text-lg opacity-70">
							We're here to help you with any questions or issues
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 mb-16">
						<div className="text-center p-6 bg-[#1a1a2e]/50 border border-[#00E5FF]/30 rounded-lg backdrop-blur-sm">
							<div className="w-16 h-16 bg-[#00E5FF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-2">Email Support</h3>
							<p className="text-gray-600 dark:text-gray-400 mb-4">
								Get help via email within 24 hours
							</p>
							<a href="mailto:support@kaijuswap.com" className="text-[#00E5FF] hover:text-[#00E5FF]/80 hover:underline">
								support@kaijuswap.com
							</a>
						</div>

						<div className="text-center p-6 bg-[#1a1a2e]/50 border border-[#00E5FF]/30 rounded-lg backdrop-blur-sm">
							<div className="w-16 h-16 bg-[#00E5FF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-2">Documentation</h3>
							<p className="text-gray-400 mb-4">
								Browse guides and tutorials
							</p>
							<a href="#faq" className="text-[#00E5FF] hover:text-[#00E5FF]/80 hover:underline">
								View FAQs below
							</a>
						</div>

						<div className="text-center p-6 bg-[#1a1a2e]/50 border border-[#00E5FF]/30 rounded-lg backdrop-blur-sm">
							<div className="w-16 h-16 bg-[#00E5FF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-2">Community</h3>
							<p className="text-gray-400 mb-4">
								Join our community for help
							</p>
							<a href="https://x.com/kaijuswap" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:text-[#00E5FF]/80 hover:underline">
								@kaijuswap on X
							</a>
						</div>
					</div>

					<div className="mb-16" id="faq">
						<h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
						<div className="space-y-4">
							{faqs.map((faq, index) => (
								<div
									key={index}
									className="bg-[#1a1a2e]/50 border border-[#00E5FF]/20 rounded-lg overflow-hidden backdrop-blur-sm"
								>
									<button
										className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#00E5FF]/5 transition-colors"
										onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
									>
										<span className="font-semibold">{faq.question}</span>
										<svg
											className={`w-5 h-5 transform transition-transform ${
												expandedFaq === index ? "rotate-180" : ""
											}`}
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
										</svg>
									</button>
									{expandedFaq === index && (
										<div className="px-6 py-4 border-t border-[#00E5FF]/20">
											<p className="text-gray-400">{faq.answer}</p>
										</div>
									)}
								</div>
							))}
						</div>
					</div>

					<div className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center">Contact Support</h2>
						<div className="max-w-2xl mx-auto">
							<form onSubmit={handleSubmit} className="bg-[#1a1a2e]/50 border border-[#00E5FF]/30 rounded-lg backdrop-blur-sm p-8">
								<div className="grid md:grid-cols-2 gap-6 mb-6">
									<div>
										<label htmlFor="name" className="block text-sm font-medium mb-2">
											Your Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											required
											value={formData.name}
											onChange={handleInputChange}
											onPaste={(e) => {
												e.preventDefault();
												const pastedText = e.clipboardData.getData('text');
												const sanitized = DOMPurify.sanitize(pastedText, {
													ALLOWED_TAGS: [],
													ALLOWED_ATTR: []
												});
												setFormData({
													...formData,
													name: sanitized.substring(0, 100)
												});
											}}
											maxLength={100}
											className="w-full px-4 py-2 bg-[#1a1a2e] border border-[#00E5FF]/30 rounded-lg focus:ring-2 focus:ring-[#00E5FF] focus:border-[#00E5FF] text-white placeholder-gray-500"
										/>
									</div>
									<div>
										<label htmlFor="email" className="block text-sm font-medium mb-2">
											Email Address
										</label>
										<input
											type="email"
											id="email"
											name="email"
											required
											value={formData.email}
											onChange={handleInputChange}
											onPaste={(e) => {
												e.preventDefault();
												const pastedText = e.clipboardData.getData('text');
												const sanitized = DOMPurify.sanitize(pastedText, {
													ALLOWED_TAGS: [],
													ALLOWED_ATTR: []
												});
												setFormData({
													...formData,
													email: sanitized.substring(0, 254)
												});
											}}
											maxLength={254}
											autoComplete="email"
											spellCheck={false}
											className="w-full px-4 py-2 bg-[#1a1a2e] border border-[#00E5FF]/30 rounded-lg focus:ring-2 focus:ring-[#00E5FF] focus:border-[#00E5FF] text-white placeholder-gray-500"
										/>
									</div>
								</div>
								<div className="mb-6">
									<label htmlFor="subject" className="block text-sm font-medium mb-2">
										Subject
									</label>
									<select
										id="subject"
										name="subject"
										required
										value={formData.subject}
										onChange={handleInputChange}
										className="w-full px-4 py-2 bg-[#1a1a2e] border border-[#00E5FF]/30 rounded-lg focus:ring-2 focus:ring-[#00E5FF] focus:border-[#00E5FF] text-white [&>option]:bg-[#1a1a2e]"
									>
										<option value="">Select a topic</option>
										<option value="Technical Issue">Technical Issue</option>
										<option value="Account Problem">Account Problem</option>
										<option value="Trading Question">Trading Question</option>
										<option value="Feature Request">Feature Request</option>
										<option value="Bug Report">Bug Report</option>
										<option value="Other">Other</option>
									</select>
								</div>
								<div className="mb-6">
									<div className="flex justify-between items-center mb-2">
										<label htmlFor="message" className="block text-sm font-medium">
											Message
										</label>
										<span className="text-xs text-gray-500">
											{formData.message.length}/5000
										</span>
									</div>
									<textarea
										id="message"
										name="message"
										required
										rows={6}
										value={formData.message}
										onChange={handleInputChange}
										onPaste={(e) => {
											e.preventDefault();
											const pastedText = e.clipboardData.getData('text');
											const sanitized = DOMPurify.sanitize(pastedText, {
												ALLOWED_TAGS: [],
												ALLOWED_ATTR: []
											});
											setFormData({
												...formData,
												message: (formData.message + sanitized).substring(0, 5000)
											});
										}}
										maxLength={5000}
										className="w-full px-4 py-2 bg-[#1a1a2e] border border-[#00E5FF]/30 rounded-lg focus:ring-2 focus:ring-[#00E5FF] focus:border-[#00E5FF] text-white placeholder-gray-500"
										placeholder="Please describe your issue or question in detail..."
									/>
								</div>
								<button
									type="submit"
									disabled={isSubmitting}
									className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors ${
										isSubmitting 
											? 'bg-gray-500 cursor-not-allowed' 
											: 'bg-[#00E5FF] hover:bg-[#00E5FF]/80 text-black'
									}`}
								>
									{isSubmitting ? 'Sending...' : 'Send Message'}
								</button>
								
								{submitStatus.type && (
									<div className={`mt-4 p-4 rounded-lg animate-fadeIn ${
										submitStatus.type === 'success' 
											? 'bg-green-500/20 border border-green-500/50 text-green-400' 
											: 'bg-red-500/20 border border-red-500/50 text-red-400'
									}`}>
										{submitStatus.message}
									</div>
								)}
							</form>
						</div>
					</div>

					<div className="text-center bg-[#1a1a2e]/50 border border-[#00E5FF]/30 rounded-lg backdrop-blur-sm p-8">
						<h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
						<p className="text-gray-400 mb-6">
							For urgent issues affecting your trading or account access, please email us directly.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="mailto:support@kaijuswap.com"
								className="inline-flex items-center justify-center px-6 py-3 bg-[#00E5FF] hover:bg-[#00E5FF]/80 text-black font-semibold rounded-lg transition-colors"
							>
								<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
								Email Support
							</a>
							<a
								href="https://x.com/kaijuswap"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center px-6 py-3 bg-[#1a1a2e] border border-[#00E5FF]/30 hover:bg-[#00E5FF]/10 text-white font-semibold rounded-lg transition-colors"
							>
								<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
								</svg>
								Follow on X
							</a>
						</div>
					</div>
				</section>

				<AppBanner />
				<Footer />
			</main>
		</ConfigContext.Provider>
	);
}

export default SupportPage;