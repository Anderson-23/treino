
const player = document.querySelector('.person');


 
const pular= () => {
 player.classList.add('pula');

    setTimeout(() =>{

        player.classList.remove('pula');

    },800);

}
 
 document.addEventListener('keydown', pular)