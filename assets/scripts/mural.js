/* Mural de recados. Cada recado só aparece depois da aprovação dos noivos na planilha. */
function mostrarRecados(recados) {
  const lista = $("mural-lista");
  lista.replaceChildren();
  for (const item of recados) {
    const bloco = document.createElement("li");
    const texto = document.createElement("p");
    texto.textContent = item.recado;
    const nome = document.createElement("strong");
    nome.textContent = item.nome;
    bloco.append(texto, nome);
    lista.append(bloco);
  }
  $("mural-vazio").hidden = recados.length > 0;
}

async function carregarRecados() {
  try {
    const resposta = await fetch(CONFIG.presenca.url + "?acao=recados");
    const dados = await resposta.json();
    mostrarRecados(Array.isArray(dados.recados) ? dados.recados : []);
  } catch {
    $("mural-vazio").textContent = "Não conseguimos carregar os recados agora.";
  }
}

async function enviarRecado(e) {
  e.preventDefault();
  $("mural-erro").hidden = true;
  const nome = $("mural-nome").value.trim();
  const recado = $("mural-recado").value.trim();
  if (nome.length < 2 || recado.length < 2) {
    $("mural-erro").textContent = "Preencha seu nome e o recado.";
    $("mural-erro").hidden = false;
    return;
  }

  const botao = $("mural-enviar");
  botao.disabled = true;
  botao.textContent = "Enviando...";
  try {
    const resposta = await fetch(CONFIG.presenca.url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ tipo: "recado", nome, recado, site: $("mural-site").value })
    });
    const dados = await resposta.json();
    if (!dados.ok) throw new Error(dados.erro);
    $("mural-form").hidden = true;
    $("mural-sucesso").hidden = false;
  } catch {
    botao.disabled = false;
    botao.textContent = "Enviar recado";
    $("mural-erro").textContent = "Não conseguimos enviar seu recado. Tente de novo em instantes.";
    $("mural-erro").hidden = false;
  }
}

$("mural-form").addEventListener("submit", enviarRecado);
carregarRecados();
