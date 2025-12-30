const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    // Basic cursor movement
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Smooth follower movement
    setTimeout(() => {
        follower.style.left = e.clientX - 16 + 'px';
        follower.style.top = e.clientY - 16 + 'px';
    }, 50);
});

// Hover effect for links
const links = document.querySelectorAll('a, .project-card');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        follower.style.transform = 'scale(2)';
        follower.style.backgroundColor = 'rgba(168, 85, 247, 0.1)';
    });
    link.addEventListener('mouseleave', () => {
        follower.style.transform = 'scale(1)';
        follower.style.backgroundColor = 'transparent';
    });
});