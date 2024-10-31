console.log("main.js!!");
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 一度表示された要素は監視を解除
            }
        });
    }, { threshold: 0.1 }); // 表示領域に10%入ったら表示

    fadeElements.forEach(element => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", function () {
    // フェードインさせたい要素を取得
    const fadeElements = document.querySelectorAll('.fade-in');

    // スクロール時のイベントリスナーを追加
    window.addEventListener('scroll', function () {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add('show');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // フェードイン・アウトさせたい要素を取得
    const fadeElements = document.querySelectorAll('.fade-in-out');

    // スクロール時のイベントリスナーを追加
    window.addEventListener('scroll', function () {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // 要素が画面内に入るとフェードイン
            if (rect.top < windowHeight - 100 && rect.bottom > 100) {
                element.classList.add('show');
            } else {
                // 要素が画面外に出るとフェードアウト
                element.classList.remove('show');
            }
        });
    });
});

document.querySelectorAll('.icon').forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.5}s`; // アイコンごとに遅延を追加
});

