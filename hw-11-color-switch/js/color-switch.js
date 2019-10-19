const colors = [
  "#63b598",
  "#ce7d78",
  "#ea9e70",
  "#a48a9e",
  "#c6e1e8",
  "#648177",
  "#0d5ac1",
  "#f205e6",
  "#651be6",
  "#79806e",
  "#61da5e",
  "#cd2f00",
  "#9348af",
  "#75d89e",
  "#2f3f94",
  "#2f7b99",
  "#da967d",
  "#34891f",
  "#b0d87b",
];

const refs = {
  body: document.querySelector("body"),
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]')
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const switchColor = {
  isActive: false,
  randomColor: 0,

  startSwitch() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.randomColor = setInterval(() => {
      const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
      console.log(color);
      updateColor(color);
    }, 1000);
  },

  stopSwitch() {
    this.isActive = false;
    clearInterval(this.randomColor);
    this.randomColor = 0;
  }
};

function updateColor(color) {
  refs.body.style.backgroundColor = color;
}

refs.start.addEventListener("click", switchColor.startSwitch.bind(switchColor));
refs.stop.addEventListener("click", switchColor.stopSwitch.bind(switchColor));
