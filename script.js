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
}
async function startquiz(quiz){
    await getquestions(quiz)
    questionQuiz(quiz)
}

startquiz(quiz)
//ajout de score sur la bonne reponse//
function check(){
    var score = '';
    var q1 = document.quiz.reponse.value
    //il faudrais en value l'index//
    if(q1 == 'reponse1'){
        score = score + 5
        document.getElementById('score').textContent = ' Bonne réponse votre score est de ' + score
    quiz.index=quiz.index +1
    questionQuiz(quiz)}
    }

