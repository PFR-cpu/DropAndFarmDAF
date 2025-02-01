const perehod_anim = document.getElementById('perehod-animation');
let periodofworld = 0
const btn = document.getElementById('perehod-btn');



function newWorld() {
    btn.style.animationName = 'perehod-animation'
    btn.style.animationIterationCount =1;
   
    btn.addEventListener('animationend', function onAnimationEnd() {
        btn.value = 'drop';
        btn.style.color = 'black';
        btn.style.animationIterationCount = '1';
        
        // Здесь вы можете добавить любое действие или вызвать событие
        console.log('Анимация завершена');
        
         afterAnimationAction();
        
        // Удаляем слушатель события, чтобы он не срабатывал повторно
        btn.removeEventListener('animationend', onAnimationEnd);
    });
    console.log(1)
}
function afterAnimationAction() {
    console.log('Выполняем действие после анимации');
    periodofworld = 1
    console.log(periodofworld)
    if(periodofworld == 1)
        btn.innerHTML = 'drop.';
    btn.style.color = 'black';
    btn.style.backgroundColor ='greenyellow'
    btn.style.borderColor = 'greenyellow'
    btn.style.boxShadow ='0 0 1vw greenyellow'
    periodofworld = 2;
    console.log(periodofworld)
    perehodintonewworld();
}
function perehodintonewworld(){

if(periodofworld ==2){
    const body = document.getElementById('body');
    const name = document.getElementById('be-head-nm');
    body.style.animationName ='newworldappearance'
    setTimeout(() => {
         body.style.animationName ='newworldappearance'
    }, 2200);
    btn.style.animationName = 'btn-tranformation'
    name.innerHTML =''
    periodofworld = 3;
    console.log(periodofworld)
    
}
perehod()
}

function perehod() {
    if(periodofworld == 3){
        const beforeeart = document.getElementById('before-erth');
        body.style.backgroundColor ='rgb(13, 13, 13)'
    beforeeart.style.display = 'none'
    
    
    setTimeout(() => {
        const topdrop = document.getElementById('top-drop');
        const afterearth = document.getElementById('after-erth');
        topdrop.style.animationName = 'appearance'
        topdrop.style.animationDuration = '1s'
        topdrop.style.display = 'block'
        
    },1000 );
    const topdrop = document.getElementById('top-drop');
    topdrop.style.animationName = 'disappearance'
    topdrop.style.animationDuration ='1s'
    setTimeout(() => {
        const topdrop = document.getElementById('top-drop')
        const afterearth = document.getElementById('after-erth');
        topdrop.style.display = 'none'
        afterearth.style.display = 'block'
        afterearth.style.animationName = 'appearance'
        
        afterearth.style.animationDuration = '1s'
    
      
        

    },3200)

}
}
const question = document.getElementById('third-block-text')
const yesno = document.getElementById('yesnoquest');
const othstuff = document.getElementsByClassName('othstuff');
const answer = document.getElementById('answer');
let questcount = 0 
function startQuest() {
    question.style.fontSize = '3.6vmax'
    othstuff[0].style.display = 'none';
    yesno.style.display = 'flex';
    questcount = 1
    checkAns()
}
let anwer = 0
function ansYes() {
     anwer = 1
     endQuest() 
}
function ansNo(){
    questcount++
    checkAns()
}
function checkAns(){

    if(questcount == 1){
        question.innerHTML = 'Вы хотели бы участвовать в интересных крипто активностях <br> и наращивать свой капитал без вложений?'
        question.style.fontSize = '3.1vw';
        question.style.textAlign = 'center'
    }
    if(questcount == 2){
        question.innerHTML = 'У вас уже есть солидный капитал?'
        question.style.fontSize = '4.6vw';
    }
    if(questcount == 3){
        question.innerHTML = 'Тогда возьмите кредит в банке и купите наш токен <br>Cсылка на покупку! - ссылка на покупку '
        yesno.style.display = 'none';
        question.style.fontSize ='10.8vw'
        if(window.innerWidth < 768){
            question.style.fontSize ='2.3vw'
        }
    }
}

function endQuest() {
    if(anwer == 1){
        question.innerHTML = 'Cсылка на покупку! - <span>ссылка на покупку</span>'
        yesno.style.display = 'none';
        question.style.fontSize ='1.8vw'
    }
    if(anwer == 1,questcount == 2){
        question.innerHTML = 'Тогда купите наш токен и приумножьте свои активы <br>Cсылка на покупку! - ссылка на покупку'
 
    }
}
function chooselang() {
    var modal = document.getElementById("languageModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("languageModal");
    modal.style.display = "none";
}

function menu() {
    chooselang();
}
function getIdea(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    closeModal()
}
function getHow(){
    window.scrollTo({
        top: 800,
        behavior:'smooth'
      
    });
    if(window.innerWidth < 768)
        window.scrollTo({
            top: 500,
            behavior:'smooth'
        });

    closeModal()

}
function getIf(){
    window.scrollTo({
        top: 1600,
        behavior:'smooth'
    });
    closeModal()
}