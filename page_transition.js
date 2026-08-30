(function () {
    const previousBackgroundKey = "annePreviousBackground";
    const projectSlideDirectionKey = "anneProjectSlideDirection";
    const transitionDelay = 150;
    const projectSlideTransitionDelay = 260;

    function getPageBackground() {
        const style = window.getComputedStyle(document.documentElement);

        return {
            image: style.backgroundImage,
            color: style.backgroundColor,
            position: style.backgroundPosition,
            size: style.backgroundSize,
            repeat: style.backgroundRepeat,
            attachment: style.backgroundAttachment
        };
    }

    function applyBackground(element, background) {
        element.style.backgroundImage = background.image;
        element.style.backgroundColor = background.color;
        element.style.backgroundPosition = background.position;
        element.style.backgroundSize = background.size;
        element.style.backgroundRepeat = background.repeat;
        element.style.backgroundAttachment = background.attachment;
    }

    function saveCurrentBackground() {
        try {
            sessionStorage.setItem(previousBackgroundKey, JSON.stringify(getPageBackground()));
        } catch (error) {
            return;
        }
    }

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

    function showPreviousBackground() {
        let previousBackground;

        try {
            previousBackground = sessionStorage.getItem(previousBackgroundKey);
            sessionStorage.removeItem(previousBackgroundKey);
        } catch (error) {
            return;
        }

        if (!previousBackground) {
            return;
        }

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const overlay = document.createElement("div");
        overlay.className = "bg-transition-overlay";

        try {
            applyBackground(overlay, JSON.parse(previousBackground));
        } catch (error) {
            return;
        }

        document.body.prepend(overlay);

        overlay.addEventListener("animationend", function () {
            overlay.remove();
        });
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
        saveCurrentBackground();
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
        showPreviousBackground();

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

    window.addEventListener("pagehide", saveCurrentBackground);
})();
