/* Galeria: os convidados enviam fotos para o Drive dos noivos e veem as que eles aprovaram. */
const $ = (id) => document.getElementById(id);
const LADO_MAXIMO = 2560;
const QUALIDADE = 0.88;
let fotos = [];
let fotoAtual = 0;
let enviando = false;

const endereco = (id, largura) => "https://drive.google.com/thumbnail?id=" + encodeURIComponent(id) + "&sz=w" + largura;

// A página abre no dia do casamento. Antes disso, só quando a galeria estiver em teste.
function galeriaLiberada() {
  return CONFIG.galeria.emTeste || Date.now() >= new Date(CONFIG.data + "T00:00:00").getTime();
}

function montarCabecalho() {
  const data = new Date(CONFIG.data + "T12:00:00");
  $("quando").textContent = data.toLocaleDateString("pt-BR", { dateStyle: "long" }) + " · " + CONFIG.local;
  $("rodape").textContent = CONFIG.noivos.join(" e ") + " · " + CONFIG.local;
  if (galeriaLiberada()) {
    $("galeria-form").hidden = false;
    $("galeria-conteudo").hidden = false;
    return;
  }
  $("galeria-aviso").textContent = "A galeria abre no dia do casamento, " + data.toLocaleDateString("pt-BR", { dateStyle: "long" }) + ". Volte aqui para enviar suas fotos e ver as da festa.";
  $("galeria-fechada").hidden = false;
}

function mostrarFotos() {
  const lista = $("galeria-fotos");
  lista.replaceChildren();
  fotos.forEach((foto, i) => {
    const item = document.createElement("li");
    const botao = document.createElement("button");
    botao.type = "button";
    botao.addEventListener("click", () => abrirFoto(i));
    const imagem = document.createElement("img");
    imagem.src = endereco(foto.id, 800);
    imagem.alt = foto.autor ? "Foto enviada por " + foto.autor : "Foto do casamento";
    imagem.loading = "lazy";
    // O Drive recusa a miniatura quando o navegador informa de qual site veio o pedido.
    imagem.referrerPolicy = "no-referrer";
    botao.append(imagem);
    item.append(botao);
    lista.append(item);
  });
  $("galeria-vazia").hidden = fotos.length > 0;
  $("galeria-vazia").textContent = "Ainda não há fotos aqui. Envie as suas!";
}

async function carregarFotos() {
  try {
    const resposta = await fetch(CONFIG.presenca.url + "?acao=fotos");
    const dados = await resposta.json();
    if (!dados.ok) throw new Error(dados.erro);
    fotos = dados.fotos;
    mostrarFotos();
  } catch {
    $("galeria-vazia").textContent = "Não conseguimos carregar as fotos agora. Tente de novo daqui a pouco.";
  }
}

function abrirFoto(i) {
  fotoAtual = (i + fotos.length) % fotos.length;
  const foto = fotos[fotoAtual];
  $("foto-grande").src = endereco(foto.id, 2000);
  $("foto-grande").alt = foto.autor ? "Foto enviada por " + foto.autor : "Foto do casamento";
  $("foto-autor").textContent = foto.autor ? "Enviada por " + foto.autor : "";
  $("foto-baixar").href = "https://drive.google.com/uc?export=download&id=" + encodeURIComponent(foto.id);
  const varias = fotos.length > 1;
  $("foto-anterior").hidden = !varias;
  $("foto-proxima").hidden = !varias;
  if (!$("foto-dialog").open) $("foto-dialog").showModal();
}

// Reduz a foto no próprio celular para o envio ser rápido. O resultado é sempre JPEG.
async function prepararFoto(arquivo) {
  const url = URL.createObjectURL(arquivo);
  try {
    const imagem = new Image();
    imagem.src = url;
    await imagem.decode();
    const escala = Math.min(1, LADO_MAXIMO / Math.max(imagem.naturalWidth, imagem.naturalHeight));
    const tela = document.createElement("canvas");
    tela.width = Math.round(imagem.naturalWidth * escala);
    tela.height = Math.round(imagem.naturalHeight * escala);
    tela.getContext("2d").drawImage(imagem, 0, 0, tela.width, tela.height);
    return tela.toDataURL("image/jpeg", QUALIDADE).split(",")[1];
  } finally {
    URL.revokeObjectURL(url);
  }
}

function mostrarStatus(texto) {
  $("galeria-status").textContent = texto;
  $("galeria-status").hidden = false;
}

async function enviarFotos() {
  const arquivos = [...$("galeria-arquivos").files];
  $("galeria-arquivos").value = "";
  if (!arquivos.length || enviando) return;

  enviando = true;
  $("galeria-escolher").classList.add("desativado");
  let enviadas = 0;
  for (const [i, arquivo] of arquivos.entries()) {
    mostrarStatus("Enviando foto " + (i + 1) + " de " + arquivos.length + "...");
    try {
      // Texto simples evita a checagem prévia do navegador, que o Google não responde.
      const resposta = await fetch(CONFIG.presenca.url, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ tipo: "foto", nome: $("galeria-nome").value, foto: await prepararFoto(arquivo), site: $("galeria-site").value })
      });
      const dados = await resposta.json();
      if (dados.ok) enviadas++;
    } catch {
      // A foto que falhou entra na contagem do aviso final.
    }
  }
  enviando = false;
  $("galeria-escolher").classList.remove("desativado");

  const falhas = arquivos.length - enviadas;
  const total = enviadas === 1 ? "1 foto enviada" : enviadas + " fotos enviadas";
  if (!falhas) mostrarStatus(total + "! Obrigado. Elas aparecem na galeria depois que nós conferirmos.");
  else if (!enviadas) mostrarStatus("Não conseguimos enviar suas fotos. Confira a internet e tente de novo.");
  else mostrarStatus(total + ", mas " + falhas + (falhas === 1 ? " não foi" : " não foram") + ". Tente enviar de novo as que faltaram.");
}

$("galeria-arquivos").addEventListener("change", enviarFotos);
$("foto-anterior").addEventListener("click", () => abrirFoto(fotoAtual - 1));
$("foto-proxima").addEventListener("click", () => abrirFoto(fotoAtual + 1));
$("foto-fechar").addEventListener("click", () => $("foto-dialog").close());
$("foto-dialog").addEventListener("click", (e) => { if (e.target === $("foto-dialog")) $("foto-dialog").close(); });
$("foto-dialog").addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && fotos.length > 1) abrirFoto(fotoAtual - 1);
  if (e.key === "ArrowRight" && fotos.length > 1) abrirFoto(fotoAtual + 1);
});
window.addEventListener("beforeunload", (e) => { if (enviando) e.preventDefault(); });

montarCabecalho();
if (galeriaLiberada()) carregarFotos();
