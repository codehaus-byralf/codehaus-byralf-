const paragraph = document.getElementById("my-paragraph");

paragraph.addEventListener("mouseover", () => {
  paragraph.style.fontSize = "20px";
  paragraph.style.transition = "font-size 0.5s ease";
});

paragraph.addEventListener("mouseout", () => {
  paragraph.style.fontSize = "16px";
  paragraph.style.transition = "font-size 0.5s ease";
});
