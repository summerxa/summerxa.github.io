function normalizedPath(path) {
    return path.replace(/^\.\//, "").replace(/^\//, "");
}

function currentProjectIndex(projects) {
    const currentPath = normalizedPath(window.location.pathname);

    return projects.findIndex(function (project) {
        return currentPath.endsWith(normalizedPath(project.projectPage));
    });
}

function createProjectNavLink(project, direction) {
    const link = document.createElement("a");
    link.className = "image-btn project-page-nav project-page-nav-" + direction;
    link.href = window.sitePath(project.projectPage);
    link.setAttribute("aria-label", direction === "previous" ? "Previous project: " + project.title : "Next project: " + project.title);
    link.textContent = direction === "previous" ? "<" : ">";

    return link;
}

function renderProjectPageNav() {
    const projects = window.projectPages || [];
    const index = currentProjectIndex(projects);

    if (index === -1) {
        return;
    }

    const previousProject = projects[index - 1];
    const nextProject = projects[index + 1];

    if (previousProject) {
        document.body.appendChild(createProjectNavLink(previousProject, "previous"));
    }

    if (nextProject) {
        document.body.appendChild(createProjectNavLink(nextProject, "next"));
    }
}

renderProjectPageNav();
