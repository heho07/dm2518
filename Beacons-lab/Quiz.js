class Quiz {
	
	constructor(){
		this.testQuiz = [{
			question: "How much wood would a wood chuck chuck if a wood chuck could chuck wood?",
			answers: {
				a: "a woodchuck could chuck",
				b: "this is wrong",
				c: "this is also wrong",
			},
			correctAnswer: "a",
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

	showTemplate(){
		//klickar man utanför -> index 0
		ons.openActionSheet({
			title: 'Answer',
			cancelable: true,
			buttons: [
			'Answer A', //index 0
			'Answer B', // index 1
			{
				label: 'Answer C', //index 2
				//modifier: 'destructive' // om den ska vara röd
			},
			{
				label: 'Cancel', //index 3, avbryter
				icon: 'md-close'
			}
			]
		}).then( (index) => { console.log('index: ', index) });
	}

	myFunction(event){
		// event.preventDefault();
		console.log(event);
		console.log("testing class");
	}
}

var QuizInstance = new Quiz();
