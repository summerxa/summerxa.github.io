(function () {
    const projectSlideDirectionKey = "anneProjectSlideDirection";
    const transitionDelay = 150;
    const projectSlideTransitionDelay = 260;

    function getProjectSlideDirection() {
        try {
            const direction = sessionStorage.getItem(projectSlideDirectionKey);

            if (direction === "previous" || direction === "next") {
                return direction;
            }
        } catch (error) {
            return "";
        }

        return "";
    }

    function clearProjectSlideClasses() {
        document.body.classList.remove(
            "project-slide-enter-next",
            "project-slide-enter-previous",
            "project-slide-exit-next",
            "project-slide-exit-previous"
        );
    }

    function applyProjectSlideInOnce() {
        let direction = "";

        try {
            direction = getProjectSlideDirection();
            sessionStorage.removeItem(projectSlideDirectionKey);
        } catch (error) {
            return;
        }

        if (direction) {
            document.body.classList.add("project-slide-enter-" + direction);
        }
    }

    function isInternalPageLink(link) {
        if (link.hash || link.target || link.hasAttribute("download")) {
            return false;
        }

        if (link.protocol !== window.location.protocol) {
            return false;
        }

        if (link.protocol !== "file:" && link.origin !== window.location.origin) {
            return false;
        }

        return link.pathname !== window.location.pathname;
    }

    window.transitionToPage = function (url) {
        const projectSlideDirection = getProjectSlideDirection();

        if (projectSlideDirection) {
            clearProjectSlideClasses();
            document.body.classList.add("project-slide-exit-" + projectSlideDirection);
        } else {
            document.body.classList.add("page-transition-exit");
        }

        window.setTimeout(function () {
            window.location.href = url;
        }, projectSlideDirection ? projectSlideTransitionDelay : transitionDelay);
    };

    document.addEventListener("DOMContentLoaded", function () {
        applyProjectSlideInOnce();

        document.querySelectorAll("a[href]").forEach(function (link) {
            link.addEventListener("click", function (event) {
                if (event.defaultPrevented || !isInternalPageLink(link)) {
                    return;
                }

                event.preventDefault();
                window.transitionToPage(link.href);
            });
        });
    });

    window.slideProjectPageOnNextNavigation = function (direction) {
        if (direction !== "previous" && direction !== "next") {
            return;
        }

        try {
            sessionStorage.setItem(projectSlideDirectionKey, direction);
        } catch (error) {
            return;
        }
    };
})();
