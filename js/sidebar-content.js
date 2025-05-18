function createSidebar(currentPage) {
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar';
    
    const navItems = [
        { path: '../index.html', icon: 'home', title: 'Home' },
        { path: '../coding/coding.html', icon: 'code', title: 'coding' },
        { path: '../imgs/imgs.html', icon: 'image', title: 'imgs' },
        { path: '../mc/mc.html', icon: 'mc', title: 'mc' },
        { path: '../music/music.html', icon: 'music_note', title: 'music' }
    ];
    
    navItems.forEach(item => {
        const link = document.createElement('a');
        link.href = item.path;
        link.className = 'sidebar-link' + (item.title === currentPage ? ' active' : '');
        link.title = item.title;
        
        const icon = document.createElement('span');
        if (item.icon === 'mc') {
            icon.className = 'sidebar-mc-text';
            icon.textContent = 'mc';
        } else {
            icon.className = 'material-symbols-outlined';
            icon.textContent = item.icon;
        }
        
        link.appendChild(icon);
        sidebar.appendChild(link);
    });
    
    document.body.insertBefore(sidebar, document.body.firstChild);
}

function loadSidebar() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    let currentPage = '';
    
    const pageMap = {
        'index.html': 'Home',
        'coding.html': 'coding',
        'imgs.html': 'imgs',
        'mc.html': 'mc',
        'music.html': 'music'
    };
    
    currentPage = pageMap[path] || '';
    createSidebar(currentPage);
}

document.addEventListener('DOMContentLoaded', loadSidebar);
