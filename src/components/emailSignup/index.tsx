import { useState } from "react";

interface Props {
	title?: string;
	subtitle?: string;
	buttonText?: string;
	showFullForm?: boolean;
}

function EmailSignup({
	title = "Join the Waiting List",
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

		try {
			// For now, just simulate the signup process
			// You can replace this with actual email collection service like Mailchimp, ConvertKit, etc.
			await new Promise(resolve => setTimeout(resolve, 1000));

			// Store email in localStorage as a simple solution for now
			const existingEmails = JSON.parse(localStorage.getItem("waitingListEmails") || "[]");
			if (!existingEmails.includes(email)) {
				existingEmails.push(email);
				localStorage.setItem("waitingListEmails", JSON.stringify(existingEmails));
			}

			setIsSubmitted(true);
		} catch (err) {
			setError("Something went wrong. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	if (isSubmitted) {
		return (
			<div className={`text-center ${showFullForm ? 'p-8' : ''}`}>
				<div className="text-green-500 text-2xl mb-4">✓</div>
				<h3 className="text-xl font-semibold mb-2">Thanks for joining!</h3>
				<p className="text-base-content/70">
					We'll notify you as soon as Kaiju Swap is ready.
				</p>
			</div>
		);
	}

	return (
		<div className={`${showFullForm ? 'max-w-md mx-auto p-8 bg-base-200 rounded-lg' : ''}`}>
			{showFullForm && (
				<div className="text-center mb-6">
					<h2 className="text-2xl font-bold mb-2">{title}</h2>
					<p className="text-base-content/70">{subtitle}</p>
				</div>
			)}

			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<div className={`${showFullForm ? 'flex flex-col gap-4' : 'flex gap-2'}`}>
					<input
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						disabled={isSubmitting}
						className={`input input-bordered flex-1 ${showFullForm ? 'w-full' : ''}`}
					/>
					<button
						type="submit"
						disabled={isSubmitting || !email}
						className={`btn btn-primary ${showFullForm ? 'w-full' : ''}`}
					>
						{isSubmitting ? (
							<span className="loading loading-spinner loading-sm"></span>
						) : (
							buttonText
						)}
					</button>
				</div>

				{error && (
					<div className="text-error text-sm text-center">{error}</div>
				)}
			</form>

			{!showFullForm && (
				<p className="text-xs text-base-content/50 mt-2 text-center">
					Get early access and exclusive benefits
				</p>
			)}
		</div>
	);
}

export default EmailSignup;
