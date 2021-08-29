$(document).ready(function () {
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 50) {
      nav.style.height = "50px";
      $(".navbar").css("background", "white");
      $("a").css("color", "black");
      $(".logo").css("color", "black");
    } else {
      nav.style.height = "70px";
      $(".navbar").css("background", "transparent");
      $("a").css("color", "white");
      $(".logo").css("color", "white");
    }
  });
});

const galleryContainer = document.querySelector(".gallery-container");
const galleryControlsContainer = document.querySelector(".gallery-controls");
const galleryControls = ["previous", "next"];
const galleryItems = document.querySelectorAll(".gallery-item");

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  // Update css classes for gallery
  updateGallery() {
    this.carouselArray.forEach((el) => {
      el.classList.remove("gallery-item-1");
      el.classList.remove("gallery-item-2");
      el.classList.remove("gallery-item-3");
      el.classList.remove("gallery-item-4");
      el.classList.remove("gallery-item-5");
    });

    this.carouselArray.slice(0, 3).forEach((el, i) => {
      el.classList.add(`gallery-item-${i + 1}`);
    });
  }

  // Update the current order of the carouselArray and gallery
  setCurrentState(direction) {
    if (direction.className == "gallery-controls-previous") {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }

    this.updateGallery();
  }

  // Construct the carousel controls
  setControls() {
    this.carouselControls.forEach((control) => {
      galleryControlsContainer.appendChild(
        document.createElement("button")
      ).className = `gallery-controls-${control}`;

      document.querySelector(`.gallery-controls-${control}`).innerText =
        control;
    });
  }

  // Add a click event listener to trigger setCurrentState method to rearrange carousel
  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];

    triggers.forEach((control) => {
      control.addEventListener("click", (e) => {
        e.preventDefault();

        if (control.className == "gallery-controls-add") {
          const newItem = document.createElement("img");
          const latestItem = this.carouselArray.length;
          const latestIndex =
            this.carouselArray.findIndex(
              (item) =>
                item.getAttribute("data-index") == this.carouselArray.length
            ) + 1;

          // Assign the necessary properties for new gallery item
          Object.assign(newItem, {
            className: "gallery-item",
            src: `http://fakeimg.pl/300/?text=${this.carouselArray.length + 1}`,
          });
          newItem.setAttribute("data-index", this.carouselArray.length + 1);

        } else {
          this.setCurrentState(control);
        }
      });
    });
  }
}

const exampleCarousel = new Carousel(
  galleryContainer,
  galleryItems,
  galleryControls
);

exampleCarousel.setControls();
exampleCarousel.useControls();
