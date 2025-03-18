window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
            section.style.transition = 'all 0.8s ease-out';
        }
    });
});

const skills = document.querySelectorAll('.skills li');
skills.forEach((skill, index) => {
    skill.style.animation = `fadeUp 1.5s ease-out ${index * 0.2}s forwards`;
});
