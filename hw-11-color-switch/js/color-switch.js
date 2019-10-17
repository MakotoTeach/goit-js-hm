// const a = 2;
// const b = 3;

// function sum(a, b) {
// let result = a + b;
// return result;
// }

// // setTimeout(() => {
// //     console.log(sum(a, b));
// // }, 2000);

// let timer =  setInterval(() => {
//     console.log(sum(a, b));
// }, 2000);

// setTimeout(() => {
//     clearInterval(timer)
// }, 11000);

const refs = {
  body: document.querySelector("body"),
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]')
};

// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548"
// ];

const colors = [
    "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177" ,"#0d5ac1" ,
    "#f205e6" ,"#1c0365" ,"#14a9ad" ,"#4ca2f9" ,"#a4e43f" ,"#d298e2" ,"#6119d0",
    "#d2737d" ,"#c0a43c" ,"#f2510e" ,"#651be6" ,"#79806e" ,"#61da5e" ,"#cd2f00" ,
    "#9348af" ,"#01ac53" ,"#c5a4fb" ,"#996635","#b11573" ,"#4bb473" ,"#75d89e" ,
    "#2f3f94" ,"#2f7b99" ,"#da967d" ,"#34891f" ,"#b0d87b" ,"#ca4751" ,"#7e50a8" ,
    "#fc6b57", "#f07815", "#8fd883", "#060e27", "#96e591", "#21d52e", "#d00043",
    "#b47162", "#1ec227", "#4f0f6f", "#1d1d58", "#947002", "#bde052", "#e08c56",
    "#28fcfd", "#bb09b", "#36486a", "#d02e29", "#1ae6db", "#3e464c", "#a84a8f",]

let randomColor = 0;
let isActive = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startSwitch = () => {
  if (isActive) {
    return;
  }
  isActive = true;
  randomColor = setInterval(() => {
    let color = colors[randomIntegerFromInterval(0, colors.length - 1)];
    console.log(color);
    refs.body.style.backgroundColor = color;
  }, 1000);
};

const stopSwitch = () => {
  isActive = false;
  clearInterval(randomColor);
  randomColor = 0;
};

refs.start.addEventListener("click", startSwitch);
refs.stop.addEventListener("click", stopSwitch);
