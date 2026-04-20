// Blog pages — dark/light mode + fixed header layout
document.documentElement.style.setProperty('--background-color', '#fafafa');

/* ── Dark / light mode ─────────────────────────────────────────── */
function switchDarkLightMode() {
    let icon = document.querySelector("#switch-container img");
    if (!icon) return;

    icon.onclick = () => {
        let color = getComputedStyle(document.documentElement)
                        .getPropertyValue("--background-color").trim();

        if (color === "#fafafa") {
            icon.setAttribute("src", "../images/sun.svg");
            document.documentElement.style.setProperty('--background-color',   "#111216");
            document.documentElement.style.setProperty('--text-color',         "#999");
            document.documentElement.style.setProperty('--text-title-color',   "#eee");
            document.documentElement.style.setProperty('--text-hover-color',   "#ddd");
            document.documentElement.style.setProperty('--light-accent-color', "#222");
            icon.onmouseover = () => icon.setAttribute("src", "../images/sun-filled.svg");
            icon.onmouseout  = () => icon.setAttribute("src", "../images/sun.svg");
        } else {
            icon.setAttribute("src", "../images/moon.svg");
            document.documentElement.style.setProperty('--background-color',   '#fafafa');
            document.documentElement.style.setProperty('--text-color',         '#111');
            document.documentElement.style.setProperty('--text-hover-color',   '#000');
            document.documentElement.style.setProperty('--text-title-color',   '#111');
            document.documentElement.style.setProperty('--light-accent-color', '#ccc');
            icon.onmouseover = () => icon.setAttribute("src", "../images/moon-full.svg");
            icon.onmouseout  = () => icon.setAttribute("src", "../images/moon.svg");
        }
    };

    icon.onmouseover = () => icon.setAttribute("src", "../images/moon-full.svg");
    icon.onmouseout  = () => icon.setAttribute("src", "../images/moon.svg");
}

/* ── Fixed header layout ───────────────────────────────────────── */
// Positions the nav bar directly below the name bar and offsets content
function fixBlogHeader() {
    const nameBar = document.querySelector('.blog-name-bar');
    const navBar  = document.querySelector('.blog-nav-bar');
    const content = document.querySelector('.blog-content');
    if (!nameBar || !navBar || !content) return;

    const nameH = nameBar.offsetHeight;
    navBar.style.top = nameH + 'px';

    const totalH = nameH + navBar.offsetHeight;
    content.style.paddingTop = (totalH + 24) + 'px';
}

switchDarkLightMode();
window.addEventListener('load',   fixBlogHeader);
window.addEventListener('resize', fixBlogHeader);
