export const cvData = {
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
