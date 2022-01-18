
 async function getquestions(){
     var quiz =""
    const response = await fetch('db.json')
    const data = await response.json()
    quiz.questions=data
    return quiz.questions
    
}
var quiz = getquestions()


questionQuiz(quiz)
 function questionQuiz(quiz){
    document.getElementById('test').textContent = quiz.questions[quiz.index].question
    document.getElementById('reponse11').textContent = quiz.questions[quiz.index].reponse1
    document.getElementById('reponse22').textContent = quiz.questions[quiz.index].reponse2
    document.getElementById('reponse33').textContent = quiz.questions[quiz.index].reponse3
    document.getElementById('reponse44').textContent = quiz.questions[quiz.index].reponse4
    document.getElementById('reponse1').value = quiz.questions[quiz.index].reponse1
    document.getElementById('reponse2').value = quiz.questions[quiz.index].reponse2
    document.getElementById('reponse3').value = quiz.questions[quiz.index].reponse3
    document.getElementById('reponse4').value = quiz.questions[quiz.index].reponse4
}
async function startquiz(quiz){
    await getquestions(quiz)
    questionQuiz(quiz)
}
function check(){
    var selected = document.querySelector('.messageradio').checked
   console.log(document.querySelector('.messageradio').checked)
    if(selected.value == quiz.questions[quiz.index].correct){
        score = score + 5
        document.getElementById('score').textContent = ' Bonne réponse votre score est de ' + score
    quiz.index=quiz.index +1
    console.log(quiz.questions[quiz.index].correct)
    console.log(document.quiz.reponse.value)
    questionQuiz(quiz)}
    }

