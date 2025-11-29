export const cvData = {
	name: 'Michał Rojek',
	title: 'QA Engineer',
	profilePhoto: './assets/images/profile-photo.jpeg',
	contact: {
		linkedin: 'linkedin.com/in/michał-rojek',
		github: 'github.com/emrojek',
		email: 'michal.rojek.it@gmail.com',
		location: 'Szczecin',
	},
	aboutMe: `Experienced in manual testing of web applications, performing functional, regression, and API tests across various business domains. 
			Collaborating with teams to ensure high-quality software delivery. 
			Actively developing test automation skills with Playwright and TypeScript through personal projects.`,
	experience: [
		{
			title: 'QA Engineer',
			company: 'Spyrosoft',
			period: '03.2025 - Present',
			duties: [
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
				'Creating and maintaining basic E2E test scenarios using Playwright.',
				'Performing API automation tests and managing collections using Postman.',
				'Developing SQL queries for testing purposes.',
				'Maintaining technical documentation and providing customer support.',
				'Collaborating with teams to ensure quality throughout the quality assurance process.',
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
