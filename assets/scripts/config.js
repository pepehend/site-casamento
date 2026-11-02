/* Dados do casamento, usados em todas as páginas. Edite aqui. */
const CONFIG = {
  noivos: ["Pedro", "Ana Clara"],
  data: "2027-05-22",
  local: "Três Marias, MG",
  evento: {
    nome: "Recanto das Palmeiras",
    endereco: "BR-040, 283 - nº 156 - Chácara Paraíso, Três Marias - MG, 39205-000", // completo, com a cidade
    horario: "15h30"
  },
  agenda: {
    inicio: "20270522T183000Z", // 15h30 em Brasília, em UTC
    fim: "20270523T020000Z",    // 23h em Brasília. O arquivo assets/casamento.ics tem os mesmos horários
    detalhes: "Cerimônia às 15h30, recepção logo após, no mesmo local, e jantar às 19h."
  },
  programacao: [
    { hora: "15h30", titulo: "Cerimônia", nota: "O momento mais esperado do dia." },
    { hora: "Logo após", titulo: "Recepção", nota: "No mesmo local, assim que a cerimônia terminar." },
    { hora: "19h", titulo: "Jantar", nota: "Vamos à mesa para celebrar juntos." }
  ],
  // Arquivos dentro de assets/img. "foco" define o que aparece quando a foto é cortada.
  fotos: [
    { arquivo: "foto-1.jpg", foco: "50% 43%", descricao: "Pedro e Ana Clara abraçados, olhando um para o outro" },
    { arquivo: "foto-2.jpg", foco: "50% 33%", descricao: "Pedro e Ana Clara sorrindo, com a aliança na mão dela" },
    { arquivo: "foto-3.jpg", foco: "50% 26%", descricao: "Pedro e Ana Clara com o buquê, atrás de um bolo branco" }
  ],
  presenca: {
    url: "https://script.google.com/macros/s/AKfycbzFPQ_y6P9YhNXHReLSt5rQ99y9OVlUYeMVqbc9-eXCy3tH6wQVOzExCgYPQQNznPY/exec", // endereço do Apps Script. Vazio mostra o botão do WhatsApp
    prazo: "2027-02-28" // data limite para responder
  },
  // {prazo} é trocado pela data limite de confirmação.
  perguntas: [
    { pergunta: "Crianças são bem-vindas?", resposta: "Sim! As crianças são muito bem-vindas." },
    { pergunta: "Posso levar um acompanhante?", resposta: "Sim, desde que seja sua esposa, seu marido ou seu filho." },
    { pergunta: "Qual é o traje?", resposta: "Sinta-se à vontade para escolher o que vestir. O importante é todos saírem bonitos nas fotos." },
    { pergunta: "Tem estacionamento?", resposta: "Sim, temos estacionamento logo em frente ao espaço." },
    { pergunta: "A festa é em lugar aberto ou fechado?", resposta: "Os dois, no mesmo espaço: a cerimônia será na área aberta, e a recepção e o jantar, na área fechada." },
    { pergunta: "E se chover?", resposta: "A previsão não indica chuvas nessa época. Mas, se chover, acho que vamos nos molhar um pouco." },
    { pergunta: "Até quando posso confirmar presença?", resposta: "Até {prazo}, pelo formulário nesta página." },
    { pergunta: "Posso alterar minha resposta?", resposta: "Sim. Cada celular e cada nome podem ser confirmados uma vez, então fale com a gente pelo WhatsApp para fazer a alteração." },
    { pergunta: "Como funciona a lista de presentes?", resposta: "Escolha um item da lista ou digite o valor que preferir. O pagamento é feito na página da InfinitePay, e o valor chega em dinheiro para os noivos." }
  ],
  contatos: [
    { nome: "Pedro", numero: "(31) 97365-8367", whatsapp: "5531973658367" },
    { nome: "Ana Clara", numero: "(38) 98859-9611", whatsapp: "5538988599611" }
  ],
  titular: "Pedro Henrique Santos da Silva", // nome que aparece na página da InfinitePay
  whatsapp: "5531973658367",   // recebe os recados da lista de presentes, com DDI e DDD
  infinitepayTag: "eupedrohss" // InfiniteTag sem o $
};
