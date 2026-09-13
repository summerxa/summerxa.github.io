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

function createProjectNavLink(project, direction, enabled) {
    const link = document.createElement("a");
    link.className = "image-btn project-page-nav project-page-nav-" + direction;
    link.textContent = direction === "previous" ? "<" : ">";

    if (enabled) {
        link.href = window.sitePath(project.projectPage);
        link.setAttribute("aria-label", direction === "previous" ? "Previous project: " + project.title : "Next project: " + project.title);
        link.addEventListener("click", function () {
            if (window.slideProjectPageOnNextNavigation) {
                window.slideProjectPageOnNextNavigation(direction);
            }
        });
    } else {
        link.setAttribute("aria-disabled", "true");
        link.setAttribute("aria-label", direction === "previous" ? "No previous project" : "No next project");
        link.tabIndex = -1;
    }

    return link;
}

function projectNavContainer() {
    const topBar = document.querySelector(".content1.back, .hero-header");

    if (!topBar) {
        return null;
    }

    const navContainer = document.createElement("div");
    navContainer.className = "project-page-nav-group";
    topBar.appendChild(navContainer);

    return navContainer;
}

function renderProjectPageNav() {
    const projects = navigableProjects(currentProjectGroup());
    const index = currentProjectIndex(projects);

    if (index === -1) {
        return;
    }

    const navContainer = projectNavContainer();
    const previousProject = projects[index - 1];
    const nextProject = projects[index + 1];

    if (!navContainer) {
        return;
    }

    if (previousProject) {
        navContainer.appendChild(createProjectNavLink(previousProject, "previous", true));
    } else {
        navContainer.appendChild(createProjectNavLink(null, "previous", false));
    }

    if (nextProject) {
        navContainer.appendChild(createProjectNavLink(nextProject, "next", true));
    } else {
        navContainer.appendChild(createProjectNavLink(null, "next", false));
    }
}

renderProjectPageNav();
