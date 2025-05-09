// Header js===============================
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 200) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });
// HERO JS=======================
document.addEventListener("DOMContentLoaded", function () {
    const typingText = "WITH SANIYA";
    document.querySelector(".typing").textContent = typingText;
});
