// Fleypat Adventures shared interactions
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  }));
}

// Show the supplied logo when fleypat-logo.png is placed beside index.html.
document.querySelectorAll('[data-site-logo]').forEach(img => {
  const showLogo = () => img.closest('.brand')?.classList.add('has-logo');
  img.addEventListener('load', showLogo, { once: true });
  if (img.complete && img.naturalWidth > 0) showLogo();
});

const whatsappNumber = '254704261626';
function sendWhatsApp(message) {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener');
}

document.querySelectorAll('[data-trip-finder]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const message = [
      'Hello Fleypat Adventures, I would like to find a trip.',
      `Destination: ${data.get('destination') || 'Not specified'}`,
      `Travel date: ${data.get('date') || 'Flexible'}`,
      `Category: ${data.get('category') || 'Not specified'}`,
      `Guests: ${data.get('guests') || 'Not specified'}`,
      'Please share available options and prices.'
    ].join('\n');
    sendWhatsApp(message);
  });
});

document.querySelectorAll('[data-contact-form]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = 'Website travel inquiry - Fleypat Adventures';
    const body = [
      `Name: ${data.get('name') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Phone / WhatsApp: ${data.get('phone') || ''}`,
      `Travel dates: ${data.get('dates') || 'Not specified'}`,
      `Destination / service: ${data.get('destination') || 'Not specified'}`,
      '',
      `Message: ${data.get('message') || ''}`
    ].join('\n');
    window.location.href = `mailto:info@fleypatadventures.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});

document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = new Date().getFullYear();
});
