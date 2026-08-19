const navigationToggle = document.querySelector('.js-wvu-site-nav-toggle');
const navigationItems = document.querySelector('.js-wvu-site-nav-items');
const hamburger = document.querySelector('.js-wvu-hamburger');
const toggleText = document.querySelector('.js-wvu-site-nav-toggle-text');

navigationToggle?.addEventListener('click', () => {
    const isOpen = navigationToggle.getAttribute('aria-expanded') === 'true';

    navigationToggle.setAttribute('aria-expanded', String(!isOpen));
    navigationItems?.classList.toggle('is-opened', !isOpen);
    hamburger?.classList.toggle('js-wvu-hamburger--is-open', !isOpen);

    if (toggleText) {
        toggleText.textContent = isOpen ? 'Open Menu' : 'Close Menu';
    }
});