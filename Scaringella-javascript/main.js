
function verification(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var correct = 0;


	if (question1 == "Notre galaxie") {
		correct++;
}
	if (question2 == "La distance") {
		correct++;
}	
	if (question3 == "Une navette spatiale") {
		correct++;
	}
	
	if (question4 == "Vénus") {
		correct++;
}
	
	if (question5 == "Environ 300 000 kilomètres par seconde") {
		correct++;
}
	if (question6 == "Pour que les muscles ne soient pas flasques quand ils reviennent sur Terre") {
		correct++;
}
	if (question7 == "La colonne vertébrale se détend") {
		correct++;
}
	if (question8 == "4cm") {
		correct++;
}

	var pictures = ["img/youcandobetter.gif", "img/moyen.gif", "img/soclose.gif", "img/perfect.gif"];
	var messages = ["Tu peux faire mieux!", "à des capacités pour atteindre la perfection", "à une réponse près dommage", "Bravo a toi tu remportes la palme du meilleur quizz sur l'espace"];
	var score;

	if (correct > 0 && correct < 3 ) {
		score = 0;
	}

	if (correct > 3 && correct < 7 ) {
		score = 1;
	}

	if (correct == 7 ) {
		score = 2;
	}
	
	if (correct == 8 ) {
		score = 3;
	}
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	
