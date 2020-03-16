var activeclass = document.querySelectorAll('.menuli');
for (var i = 0; i < activeclass.length; i++) {
  activeclass[i].addEventListener('click', activateClass);
}

function activateClass(e) {
  for (var i = 0; i < activeclass.length; i++) {
    activeclass[i].classList.remove('active');
  }
  e.target.classList.add('active');
}
