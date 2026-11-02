/* Menu suspenso da barra de navegação no celular. */
const menuBotao = document.getElementById("menu-botao");
const menuLinks = document.getElementById("menu-links");

function definirMenu(aberto) {
  menuBotao.setAttribute("aria-expanded", aberto);
  menuBotao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  menuLinks.classList.toggle("aberto", aberto);
}

menuBotao.addEventListener("click", () => definirMenu(!menuLinks.classList.contains("aberto")));
menuLinks.addEventListener("click", (e) => { if (e.target.closest("a")) definirMenu(false); });
document.addEventListener("click", (e) => { if (!e.target.closest(".nav")) definirMenu(false); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuLinks.classList.contains("aberto")) {
    definirMenu(false);
    menuBotao.focus();
  }
});
