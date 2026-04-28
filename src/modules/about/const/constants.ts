export const SITE_CONFIG = {
  name: "X-MAJ | Portfolio",
  description:
    "Xavier Moisés Alberto José - Full Stack Developer & UI Designer",
  url: "https://x-maj.vercel.app/",
  ogImage: "/demo.png",
  icon: "/logo.png",
  author: {
    name: "Xavier Moisés Alberto José",
    nickname: "X-MAJ",
    github: "https://github.com/xmaj2001",
    linkedin: "https://www.linkedin.com/in/xmaj2001",
    fortytwo: "https://profile.intra.42.fr/users/xmaj2001",
    location: "Luanda, Angola",
    email: "xmaj2001@gmail.com", // Replace with actual email if needed
  },
};

export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const SKILLS = [
  {
    category: "Programming Languages",
    items: ["C", "C++", "C#", "JavaScript", "TypeScript", "PHP", "SQL"],
  },
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "React",
      "Tailwind CSS",
      "Bootstrap",
      "Nextjs",
      "ReactNative",
      "vite",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Nestjs", "Prisma", "MySQL", "SQLite", "PHP"],
  },
  {
    category: "Tools & Software",
    items: ["Git", "GitHub", "VS Code", "Figma", "Photoshop", "Postman"],
  },
  {
    category: "Game Development",
    items: ["Unity"],
  },
  {
    category: "Descktop",
    items: ["C#", "WPF", "Winform", "Electronjs"],
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/xmaj2001",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/xmaj2001",
    icon: "linkedin",
  },
  {
    name: "42 Luanda",
    url: "https://profile.intra.42.fr/users/xmaj2001",
    icon: "code",
  },
];

export const MATRIX = [
  ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
  ["1", "0", "0", "0", "0", "0", "0", "0", "0", "1"],
  ["1", "0", "C", "0", "0", "0", "0", "C", "0", "1"],
  ["1", "0", "0", "0", "P", "0", "0", "0", "0", "1"],
  ["1", "0", "0", "0", "0", "0", "0", "0", "0", "1"],
  ["1", "0", "C", "0", "0", "0", "0", "E", "0", "1"],
  ["1", "0", "0", "0", "0", "0", "0", "0", "0", "1"],
  ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
];

export const ABOUT_ME = `
Sou Xavier Moisés Alberto José. Sou um Desenvolvedor Full Stack e Designer de UI.

Gosto de criar soluções elegantes e eficientes que resolvam problemas do mundo real. Minha jornada na tecnologia começou com um fascínio por como as coisas funcionam, o que me levou a explorar linguagens de programação, princípios de design e arquitetura de software.

Além de programação, tenho um profundo interesse por astronomia — a vastidão do espaço sempre inspirou minha criatividade. Quando não estou desenvolvendo aplicativos ou projetando interfaces, você pode me encontrar jogando ou aprendendo sobre os últimos avanços em tecnologia.

Acredito em código limpo, design inteligente e aprendizado contínuo. Meu objetivo é criar experiências digitais que não sejam apenas funcionais, mas também bonitas e intuitivas.`;

export const EXPERIENCE = [
  {
    title: "42 Luanda - Common Core",
    date: "Atual",
    description:
      "Trabalhando em projetos avançados como parte do currículo Common Core na 42 Luanda, com foco em desenvolvimento C/C++ e sistemas Unix.",
  },
  {
    title: "Maiomb - Full Stack Developer",
    date: "Atual",
    description:
      "Atuando como desenvolvedor Full Stack na Maiomb, trabalhando no desenvolvimento e manutenção de aplicações web, com foco em soluções frontend e backend integradas .",
  },
  {
    title: "FREEL - Backend Developer",
    date: "Atual",
    description:
      "Atuando como desenvolvedor backend na plataforma FREEL (https://freell.web.app), que auxilia programadores a precificar projetos freelance com base em tecnologias, tempo e complexidade, garantindo cálculos justos e competitivos.",
  },
  {
    title: "42 Luanda - Hackathon - MapaZZZ",
    date: "2023",
    description:
      "Participei do hackathon da 42 Luanda como desenvolvedor FrontEnd e BackEnd no projeto MapaZZZ, implementando funcionalidades de interface e lógica para uma aplicação de mapeamento interativo.",
  },
  {
    title: "42 Luanda - Piscine",
    date: "Concluída em 2023",
    description:
      'Concluí o intensivo bootcamp de codificação de 4 semanas conhecido como "The Piscine", dominando programação em C, script Shell e resolução de problemas.',
  },
  {
    title: "Freelance Developer",
    date: "2020 - Presente",
    description:
      "Desenvolvimento de aplicativos web personalizados e designs de interface de usuário para clientes de vários setores, com foco em soluções sob medida.",
  },
];

export const FEATURED_PROJECTS = [
  {
    name: "ft_printf",
    description:
      "A recreation of the printf function from the C standard library.",
    technologies: ["C", "Unix"],
    image: "/images/project-printf.png",
    github: "https://github.com/xmaj2001/ft_printf",
  },
  {
    name: "minishell",
    description:
      "A simple shell implementation with basic Unix command execution.",
    technologies: ["C", "Unix", "Shell"],
    image: "/images/project-minishell.png",
    github: "https://github.com/xmaj2001/minishell",
  },
  {
    name: "Portfolio Website",
    description:
      "Personal portfolio website built with Next.js and Framer Motion.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/project-portfolio.png",
    github: "https://github.com/xmaj2001/portfolio",
  },
  {
    name: "Game Project",
    description: "A 2D game project built with Unity.",
    technologies: ["Unity", "C#", "Game Development"],
    image: "/images/project-game.png",
    github: "https://github.com/xmaj2001/game-project",
  },
];
