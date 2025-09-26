import {
    reactjs,
    nodejs,
    mongodb,
    git,
    docker,
    aws,
    devops,
    java,
    python,
    mysql,
    springboot,
    postgres,
    jira,
    mem,
    fueldetection,
    sjsu,
    mlrit,
  } from "../assets";
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "ML Engineer",
      icon: aws,
    },
    {
      title: "Data Science Developer",
      icon: devops,
    },
    {
      title: "Java Backend Developer",
      icon: java,
    },
    {
      title: "Python Developer",
      icon: python,
    },
  ];
  const technologies = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "aws",
      icon: aws,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Spring Boot",
      icon: springboot,
    },
    {
      name: "PostgreSQL",
      icon: postgres,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "JIRA",
      icon: jira,
    },

  ];
  const experiences = [
    {
      title: "CRM Tibco Application Development - Full Time Employment",
      company_name: "Comcast",
      icon: aws,
      iconBg: "#E6DEDD",
      date: "Jul 2024 - Jul 2025",
      points: [
        "Developed and implemented TIBCO BW solutions for CRM integration, improving data flow & system efficiency.",
        "Created and maintained APIs to enable real-time data exchange between CRM and other business systems.",
        "Automated workflows using TIBCO BusinessWorks & TIBCO Admin, enhancing operational efficiency by 30%.",
        "Integrated multiple CRM platforms with Salesforce, SAP, and Hermes using TIBCO Business Connect.",
      ],
    },
    {
      title: "CRM Tibco Application Development - Internship",
      company_name: "Comcast",
      icon: java,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - July 2024",
      points: [
        "Developed TIBCO-based integrations for CRM applications, enhancing system performance and reliability.",
        "Conducting research and analysis to support ongoing project development and optimization.",
        "Supporting senior developers in implementing CRM solutions using TIBCO technologies.",
        "Troubleshot production issues, ensuring minimal downtime and fast resolution.",
      ],
    },
    {
      title: "Web Developer - Freelance",
      company_name: "Usurp HR Tech Solutions",
      icon: springboot,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Dec 2023",
      points: [
        "Developed a dynamic & responsive user interface using HTML, CSS, & JS, ensuring seamless user experience.",
        "Utilized Django to build robust backend functionalities, manage authentication, & enhance security features.",
        "Utilized SonarQube for code quality inspection and deployed the application on AWS using Docker and Kubernetes",
      ],
    },
  ];
  const education = [

    {
      degree: "Master’s in Data Science and Artificial Intelligence",
      schoolName: "University of Central Missouri, Missouri",
      yearDuration: "2025 - 2027",
      coursework: "Data Science, Algorithms, Topics In AI, Machine Learning",
      logo: sjsu,
    },
    {
      degree: "Bachelor of Computer Science in AI & ML",
      schoolName: "Kalasalingam Univeristy, India",
      yearDuration: "2020 - 2024",
      coursework: "DSA, Java, Data Science, AI&ML, Python, OS, DBT, CN, NLP, Deep Learning",
      logo: mlrit,
    },
  ];

  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  const projects = [
    {
      name: "Spam or Ham",
      description:
        "Email Spam Classification Using Machine Learning. spam detection employs rule-based filters, Bayesian filtering, and machine learning to sift through incoming emails, safeguarding users from unwanted messages. This enhances email security and ensures users receive only relevant and secure messages, promoting productivity.",
      tags: [
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "Data Science",
          color: "yellow-text-gradient",
        },
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "NLP",
          color: "pink-text-gradient",
        },
        {
          name: "Postgresql",
          color: "blue-text-gradient",
        },
      ],
      image: mem,
      source_code_link: "https://github.com/vamsikrishna2127/Email_Spam_Classification_Using_Python_Streamlit",
    },
    {
      name: "Advanced Billing System",
      description:
        "AI-Driven Billing Assistant Using Mobile Vision & Web Development. The project aims to enable customers to create their bills using their mobile phones. By scanning QR codes, users can access self billing functionality. Additionally, they can capture bill images with their mobile cameras for secure billing transactions. This process enhances convenience and ensures accuracy in transactions.",
      tags: [
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Django",
          color: "yellow-text-gradient",
        },
        {
          name: "AI&ML",
          color: "blue-text-gradient",
        },
        {
          name: "Integration",
          color: "pink-text-gradient",
        },
      ],
      image: mem,
      source_code_link: "https://github.com/vamsikrishna2127/Advanced_Billing_System_Using_Mobile_Camera_in_Python_Django",
    },
    {
      name: "Memories",
      description:
        "Full Stack MERN Web Application. It is a simple social media app that allows users to post interesting events that happened in their lives.",
      tags: [
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "yellow-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "pink-text-gradient",
        },
      ],
      image: mem,
      source_code_link: "https://github.com/rajpranay06/Memories.git",
    },
    {
      name: "Memories",
      description:
        "Full Stack MERN Web Application. It is a simple social media app that allows users to post interesting events that happened in their lives.",
      tags: [
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "yellow-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "pink-text-gradient",
        },
      ],
      image: mem,
      source_code_link: "https://github.com/rajpranay06/Memories.git",
    },
    {
      name: "Memories",
      description:
        "Full Stack MERN Web Application. It is a simple social media app that allows users to post interesting events that happened in their lives.",
      tags: [
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "yellow-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "pink-text-gradient",
        },
      ],
      image: mem,
      source_code_link: "https://github.com/rajpranay06/Memories.git",
    },
    {
      name: "Fuel Efficiency Prediction",
      description:
        "Developed an ML model to predict fuel efficiency of cars based on necessary attributes using Multi layer perceptron and Artificial Neural Networks. The learning method involved is feed-forward learning. ",
        tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
      ],
      image: fueldetection,
      source_code_link: "https://github.com/rajpranay06/Fuel-Efficiency-Prediction-.git",
    },
  ];
  export { services, technologies, experiences, testimonials, projects, education };