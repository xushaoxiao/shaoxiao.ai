const navigation = document.querySelector('.nav');
function updateNavigation() { navigation.classList.toggle('scrolled', window.scrollY > 32); }
window.addEventListener('scroll', updateNavigation, {passive: true});
updateNavigation();
