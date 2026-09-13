function normalizedPath(path) {
    return path.replace(/^\.\//, "").replace(/^\//, "");
}

function currentProjectIndex(projects) {
    const currentPath = normalizedPath(window.location.pathname);

    return projects.findIndex(function (project) {
        return currentPath.endsWith(normalizedPath(project.projectPage));
    });
}

function navigableProjects(projects) {
    return projects.filter(function (project) {
        const projectPage = normalizedPath(project.projectPage || "");

        return /^projects\//.test(projectPage) || projectPage === "project-archive.html";
    });
}

function currentProjectGroup() {
    const groups = [
        window.workExperiencePages,
        window.projectPages,
        window.projectArchivePages
    ];

    return groups.find(function (projects) {
        return Array.isArray(projects) && currentProjectIndex(navigableProjects(projects)) !== -1;
    }) || [];
}

function createProjectNavLink(project, direction) {
    const link = document.createElement("a");
    link.className = "image-btn project-page-nav project-page-nav-" + direction;
    link.href = window.sitePath(project.projectPage);
    link.setAttribute("aria-label", direction === "previous" ? "Previous project: " + project.title : "Next project: " + project.title);
    link.textContent = direction === "previous" ? "<" : ">";
    link.addEventListener("click", function () {
        if (window.slideProjectPageOnNextNavigation) {
            window.slideProjectPageOnNextNavigation(direction);
        }
    });

    return link;
}

function renderProjectPageNav() {
    const projects = navigableProjects(currentProjectGroup());
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
