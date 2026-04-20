// Blog pages — dark/light mode toggle (mirrors portfolio's switchDarkLightMode)
document.documentElement.style.setProperty('--background-color', '#fafafa');

function switchDarkLightMode() {
    let icon = document.querySelector("#switch-container img");
    if (!icon) return;

    icon.onclick = () => {
        let darkColor        = "#111216";
        let darkTextColor    = "#999";
        let darkTitleColor   = "#eee";
        let darkHoverColor   = "#ddd";
        let darkAccentColor  = "#222";

        let color = getComputedStyle(document.documentElement)
                        .getPropertyValue("--background-color").trim();

        if (color === "#fafafa") {
            // → dark mode
            icon.setAttribute("src", "../images/sun.svg");
            document.documentElement.style.setProperty('--background-color',   darkColor);
            document.documentElement.style.setProperty('--text-color',         darkTextColor);
            document.documentElement.style.setProperty('--text-title-color',   darkTitleColor);
            document.documentElement.style.setProperty('--text-hover-color',   darkHoverColor);
            document.documentElement.style.setProperty('--light-accent-color', darkAccentColor);

            icon.onmouseover = () => icon.setAttribute("src", "../images/sun-filled.svg");
            icon.onmouseout  = () => icon.setAttribute("src", "../images/sun.svg");
        } else {
            // → light mode
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

    // default hover (light mode)
    icon.onmouseover = () => icon.setAttribute("src", "../images/moon-full.svg");
    icon.onmouseout  = () => icon.setAttribute("src", "../images/moon.svg");
}

switchDarkLightMode();
