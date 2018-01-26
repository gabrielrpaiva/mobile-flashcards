

export function getInicialCards(card) {
  const cards = {
    Bowie: {
      title: 'David Bowie',
      questions: [
        {
          question: 'Em que país Bowie gravou sua famosa trilogi?',
          answer: 'Alemanha'
        },
        {
          question: "A capa do album 'BlackStar' faz referencia a qual outra capa de do Bowie?",
          answer: 'Heroes'
        },
        {
          question: "Quem compôs a música 'Fame' junto de Bowie?",
          answer: 'Jhon Lennon'
        }
      ]
    },
    Radiohead: {
      title: 'Radiohead',
      questions: [
        {
          question: 'Em qual cidade inglesa a banda se formou?',
          answer: 'Oxford'
        },
        {
          question: "Qual foi o primeiro algun que Nigle Gondrich produziu?",
          answer: 'OK Computer'
        }
      ]
    }
  }

  return typeof card === 'undefined'
  ? cards
  : cards[card]

}