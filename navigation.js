const navigationToggle = document.querySelector('.js-wvu-site-nav-toggle');
const navigationItems = document.querySelector('.js-wvu-site-nav-items');
const hamburger = document.querySelector('.js-wvu-hamburger');
const toggleText = document.querySelector('.js-wvu-site-nav-toggle-text');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navigationLinks = [...document.querySelectorAll('.js-wvu-site-nav-items a[href]')];
const currentLink = navigationLinks.find((link) => {
    const href = link.getAttribute('href');

    if (!href || href.startsWith('#') || href.startsWith('http')) {
        return false;
    }

    const linkPage = new URL(href, document.baseURI).pathname.split('/').pop();
    const isTopLevel = link.parentElement?.parentElement === navigationItems;

    return linkPage === currentPage && (isTopLevel || currentPage !== 'index.html');
});

if (currentLink) {
    currentLink.setAttribute('aria-current', 'page');
    currentLink.closest('.js-wvu-site-nav-items > li')?.classList.add('active');
}

navigationToggle?.addEventListener('click', () => {
    const isOpen = navigationToggle.getAttribute('aria-expanded') === 'true';

    navigationToggle.setAttribute('aria-expanded', String(!isOpen));
    navigationItems?.classList.toggle('is-opened', !isOpen);
    hamburger?.classList.toggle('js-wvu-hamburger--is-open', !isOpen);

    if (toggleText) {
        toggleText.textContent = isOpen ? 'Open Menu' : 'Close Menu';
    }
});