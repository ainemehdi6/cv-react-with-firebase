import homeImage from "./assets/me.jpg";
// ========================== Header Data
const headerIds = [
    "home",
    "profile",
    "education",
    "skills",
    "experience",
    "certificates",
];
const HeaderLinks = [
    {
        linkText: "Home",
        linkID: "home",
        boxIcon: "bx-home",
    },
    {
        linkText: "Profile",
        linkID: "profile",
        boxIcon: "bx-user",
    },
    {
        linkText: "Education",
        linkID: "education",
        boxIcon: "bx-book",
    },
    {
        linkText: "Skills",
        linkID: "skills",
        boxIcon: "bx-receipt",
    },
    {
        linkText: "Experience",
        linkID: "experience",
        boxIcon: "bx-briefcase-alt",
    },
    {
        linkText: "Certificates",
        linkID: "certificates",
        boxIcon: "bx-award",
    },
    //   {
    //     linkText: "References",
    //     linkID: "references",
    //     boxIcon: "bx-link-external",
    //   },
];

//  ===================================== Left Section Content =============================== //
// ========================== Home Data
const homeData = {
    homeImage,
    homeTitle1: "El Mehdi",
    homeTitle2: "El Aine",
    homeProfession: "Web Developer",
    homeInformation: [
        {
            text: " 18 Rue Martyn, Calais",
            icon: "bx-map",
        },
        {
            text: "ainemehdi6@gmail.com",
            icon: "bx-envelope",
        },
        {
            text: " +33 7 49 16 43 25",
            icon: "bx-phone",
        },
    ],
};

// ========================== Social Links
const socialLinks = {
    title: "Social",
    links: [
        {
            link: "https://www.instagram.com/mehdi.elaine/",
            text: "El Mehdi El Aine",
            icon: "bxl-instagram",
        },
        {
            link: "https://www.facebook.com/mehdi.aine.36",
            text: "El Mehdi El Aine",
            icon: "bxl-facebook",
        },
        {
            link: "https://www.linkedin.com/in/elmehdielaine/?originalSubdomain=fr",
            text: "El Mehdi El Aine",
            icon: "bxl-linkedin-square",
        },
    ],
};

// ========================== Profile Data
const profileData = {
    title: "Profile",
    //   Here you can add as much paragraph as you can
    descriptions: [
        `I'm a Full stack web developer and i'm currently preparing my degree in internet 
        and mobile development at the University Institute of Technology in Calais, and 
        I'm looking for new opportiutes`,
    ],
};

// ========================= Education Data
const educationData = {
    title: "Education",
    educations: [
        {
            title: "Internet and mobile development",
            studies: "IUT Littoral Calais, France",
            year: "2022 - Present",
            line: true,
        },
        {
            title: "Computer engineering and emerging technologies",
            studies: "ENSA of El Jadida, Morocco",
            year: "2021 - 2022",
            line: true,
        },
        {
            title: "DUT of Computer Engineering",
            studies: "Superior School of Technology of Safi, Morocco",
            year: "2019 - 2021",
            line: false,
        },
    ],
};

// ========================= Skills Data
const skillsData = {
    title: "Skills",
    //   Here you can add further skills array
    skills: [
        [`Html`, `Css`, `PHP`, `Symfony`, `JEE`],
        [`Java`, `Flutter`, `Firebase`, `SQL`],
    ],
};
const logoText = "Hafiz.";
const menuIcon = "bx-grid-alt";

//  ===================================== Right Section Content =============================== //

// ======================== Certificates Data
const certificatesData = {
    title: "Certificates",
    certificates: [
        {
            title: "Member of Hackathon Winner Team AirTech’19",
            describe:
                "We Presented the idea of a Forest fire prevention system using WSN.",
        },
    ],
};

// ========================= Experience Data
const experienceData = {
    title: "Experience",
    experiences: [
        {
            title: "Java Developer",
            company: "02/2022 - 07/2022",
            describe:
                "Development of several desktop and mobile apps with Java",
            line: true,
        },
        {
            title: "Web Developer",
            company: "07/2021 - 09/2021",
            describe: "Development of a Web application for Inventory Management Used technologies: HTML/CSS, JavaScript , PHP, CodeIgniter, SQL",
            line: true,
        },
        {
            title: "Web Developer",
            company: "04/2021 - 06/2021",
            describe: "Development and maintenance of an E-Commerce website and improvement of the results through a high level use of Semrush, ahrefs and Keyword Planner.",
            line: false,
        },
    ],
};

// ========================= Languages Data
const languageData = {
    title: "Languages",
    languages: ["English", "french", "Arabe"],
};

// ========================= INTERESTS Data
const interestsData = {
    title: "INTERESTS",
    interests: [
        {
            icon: "bxs-plane-alt",
            text: "Travel",
        },
        {
            icon: "bx-headphone",
            text: "Gaming",
        },
        {
            icon: "bx-smile",
            text: "Bodybuilding",
        },
    ],
};
export {
    HeaderLinks,
    logoText,
    menuIcon,
    homeData,
    socialLinks,
    profileData,
    educationData,
    skillsData,
    certificatesData,
    experienceData,
    languageData,
    interestsData,
    headerIds
};