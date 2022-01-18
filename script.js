/*Je déclare une variable pour y mettre mon json*/
var quiz = {
    index:0,
    questions:[]
}
/* Fonction qui récupére les données de mon json et les renvoi dans ma variable quiz*/
async function getquestions(quiz){
    const response = await fetch('db.json')
    const data = await response.json()
    quiz.questions=data
} 
/*Je mélange mon tableau */
function shuffleArray(array) {
    return array.sort(() => 0.5 - Math.random());
  }
/* J'appel ma première question */
 function questionQuiz(quiz){
    document.getElementById('question').textContent = quiz.questions[quiz.index].question
    document.getElementById('reponse11').textContent = quiz.questions[quiz.index].reponse1
    document.getElementById('reponse22').textContent = quiz.questions[quiz.index].reponse2
    document.getElementById('reponse33').textContent = quiz.questions[quiz.index].reponse3
    document.getElementById('reponse44').textContent = quiz.questions[quiz.index].reponse4
    document.getElementById('reponse1').value = quiz.questions[quiz.index].reponse1
    document.getElementById('reponse2').value = quiz.questions[quiz.index].reponse2
    document.getElementById('reponse3').value = quiz.questions[quiz.index].reponse3
    document.getElementById('reponse4').value = quiz.questions[quiz.index].reponse4
}
/* fonction de démarrage du quiz, je recupére le json, je mélange mon tableau, j'affiche la première question*/
async function startquiz(quiz){
    await getquestions(quiz)
    shuffleArray(quiz.questions)
    questionQuiz(quiz)
}
/*j'appel ma fonction startquiz*/
startquiz(quiz)
/* je crée une variable pour le score qui débute à 0 */
var score = 0;

function check(){ 
   /* for(i=0;i<5;i++){*/
 /* je recupére la valeur de l'input qui est checked*/  
    var q1 = document.querySelector('input[name="reponse"]:checked').value
    /* Je vérifie si le radio checked correspond à la bonne réponse(correct)*/
    
   if(q1 == quiz.questions[quiz.index].correct){   
/* La réponse est bonne, je charge la question suivante et j'augmente le score*/

        score = score + 5
        
        quiz.index = quiz.index+1
        document.getElementById('question').textContent = quiz.questions[quiz.index].question
        document.getElementById('reponse11').textContent = quiz.questions[quiz.index].reponse1
        document.getElementById('reponse22').textContent = quiz.questions[quiz.index].reponse2
        document.getElementById('reponse33').textContent = quiz.questions[quiz.index].reponse3
        document.getElementById('reponse44').textContent = quiz.questions[quiz.index].reponse4
        document.getElementById('reponse1').value = quiz.questions[quiz.index].reponse1
        document.getElementById('reponse2').value = quiz.questions[quiz.index].reponse2
        document.getElementById('reponse3').value = quiz.questions[quiz.index].reponse3
        document.getElementById('reponse4').value = quiz.questions[quiz.index].reponse4
        document.getElementById('score').textContent = 'Bonne réponse'
    }
    else if(q1 != quiz.questions[quiz.index].correct){
        /*La réponse est fausse, je charge la question suivante sans modifier le score */
        quiz.index = quiz.index+1
        document.getElementById('question').textContent = quiz.questions[quiz.index].question
        document.getElementById('reponse11').textContent = quiz.questions[quiz.index].reponse1
        document.getElementById('reponse22').textContent = quiz.questions[quiz.index].reponse2
        document.getElementById('reponse33').textContent = quiz.questions[quiz.index].reponse3
        document.getElementById('reponse44').textContent = quiz.questions[quiz.index].reponse4
        document.getElementById('reponse1').value = quiz.questions[quiz.index].reponse1
        document.getElementById('reponse2').value = quiz.questions[quiz.index].reponse2
        document.getElementById('reponse3').value = quiz.questions[quiz.index].reponse3
        document.getElementById('reponse4').value = quiz.questions[quiz.index].reponse4
        document.getElementById('score').textContent = 'Mauvaise réponse'
    } 
}

