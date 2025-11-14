document.addEventListener('DOMContentLoaded', () => {
	const printButton = document.getElementById('print-cv-btn');

	const cvData = {
		name: 'Michał Rojek',
		title: 'QA / Software Tester',
		profilePhoto: './assets/images/profile-photo.jpeg',
		contact: {
			linkedin: 'linkedin.com/in/michał-rojek',
			github: 'github.com/emrojek',
			email: 'michal.rojek.it@gmail.com',
			location: 'Szczecin',
		},
		aboutMe: `Experienced in testing web and desktop applications, as well as APIs, across complex business domains,
				including a recent automotive project. Specializing in functional and regression testing, 
				I work closely with teams to ensure high-quality software. Currently expanding my skills in JavaScript 
				and TypeScript to develop automated tests with Playwright.`,
		experience: [
			{
				title: 'Junior QA Engineer',
				company: 'Spyrosoft',
				period: '03.2025 - Present',
				duties: [
					'Testing the Vehicle Abstraction Layer within an automotive project for a German brand.',
					'Executing manual tests along with re-testing using dedicated software.',
					'Running automated test suites via CLI and through GitLab pipelines.',
					'Performing stress tests, and analyzing system logs to identify potential issues.',
					'Reporting, tracking, and documenting identified software defects using Jira.',
					'Actively collaborating within an international team in an Agile environment.',
				],
			},
			{
				title: 'Software Tester',
				company: 'SB Software',
				period: '01.2023 - 02.2025',
				duties: [
					'Executing web, desktop, and mobile application tests.',
					'Collaborating with teams to ensure quality throughout the quality assurance process.',
					'Maintaining technical documentation and providing customer support.',
					'Developing SQL queries for testing purposes.',
					'Performing API and automated tests using Postman.',
					'Creating and managing collections in Postman.',
				],
			},
		],
		skills: [
			'JavaScript',
			'TypeScript',
			'Playwright',
			'Regression Testing',
			'Functional Testing',
			'REST APIs',
			'DevTools',
			'Postman',
			'CLI',
			'HTML',
			'CSS',
			'SQL',
		],
		education: [
			{
				degree: "Bachelor's Degree in Computer Science",
				school: 'WSB Merito University in Szczecin',
				period: '2020 - 2024',
			},
		],
		certificates: [
			{
				name: 'ISTQB® Certified Tester Foundation Level',
				board: 'Polish Testing Board',
				validity: '05-2025',
			},
		],
		languages: [
			{ lang: 'Polish', level: 'Native' },
			{ lang: 'English', level: 'B1 / B2' },
		],
		interests: [
			{ name: 'Gaming', icon: 'bx-joystick' },
			{ name: 'Reading', icon: 'bx-book-alt' },
			{ name: 'Saving', icon: 'bx-bar-chart-alt-2' },
		],
		footer: `I consent to the processing of my personal data for the purposes of the recruitment process.`,
	};

	if (printButton) {
		printButton.addEventListener('click', () => {
			const experienceHTML = cvData.experience
				.map(
					(job) => `
                <div class="print-experience-item">
                    <p class="job-meta">${job.company} | ${job.period}</p>
                    <h4 class="job-title-main">${job.title}</h4>
                    <ul class="tag-list">
                        ${job.duties.map((duty) => `<li>${duty}</li>`).join('')}
                    </ul>
                </div>
            `
				)
				.join('');

			const skillsHTML = `<ul class="tag-list">${cvData.skills.map((skill) => `<li>${skill}</li>`).join('')}</ul>`;

			const languagesHTML = `<ul class="tag-list">${cvData.languages
				.map((lang) => `<li>${lang.lang} - ${lang.level}</li>`)
				.join('')}</ul>`;

			const interestsHTML = `<div class="interests-list">${cvData.interests
				.map((interest) => `<span><i class="bx ${interest.icon}"></i> ${interest.name}</span>`)
				.join('')}</div>`;

			const educationHTML = cvData.education
				.map(
					(edu) => `
                <div class="print-education-item">
                    <h4>${edu.degree}</h4>
                    <p>${edu.school}</p>
                    <span>${edu.period}</span>
                </div>
            `
				)
				.join('');

			const certificatesHTML = cvData.certificates
				.map(
					(cert) => `
                <div class="print-certificate-item">
                    <h4>${cert.name}</h4>
                    <p>${cert.board}</p>
                    <span>${cert.validity}</span>
                </div>
            `
				)
				.join('');

			const printLayoutHTML = `
                <html>
                <head>
                    <title>${cvData.name} - CV</title>
                    <link rel="stylesheet" href="./css/print-style.css">
                    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
                </head>
                <body>
                    <div class="print-version">
                        <div class="print-header">
                            <img src="${cvData.profilePhoto}" alt="profile-photo" />
                            <div class="print-title">
                                <h1>${cvData.name}</h1>
                                <h2>${cvData.title}</h2>
                            </div>
                        </div>

                        <div class="print-contact print-section">
                            <h3>Contact</h3>
                            <div class="print-contact-wrapper">
                                <p><span class="icon"><i class="bx bxs-home"></i></span><span>${cvData.contact.location}</span></p>
                                <p><span class="icon"><i class="bx bxs-envelope"></i></span><span>${cvData.contact.email}</span></p>
								<p><span class="icon"><i class="bx bxl-linkedin-square"></i></span><span>${cvData.contact.linkedin}</span></p>
                                <p><span class="icon"><i class="bx bxl-github"></i></span><span>${cvData.contact.github}</span></p>
                            </div>
                        </div>

                        <div class="print-about print-section">
							<h3>Summary</h3>
							<p>${cvData.aboutMe}</p>
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
                            <small>${cvData.footer}</small>
                        </div>
                    </div>
                </body>
                </html>
            `;

			const iframe = document.createElement('iframe');
			iframe.style.position = 'fixed';
			iframe.style.width = '0';
			iframe.style.height = '0';
			iframe.style.border = '0';
			iframe.style.top = '-100px';
			document.body.appendChild(iframe);

			iframe.contentDocument.documentElement.innerHTML = printLayoutHTML;

			setTimeout(() => {
				try {
					iframe.contentWindow.focus();
					iframe.contentWindow.print();
				} finally {
					document.body.removeChild(iframe);
				}
			}, 500);
		});
	}
});
