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
	aboutMe: `QA Engineer with experience in manual and automated testing of web applications, 
			including E2E and API test automation with Playwright and TypeScript. 
			ISTQB FL certified. Seeking a role focused on test automation in web environments.`,
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
				'Collaborating within an international team in an Agile environment.',
			],
		},
		{
			title: 'Software Tester',
			company: 'SB Software',
			period: '01.2023 - 02.2025',
			duties: [
				'Executing web, desktop, and mobile application tests.',
				'Creating and maintaining E2E test scenarios using Playwright.',
				'Performing API automation tests and managing collections using Postman.',
				'Developing SQL queries for testing purposes.',
				'Maintaining technical documentation and providing customer support.',
				'Collaborating with teams to ensure quality throughout the quality assurance process.',
			],
		},
	],
	skills: {
		'Automation & Dev': ['Playwright', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Git', 'SQL', 'CLI'],
		Testing: ['Functional Testing', 'Regression Testing', 'REST APIs'],
		Tools: ['Postman', 'Bruno', 'Jira', 'DevTools'],
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
			obtained: '05-2025',
		},
	],
	languages: [
		{ lang: 'Polish', level: 'Native' },
		{ lang: 'English', level: 'B2' },
	],
	footer: `I consent to the processing of my personal data for the purposes of the recruitment process.`,
};
