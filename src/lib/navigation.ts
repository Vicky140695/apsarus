export type Route = 'home' | 'retail' | 'wholesale';

export function parseRoute(): Route {
  const hash = window.location.hash.replace('#/', '').replace('#', '');
  if (hash === 'retail') return 'retail';
  if (hash === 'wholesale') return 'wholesale';
  return 'home';
}

export function navigate(route: Route): void {
  const target = route === 'home' ? '#/' : `#/${route}`;
  if (window.location.hash !== target) {
    window.location.hash = target;
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export function scrollToSection(id: string): void {
  if (window.location.hash !== '#/' && window.location.hash !== '') {
    window.location.hash = '#/';
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
