document.addEventListener('DOMContentLoaded', () => {
  const galleries = document.querySelectorAll('.gallery');
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const closeModal = document.getElementById('closeModal');
  const prevImage = document.getElementById('prevImage');
  const nextImage = document.getElementById('nextImage');

  let currentIndex = 0;
  let currentSection = '';
  let images = [];

  function updateImages() {
    images = Array.from(document.querySelectorAll('.gallery img'));
  }

  function openModal(index, section) {
    updateImages();
    currentIndex = index;
    currentSection = section;
    modalImage.src = images[currentIndex].src;
    modalImage.alt = images[currentIndex].alt;
    modal.classList.remove('hidden');
  }

  function closeModalFunc() {
    modal.classList.add('hidden');
  }

  function navigate(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    modalImage.src = images[currentIndex].src;
    modalImage.alt = images[currentIndex].alt;
  }

  galleries.forEach(gallery => {
    gallery.addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG') {
        const sectionImages = Array.from(gallery.getElementsByTagName('img'));
        const index = images.indexOf(e.target);
        const section = gallery.closest('[data-section]').dataset.section;
        openModal(index, section);
      }
    });
  });

  closeModal.addEventListener('click', closeModalFunc);
  prevImage.addEventListener('click', () => navigate(-1));
  nextImage.addEventListener('click', () => navigate(1));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModalFunc();
    }
  });

  // Inicializa as imagens
  updateImages();
});