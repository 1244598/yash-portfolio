/* ==========================================================================
   Yash Laxkar — Portfolio
   --------------------------------------------------------------------------
   Jobs:
     1. Mobile menu toggle
     2. Active-section highlighting in the navbar
     3. Scroll-reveal animations
     4. Navbar shadow on scroll + current year in the footer
     5. Cursor spotlight on cards
     6. Count-up for the rating stat
     7. Smooth-scroll fallback where CSS scroll-behavior is missing
   No dependencies. Runs after the DOM is parsed (script is at end of <body>).
   ========================================================================== */

(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ------------------------------------------------------------------
     1. MOBILE MENU
     ------------------------------------------------------------------ */
  var toggle = document.getElementById("nav-toggle");
  var navLinks = document.getElementById("nav-links");

  function closeMenu() {
    if (!toggle || !navLinks) return;
    toggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  }

  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      navLinks.classList.toggle("is-open", !isOpen);
      // Lock background scroll only while the panel covers the page
      document.body.classList.toggle("nav-open", !isOpen);
    });

    // Tapping a link should navigate and close the panel
    navLinks.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu();
    });

    // Escape closes it, and returns focus to the button
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navLinks.classList.contains("is-open")) {
        closeMenu();
        toggle.focus();
      }
    });

    // If the viewport grows past the mobile breakpoint, drop the panel state.
    // addEventListener on a MediaQueryList is Safari 14+, hence the guard.
    var desktopQuery = window.matchMedia("(min-width: 861px)");
    var onBreakpoint = function (e) {
      if (e.matches) closeMenu();
    };
    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener("change", onBreakpoint);
    } else if (desktopQuery.addListener) {
      desktopQuery.addListener(onBreakpoint);
    }
  }

  /* ------------------------------------------------------------------
     2. ACTIVE-SECTION HIGHLIGHTING
     Watches a band across the middle of the viewport and marks the
     matching nav link. Falls back to doing nothing if IO is missing.
     ------------------------------------------------------------------ */
  var navAnchors = Array.prototype.slice.call(
    document.querySelectorAll('.nav__links a[href^="#"]')
  );

  if ("IntersectionObserver" in window && navAnchors.length) {
    var linkFor = {};
    var watched = [];

    navAnchors.forEach(function (anchor) {
      var id = anchor.getAttribute("href").slice(1);
      var section = document.getElementById(id);
      if (!section) return;
      linkFor[id] = anchor;
      watched.push(section);
    });

    var setActive = function (id) {
      navAnchors.forEach(function (a) {
        a.classList.remove("is-active");
      });
      if (linkFor[id]) linkFor[id].classList.add("is-active");
    };

    var sectionObserver = new IntersectionObserver(
      function (entries) {
        // Pick the entry closest to the top of the band, so overlapping
        // sections resolve to a single winner.
        var best = null;
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          if (!best || entry.boundingClientRect.top < best.boundingClientRect.top) {
            best = entry;
          }
        });
        if (best) setActive(best.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    watched.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  /* ------------------------------------------------------------------
     3. SCROLL REVEAL
     Adds .is-visible once an element scrolls into view, then stops
     watching it. Reduced-motion users get everything visible up front.
     ------------------------------------------------------------------ */
  var revealables = Array.prototype.slice.call(
    document.querySelectorAll(".reveal")
  );

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealables.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    revealables.forEach(function (el) {
      revealObserver.observe(el);
    });

    // Stagger siblings inside a grid/list so they cascade rather than
    // all landing at once.
    document
      .querySelectorAll(
        ".projects, .cp-grid, .hobbies, .skills, .timeline, .contact__links"
      )
      .forEach(function (group) {
        Array.prototype.slice
          .call(group.querySelectorAll(".reveal"))
          .forEach(function (el, i) {
            el.style.transitionDelay = i * 80 + "ms";
          });
      });
  }

  /* ------------------------------------------------------------------
     4. NAVBAR ON SCROLL + FOOTER YEAR
     ------------------------------------------------------------------ */
  var nav = document.getElementById("nav");

  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ------------------------------------------------------------------
     5. CARD SPOTLIGHT
     Writes the pointer position onto the card as --mx/--my, which the
     CSS uses to place a radial highlight. Skipped for reduced motion and
     for coarse pointers, where there is no hover to track.
     ------------------------------------------------------------------ */
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (finePointer && !prefersReducedMotion) {
    document.querySelectorAll(".card").forEach(function (card) {
      card.addEventListener(
        "pointermove",
        function (event) {
          var r = card.getBoundingClientRect();
          card.style.setProperty("--mx", event.clientX - r.left + "px");
          card.style.setProperty("--my", event.clientY - r.top + "px");
        },
        { passive: true }
      );
    });
  }

  /* ------------------------------------------------------------------
     6. COUNT-UP
     Animates [data-countup] from 0 to its value the first time it is
     seen. The real number is already in the HTML, so it stays correct
     with JS off or reduced motion on.
     ------------------------------------------------------------------ */
  var counters = document.querySelectorAll("[data-countup]");

  if (counters.length && !prefersReducedMotion && "IntersectionObserver" in window) {
    var countObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);

          var el = entry.target;
          var target = parseInt(el.getAttribute("data-countup"), 10);
          if (isNaN(target)) return;

          var duration = 1100;
          var started = null;

          var tick = function (now) {
            if (started === null) started = now;
            var t = Math.min((now - started) / duration, 1);
            // ease-out cubic, so it decelerates into the final value
            var eased = 1 - Math.pow(1 - t, 3);
            el.textContent = String(Math.round(target * eased));
            if (t < 1) requestAnimationFrame(tick);
            else el.textContent = String(target);
          };

          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.6 }
    );

    counters.forEach(function (el) {
      countObserver.observe(el);
    });
  }

  /* ------------------------------------------------------------------
     7. SMOOTH-SCROLL FALLBACK
     Only needed where CSS scroll-behavior isn't supported (older
     Safari). Modern browsers take the CSS path and skip this entirely.
     ------------------------------------------------------------------ */
  var supportsCssSmooth = "scrollBehavior" in document.documentElement.style;

  if (!supportsCssSmooth && !prefersReducedMotion) {
    document.addEventListener("click", function (event) {
      var link = event.target.closest('a[href^="#"]');
      if (!link) return;

      var id = link.getAttribute("href").slice(1);
      var target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      var navHeight = nav ? nav.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  }
})();
