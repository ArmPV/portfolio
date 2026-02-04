/* ========================================
   PORTFOLIO - Armand PLUVINET-VIAENE
   Script principal
   ======================================== */


// ========================================
// ANIMATION AU SCROLL
// Fait apparaître les sections quand on scrolle
// ========================================

// Options pour l'observateur
// threshold: 0.1 = déclenche quand 10% de l'élément est visible
// rootMargin = marge autour de la zone de détection
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// IntersectionObserver = API qui détecte quand un élément entre dans le viewport
// C'est plus performant que d'écouter le scroll en permanence
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // isIntersecting = true si l'élément est visible
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);


// ========================================
// INITIALISATION AU CHARGEMENT
// ========================================

// On attend que la page soit chargée avant d'appliquer les animations
window.addEventListener('load', () => {
    // On sélectionne toutes les sections et on les cache au départ
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)'; // décalé vers le bas
        section.style.transition = 'all 0.6s ease'; // animation fluide
        observer.observe(section); // on observe chaque section
    });
    
    // Petit délai pour afficher les sections déjà visibles au chargement
    setTimeout(() => {
        document.querySelectorAll('section').forEach(section => {
            // getBoundingClientRect() donne la position de l'élément
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }, 100);
});


// ========================================
// EFFET SUR LA NAVIGATION AU SCROLL
// Change l'ombre de la nav quand on scrolle
// ========================================

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    
    // Si on a scrollé de plus de 100px
    if (window.scrollY > 100) {
        nav.style.boxShadow = '0 4px 30px rgba(132, 0, 119, 0.5)';
    } else {
        nav.style.boxShadow = '0 4px 30px rgba(132, 0, 119, 0.3)';
    }
});


// ========================================
// FOOTER - Année automatique
// Met à jour l'année tout seul
// ========================================

// new Date().getFullYear() récupère l'année actuelle (2026, 2027, etc.)
document.getElementById('annee').textContent = new Date().getFullYear();
