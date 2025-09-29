import {
    reactjs,
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
    tesla,
    fueldetection,
    sjsu,
    mlrit,
    javascript,
    starbucks,
    meta,
    shopify,
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
      title: "AI & ML Engineer",
      icon: aws,
    },
    {
      title: "Data Science Engineer",
      icon: devops,
    },
    {
      title: "Java Backend Engineer",
      icon: java,
    },
    {
      title: "Python Developer",
      icon: python,
    },
  ];
  const technologies = [
    {
      name: "Aws",
      icon: aws,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Javascript",
      icon: javascript,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "devops",
      icon: reactjs,
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
      name: "devops",
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
      coursework: "Data Science, Algorithms, Topics In AI, Machine Learning, SQL",
      logo: sjsu,
    },
    {
      degree: "Bachelor of Computer Science in AI & ML",
      schoolName: "Kalasalingam Univeristy, India",
      yearDuration: "2020 - 2024",
      coursework: "DSA, Java, Ds, AI&ML, Python, OS, DBT, CN, NLP, DL, DAA, Excel",
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
      name: "Email Spam or Ham",
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
        "AI-Driven Billing Assistant Using Mobile Vision & Web Development. The project aims to enable customers create their bills using their mobile phones. By scanning QR codes, users access self billing functionality. Additionally, they can capture bill images with their mobile cameras for secure billing transactions. This process enhances convenience & ensures accuracy in transactions.",
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
      image: tesla,
      source_code_link: "https://github.com/vamsikrishna2127/Advanced_Billing_System_Using_Mobile_Camera_in_Python_Django",
    },
    {
      name: "Stock Price Prediction",
      description:
        "This project focuses on predicting stock market closing prices using machine learning techniques. By analyzing historical stock data, it addresses the inherent volatility and non-linear behavior of financial markets, aiming to deliver accurate and reliable return forecasts. The model leverages Python libraries and ML algorithms to improve prediction performance.",
      tags: [
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "yellow-text-gradient",
        },
        {
          name: "data science",
          color: "blue-text-gradient",
        },
        {
          name: "Jupyter",
          color: "pink-text-gradient",
        },
      ],
      image: starbucks,
      source_code_link: "https://github.com/vamsikrishna2127/Stocks-Close-Price-Prediction",
    },
    {
      name: "Employee Time Sheet and Attendance Management System",
      description:
        "It is an application-based solution designed to streamline workforce management by integrating two applications: one for employers to manage employee data, attendance records, work schedules, timesheets, and payroll-related details, and another for administrators to allocate work, authorize or reject leave requests, monitor attendance, and generate reports. This system eliminates manual paperwork, enhances accuracy and improves communication between employers and administrators, accountability, and employee satisfaction within the organization.",
      tags: [
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "Sql",
          color: "yellow-text-gradient",
        },
        {
          name: "Excel",
          color: "blue-text-gradient",
        },
        {
          name: "DSA",
          color: "pink-text-gradient",
        },
      ],
      image: fueldetection,
      source_code_link: "https://https://github.com/vamsikrishna2127/Employee-Time-Sheet-And-Attendance-Mangement-System-Using-Java.com/rajpranay06/Memories.git",
    },
    {
      name: "AOM Kafka Resubmission System Using TIBCO",
      description:
        "AOM Kafka Resubmission. Developed an AOM Kafka Resubmission System using TIBCO BW to enhance message reliability and processing efficiency. The system ensures seamless resubmission of failed Kafka messages, reducing data loss and improving realtime processing. Includes automated monitoring, logging, and error-handling mechanisms, allowing efficient recovery of unprocessed messages. This solution optimizes workflow management and ensures high availability in enterprisemessaging systems.",
      tags: [ 
        {
          name: "tibco",
          color: "green-text-gradient",
        },
        {
          name: "kafka",
          color: "yellow-text-gradient",
        },
        {
          name: "hawk",
          color: "blue-text-gradient",
        },
        {
          name: "linux",
          color: "pink-text-gradient",
        },
      ],
      image: shopify,
      source_code_link: "https://github.com/vamsikrishna2127",
    },
    {
      name: "Titanic Survival Prediction",
      description:
        "Titanic survival prediction using logistic regression is a classic machine learning problem where the objective is to predict whether a passenger survived the disaster based on factors such as age, gender, passenger class, fare, and family size. It is widely used as an introductory project in data science because it demonstrates key steps like data preprocessing, feature engineering, handling missing values, model training, and evaluation, while also highlighting how social and demographic variables influenced survival outcomes.",
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
          name: "ML",
          color: "pink-text-gradient",
        },
        {
          name: "AI",
          color: "blue-text-gradient",
        },
      ],
      image :meta,
      source_code_link: "https://github.com/vamsikrishna2127/Titanic_Survival_Prediction_Using_Logistic_Regression",
    },
  ];
  export { services, technologies, experiences, testimonials, projects, education };