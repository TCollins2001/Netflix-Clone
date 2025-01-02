document.addEventListener("DOMContentLoaded", () => {
    const translateButton = document.querySelector(".translate-button");
    const menuItems = document.querySelectorAll(".menu-item");
    const languageMenu = document.getElementById("language-menu");

    const updateSelection = (selectedItem) => {
        menuItems.forEach((item) => item.classList.remove("selected"));

        selectedItem.classList.add("selected");
    };

    menuItems.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            updateSelection(item);

        });

    });

    translateButton.addEventListener("click", () => {
        languageMenu.style.display = languageMenu.style.display === "block" ? "none" : "block";

    });

    });
