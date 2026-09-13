const workExperiencePages = [
    {
        title: "Cornell CMSX",
        subtitle: "A course management system used by 100+ courses at Cornell.",
        skills: ["Java", "Full-stack development"],
        imagePath: "img/ongoing-cmsx/cornell-logo-circle.png",
        imageAlt: "Cornell University logo",
        projectPage: "projects/ongoing-cmsx.html",
        ariaLabel: "Open Cornell CMSX project"
    },
    {
        title: "Internship @ Roblox",
        subtitle: "New features for desktop & mobile app.",
        skills: ["React", "C#", "Full-stack development"],
        imagePath: "img/2026-roblox/roblox-icon.jpg",
        imageAlt: "Roblox logo with stylized background",
        projectPage: "projects/2026-roblox.html",
        ariaLabel: "Open Roblox Internship project"
    },
    {
        title: "Internship @ Everpure",
        subtitle: "An AI assistant for classifying and triaging support tickets from error logs.",
        skills: ["ML", "Python"],
        imagePath: "img/2025-everpure/everpure-logo.jpg",
        imageAlt: "Everpure logo",
        projectPage: "projects/2025-everpure.html",
        ariaLabel: "Open Everpure Internship project"
    },
    {
        title: "Internship @ UC Santa Cruz",
        subtitle: "Research on deep learning methods for physical-layer wireless communication.",
        skills: ["ML", "Python", "Research"],
        imagePath: "img/2026-ucsc/ucsc-0.png",
        imageAlt: "Figure from UC Santa Cruz research paper",
        projectPage: "projects/2026-ucsc.html",
        ariaLabel: "Open UCSC Internship project"
    }
];

const projectPages = [
    {
        title: "SituAlert [Page coming soon!]",
        subtitle: "A mobile app that scans and responds to natural disasters using agentic AI.",
        skills: ["Java", "Full-stack development"],
        imagePath: "img/2026-situalert/situalert-logo.png",
        imageAlt: "SituAlert app logo",
        projectPage: "https://github.com/summerxa/SituAlert",
        ariaLabel: "Open SituAlert project"
    },
    {
        title: "LoRA: Re-implementation and Exploration",
        subtitle: "A study of LoRA adapters for fine-tuning RoBERTa on sentiment classification.",
        skills: ["ML", "LLMs", "Python", "Research"],
        imagePath: "img/2026-lora/lora-figure.png",
        imageAlt: "Figure from research project",
        projectPage: "projects/2026-lora.html",
        ariaLabel: "Open LoRA project"
    },
    {
        title: "The Scarcity Line",
        subtitle: "An award-winning puzzle game about hunger and food waste.",
        skills: ["Unity", "C#", "Game development"],
        imagePath: "img/2025-scarcity-line/line-cover.png",
        imageAlt: "The Scarcity Line cover art",
        projectPage: "projects/2025-scarcity-line.html",
        ariaLabel: "Open The Scarcity Line project"
    },
    {
        title: "Miscellaneous",
        subtitle: "Other cool things I've worked on.",
        skills: [],
        imagePath: "img/2025-function-dungeon/func-0.png",
        imageAlt: "Function Dungeon gameplay screenshot",
        projectPage: "project-archive.html",
        ariaLabel: "Open project archive to view more projects"
    },
];

const siteRoot = new URL("./", document.currentScript.src);

function sitePath(path, baseUrl = siteRoot) {
    return new URL(path, baseUrl).href;
}

window.workExperiencePages = workExperiencePages;
window.projectPages = projectPages;
window.sitePath = sitePath;
