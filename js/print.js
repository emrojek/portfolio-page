import { cvData } from './cv-data.js';

const buildExperienceHTML = experience =>
	experience
		.map(
			job => `
                <div class="print-experience-item">
                    <p class="job-meta">${job.company} | ${job.period}</p>
                    <h4 class="job-title-main">${job.title}</h4>
                    <ul class="tag-list">
                        ${job.duties.map(duty => `<li>${duty}</li>`).join('')}
                    </ul>
                </div>
            `
		)
		.join('');

const buildSkillsHTML = skills => `<ul class="tag-list">${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>`;

const buildLanguagesHTML = languages =>
	`<ul class="tag-list">${languages.map(lang => `<li>${lang.lang} - ${lang.level}</li>`).join('')}</ul>`;

const buildInterestsHTML = interests =>
	`<div class="interests-list">${interests
		.map(interest => `<span><i class="bx ${interest.icon}"></i> ${interest.name}</span>`)
		.join('')}</div>`;

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
                    <span>${cert.validity}</span>
                </div>
            `
		)
		.join('');

const buildPrintLayoutHTML = data => {
	const experienceHTML = buildExperienceHTML(data.experience);
	const skillsHTML = buildSkillsHTML(data.skills);
	const languagesHTML = buildLanguagesHTML(data.languages);
	const interestsHTML = buildInterestsHTML(data.interests);
	const educationHTML = buildEducationHTML(data.education);
	const certificatesHTML = buildCertificatesHTML(data.certificates);

	return `
				<html>
					<head>
						<title>${data.name} - CV</title>
						<link rel="stylesheet" href="./css/print-style.css">
						<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
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
									<p><span class="icon"><i class="bx bxs-home"></i></span><span>${data.contact.location}</span></p>
									<p><span class="icon"><i class="bx bxs-envelope"></i></span><span>${data.contact.email}</span></p>
									<p><span class="icon"><i class="bx bxl-linkedin-square"></i></span><span>${data.contact.linkedin}</span></p>
									<p><span class="icon"><i class="bx bxl-github"></i></span><span>${data.contact.github}</span></p>
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
								</div>
							</div>

							<div class="print-footer-columns print-section">
								<div class="footer-column">
									<h3>Languages</h3>
									${languagesHTML}
								</div>
								<div class="footer-column">
									<h3>Interests</h3>
									${interestsHTML}
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
