// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le bouton par son ID
    const button = document.getElementById('actionButton');
    
    // Ajouter un événement "click" au bouton
    button.addEventListener('click', function() {
        alert('Le bouton a été cliqué !');
    });
});
