"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Server,
  Monitor,
  Database,
  Network,
  Cloud,
  Users,
  Smartphone,
  Settings,
  Globe,
} from "lucide-react";

// Helper function to get badge URL for a skill
const getBadgeUrl = (skill: string): string => {
  const skillMap: { [key: string]: string } = {
    "HTML": "https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white",
    "CSS": "https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white",
    "JavaScript": "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black",
    "TypeScript": "https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white",
    "C++": "https://img.shields.io/badge/C++-00599C?logo=cplusplus&logoColor=white",
    "C#": "https://img.shields.io/badge/C%23-239120?logo=csharp&logoColor=white",
    "Python": "https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white",
    "Java": "https://img.shields.io/badge/Java-ED8B00?logo=openjdk&logoColor=white",
    "Kotlin": "https://img.shields.io/badge/Kotlin-7F52FF?logo=kotlin&logoColor=white",
    "PHP": "https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=white",
    "Go": "https://img.shields.io/badge/Go-00ADD8?logo=go&logoColor=white",
    "Rails": "https://img.shields.io/badge/Ruby%20on%20Rails-CC0000?logo=rubyonrails&logoColor=white",
    ".NET": "https://img.shields.io/badge/.NET-512BD4?logo=dotnet&logoColor=white",
    "ASP.NET": "https://img.shields.io/badge/ASP.NET-512BD4?logo=dotnet&logoColor=white",
    "NodeJS": "https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white",
    "Express.js": "https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white",
    "Laravel": "https://img.shields.io/badge/Laravel-FF2D20?logo=laravel&logoColor=white",
    "Java Spring": "https://img.shields.io/badge/Spring-6DB33F?logo=spring&logoColor=white",
    "Spring Boot": "https://img.shields.io/badge/Spring%20Boot-6DB33F?logo=springboot&logoColor=white",
    "FastAPI": "https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white",
    "Django": "https://img.shields.io/badge/Django-092E20?logo=django&logoColor=white",
    "Flask": "https://img.shields.io/badge/Flask-000000?logo=flask&logoColor=white",
    "Blazor": "https://img.shields.io/badge/Blazor-512BD4?logo=blazor&logoColor=white",
    "WPF": "https://img.shields.io/badge/WPF-512BD4?logo=dotnet&logoColor=white",
    "Angular": "https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white",
    "React": "https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black",
    "Next.js": "https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white",
    "Flutter": "https://img.shields.io/badge/Flutter-02569B?logo=flutter&logoColor=white",
    "React Native": "https://img.shields.io/badge/React%20Native-61DAFB?logo=react&logoColor=black",
    "Vue.js": "https://img.shields.io/badge/Vue.js-4FC08D?logo=vuedotjs&logoColor=white",
    "Redux": "https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white",
    "Vite": "https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white",
    "TailwindCSS": "https://img.shields.io/badge/Tailwind%20CSS-38B2AC?logo=tailwindcss&logoColor=white",
    "Sass": "https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white",
    "Firebase": "https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black",
    "Microsoft SQL Server": "https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?logo=microsoftsqlserver&logoColor=white",
    "MongoDB": "https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white",
    "MySQL": "https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white",
    "Postgres": "https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white",
    "Elasticsearch": "https://img.shields.io/badge/Elasticsearch-005571?logo=elasticsearch&logoColor=white",
    "SQLite": "https://img.shields.io/badge/SQLite-003B57?logo=sqlite&logoColor=white",
    "DynamoDB": "https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?logo=amazondynamodb&logoColor=white",
    "Cassandra": "https://img.shields.io/badge/Cassandra-1287B1?logo=apachecassandra&logoColor=white",
    "MariaDB": "https://img.shields.io/badge/MariaDB-003545?logo=mariadb&logoColor=white",
    "AWS": "https://img.shields.io/badge/AWS-232F3E?logo=amazonaws&logoColor=white",
    "Docker": "https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white",
    "Kubernetes": "https://img.shields.io/badge/Kubernetes-326CE5?logo=kubernetes&logoColor=white",
    "Terraform": "https://img.shields.io/badge/Terraform-7B42BC?logo=terraform&logoColor=white",
    "Redis": "https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white",
    "Google Cloud": "https://img.shields.io/badge/Google%20Cloud-4285F4?logo=googlecloud&logoColor=white",
    "Heroku": "https://img.shields.io/badge/Heroku-430098?logo=heroku&logoColor=white",
    "Netlify": "https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white",
    "Microsoft Azure": "https://img.shields.io/badge/Microsoft%20Azure-0078D4?logo=microsoftazure&logoColor=white",
    "Vercel": "https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white",
    "Git": "https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white",
    "GitHub": "https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white",
    "Linux": "https://img.shields.io/badge/Linux-FCC624?logo=linux&logoColor=black",
    "Windows": "https://img.shields.io/badge/Windows-0078D4?logo=windows&logoColor=white",
    "macOS": "https://img.shields.io/badge/macOS-000000?logo=apple&logoColor=white",
    "Android": "https://img.shields.io/badge/Android-3DDC84?logo=android&logoColor=white",
    "iOS": "https://img.shields.io/badge/iOS-000000?logo=ios&logoColor=white",
    "Visual Studio Code": "https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?logo=visualstudiocode&logoColor=white",
    "Figma": "https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white",
    "shadcn/ui": "https://img.shields.io/badge/shadcn%2Fui-000000?style=flat-square&logo=react&logoColor=white",
    "XML": "https://img.shields.io/badge/XML-FF6600?style=flat-square&logoColor=white",
    "Microservices": "https://img.shields.io/badge/Microservices-FF6B6B?style=flat-square&logo=docker&logoColor=white",
    "REST APIs": "https://img.shields.io/badge/REST%20API-FF6B6B?style=flat-square&logoColor=white",
    "WebSockets": "https://img.shields.io/badge/WebSocket-010101?style=flat-square&logo=socketdotio&logoColor=white",
    "RabbitMQ": "https://img.shields.io/badge/RabbitMQ-FF6600?logo=rabbitmq&logoColor=white",
    "Kafka": "https://img.shields.io/badge/Apache%20Kafka-231F20?logo=apachekafka&logoColor=white",
    "Cypress": "https://img.shields.io/badge/Cypress-17202C?logo=cypress&logoColor=white",
    "CI/CD": "https://img.shields.io/badge/CI%2FCD-2088FF?logo=githubactions&logoColor=white",
    "Asana": "https://img.shields.io/badge/Asana-F06A6A?logo=asana&logoColor=white",
    "Jira": "https://img.shields.io/badge/Jira-0052CC?logo=jira&logoColor=white",
    "Slack": "https://img.shields.io/badge/Slack-4A154B?logo=slack&logoColor=white",
    "Trello": "https://img.shields.io/badge/Trello-0052CC?logo=trello&logoColor=white",
    "Zoom": "https://img.shields.io/badge/Zoom-2D8CFF?logo=zoom&logoColor=white",
    "IntelliJ IDEA": "https://img.shields.io/badge/IntelliJ%20IDEA-000000?logo=intellijidea&logoColor=white",
    "NetBeans IDE": "https://img.shields.io/badge/Apache%20NetBeans%20IDE-1B6AC6?logo=apachenetbeanside&logoColor=white",
    "PhpStorm": "https://img.shields.io/badge/PhpStorm-000000?logo=phpstorm&logoColor=white",
    "Python IDLE": "https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white",
    "Sublime Text": "https://img.shields.io/badge/Sublime%20Text-FF9800?logo=sublimetext&logoColor=white",
    "Visual Studio": "https://img.shields.io/badge/Visual%20Studio-5C2D91?logo=visualstudio&logoColor=white",
    "Xcode": "https://img.shields.io/badge/Xcode-147EFB?logo=xcode&logoColor=white",
    "Expo": "https://img.shields.io/badge/Expo-000020?logo=expo&logoColor=white",
    "Electron": "https://img.shields.io/badge/Electron-47848F?logo=electron&logoColor=white",
    "Canva": "https://img.shields.io/badge/Canva-00C4CC?logo=canva&logoColor=white",
    "TCP/IP": "https://img.shields.io/badge/TCP%2FIP-0066CC?style=flat-square&logo=cisco&logoColor=white",
    "English": "https://img.shields.io/badge/English-1A73E8?style=flat-square&logoColor=white",
  };

  return skillMap[skill] || `https://img.shields.io/badge/${encodeURIComponent(skill)}-gray?style=flat`;
};

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    bgGradient: "from-blue-600/20 via-cyan-600/20 to-blue-800/20",
    borderColor: "border-blue-500/50",
    iconColor: "text-blue-400",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "C++",
      "C#",
      "Python",
      "Java",
      "Kotlin",
      "PHP",
      "Go",
      "Rails",
    ],
  },
  {
    title: "Backend Frameworks",
    icon: Server,
    bgGradient: "from-purple-600/20 via-pink-600/20 to-purple-800/20",
    borderColor: "border-purple-500/50",
    iconColor: "text-purple-400",
    skills: [
      ".NET",
      "ASP.NET",
      "NodeJS",
      "Express.js",
      "Laravel",
      "Java Spring",
      "Spring Boot",
      "FastAPI",
      "Django",
      "Flask",
    ],
  },
  {
    title: "Frontend Frameworks",
    icon: Monitor,
    bgGradient: "from-pink-600/20 via-rose-600/20 to-pink-800/20",
    borderColor: "border-pink-500/50",
    iconColor: "text-pink-400",
    skills: [
      "Blazor",
      "WPF",
      "Angular",
      "React",
      "Next.js",
      "Flutter",
      "React Native",
      "Vue.js",
      "Redux",
      "Vite",
      "TailwindCSS",
      "shadcn/ui",
      "Sass",
      "XML",
    ],
  },
  {
    title: "Database",
    icon: Database,
    bgGradient: "from-emerald-600/20 via-teal-600/20 to-emerald-800/20",
    borderColor: "border-emerald-500/50",
    iconColor: "text-emerald-400",
    skills: [
      "Firebase",
      "Microsoft SQL Server",
      "MongoDB",
      "MySQL",
      "Postgres",
      "Elasticsearch",
      "SQLite",
      "DynamoDB",
      "Cassandra",
      "MariaDB",
    ],
  },
  {
    title: "Architecture & Messaging",
    icon: Network,
    bgGradient: "from-orange-600/20 via-amber-600/20 to-orange-800/20",
    borderColor: "border-orange-500/50",
    iconColor: "text-orange-400",
    skills: ["Microservices", "REST APIs", "WebSockets", "RabbitMQ", "Kafka", "Cypress"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    bgGradient: "from-indigo-600/20 via-violet-600/20 to-indigo-800/20",
    borderColor: "border-indigo-500/50",
    iconColor: "text-indigo-400",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "Redis",
      "Google Cloud",
      "Heroku",
      "Netlify",
      "Microsoft Azure",
      "Vercel",
    ],
  },
  {
    title: "Project Management & Collaboration",
    icon: Users,
    bgGradient: "from-cyan-600/20 via-blue-600/20 to-cyan-800/20",
    borderColor: "border-cyan-500/50",
    iconColor: "text-cyan-400",
    skills: ["Asana", "Jira", "Slack", "Trello", "Zoom", "Git", "GitHub"],
  },
  {
    title: "Operating Systems",
    icon: Smartphone,
    bgGradient: "from-violet-600/20 via-purple-600/20 to-violet-800/20",
    borderColor: "border-violet-500/50",
    iconColor: "text-violet-400",
    skills: ["Android", "iOS", "Linux", "Windows", "macOS"],
  },
  {
    title: "IDEs & Tools & Others",
    icon: Settings,
    bgGradient: "from-slate-600/20 via-gray-600/20 to-slate-800/20",
    borderColor: "border-slate-500/50",
    iconColor: "text-slate-400",
    skills: [
      "IntelliJ IDEA",
      "NetBeans IDE",
      "PhpStorm",
      "Python IDLE",
      "Sublime Text",
      "Visual Studio",
      "Visual Studio Code",
      "Xcode",
      "Expo",
      "Electron",
      "Figma",
      "Canva",
      "TCP/IP",
    ],
  },
  {
    title: "Language",
    icon: Globe,
    bgGradient: "from-teal-600/20 via-cyan-600/20 to-teal-800/20",
    borderColor: "border-teal-500/50",
    iconColor: "text-teal-400",
    skills: ["English"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                className={`relative rounded-xl p-6 border overflow-hidden group bg-gradient-to-br ${category.bgGradient} ${category.borderColor} hover:border-opacity-100`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.15 } }}
              >
                {/* Background Pattern */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                ></div>
                
                {/* Icon */}
                <div className="relative z-10 flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.bgGradient} ${category.iconColor} border ${category.borderColor}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                {/* Skills */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="relative group/badge"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.03,
                        duration: 0.3,
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.15 }
                      }}
                    >
                      <img
                        src={getBadgeUrl(skill)}
                        alt={skill}
                        className="h-6 cursor-pointer transition-all group-hover/badge:brightness-110"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

