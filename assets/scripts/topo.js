/* Botão de voltar ao topo, que aparece depois de rolar a página. */
const topoBotao = document.getElementById("topo-botao");

function atualizarTopo() {
  topoBotao.hidden = scrollY < 400;
}

topoBotao.addEventListener("click", () => scrollTo(0, 0));
addEventListener("scroll", atualizarTopo, { passive: true });
atualizarTopo();
