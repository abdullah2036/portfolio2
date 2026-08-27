/* ============================================================
   PORTFOLIO — main.js (Sci-Fi Redesign)
   Sections:
   01. Translation Engine (EN / AR)
   02. WebGL Particle Morph System (Three.js + GSAP)
   03. Hero Glitch & Typewriter
   04. Scroll Reveal Observer
   05. Scroll Progress Sidebar
   06. Project Card 3D Tilt
   07. Encrypted Text Decode (Contact)
   08. Navigation Logic (Mobile & Scroll)
============================================================ */

/* ─── 01. TRANSLATION ENGINE (EN / AR) ─── */
const translations = {
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    nav_cta: "AVAILABLE",
    hero_eyebrow: "SYSTEM_ONLINE",
    hero_desc: "I engineer modern, high-performance web applications and robust digital architectures. Driven by complex problem-solving, advanced AI tooling, and a relentless pursuit of excellence.",
    hero_btn_work: "VIEW WORK",
    hero_btn_contact: "INITIATE CONTACT",
    hud_status_label: "STATUS",
    hud_status_val: "OPEN TO ROLES",
    hud_base_label: "BASE",
    hud_base_val: "KHOBAR, SA",
    scroll_cue: "SCROLL",
    about_tag: "// IDENTITY_MATRIX",
    about_title_1: "Strategic Mind.",
    about_title_2: "Engineered Solutions.",
    about_p1: 'I am a Full-Stack Developer bridging the gap between <span class="hl">Data Science</span> and <span class="hl">Advanced Web Architecture</span>. I architect scalable systems and craft immersive, interactive web experiences that demand attention and deliver results.',
    about_p2: 'Leveraging <span class="hl">modern AI tooling</span> to multiply output and focusing heavily on performance and security, I don\'t just write code—I build robust, commercial-grade digital infrastructure.',
    card_1_label: "Data Science",
    card_2_label: "Full-Stack Architecture",
    card_3_label: "Multiplied Workflow",
    card_4_label: "Execution Focused",
    services_tag: "// CAPABILITY_MODULES",
    services_title_1: "The Arsenal.",
    services_title_2: "Technical Mastery.",
    services_sub: "A highly adaptable technical stack designed to handle everything from complex backend systems to high-fidelity frontend experiences.",
    svc_1_title: "Advanced Frontend",
    svc_1_desc: "Engineering immersive, high-performance interfaces using React, WebGL, and complex state management.",
    svc_2_title: "Full-Stack Architecture",
    svc_2_desc: "Designing robust APIs and database structures with PHP/MySQL and Node to support scalable applications.",
    svc_3_title: "Data Science & Analysis",
    svc_3_desc: "Extracting critical insights using Python, machine learning models, and complex statistical analysis.",
    svc_4_title: "Security & Red Teaming",
    svc_4_desc: "Applying offensive security principles to stress-test systems and guarantee robust, secure deployments.",
    projects_tag: "// MISSION_LOGS",
    projects_title: "Deployed Projects",
    projects_btn: "VIEW ARCHIVE",
    badge_featured: "FEATURED",
    proj_1_type: "Frontend Architecture",
    proj_1_desc: "A high-fidelity frontend deployment showcasing mastery over React, WebGL, and dynamic UI states. Built for scale with commercial-grade component architecture.",
    badge_academic: "ACADEMIC WORK",
    proj_2_type: "Full-Stack System",
    proj_2_title: "Clinic Management System",
    proj_2_desc: "A complete server-side web application integrating PHP backends with a MySQL database architecture. Demonstrates core full-stack routing and data handling. <em data-i18n=\"proj_2_note\">Academic demonstration case study.</em>",
    proj_2_note: "Academic demonstration case study.",
    heroic_text: 'What can I do?<br><span class="heroic-glow">I make it happen.</span>',
    contact_tag: "// OPEN_CHANNEL",
    contact_title: "LET'S CONNECT.",
    contact_sub: "Whether you need a complex system built from scratch, or an elite frontend experience engineered—reach out.",
    contact_label: "DIRECT CHANNEL",
    toggle_btn: "عربي"
  },
  ar: {
    nav_about: "نبذة",
    nav_skills: "مهارات",
    nav_projects: "مشاريع",
    nav_contact: "تواصل",
    nav_cta: "متاح للعمل",
    hero_eyebrow: "النظام_متصل",
    hero_desc: "أصمم وأبني تطبيقات ويب متقدمة وبنى تحتية رقمية عالية الأداء. مدفوع بشغف حل المشكلات المعقدة، وتوظيف أحدث أدوات الذكاء الاصطناعي، والسعي المستمر نحو التميز التقني.",
    hero_btn_work: "عرض الأعمال",
    hero_btn_contact: "بدء الاتصال",
    hud_status_label: "الحالة",
    hud_status_val: "متاح للتوظيف",
    hud_base_label: "المقر",
    hud_base_val: "الخبر، السعودية",
    scroll_cue: "تمرير",
    about_tag: "// مصفوفة_الهوية",
    about_title_1: "عقل استراتيجي.",
    about_title_2: "حلول هندسية.",
    about_p1: 'بصفتي مطور نظم متكاملة (Full-Stack)، أعمل على سد الفجوة بين <span class="hl">علوم البيانات</span> و <span class="hl">هندسة الويب المتقدمة</span>. أصمم أنظمة قابلة للتوسع وأبني تجارب تفاعلية تلفت الانتباه وتحقق الأهداف.',
    about_p2: 'بالاعتماد على <span class="hl">أدوات الذكاء الاصطناعي الحديثة</span> لرفع الكفاءة، والتركيز العميق على الأداء والأمان السيبراني، أنا لا أكتب شيفرات برمجية فحسب، بل أهندس بنى تحتية رقمية قوية تلبي متطلبات الأعمال.',
    card_1_label: "علوم البيانات",
    card_2_label: "هندسة النظم المتكاملة",
    card_3_label: "سير عمل مضاعف",
    card_4_label: "التركيز على الإنجاز",
    services_tag: "// وحدات_القدرات",
    services_title_1: "الترسانة.",
    services_title_2: "إتقان تقني.",
    services_sub: "مجموعة تقنية احترافية قابلة للتكيف، مصممة للتعامل مع الأنظمة الخلفية المعقدة وتجارب الواجهة الأمامية عالية الدقة.",
    svc_1_title: "هندسة واجهات متقدمة",
    svc_1_desc: "بناء واجهات غامرة وعالية الأداء باستخدام React و WebGL وإدارة الحالة المعقدة.",
    svc_2_title: "هندسة النظم المتكاملة",
    svc_2_desc: "تصميم واجهات برمجة تطبيقات (APIs) قوية وهيكلة قواعد البيانات باستخدام PHP/MySQL و Node لدعم التطبيقات الضخمة.",
    svc_3_title: "علوم وتحليل البيانات",
    svc_3_desc: "استخراج رؤى استراتيجية باستخدام Python ونماذج التعلم الآلي والتحليلات الإحصائية المتقدمة.",
    svc_4_title: "الأمن السيبراني والفريق الأحمر",
    svc_4_desc: "تطبيق مفاهيم الأمن الهجومي لاختبار الأنظمة وضمان بيئات نشر آمنة ومحصنة.",
    projects_tag: "// سجلات_المهام",
    projects_title: "المشاريع المنشورة",
    projects_btn: "عرض الأرشيف",
    badge_featured: "مميز",
    proj_1_type: "هندسة الواجهة الأمامية",
    proj_1_desc: "نشر واجهة أمامية عالية الدقة يبرز التمكن من React و WebGL وإدارة حالات واجهة المستخدم. مصمم للتوسع باستخدام بنية برمجية احترافية.",
    badge_academic: "عمل أكاديمي",
    proj_2_type: "نظام متكامل",
    proj_2_title: "نظام إدارة العيادات",
    proj_2_desc: "تطبيق ويب متكامل يربط واجهة خلفية مبنية بـ PHP مع قاعدة بيانات MySQL. يستعرض التوجيه الأساسي للأنظمة ومعالجة البيانات. <em data-i18n=\"proj_2_note\">دراسة حالة أكاديمية توضيحية.</em>",
    proj_2_note: "دراسة حالة أكاديمية توضيحية.",
    heroic_text: 'ما الذي يمكنني إنجازه؟<br><span class="heroic-glow">أحوّل الرؤى إلى واقع.</span>',
    contact_tag: "// قناة_مفتوحة",
    contact_title: "دعنا نتواصل.",
    contact_sub: "سواء كنت بحاجة إلى نظام معقد مبني من الصفر، أو تجربة واجهة أمامية استثنائية - تواصل معي.",
    contact_label: "قناة مباشرة",
    toggle_btn: "EN"
  }
};

let currentLang = 'en';

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  document.body.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.lang = currentLang;
  
  // Update translation text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });

  // Update button text
  const btn = document.getElementById('langToggle');
  if(btn) btn.textContent = translations[currentLang].toggle_btn;

  // Re-initialize typewriter for correct language roles
  roleIdx = 0;
  charIdx = 0;
}

const langToggleBtn = document.getElementById('langToggle');
if(langToggleBtn) langToggleBtn.addEventListener('click', toggleLanguage);


/* ─── 02. WEBGL PARTICLE MORPH SYSTEM ─── */
const initWebGLParticles = () => {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas || !window.THREE || !window.gsap) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Particle parameters
  const particleCount = 4000;
  
  // Shapes data
  const shapes = {
    sphere: new Float32Array(particleCount * 3),
    cube: new Float32Array(particleCount * 3),
    torus: new Float32Array(particleCount * 3),
    random: new Float32Array(particleCount * 3),
    burst: new Float32Array(particleCount * 3) // For Heroic section
  };

  // Generate Shapes
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;

    // 1. Sphere (Hero)
    const phi = Math.acos(-1 + (2 * i) / particleCount);
    const theta = Math.sqrt(particleCount * Math.PI) * phi;
    const r = 2.5 + Math.random() * 0.2; 
    shapes.sphere[i3] = r * Math.cos(theta) * Math.sin(phi);
    shapes.sphere[i3 + 1] = r * Math.sin(theta) * Math.sin(phi);
    shapes.sphere[i3 + 2] = r * Math.cos(phi);

    // 2. Cube (About)
    shapes.cube[i3] = (Math.random() - 0.5) * 4.5;
    shapes.cube[i3 + 1] = (Math.random() - 0.5) * 4.5;
    shapes.cube[i3 + 2] = (Math.random() - 0.5) * 4.5;

    // 3. Torus (Services)
    const u = Math.random() * Math.PI * 2;
    const v = Math.random() * Math.PI * 2;
    const R = 2.5;
    const rTorus = 0.8 + Math.random() * 0.2;
    shapes.torus[i3] = (R + rTorus * Math.cos(v)) * Math.cos(u);
    shapes.torus[i3 + 1] = rTorus * Math.sin(v);
    shapes.torus[i3 + 2] = (R + rTorus * Math.cos(v)) * Math.sin(u);

    // 4. Random / Asteroid Field (Projects)
    shapes.random[i3] = (Math.random() - 0.5) * 15;
    shapes.random[i3 + 1] = (Math.random() - 0.5) * 15;
    shapes.random[i3 + 2] = (Math.random() - 0.5) * 15;

    // 5. Burst / Massive Ring (Heroic)
    const angle = Math.random() * Math.PI * 2;
    const radius = 6 + Math.random() * 2;
    shapes.burst[i3] = Math.cos(angle) * radius;
    shapes.burst[i3 + 1] = (Math.random() - 0.5) * 2; // Flat ring
    shapes.burst[i3 + 2] = Math.sin(angle) * radius;
  }

  const geometry = new THREE.BufferGeometry();
  
  const currentPositions = new Float32Array(shapes.sphere);
  geometry.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));

  // Expanded Shader Material for glowing aurora colors (Teal, Mint, Purple, Blue)
  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color1: { value: new THREE.Color('#4E9A8D') }, // Teal
      color2: { value: new THREE.Color('#00B4D8') }, // Electric Blue
      color3: { value: new THREE.Color('#7B2CBF') }  // Purple
    },
    vertexShader: `
      uniform float time;
      varying vec3 vPosition;
      void main() {
        vPosition = position;
        vec3 pos = position;
        pos.y += sin(time + pos.x) * 0.1;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = (12.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
      uniform vec3 color3;
      varying vec3 vPosition;
      void main() {
        vec2 xy = gl_PointCoord.xy - vec2(0.5);
        float ll = length(xy);
        if(ll > 0.5) discard;
        
        // Multi-color blend based on position
        float mixVal = (vPosition.y + 3.0) / 6.0;
        vec3 col = mix(color1, color2, smoothstep(0.0, 0.5, mixVal));
        col = mix(col, color3, smoothstep(0.5, 1.0, mixVal));
        
        gl_FragColor = vec4(col, (0.5 - ll) * 2.0);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  const setCameraPos = () => {
    // If we are looking at the heroic section, camera is centered
    // This is handled by ScrollTrigger, but default is hero
    if (window.innerWidth > 1024) {
      camera.position.z = 6;
      camera.position.x = 2; // Shifted right
    } else {
      camera.position.z = 8;
      camera.position.x = 0; // Centered
    }
  };
  setCameraPos();

  const clock = new THREE.Clock();
  let raf;
  const animate = () => {
    const time = clock.getElapsedTime();
    material.uniforms.time.value = time;
    
    particles.rotation.y = time * 0.1;
    particles.rotation.z = time * 0.05;

    geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
    raf = requestAnimationFrame(animate);
  };
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    setCameraPos();
  });

  const morphTo = (targetShapeArray, camX = null, camZ = null) => {
    const currentAttr = geometry.attributes.position.array;
    gsap.to(currentAttr, {
      endArray: targetShapeArray,
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: () => {
        geometry.attributes.position.needsUpdate = true;
      }
    });

    if (camX !== null && window.innerWidth > 1024) {
      gsap.to(camera.position, { x: camX, z: camZ, duration: 1.5, ease: "power2.inOut" });
    }
  };

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: "#hero",
    start: "top center",
    onEnter: () => morphTo(shapes.sphere, 2, 6),
    onEnterBack: () => morphTo(shapes.sphere, 2, 6)
  });

  ScrollTrigger.create({
    trigger: "#about",
    start: "top center",
    onEnter: () => morphTo(shapes.cube, 2, 6),
    onEnterBack: () => morphTo(shapes.cube, 2, 6)
  });

  ScrollTrigger.create({
    trigger: "#services",
    start: "top center",
    onEnter: () => morphTo(shapes.torus, 2, 6),
    onEnterBack: () => morphTo(shapes.torus, 2, 6)
  });

  ScrollTrigger.create({
    trigger: "#projects",
    start: "top center",
    onEnter: () => morphTo(shapes.random, 0, 8), // Center for projects
    onEnterBack: () => morphTo(shapes.random, 0, 8)
  });

  ScrollTrigger.create({
    trigger: "#heroic",
    start: "top center",
    onEnter: () => morphTo(shapes.burst, 0, 6), // Center for heroic burst
    onEnterBack: () => morphTo(shapes.burst, 0, 6)
  });
};

window.addEventListener('load', initWebGLParticles);


/* ─── 03. HERO GLITCH & TYPEWRITER ─── */
const heroName = document.querySelector('.hero-name');
setTimeout(() => {
  if (heroName) {
    heroName.classList.add('glitch');
    setTimeout(() => heroName.classList.remove('glitch'), 800); 
  }
}, 500);

setInterval(() => {
  if (Math.random() > 0.7 && heroName) {
    heroName.classList.add('glitch');
    setTimeout(() => heroName.classList.remove('glitch'), 200);
  }
}, 4000);

const typeTarget = document.getElementById('heroType');
let roleIdx = 0;
let charIdx = 0;
let isDeleting = false;

function typeWriter() {
  if (!typeTarget) return;
  // Get roles based on language
  const rolesEn = ['FULL-STACK DEVELOPER', 'DATA SCIENTIST', 'SECURITY RESEARCHER'];
  const rolesAr = ['مطور النظم المتكاملة', 'مهندس بيانات', 'باحث أمني'];
  const currentRoles = currentLang === 'ar' ? rolesAr : rolesEn;
  const currentRole = currentRoles[roleIdx];
  
  if (!currentRole) return; // safety check

  if (isDeleting) {
    typeTarget.textContent = currentRole.substring(0, charIdx - 1);
    charIdx--;
  } else {
    typeTarget.textContent = currentRole.substring(0, charIdx + 1);
    charIdx++;
  }

  let typeSpeed = isDeleting ? 30 : 70;

  if (!isDeleting && charIdx === currentRole.length) {
    typeSpeed = 2000; 
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    roleIdx = (roleIdx + 1) % currentRoles.length;
    typeSpeed = 500; 
  }

  setTimeout(typeWriter, typeSpeed);
}
setTimeout(typeWriter, 1000);


/* ─── 04. SCROLL REVEAL OBSERVER ─── */
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

reveals.forEach(el => revealObserver.observe(el));


/* ─── 05. SCROLL PROGRESS SIDEBAR ─── */
const spFill = document.getElementById('spFill');
const spLabels = document.querySelectorAll('.sp-labels span');
const sections = document.querySelectorAll('section:not(#heroic)'); // exclude heroic from sidebar tracking

window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  if(spFill) spFill.style.height = scrolled + '%';

  let current = '';
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 200;
    if (winScroll >= secTop) {
      current = sec.getAttribute('id');
    }
  });

  spLabels.forEach(label => {
    label.classList.remove('active');
    if (label.getAttribute('data-section') === current) {
      label.classList.add('active');
    }
  });
});


/* ─── 06. PROJECT CARD 3D TILT ─── */
const tiltCards = document.querySelectorAll('[data-tilt]');

tiltCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Invert rotation on RTL for X axis
    const rotateX = ((y - centerY) / centerY) * -10; 
    const rotateY = currentLang === 'ar' ? ((x - centerX) / centerX) * -10 : ((x - centerX) / centerX) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  });
});


/* ─── 07. ENCRYPTED TEXT DECODE (CONTACT) ─── */
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$*&%';
const emailEl = document.getElementById('contactEmail');
let decoded = false;
let originalEmail = '';
if(emailEl) originalEmail = emailEl.textContent.trim();

const decodeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !decoded && emailEl) {
      decoded = true;
      let iterations = 0;
      
      const interval = setInterval(() => {
        emailEl.textContent = originalEmail.split('').map((letter, index) => {
          if (index < iterations) return originalEmail[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('');
        
        if (iterations >= originalEmail.length) {
          clearInterval(interval);
        }
        iterations += 1/2; 
      }, 30);
    }
  });
}, { threshold: 0.5 });

if(emailEl) {
  decodeObserver.observe(document.querySelector('.contact-transmission'));
  emailEl.textContent = originalEmail.split('').map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
}


/* ─── 08. NAVIGATION LOGIC ─── */
const nav = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    if(nav) nav.classList.add('scrolled');
  } else {
    if(nav) nav.classList.remove('scrolled');
  }
});

function toggleMenu(btn) {
  btn.classList.toggle('open');
  const links = document.getElementById('navLinks');
  const cta = document.getElementById('navCta');
  const isOpen = btn.classList.contains('open');

  if (isOpen) {
    links.style.cssText = `
      display: flex; flex-direction: column; gap: 0;
      position: absolute; top: 70px; left: 0; right: 0;
      background: rgba(6, 13, 20, 0.95); backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
      padding: 20px 40px; z-index: 99;
    `;
    links.querySelectorAll('a').forEach(a => {
      a.style.cssText = `display: block; padding: 15px 0; border-bottom: 1px solid rgba(78, 154, 141, 0.1);`;
    });
    cta.style.display = 'inline-flex';
    cta.style.margin = '20px 40px';
  } else {
    links.style.cssText = '';
    links.querySelectorAll('a').forEach(a => a.style.cssText = '');
    cta.style.display = '';
  }

  const bars = btn.children;
  bars[0].style.transform = isOpen ? 'rotate(45deg) translate(6px, 5px)'  : '';
  bars[1].style.opacity   = isOpen ? '0'                                   : '1';
  bars[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -4px)' : '';
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const hamburger = document.getElementById('hamburger');
    if (hamburger.classList.contains('open')) toggleMenu(hamburger);
  });
});
