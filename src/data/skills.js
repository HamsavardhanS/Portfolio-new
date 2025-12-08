import { FaReact, FaNodeJs, FaJava, FaPython, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiMysql, SiTailwindcss, SiPostman, SiFigma, SiVercel, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';

export const skills = [
    {
        category: "Frontend",
        items: [
            { name: "HTML5", icon: SiHtml5, level: 95 },
            { name: "CSS3", icon: SiCss3, level: 90 },
            { name: "JavaScript", icon: SiJavascript, level: 90 },
            { name: "React", icon: FaReact, level: 85 },
            { name: "Tailwind CSS", icon: SiTailwindcss, level: 88 }
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: FaNodeJs, level: 80 },
            { name: "Spring Boot", icon: SiSpringboot, level: 75 },
            { name: "Express", icon: FaNodeJs, level: 80 }, // Using Node icon for Express as generic JS backend
            { name: "Java", icon: FaJava, level: 80 },
            { name: "Python", icon: FaPython, level: 75 }
        ]
    },
    {
        category: "Database",
        items: [
            { name: "MongoDB", icon: SiMongodb, level: 80 },
            { name: "MySQL", icon: SiMysql, level: 85 }
        ]
    },
    {
        category: "Tools",
        items: [
            { name: "Git", icon: FaGitAlt, level: 90 },
            { name: "VS Code", icon: FaGitAlt, level: 95 }, // Generic coding icon
            { name: "Postman", icon: SiPostman, level: 85 },
            { name: "Figma", icon: SiFigma, level: 70 },
            { name: "Vercel", icon: SiVercel, level: 80 },
            { name: "Docker", icon: FaDocker, level: 60 }
        ]
    }
];
