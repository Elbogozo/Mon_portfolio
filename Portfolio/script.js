const cookieBanner = document.getElementById("cookie-banner");
const acceptButton = document.getElementById("accept-cookies");

// Vérifier si l'utilisateur a déjà accepté les cookies
if (!localStorage.getItem("cookies-accepted")) {
    cookieBanner.classList.add("show");
}

// Ajouter un événement au bouton pour accepter les cookies
acceptButton.addEventListener("click", function() {
    // Cacher la bannière et enregistrer l'acceptation
    cookieBanner.classList.remove("show");
    localStorage.setItem("cookies-accepted", "true");
});