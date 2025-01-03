document.addEventListener("DOMContentLoaded", () => {
    const translateButton = document.querySelector(".translate-button");
    const locationButton = document.querySelector(".location-button");
    const typeButton = document.querySelector(".type-button");
    const menuItems = document.querySelectorAll(".menu-item");
    const languageMenu = document.getElementById("language-menu");
    const locationMenu = document.getElementById("location-menu");
    const typeMenu = document.getElementById("type-menu");

    const toggleMenu = (menu) => {
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block"
        }
    };

    const updateButtonText = (button, text) => {
        const arrow = button.querySelector(".down-arrow-icon");
        button.textContent = text;

        if (arrow) {
            button.appendChild(arrow)
        }
    };

    const updateSelection = (selectedItem) => {
        menuItems.forEach((item) => item.classList.remove("selected"));

        selectedItem.classList.add("selected");
    };

    menuItems.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            updateSelection(item);
            const parentMenu = item.closest(".dropdown-menu");
            const selectedText = item.textContent.replace("✔", "").trim();

            parentMenu.querySelectorAll(".menu-item").forEach((menuItem) => {
                const checkmark = menuItem.querySelector(".checkmark");
                if (checkmark) checkmark.style.visibility = "hidden";
            });

            const checkmark = item.querySelector(".checkmark");
            if (checkmark) checkmark.style.visibility = "visible";
            

            if (parentMenu === languageMenu) {
                updateButtonText(translateButton, selectedText);
            } else if (parentMenu === locationMenu) {
                updateButtonText(locationButton, selectedText);
            } else if (parentMenu === typeMenu) {
                updateButtonText(typeButton, selectedText);
            }

            parentMenu.style.display = "none";
        });

    });

    translateButton.addEventListener("click", () => {
        toggleMenu(languageMenu);
        
        if(locationMenu.style.display === "block") {
            locationMenu.style.display = "none";
        }

        if(typeMenu.style.display === "block") {
            typeMenu.style.display = "none";
        }

        });


        if (locationButton) {
            locationButton.addEventListener("click", () => {
            toggleMenu(locationMenu);

            if(languageMenu.style.display === "block") {
                languageMenu.style.display = "none";
            }

            if(typeMenu.style.display === "block") {
                typeMenu.style.display = "none";
            }

        });

    }

        if (typeButton) {
            typeButton.addEventListener("click", () => {
            toggleMenu(typeMenu);
            
            
        if(languageMenu.style.display === "block") {
            languageMenu.style.display = "none";
        }

        if(locationMenu.style.display === "block") {
            locationMenu.style.display = "none";
        }

    });

    }

});
