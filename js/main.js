/**
 * main.js — Bhumi Associates
 * Plain vanilla JavaScript. No framework, no build step.
 *
 * Responsibilities:
 *   1. Sticky nav — transparent → dark background on scroll
 *   2. Active section highlighting via IntersectionObserver
 *   3. Smooth-scroll anchor links
 *   4. Mobile hamburger menu toggle
 *   5. Section reveal animation (Apollo cbp-so-scroller pattern)
 *   6. Body scroll lock when mobile menu is open
 *   7. Escape key closes mobile menu
 */

(function () {
  'use strict';

  /* ====================================================
     1. ELEMENT REFERENCES
     ==================================================== */

  var siteHeader   = document.getElementById('site-header');
  var nav          = document.getElementById('site-nav');
  var hamburger    = document.getElementById('hamburger-btn');
  var mobileMenu   = document.getElementById('mobile-menu');
  var desktopMenu  = document.getElementById('desktop-menu');
  var backToTopBtn = document.getElementById('back-to-top');

  /* ====================================================
     2. STICKY NAV, TOP BAR & BACK TO TOP ON SCROLL
     ==================================================== */

  function onScroll() {
    var scrollY = window.scrollY || window.pageYOffset || 0;
    var isScrolled = scrollY > 40;
    if (siteHeader) {
      if (isScrolled) {
        siteHeader.classList.add('site-header--scrolled');
      } else {
        siteHeader.classList.remove('site-header--scrolled');
      }
    }
    if (nav) {
      if (isScrolled) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    }
    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load in case page is already scrolled

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
      var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        window.scrollTo(0, 0);
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  }

  /* ====================================================
     3. ACTIVE SECTION HIGHLIGHT via IntersectionObserver
        (Apollo's .current class pattern)
     ==================================================== */

  var sectionIds = ['home', 'about', 'services', 'gallery', 'insights', 'contact'];

  function setActiveNav(id) {
    // Desktop menu
    if (desktopMenu) {
      desktopMenu.querySelectorAll('li').forEach(function (li) {
        var a = li.querySelector('a');
        if (!a) return;
        var href = a.getAttribute('href');
        if (href === '#' + id) {
          li.classList.add('is-active');
          a.setAttribute('aria-current', 'true');
        } else {
          li.classList.remove('is-active');
          a.removeAttribute('aria-current');
        }
      });
    }
  }

  // Set initial active
  setActiveNav('home');

  if ('IntersectionObserver' in window) {
    var sectionObservers = [];

    sectionIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;

      var obs = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              setActiveNav(id);
            }
          });
        },
        { threshold: 0.35 }
      );

      obs.observe(el);
      sectionObservers.push(obs);
    });
  }

  /* ====================================================
     4. SMOOTH-SCROLL ANCHOR LINKS
        All [href^="#"] links — including nav + mobile menu
     ==================================================== */

  function smoothScrollTo(targetId) {
    var target = document.getElementById(targetId);
    if (!target) return;

    var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Offset by nav height so section isn't hidden behind sticky nav
    var navHeight = nav ? nav.offsetHeight : 0;
    var top = target.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({
      top: top,
      behavior: prefersReduced ? 'auto' : 'smooth'
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (!href || href === '#') return;
      var targetId = href.slice(1);
      var target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      closeMobileMenu();
      smoothScrollTo(targetId);
    });
  });

  /* ====================================================
     5. MOBILE MENU TOGGLE
     ==================================================== */

  var menuOpen = false;

  function openMobileMenu() {
    menuOpen = true;
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close menu');
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Make mobile links focusable
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.removeAttribute('tabindex');
    });
  }

  function closeMobileMenu() {
    menuOpen = false;
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open menu');
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Remove mobile links from tab order
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.setAttribute('tabindex', '-1');
    });
  }

  // Initialise mobile links as non-focusable
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.setAttribute('tabindex', '-1');
    });
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      if (menuOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menuOpen) {
      closeMobileMenu();
      if (hamburger) hamburger.focus();
    }
  });

  /* ====================================================
     6. HERO SLIDER (Apollo Slider 1 Pattern)
     ==================================================== */

  function initHeroSlider() {
    var hero = document.getElementById('home');
    if (!hero) return;

    var slides = hero.querySelectorAll('.hero__slide');
    var prevBtn = document.getElementById('arrow_left');
    var nextBtn = document.getElementById('arrow_right');
    var counterCurrent = document.getElementById('hero-current-index');
    var dots = hero.querySelectorAll('.hero__dot');

    if (!slides.length) return;

    var current = 0;
    var total = slides.length;
    var autoplayTimer = null;
    var autoplayInterval = 6000;
    var reducedMotionQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    var prefersReducedMotion = reducedMotionQuery ? reducedMotionQuery.matches : false;

    if (reducedMotionQuery && reducedMotionQuery.addEventListener) {
      reducedMotionQuery.addEventListener('change', function (e) {
        prefersReducedMotion = e.matches;
        if (prefersReducedMotion) {
          stopAutoplay();
        } else {
          startAutoplay();
        }
      });
    }

    function formatNumber(num) {
      return num < 10 ? '0' + num : '' + num;
    }

    function goToSlide(index) {
      current = (index + total) % total;

      slides.forEach(function (slide, idx) {
        var isActive = idx === current;
        if (isActive) {
          slide.classList.add('is-active');
          slide.setAttribute('aria-hidden', 'false');
          var cta = slide.querySelector('.hero__cta');
          if (cta) cta.removeAttribute('tabindex');
        } else {
          slide.classList.remove('is-active');
          slide.setAttribute('aria-hidden', 'true');
          var inactiveCta = slide.querySelector('.hero__cta');
          if (inactiveCta) inactiveCta.setAttribute('tabindex', '-1');
        }
      });

      if (counterCurrent) {
        counterCurrent.textContent = formatNumber(current + 1);
      }

      dots.forEach(function (dot, idx) {
        var isActive = idx === current;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
    }

    function nextSlide() {
      goToSlide(current + 1);
    }

    function prevSlide() {
      goToSlide(current - 1);
    }

    function startAutoplay() {
      if (prefersReducedMotion) return;
      stopAutoplay();
      autoplayTimer = setInterval(nextSlide, autoplayInterval);
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    // Controls
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        prevSlide();
        startAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        nextSlide();
        startAutoplay();
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        var idx = parseInt(dot.getAttribute('data-index'), 10);
        if (!isNaN(idx)) {
          goToSlide(idx);
          startAutoplay();
        }
      });
    });

    // Pause on hover & focus
    hero.addEventListener('mouseenter', stopAutoplay);
    hero.addEventListener('mouseleave', startAutoplay);
    hero.addEventListener('focusin', stopAutoplay);
    hero.addEventListener('focusout', startAutoplay);

    // Keyboard navigation (ArrowLeft & ArrowRight)
    document.addEventListener('keydown', function (e) {
      // Check if hero is currently in view
      var rect = hero.getBoundingClientRect();
      var inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowLeft') {
        prevSlide();
        startAutoplay();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        startAutoplay();
      }
    });

    // Mobile touch swipe gestures
    var touchStartX = 0;
    var touchStartY = 0;

    hero.addEventListener('touchstart', function (e) {
      stopAutoplay();
      if (e.touches && e.touches[0]) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    hero.addEventListener('touchend', function (e) {
      if (e.changedTouches && e.changedTouches[0]) {
        var touchEndX = e.changedTouches[0].clientX;
        var touchEndY = e.changedTouches[0].clientY;
        var diffX = touchEndX - touchStartX;
        var diffY = touchEndY - touchStartY;

        // Ensure horizontal swipe is dominant and exceeds threshold
        if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX < 0) {
            nextSlide();
          } else {
            prevSlide();
          }
        }
      }
      startAutoplay();
    }, { passive: true });

    // Initialize slide 0 and autoplay
    goToSlide(0);
    startAutoplay();
  }

  initHeroSlider();

  /* ====================================================
     7. PROPERTY GALLERY (Phase 4 — Filtering & Dynamic Cards)
     ==================================================== */

  function initPropertyGallery() {
    var grid = document.getElementById('properties-grid');
    var emptyState = document.getElementById('properties-empty');
    var filterBtns = document.querySelectorAll('.gallery__filter-btn');

    if (!grid || typeof getFilteredProperties !== 'function') return;

    function renderCards(properties) {
      if (!properties || properties.length === 0) {
        grid.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
      }

      if (emptyState) emptyState.style.display = 'none';

      var html = '';
      properties.forEach(function (prop) {
        var sampleBadge = prop.sample
          ? '<span class="property-card__badge-sample">[SAMPLE — NOT REAL]</span>'
          : '';

        var typeBadge = prop.typeLabel
          ? '<span class="property-card__badge-type">' + prop.typeLabel + '</span>'
          : '';

        var specsHtml = '';
        if (prop.specs) {
          var specItems = [];
          if (prop.specs.type) specItems.push('<span>' + prop.specs.type + '</span>');
          if (prop.specs.area) specItems.push('<span>' + prop.specs.area + '</span>');
          if (prop.specs.status) specItems.push('<span>' + prop.specs.status + '</span>');
          specsHtml = '<div class="property-card__specs">' +
            specItems.map(function (item) {
              return '<span class="property-card__spec-item">' + item + '</span>';
            }).join('') +
          '</div>';
        }

        html += '<article class="property-card reveal" data-category="' + (prop.category || '') + '" data-subtype="' + (prop.subtype || '') + '">' +
          '<div class="property-card__media">' +
            '<img src="' + prop.image + '" alt="' + (prop.alt || prop.title) + '" class="property-card__img" loading="lazy" />' +
            '<div class="property-card__overlay" aria-hidden="true"></div>' +
            sampleBadge +
            typeBadge +
          '</div>' +
          '<div class="property-card__body">' +
            '<div class="property-card__location">' +
              '<span aria-hidden="true">&#9679;</span> ' + prop.location +
            '</div>' +
            '<h3 class="property-card__title">' + prop.title + '</h3>' +
            specsHtml +
            '<div class="property-card__price-wrap">' +
              '<span class="property-card__price">' + (prop.price || 'Price on Request') + '</span>' +
              '<span class="property-card__price-tag">Sample Reference</span>' +
            '</div>' +
            '<p class="property-card__desc">' + prop.description + '</p>' +
            '<div class="property-card__actions">' +
              '<a href="' + prop.enquiryLink + '" target="_blank" rel="noopener noreferrer" class="btn btn--outline btn--small property-card__btn property-card__btn--wa">' +
                '<span>Enquire on WhatsApp</span>' +
              '</a>' +
              '<a href="#contact" class="btn btn--outline btn--small property-card__btn">' +
                '<span>Contact Form</span>' +
              '</a>' +
            '</div>' +
          '</div>' +
        '</article>';
      });

      grid.innerHTML = html;

      // Re-observe newly rendered cards for scroll reveal
      if ('IntersectionObserver' in window) {
        var cardObserver = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                cardObserver.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );
        grid.querySelectorAll('.property-card').forEach(function (card) {
          cardObserver.observe(card);
        });
      } else {
        grid.querySelectorAll('.property-card').forEach(function (card) {
          card.classList.add('is-visible');
        });
      }
    }

    function applyFilter(filterKey) {
      grid.classList.add('is-animating');

      setTimeout(function () {
        var filtered = getFilteredProperties(filterKey);
        renderCards(filtered);
        grid.classList.remove('is-animating');
      }, 150);
    }

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filterKey = btn.getAttribute('data-filter');

        filterBtns.forEach(function (b) {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });

        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');

        applyFilter(filterKey);
      });
    });

    // Initial render with 'all'
    renderCards(getFilteredProperties('all'));
  }

  initPropertyGallery();

  /* ====================================================
     8. CONTACT FORM & WHATSAPP FALLBACK (Phase 5)
     ==================================================== */

  function initContactForm() {
    var form = document.getElementById('contact-form');
    var statusEl = document.getElementById('form-status');
    if (!form) return;

    var nameInput = document.getElementById('contact-name');
    var phoneInput = document.getElementById('contact-phone');
    var typeInput = document.getElementById('contact-type');
    var locationInput = document.getElementById('contact-location');
    var budgetInput = document.getElementById('contact-budget');
    var messageInput = document.getElementById('contact-message');

    var errName = document.getElementById('error-name');
    var errPhone = document.getElementById('error-phone');
    var errMessage = document.getElementById('error-message');

    function clearErrors() {
      if (errName) errName.textContent = '';
      if (errPhone) errPhone.textContent = '';
      if (errMessage) errMessage.textContent = '';
      [nameInput, phoneInput, messageInput].forEach(function (el) {
        if (el) el.classList.remove('is-invalid');
      });
      if (statusEl) {
        statusEl.style.display = 'none';
        statusEl.className = 'contact__status';
        statusEl.textContent = '';
      }
    }

    [nameInput, phoneInput, messageInput].forEach(function (el) {
      if (!el) return;
      el.addEventListener('input', function () {
        el.classList.remove('is-invalid');
        var errSpan = document.getElementById('error-' + el.name);
        if (errSpan) errSpan.textContent = '';
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors();

      var hasError = false;
      var nameVal = nameInput ? nameInput.value.trim() : '';
      var phoneVal = phoneInput ? phoneInput.value.trim() : '';
      var typeVal = typeInput ? typeInput.value : 'General Enquiry';
      var locVal = locationInput ? locationInput.value.trim() : '';
      var budgetVal = budgetInput ? budgetInput.value.trim() : '';
      var msgVal = messageInput ? messageInput.value.trim() : '';

      // Validate name
      if (!nameVal) {
        hasError = true;
        if (errName) errName.textContent = 'Please enter your full name.';
        if (nameInput) nameInput.classList.add('is-invalid');
      }

      // Validate phone
      var digitsOnly = phoneVal.replace(/\D/g, '');
      if (!phoneVal || digitsOnly.length < 10) {
        hasError = true;
        if (errPhone) errPhone.textContent = 'Please provide a valid 10-digit phone number.';
        if (phoneInput) phoneInput.classList.add('is-invalid');
      }

      // Validate message
      if (!msgVal) {
        hasError = true;
        if (errMessage) errMessage.textContent = 'Please describe your property enquiry or requirements.';
        if (messageInput) messageInput.classList.add('is-invalid');
      }

      if (hasError) {
        if (statusEl) {
          statusEl.style.display = 'block';
          statusEl.className = 'contact__status contact__status--error';
          statusEl.textContent = 'Please complete the required fields highlighted above before sending.';
        }
        var firstInvalid = form.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Build structured WhatsApp message
      var waLines = [
        'Hello Bhumi Associates,',
        '',
        'I would like to submit a property enquiry:',
        '• Name: ' + nameVal,
        '• Phone: ' + phoneVal,
        '• Enquiry Type: ' + typeVal,
        '• Preferred Location: ' + (locVal || 'Not specified'),
        '• Budget Range: ' + (budgetVal || 'Not specified'),
        '',
        'Message:',
        msgVal
      ];

      var waText = waLines.join('\n');
      var waUrl = 'https://wa.me/919310704571?text=' + encodeURIComponent(waText);

      // Show user feedback
      if (statusEl) {
        statusEl.style.display = 'block';
        statusEl.className = 'contact__status contact__status--success';
        statusEl.textContent = 'Validation successful! Opening WhatsApp to send your enquiry directly to +91 93107 04571...';
      }

      // Open WhatsApp deliberately
      setTimeout(function () {
        var win = window.open(waUrl, '_blank');
        if (!win || win.closed || typeof win.closed === 'undefined') {
          // If popup blocked, direct page redirection
          window.location.href = waUrl;
        }
      }, 400);

      form.reset();
    });
  }

  initContactForm();

  /* ====================================================
     9. SECTION REVEAL ANIMATION
        Apollo's cbp-so-scroller / cbp-so-side pattern.
        Elements with class .reveal animate in when they
        enter the viewport.
     ==================================================== */

  if ('IntersectionObserver' in window) {
    // Check reduced-motion preference
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      var revealElements = document.querySelectorAll('.reveal');

      var revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              revealObserver.unobserve(entry.target); // fire once
            }
          });
        },
        { threshold: 0.18 }
      );

      revealElements.forEach(function (el) {
        revealObserver.observe(el);
      });
    } else {
      // Reduced-motion: show everything immediately
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('is-visible');
      });
    }
  } else {
    // Fallback: no IntersectionObserver — show everything
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ====================================================
     10. CURRENT YEAR in footer (used in Phase 5)
        Writes to any element with id="current-year"
     ==================================================== */

  var yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ====================================================
     11. FLOATING ACTION BUTTON — Speed Dial (fb-08)
         Popover API progressive enhancement & light dismiss
     ==================================================== */
  var fabBtn  = document.getElementById('fb-08-fab');
  var dial    = document.getElementById('fb-08-dial');
  var fabDock = document.getElementById('quick-dial-dock');

  if (fabBtn && dial) {
    var hasNativePopover = typeof dial.showPopover === 'function';

    if (hasNativePopover) {
      dial.addEventListener('toggle', function (e) {
        var isOpen = e.newState === 'open';
        fabBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        if (fabDock) {
          fabDock.classList.toggle('is-open', isOpen);
        }
      });
    } else {
      // Fallback for browsers lacking native popover support
      fabBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = dial.classList.toggle('is-open');
        dial.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
        fabBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        if (fabDock) {
          fabDock.classList.toggle('is-open', isOpen);
        }
      });

      document.addEventListener('click', function (e) {
        if (!dial.contains(e.target) && e.target !== fabBtn) {
          dial.classList.remove('is-open');
          dial.setAttribute('aria-hidden', 'true');
          fabBtn.setAttribute('aria-expanded', 'false');
          if (fabDock) {
            fabDock.classList.remove('is-open');
          }
        }
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && dial.classList.contains('is-open')) {
          dial.classList.remove('is-open');
          dial.setAttribute('aria-hidden', 'true');
          fabBtn.setAttribute('aria-expanded', 'false');
          if (fabDock) {
            fabDock.classList.remove('is-open');
          }
          fabBtn.focus();
        }
      });
    }

    // Auto-close dial when any action item inside is clicked
    dial.querySelectorAll('.fb-08__act').forEach(function (link) {
      link.addEventListener('click', function () {
        if (hasNativePopover) {
          try {
            dial.hidePopover();
          } catch (err) {}
        } else {
          dial.classList.remove('is-open');
          dial.setAttribute('aria-hidden', 'true');
        }
        fabBtn.setAttribute('aria-expanded', 'false');
        if (fabDock) {
          fabDock.classList.remove('is-open');
        }
      });
    });
  }

})();

