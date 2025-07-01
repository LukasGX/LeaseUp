function request(offer) {
    window.location.href = `request.html?offer=${encodeURIComponent(offer)}`;
}
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}