function changeFooter() {
  let footer = document.getElementsByClassName("footer")[0];
  footer.style.backgroundColor = "#48556A"; // Corrected background color property syntax
  let button = document.getElementsByClassName("button")[0];
  button.src = "images/icon-share-clicked.svg";

  let info = document.getElementsByClassName("footer-info")[0];
  info.style.display = "none";

  let share = document.getElementsByClassName("footer-share")[0];
  share.style.display = "flex";
}
