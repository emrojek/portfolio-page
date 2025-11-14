document.addEventListener('DOMContentLoaded', () => {
	const emailLink = document.getElementById('email-copy-link');
	const emailToCopy = 'michal.rojek.it@gmail.com';

	if (emailLink) {
		emailLink.addEventListener('click', event => {
			event.preventDefault();

			navigator.clipboard
				.writeText(emailToCopy)
				.then(() => {
					const label = emailLink.querySelector('.email-label');

					if (!label) return;

					const originalText = label.textContent;
					label.textContent = 'Email copied!';

					setTimeout(() => {
						label.textContent = originalText;
					}, 2000);
				})
				.catch(error => {
					console.error('Failed to copy email:', error);
					alert('Failed to copy email. Please copy it manually: ' + emailToCopy);
				});
		});
	}
});
