const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");
const main = document.getElementById("main");
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  if(navbar.classList.contains("active")){
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
  }else if(!navbar.classList.contains("active")){
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
  }
});

navlinks.addEventListener("click", () => {
  navbar.classList.remove("active");
  document.getElementById("open").style.display = "block";
  document.getElementById("close").style.display = "none";
});

main.addEventListener("click", () => {
  if(navbar.classList.contains("active")){
    navbar.classList.remove("active");
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
  }
});

window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  let currentSection = '';
  sections.forEach(function(section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(function(link) {
    link.classList.remove('active-link');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active-link');
    }
  });
});

