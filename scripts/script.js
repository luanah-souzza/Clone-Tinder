// Array de objetos contendo os dados dos perfis
var profilesData = [
  {
    name: "Isabela",
    age: 29,
    bio: "Advogada apaixonada pela justiça. Busco um parceiro com valores éticos, mente aberta e disposição para debater questões importantes. Juntos, podemos construir um mundo mais justo e equitativo. Vamos lutar pela igualdade! ⚖️✨",
    photoUrl: "img/isabela.jpeg",
  },
  {
    name: "Laura",
    age: 23,
    bio: "Estudante de moda apaixonada por estilo, tendências e criatividade. Busco alguém que esteja disposto a explorar o mundo fashion ao meu lado. Let's rock the runway together! 🌟",
    photoUrl: "img/laura.jpeg",
  },
  {
    name: "Lucas",
    age: 27,
    bio: "Cristão comprometido com minha fé. Busco um relacionamento baseado em valores cristãos, amor e respeito mútuo. Juntos, podemos fortalecer nossa fé e compartilhar uma vida abençoada. 🙏🌟",
    photoUrl: "img/lucas.jpeg",
  },
  {
    name: "Gabriel",
    age: 30,
    bio: "Ator apaixonado pela arte de interpretar. Adoro explorar diferentes personagens e contar histórias emocionantes. Procuro alguém que aprecie o mundo do teatro e esteja disposto a embarcar nessa jornada comigo. Vamos viver grandes aventuras nos palcos da vida! 🎭✨",
    photoUrl: "img/gabriel.jpeg",
  },
];

var currentProfileIndex = 0; // Índice do perfil atualmente exibido

function descartar() {
  // Função chamada quando o perfil é descartado
  alert(
    "Perfil descartado! Vamos continuar explorando em busca da combinação perfeita."
  );
  showNextProfile(); // Exibe o próximo perfil
}

function superLike() {
  // Função chamada quando o perfil recebe um Super Like
  alert(
    "Super Like! Você expressou um interesse especial nesse perfil. Quem sabe esse seja o início de uma história emocionante?"
  );
  showNextProfile(); // Exibe o próximo perfil
}

function like() {
  // Função chamada quando o perfil recebe um Like
  alert(
    "Like dado! Você demonstrou interesse nesse perfil. Quem sabe essa seja a porta para novas possibilidades?"
  );
  showNextProfile(); // Exibe o próximo perfil
}

function showNextProfile() {
  // Função para exibir o próximo perfil
  currentProfileIndex++; // Incrementa o índice do perfil atual

  if (currentProfileIndex >= profilesData.length) {
    // Se o índice for maior ou igual ao tamanho do array, retorna ao primeiro perfil
    currentProfileIndex = 0;
  }

  var currentProfile = profilesData[currentProfileIndex]; // Obtém o perfil atual

  // Seleciona os elementos HTML onde os dados do perfil serão exibidos
  var profileNameElement = document.querySelector(".profile-name");
  var profileAgeElement = document.querySelector(".profile-age");
  var profileBioElement = document.querySelector(".photo-bio");
  var photoElement = document.querySelector(".photo");

  // Atualiza o conteúdo dos elementos HTML com os dados do perfil atual
  profileNameElement.textContent = currentProfile.name;
  profileAgeElement.textContent = currentProfile.age;
  profileBioElement.textContent = currentProfile.bio;
  photoElement.style.backgroundImage = "url(" + currentProfile.photoUrl + ")";
}

// Exibe o primeiro perfil ao carregar a página
showNextProfile();
