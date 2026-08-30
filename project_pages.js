const projectPages = [
    {
        title: "Cornell CMSX",
        subtitle: "A course management system used by 100+ courses at Cornell.",
        skills: ["Java", "Full-stack development"],
        imagePath: "img/ongoing_cmsx/cornell_logo_circle.png",
        imageAlt: "Cornell University logo",
        projectPage: "projects/ongoing_cmsx.html",
        ariaLabel: "Open Cornell CMSX project"
    },
    {
        title: "Internship @ Roblox",
        subtitle: "New features for desktop & mobile app.",
        skills: ["React", "C#", "Full-stack development"],
        imagePath: "img/2026_roblox/roblox_icon.jpg",
        imageAlt: "Roblox logo with stylized background",
        projectPage: "projects/2026_roblox.html",
        ariaLabel: "Open Roblox Internship project"
    },
    {
        title: "Internship @ Everpure",
        subtitle: "An AI assistant for classifying and triaging support tickets from error logs.",
        skills: ["ML", "Python"],
        imagePath: "img/2025_everpure/everpurelogo.jpg",
        imageAlt: "Everpure logo",
        projectPage: "projects/2025_everpure.html",
        ariaLabel: "Open Everpure Internship project"
    },
    {
        title: "LoRA: Re-implementation and Exploration",
        subtitle: "A study of LoRA adapters for fine-tuning RoBERTa on sentiment classification.",
        skills: ["ML", "LLMs", "Python", "Research"],
        imagePath: "img/2026_lora/lora_figure.png",
        imageAlt: "Figure from research project",
        projectPage: "projects/2026_lora.html",
        ariaLabel: "Open LoRA project"
    },
    {
        title: "Internship @ UC Santa Cruz",
        subtitle: "Research on deep learning methods for physical-layer wireless communication.",
        skills: ["ML", "Python", "Research"],
        imagePath: "img/2026_ucsc/ucsc_0.png",
        imageAlt: "Figure from UC Santa Cruz research paper",
        projectPage: "projects/2026_ucsc.html",
        ariaLabel: "Open UCSC Internship project"
    },
    {
        title: "After Eve",
        subtitle: "An action roguelite and narrative game.",
        skills: ["Unity", "C#", "Game development"],
        imagePath: "img/2026_aftereve/AE_cover.jpg",
        imageAlt: "After Eve game banner",
        projectPage: "projects/2026_aftereve.html",
        ariaLabel: "Open After Eve project"
    },
    {
        title: "Eta Compiler",
        subtitle: "A compiler for Eta, an imperative C-like programming language.",
        skills: ["Kotlin", "Compiler design"],
        imagePath: "img/2026_compiler/eta.png",
        imageAlt: "The Greek letter eta",
        projectPage: "projects/2026_compiler.html",
        ariaLabel: "Open Eta Compiler project"
    },
    {
        title: "Function Dungeon",
        subtitle: "A procedurally generated dungeon crawler.",
        skills: ["OCaml"],
        imagePath: "img/2025_functiondungeon/func_0.png",
        imageAlt: "Function Dungeon gameplay screenshot",
        projectPage: "projects/2025_functiondungeon.html",
        ariaLabel: "Open Function Dungeon project"
    },
    {
        title: "The Scarcity Line",
        subtitle: "A puzzle game about hunger, food waste, and food scarcity.",
        skills: ["Unity", "C#", "Game development"],
        imagePath: "img/2025_scarcityline/line_cover.png",
        imageAlt: "The Scarcity Line cover art",
        projectPage: "projects/2025_scarcityline.html",
        ariaLabel: "Open The Scarcity Line project"
    },
    {
        title: "Critter World",
        subtitle: "A real-time ecosystem simulator where programmable critters evolve on a grid.",
        skills: ["Java", "UI", "Multithreading", "MVC"],
        imagePath: "img/2024_critterworld/critter_0.png",
        imageAlt: "Critter World GUI screenshot",
        projectPage: "projects/2024_critterworld.html",
        ariaLabel: "Open Critter World project"
    },
    {
        title: "Time Keeper",
        subtitle: "A management sim about balancing tasks and time.",
        skills: ["Python", "Game development"],
        imagePath: "img/2024_timekeeper/tk_0.png",
        imageAlt: "Time Keeper main menu",
        projectPage: "projects/2024_timekeeper.html",
        ariaLabel: "Open Time Keeper project"
    },
    {
        title: "Alphabet Interpreter",
        subtitle: "An Android app that recognizes ASL alphabet signs from a live camera feed.",
        skills: ["Java", "Python", "ML", "Android dev"],
        imagePath: "img/2022_alphabet/alpha_d.png",
        imageAlt: "Alphabet Interpreter app screenshot",
        projectPage: "projects/2022_alphabet.html",
        ariaLabel: "Open Alphabet Interpreter project"
    }
];

const siteRoot = new URL("./", document.currentScript.src);

function sitePath(path, baseUrl = siteRoot) {
    return new URL(path, baseUrl).href;
}

window.projectPages = projectPages;
window.sitePath = sitePath;
