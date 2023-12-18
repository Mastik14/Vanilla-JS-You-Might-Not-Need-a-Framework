window.addEventListener("DOMContentLoaded", () => {
    let nav = document.querySelector("nav");
    nav.innerHTML = `
        <h2>Hello DOM</h2>
        <p>This is HTML within a JavaScript string</p>
    `;
});