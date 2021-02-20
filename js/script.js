let num = '0';
let score;
const question1 = {
  question: "What is your name?",
  correctAnswer:"Viktorija",
  wrongAnswer: "Samanta"
};
const question2 = {
  question: "When was JavaScript programming language created?",
  correctAnswer:"September 1995",
  wrongAnswer: "Nocember 2000"
};
const question3 = {
  question: "Who created JavaScript?",
  correctAnswer: "Brendan Eich",
  wrongAnswer: "Samanta Black"
};
const question4 = {
  question: "Do you like studie Java Script?",
  correctAnswer: "Yes",
  wrongAnswer: "No"
};

let questionArray = [question1, question2, question3, question4] ;

buildQuiz = questionArray => {
  for(let i=0; i<questionArray.length; i++) {
    console.log(questionArray[i]);
  }
}

buildQuiz(questionArray)

questionArray.forEach((item) => {
  if(item.correctAnswer === 'Yes'){
    console.log(item.correctAnswer + '- is correct answer! Good Job!')
  }else {
    console.log('Wrong answer. Correct answer is -' + item.correctAnswer)
  }
})
