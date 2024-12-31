document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const burgerMenu = document.getElementById('burgerMenu');
    const navList = document.getElementById('navList');
    const scrollToTop = document.getElementById('scrollToTop');

    function updateMenuVisibility() {
        if (window.innerWidth <= 768) {
            burgerMenu.style.display = 'block';
            navList.style.display = 'none';
        } else {
            burgerMenu.style.display = 'none';
            navList.style.display = 'flex';
        }
    }

    updateMenuVisibility();

    window.addEventListener('resize', updateMenuVisibility);

    burgerMenu.addEventListener('click', function() {
        if (navList.style.display === 'none') {
            navList.style.display = 'flex';
        } else {
            navList.style.display = 'none';
        }
    });

    scrollToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTop.style.display = 'block';
        } else {
            scrollToTop.style.display = 'none';
        }
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// gallery
document.addEventListener('DOMContentLoaded', function () {
    const imgURLArr = [
        'https://upload.wikimedia.org/wikipedia/ru/thumb/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg/640px-%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg',
        'https://upload.wikimedia.org/wikipedia/ru/thumb/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg/640px-%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg',
        'https://upload.wikimedia.org/wikipedia/ru/thumb/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg/640px-%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg',
        'https://upload.wikimedia.org/wikipedia/ru/thumb/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg/640px-%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg',
        'https://upload.wikimedia.org/wikipedia/ru/thumb/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg/640px-%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg'
    ];

  const gallery = document.getElementById('gallery');
    const spinner = document.getElementById('spinner');

    let loadedCount = 0;
    const totalImages = imgURLArr.length;

    spinner.classList.add('active');
    gallery.classList.add('hidden');

    imgURLArr.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.classList.add('hidden');

        img.addEventListener('load', function () {
            loadedCount++;
            img.classList.remove('hidden');
            gallery.appendChild(img);

            if (loadedCount === totalImages) {
                console.log('Всі зображення оброблені');
                spinner.style.display = 'none';
                gallery.style.display = 'flex';
            }
        });

        img.addEventListener('error', function () {
            loadedCount++;
            console.error(`Помилка завантаження зображення: ${url}`);

            if (loadedCount === totalImages) {
                spinner.style.display = 'none';
                gallery.style.display = 'flex';
            }
        });

        img.addEventListener('click', function () {
            openModal(img.src);
        });
    });

    function openModal(src) {
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-image');
        modal.style.display = 'block';
        modalImg.src = src;
    }

    function closeModal() {
        const modal = document.getElementById('image-modal');
        modal.style.display = 'none';
    }

    document.getElementById('close-modal').addEventListener('click', closeModal);
});

