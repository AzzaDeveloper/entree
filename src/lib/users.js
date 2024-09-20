// User profiles
// For the sake of simplicity, please avoid similar names so it can be fetched using a simple find() method
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
			},
			{
				image: '',
				title: 'Smart Traffic Management System',
				description:
					'An IoT-based traffic management system that uses real-time data to control traffic lights and reduce congestion. The system optimizes traffic flow using AI algorithms and provides real-time traffic updates.'
			},
			{
				image: '',
				title: 'AI-powered Chatbot for Customer Support',
				description:
					'A chatbot built using AI to assist users with customer support queries. It can handle a wide range of requests, provide information, and escalate cases to human agents when necessary.'
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
				title: 'E-commerce Website with Real-time Shopping Cart',
				description:
					'A fully responsive e-commerce website built with Svelte and JavaScript, featuring a real-time shopping cart and secure checkout process.'
			},
			{
				image: '',
				title: 'PWA for Genshin Impact In-game Statistics',
				description:
					'A Progressive Web App that allows Genshin Impact players to log in and sync their in-game stats with the app. Users can track character progress, weapon upgrades, artifact builds, and achievements, all in one place. The PWA provides real-time updates on in-game events, with offline access to previously synced data and push notifications for time-sensitive tasks like daily commissions and limited-time events.'
			},
			{
				image: '',
				title: 'CSS Grid Layout Builder',
				description:
					'An intuitive drag-and-drop grid layout builder developed using CSS Grid and JavaScript, enabling designers to quickly prototype responsive layouts.'
			},
			{
				image: '',
				title: 'Single-page Application for Travel Booking',
				description:
					'A smooth and fast single-page application for travel bookings, developed using SvelteKit with dynamic route handling and state management.'
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
			},
			{
				image: '',
				title: 'Real-time Data Visualization Dashboard',
				description:
					'A web-based dashboard that visualizes data in real-time, providing interactive insights into data trends and patterns for decision-making.'
			},
			{
				image: '',
				title: 'AI-Powered Chatbot for Medical Consultations',
				description:
					'An AI chatbot that assists users by providing basic medical consultations, analyzing symptoms, and recommending whether to seek professional care.'
			},
			{
				image: '',
				title: 'Deep Learning for Medical Image Classification',
				description:
					'A deep learning model designed to classify medical images, helping doctors identify diseases like cancer from scans with high accuracy.'
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
					'A mobile app that allows independent musicians to upload and share their music, helping them reach a broader audience without relying on major platforms.'
			},
			{
				image: '',
				title: 'AI-powered E-commerce Recommendation Engine',
				description:
					'An AI engine that helps online retailers recommend products based on user behavior and preferences, boosting sales and customer engagement.'
			},
			{
				image: '',
				title: 'Smart Health Monitoring System',
				description:
					'A system using IoT and AI to track health metrics in real time, alerting users and healthcare providers to potential issues before they become serious.'
			},
			{
				image: '',
				title: 'Decentralized Data Storage Solution',
				description:
					'A blockchain-based platform that allows individuals and organizations to securely store and access data without relying on centralized cloud providers.'
			},
			{
				image: '',
				title: 'Virtual Music Collaboration Platform',
				description:
					'A platform that allows musicians from around the world to collaborate on music projects in real time, enabling seamless cross-border creativity.'
			},
			{
				image: '',
				title: 'AI-Powered Music Recommendation App',
				description:
					'A mobile app that recommends new music based on the user’s listening habits, leveraging machine learning to discover tracks that fit personal tastes.'
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
			},
			{
				image: '',
				title: 'Scalable Cloud-based Data Storage System',
				description:
					'A cloud-based data storage solution that scales automatically based on traffic and usage, providing high availability and security for enterprise data.'
			},
			{
				image: '',
				title: 'IoT Backend Infrastructure',
				description:
					'An IoT backend system that processes and manages data from thousands of devices in real-time, ensuring high throughput and reliability.'
			},
			{
				image: '',
				title: 'Database Optimization for High Traffic Systems',
				description:
					'A project focusing on optimizing database queries and architecture to handle high levels of traffic efficiently, minimizing response time and latency.'
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
			},
			{
				image: '',
				title: 'AI-Driven Intrusion Detection System',
				description:
					'An AI-based system that monitors network traffic in real-time to detect and prevent potential intrusions or suspicious activities.'
			},
			{
				image: '',
				title: 'Secure Communication Protocol for IoT Devices',
				description:
					'A custom communication protocol designed to ensure secure data transmission between IoT devices, minimizing the risk of interception or tampering.'
			},
			{
				image: '',
				title: 'Decentralized Identity Management System',
				description:
					'A blockchain-based identity management solution that ensures users can securely control and verify their identities without relying on central authorities.'
			},
			{
				image: '',
				title: 'Cybersecurity Awareness Training Platform',
				description:
					'An online platform that educates employees on cybersecurity best practices and helps organizations protect against social engineering and phishing attacks.'
			}
		]
	},
	{
		username: 'Amara Griffin',
		avatar: '/Amara_Griffin.png',
		title: ['Full-stack Developer', 'Python Enthusiast'],
		age: '30',
		about:
			'Amara Griffin is a dedicated full-stack developer with expertise in both front-end and back-end technologies. She has a passion for Python and enjoys building robust, scalable applications.',
		interests: ['Python', 'Django', 'React', 'API Development', 'Cloud Computing'],
		projects: [
			{
				image: '',
				title: 'E-commerce Platform with Django',
				description:
					'A full-fledged e-commerce platform developed using Django for the backend and React for the front-end. The platform includes user authentication, product management, and a secure checkout process.'
			},
			{
				image: '',
				title: 'Real-time Weather Forecast App',
				description:
					'A weather forecast app built using Django and integrated with a public weather API to provide real-time data for cities worldwide.'
			},
			{
				image: '',
				title: 'Personal Blog Website',
				description:
					'A responsive blog website developed with Django and React, allowing users to publish, edit, and comment on blog posts.'
			},
			{
				image: '',
				title: 'Cloud-based File Storage System',
				description:
					'A cloud-based file storage system that allows users to securely upload, store, and share files with others.'
			},
			{
				image: '',
				title: 'AI Chatbot for Customer Support',
				description:
					'An AI chatbot built with Python and integrated into customer support systems to automate responses and improve user experience.'
			}
		]
	},
	{
		username: 'Dylan Carter',
		avatar: '/Dylan_Carter.png',
		title: ['Front-end Developer', 'UI/UX Specialist'],
		age: '28',
		about:
			'Dylan Carter is a front-end developer specializing in creating visually appealing and user-friendly interfaces. He has a keen eye for design and focuses on improving user experience through intuitive layouts.',
		interests: ['UI/UX Design', 'JavaScript', 'Figma', 'CSS', 'React'],
		projects: [
			{
				image: '',
				title: 'Portfolio Website with Custom Animations',
				description:
					'A portfolio website designed to showcase personal projects, featuring custom animations and transitions for a visually engaging experience.'
			},
			{
				image: '',
				title: 'Interactive Landing Page for Startups',
				description:
					'A sleek and modern landing page designed for startups, optimized for lead generation and conversion, with fully responsive design.'
			},
			{
				image: '',
				title: 'Online Design Tool with Drag-and-Drop',
				description:
					'A web-based design tool that allows users to create and customize digital designs using drag-and-drop functionality.'
			},
			{
				image: '',
				title: 'UI Components Library for Web Apps',
				description:
					'A reusable UI components library developed for front-end applications, providing easy-to-use elements such as buttons, cards, and forms.'
			},
			{
				image: '',
				title: 'Mobile App Interface for E-learning Platform',
				description:
					'A mobile app interface for an e-learning platform, focusing on ease of use and accessibility for students and teachers.'
			}
		]
	},
	{
		username: 'Sophia Reed',
		avatar: '/Sophia_Reed.png',
		title: ['Data Scientist', 'AI Researcher'],
		age: '32',
		about:
			'Sophia Reed is a data scientist with a strong background in artificial intelligence and machine learning. She works on cutting-edge AI research and applies advanced data analysis techniques to solve complex problems.',
		interests: ['Data Science', 'Machine Learning', 'AI Research', 'Python', 'TensorFlow'],
		projects: [
			{
				image: '',
				title: 'AI Model for Predicting Stock Prices',
				description:
					'An AI model built with Python and TensorFlow to predict stock prices based on historical data and market trends.'
			},
			{
				image: '',
				title: 'Deep Learning for Image Classification',
				description:
					'A deep learning project that uses convolutional neural networks (CNNs) to classify images into different categories with high accuracy.'
			},
			{
				image: '',
				title: 'Data Pipeline for Processing Large Datasets',
				description:
					'A scalable data pipeline developed to process and clean large datasets in real-time, ensuring data integrity and accuracy.'
			},
			{
				image: '',
				title: 'Machine Learning Model for Sentiment Analysis',
				description:
					'A machine learning model that analyzes customer reviews to detect sentiment, helping businesses understand user feedback.'
			},
			{
				image: '',
				title: 'AI-powered Healthcare Diagnostics Tool',
				description:
					'An AI-powered tool that assists doctors by providing diagnostic recommendations based on patient symptoms and medical history.'
			},
			{
				image: '',
				title: 'Real-time Recommendation System',
				description:
					'A recommendation system that uses machine learning to provide personalized content recommendations to users in real-time.'
			}
		]
	},
	{
		username: 'Ethan Matthews',
		avatar: '/Ethan_Matthews.png',
		title: ['DevOps Engineer', 'Cloud Specialist'],
		age: '29',
		about:
			'Ethan Matthews is a skilled DevOps engineer specializing in cloud infrastructure and continuous integration/continuous delivery (CI/CD) pipelines. He has extensive experience with automating deployments and optimizing cloud environments.',
		interests: ['DevOps', 'CI/CD', 'AWS', 'Docker', 'Kubernetes'],
		projects: [
			{
				image: '',
				title: 'CI/CD Pipeline for Microservices',
				description:
					'A fully automated CI/CD pipeline developed for a microservices architecture, enabling fast and reliable deployments.'
			},
			{
				image: '',
				title: 'Cloud Infrastructure Setup with AWS',
				description:
					'An AWS-based cloud infrastructure setup for hosting web applications, including auto-scaling, load balancing, and database integration.'
			},
			{
				image: '',
				title: 'Docker Containerization for Web Applications',
				description:
					'A project that containerizes web applications using Docker, improving portability and ensuring consistent environments across development and production.'
			},
			{
				image: '',
				title: 'Kubernetes Cluster for Scaling Applications',
				description:
					'A Kubernetes cluster deployed to scale applications horizontally, ensuring high availability and fault tolerance.'
			},
			{
				image: '',
				title: 'Automated Testing with Jenkins',
				description:
					'An automated testing pipeline built using Jenkins to run unit tests, integration tests, and end-to-end tests as part of the CI/CD process.'
			}
		]
	},
	{
		username: 'Liam Evans',
		avatar: '/Liam_Evans.png',
		title: ['Backend Developer', 'Node.js Expert'],
		age: '35',
		about:
			'Liam Evans is an experienced backend developer specializing in Node.js and database management. He builds scalable server-side applications and focuses on optimizing performance for high-traffic systems.',
		interests: ['Node.js', 'API Development', 'Databases', 'Express.js', 'MongoDB'],
		projects: [
			{
				image: '',
				title: 'API for Real-time Data Streaming',
				description:
					'A real-time data streaming API built with Node.js, allowing applications to send and receive live updates with minimal latency.'
			},
			{
				image: '',
				title: 'Scalable Backend for Social Media Platform',
				description:
					'A backend system developed for a social media platform, handling user authentication, messaging, and media uploads at scale.'
			},
			{
				image: '',
				title: 'MongoDB-based Data Analytics Platform',
				description:
					'A data analytics platform powered by MongoDB, providing insights into user behavior through real-time analytics and visualizations.'
			},
			{
				image: '',
				title: 'REST API for E-commerce Platform',
				description:
					'A REST API built for an e-commerce platform, handling product listings, cart management, and order processing.'
			},
			{
				image: '',
				title: 'Microservices Architecture for Online Marketplace',
				description:
					'A microservices-based backend architecture developed for an online marketplace, ensuring fault tolerance and easy scalability.'
			}
		]
	},
	{
		username: 'Olivia Bennett',
		avatar: '/Olivia_Bennett.png',
		title: ['Mobile App Developer', 'Swift Expert'],
		age: '27',
		about:
			'Olivia Bennett is a mobile app developer specializing in iOS development with Swift. She focuses on creating smooth, user-friendly mobile experiences and enjoys experimenting with the latest iOS frameworks.',
		interests: ['iOS Development', 'Swift', 'Mobile UX', 'ARKit', 'Core Data'],
		projects: [
			{
				image: '',
				title: 'Fitness Tracking App for iOS',
				description:
					'An iOS app developed to track fitness activities, including running, cycling, and swimming, with real-time statistics and progress tracking.'
			},
			{
				image: '',
				title: 'Augmented Reality (AR) Game',
				description:
					"An interactive AR game built using Apple's ARKit, allowing users to engage in immersive augmented reality experiences."
			},
			{
				image: '',
				title: 'Personal Finance App with Budget Tracking',
				description:
					'A personal finance app developed with Swift, featuring budget tracking, expense categorization, and savings goal setting.'
			},
			{
				image: '',
				title: 'E-learning Mobile App for iOS',
				description:
					'An e-learning platform designed for iOS devices, allowing users to access courses, track their progress, and receive notifications for upcoming lessons.'
			},
			{
				image: '',
				title: 'Recipe Management App with Offline Access',
				description:
					'A recipe management app that allows users to save, organize, and access their favorite recipes offline, developed using Core Data.'
			}
		]
	},
	{
		username: 'Lucas White',
		avatar: '/Lucas_White.png',
		title: ['Cybersecurity Analyst', 'Penetration Tester'],
		age: '31',
		about:
			'Lucas White is a cybersecurity analyst specializing in penetration testing and vulnerability assessments. He helps organizations identify security risks and mitigate potential threats through proactive security testing.',
		interests: [
			'Cybersecurity',
			'Penetration Testing',
			'Network Security',
			'Cryptography',
			'Ethical Hacking'
		],
		projects: [
			{
				image: '',
				title: 'Network Penetration Testing Toolkit',
				description:
					'A custom toolkit for performing penetration tests on corporate networks, designed to identify and exploit vulnerabilities in real-world scenarios.'
			},
			{
				image: '',
				title: 'Cryptography-based Secure Communication Protocol',
				description:
					'A secure communication protocol built using advanced cryptography techniques, ensuring data integrity and privacy for sensitive communications.'
			},
			{
				image: '',
				title: 'Threat Detection System for Enterprise Networks',
				description:
					'A real-time threat detection system that monitors network traffic for suspicious activities, designed to prevent cyberattacks and data breaches.'
			},
			{
				image: '',
				title: 'Ethical Hacking Simulator for Training',
				description:
					'An ethical hacking simulation platform developed for cybersecurity training, allowing users to practice their hacking skills in a safe environment.'
			},
			{
				image: '',
				title: 'Vulnerability Assessment Tool for Web Applications',
				description:
					'A vulnerability assessment tool designed to scan web applications for common security flaws, providing detailed reports and mitigation suggestions.'
			}
		]
	},
	{
		username: 'Isabella Cooper',
		avatar: '/Isabella_Cooper.png',
		title: ['Front-end Developer', 'React Enthusiast'],
		age: '24',
		about:
			'Isabella Cooper is a front-end developer with a passion for building dynamic web applications using React. She enjoys creating interactive user interfaces and experimenting with the latest front-end technologies.',
		interests: ['React', 'JavaScript', 'CSS', 'Web Accessibility', 'Responsive Design'],
		projects: [
			{
				image: '',
				title: 'Responsive E-commerce Website',
				description:
					'A responsive e-commerce website built with React, optimized for mobile and desktop, featuring real-time product filtering and a dynamic shopping cart.'
			},
			{
				image: '',
				title: 'Interactive Dashboard for Data Visualization',
				description:
					'A React-based interactive dashboard that visualizes data using charts and graphs, providing insights through user-friendly interactions.'
			},
			{
				image: '',
				title: 'Web Accessibility Checker',
				description:
					'A web accessibility checker developed using React, allowing developers to evaluate websites for compliance with accessibility standards.'
			},
			{
				image: '',
				title: 'Real-time Chat Application with WebSockets',
				description:
					'A real-time chat application developed with React and WebSockets, allowing users to send messages instantly and join chat rooms.'
			},
			{
				image: '',
				title: 'Interactive Quiz App',
				description:
					'An interactive quiz app built with React, featuring multiple-choice questions and real-time scoring with a responsive layout.'
			}
		]
	},
	{
		username: 'Mia Taylor',
		avatar: '/Mia_Taylor.png',
		title: ['Data Analyst', 'SQL Specialist'],
		age: '26',
		about:
			'Mia Taylor is a data analyst who specializes in extracting insights from large datasets. She has extensive experience with SQL and enjoys transforming raw data into actionable insights.',
		interests: ['Data Analysis', 'SQL', 'Business Intelligence', 'Power BI', 'Data Visualization'],
		projects: [
			{
				image: '',
				title: 'Business Intelligence Dashboard',
				description:
					'A business intelligence dashboard that visualizes key performance indicators (KPIs) and metrics, helping businesses make data-driven decisions.'
			},
			{
				image: '',
				title: 'Automated SQL Query Builder',
				description:
					'An automated SQL query builder developed to help non-technical users generate SQL queries for data extraction without writing code.'
			},
			{
				image: '',
				title: 'Customer Churn Prediction Model',
				description:
					'A data analysis project focused on building a machine learning model to predict customer churn based on historical data.'
			},
			{
				image: '',
				title: 'Sales Performance Analysis Report',
				description:
					'A comprehensive sales performance report generated from transactional data, providing insights into sales trends, customer behavior, and product performance.'
			},
			{
				image: '',
				title: 'Financial Data Analysis and Forecasting',
				description:
					'A project that analyzes financial data to forecast future performance and trends, helping businesses optimize their financial strategies.'
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
