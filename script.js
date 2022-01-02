function incr(i){
    i++
    return i
}


async function questionQuizz(){
    const response = await fetch('db.json')
    const data = await response.json()
    var a = 0
    var a = incr(a)
    document.getElementById('test').textContent = data[a].question
    document.getElementById('reponse1').textContent = data[a].reponse1[0]
    document.getElementById('reponse2').textContent = data[a].reponse2[0]
    document.getElementById('reponse3').textContent = data[a].reponse3[0]
    document.getElementById('reponse4').textContent = data[a].reponse4[0]
}
questionQuizz()