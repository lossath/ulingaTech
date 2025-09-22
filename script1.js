// --- Funcionalidade do Menu Sanduíche ---
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
});

// --- Funcionalidade dos Modais de Login e Cadastro ---

// Seleciona os botões que abrem os modais
const openCadastroBtn = document.getElementById('open-cadastro-btn');
const openLoginBtn = document.getElementById('open-login-btn');

// Seleciona os containers dos modais
const cadastroModal = document.getElementById('cadastro-modal');
const loginModal = document.getElementById('login-modal');

// Seleciona os botões de fechar
const closeBtns = document.querySelectorAll('.close-btn');

// Seleciona os links que alternam entre os modais
const switchToLoginLink = document.getElementById('open-login-modal');
const switchToCadastroLink = document.getElementById('open-cadastro-modal');

// Adiciona evento para abrir o modal de cadastro
if (openCadastroBtn) {
    openCadastroBtn.addEventListener('click', (event) => {
        event.preventDefault();
        cadastroModal.classList.add('show-modal');
    });
}

// Adiciona evento para abrir o modal de login
if (openLoginBtn) {
    openLoginBtn.addEventListener('click', (event) => {
        event.preventDefault();
        loginModal.classList.add('show-modal');
    });
}

// Adiciona evento para fechar os modais
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        cadastroModal.classList.remove('show-modal');
        loginModal.classList.remove('show-modal');
    });
});

// Lógica para alternar entre os modais
if (switchToLoginLink) {
    switchToLoginLink.addEventListener('click', (event) => {
        event.preventDefault();
        cadastroModal.classList.remove('show-modal');
        loginModal.classList.add('show-modal');
    });
}

if (switchToCadastroLink) {
    switchToCadastroLink.addEventListener('click', (event) => {
        event.preventDefault();
        loginModal.classList.remove('show-modal');
        cadastroModal.classList.add('show-modal');
    });
}

// Fechar modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target == cadastroModal) {
        cadastroModal.classList.remove('show-modal');
    }
    if (event.target == loginModal) {
        loginModal.classList.remove('show-modal');
    }
});

// --- Funcionalidade do Carrossel de Depoimentos ---

// Seleciona o container do carrossel e os botões
const testimonialsTrack = document.querySelector('.testimonials-carousel-track');
const prevBtnTestimonials = document.querySelector('.prev-btn-testimonials');
const nextBtnTestimonials = document.querySelector('.next-btn-testimonials');
const testimonialCards = document.querySelectorAll('.testimonial-card');

const testimonialCardWidth = testimonialCards[0].offsetWidth + 20; // Largura do card + a margem
let currentTestimonialIndex = 0;

// Atualiza a posição do carrossel
function updateTestimonialsCarousel() {
    testimonialsTrack.style.transform = 'translateX(' + (-currentTestimonialIndex * testimonialCardWidth) + 'px)';
}

// Evento de clique para o botão "Próximo"
nextBtnTestimonials.addEventListener('click', () => {
    // Se o card atual for o último, volta para o primeiro
    if (currentTestimonialIndex >= testimonialCards.length - 1) {
        currentTestimonialIndex = 0;
    } else {
        currentTestimonialIndex++;
    }
    updateTestimonialsCarousel();
});

// Evento de clique para o botão "Anterior"
prevBtnTestimonials.addEventListener('click', () => {
    // Se o card atual for o primeiro, volta para o último
    if (currentTestimonialIndex <= 0) {
        currentTestimonialIndex = testimonialCards.length - 1;
    } else {
        currentTestimonialIndex--;
    }
    updateTestimonialsCarousel();
});