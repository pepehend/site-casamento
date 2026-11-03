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
    fim: "20270523T025900Z",    // 23h59 em Brasília, só porque a agenda exige um fim. O arquivo assets/casamento.ics tem os mesmos horários
    detalhes: "Cerimônia às 15h30, recepção logo após, no mesmo local, jantar às 19h e festa às 20h."
  },
  historia: {
    paragrafos: [
      "Tudo começou em uma tarde de terça-feira, em 23 de julho de 2024, quando Pedro e Ana Clara se viram pela primeira vez, por intermédio da avó dele. Três dias depois, em um churrasco, entre sorrisos e boas risadas, tiveram a oportunidade de se conhecer melhor.",
      "Ela de Três Marias, ele de Ribeirão das Neves. Mesmo com a distância, as conversas continuaram e, aos poucos, nasceu um carinho que só crescia. No dia 17 de agosto, aconteceu o primeiro encontro, acompanhado de um lindo buquê de flores e de muitos sentimentos que começavam a florescer.",
      "Em 1º de setembro de 2024, veio o pedido de namoro. Desde então, juntos, colecionaram viagens, momentos especiais, muitas risadas e descobriram, um no outro, o verdadeiro significado do amor e do companheirismo.",
      "No dia 1º de agosto de 2026, o amor ganhou uma nova promessa: o casamento. Agora, de mãos dadas, seguem para o capítulo mais bonito dessa história, com a certeza de que escolher um ao outro foi apenas o começo de uma vida inteira juntos!"
    ],
    marcos: [
      { data: "23/07/2024", titulo: "A primeira vez" },
      { data: "26/07/2024", titulo: "O churrasco" },
      { data: "17/08/2024", titulo: "O primeiro encontro" },
      { data: "01/09/2024", titulo: "O pedido de namoro" },
      { data: "01/08/2026", titulo: "O pedido de casamento" },
      { data: "22/05/2027", titulo: "O grande dia", destaque: true }
    ]
  },
  programacao: [
    { hora: "15h30", titulo: "Cerimônia", nota: "O momento mais esperado do dia." },
    { hora: "Logo após", titulo: "Recepção", nota: "No mesmo local, assim que a cerimônia terminar." },
    { hora: "19h", titulo: "Jantar", nota: "Vamos à mesa para celebrar juntos." },
    { hora: "20h", titulo: "Festa", nota: "Pista aberta." }
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
  galeria: {
    emTeste: true // true abre a página antes do casamento, só para testes. Mude para false ao terminar de testar
  },
  hospedagens: [
    { nome: "Pousada Rural Veredas", local: "Rod. Pres. Juscelino Kubitschek, 6020", telefone: "(38) 99168-5346", mapa: "https://maps.app.goo.gl/4JRb7VEqDVr22wdQA" },
    { nome: "Pousada Sítio do Terrão", local: "Rod. Paulo Fagundes da Costa", telefone: "(38) 98816-3732", mapa: "https://maps.app.goo.gl/MwRjyShAUT8KbpuT6" },
    { nome: "Grande Lago", local: "Av. Beira Lago, s/n - Cemig", telefone: "(38) 3225-0505", mapa: "https://maps.app.goo.gl/SK7kNq4RaAPZMwbx9" },
    { nome: "Três Marias Hotel", local: "Praça Castelo Branco, 01 - Centro", telefone: "(38) 3754-1600", mapa: "https://maps.app.goo.gl/TK1oTDgdJLTn4xjg7" },
    { nome: "Hotel Minas", local: "R. Pres. John Kennedy, 96", telefone: "(38) 3754-1772", mapa: "https://maps.app.goo.gl/r3Zxf5F1PyEJ8iTCA" },
    { nome: "Hotel Mar de Minas", local: "Rua 21 de Abril, 3 - Jardim Pescadores", telefone: "(38) 99874-1278", mapa: "https://maps.app.goo.gl/H12zGLVpdGC58Zef7" }
  ],
  // {prazo} é trocado pela data limite de confirmação.
  perguntas: [
    { pergunta: "Crianças são bem-vindas?", resposta: "Sim! As crianças são muito bem-vindas." },
    { pergunta: "Posso levar um acompanhante?", resposta: "Seu convite já traz o nome de quem foi convidado com você. Basta buscar seu nome na confirmação de presença." },
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
