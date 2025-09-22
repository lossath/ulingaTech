document.addEventListener('DOMContentLoaded', () => {
    const faqPerguntas = document.querySelectorAll('.faq-pergunta');

    faqPerguntas.forEach(pergunta => {
        pergunta.addEventListener('click', () => {
            const resposta = pergunta.nextElementSibling;
            
            // Alterna a classe 'show' na resposta
            resposta.classList.toggle('show');
            
            // Alterna a classe 'active' na pergunta para mudar o ícone
            pergunta.classList.toggle('active');
        });
    });

     // Carrossel da Seção Hero
    const carouselImages = document.querySelectorAll('.hero-carousel .carousel-img');
    let currentImageIndex = 0;

    function showNextImage() {
        carouselImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        carouselImages[currentImageIndex].classList.add('active');
    }

    // Altera a imagem a cada 5 segundos (5000ms)
    setInterval(showNextImage, 5000); 
});