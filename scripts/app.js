window.addEventListener("load", function () {
  menuBtn.addEventListener("click", function () {
    toggleMenu();
  });
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      toggleMenu();
    });
  }
});

//service-modal code
const services = [
  {
    name: "Frontend development",
    content: "Wooohooo",
    picture: "imgone.jpg",
  },
  {
    name: "Backend development",
    content: "Wooohooo2",
    picture: "imgtwo.jpg",
  },
  {
    name: "UX design",
    content: "Wooohooo3",
    picture: "imgthree.jpg",
  },
  {
    name: "Coaching",
    content: "Wooohooo4",
    picture: "imgfour.jpg",
  },
];

const closeServiceModal = () => {
  document.getElementById("service-modal-wrapper").style.display = "none";
};

const openServiceModal = () => {
  const cards = document.getElementsByClassName("service-card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
      document.getElementById("service-modal-wrapper").style.display = "flex";
      for (let j = 0; j < services.length; j++) {
        if (i === j) {
          document.getElementById(
            "service-modal-content"
          ).innerHTML = `<h2>${services[j].name}</h2><p>${services[j].content}</p><img src="./media/img/${services[j].picture}">`;
        }
      }
    });
  }
};

window.addEventListener("load", openServiceModal);

//Image-slider code

const images = [
  {
    name: "imgone.jpg",
  },
  {
    name: "imgtwo.jpg",
  },
  {
    name: "imgthree.jpg",
  },
  {
    name: "imgfour.jpg",
  },
  {
    name: "imgfive.jpg",
  },
  {
    name: "imgsix.jpg",
  },
];

const setMainImage = (src) => {
  document.getElementById("main-image").setAttribute("src", src);
  setActiveThumbNail();
};

const setActiveThumbNail = () => {
  const thumbs = document.getElementsByClassName("thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    if (thumbs[i].src === document.getElementById("main-image").src) {
      thumbs[i].style.border = "2px solid red";
    } else {
      thumbs[i].style.border = "0px";
    }
  }
};

const prevImage = () => {
  const thumbs = document.getElementsByClassName("thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    if (
      thumbs[i].src === document.getElementById("main-image").src &&
      i !== 0
    ) {
      document
        .getElementById("main-image")
        .setAttribute("src", thumbs[(i -= 1)].src);
      setActiveThumbNail();
    }
  }
};

const nextImage = () => {
  const thumbs = document.getElementsByClassName("thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    if (
      thumbs[i].src === document.getElementById("main-image").src &&
      i !== thumbs.length - 1
    ) {
      document
        .getElementById("main-image")
        .setAttribute("src", thumbs[(i += 1)].src);
      setActiveThumbNail();
    }
  }
};

window.addEventListener("load", () => {
  document
    .getElementById("main-image")
    .setAttribute("src", `./media/img/${images[0].name}`);
  document.getElementById("thumbnails-wrapper").innerHTML = images
    .map(
      (img) =>
        `<img src="./media/img/${img.name}" class="thumbnail" onclick="setMainImage(this.src)">`
    )
    .join("");

  setActiveThumbNail();
  document.getElementById("prev-btn").addEventListener("click", prevImage);
  document.getElementById("next-btn").addEventListener("click", nextImage);
});
