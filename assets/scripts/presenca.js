/* Formulário de confirmação de presença, salvo na planilha do Google. */
function montarPresenca() {
  const ativo = Boolean(CONFIG.presenca.url);
  $("presenca-form").hidden = !ativo;
  $("presenca-whatsapp").hidden = ativo;
  if (CONFIG.presenca.prazo) {
    const data = new Date(CONFIG.presenca.prazo + "T12:00:00");
    $("presenca-prazo").textContent = "Pedimos que responda até " + data.toLocaleDateString("pt-BR", { dateStyle: "long" }) + ".";
  }
}

// Devolve o celular no formato (31) 99999-9999, mesmo durante a digitação.
function formatarCelular(valor) {
  let d = valor.replace(/[^0-9]/g, "");
  if (d.length > 11 && d.startsWith("55")) d = d.slice(2);
  d = d.slice(0, 11);
  if (d.length <= 2) return d ? "(" + d : "";
  if (d.length <= 7) return "(" + d.slice(0, 2) + ") " + d.slice(2);
  return "(" + d.slice(0, 2) + ") " + d.slice(2, 7) + "-" + d.slice(7);
}

const celularValido = (valor) => /^[1-9]{2}9[0-9]{8}$/.test(valor.replace(/[^0-9]/g, ""));

function mostrarErroPresenca(texto) {
  $("presenca-erro").textContent = texto;
  $("presenca-erro").hidden = false;
}

const PARENTESCOS = ["Esposa", "Marido", "Filho(a)"];
const MENSAGENS_ERRO = {
  celular_repetido: "Este celular já tem uma confirmação. Para alterar, fale com a gente no WhatsApp.",
  nome_repetido: "Um dos nomes informados já tem uma confirmação. Para alterar, fale com a gente no WhatsApp."
};

function criarAcompanhante(i) {
  const bloco = document.createElement("div");
  bloco.className = "acompanhante";

  const rotuloNome = document.createElement("label");
  rotuloNome.htmlFor = "presenca-acompanhante-" + i;
  rotuloNome.textContent = "Nome do acompanhante " + i;
  const nome = document.createElement("input");
  nome.id = "presenca-acompanhante-" + i;
  nome.maxLength = 100;
  nome.autocomplete = "off";
  rotuloNome.append(nome);

  const rotuloGrau = document.createElement("label");
  rotuloGrau.htmlFor = "presenca-parentesco-" + i;
  rotuloGrau.textContent = "Grau de parentesco";
  const grau = document.createElement("select");
  grau.id = "presenca-parentesco-" + i;
  grau.append(new Option("Selecione", ""));
  for (const opcao of PARENTESCOS) grau.append(new Option(opcao, opcao));
  rotuloGrau.append(grau);

  bloco.append(rotuloNome, rotuloGrau);
  return bloco;
}

// Mostra os campos de cada acompanhante e mantém o que já foi digitado.
function montarAcompanhantes() {
  const vai = document.querySelector('input[name="comparecer"]:checked')?.value === "sim";
  const quantos = Number($("presenca-quantos").value);
  const total = vai && Number.isInteger(quantos) ? Math.min(Math.max(quantos, 0), 9) : 0;
  const area = $("presenca-acompanhantes");
  area.hidden = total === 0;
  const blocos = () => area.querySelectorAll(".acompanhante");
  while (blocos().length > total) blocos()[blocos().length - 1].remove();
  for (let i = blocos().length + 1; i <= total; i++) area.append(criarAcompanhante(i));
}

function atualizarPessoas() {
  const vai = document.querySelector('input[name="comparecer"]:checked')?.value === "sim";
  $("presenca-pessoas").hidden = !vai;
  $("presenca-comida").hidden = !vai;
  montarAcompanhantes();
}

async function enviarPresenca(e) {
  e.preventDefault();
  $("presenca-erro").hidden = true;
  const nome = $("presenca-nome").value.trim();
  const celular = formatarCelular($("presenca-celular").value);
  const comparecer = document.querySelector('input[name="comparecer"]:checked')?.value;
  const quantos = Number($("presenca-quantos").value);
  if (nome.length < 2) return mostrarErroPresenca("Digite seu nome.");
  if (!celularValido(celular)) return mostrarErroPresenca("Digite um celular com DDD, por exemplo (31) 99999-9999.");
  if (!comparecer) return mostrarErroPresenca("Conte para a gente se você vai comparecer.");
  if (comparecer === "sim" && !(Number.isInteger(quantos) && quantos >= 0 && quantos <= 9)) {
    return mostrarErroPresenca("Informe quantos acompanhantes vêm com você, de 0 a 9.");
  }
  const acompanhantes = comparecer === "sim"
    ? [...$("presenca-acompanhantes").querySelectorAll(".acompanhante")].map((bloco) => ({
        nome: bloco.querySelector("input").value.trim(),
        parentesco: bloco.querySelector("select").value
      }))
    : [];
  if (acompanhantes.some((pessoa) => pessoa.nome.length < 2)) {
    return mostrarErroPresenca("Digite o nome de cada acompanhante.");
  }
  if (acompanhantes.some((pessoa) => !pessoa.parentesco)) {
    return mostrarErroPresenca("Selecione o grau de parentesco de cada acompanhante.");
  }

  const botao = $("presenca-enviar");
  botao.disabled = true;
  botao.textContent = "Enviando...";
  try {
    // Texto simples evita a checagem prévia do navegador, que o Google não responde.
    const resposta = await fetch(CONFIG.presenca.url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        nome,
        celular,
        comparecer,
        pessoas: comparecer === "sim" ? quantos + 1 : 0,
        acompanhantes,
        restricoes: $("presenca-restricoes").value,
        mensagem: $("presenca-mensagem").value,
        site: $("presenca-site").value
      })
    });
    const dados = await resposta.json();
    if (!dados.ok) throw new Error(dados.erro);
    $("presenca-form").hidden = true;
    $("presenca-sucesso").textContent = comparecer === "sim"
      ? "Presença confirmada! Mal podemos esperar para celebrar com você."
      : "Resposta recebida. Obrigado por nos avisar, vamos sentir sua falta.";
    $("presenca-sucesso").hidden = false;
  } catch (erro) {
    botao.disabled = false;
    botao.textContent = "Enviar resposta";
    mostrarErroPresenca(MENSAGENS_ERRO[erro.message] || "Não conseguimos salvar sua resposta. Tente de novo ou fale com a gente pelo WhatsApp.");
  }
}

$("presenca-form").addEventListener("submit", enviarPresenca);
$("presenca-form").addEventListener("change", atualizarPessoas);
$("presenca-quantos").addEventListener("input", montarAcompanhantes);
$("presenca-celular").addEventListener("input", (e) => { e.target.value = formatarCelular(e.target.value); });
montarPresenca();
