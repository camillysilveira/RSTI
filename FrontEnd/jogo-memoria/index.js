const emojiData = [
  { src: "./assets/luffy.svg", alt: "luffy" },
  { src: "./assets/zoro.svg", alt: "zoro" },
  { src: "./assets/sanji.svg", alt: "sanji" },
  { src: "./assets/nami.svg", alt: "nami" },
  { src: "./assets/robin.svg", alt: "robin" },
  { src: "./assets/chopper.svg", alt: "chopper" },
  { src: "./assets/franky.svg", alt: "franky" },
  { src: "./assets/usopp.svg", alt: "usopp" },
];

const emojis = [...emojiData, ...emojiData].map(
  (item) => `<img alt="${item.alt}" src="${item.src}" />`
);

/* função para embaralhar as imagens */
const shuffle = (array) => array.sort(() => Math.random() - 0.5);

/* função para tocar o áudio */
const playSound = (audioName) => {
  const audio = new Audio(`./assets/sounds/${audioName}.m4a`);
  audio.volume = 0.5;
  audio.play();
};

let openCards = [];

/* emaralhar as imagens e adicioná-las na DOM */
shuffle(emojis).forEach((emoji) => {
  const box = document.createElement("div");
  box.className = "item";
  box.innerHTML = emoji;
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
});

/* função para manipualr o clique nos cartões */
function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length === 2) {
    setTimeout(checkMatch, 500);
  }

  playSound("flip");
}

/* verficiar se os cards são iguais */
function checkMatch() {
  const [card1, card2] = openCards;

  if (card1.innerHTML === card2.innerHTML) {
    card1.classList.add("boxMatch");
    card2.classList.add("boxMatch");
  } else {
    card1.classList.remove("boxOpen");
    card2.classList.remove("boxOpen");
    playSound("flipback");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    Swal.fire({
      title: "Parabéns!",
      text: "Você completou o jogo.",
      imageUrl:
        "https://cdn.ome.lt/iWmXcFPxiHLFMms996HyPofDbD4=/570x0/smart/uploads/conteudo/fotos/onepieceanime_ZGY8JnZ.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Opening One Piece",
      popup: "swal-popup",
      title: "swal-title",
      image: "swal-image",
      confirmButton: "swal-button",
    }).then(() => {
      window.location.reload();
    });
  }
}
