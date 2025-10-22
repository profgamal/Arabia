// إضافة صوت الألعاب النارية
function playFireworkSound() {
    const sounds = [
        'https://www.soundjay.com/misc/sounds/firework-explosion-1.mp3',
        'https://www.soundjay.com/misc/sounds/firework-explosion-2.mp3',
        'https://www.soundjay.com/misc/sounds/firework-explosion-3.mp3'
    ];
    const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
    audio.volume = 0.4;
    audio.play().catch(e => console.log('Could not play audio'));
}

function createFirework(x, y) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;
    document.body.appendChild(firework);

    // تشغيل الصوت
    playFireworkSound();

    // إنشاء الجزيئات مع ألوان أكثر
    const colors = ['#ff0', '#f0f', '#0ff', '#fff', '#ffd700', '#ff1493', '#00ff00', '#4169e1', '#ff4500'];
    const particles = 50; // زيادة عدد الجزيئات
    const spread = 360;

    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        const angle = (i * spread) / particles;
        const velocity = 50 + Math.random() * 50;
        const xDistance = Math.cos(angle * Math.PI / 180) * velocity;
        const yDistance = Math.sin(angle * Math.PI / 180) * velocity;
        
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.setProperty('--x', `${xDistance}px`);
        particle.style.setProperty('--y', `${yDistance}px`);
        
        firework.appendChild(particle);
    }

    // إزالة الألعاب النارية بعد انتهاء التأثير
    setTimeout(() => {
        firework.remove();
    }, 1000);
}

function startFireworks() {
    // إنشاء خلفية الاحتفال
    const bg = document.createElement('div');
    bg.className = 'celebration-bg';
    document.body.appendChild(bg);
    
    // إضافة البالونات
    createBalloons();

    // إطلاق الألعاب النارية بشكل عشوائي مع المزيد من التأثيرات
    let count = 0;
    const maxFireworks = 25; // زيادة عدد الألعاب النارية
    const interval = setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight / 2);
        createFirework(x, y);
        count++;

        if (count >= maxFireworks) {
            clearInterval(interval);
            setTimeout(() => {
                bg.remove();
            }, 2000);
        }
    }, 300);
}