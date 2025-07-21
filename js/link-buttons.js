const buttons = document.querySelectorAll(".link-button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const url = button.dataset.url;
        window.open(url, "_blank");
    });
});