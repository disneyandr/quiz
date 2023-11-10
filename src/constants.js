export const jsQuizz = {
    questions: [
      {
        question:
          "Qual dos seguintes é usado no React.js para aumentar o desempenho?",
        choices: [
          "Virtual DOM",
          "DOM Original",
          "Ambos A e B",
          "Nenhum dos anteriores",
        ],
        type: "MCQs",
        correctAnswer: "Virtual DOM",
      },
      {
        question: "O que é o ReactJS?",
        choices: [
          "Framework do lado do servidor",
          "Framework de Interface de Usuário",
          "Ambos A e B",
          "Nenhum dos anteriores",
        ],
        type: "MCQs",
        correctAnswer: "Framework de Interface de Usuário",
      },
      {
        question:
          "Identifique qual é usado para passar dados para componentes de fora",
        choices: ["Render com argumentos", "setState", "PropTypes", "props"],
        type: "MCQs",
        correctAnswer: "props",
      },
      {
        question: "Em qual linguagem o React.js é escrito?",
        choices: ["Python", "Java", "C#", "JavaScript"],
        type: "MCQs",
        correctAnswer: "JavaScript",
      },
      {
        question: "O que é o Babel?",
        choices: [
          "Interpretador de JavaScript",
          "Transpilador de JavaScript",
          "Compilador de JavaScript",
          "Nenhum dos anteriores",
        ],
        type: "MCQs",
        correctAnswer: "Compilador de JavaScript",
      },
      {
        question: "Qual é a função do ReactDOM.render() no React?",
        choices: [
          "Renderizar um componente no DOM",
          "Definir o estado inicial de um componente",
          "Criar um novo componente",
          "Nenhum dos anteriores",
        ],
        type: "MCQs",
        correctAnswer: "Renderizar um componente no DOM",
      },
      {
        question: "O que são Hooks no React?",
        choices: [
          "Funções que realizam chamadas de rede",
          "Funções que permitem o uso de estado e outras características do React em componentes funcionais",
          "Métodos de classe em componentes de classe",
          "Nenhum dos anteriores",
        ],
        type: "MCQs",
        correctAnswer: "Funções que permitem o uso de estado e outras características do React em componentes funcionais",
      },
      {
        question: "O que é JSX no contexto do React?",
        choices: [
          "Uma extensão de sintaxe para JavaScript recomendada pelo React",
          "Um formato de arquivo de configuração",
          "Um sistema de gerenciamento de pacotes para o React",
          "Nenhum dos anteriores",
        ],
        type: "MCQs",
        correctAnswer: "Uma extensão de sintaxe para JavaScript recomendada pelo React",
      },
      {
        question: "O que é um componente controlado no React?",
        choices: [
          "Um componente que gerencia automaticamente seu próprio estado interno",
          "Um componente que aceita apenas propriedades de leitura",
          "Um componente que é controlado por eventos do mouse",
          "Nenhum dos anteriores",
        ],
        type: "MCQs",
        correctAnswer: "Um componente que gerencia automaticamente seu próprio estado interno",
      },
      {
        question: "Qual é a diferença entre state e props no React?",
        choices: [
          "State é imutável, props podem ser modificadas",
          "State é gerenciado pelo componente, props são recebidas de um componente pai",
          "State e props são conceitos intercambiáveis",
          "Nenhum dos anteriores",
        ],
        type: "MCQs",
        correctAnswer: "State é gerenciado pelo componente, props são recebidas de um componente pai",
      },
      {
        question: "O que é o Redux no contexto do React?",
        choices: [
          "Um gerenciador de estado para aplicações React",
          "Uma biblioteca para criação de componentes funcionais",
          "Um método para renderização condicional em React",
          "Nenhum dos anteriores",
        ],
        type: "MCQs",
        correctAnswer: "Um gerenciador de estado para aplicações React",
      },
      {
        question: "Como você pode otimizar o desempenho de um componente React?",
        choices: [
          "Usando um Virtual DOM",
          "Aumentando a complexidade do componente",
          "Removendo o estado do componente",
          "Nenhum dos anteriores",
        ],
        type: "MCQs",
        correctAnswer: "Usando um Virtual DOM",
      },
      {
        question: "O que são refs no React?",
        choices: [
          "Um método para criar referências a objetos JavaScript",
          "Um sistema de referência cruzada entre componentes",
          "Um recurso de manipulação de strings em JSX",
          "Um meio de acessar o DOM diretamente",
        ],
        type: "MCQs",
        correctAnswer: "Um meio de acessar o DOM diretamente",
      },
      {
        question: "O que é o JSX no React?",
        choices: [
          "Um pré-processador de JavaScript",
          "Uma linguagem de marcação para definir elementos React",
          "Um mecanismo de busca de componentes",
          "Nenhum dos anteriores",
        ],
        type: "MCQs",
        correctAnswer: "Uma linguagem de marcação para definir elementos React",
      },
      {
        question: "Qual é a função do método componentDidMount() em um componente de classe no React?",
        choices: [
          "É chamado após a renderização do componente, útil para operações de inicialização",
          "Define as props iniciais do componente",
          "Remove o componente do DOM",
          "Nenhum dos anteriores",
        ],
        type: "MCQs",
        correctAnswer: "É chamado após a renderização do componente, útil para operações de inicialização",
      },
      {
        question: "O que são 'Higher Order Components' (HOCs) no React?",
        choices: [
          "Componentes que estão acima na hierarquia de renderização",
          "Componentes que aceitam apenas props",
          "Componentes que retornam outros componentes",
          "Nenhum dos anteriores",
        ],
        type: "MCQs",
        correctAnswer: "Componentes que retornam outros componentes",
      },
      {
        question: "Qual é a diferença entre o React e o React Native?",
        choices: [
          "React é para desenvolvimento web, React Native é para desenvolvimento móvel",
          "React é uma linguagem de programação, React Native é um framework",
          "Não há diferença, os termos são usados de forma intercambiável",
          "Nenhum dos anteriores",
        ],
        type: "MCQs",
        correctAnswer: "React é para desenvolvimento web, React Native é para desenvolvimento móvel",
      },
      {
        question: "O que são 'prop-types' no React?",
        choices: [
          "Tipos de dados primitivos em JavaScript",
          "Uma biblioteca para validar as props recebidas pelos componentes",
          "Uma técnica de otimização de renderização em React",
          "Nenhum dos anteriores",
        ],
        type: "MCQs",
        correctAnswer: "Uma biblioteca para validar as props recebidas pelos componentes",
      },
    ],
  };

export const resultInitalState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
}
  