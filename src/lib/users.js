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
				title: 'Home Automation System with Raspberry Pi',
				description:
					'A smart home automation system built using Raspberry Pi, allowing users to control lighting, security cameras, and temperature sensors remotely through a web or mobile app. The system is designed to be expandable, letting users add more devices and customize their home automation experience.'
			},
			{
				image: '',
				title: 'AI-Driven Predictive Maintenance for IoT Devices',
				description:
					'A predictive maintenance system leveraging AI and IoT sensors to monitor industrial equipment in real-time. The system predicts potential failures by analyzing data patterns from sensors and provides alerts to prevent downtime and costly repairs.'
			},
			{
				image: '',
				title: 'Cross-Platform App for Monitoring IoT Devices',
				description:
					'A cross-platform application developed with .NET and JavaScript that allows users to monitor and control IoT devices remotely. The app supports multiple IoT protocols and integrates seamlessly with Raspberry Pi and Arduino-based systems for home and industrial use.'
			}
		]
	},
	{
		username: 'Johnny Nguyen',
		avatar: '/Johnny_Nguyen.webp',
		title: ['Front-end Developer at ENTREE', 'UI/UX Enthusiast'],
		age: '18',
		about:
			'Johnny Nguyen is a creative and meticulous front-end developer at ENTREE, with a knack for crafting beautiful and responsive user interfaces. His keen eye for design ensures that every element on the page feels intuitive and engaging. Outside of work, Johnny enjoys exploring new front-end frameworks and building sleek web applications in his spare time.',
		interests: ['UI/UX', 'Svelte', 'SvelteKit', 'JavaScript', 'SCSS', 'Progressive Web Apps'],
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
			},
			{
				image: '',
				title: 'PWA for Genshin Impact In-game Statistics',
				description:
					'A Progressive Web App that allows Genshin Impact players to log in and sync their in-game stats with the app. Users can track character progress, weapon upgrades, artifact builds, and achievements, all in one place. The PWA provides real-time updates on in-game events, with offline access to previously synced data and push notifications for time-sensitive tasks like daily commissions and limited-time events.'
			}
		]
	},
	{
		username: 'Aung Su Pyae',
		avatar: '/Aung_Su_Pyae.png',
		title: ['Data Scientist at ENTREE', 'Machine Learning Expert'],
		age: '19',
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
					'A mobile app that allows independent musicians to upload and share their music, helping them reach a broader audience without relying on major platforms. Musicians can engage with fans, track performance metrics, and manage their content, all within a user-friendly interface designed to promote independence in the music industry.'
			},
			{
				image: '',
				title: 'AI-powered E-commerce Recommendation Engine',
				description:
					'An AI engine that helps online retailers recommend products based on user behavior and preferences. By analyzing large datasets, it personalizes the shopping experience for each customer and boosts sales conversion rates. The platform has successfully increased customer engagement and improved business outcomes for numerous retail partners.'
			},
			{
				image: '',
				title: 'Smart Health Monitoring System',
				description:
					'A system using IoT and AI to track health metrics in real time, alerting users and healthcare providers to potential issues before they become serious. This technology is designed to enhance patient care and improve health outcomes by detecting irregularities in data patterns, such as heart rate and blood pressure.'
			},
			{
				image: '',
				title: 'Decentralized Data Storage Solution',
				description:
					'A blockchain-based platform that allows individuals and organizations to securely store and access data without relying on centralized cloud providers. This decentralized approach ensures that users have greater control over their data, with enhanced privacy and security features built in by default.'
			}
		]
	},
	{
		username: 'Nhat Nguyen',
		avatar: '/Nhat_Nguyen.png',
		title: ['Back-end Developer at ENTREE', 'Database Guru'],
		age: '18',
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
		avatar: '/Zyle_Estacion.png',
		title: ['Cybersecurity Expert at ENTREE', 'Ethical Hacker'],
		age: '20',
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

export default getUser;
