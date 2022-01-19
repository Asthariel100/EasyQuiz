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
    document.getElementById('reponse1').textContent = quiz.questions[quiz.index].reponse1
    document.getElementById('reponse2').textContent = quiz.questions[quiz.index].reponse2
    document.getElementById('reponse3').textContent = quiz.questions[quiz.index].reponse3
    document.getElementById('reponse4').textContent = quiz.questions[quiz.index].reponse4
    document.getElementById('reponse11').value = quiz.questions[quiz.index].reponse1
    document.getElementById('reponse22').value = quiz.questions[quiz.index].reponse2
    document.getElementById('reponse33').value = quiz.questions[quiz.index].reponse3
    document.getElementById('reponse44').value = quiz.questions[quiz.index].reponse4
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
    var nbq = quiz.index
    console.log(nbq)
 /* je recupére la valeur de l'input qui est checked*/  
    var q1 = document.querySelector('input[name="reponse"]:checked').value 
    /*j'appel la fonction colorized qui mets en vert la bonne réponse, en rouge la mauvaise*/
    colorized(q1)
    
    /* Je vérifie si le radio checked correspond à la bonne réponse(correct)*/
   if(q1 == quiz.questions[quiz.index].correct){ 
    score = score + 5 
    var qr = document.querySelector('h2')
    /*Je mets la question en vert*/
    qr.style.color='rgb(54, 228, 19)'
    /* ajout du commentaire*/
    addcom()
    document.getElementById('score').textContent = 'Bonne réponse'
    /*jappel ma fonction "right" pour les réponses valide avec un délai pour l'anecdote*/
setTimeout(right,2000);      
    }
    else if(q1 != quiz.questions[quiz.index].correct){
    var qw = document.querySelector('h2')
    /*Je mets la question en rouge*/
    qw.style.color='rgb(252, 0, 50)'
    document.getElementById('score').textContent = 'Mauvaise réponse'
    /*jappel ma fonction "wrong" pour les réponses fausses avec un délai pour la correction*/
setTimeout(wrong,2000);
}
else if(nbq==3){
    nbq==quiz.index
pagedesscores()
}}
/* La réponse est bonne, je charge la question suivante et j'augmente le score*/
function right(){
    creset()
    suppcom()
    var question = document.querySelector('h2')
    question.style.color='white'  
    quiz.index = quiz.index+1
    document.getElementById('question').textContent = quiz.questions[quiz.index].question
    document.getElementById('reponse1').textContent = quiz.questions[quiz.index].reponse1
    document.getElementById('reponse2').textContent = quiz.questions[quiz.index].reponse2
    document.getElementById('reponse3').textContent = quiz.questions[quiz.index].reponse3
    document.getElementById('reponse4').textContent = quiz.questions[quiz.index].reponse4
    document.getElementById('reponse11').value = quiz.questions[quiz.index].reponse1
    document.getElementById('reponse22').value = quiz.questions[quiz.index].reponse2
    document.getElementById('reponse33').value = quiz.questions[quiz.index].reponse3
    document.getElementById('reponse44').value = quiz.questions[quiz.index].reponse4
}
function wrong(){
     /*La réponse est fausse, je charge la question suivante sans modifier le score */
     creset()
    var question = document.querySelector('h2')
    question.style.color='white'  
    quiz.index = quiz.index+1
    document.getElementById('question').textContent = quiz.questions[quiz.index].question
    document.getElementById('reponse1').textContent = quiz.questions[quiz.index].reponse1
    document.getElementById('reponse2').textContent = quiz.questions[quiz.index].reponse2
    document.getElementById('reponse3').textContent = quiz.questions[quiz.index].reponse3
    document.getElementById('reponse4').textContent = quiz.questions[quiz.index].reponse4
    document.getElementById('reponse11').value = quiz.questions[quiz.index].reponse1
    document.getElementById('reponse22').value = quiz.questions[quiz.index].reponse2
    document.getElementById('reponse33').value = quiz.questions[quiz.index].reponse3
    document.getElementById('reponse44').value = quiz.questions[quiz.index].reponse4
 } 

/*Mets en vert la bonne réponse et en rouge les mauvaises*/
function colorized (){
    for(i=1;i<5;i++){
    var q2 = document.getElementById('reponse'+i)
    if(q2.textContent == quiz.questions[quiz.index].correct){
        q2.style.color='rgb(54, 228, 19)'
    }
    else{
        q2.style.color='red'
    }
}}
/*Remets les couleurs en Blanc*/
function creset(){
    for(i=1;i<5;i++){
        var q2 = document.getElementById('reponse'+i)
        q2.style.color='white'
}}
/*Ajouter commentaire*/
function addcom(){
    const com = document.getElementById("commentaire")
    let newCom = document.createElement('h3');
    /*ça c'est l'id des moments difficile =')*/
    newCom.id = "please"
    newCom.textContent = quiz.questions[quiz.index].commentaire;
    com.appendChild(newCom);
    }
/* Retirer le commentaire*/
function suppcom(){

let node = document.getElementById('please');
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
}
function pagedesscores(){
    var q2 = document.getElementById('question')
        q2.style.color='cornflowerblue'
        document.getElementById('score').textContent = 'Votre score total est de'+score
    let node = document.getElementById('apocalypse');
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
const pagedefin = element.innerHtml
element.innerHtml = `<div> Ya kelkun...youhouuuu</div>`
}

