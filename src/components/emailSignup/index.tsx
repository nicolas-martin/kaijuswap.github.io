import { useState } from "react";
import validator from 'validator';
import DOMPurify from 'dompurify';

interface Props {
	title?: string;
	subtitle?: string;
	buttonText?: string;
	showFullForm?: boolean;
}

function EmailSignup({
	title = "Join the Waitlist",
	subtitle = "Be the first to access Kaiju Swap",
	buttonText = "Join waitlist",
	showFullForm = false
}: Props) {
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError("");

		const sanitizedEmail = DOMPurify.sanitize(email.trim(), {
			ALLOWED_TAGS: [],
			ALLOWED_ATTR: []
		});

		if (!validator.isEmail(sanitizedEmail, {
			allow_display_name: false,
			require_display_name: false,
			allow_utf8_local_part: false,
			require_tld: true,
			allow_ip_domain: false,
			domain_specific_validation: false,
			blacklisted_chars: '',
			host_blacklist: []
		})) {
			setError("Please enter a valid email address");
			setIsSubmitting(false);
			return;
		}

		if (sanitizedEmail.length > 254) {
			setError("Email address is too long");
			setIsSubmitting(false);
			return;
		}

		const disposableEmailDomains = ['mailinator.com', 'guerrillamail.com', '10minutemail.com'];
		const emailDomain = sanitizedEmail.split('@')[1];
		if (disposableEmailDomains.includes(emailDomain)) {
			setError("Please use a permanent email address");
			setIsSubmitting(false);
			return;
		}

		const lastSubmission = localStorage.getItem('lastEmailSubmission');
		const now = Date.now();
		if (lastSubmission && now - parseInt(lastSubmission) < 60000) { // 1 minute cooldown
			setError("Please wait a minute before submitting again");
			setIsSubmitting(false);
			return;
		}

		try {
			const GOOGLE_SCRIPT_URL = 'import.meta.env.PUBLIC_SCRIPT_URL';

			await fetch(GOOGLE_SCRIPT_URL, {
				method: 'POST',
				mode: 'no-cors',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email: sanitizedEmail }),
			});

			localStorage.setItem('lastEmailSubmission', Date.now().toString());
			setIsSubmitted(true);
		} catch (err) {
			setError("Something went wrong. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	if (isSubmitted) {
		return (
			<div className={`text-center ${showFullForm ? 'p-8 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-orange-900/20 rounded-lg border border-purple-500/30' : ''}`}>
				<div className="text-5xl mb-4 animate-pulse bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">✓</div>
				<h3 className="text-xl font-semibold mb-2 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">Thanks for joining!</h3>
				<p className="text-gray-400">
					We'll notify you as soon as Kaiju Swap is ready.
				</p>
			</div>
		);
	}

	return (
		<div className={`${showFullForm ? 'max-w-md mx-auto p-8 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-orange-900/20 rounded-lg border border-purple-500/30 backdrop-blur-sm' : ''}`}>
			{showFullForm && (
				<div className="text-center mb-6">
					<h2 className="text-3xl font-bold mb-2 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">{title}</h2>
					<p className="text-gray-400">{subtitle}</p>
				</div>
			)}

			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<div className={`${showFullForm ? 'flex flex-col gap-4' : 'flex gap-2'} relative`}>
					<input
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => {
							// Use validator to normalize input while typing
							const value = validator.trim(e.target.value);
							// Only allow valid email characters while typing
							if (value === '' || validator.isEmail(value) || value.match(/^[a-zA-Z0-9.@_-]*$/)) {
								setEmail(value.substring(0, 254));
							}
						}}
						onPaste={(e) => {
							// Sanitize pasted content
							e.preventDefault();
							const pastedText = e.clipboardData.getData('text');
							const sanitized = DOMPurify.sanitize(pastedText, {
								ALLOWED_TAGS: [],
								ALLOWED_ATTR: []
							});
							setEmail(sanitized.substring(0, 254));
						}}
						required
						disabled={isSubmitting}
						className={`email-input-gradient w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${showFullForm ? 'w-full' : 'flex-1'}`}
						maxLength={254}
						autoComplete="email"
						spellCheck={false}
					/>
					<button
						type="submit"
						disabled={isSubmitting || !email}
						className={`relative px-6 py-3 font-semibold text-white rounded-lg transition-all duration-300 ${isSubmitting || !email
							? 'bg-gray-700 cursor-not-allowed'
							: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:shadow-[0_0_8px_rgba(168,85,247,0.3)] active:scale-95'
							} ${showFullForm ? 'w-full' : ''}`}
					>
						{isSubmitting ? (
							<span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
						) : (
							<span className="relative z-10">{buttonText}</span>
						)}
					</button>
				</div>

				{error && (
					<div className="text-pink-400 text-sm text-center animate-pulse">{error}</div>
				)}
			</form>

			{!showFullForm && (
				<p className="text-xs text-gray-500 mt-3 text-center">
					Get early access and exclusive benefits
				</p>
			)}
		</div>
	);
}

export default EmailSignup;
