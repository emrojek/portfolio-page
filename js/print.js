import { cvData } from './cv-data.js';

const decorativeIcon = path =>
	`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" focusable="false"><path d="${path}"/></svg>`;

const contactIcons = {
	location: decorativeIcon('M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'),
	email: decorativeIcon(
		'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z'
	),
	linkedin: decorativeIcon(
		'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z'
	),
	github: decorativeIcon(
		'M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z'
	),
};

const buildContactRow = (icon, text, href) => {
	const label = href ? `<a href="${href}">${text}</a>` : text;
	return `<p><span class="icon">${icon}</span><span>${label}</span></p>`;
};

const buildContactHTML = contact => {
	const toUrl = value => `https://${encodeURI(value)}`;

	return [
		buildContactRow(contactIcons.location, contact.location),
		buildContactRow(contactIcons.email, contact.email, `mailto:${contact.email}`),
		buildContactRow(contactIcons.linkedin, contact.linkedin, toUrl(contact.linkedin)),
		buildContactRow(contactIcons.github, contact.github, toUrl(contact.github)),
	].join('');
};

const buildExperienceHTML = experience =>
	experience
		.map(
			job => `
                <div class="print-experience-item">
                    <h4 class="job-title-main">${job.title}</h4>
                    <p class="job-meta">${job.company} | ${job.period}</p>
                    <ul class="tag-list">
                        ${job.duties.map(duty => `<li>${duty}</li>`).join('')}
                    </ul>
                </div>
            `
		)
		.join('');

const buildSkillsHTML = skills =>
	Object.entries(skills)
		.map(
			([category, items]) => `
				<p class="skills-category">${category}</p>
				<ul class="tag-list">${items.map(skill => `<li>${skill}</li>`).join('')}</ul>
			`
		)
		.join('');

const buildLanguagesHTML = languages =>
	`<ul class="tag-list">${languages.map(lang => `<li>${lang.lang} - ${lang.level}</li>`).join('')}</ul>`;

const buildEducationHTML = education =>
	education
		.map(
			edu => `
                <div class="print-education-item">
                    <h4>${edu.degree}</h4>
                    <p>${edu.school}</p>
                    <span>${edu.period}</span>
                </div>
            `
		)
		.join('');

const buildCertificatesHTML = certificates =>
	certificates
		.map(
			cert => `
                <div class="print-certificate-item">
                    <h4>${cert.name}</h4>
                    <p>${cert.board}</p>
                    <span>${cert.obtained}</span>
                </div>
            `
		)
		.join('');

export const buildPrintLayoutHTML = data => {
	const contactHTML = buildContactHTML(data.contact);
	const experienceHTML = buildExperienceHTML(data.experience);
	const skillsHTML = buildSkillsHTML(data.skills);
	const languagesHTML = buildLanguagesHTML(data.languages);
	const educationHTML = buildEducationHTML(data.education);
	const certificatesHTML = buildCertificatesHTML(data.certificates);

	return `
				<html>
					<head>
						<meta charset="UTF-8" />
						<title>${data.name} - CV</title>
						<link rel="stylesheet" href="./css/print-style.css">
						<link rel="preconnect" href="https://fonts.googleapis.com" />
						<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
						<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
					</head>
					<body>
						<div class="print-version">
							<div class="print-header">
								<img src="${data.profilePhoto}" alt="profile-photo" />
								<div class="print-title">
									<h1>${data.name}</h1>
									<h2>${data.title}</h2>
								</div>
							</div>

							<div class="print-contact print-section">
								<h3>Contact</h3>
								<div class="print-contact-wrapper">
									${contactHTML}
								</div>
							</div>

							<div class="print-about print-section">
								<h3>Summary</h3>
								<p>${data.aboutMe}</p>
							</div>

							<div class="print-experience print-section">
								<h3>Experience</h3>
								${experienceHTML}
							</div>

							<div class="print-columns print-section">
								<div class="print-left-column">
									<div class="print-skills">
										<h3>Skills & Tools</h3>
										${skillsHTML}
									</div>
								</div>
								<div class="print-right-column">
									<div class="print-education">
										<h3>Education</h3>
										${educationHTML}
									</div>
									<div class="print-certificates">
										<h3>Certificates</h3>
										${certificatesHTML}
									</div>
									<div class="print-languages">
										<h3>Languages</h3>
										${languagesHTML}
									</div>
								</div>
							</div>

							<div class="print-rodo">
								<small>${data.footer}</small>
							</div>
						</div>
					</body>
				</html>
			`;
};

const openPrintPreview = data => {
	const iframe = document.createElement('iframe');
	iframe.style.position = 'fixed';
	iframe.style.width = '0';
	iframe.style.height = '0';
	iframe.style.border = '0';
	iframe.style.top = '-100px';
	document.body.appendChild(iframe);

	iframe.contentDocument.documentElement.innerHTML = buildPrintLayoutHTML(data);

	setTimeout(() => {
		const originalTitle = document.title;
		document.title = `Michal Rojek - CV`;

		try {
			iframe.contentWindow.focus();
			iframe.contentWindow.print();
		} finally {
			document.body.removeChild(iframe);
			document.title = originalTitle;
		}
	}, 500);
};

document.addEventListener('DOMContentLoaded', () => {
	const printButton = document.getElementById('print-cv-btn');

	if (!printButton) return;

	printButton.addEventListener('click', () => {
		openPrintPreview(cvData);
	});
});
