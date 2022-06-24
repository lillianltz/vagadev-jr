var header = document.getElementById('.header')
var navigationHeader = document.getElementById('.icone-hamburguer');
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar){
        navigationHeader.style.marginLeft = '334px';
    } else {
        navigationHeader.style.marginLeft = '-334px';
    }
}