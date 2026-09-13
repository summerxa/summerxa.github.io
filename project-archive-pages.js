(function () {
const projectArchivePages = [
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

window.projectArchivePages = projectArchivePages;
window.projectPages = window.projectPages || projectArchivePages;
window.sitePath = window.sitePath || sitePath;
})();
