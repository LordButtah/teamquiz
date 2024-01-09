document.addEventListener('DOMContentLoaded', (event) => {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const nextButton = document.getElementById('next-button');
  let currentQuestionIndex = 0;

  const questions = [
      {
          question: "What is the best team in QBO?",
          options: ["Team Jackie", "Team Jon", "Team Jeff"],
          answer: "Team Jon"
      },
      // More questions...
  ];

  function loadQuestion(questionIndex) {
      const question = questions[questionIndex];
      questionElement.textContent = question.question;
      optionsElement.innerHTML = '';
      question.options.forEach(option => {
          const button = document.createElement('button');
          button.textContent = option;
          button.classList.add('btn', 'btn-option');
          button.onclick = () => selectOption(option);
          optionsElement.appendChild(button);
      });
  }

  function selectOption(selected) {
      const question = questions[currentQuestionIndex];
      if (selected === question.answer) {
          alert('Correct!');
      } else if(selected == "Team Jackie") {
          alert ('mmm, close but not quite right..')
      }
      else {
          alert('Hah! Try again, Nerd! ');
      }
  }

  nextButton.addEventListener('click', () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
          loadQuestion(currentQuestionIndex);
      } else {
          alert('Quiz completed!');
          currentQuestionIndex = 0;
      }
      loadQuestion(currentQuestionIndex);
  });

  // Load the first question
  loadQuestion(currentQuestionIndex);
});