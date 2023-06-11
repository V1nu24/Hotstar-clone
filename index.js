let movies = [
  {
    name: "falcon and the winter soldier",
    des:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum est nobis, magnam debitis deserunt maiores!",
    image: "images/slider 2.png"
  },
   {
    name: "loki",
    des:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum est nobis, magnam debitis deserunt maiores!",
    image: "images/slider 1.png"
  },
  {
    name: "wanda vision",
    des:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum est nobis, magnam debitis deserunt maiores!",
    image: "images/slider 3.png"
  },
  {
    name: "raya and the last dragon",
    des:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum est nobis, magnam debitis deserunt maiores!",
    image: "images/slider 4.png"
  },
  {
    name: "luca",
    des:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum est nobis, magnam debitis deserunt maiores!",
    image: "images/slider 5.png"
  }
];

const caraousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // create DOM Elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(imgElement);
  caraousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elements classnames
  slide.className = "slider";
  content.classname = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (slide.length) {
    sliders[0].style.marginLeft =
      "calc(-${100*(sliders.length-2)}%-${30*(sliders.lenght-2)}px)";
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//video cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".card-container")];
let nxtBtns = [...document.querySelectorAll(".card-container")];

cardContainers.forEach((items, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });
  preBtns[i].addEventListener("click", () => {
    items.scrollLeft -= containerWidth + 200;
  });
});
