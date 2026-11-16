<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-shell">
    <header class="site-header">
      <a class="brand" href="/" aria-label="Registration form home">
        <span class="brand-mark" aria-hidden="true">r<span>.</span></span>
        <span>Registration<span class="brand-subtitle">A little form. A fresh start.</span></span>
      </a>
      <nav aria-label="Project links" class="header-links">
        <a
          class="repo-link"
          aria-label="View source on GitHub"
          href="https://github.com/ThePrimeShak/sample-registration-form"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.07c-3.1.68-3.76-1.31-3.76-1.31-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15 1 1.71 2.62 1.22 3.26 .93.1-.72.4-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.21.43-2.2 1.14-2.98-.12-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.6 1.53.23 2.66.11 2.94.71.78 1.14 1.77 1.14 2.98 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9Z"
            />
          </svg>
          <span>View source</span><span aria-hidden="true">↗</span>
        </a>
        <a
          class="author-link"
          href="https://www.linkedin.com/in/theprimeshak/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ThePrimeShak on LinkedIn"
        >
          <span class="author-avatar" aria-hidden="true">S</span><span>ThePrimeShak</span
          ><span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
    <RouterView />
    <footer class="site-footer"
      ><span>A small project, made with care.</span
      ><span>Built with Vue <span class="footer-dot" aria-hidden="true">·</span> Open source</span></footer
    >
  </div>
</template>
