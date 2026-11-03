/* Formulário de confirmação de presença, salvo na planilha do Google. */
function montarPresenca() {
  const ativo = Boolean(CONFIG.presenca.url);
  $("presenca-busca").hidden = !ativo;
  $("presenca-whatsapp").hidden = ativo;
  if (CONFIG.presenca.prazo) {
    const data = new Date(CONFIG.presenca.prazo + "T12:00:00");
    $("presenca-prazo").textContent = "Pedimos que responda até " + data.toLocaleDateString("pt-BR", { dateStyle: "long" }) + ".";
  }
}

function mostrarErroPresenca(texto) {
  $("presenca-erro").textContent = texto;
  $("presenca-erro").hidden = false;
}

const MENSAGENS_ERRO = {
  ja_respondido: "Este convite já foi respondido. Para alterar, fale com a gente no WhatsApp."
};
const ERRO_GERAL = "Não conseguimos falar com a planilha. Tente de novo ou fale com a gente pelo WhatsApp.";

let conviteAtual = null;

// Texto simples evita a checagem prévia do navegador, que o Google não responde.
async function enviarParaPlanilha(dados) {
  const resposta = await fetch(CONFIG.presenca.url, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(dados)
  });
  return resposta.json();
}

function mostrarErroBusca(texto) {
  $("presenca-busca-erro").textContent = texto;
  $("presenca-busca-erro").hidden = false;
}

const pessoasMarcadas = () => [...$("presenca-pessoas").querySelectorAll("input:checked")].map((caixa) => caixa.value);

function abrirConvite(grupo) {
  conviteAtual = { grupo: grupo.id, nome: $("presenca-nome").value.trim(), final: $("presenca-final").value };
  const area = $("presenca-pessoas");
  area.replaceChildren();
  for (const pessoa of grupo.pessoas) {
    const rotulo = document.createElement("label");
    rotulo.className = "opcao";
    const caixa = document.createElement("input");
    caixa.type = "checkbox";
    caixa.value = pessoa;
    caixa.checked = true;
    rotulo.append(caixa, " " + pessoa);
    area.append(rotulo);
  }
  $("presenca-busca").hidden = true;
  $("presenca-form").hidden = false;
  atualizarComida();
}

function escolherGrupo(grupos) {
  const area = $("presenca-grupos");
  area.replaceChildren();
  const aviso = document.createElement("p");
  aviso.textContent = "Encontramos mais de um convite. Qual é o seu?";
  area.append(aviso);
  for (const grupo of grupos) {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "presenca-grupo";
    botao.textContent = grupo.pessoas.join(", ");
    botao.addEventListener("click", () => {
      if (grupo.respondido) return mostrarErroBusca(MENSAGENS_ERRO.ja_respondido);
      abrirConvite(grupo);
    });
    area.append(botao);
  }
  area.hidden = false;
}

async function buscarConvite(e) {
  e.preventDefault();
  $("presenca-busca-erro").hidden = true;
  $("presenca-grupos").hidden = true;
  const nome = $("presenca-nome").value.trim();
  const final = $("presenca-final").value;
  if (nome.split(/ +/).length < 2) return mostrarErroBusca("Digite seu nome e sobrenome.");
  if (final.length !== 4) return mostrarErroBusca("Digite os 4 últimos números do seu celular.");

  const botao = $("presenca-buscar");
  botao.disabled = true;
  botao.textContent = "Buscando...";
  try {
    const dados = await enviarParaPlanilha({ tipo: "busca", nome, final });
    if (!dados.ok) throw new Error(dados.erro);
    if (dados.grupos.length === 0) mostrarErroBusca("Não encontramos um convite com esses dados. Confira o nome e o celular ou fale com a gente pelo WhatsApp.");
    else if (dados.grupos.length > 1) escolherGrupo(dados.grupos);
    else if (dados.grupos[0].respondido) mostrarErroBusca(MENSAGENS_ERRO.ja_respondido);
    else abrirConvite(dados.grupos[0]);
  } catch {
    mostrarErroBusca(ERRO_GERAL);
  }
  botao.disabled = false;
  botao.textContent = "Buscar meu convite";
}

function voltarParaBusca() {
  $("presenca-form").hidden = true;
  $("presenca-erro").hidden = true;
  $("presenca-grupos").hidden = true;
  $("presenca-busca").hidden = false;
}

function atualizarComida() {
  $("presenca-comida").hidden = pessoasMarcadas().length === 0;
}

async function enviarPresenca(e) {
  e.preventDefault();
  $("presenca-erro").hidden = true;
  const presentes = pessoasMarcadas();

  const botao = $("presenca-enviar");
  botao.disabled = true;
  botao.textContent = "Enviando...";
  try {
    const dados = await enviarParaPlanilha({
      tipo: "convite",
      ...conviteAtual,
      presentes,
      restricoes: $("presenca-restricoes").value,
      mensagem: $("presenca-mensagem").value,
      site: $("presenca-site").value
    });
    if (!dados.ok) throw new Error(dados.erro);
    $("presenca-form").hidden = true;
    $("presenca-sucesso").textContent = presentes.length
      ? "Presença confirmada! Mal podemos esperar para celebrar com vocês."
      : "Resposta recebida. Obrigado por nos avisar, vamos sentir sua falta.";
    $("presenca-sucesso").hidden = false;
  } catch (erro) {
    botao.disabled = false;
    botao.textContent = "Enviar resposta";
    mostrarErroPresenca(MENSAGENS_ERRO[erro.message] || "Não conseguimos salvar sua resposta. Tente de novo ou fale com a gente pelo WhatsApp.");
  }
}

$("presenca-busca").addEventListener("submit", buscarConvite);
$("presenca-form").addEventListener("submit", enviarPresenca);
$("presenca-form").addEventListener("change", atualizarComida);
$("presenca-voltar").addEventListener("click", voltarParaBusca);
$("presenca-final").addEventListener("input", (e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ""); });
montarPresenca();
