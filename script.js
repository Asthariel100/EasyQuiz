var quiz = {
    index:0,
    questions:[]
}
async function getquestions(quiz){
    const response = await fetch('db.json')
    const data = await response.json()
    quiz.questions=data
}
 function questionQuiz(quiz){
    document.getElementById('test').textContent = quiz.questions[quiz.index].question
    document.getElementById('reponse1').textContent = quiz.questions[quiz.index].reponse1
    document.getElementById('reponse2').textContent = quiz.questions[quiz.index].reponse2
    document.getElementById('reponse3').textContent = quiz.questions[quiz.index].reponse3
    document.getElementById('reponse4').textContent = quiz.questions[quiz.index].reponse4
    document.getElementById('reponse1').value = quiz.questions[quiz.index].reponse1
    document.getElementById('reponse2').value = quiz.questions[quiz.index].reponse2
    document.getElementById('reponse3').value = quiz.questions[quiz.index].reponse3
    document.getElementById('reponse4').value = quiz.questions[quiz.index].reponse4
}
async function startquiz(quiz){
    await getquestions(quiz)
    questionQuiz(quiz)
}

startquiz(quiz)
//fonction bonne réponse + score//
var score = 0;
function check(){
    var q1 = document.quiz.reponse.value
    if(q1 == quiz.questions[quiz.index].correct){
        score = score + 5
        document.getElementById('score').textContent = ' Bonne réponse votre score est de ' + score
    quiz.index=quiz.index +1
    questionQuiz(quiz)}
    }

