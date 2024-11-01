document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript geladen");

    document.querySelectorAll('.webdiv, .printdiv, .brandingdiv').forEach((div) => {
        div.addEventListener('mousemove', (e) => {
            const rect = div.getBoundingClientRect();
            div.style.setProperty('--cursor-x', `${e.clientX - rect.left}px`);
            div.style.setProperty('--cursor-y', `${e.clientY - rect.top}px`);
        });
    });
});