function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar tag img
  const img = document.querySelector("#profile img")
  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode adicionar a image light
    img.setAttribute("scr", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Perfil Gu Henrique Escura")
  } else {
    //se tiver sem light mode manter a img normal
    img.setAttribute("scr", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Perfil Gu Henrique")
  }
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
}
