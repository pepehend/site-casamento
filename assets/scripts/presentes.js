const GRUPOS = [
  { titulo: "Para a cozinha", curto: "Cozinha", itens: [
    { id: "PANELAS", nome: "Jogo de panelas", nota: "Para aprender a cozinhar de verdade.", valor: 520 },
    { id: "PANELAPRESSAO", nome: "Panela de pressão", nota: "O chiado oficial do almoço de domingo.", valor: 180 },
    { id: "FRIGIDEIRAS", nome: "Jogo de frigideiras", nota: "Para o ovo não grudar e a paz reinar.", valor: 220 },
    { id: "JANTAR6", nome: "Aparelho de jantar", nota: "Para quando a família inteira aparecer.", valor: 450 },
    { id: "FAQUEIRO", nome: "Faqueiro completo", nota: "Com garfo suficiente para as visitas.", valor: 280 },
    { id: "TACAS", nome: "Jogo de taças", nota: "Para brindar até em dia de semana.", valor: 120 },
    { id: "COPOS", nome: "Jogo de copos", nota: "Os que vão sobreviver às primeiras quedas.", valor: 80 },
    { id: "FACAS", nome: "Jogo de facas", nota: "Afiadas, ao contrário das nossas piadas.", valor: 180 },
    { id: "ASSADEIRAS", nome: "Jogo de assadeiras", nota: "Bolo, lasanha e muitas tentativas.", valor: 130 },
    { id: "POTES", nome: "Potes herméticos", nota: "Com tampa que serve. Dessa vez, juramos.", valor: 120 },
    { id: "TRAVESSAS", nome: "Travessas de servir", nota: "Porque a comida também quer aparecer bem.", valor: 150 },
    { id: "UTENSILIOS", nome: "Kit de utensílios", nota: "Espátula, concha e colher de pau.", valor: 100 }
  ]},
  { titulo: "Eletrodomésticos", curto: "Eletrodomésticos", itens: [
    { id: "GELADEIRA", nome: "Geladeira", nota: "Para guardar as sobras da festa.", valor: 2800 },
    { id: "FOGAO", nome: "Fogão", nota: "O palco das nossas aventuras na cozinha.", valor: 1000 },
    { id: "MAQLAVAR", nome: "Máquina de lavar", nota: "Roupa suja se lava em casa, e nela.", valor: 2300 },
    { id: "LAVALOUCAS", nome: "Lava-louças", nota: "Encerra a maior disputa do casamento.", valor: 2700 },
    { id: "MICROONDAS", nome: "Micro-ondas", nota: "O verdadeiro chef da casa nos primeiros meses.", valor: 800 },
    { id: "FORNO", nome: "Forno elétrico", nota: "Para a pizza caseira que vai dar certo um dia.", valor: 500 },
    { id: "DEPURADOR", nome: "Depurador de ar", nota: "Para a casa não ficar com cheiro de fritura.", valor: 500 },
    { id: "FREEZER", nome: "Freezer", nota: "Espaço para as marmitas das mães.", valor: 2300 },
    { id: "ARCONDICIONADO", nome: "Ar-condicionado", nota: "Quando o assunto é temperatura, nunca há consenso.", valor: 2300 },
    { id: "PURIFICADOR", nome: "Purificador de água", nota: "Hidratação para aguentar a vida a dois.", valor: 600 }
  ]},
  { titulo: "Eletroportáteis", curto: "Eletroportáteis", itens: [
    { id: "AIRFRYER", nome: "Air fryer", nota: "Porque ninguém aqui sabe fritar sem fazer sujeira.", valor: 400 },
    { id: "CAFETEIRA", nome: "Cafeteira", nota: "Item essencial para a paz do casal.", valor: 200 },
    { id: "LIQUIDIFICADOR", nome: "Liquidificador", nota: "Da vitamina da manhã à caipirinha da noite.", valor: 180 },
    { id: "BATEDEIRA", nome: "Batedeira", nota: "Para o bolo de aniversário ser feito em casa.", valor: 430 },
    { id: "MIXER", nome: "Mixer", nota: "Sopa cremosa sem sujar a cozinha inteira.", valor: 180 },
    { id: "SANDUICHEIRA", nome: "Sanduicheira", nota: "O jantar oficial de quinta-feira.", valor: 120 },
    { id: "PROCESSADOR", nome: "Processador de alimentos", nota: "Para fingir que temos um sous-chef.", valor: 280 },
    { id: "PANELAARROZ", nome: "Panela elétrica de arroz", nota: "Arroz soltinho sem precisar de reza.", valor: 180 },
    { id: "FERRO", nome: "Ferro de passar", nota: "Para a camisa da segunda-feira.", valor: 160 },
    { id: "ESPREMEDOR", nome: "Espremedor de frutas", nota: "Suco de laranja de hotel, só que em casa.", valor: 110 },
    { id: "CHALEIRA", nome: "Chaleira elétrica", nota: "Chá, café coado e miojo de emergência.", valor: 140 },
    { id: "GRILL", nome: "Grill elétrico", nota: "Churrasco possível mesmo em dia de chuva.", valor: 220 }
  ]},
  { titulo: "Para a sala e o quarto", curto: "Sala e quarto", itens: [
    { id: "SOFA", nome: "Sofá onde cabem os dois", nota: "E as visitas, se forem embora cedo.", valor: 1900 },
    { id: "TV", nome: "Smart TV", nota: "Para a disputa pelo controle fazer sentido.", valor: 2500 },
    { id: "RACK", nome: "Rack para a sala", nota: "Porque a TV não vai ficar no chão.", valor: 500 },
    { id: "MESACENTRO", nome: "Mesa de centro", nota: "O lugar oficial de apoiar a pipoca.", valor: 350 },
    { id: "TAPETE", nome: "Tapete para a sala", nota: "Para deixar a casa com cara de lar.", valor: 400 },
    { id: "CORTINAS", nome: "Cortinas", nota: "Para dormir até mais tarde no domingo.", valor: 300 },
    { id: "CAMA", nome: "Cama box de casal", nota: "O melhor investimento do casamento.", valor: 1500 },
    { id: "GUARDAROUPA", nome: "Guarda-roupa", nota: "A divisão do espaço será justa. Ou quase.", valor: 1700 },
    { id: "CRIADOS", nome: "Par de criados-mudos", nota: "Um para cada lado, para evitar conflitos.", valor: 400 },
    { id: "ESPELHO", nome: "Espelho grande", nota: "Para a pergunta diária: esta roupa está boa?", valor: 350 }
  ]},
  { titulo: "Cama, mesa e banho", curto: "Cama, mesa e banho", itens: [
    { id: "ROUPACAMA", nome: "Jogo de cama", nota: "Cada um com seu lado, em teoria.", valor: 350 },
    { id: "EDREDOM", nome: "Edredom", nota: "Com tamanho para ninguém roubar a coberta.", valor: 250 },
    { id: "TRAVESSEIROS", nome: "Par de travesseiros", nota: "Um macio e um firme, cada um com sua razão.", valor: 150 },
    { id: "MANTA", nome: "Manta para o sofá", nota: "Para o filme de sexta-feira.", valor: 130 },
    { id: "COBRELEITO", nome: "Cobre-leito", nota: "Para a cama ficar arrumada, de vez em quando.", valor: 250 },
    { id: "TOALHASBANHO", nome: "Jogo de toalhas de banho", nota: "Nenhuma delas vai ficar no chão. Prometemos.", valor: 200 },
    { id: "ROUPOES", nome: "Par de roupões", nota: "Spa em casa, com direito a chinelo.", valor: 280 },
    { id: "TAPETEBANHO", nome: "Tapetes para o banheiro", nota: "Combinando, para impressionar as visitas.", valor: 80 },
    { id: "TOALHAMESA", nome: "Toalha de mesa", nota: "Para o primeiro almoço em família.", valor: 120 },
    { id: "JOGOAMERICANO", nome: "Jogo americano", nota: "Para jantar como gente grande.", valor: 90 }
  ]},
  { titulo: "Limpeza e organização", curto: "Limpeza", itens: [
    { id: "ASPIRADOR", nome: "Aspirador robô", nota: "Encerra a discussão sobre quem varre.", valor: 1700 },
    { id: "VERTICAL", nome: "Aspirador vertical", nota: "Para o que o robô se recusa a limpar.", valor: 400 },
    { id: "VAPOR", nome: "Limpador a vapor", nota: "Faxina com cara de tecnologia.", valor: 400 },
    { id: "MOP", nome: "Mop giratório", nota: "O chão agradece.", valor: 120 },
    { id: "VARAL", nome: "Varal de chão", nota: "O enfeite oficial de todo apartamento.", valor: 150 },
    { id: "CESTOS", nome: "Cestos de roupa", nota: "Para a roupa suja chegar ao lugar certo.", valor: 100 },
    { id: "ORGANIZADORES", nome: "Caixas organizadoras", nota: "Um lugar para cada coisa, por uma semana.", valor: 130 },
    { id: "FERRAMENTAS", nome: "Caixa de ferramentas", nota: "Para o noivo jurar que sabe consertar.", valor: 220 }
  ]},
  { titulo: "Para os noivos", curto: "Noivos", itens: [
    { id: "SPA", nome: "Spa da noiva pós-organização", nota: "Depois de meses de planilha, ela merece.", valor: 400 },
    { id: "DANCA", nome: "Aulas de dança para o noivo", nota: "Pelo bem da primeira valsa.", valor: 350 },
    { id: "PERFUMES", nome: "Perfumes para os noivos", nota: "Para o dia a dia ficar com cheiro de festa.", valor: 500 },
    { id: "CURSOCOZINHA", nome: "Curso de culinária para o casal", nota: "Para o cardápio ir além do macarrão.", valor: 300 },
    { id: "CHURRASCO", nome: "Kit churrasco", nota: "Para o noivo assumir a churrasqueira.", valor: 200 },
    { id: "VINHOS", nome: "Caixa de vinhos", nota: "Reservada para os aniversários de casamento.", valor: 300 },
    { id: "CUECAS", nome: "Kit de cuecas novas para o noivo", nota: "Uma nova fase pede novos começos.", valor: 180, brincadeira: true },
    { id: "MAQUIAGEM", nome: "Maquiagem à prova de choro", nota: "Porque a emoção vai ser grande.", valor: 200, brincadeira: true },
    { id: "CHORO", nome: "Seguro contra choro no altar", nota: "Cobre lenços para os dois lados.", valor: 130, brincadeira: true },
    { id: "SONECA", nome: "Vale-soneca depois da festa", nota: "Válido por um domingo inteiro.", valor: 120, brincadeira: true }
  ]},
  { titulo: "Lua de mel", curto: "Lua de mel", itens: [
    { id: "PASSAGEM", nome: "Cota das passagens", nota: "Um empurrãozinho para a viagem acontecer.", valor: 1200 },
    { id: "DIARIA", nome: "Diária de hotel", nota: "Prometemos mandar foto.", valor: 600 },
    { id: "CAMERA", nome: "Câmera instantânea", nota: "Para as fotos irem direto para a geladeira.", valor: 600 },
    { id: "MALA", nome: "Mala extra para as lembrancinhas", nota: "Vamos trazer ímã de geladeira para todo mundo.", valor: 350 },
    { id: "JANTARLUA", nome: "Jantar à luz de velas", nota: "Com sobremesa para dividir.", valor: 350 },
    { id: "PASSEIO", nome: "Passeio de barco", nota: "Enjoo por nossa conta.", valor: 250 },
    { id: "SEGUROVIAGEM", nome: "Seguro-viagem", nota: "Para o noivo poder testar a canoa furada.", valor: 150 },
    { id: "CAFECAMA", nome: "Café da manhã na cama", nota: "Sem ninguém precisar levantar.", valor: 250, brincadeira: true },
    { id: "PROTETOR", nome: "Protetor solar para o noivo", nota: "Para ele não voltar da cor de um camarão.", valor: 120, brincadeira: true },
    { id: "GUARDACHUVA", nome: "Drink com guarda-chuvinha", nota: "A foto vai direto para o grupo da família.", valor: 180, brincadeira: true }
  ]},
  { titulo: "Na festa", curto: "Festa", itens: [
    { id: "FILADRINKS", nome: "Prioridade na fila dos drinks", nota: "Você passa na frente. Com elegância.", valor: 450, brincadeira: true },
    { id: "DJ", nome: "Escolher a próxima música do DJ", nota: "Sertanejo de sofrência incluso.", valor: 380, brincadeira: true },
    { id: "PRIMEIROJANTAR", nome: "Primeiro da fila do jantar", nota: "Enquanto os outros só olham.", valor: 430, brincadeira: true },
    { id: "MESATIA", nome: "Mesa longe da tia dos palpites", nota: "\"E os filhos, quando vêm?\" não chega até você.", valor: 400, brincadeira: true },
    { id: "MICROFONE", nome: "Microfone longe do padrinho", nota: "Para o discurso não virar palestra.", valor: 300, brincadeira: true },
    { id: "BUQUE", nome: "Lugar garantido na disputa do buquê", nota: "Cotoveladas não estão cobertas.", valor: 320, brincadeira: true },
    { id: "FOTOABERTA", nome: "Foto de olhos abertos", nota: "Repetimos quantas vezes for preciso.", valor: 220, brincadeira: true },
    { id: "BEMCASADO", nome: "Bem-casado extra para a bolsa", nota: "Ninguém vai ver. Prometemos.", valor: 150, brincadeira: true },
    { id: "BISBOLO", nome: "Bis do bolo", nota: "A segunda fatia não conta.", valor: 160, brincadeira: true },
    { id: "PISTA", nome: "Lugar garantido na pista de dança", nota: "Mesmo para quem só dança de um lado para o outro.", valor: 280, brincadeira: true }
  ]},
  { titulo: "Para o casamento durar", curto: "Casamento durar", itens: [
    { id: "CONTROLE", nome: "Posse do controle da TV", nota: "Vale por um ano inteiro.", valor: 350, brincadeira: true },
    { id: "TERRAZAO", nome: "Direito de ter razão uma vez", nota: "Usar com sabedoria.", valor: 380, brincadeira: true },
    { id: "LOUCA", nome: "Folga da louça", nota: "Uma semana sem lavar prato.", valor: 250, brincadeira: true },
    { id: "PIZZA", nome: "Fundo da pizza de domingo", nota: "Sustenta o casamento em dias difíceis.", valor: 190, brincadeira: true },
    { id: "FLORES", nome: "Fundo do pedido de desculpas", nota: "Flores de emergência para a primeira discussão.", valor: 180, brincadeira: true },
    { id: "FAXINA", nome: "Imunidade no dia da faxina", nota: "Válida por um sábado.", valor: 260, brincadeira: true },
    { id: "LADOCAMA", nome: "Lado preferido da cama", nota: "Negociado uma única vez na vida.", valor: 240, brincadeira: true },
    { id: "FILME", nome: "Escolher o filme por um mês", nota: "Sem revirar os olhos.", valor: 200, brincadeira: true },
    { id: "ULTIMOPEDACO", nome: "Direito ao último pedaço", nota: "Sem precisar perguntar se alguém quer.", valor: 140, brincadeira: true },
    { id: "SENHA", nome: "Senha do streaming compartilhada", nota: "Sem espiar o que o outro assiste.", valor: 120, brincadeira: true }
  ]}
];

const moeda = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const $ = (id) => document.getElementById(id);
let atual = null;
let categoriaAtual = "Todos";
const presentes = [];
const secoes = [];

// A busca ignora maiúsculas e acentos.
const normalizar = (texto) => texto.normalize("NFD").replace(/[̀-ͯ]/g, "").trim().toLowerCase();

function montarCabecalho() {
  const data = new Date(CONFIG.data + "T12:00:00");
  $("quando").textContent = data.toLocaleDateString("pt-BR", { dateStyle: "long" }) + " · " + CONFIG.local;
  const lista = document.createElement("p");
  lista.textContent = "Lista de presentes de " + CONFIG.noivos.join(" e ");
  const aviso = document.createElement("p");
  aviso.textContent = "Os pagamentos são feitos na página da InfinitePay; este site não recebe nem guarda dados de pagamento.";
  $("rodape").append(lista, aviso);
  $("obrigado").hidden = !new URLSearchParams(location.search).has("obrigado");
  if (CONFIG.whatsapp) {
    const texto = "Oi! Acabei de enviar um presente para vocês. Felicidades!";
    $("recado").href = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(texto);
    $("recado").hidden = false;
  }
}

function montarLista() {
  for (const grupo of GRUPOS) {
    const sec = document.createElement("div");
    sec.className = "grupo";
    secoes.push(sec);
    const h2 = document.createElement("h2");
    h2.textContent = grupo.titulo;
    const ul = document.createElement("ul");
    ul.className = "gifts";
    for (const item of grupo.itens) {
      const li = document.createElement("li");
      li.className = "gift";
      const h3 = document.createElement("h3");
      h3.textContent = item.nome;
      const p = document.createElement("p");
      p.textContent = item.nota;
      const acao = document.createElement("div");
      acao.className = "gift-action";
      const v = document.createElement("span");
      v.className = "valor";
      v.textContent = moeda.format(item.valor);
      const b = document.createElement("button");
      b.className = "btn";
      b.type = "button";
      b.textContent = "Presentear";
      b.setAttribute("aria-label", "Presentear: " + item.nome);
      b.addEventListener("click", () => abrirPagamento(item.nome, item.valor, item.id));
      acao.append(v, b);
      li.append(h3, p, acao);
      presentes.push({
        li,
        secao: sec,
        categoria: grupo.titulo,
        brincadeira: Boolean(item.brincadeira),
        texto: normalizar(item.nome + " " + item.nota + " " + grupo.titulo)
      });
      ul.append(li);
    }
    sec.append(h2, ul);
    $("lista").append(sec);
  }
}

function criarAtalho(valor, rotulo) {
  const botao = document.createElement("button");
  botao.className = "chip";
  botao.type = "button";
  botao.textContent = rotulo;
  botao.dataset.valor = valor;
  botao.setAttribute("aria-pressed", valor === categoriaAtual);
  botao.addEventListener("click", () => {
    categoriaAtual = valor;
    document.querySelectorAll(".chip").forEach((chip) => chip.setAttribute("aria-pressed", chip.dataset.valor === valor));
    filtrarPresentes();
  });
  return botao;
}

function montarFiltros() {
  $("atalhos").append(
    criarAtalho("Todos", "Todos"),
    ...GRUPOS.map((grupo) => criarAtalho(grupo.titulo, grupo.curto)),
    criarAtalho("Brincadeiras", "Brincadeiras")
  );
}

function filtrarPresentes() {
  const termo = normalizar($("busca").value);
  const comPresente = new Set();
  let total = 0;
  for (const presente of presentes) {
    const naCategoria = categoriaAtual === "Todos"
      || (categoriaAtual === "Brincadeiras" ? presente.brincadeira : presente.categoria === categoriaAtual);
    const aparece = naCategoria && presente.texto.includes(termo);
    presente.li.hidden = !aparece;
    if (aparece) {
      total++;
      comPresente.add(presente.secao);
    }
  }
  for (const secao of secoes) secao.hidden = !comPresente.has(secao);
  $("contagem").textContent = total === 1 ? "1 presente" : total + " presentes";
  $("sem-resultado").hidden = total > 0;
}

function abrirPagamento(nome, valor, txid) {
  $("pay-nome").textContent = nome;
  $("pay-valor").textContent = moeda.format(valor);
  $("pay-conferir").textContent = "Você será levado à página da InfinitePay para pagar. O destinatário é " + CONFIG.titular + ".";
  atual = { nome, valor, txid };
  $("pagar-botao").disabled = false;
  $("pagar-botao").textContent = "Ir para o pagamento";
  $("pay-erro").hidden = true;
  $("pagar").showModal();
}

// Cria o link de pagamento na hora, com o valor do presente, e leva o convidado até ele.
async function irParaPagamento() {
  const botao = $("pagar-botao");
  botao.disabled = true;
  botao.textContent = "Abrindo pagamento...";
  $("pay-erro").hidden = true;
  try {
    const resposta = await fetch("https://api.checkout.infinitepay.io/links", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        handle: CONFIG.infinitepayTag,
        items: [{ description: atual.nome, price: Math.round(atual.valor * 100), quantity: 1 }],
        order_nsu: atual.txid + "-" + Date.now(),
        redirect_url: location.origin + location.pathname + "?obrigado=1"
      })
    });
    const dados = await resposta.json();
    if (!resposta.ok || !dados.url) throw new Error("sem link");
    location.href = dados.url;
  } catch {
    botao.disabled = false;
    botao.textContent = "Ir para o pagamento";
    $("pay-erro").hidden = false;
  }
}

$("busca").addEventListener("input", filtrarPresentes);
$("limpar-filtros").addEventListener("click", () => {
  $("busca").value = "";
  document.querySelector('.chip[data-valor="Todos"]').click();
});
$("pagar-botao").addEventListener("click", irParaPagamento);

$("fechar").addEventListener("click", () => $("pagar").close());
$("pagar").addEventListener("click", (e) => { if (e.target === $("pagar")) $("pagar").close(); });

$("livre-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const bruto = $("livre-valor").value.trim().replace(/[R$\s]/g, "").replace(/\.(?=\d{3}(\D|$))/g, "").replace(",", ".");
  const valor = Number(bruto);
  const erro = $("livre-erro");
  if (!bruto || !Number.isFinite(valor) || valor < 1) {
    erro.textContent = "Digite um valor a partir de R$ 1,00, por exemplo 150,00.";
    erro.hidden = false;
    return;
  }
  erro.hidden = true;
  abrirPagamento("Presente livre", Math.round(valor * 100) / 100, "LIVRE");
});

montarCabecalho();
montarLista();
montarFiltros();
filtrarPresentes();
