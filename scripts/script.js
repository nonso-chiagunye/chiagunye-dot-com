'use strict';

import { jobs } from './data/employments.js';
import { projectDetails } from './data/projects.js';
import { certifications } from './data/certs.js';
import { education } from './data/education.js';
import { skills } from './data/skills.js';
import { aboutMe } from './data/about.js';

const btnInquiry = document.querySelector('.botn--inquiry');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCV = document.querySelector('.botn--cv');

const btnHome = document.querySelector('.btn--home');
const homeSection = document.querySelector('#home');

const nav = document.querySelector('.nav');

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

const slides = document.querySelectorAll('.slide');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const certificationText = document.querySelector('.certifications-text');
const educations = document.querySelector('.education');
const listCoreSkills = document.querySelector('.list--core-skills');
const aboutContainer = document.querySelector('.about--container');
const copyrightDate = document.querySelector('.copyright--date');

const navToggler = document.querySelector('.nav__toggle-label');

const closeNavToggler = document.querySelector('.close__nav');

const navSlide = document.getElementById('myNav');

const openNav = function () {
  navSlide.style.height = '100%';
};

const closeNav = function () {
  navSlide.style.height = '0%';
};

navToggler.addEventListener('click', function (e) {
  e.preventDefault();
  openNav();
});

closeNavToggler.addEventListener('click', function (e) {
  e.preventDefault();
  closeNav();
});

document
  .querySelector('.overlay-2-links')
  .addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      // console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
      closeNav();
    }
  });

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnInquiry.addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnCV.addEventListener('click', function () {
  window.location.href =
    'https://nonso-chiagunye.github.io/chiagunye-dot-com/info/cv.pdf';
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.4));

nav.addEventListener('mouseout', handleHover.bind(1));

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  // observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

jobs.forEach((job, i) => {
  const html = `
    
    <div class="testimonial">
      <h2 class="section__description">${job.employmentPeriods}</h2>
      <h3 class="testimonial__header job__role">${job.jobRole}</h3>
      <h3 class="testimonial__header">${job.company}</h3>
  
      <span class="testimonial__text2">${job.jDs.join(
        ` <ul class="testimonial__text2"></ul> `
      )}</span>
  
    </div>
      
  `;

  slides[i].insertAdjacentHTML('afterbegin', html);
});

const slider = function () {
  // const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    }
    curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // const slide = e.target.dataset.slide
      const { slide } = e.target.dataset;

      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();

tabsContent.forEach((t, i) => {
  const html = `
     <p>${projectDetails[i]}</p>
`;
  t.insertAdjacentHTML('afterbegin', html);
});

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  if (!clicked) return;

  // Remove active class
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

certifications.forEach(cert => {
  const html = `
  <div class="align-cert"><div>
  <span>&#9675; </span>${cert}</div></div>
`;

  certificationText.insertAdjacentHTML('beforeend', html);
});

for (const edu of education) {
  const html = `          
  <div class="education-container">
  <div class="education-bullet">&#9672;</div>
  <div class="education-details">
    <div class="school-date">
      <div class="school">${edu.school}</div>
      <div class="date">${edu.year}</div>
    </div>
    <div class="course">${edu.course}</div>
  </div>
</div>
`;

  educations.insertAdjacentHTML('beforeend', html);
}

for (const skill of skills) {
  const html = `<li>${skill}</li>`;
  listCoreSkills.insertAdjacentHTML('beforeend', html);
}

aboutContainer.insertAdjacentHTML(
  'afterbegin',
  `<p class="paragraph--about-me">${aboutMe}</p>`
);

const today = new Date();
copyrightDate.innerHTML = today.getFullYear();
