async function sidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarPossibilities = ['survey', 'feedback', 'newsletter', 'contact'];
    const randomSidebar = sidebarPossibilities[Math.floor(Math.random() * sidebarPossibilities.length)];

    const response = await fetch(`sidebar/${randomSidebar}.html`);
    sidebar.innerHTML = await response.text();
}
sidebar();