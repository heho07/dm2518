class Quiz {
	
	constructor(){
		this.Quiz = [{
			room: "Sport",
			question: "What material are tennis rackets made of?",
			answers: [
				"Plastic waste",
				"Iron",
				"Carbon composite",
					{
						label: 'Cancel', //index 3, avbryter
						icon: 'md-close'
					}
				],
			correctAnswer:2,
			userCorrectAnswer: false
			},
			{
				room: "Music",
				question: "When did Jean Baptiste Lully release his work 'Armide Ouverture'?",
				answers: [
					"1650",
					"1670",
					"1730",
					{
						label: 'Cancel', //index 3, avbryter
						icon: 'md-close'
					}
				],
			correctAnswer:0,
			userCorrectAnswer: false
			},
			{
				room: "Art",
				question: "What was a common theme in arts during the middle ages?",
				answers: [
					"Animals",
					"Religious figures",
					"Royalties",
					{
						label: 'Cancel', //index 3, avbryter
						icon: 'md-close'
					}
				],
			correctAnswer:1,
			userCorrectAnswer: false
			}
		];
		this.testQuiz = [{
			room: "Musik",
			question: "How much wood would a wood chuck chuck if a wood chuck could chuck wood?",
			answers: [
				"a woodchuck could chuck",
				"this is wrong",
				"this is also wrong",
				{
					label: 'Cancel', //index 3, avbryter
					icon: 'md-close'
				}
			],
			correctAnswer: 0,
		}];

		this.changeResult();

	}

	changeResult(){
		let resultSpan = document.getElementsByClassName("result");
		let result = 0;
		let maxCorrect = this.Quiz.length;
		this.Quiz.forEach((question) => {
			if (question.userCorrectAnswer){
				result++;
			}
		});
		console.log(resultSpan);
		// resultSpan.innerHTML = ("<p>TEST</p>");
		if (result === maxCorrect) {
			resultSpan[i].innerHTML = ("<p>" + result + " / " + maxCorrect + "p</p><br/><p>You win!</p>");
		}
		else {	
			for (var i = resultSpan.length - 1; i >= 0; i--) {
				resultSpan[i].innerHTML = ("<p>" + result + " / " + maxCorrect + "p</p>");
			}
		}

		// resultSpan.innerHTML = ("<p>" + result + " / " + maxCorrect + "</p>");

	}

	showTemplate(room){
		console.log(this.Quiz);
		let currentQuestion;
		for (const question of this.Quiz){

			if (question.room === room){
				currentQuestion = question;
				break;
			}
		}
	
		console.log(currentQuestion.answers);
		//klickar man utanför -> index 0
		ons.openActionSheet({
			title: currentQuestion.question,
			cancelable: true,
			buttons: currentQuestion.answers,
			
		}).then( (index) => { 
			console.log('index: ', index);
			if (index === currentQuestion.correctAnswer) {
				console.log("CORRECT ANSWER");
				currentQuestion.userCorrectAnswer = true;
				alert('Correct! Woop woop');
				this.changeResult();
			} 
			else if (index != -1 && index != 3){
				alert('Wrong answer! Boo');
				console.log("FALSE");
			}
		});
	}

	myFunction(event){
		// event.preventDefault();
		console.log(event);
		console.log("testing class");
	}
}

var QuizInstance = new Quiz();
