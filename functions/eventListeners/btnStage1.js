document.querySelector('.btn-stage-1').addEventListener('click', ()=>{
    levelOne = true;
    levelTwo = false;
    levelThree = false;
    document.querySelector('.btn-alien-invasion-scheme').classList.remove('hide');
    document.querySelector('.btn-cosmic-scheme').classList.remove('hide');
document.querySelector('.div-color-difficulty-tiers-container').classList.remove('hide');
document.querySelector('.div-button-start-container').classList.add('hide');
document.querySelector('.p-stage-start').classList.remove('hide');
document.querySelector('.span-stage-start').innerText = '1'

})