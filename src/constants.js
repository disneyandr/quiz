export const jsQuizz = {
    questions: [
      {
        question:
          "Qual das alternativas a seguir melhor descreve a biblioteca React?",
        choices: [
          "Uma linguagem de programação para desenvolvimento web",
          "Um framework JavaScript para construir interfaces de usuário",
          "Um mecanismo de renderização do lado do servidor para aplicações web",
          "Uma ferramenta para criar e gerenciar bancos de dados",
        ],
        type: "MCQs",
        correctAnswer: "Um framework JavaScript para construir interfaces de usuário",
      },

      {
        question: "Qual a principal vantagem de usar React para criar quizzes?",
        choices: [
          "React é mais rápido que outros frameworks JavaScript.",
          "A abordagem baseada em componentes do React facilita a criação de componentes de quiz modulares e reutilizáveis.",
          "O React possui uma biblioteca integrada de componentes de quiz.",
          "O React é o único framework JavaScript adequado para a construção de quizzes.",
        ],
        type: "MCQs",
        correctAnswer: "A abordagem baseada em componentes do React facilita a criação de componentes de quiz modulares e reutilizáveis.",
      },

      {
        question:
          "Como o mecanismo de gerenciamento de estado do React ajuda na construção de quizzes?",
        choices: [
          "Permite armazenar e gerenciar as perguntas do quiz, as respostas e o progresso do usuário.", 
          "Permite conectar-se a APIs externas e buscar dados do quiz.", 
          "Fornece regras de validação integradas para a entrada do usuário.", 
          "Trata da renderização da interface do quiz."],
        type: "MCQs",
        correctAnswer: "Permite armazenar e gerenciar as perguntas do quiz, as respostas e o progresso do usuário.",
      },

      {
        question: "O que são hooks do React e como eles são úteis no desenvolvimento de quizzes?",
        choices: [
          "Hooks do React são novos recursos do JavaScript que simplificam o gerenciamento de estado.",
          "Eles fornecem uma maneira de reutilizar código em diferentes componentes de quiz.",
          "Permitem criar animações personalizadas para a interface do quiz.",
          "Permitem lidar com operações assíncronas como busca de dados.",
        ],
        type: "MCQs",
        correctAnswer: "Hooks do React são novos recursos do JavaScript que simplificam o gerenciamento de estado.",
      },

      {
        question: "Qual o papel do CSS (Cascading Style Sheets) na construção de quizzes React?",
        choices: [
          "Define a estrutura e o layout da interface do quiz.", 
          "Trata da lógica das perguntas do quiz e da avaliação das respostas.", 
          "Fornece uma maneira de armazenar e gerenciar dados do quiz.", 
          "Permite conectar-se a APIs externas."
        ],
        type: "MCQs",
        correctAnswer: "Define a estrutura e o layout da interface do quiz.",
      },
      
      {
        question: "Qual das seguintes bibliotecas pode ser usada para aprimorar a interatividade dos quizzes React?",
        choices: [
          "React Spring",
          "Framer Motion",
          "Tanto React Spring quanto Framer Motion",
          "Nem React Spring nem Framer Motion são adequados para quizzes",
        ],
        type: "MCQs",
        correctAnswer: "Tanto React Spring quanto Framer Motion",
      },

      {
        question: "Qual o objetivo de uma biblioteca de roteamento como o React Router no desenvolvimento de quizzes?",
        choices: [
          "Gerencia o fluxo das perguntas do quiz e a navegação entre elas.",
          "Trata da exibição dos resultados e feedbacks do quiz.",
          "Fornece uma maneira de armazenar e gerenciar dados do quiz.",
          "Permite conectar-se a APIs externas.",
        ],
        type: "MCQs",
        correctAnswer: "Gerencia o fluxo das perguntas do quiz e a navegação entre elas.",
      },

      {
        question: "Como uma ferramenta como o Storybook pode ser benéfica para o desenvolvimento de quizzes React?",
        choices: [
          "Facilita a criação de componentes de quiz interativos em isolamento.",
          "Automatiza o teste da funcionalidade do quiz.",
          "Fornece uma maneira de implantar quizzes em ambientes de produção.",
          "Permite conectar-se a APIs externas.",
        ],
        type: "MCQs",
        correctAnswer: "Facilita a criação de componentes de quiz interativos em isolamento.",
      },

      {
        question: "Qual das seguintes afirmações descreve com precisão a abordagem geral para a construção de quizzes React?",
        choices: [
          "Os quizzes React envolvem a escrita de código JavaScript complexo para gerenciar a lógica e o estado do quiz.",
          "Os quizzes React utilizam componentes modulares, gerenciamento de estado, estilo CSS e bibliotecas para criar experiências interativas.",
          "Os quizzes React exigem amplo conhecimento de frameworks de desenvolvimento web e tecnologias de back-end.",
          "Os quizzes React são construídos principalmente usando CSS e HTML, com o mínimo de envolvimento de JavaScript.",
        ],
        type: "MCQs",
        correctAnswer: "Os quizzes React utilizam componentes modulares, gerenciamento de estado, estilo CSS e bibliotecas para criar experiências interativas.",
      },
      
    ],
  };

export const resultInitalState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
}
  