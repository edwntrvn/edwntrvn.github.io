// IMAGE GALLERY

const images = [
  {
    src: "/images/547609776_18078296276057728_8848779903870526182_n.jpg",
    username: "yi_________an",
    date: "2025.09.15"
  },

  {
    src: "/images/553355178_18060768791422285_7023703535780750569_n.jpg",
    username: "arch___itecture",
    date: "2025.09.24"
  },

  {
    src: "/images/571784211_18539115796052789_7130957213699572201_n.jpg",
    username: "patjamesorourke",
    date: "2025.10.27"
  },

  {
    src: "/images/574283661_18075786473180015_3214036233233329845_n.jpg",
    username: "fibikung",
    date: "2025.11.03"
  },

  {
    src: "/images/583999284_18387174775182189_8668363594022240623_n.jpg",
    username: "leeraedong",
    date: "2025.11.22"
  },

  {
    src: "/images/612209721_18441556690105282_7115753837005148120_n.jpg",
    username: "foxxinae",
    date: "2026.01.07"
  },

  {
    src: "/images/613076439_18198256273335865_8335067235133115921_n.jpg",
    username: "___artbooks___",
    date: "2026.01.12"
  },

  {
    src: "/images/616351985_18551061757054677_670349784675137678_n.jpg",
    username: "lrnrmstrng",
    date: "2026.01.17"
  },

  {
    src: "/images/619744898_18092596246969409_7770717739112468929_n.jpg",
    username: "yinvchushi",
    date: "2026.01.21"
  },

  {
    src: "/images/629027264_18328588378301096_5689818107193328902_n.jpg",
    username: "lotuxyuhacho",
    date: "2026.02.14"
  },

  {
    src: "/images/639681207_18564634198042219_8830066806215369655_n.jpg",
    username: "cindy_kimmm_",
    date: "2026.03.01"
  },

  {
    src: "/images/645829159_18561656533042415_978777967194134204_n.jpg",
    username: "sirui.ma",
    date: "2026.03.03"
  },

  {
    src: "/images/658955547_18413539597120021_701603695670349430_n.jpg",
    username: "begia__",
    date: "2026.04.03"
  },

  {
    src: "/images/659228018_18575599705045491_3378928882460508053_n.jpg",
    username: "_ell1e11___",
    date: "2026.04.05"
  },

  {
    src: "/images/688352688_18065361170692379_4567144654442240991_n.jpg",
    username: "jurgen_maelfeyt",
    date: "2026.05.12"
  },
  
  {
    src: "/images/696208030_18099126281017367_8510448636502576318_n.jpg",
    username: "junectarine",
    date: "2026.05.16"
  },

  {
    src: "/images/711670750_18595928083061830_6427353276348547440_n.jpg",
    username: "danbivia",
    date: "2026.05.30"
  },

  {
    src: "/images/726575437_18598760611057997_644609751892928679_n.jpg",
    username: "cec.ilyli",
    date: "2026.06.18"
  },

  {
    src: "/images/730275077_18606674140046153_5658518229985583259_n.jpg",
    username: "glanzen_nid",
    date: "2026.06.27"
  },

  {
    src: "/images/747513078_18462424132118454_5485275281797328567_n.jpg",
    username: "tanrran",
    date: "2026.07.16"
  },

  {
    src: "/images/772547348_18608462050003043_9008216843833600629_n.jpg",
    username: "riksflix",
    date: "2026.08.11"
  },

  {
    src: "/images/773519787_18171756910442157_7906063610743111438_n.jpg",
    username: "soletimide",
    date: "2026.08.15"
  },

  {
    src: "/images/784732882_18078784502703989_5131671951248389338_n.jpg",
    username: "kmchra",
    date: "2026.08.25"
  },

  {
    src: "/images/786452936_18622087966056693_986137996149480028_n.jpg",
    username: "su___cream",
    date: "2026.08.27"
  },

  {
    src: "/images/787409539_18373535632238680_7819345195828225028_n.jpg",
    username: "yohisoe",
    date: "2026.08.27"
  },

  {
    src: "/images/788550093_18622535278012058_594638884462593301_n.jpg",
    username: "paixplein",
    date: "2026.08.28"
  },

  {
    src: "/images/790397963_18622802428051020_7608793973380901284_n.jpg",
    username: "izzysqzy",
    date: "2026.08.30"
  },

  {
    src: "/images/791659898_18614948254009633_6393240169535460077_n.jpg",
    username: "cute.jpg",
    date: "2026.08.31"
  },

  {
    src: "/images/792235790_18416901649158585_753869868644136751_n.jpg",
    username: "limdongjoon",
    date: "2026.09.04"
  },

  {
    src: "/images/794467560_18155448277507743_7418515687244248556_n.jpg",
    username: "clrdlne",
    date: "2026.09.05"
  }
];



const image = document.querySelector("#image-goes-here");
const imageCredit = document.querySelector("#image-credit");
const imageCreditButton = document.querySelector("#image-credit-button");
const imageCreditUsername = document.querySelector("#image-credit-username");
const imageCreditDate = document.querySelector("#image-credit-date");

const shuffledImages = [...images];

for (let i = shuffledImages.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));

  [shuffledImages[i], shuffledImages[j]] = [
    shuffledImages[j],
    shuffledImages[i]
  ];
}

let currentIndex = 0;

function displayImage() {
  const currentImage = shuffledImages[currentIndex];

  image.src = currentImage.src;

  imageCreditUsername.textContent = `@${currentImage.username}`;
  imageCreditUsername.href = `https://www.instagram.com/${currentImage.username}/`;

  imageCreditDate.textContent = currentImage.date;
}

displayImage();



// GALLERY HOVER INTERACTION

document.addEventListener("mousemove", function (event) {
  const imageBounds = image.getBoundingClientRect();

  const pointerInsideImage =
    event.clientX >= imageBounds.left &&
    event.clientX <= imageBounds.right &&
    event.clientY >= imageBounds.top &&
    event.clientY <= imageBounds.bottom;

  document.body.classList.toggle("gallery-hover", pointerInsideImage);
});

document.addEventListener("click", function (event) {
  const imageBounds = image.getBoundingClientRect();

  const clickedInsideImage =
    event.clientX >= imageBounds.left &&
    event.clientX <= imageBounds.right &&
    event.clientY >= imageBounds.top &&
    event.clientY <= imageBounds.bottom;

  if (!clickedInsideImage) {
    return;
  }

  if (event.target.closest("a, button")) {
    return;
  }

  currentIndex = (currentIndex + 1) % shuffledImages.length;

  displayImage();
});



// IMAGE CREDIT TOGGLE

imageCreditButton.addEventListener("click", function() {
  imageCredit.hidden = !imageCredit.hidden;

  if (imageCredit.hidden) {
    imageCreditButton.textContent = "Show image credits";
  }

  else {
    imageCreditButton.textContent = "Hide image credits";
  }

  imageCreditButton.setAttribute("aria-expanded", !imageCredit.hidden);
});

// Match max-width here with breakpoint specified in CSS media query
// The CSS breakpoint hides the button; the JavaScript breakpoint resets the credit's state
const mobileViewport = window.matchMedia("(max-width: 1000px)");

function handleViewportChange() {
  if (mobileViewport.matches) {
    imageCredit.hidden = true;
    imageCreditButton.setAttribute("aria-expanded", "false");
    imageCreditButton.textContent = "Show image credits";
  }
}

handleViewportChange();

mobileViewport.addEventListener("change", handleViewportChange);



// SCREENSAVER

const screensaver = document.querySelector(".screensaver");
const originalTitle = document.title;

const touchDevice = window.matchMedia("(pointer: coarse)");

if (!touchDevice.matches) {
  let awayTimer;

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      awayTimer = setTimeout(() => {
        screensaver.classList.add("active");
        document.body.classList.add("screensaver-active");
        document.title = "Wish you were here…";
      }, 30000);
    }

    else {
      clearTimeout(awayTimer);
    }
  });

  screensaver.addEventListener("click", () => {
    screensaver.classList.remove("active");
    document.body.classList.remove("screensaver-active");
    document.title = originalTitle;
  });
}