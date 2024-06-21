import project1img from "../assets/project1img.png"
import project1img2 from "../assets/project1img2.png"
import project1img3 from "../assets/project1img3.png"
import project2img1 from "../assets/project2img1.png"
import project2img2 from "../assets/project2img2.png"
import project3img1 from "../assets/project3img1.png"

export const navItems = [
    {label: 'Home', href: '#home'},
    {label: 'About', href: '#about'},
    {label: 'Projects', href: '#projects'},
    {label: 'Contact', href: '#contact'}
]

export const projects = [
    {
        title: "Customer Relationship Management",
        date: "5/23",
        image: project1img2,
        images: [project1img, project1img2, project1img3],
        description: "System designed to help businesses manage their interactions with current and potential customers efficiently.",
        paragraphOne: "In this project, I developed a comprehensive Customer Relationship Management (CRM) system designed to help businesses manage their interactions with current and potential customers efficiently. The CRM system I created offers a robust set of features aimed at improving customer service, streamlining sales processes, and enhancing overall business operations.",
        features: [
          {
            title: "Key Features:",
            items: [
              "Centralized database to store and manage customer information.",
              "Easy access to contact details, communication history, and notes.",
              "Advanced search and filtering capabilities to quickly find specific customer data.",
            ],
          },
          {
            title: "Reporting and Analytics:",
            items: [
              "Comprehensive dashboards to monitor key performance.",
              "Customizable reports to analyze sales performance, customer behavior, and more.",
            ],
          },
          {
            title: "Integration and Customization:",
            items: [
              "API integration with other business tools like telephony and marketing platforms.",
              "Customizable API to adapt the specific partner needs.",
            ],
          },
          {
            title: "Technologies Used:",
            items: [
              "Frontend: Ext.js, Jquery, Bootstrap, HTML, CSS",
              "Backend: Node.js, Express.js, JS, PHP",
              "Database: MySQL",
              "Authentication: JWT (JSON Web Tokens)",
              "Other Tools: Git for version control",
            ],
          },
        ],
        technologies: ["HTML", "CSS", "Javascript", "PHP"],
      },
      {
        title: "Redesign of Pamulang University Student Affairs Website",
        date: "6/24",
        image: project2img1,
        images: [project2img1, project2img2],
        description: "Redesigning the pamulang university website page to improve user experience, accessibility, and visual appearance.",
        paragraphOne: "This project aims to update the visual appearance, improve navigation, and ensure better accessibility for all users. In this process, I analyze user needs, design mockups, and implement new designs using the latest web technology.",
        features: [
          {
            title: "Result:",
            items: [
              "Improved User Experience: Intuitive navigation and a cleaner design made it easier for users to find information.",
              "Attractive Visual Design: Modern design reflecting the identity and values of Pamulang University.",
              "Better Website Performance: Performance optimizations led to faster loading times and a smoother user experience.",
            ],
          },
          {
            title: "Technologies Used:",
            items: [
              "Figma (Design)",
              "WordPress (CMS Platform)",
              "Elementor and Royal Addon Elementor (Frontend Development)",
              "HTML5, CSS3 (Additional Customization)",
              "Google Analytics (Analytics)",
            ],
          },
        ],
        technologies: ["HTML", "CSS"],
      },
      {
        title: "Interactive Portfolio Website Using React and Framer Motion",
        date: "5/23",
        image: project3img1,
        images: [project3img1],
        description: "Developed a dynamic and interactive portfolio website to showcase projects and skills with engaging animations, smooth transitions and functional contact form.",
        paragraphOne: "This project involved creating a personal portfolio website designed to highlight my skills, experience, and projects in a visually appealing and interactive manner. Utilizing React for building the user interface and Framer Motion for adding animations, the website offers a modern and engaging user experience.",
        features: [
          {
            title: "Technologies Used:",
            items: [
              "React: For building the user interface and managing the application state.",
              "Web3form: For implementing the contact form functionality.",
              "Framer Motion: For adding sophisticated animations and transitions.",
              "CSS3: For styling the components and ensuring responsive design.",
            ],
          },
          {
            title: "My Role:",
            items: [
              "As the sole designer and developer, I was responsible for the entire project lifecycle, from initial concept and design to development, testing, and deployment. This project not only showcases my technical skills but also my ability to create visually appealing and interactive web applications.",
            ],
          },
        ],
        technologies: ["HTML", "CSS", "Javascript"],
      },
]