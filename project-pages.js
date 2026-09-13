const projectPages = [
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
        title: "SituAlert [Page coming soon!]",
        subtitle: "A mobile app that scans and responds to natural disasters using agentic AI.",
        skills: ["Java", "Full-stack development"],
        imagePath: "img/2026-situalert/situalert-logo.png",
        imageAlt: "SituAlert app logo",
        projectPage: "https://github.com/summerxa/SituAlert",
        ariaLabel: "Open SituAlert project"
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
        title: "LoRA: Re-implementation and Exploration",
        subtitle: "A study of LoRA adapters for fine-tuning RoBERTa on sentiment classification.",
        skills: ["ML", "LLMs", "Python", "Research"],
        imagePath: "img/2026-lora/lora-figure.png",
        imageAlt: "Figure from research project",
        projectPage: "projects/2026-lora.html",
        ariaLabel: "Open LoRA project"
    },
    {
        title: "Internship @ UC Santa Cruz",
        subtitle: "Research on deep learning methods for physical-layer wireless communication.",
        skills: ["ML", "Python", "Research"],
        imagePath: "img/2026-ucsc/ucsc-0.png",
        imageAlt: "Figure from UC Santa Cruz research paper",
        projectPage: "projects/2026-ucsc.html",
        ariaLabel: "Open UCSC Internship project"
    },
    {
        title: "After Eve",
        subtitle: "A bullet hell roguelite and narrative game.",
        skills: ["Unity", "C#", "Game development"],
        imagePath: "img/2026-after-eve/ae-cover.jpg",
        imageAlt: "After Eve game banner",
        projectPage: "projects/2026-after-eve.html",
        ariaLabel: "Open After Eve project"
    },
    {
        title: "Eta Compiler",
        subtitle: "A compiler for Eta, an imperative C-like programming language.",
        skills: ["Kotlin", "Compiler design"],
        imagePath: "img/2026-compiler/eta.png",
        imageAlt: "The Greek letter eta",
        projectPage: "projects/2026-compiler.html",
        ariaLabel: "Open Eta Compiler project"
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
        title: "Function Dungeon",
        subtitle: "A procedurally generated dungeon crawler.",
        skills: ["OCaml"],
        imagePath: "img/2025-function-dungeon/func-0.png",
        imageAlt: "Function Dungeon gameplay screenshot",
        projectPage: "projects/2025-function-dungeon.html",
        ariaLabel: "Open Function Dungeon project"
    },
    {
        title: "Critter World",
        subtitle: "A real-time ecosystem simulator where programmable critters evolve on a grid.",
        skills: ["Java", "UI", "Multithreading", "MVC"],
        imagePath: "img/2024-critter-world/critter-0.png",
        imageAlt: "Critter World GUI screenshot",
        projectPage: "projects/2024-critter-world.html",
        ariaLabel: "Open Critter World project"
    },
    {
        title: "Time Keeper",
        subtitle: "A management sim and narrative game.",
        skills: ["Python", "Game development"],
        imagePath: "img/2024-timekeeper/tk-0.png",
        imageAlt: "Time Keeper main menu",
        projectPage: "projects/2024-timekeeper.html",
        ariaLabel: "Open Time Keeper project"
    },
    {
        title: "Alphabet Interpreter",
        subtitle: "An Android app that recognizes ASL alphabet signs from a live camera feed.",
        skills: ["Java", "Python", "ML", "Android dev"],
        imagePath: "img/2022-alphabet/alpha-d.png",
        imageAlt: "Alphabet Interpreter app screenshot",
        projectPage: "projects/2022-alphabet.html",
        ariaLabel: "Open Alphabet Interpreter project"
    }
];

const siteRoot = new URL("./", document.currentScript.src);

function sitePath(path, baseUrl = siteRoot) {
    return new URL(path, baseUrl).href;
}

window.projectPages = projectPages;
window.sitePath = sitePath;
