
var navigationHeader = document.getElementById('navigation_header');
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar){
        navigationHeader.style.marginLeft = '334px';
    } else {
        navigationHeader.style.marginLeft = '-100vw';
    }
}