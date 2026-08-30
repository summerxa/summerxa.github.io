function createProjectButton(project, basePath = "") {
    const button = document.createElement("a");
    button.className = "project-btn";
    button.href = window.sitePath(project.projectPage, basePath || undefined);
    button.setAttribute("aria-label", project.ariaLabel);

    const image = document.createElement("img");
    image.className = "project-image";
    image.src = window.sitePath(project.imagePath, basePath || undefined);
    image.alt = project.imageAlt;

    const info = document.createElement("span");
    info.className = "project-info";

    const title = document.createElement("span");
    title.className = "project-title";
    title.textContent = project.title;

    const subtitle = document.createElement("span");
    subtitle.className = "project-subtitle";
    subtitle.textContent = project.subtitle;

    const meta = document.createElement("span");
    meta.className = "project-meta";
    meta.textContent = project.skills.join(" \u2022 ");

    info.append(title, subtitle, meta);
    button.append(image, info);

    return button;
}

function renderProjectButtons(container, options = {}) {
    const basePath = options.basePath || "";
    const projects = options.projects || window.projectPages;
    const fragment = document.createDocumentFragment();

    projects.forEach(function (project) {
        fragment.appendChild(createProjectButton(project, basePath));
    });

    container.replaceChildren(fragment);
}

window.renderProjectButtons = renderProjectButtons;

const projectContainer = document.getElementById("project-div");

if (projectContainer) {
    renderProjectButtons(projectContainer);
}
