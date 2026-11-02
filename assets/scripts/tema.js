/* Sem escolha salva, o site segue o tema do aparelho. Este arquivo roda antes da
   página aparecer, para que ela não pisque no tema errado. */
const raiz = document.documentElement;
const sistemaEscuro = matchMedia("(prefers-color-scheme: dark)");

function lerEscolha() {
  try {
    return localStorage.getItem("tema");
  } catch {
    return null;
  }
}

function salvarEscolha(tema) {
  try {
    if (tema) localStorage.setItem("tema", tema);
    else localStorage.removeItem("tema");
  } catch {
    // Sem armazenamento, a escolha vale até a página ser recarregada.
  }
}

const temaDoSistema = () => (sistemaEscuro.matches ? "dark" : "light");
const temaAtual = () => raiz.dataset.theme || temaDoSistema();

function atualizarBotao() {
  const botao = document.getElementById("tema-botao");
  if (botao) botao.setAttribute("aria-checked", temaAtual() === "dark");
}

function alternarTema() {
  document.getElementById("tema-botao").classList.add("animar");
  const novo = temaAtual() === "dark" ? "light" : "dark";
  // Voltar ao tema do aparelho apaga a escolha, e o site volta a acompanhá-lo.
  if (novo === temaDoSistema()) {
    delete raiz.dataset.theme;
    salvarEscolha(null);
  } else {
    raiz.dataset.theme = novo;
    salvarEscolha(novo);
  }
  atualizarBotao();
}

const escolha = lerEscolha();
if (escolha === "dark" || escolha === "light") raiz.dataset.theme = escolha;

sistemaEscuro.addEventListener("change", atualizarBotao);
document.addEventListener("DOMContentLoaded", () => {
  atualizarBotao();
  document.getElementById("tema-botao").addEventListener("click", alternarTema);
});
