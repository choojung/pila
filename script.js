// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const nav = document.getElementById('nav');

mobileToggle.addEventListener('click', () => {
  nav.classList.toggle('mobile-active');
});

// Close mobile menu when clicking nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 1024) {
      nav.classList.remove('mobile-active');
    }
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = 80;
      const targetPosition = target.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Video play button
const videoPlay = document.getElementById('videoPlay');
if (videoPlay) {
  videoPlay.addEventListener('click', () => {
    alert('영상 재생 기능은 실제 비디오 파일이 필요합니다.');
  });
}

// Consultation Modal
function openConsultation() {
  document.getElementById('consultationModal').classList.add('active');
}

function closeConsultation() {
  document.getElementById('consultationModal').classList.remove('active');
}

function submitConsultation(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const location = document.getElementById('location').value;
  
  console.log('[v0] 상담 신청:', { name, phone, location });
  alert(`상담 신청이 접수되었습니다!\n${name}님, 곧 연락드리겠습니다.`);
  closeConsultation();
  e.target.reset();
}

// Franchise Modal
function openFranchise() {
  document.getElementById('franchiseModal').classList.add('active');
}

function closeFranchise() {
  document.getElementById('franchiseModal').classList.remove('active');
}

function submitFranchise(e) {
  e.preventDefault();
  const name = document.getElementById('fName').value;
  const phone = document.getElementById('fPhone').value;
  const region = document.getElementById('fRegion').value;
  
  console.log('[v0] 가맹 문의:', { name, phone, region });
  alert(`가맹 문의가 접수되었습니다!\n${name}님, 담당자가 연락드리겠습니다.`);
  closeFranchise();
  e.target.reset();
}

// Close modals when clicking outside
document.getElementById('consultationModal').addEventListener('click', (e) => {
  if (e.target.id === 'consultationModal') {
    closeConsultation();
  }
});

document.getElementById('franchiseModal').addEventListener('click', (e) => {
  if (e.target.id === 'franchiseModal') {
    closeFranchise();
  }
});

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeConsultation();
    closeFranchise();
  }
});

// Animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe cards and sections
document.querySelectorAll('.card, .process-card, .review-card, .event-card, .location-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

console.log('[v0] 플로우 필라테스 웹사이트가 로드되었습니다.');
