class Quiz {
	
	constructor(){
		this.Quiz = [{
			room: "Sport"
			question: "What material are tennis rackets made of?"
			answers: [
				"Plastic waste",
				"Iron",
				"Carbon composite",
					{
						label: 'Cancel', //index 3, avbryter
						icon: 'md-close'
					}
			],
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
				]
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
				]
			}
		}]
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
		this.testForm1 = document.getElementById("testForm1");
		this.testForm1.addEventListener("submit", (event) => {
			event.preventDefault();
			this.myFunction(event);
		});

		this.testForm2 = document.getElementById("testForm2");
		this.testForm2.addEventListener("submit", (event) => {
			event.preventDefault();
			this.myFunction(event);
		})

	}

	showTemplate(room){
		let currentQuestion;
		for (const question of this.testQuiz){
			if (question.Room === room){
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
			} 
			else if (index != -1 && index != 3){
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
