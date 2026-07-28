// --- ELEMENTOS DO MENU ---
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const navDrawer = document.getElementById('navDrawer');
const overlay = document.getElementById('overlay');
const drawerLinks = document.querySelectorAll('.drawer-link');
const tabPills = document.querySelectorAll('.tab-pill');

function openMenu() {
  navDrawer.classList.add('active');
  overlay.classList.add('active');
}

function closeMenu() {
  navDrawer.classList.remove('active');
  overlay.classList.remove('active');
}

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

drawerLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

// --- ANIMAÇÃO REVEAL AO ROLAR A PÁGINA ---
const revealElements = document.querySelectorAll('.reveal');

function checkReveal() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 80) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkReveal);
checkReveal(); // Executa ao carregar para exibir seções visíveis

// --- ATUALIZAÇÃO DA ABA ATIVA ---
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 160;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  tabPills.forEach(pill => {
    pill.classList.remove('active');
    if (pill.getAttribute('href') === `#${current}`) {
      pill.classList.add('active');
    }
  });
});

// --- FILTRO DINÂMICO DA CROQUITECA ---
const filterButtons = document.querySelectorAll('.filter-btn');
const croquiCards = document.querySelectorAll('.croqui-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove classe ativa de todos e adiciona no clicado
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    croquiCards.forEach(card => {
      const category = card.getAttribute('data-category');
      
      if (filterValue === 'all' || category === filterValue) {
        card.style.display = 'block';
        setTimeout(() => { card.style.opacity = '1'; }, 50);
      } else {
        card.style.opacity = '0';
        card.style.display = 'none';
      }
    });
  });
});