function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar2.jpeg")
    img.setAttribute("alt", "foto do João sorrindo")
  } else {
    img.setAttribute("src", "./assets/avatar1.jpeg")
    img.setAttribute("alt", "foto do João sem um sorrir")
  }
}
