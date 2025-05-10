window.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#header")) {
    includeHTML("header", "header.html");
  }
  if (document.querySelector("#footer")) {
    includeHTML("footer", "footer.html");
  }
  if (document.querySelector("#contact-form")) {
    includeHTML("contact-form", "contact.html");
  }
  if (document.querySelector("#blog-section")) {
    includeHTML("blog-section", "blogSection.html");
  }
});

function includeHTML(id, file) {
  fetch(file)
    .then((response) => {
      if (!response.ok) throw new Error(`Could not load ${file}`);
      return response.text();
    })
    .then((data) => {
      document.getElementById(id).innerHTML = data;

      if (id === "blog-section") {
        initBlogSwiper();
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

// Header js===============================
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 200) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

//  ==============================AOS script======================
AOS.init();

// ==================================blogs js==============================
function initBlogSwiper() {
  const swiper = new Swiper(".blog-slider", {
    loop: true,
    speed: 1000,
    spaceBetween: 20,
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
	breakpoints:{
		360:{
			slidesPerView:1,
			spaceBetween: 10,
		},
		768:{
			slidesPerView:2,
			spaceBetween: 20,
		},
		992:{
			slidesPerView:3,
			spaceBetween: 20,
		}
	}
  });
}
