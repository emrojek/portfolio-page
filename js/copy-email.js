document.addEventListener('DOMContentLoaded', () => {
	const emailLink = document.getElementById('email-copy-link');
	const emailToCopy = 'michal.rojek.it@gmail.com';

	if (emailLink) {
		emailLink.addEventListener('click', (event) => {
			event.preventDefault();

			navigator.clipboard
				.writeText(emailToCopy)
				.then(() => {
					const originalText = emailLink.innerHTML;
					emailLink.innerHTML = '<i class="bx bxs-check-square"></i> Email copied!';

					setTimeout(() => {
						emailLink.innerHTML = originalText;
					}, 2000);
				})
				.catch((error) => {
					console.error('Failed to copy email:', error);
					alert('Failed to copy email. Please get an email from printed CV.');
				});
		});
	}
});
