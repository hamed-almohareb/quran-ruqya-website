// كود الجافاسكريبت الرئيسي
document.addEventListener('DOMContentLoaded', function() {
    // تأثيرات الظهور للمقالات
    const sections = document.querySelectorAll('.content-section');
    
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = `all 0.6s ease ${index * 0.2}s`;
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100);
    });

    // إدارة المشغلات الصوتية
    const audioPlayers = document.querySelectorAll('audio');
    audioPlayers.forEach(player => {
        player.addEventListener('play', function() {
            // إيقاف باقي المشغلات
            audioPlayers.forEach(p => {
                if (p !== player) p.pause();
            });
        });
    });

    // البحث
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            // كود البحث سيتم إضافته لاحقاً
        });
    }
});

// وظائف مساعدة
function shareArticle(platform) {
    // مشاركة المقال
}

function printArticle() {
    window.print();
}