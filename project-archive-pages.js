(function () {
const projectArchivePages = [
    {
        title: "Eta Compiler",
        subtitle: "A compiler for Eta, an imperative C-like programming language. Named best compiler for CS 4120 Spring '26!",
        skills: ["Kotlin", "Compiler design"],
        imagePath: "img/2026-compiler/eta.png",
        imageAlt: "The Greek letter eta",
        projectPage: "projects/2026-compiler.html",
        ariaLabel: "Open Eta Compiler project"
    },
    {
        title: "The Weaver",
        subtitle: "A 3D puzzle-adventure game about sharing memories.",
        skills: ["Unity", "C#", "Game development"],
        imagePath: "img/2025-weaver/weaver-cover.png",
        imageAlt: "The Weaver cover art",
        projectPage: "projects/2025-weaver.html",
        ariaLabel: "Open The Weaver project"
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
