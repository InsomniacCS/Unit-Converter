/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const length = document.querySelector("#length");
const volume = document.querySelector("#volume");
const mass = document.querySelector("#mass");

const inputBox = document.querySelector(".input-box");

const convertBtn = document.querySelector(".convert-btn");

convertBtn.addEventListener("click", function () {
  let convertNum = inputBox.value;
  length.innerHTML = `${convertNum} meters = ${(convertNum * 3.281).toFixed(
    3
  )} feet | ${convertNum} feet = ${(convertNum / 3.281).toFixed(3)} meters`;
  volume.innerHTML = `${convertNum} meters = ${(convertNum * 0.264).toFixed(
    3
  )} feet | ${convertNum} feet = ${(convertNum / 0.264).toFixed(3)} meters`;
  mass.innerHTML = `${convertNum} meters = ${(convertNum * 2.204).toFixed(
    3
  )} feet | ${convertNum} feet = ${(convertNum / 2.204).toFixed(3)} meters`;
});
