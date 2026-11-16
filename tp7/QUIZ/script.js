function evaluerQuiz() {
const reponsesCorrectes = { q1: 'B', q2: 'A', q3: 'C', q4: 'B', q5: 'A' };
let score = 0;
let form = document.getElementById('quizForm');
for (let q in reponsesCorrectes) {
let option = form.elements[q];
if (option && option.value === reponsesCorrectes[q]) {
score++;
}
}
let divResultat = document.getElementById('resultatQuiz');
divResultat.innerHTML = `Votre score : ${score} / 5 <br>`;
if (score === 5) {
    alert("Excellent ! Maîtrise parfaite de javascript !!");
    

}
else{
    if (score >=3) {
         alert("Bon travail ! Quelques notions à revisie");
    }
    else{
        alert("Continuez vos efforts et révisez les exemples de TP");
    }

}
}