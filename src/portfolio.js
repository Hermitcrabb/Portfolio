/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pratham Bhandari",
  title: "Hello, I am Pratham",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Flutter / Django and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1K13UntFPNN0mav7bdduzk9WmpcaYFKxB/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Hermitcrabb",
  linkedin: "https://www.linkedin.com/in/pratham-bhandari-36b903351/",
  gmail: "prathambhandari2000@gmail.com",
  instagram: "https://www.instagram.com/_bhandari_pratham_/",

  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Building robust backend systems using Python and Django"),
    emoji(
      "⚡ Designing and training Machine Learning models using Scikit-learn and TensorFlow"
    ),
    emoji("⚡ REST API development and integration with frontend frameworks"),
    emoji(
      "⚡ Data analysis and visualization using Pandas, NumPy, and Matplotlib"
    )
  ],

  softwareSkills: [
    {skillName: "html-5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "sql-database", fontAwesomeClassname: "fas fa-database"},
    {skillName: "firebase", fontAwesomeClassname: "fas fa-fire"},
    {skillName: "python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "Machine Learning", fontAwesomeClassname: "fas fa-brain"}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Nepal Engineering College",
      logo: require("./assets/images/NEC-logo.png"),
      subHeader: "Bachelors of Science in Computer Engineering",
      duration: "November 2020 - August 2025",
      desc: "Graduated in Computer Engineering from Nepal Engineering College (NEC).",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "United Academy",
      logo: require("./assets/images/united-academy-logo.png"),
      subHeader: "+2 Science",
      duration: " August 2018 - August 2020",
      desc: "Completed my High school from a very recognized school",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Tech Stack Section
const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Frontend/Design", progressPercentage: "60%"},
    {Stack: "Backend", progressPercentage: "80%"},
    {Stack: "Programming", progressPercentage: "80%"}
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: false,
  experience: [
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 - May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 - Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: "true",
  display: false
};

// Big Projects Section
const bigProjects = {
  title: "Big Projects",
  subtitle: "Some of my projects that I have worked on",
  projects: [
    {
      image: require("./assets/images/Meroswastha.png"),
      projectName: "Mero Swastha",
      projectDesc:
        "Mero Swastha is a Flutter-based health and fitness app powered by Firebase...",
      footerLink: [{name: "", url: ""}]
    },
    {
      image: require("./assets/images/sportscart.webp"),
      projectName: "Sports Cart",
      projectDesc:
        "Sportscart is an e-commerce web application built with Python and Django...",
      footerLink: [{name: "", url: ""}]
    }
  ],
  display: true
};

// Achievements Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "Machine Learning Using Python",
      subtitle:
        "Completed certification in Machine Learning using Python with hands-on projects",
      image: require("./assets/images/simplilearn-logo.png"),
      imageAlt: "Simplilearn Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1a7cRYIOvO2FyHaCHEY1KrysLxSuSIo_X/view"
        }
      ]
    },
    {
      title: "Karmalaya X",
      subtitle:
        "Participated in Karmalaya X, where we pitched an AI solution for the Deaf and Hard of Hearing.",
      image: require("./assets/images/carrd-logo.jpg"),
      imageAlt: "Carrd Logo",
      footerLink: [
        {
          name: "Karmalaya X",
          url: "https://drive.google.com/file/d/1_s05R5d0JyW83-a4LWZK94GGGauPNwaU/view"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "#",
  displayMediumBlogs: "false",
  blogs: [
    {url: "#", title: "#", description: "#"},
    {url: "#", title: "#", description: "#"}
  ],
  display: false
};

// Talks Section
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [{title: "", subtitle: "", slides_url: "", event_url: ""}],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+9779861399497",
  email_address: "prathambhandari2000@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
