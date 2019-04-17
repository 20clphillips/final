function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		
	}

	function showResults(questions, quizContainer, resultsContainer){
	
	}

	
	showQuestions(questions, quizContainer);

	
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

var myQuestions = [
	{
		question: "shaggys power level?",
		answers: {
			a: '3',
			b: '5',
			c: '9000'
		},
		correctAnswer: 'b'
	},
	{
		question: "is flex tape strong",
		answers: {
			a: 'E',
			b: 'no',
			c: 'yes'
		},
		correctAnswer: 'c'
	}
];


function showQuestions(questions, quizContainer){
	//  the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	
    quizContainer.innerHTML = output.join('');
    showQuestions(questions, quizContainer);
}



function showResults(questions, quizContainer, resultsContainer){
	
	
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	
	var userAnswer = '';
	var numCorrect = 0;
	
	
	for(var i=0; i<questions.length; i++){

		
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}



var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');



var countDownDate = new Date("june 25, 2020 5:37:25").getTime();


var x = setInterval(function() {

 
  var now = new Date().getTime();
    
  
  var distance = countDownDate - now;
    
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);










