const $ = (id) => document.getElementById(id);

function montarCabecalho() {
  const data = new Date(CONFIG.data + "T12:00:00");
  $("quando").textContent = data.toLocaleDateString("pt-BR", { dateStyle: "long" }) + " · " + CONFIG.local;
  const h1 = $("noivos");
  h1.append(CONFIG.noivos[0] + " ");
  const e = document.createElement("em");
  e.textContent = "&";
  h1.append(e, " " + CONFIG.noivos[1]);

  const hoje = new Date();
  hoje.setHours(12, 0, 0, 0);
  const dias = Math.round((data - hoje) / 86400000);
  $("faltam").hidden = dias < 1;
  $("faltam").textContent = dias === 1 ? "Falta 1 dia" : "Faltam " + dias.toLocaleString("pt-BR") + " dias";
}

function montarProgramacao() {
  for (const etapa of CONFIG.programacao) {
    const item = document.createElement("li");
    const hora = document.createElement("b");
    hora.textContent = etapa.hora;
    const titulo = document.createElement("strong");
    titulo.textContent = etapa.titulo;
    const nota = document.createElement("span");
    nota.textContent = etapa.nota;
    item.append(hora, titulo, nota);
    $("programa").append(item);
  }
}

function montarFotos() {
  for (const foto of CONFIG.fotos) {
    const moldura = document.createElement("figure");
    moldura.className = "foto";
    const img = document.createElement("img");
    img.alt = foto.descricao;
    img.style.objectPosition = foto.foco;
    img.loading = "lazy";
    // Enquanto a foto não estiver em assets/img, a moldura mostra um aviso.
    img.addEventListener("error", () => {
      moldura.classList.add("vazia");
      moldura.textContent = "Foto em breve";
    });
    img.src = "assets/img/" + foto.arquivo;
    moldura.append(img);
    $("fotos").append(moldura);
  }
}

// No celular, tenta abrir o aplicativo. Sem ele, o evento abre no site do Google Agenda.
function linkGoogleAgenda(evento, navegador) {
  const site = "https://calendar.google.com/calendar/render?" + evento;
  if (/Android/i.test(navegador)) {
    return "intent://www.google.com/calendar/event?" + evento
      + "#Intent;scheme=https;package=com.google.android.calendar;S.browser_fallback_url="
      + encodeURIComponent(site) + ";end";
  }
  if (/iPhone|iPad|iPod/i.test(navegador)) return "https://calendar.google.com/calendar/event?" + evento;
  return site;
}

function montarLocal() {
  const { nome, endereco, horario } = CONFIG.evento;
  const busca = endereco ? [nome, endereco].filter(Boolean).join(", ") : CONFIG.local;
  const data = new Date(CONFIG.data + "T12:00:00");
  $("local-data").textContent = data.toLocaleDateString("pt-BR", { weekday: "long", dateStyle: undefined, day: "numeric", month: "long", year: "numeric" });
  $("local-horario").textContent = horario || "Em breve";
  $("local-nome").textContent = nome || CONFIG.local;
  $("local-endereco").textContent = endereco || "Endereço completo em breve";
  const q = encodeURIComponent(busca);
  $("mapa").src = "https://www.google.com/maps?q=" + q + "&output=embed";
  $("abrir-maps").href = "https://www.google.com/maps/search/?api=1&query=" + q;
  $("abrir-waze").href = "https://waze.com/ul?q=" + q + "&navigate=yes";
  const evento = new URLSearchParams({
    action: "TEMPLATE",
    text: "Casamento de " + CONFIG.noivos.join(" e "),
    dates: CONFIG.agenda.inicio + "/" + CONFIG.agenda.fim,
    details: CONFIG.agenda.detalhes,
    location: busca
  });
  $("agenda-google").href = linkGoogleAgenda(evento, navigator.userAgent);
  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) $("agenda-google").removeAttribute("target");
}

function montarPerguntas() {
  const prazo = new Date(CONFIG.presenca.prazo + "T12:00:00").toLocaleDateString("pt-BR", { dateStyle: "long" });
  for (const item of CONFIG.perguntas) {
    const bloco = document.createElement("details");
    const pergunta = document.createElement("summary");
    pergunta.textContent = item.pergunta;
    const resposta = document.createElement("p");
    resposta.textContent = item.resposta.replace("{prazo}", prazo);
    bloco.append(pergunta, resposta);
    $("perguntas").append(bloco);
  }
}

function montarContato() {
  for (const pessoa of CONFIG.contatos) {
    const texto = "Oi, " + pessoa.nome + "! Tenho uma dúvida sobre o casamento.";
    const bloco = document.createElement("div");
    bloco.className = "contato-pessoa";
    const link = document.createElement("a");
    link.className = "btn";
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "Falar com " + pessoa.nome + " no WhatsApp";
    link.href = "https://wa.me/" + pessoa.whatsapp + "?text=" + encodeURIComponent(texto);
    const numero = document.createElement("span");
    numero.className = "valor";
    numero.textContent = pessoa.numero;
    bloco.append(link, numero);
    $("contatos").append(bloco);
  }
  $("rodape").textContent = CONFIG.noivos.join(" e ") + " · " + CONFIG.local;
}

montarCabecalho();
montarProgramacao();
montarFotos();
montarLocal();
montarPerguntas();
montarContato();
