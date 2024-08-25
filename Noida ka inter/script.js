window.addEventListener('scroll', function() {
    const hiddenNav = document.getElementById('hidden-nav');
    if (window.scrollY > 300) {
      hiddenNav.classList.add('nav-visible');
    } else {
      hiddenNav.classList.remove('nav-visible');
    }
  });
  
  
  function toggleresponsive() {
    const ham = document.querySelector('#nav-icon3')
    const nav = document.querySelector('.mobile-nav')
    ham.classList.toggle('open')
    const wrapper = document.querySelector('.hamburger-wrapper')
    wrapper.classList.toggle('wrapper-active')
    nav.classList.toggle('mobile-active')
  }
  
  