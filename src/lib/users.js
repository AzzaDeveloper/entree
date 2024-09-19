// User profiles
// For the sake of simplicity, please avoid similar names so it can be fetched using a simple find() and match() method
const users = [
	{
		username: 'John Peterson',
		avatar: '/John_Peterson.png',
		title: ['Lead Software Engineer', 'IoT Enthusiast'],
		age: '25',
		about:
			'John Peterson is a versatile software engineer with over 5 years of experience in full-stack development. He specializes in JavaScript, C#, and .NET, and enjoys working on scalable web applications. John is particularly passionate about AI, IoT, and building projects with Raspberry Pi and Arduino. In his spare time, he explores how emerging technologies can shape the future and contributes to open-source communities.',
		interests: ['AI', 'IoT', 'Raspberry Pi', 'Arduino', 'C++', 'JavaScript', 'C#', '.NET'],
		projects: [
			{
				image: '',
				title: 'Smart Home Automation System',
				description:
					'A project using Raspberry Pi to automate home appliances, including lighting and security systems, controllable via a mobile app.'
			},
			{
				image: '',
				title: 'AI-powered Personal Assistant',
				description:
					'A voice-controlled personal assistant built using natural language processing, integrated with IoT devices for hands-free control of household items.'
			}
		]
	},
	{
		username: 'Johnny Nguyen',
		avatar: '/Johnny_Nguyen.png',
		title: ['Front-end Developer at ENTREE', 'UI/UX Enthusiast'],
		age: '18',
		about:
			'Johnny Nguyen is a creative and meticulous front-end developer at ENTREE, with a knack for crafting beautiful and responsive user interfaces. His keen eye for design ensures that every element on the page feels intuitive and engaging. Outside of work, Johnny enjoys exploring new front-end frameworks and building sleek web applications in his spare time.',
		interests: ['UI/UX Design', 'React', 'CSS Art', 'Web Animation', 'Graphic Design'],
		projects: [
			{
				image: '',
				title: 'Responsive Portfolio Website',
				description:
					'A personal portfolio showcasing web development projects, optimized for both desktop and mobile viewing.'
			},
			{
				image: '',
				title: 'Interactive UI Design System',
				description:
					'A library of reusable UI components designed for responsive web applications, with an emphasis on clean design and smooth animations.'
			}
		]
	},
	{
		username: 'Aung Su Pyae',
		avatar: '/Aung_Su_Pyae.png',
		title: ['Data Scientist at ENTREE', 'Machine Learning Expert'],
		age: '31',
		about:
			'Aung Su Pyae is a data wizard at ENTREE, skilled in transforming raw data into actionable insights using machine learning models. His analytical mind and deep understanding of AI help ENTREE make data-driven decisions. Outside of work, Aung enjoys working on personal projects involving AI in healthcare and smart systems.',
		interests: [
			'Machine Learning',
			'Data Science',
			'AI for Healthcare',
			'Deep Learning',
			'Data Visualization'
		],
		projects: [
			{
				image: '',
				title: 'AI-powered Health Diagnostics Tool',
				description:
					'An AI tool designed to assist doctors by analyzing patient data and providing diagnostic suggestions for various conditions.'
			},
			{
				image: '',
				title: 'Predictive Maintenance System',
				description:
					'A machine learning model developed to predict machinery failure in industrial systems, improving maintenance schedules and reducing downtime.'
			}
		]
	},
	{
		username: 'Cyfer Nguyen',
		avatar: '/Cyfer_Nguyen.png',
		title: ['CEO of ENTREE', 'Visionary Leader'],
		age: '18',
		about:
			'Cyfer Nguyen is the innovative CEO of ENTREE, a startup aiming to revolutionize how we interact with technology. With a secret passion for music and introverted creativity, some believe Cyfer could be living a double life as Hitori Gotoh from Bocchi The Rock, channeling their energy into groundbreaking ideas. They are known for their sharp business acumen and a surprising talent for guitar during low-key jam sessions with close friends.',
		interests: ['Technology Leadership', 'Business Strategy', 'Music', 'Guitar', 'Innovation'],
		projects: [
			{
				image: '',
				title: 'Tech-Driven Social Networking Platform',
				description:
					'A platform that connects users through shared interests, leveraging AI to create meaningful connections and personalized recommendations.'
			},
			{
				image: '',
				title: 'Music Streaming App for Independent Artists',
				description:
					'A mobile app that allows independent musicians to upload and share their music, helping them reach a broader audience without relying on major platforms. A mobile app that allows independent musicians to upload and share their music, helping them reach a broader audience without relying on major platforms. A mobile app that allows independent musicians to upload and share their music, helping them reach a broader audience without relying on major platforms.'
			}
		]
	},
	{
		username: 'Nhat Nguyen',
		avatar: '/Nhat_Nguyen.png',
		title: ['Back-end Developer at ENTREE', 'Database Guru'],
		age: '27',
		about:
			"Nhat Nguyen is a talented back-end developer at ENTREE, known for building scalable server-side applications and maintaining efficient databases. His expertise lies in API development and database management, ensuring seamless communication between servers and front-end systems. When he's not coding, Nhat enjoys deep dives into the world of cloud computing and microservices.",
		interests: [
			'API Development',
			'Database Management',
			'Node.js',
			'Microservices',
			'Cloud Computing'
		],
		projects: [
			{
				image: '',
				title: 'Microservices-based E-commerce Backend',
				description:
					'A back-end infrastructure for an e-commerce platform built using microservices architecture, providing scalability and resilience.'
			},
			{
				image: '',
				title: 'API for Real-time Data Sync',
				description:
					'A RESTful API designed for real-time synchronization of data between mobile devices and cloud databases, ensuring data consistency across platforms.'
			}
		]
	},
	{
		username: 'Zyle Estacion',
		avatar: '/Zyle_Estacion.jpg',
		title: ['Cybersecurity Expert at ENTREE', 'Ethical Hacker'],
		age: '29',
		about:
			"Zyle Estacion is ENTREE’s go-to cybersecurity expert, ensuring that the company's systems are impenetrable. With an impressive background in ethical hacking, Zyle thrives on staying one step ahead of cyber threats. In his downtime, you’ll find him participating in online capture-the-flag competitions or experimenting with secure blockchain protocols.",
		interests: [
			'Ethical Hacking',
			'Cybersecurity',
			'Blockchain Security',
			'Cryptography',
			'Network Security'
		],
		projects: [
			{
				image: '',
				title: 'Blockchain-based Voting System',
				description:
					'A secure, decentralized voting platform built using blockchain technology to ensure voter privacy and prevent fraud.'
			},
			{
				image: '',
				title: 'Penetration Testing Toolkit',
				description:
					'A comprehensive toolkit designed for penetration testers to simulate cyber-attacks and assess system vulnerabilities.'
			}
		]
	}
];

const functions = { getUser, getUserList };


/**
 * Find a match if the string exactly matches any usernames.
 *
 * The code converts the string to lowercase before matching to remove case sensitivity.
 *
 * @param {string} name The name of the user
 * @returns {object}    The user object
 *
 * @example const user = getUser('john');
 *
 * @author The Legendary John
 */

function getUser(name) {
	const lowercaseName = name.toLowerCase();
	const data = users.find((user) => user.username.toLowerCase() === lowercaseName);
	// console.log(data);

	return data;
}

/**
 * Get the list of users.
 * 
 * @returns {array} The list of users
 * @example const userList = getUserList();
 * @see getUser
 * 
 * @author Cyfer
 */

function getUserList() {
	return users;
}

export default functions;
