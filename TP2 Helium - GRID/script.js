// window.addEventListener("mousemove", (e) => {
//   mousemove.style.left = e.x + "px";
//   mousemove.style.top = e.y + "px";
// });

// window.addEventListener("mousemove", (e) => {
//   mousecw.style.left = e.x + "px";
//   mousecw.style.top = e.y + "px";
// });

// window.addEventListener("mousemove", (e) => {
//   mousecb.style.left = e.x + "px";
//   mousecb.style.top = e.y + "px";
// });

const mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.left = e.x + "px";
    mouse.style.top = e.y + "px";
  });
});
