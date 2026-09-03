export const cvData = {
	name: 'Michał Rojek',
	title: 'QA Engineer',
	profilePhoto: './assets/images/profile-photo.jpg',
	contact: {
		linkedin: 'linkedin.com/in/michał-rojek',
		github: 'github.com/emrojek',
		email: 'michal.rojek.it@gmail.com',
		location: 'Szczecin',
	},
	aboutMe: `QA Engineer with 3+ years of commercial experience in software testing across
			web, desktop, mobile and automotive applications. Experienced in manual testing,
			API testing, SQL, regression testing, defect reporting and log analysis.
			Developing test automation skills through personal projects using Playwright
			and TypeScript. ISTQB CTFL certified.`,
	experience: [
		{
			title: 'QA Engineer',
			company: 'Spyrosoft',
			period: '03.2025 - Present',
			duties: [
				'Perform manual testing and re-testing of automotive software.',
				'Execute automated test suites via CLI and GitLab pipelines.',
				'Perform stress testing and analyse system logs to identify potential issues.',
				'Report, track and document software defects in Jira.',
				'Collaborate with an international Agile team.',
			],
		},
		{
			title: 'Software Tester',
			company: 'SB Software',
			period: '01.2023 - 02.2025',
			duties: [
				'Performed manual testing of web, desktop and mobile applications.',
				'Performed API testing and maintained Postman collections.',
				'Wrote SQL queries for test-data verification and issue investigation.',
				'Maintained technical documentation and provided customer support.',
				'Collaborated with teams to ensure quality throughout the software development lifecycle.',
			],
		},
	],
	skills: {
		'Test Automation & Web Fundamentals': ['Playwright', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
		Testing: ['Manual Testing', 'Functional Testing', 'Regression Testing', 'API Testing', 'REST APIs', 'SQL'],
		Tools: ['Postman', 'Bruno', 'Jira', 'DevTools', 'Git'],
	},
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
			obtained: '05.2025',
		},
	],
	languages: [
		{ lang: 'Polish', level: 'Native' },
		{ lang: 'English', level: 'B2' },
	],
	footer: `I consent to the processing of my personal data for the purposes of the recruitment process.`,
};
