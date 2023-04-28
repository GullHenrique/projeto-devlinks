function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("scr", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Perfil Gu Henrique Escura")
  } else {
    img.setAttribute("scr", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Perfil Gu Henrique")
  }
}
