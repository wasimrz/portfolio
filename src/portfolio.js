/* Change this file to get your personal Porfolio */

/*
TODO:
1. Edit all the texts in Homepage, Education tab, contact me tab, projects tab, Experience tab.
2. Remove opensource tab
3. Remove git projects integration from projects tab
4. Add a component to display all my projects in card components, which will contain project name, description, live link & github link
5. Design the splash screen
6. Update resume link with updated resume
7. Update svg illustrations as I like
8. Play with theme color customizations
*/

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Wasim's Portfolio",
  description:
    "A passionate Software Engineer with four months of experience in Software Industry. Skilled in  building & maintaining highly scalable and available software applications.",
  og: {
    title: "Wasim Reza Portfolio",
    type: "website",
    url: "https://wasimreza.com/",
  },
};

//Home Page
const greeting = {
  title: "Wasim Reza",
  logo_name: "Wasimreza",
  nickname: "",
  subTitle:
    "A passionate Software developer with one year of experience in Software Industry. Skilled in building & maintaining highly scalable and available software applications.",
  secondSubtitle:
    "Love to learn new technologies everyday and apply them through building new projects.",
  // resumeLink: "https://1drv.ms/w/s!AgouOYIBgjsMpCKSpTqIQvycOJW7?e=6kOg5F",
  // portfolio_repository: "https://github.com/SubhamRaoniar28",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/wasimrz",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/wasim-reza-1a4191203",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC-NXT1lYAOPa3lrgWXqvuHA",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:rezawasim9x@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/subhamraoniar",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/subham.raoniar/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/wasiim_reza/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing highly scalable and maintainable REST APIs",
        "⚡ Creating application backend using Node js along with integration of databases such as Oracle SQL & MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "ant-design:console-sql-outlined",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#52A74B",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos:bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Maven",
          fontAwesomeClassname: "vscode-icons:file-type-maven",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining dynamic web applications, wordpress or static websites on virtual machine instances",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },

        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ As mentioned above, I like to learn new technologies and as a developer everyone should be familiar with latest trending tools & technologies. Data Science and Machine Learning is popular & trending nowadays, and I found it quite interesting.",
    //     '⚡ So far, I\'ve done a few courses related to the same from Coursera, such as "Python for Everybody Specialization", "Introduction to Data Science in Python", and learned data computing & manipulating libraries such as Numpy & Pandas.',
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "logos:python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Pandas",
    //       fontAwesomeClassname: "simple-icons:pandas",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#130654",
    //       },
    //     },
    //     {
    //       skillName: "Numpy",
    //       fontAwesomeClassname: "logos:numpy",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page

// const competitiveSites = {
//   competitiveSites: [
//     {
//       siteName: "HackerRank",
//       iconifyClassname: "simple-icons:hackerrank",
//       style: {
//         color: "#2EC866",
//       },
//       profileLink: "",
//     },
//     {
//       siteName: "Codechef",
//       iconifyClassname: "simple-icons:codechef",
//       style: {
//         color: "#5B4638",
//       },
//       profileLink: "",
//     },
//     {
//       siteName: "Codeforces",
//       iconifyClassname: "simple-icons:codeforces",
//       style: {
//         color: "#1F8ACB",
//       },
//       profileLink: "",
//     },
//     {
//       siteName: "Hackerearth",
//       iconifyClassname: "simple-icons:hackerearth",
//       style: {
//         color: "#323754",
//       },
//       profileLink: "",
//     },
//     {
//       siteName: "Kaggle",
//       iconifyClassname: "simple-icons:kaggle",
//       style: {
//         color: "#20BEFF",
//       },
//       profileLink: "",
//     },
//   ],
// };

const degrees = {
  degrees: [
    {
      title: "BN Mandal University Madhepura",
      subtitle: "BCA (Bachelor of Computer Application)",
      logo_path: "bn.png",
      alt_name: "JGEC Logo",
      duration: "2017 - 2020",
      descriptions: [
        "⚡ Graduated with 76%.",
        "⚡ I have studied basic software engineering subjects like Java,Node js, DS, Algorithms, Computer Architecture, Operating System, DBMS, Computer Network etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development",
      ],
      website_link: "https://bnmu.ac.in/",
    },

    {
      title: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      subtitle: "MCA (Master of Computer Application)",
      logo_path: "MCA.png",
      alt_name: "mca Logo",
      duration: "2021- PRESENT",
      descriptions: [],
      website_link: "https://www.rgpv.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "NODE JS",
      subtitle: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
      logo_path: "node.png",
      certificate_link: "https://www.udemy.com/",
      alt_name: "Udemy",
      color_code: "#02447B",
    },
    // {
    //   title: "Java Multithreading",
    //   subtitle: "- John Purcell",
    //   logo_path: "udemy-logo.png",
    //   certificate_link: "http://ude.my/UC-2029a6c9-08b6-4622-8427-48a8c111d061",
    //   alt_name: "IBM",
    //   color_code: "#FFB6C1",
    // },
    // {
    //   title:
    //     "Building Scalable Java Microservices with Spring Boot and Spring Cloud on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/7f8702e5879631b6cf9da7f04beb04e1",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Front-End Web Development with React",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "HKUST-logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/59ea7b7b3b5574f799db0dfae4ac6f7b",
    //   alt_name: "Hong Kong University of Science and Technology",
    //   color_code: "#F7F7F7",
    // },
    // {
    //   title: "Server-side Development with NodeJS, Express and MongoDB",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "HKUST-logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/24ed6b1f8d080df344a55d13af690777",
    //   alt_name: "Hong Kong University of Science and Technology",
    //   color_code: "#F7F7F7",
    // },
    // {
    //   title: "Front-End Web UI Frameworks and Tools",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "HKUST-logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/ff017bf02797713d395c83998c2edc21",
    //   alt_name: "Hong Kong University of Science and Technology",
    //   color_code: "#F7F7F7",
    // },
    // {
    //   title: "HTML, CSS and JavaScript",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "HKUST-logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/684fb4b1b2aca4b3c10b36ec159eae85",
    //   alt_name: "Hong Kong University of Science and Technology",
    //   color_code: "#F7F7F7",
    // },
    // {
    //   title: "Python for Everybody Specialization",
    //   subtitle: "- Charles Russell Severance",
    //   logo_path: "uni-of-michigan-logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/b77cc1012bd3ced36c00d31501a6e28d",
    //   alt_name: "University of Michigan",
    //   color_code: "#02447B",
    // },
    // {
    //   title: "Introduction to Data Science in Python",
    //   subtitle: "- Christopher Brooks",
    //   logo_path: "uni-of-michigan-logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/ad10f0212cd4eecc3704a002a693d4ea",
    //   alt_name: "University of Michigan",
    //   color_code: "#02447B",
    // },
    // {
    //   title: "Python for Data Science, AI & Development",
    //   subtitle: "- Joseph Santarcangelo",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/684c81a4e8f93d65a1462bdfc5b6ffc9",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "AI For Everyone",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning-logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/34d86df65b1b4db906edb601dee26910",
    //   alt_name: "Deeplearning.ai",
    //   color_code: "#333333",
    // },
    // {
    //   title:
    //     "The Science of Success: What Researchers Know that You Should Know",
    //   subtitle: "- Paula Caproni",
    //   logo_path: "uni-of-michigan-logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/2c5ac2f17afb3b941d55bf51321cfc1f",
    //   alt_name: "University of Michigan",
    //   color_code: "#02447B",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Work Experience",
  subtitle: "",
  description:
    "I have worked with one of India's largest IT company as a software developer for more than one year. Over these one year I've worked on multiple large scale projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work & Projects",
      experiences: [
        {
          title: "Backend developer",
          company: "Daily doc health care",
          company_url: "https://dailydoc.io/",
          logo_path: "unnamed.png",
          duration: "september - Present",
          location: "Pune, Maharastra",
          description: "",
          color: "#0879bf",
          projects: [
            {
              projectName: "Daily doc",
              clientName: "***",
              projectDescription:
                "A unique platform for hospitals to streamline communication and bring work schedule online.",
            },
            {
              projectName: "CmeHouse",
              clientName: "***",
              projectDescription: "Conference hosting service.",
            },
          ],
        },
      ],
    },
  ],
};
// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack Web Applications and deploy them to cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const projectsData = {
  myProjects: [
    // {
    //   id: 1,
    //   name: "My Portfolio",
    //   description:
    //     "The complete portfolio website hosted using github pages (gh-pages). Visit the website here : ",
    //   createdAt: "2021-03-06",
    //   liveUrl: "https://www.wasimreza.com/",
    //   // gitUrl: "https://github.com/SubhamRaoniar28/My-React-Portfolio",
    // },
    {
      id: 2,
      name: "Node js e-Commerce",
      description: "e-Commerce is a node app made for online shopping",
      createdAt: "2021-03-06",
      gitUrl: "https://github.com/wasimrz/Node-eCommerceUdemy.git",
    },
    {
      id: 3,
      name: "Food App",
      description:
        "This project is a Food web application made using React and Firebase.",
      createdAt: "2021-03-06",

      gitUrl: "https://github.com/wasimrz/React-foodApp.git",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "wasim.jpg",
    description:
      "I am available on almost every social media. You can message me anytime, I will reply within 24 hours. I can help you with Java, React,Node js Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to write blogs to explain solutions of digital & technical problems in much simpler way.",
    link: "https://digital-techie.blogspot.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Purnia, Bihar",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8210380847",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  //competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  projectsData,
  contactPageData,
};
