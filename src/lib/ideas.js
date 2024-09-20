// A list of start-up ideas, with each idea containing a title and description, as well as interest tags. Additionaly, it also contains a list of users that took an interest in the idea.
let ideas = [
    {
        title: 'Blockchain-based Voting System',
        description:
            'A secure, decentralized voting platform built using blockchain technology to ensure voter privacy and prevent fraud.',
        tags: ['Cybersecurity', 'Blockchain Security'],
        users: ['john', 'jane']
    },
    {
        title: 'Penetration Testing Toolkit',
        description:
            'A comprehensive toolkit designed for penetration testers to simulate cyber-attacks and assess system vulnerabilities.',
        tags: ['Cybersecurity'],
        users: ['jane']
    },
    {
        title: 'Secure Messaging App',
        description:
            'A messaging application that uses end-to-end encryption to protect user data and ensure privacy.',
        tags: ['Cryptography', 'Network Security'],
        users: ['john']
    },
    {
        title: 'Password Manager',
        description:
            'A password management tool that securely stores and manages user passwords and sensitive information.',
        tags: ['Cybersecurity'],
        users: ['john', 'jane']
    },
    {
        title: 'Secure File Storage',
        description:
            'A cloud storage service that uses encryption to protect user files and data from unauthorized access.',
        tags: ['Cryptography', 'Network Security'],
        users: ['jane']
    },
    {
        title: 'Security Training Platform',
        description:
            'An online platform that offers courses and training programs on cybersecurity and information security.',
        tags: ['Cybersecurity'],
        users: ['john']
    },
    {
        title: 'Network Monitoring Tool',
        description:
            'A tool that monitors network traffic and activities to detect and prevent security threats and attacks.',
        tags: ['Network Security'],
        users: ['jane']
    },
    {
        title: 'Incident Response System',
        description:
            'A system that helps organizations respond to and manage security incidents and data breaches effectively.',
        tags: ['Cybersecurity'],
        users: ['john']
    },
    {
        title: "Medical Data Privacy Solution",
        description:
            "A solution that ensures the privacy and security of medical data, protecting patient information from unauthorized access.",   
        tags: ["Cybersecurity", "Healthcare"],
        users: ["jane"]
    },
    {
        title: "Sustainable Packaging Solutions",
        description: "An eco-friendly packaging solution made from biodegradable materials, helping businesses reduce plastic waste and lower their environmental footprint.",
        tags: ["Sustainability", "Environment", "Packaging"],
        users: ["eco-conscious brands", "manufacturers"]
    },
    {
        title: "Smart Home Energy Management",
        description: "A system that optimizes energy consumption in households by using AI to monitor and reduce electricity usage through smart device control.",
        tags: ["IoT", "Energy", "Smart Home"],
        users: ["homeowners", "energy-conscious individuals"]
    },
    {
        title: "Virtual Team Collaboration Workspace",
        description: "An all-in-one virtual workspace for remote teams to collaborate seamlessly with features like project management, video calls, file sharing, and task tracking.",
        tags: ["Remote Work", "Productivity", "Software"],
        users: ["remote teams", "freelancers"]
    },
    {
        title: "AI-Driven Marketing Platform",
        description: "A platform that uses AI to create personalized marketing campaigns by analyzing customer behavior and automating content creation for higher engagement.",
        tags: ["AI", "Marketing", "Automation"],
        users: ["marketing teams", "brands"]
    },
    {
        title: "Online Learning Marketplace for Creative Skills",
        description: "A marketplace where users can take and offer courses focused on creative skills like photography, design, music, and arts, fostering a creative community.",
        tags: ["Education", "Creative", "Marketplace"],
        users: ["creators", "learners"]
    },
    {
        title: "On-Demand Personal Fitness App",
        description: "A fitness app that connects users with certified personal trainers and provides customized workout plans that can be followed anytime and anywhere.",
        tags: ["Fitness", "Mobile App", "Health"],
        users: ["fitness enthusiasts", "trainers"]
    },
    {
        title: "Local Farm-to-Table Delivery Service",
        description: "A platform that connects local farms with consumers for fresh produce delivery, promoting sustainable agriculture and supporting small farmers.",
        tags: ["Agriculture", "Sustainability", "Food Delivery"],
        users: ["farmers", "consumers"]
    },
    {
        title: "Urban Mobility Subscription Service",
        description: "A subscription service that gives urban dwellers access to bikes, scooters, and electric vehicles for eco-friendly city commuting.",
        tags: ["Urban Mobility", "Sustainability", "Transportation"],
        users: ["commuters", "city dwellers"]
    },
    {
        title: "Automated Legal Document Review Tool",
        description: "A tool that uses AI to automatically review legal documents, highlighting key issues and improving contract analysis efficiency for legal professionals.",
        tags: ["AI", "LegalTech", "Automation"],
        users: ["lawyers", "legal teams"]
    },
    {
        title: "Pet Health Monitoring Wearable",
        description: "A wearable device for pets that tracks health metrics like activity levels, heart rate, and sleep patterns, helping owners ensure their pets' well-being.",
        tags: ["Pets", "Wearable", "HealthTech"],
        users: ["pet owners", "veterinarians"]
    },
    {
        title: "Smart Waste Management System",
        description: "A platform that optimizes waste collection by using IoT sensors to track bin fill levels and AI to schedule efficient pickup routes.",
        tags: ["IoT", "Sustainability", "Waste Management"],
        users: ["municipalities", "waste management companies"]
    },
    {
        title: "Augmented Reality Home Design App",
        description: "An app that allows users to visualize interior design changes in their homes using augmented reality before making purchases or renovations.",
        tags: ["Augmented Reality", "Home Design", "Technology"],
        users: ["homeowners", "interior designers"]
    },
    {
        title: "Personal Finance Automation Tool",
        description: "A tool that automates personal finance management, helping users save, invest, and track spending through AI-driven budgeting recommendations.",
        tags: ["FinTech", "Automation", "Personal Finance"],
        users: ["individuals", "financial advisors"]
    },
    {
        title: "Crowdsourced Urban Planning Platform",
        description: "A platform that enables citizens to contribute ideas and feedback for city development projects, using crowdsourcing to improve urban planning.",
        tags: ["Urban Planning", "Crowdsourcing", "Civic Tech"],
        users: ["city governments", "urban developers"]
    },
    {
        title: "AI-Based Recruitment Platform",
        description: "A recruitment platform that uses AI to match candidates with job openings based on skills, experience, and culture fit, improving hiring efficiency.",
        tags: ["AI", "Recruitment", "HRTech"],
        users: ["HR teams", "job seekers"]
    },
    {
        title: "Virtual Reality Fitness Experience",
        description: "A virtual reality platform offering immersive fitness experiences, allowing users to exercise in virtual environments and gamify their workouts.",
        tags: ["Virtual Reality", "Fitness", "Wellness"],
        users: ["fitness enthusiasts", "gyms"]
    },
    {
        title: "On-Demand Beauty Service Marketplace",
        description: "A marketplace that connects beauty professionals with clients for at-home or on-location beauty services such as hairstyling, makeup, and nails.",
        tags: ["Marketplace", "Beauty", "On-Demand Services"],
        users: ["beauty professionals", "clients"]
    },
    {
        title: "Customizable Smart Furniture",
        description: "Furniture that adapts to user preferences and needs, equipped with smart features like height adjustment, lighting, and built-in charging stations.",
        tags: ["Smart Home", "Furniture", "Customization"],
        users: ["homeowners", "office spaces"]
    },
    {
        title: "AI-Powered Mental Health Support Bot",
        description: "An AI chatbot that provides mental health support by offering personalized conversations and resources, integrating with professional therapy services.",
        tags: ["Mental Health", "AI", "Wellness"],
        users: ["individuals", "mental health professionals"]
    },
    {
        title: "Sustainable Clothing Rental Platform",
        description: "A platform where users can rent designer and sustainable fashion items, promoting eco-conscious clothing consumption and reducing waste.",
        tags: ["Sustainability", "Fashion", "Rental"],
        users: ["fashion lovers", "eco-conscious consumers"]
    }
]

let functions = { getIdea, getIdeaList };

/**
 * Find a match if the string exactly matches any idea titles.
 * 
 * The code converts the string to lowercase before matching to remove case sensitivity.
 * 
 * @param {string} title The title of the idea
 * @returns {object}     The idea object
 * 
 * @example const idea = getIdea('Blockchain-based Voting System');
 * 
 * @author The Legendary John
 */

function getIdea(title) {
    const lowercaseTitle = title.toLowerCase();
    const data = ideas.find((idea) => idea.title.toLowerCase() === lowercaseTitle);
    // console.log(data);

    return data;
}

/**
 * Get the list of ideas.
 * 
 * @returns {array} The list of ideas
 * @example const ideaList = getIdeaList();
 * @see getIdea
 * 
 * @author Cyfer
 */

function getIdeaList() {
    return ideas;
}

export default functions;