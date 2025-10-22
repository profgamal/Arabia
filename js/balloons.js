// دالة لإنشاء البالونات
function createBalloons() {
    console.log('Creating balloons...');
    // إنشاء حاوية للبالونات
    const container = document.createElement('div');
    container.className = 'balloons-container';
    document.body.appendChild(container);

    // عدد البالونات
    const numberOfBalloons = 12;
    
    // إنشاء البالونات
    for (let i = 0; i < numberOfBalloons; i++) {
        const balloon = document.createElement('div');
        balloon.className = `balloon balloon-${(i % 6) + 1}`;
        
        // تحديد موقع عشوائي على الشاشة
        const startX = Math.random() * (window.innerWidth - 100);
        const startY = window.innerHeight + Math.random() * 100;
        
        balloon.style.left = `${startX}px`;
        balloon.style.bottom = `-${startY}px`;
        
        // إضافة حركة صعود البالون
        const duration = 5 + Math.random() * 5; // مدة الحركة من 5 إلى 10 ثواني
        balloon.style.animation = `float ${duration}s ease-in-out infinite, rise ${duration * 2}s linear`;
        
        container.appendChild(balloon);
    }

    // إزالة البالونات بعد 10 ثواني
    setTimeout(() => {
        container.remove();
    }, 10000);
}

// إضافة نمط CSS للحركة الصاعدة
const style = document.createElement('style');
style.textContent = `
    @keyframes rise {
        from {
            transform: translateY(100vh) rotate(0deg);
        }
        to {
            transform: translateY(-100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// تحديث دالة startCelebration لتشمل البالونات
function startCelebration() {
    startFireworks();
    createBalloons();
}