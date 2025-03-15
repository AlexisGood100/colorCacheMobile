
document.querySelector('.btn-blue-scheme').addEventListener('click', ()=>{
    removeAllBackgroundFromLevelOne();
   
    startingColors = blueColorsArray;
    document.querySelector('.div-game-body').classList.add('blueBackground');
  
    starterColorForDisplayTheme = 'Blue';
    pauseAllSongs();
    backgroundBlueMusic.play();
})




document.querySelector('.btn-pink-scheme').addEventListener('click', ()=>{
    removeAllBackgroundFromLevelOne();
   
    startingColors = pinkRetroSteamPink;
    starterColorForDisplayTheme = 'Pink';

    document.querySelector('.div-game-body').classList.add('pinkBackground');
    pauseAllSongs();
    backgroundPinkMusic.play();
})





document.querySelector('.btn-purple-scheme').addEventListener('click', ()=>{
    removeAllBackgroundFromLevelOne();
  
    startingColors = purpleColorsArray;
    document.querySelector('.div-game-body').classList.add('purpleBackground');

    starterColorForDisplayTheme = 'Purple';
    pauseAllSongs();
    BackgroundPurpleMusic.play()
})




document.querySelector('.btn-silver-scheme').addEventListener('click', ()=>{
    removeAllBackgroundFromLevelOne();

    startingColors = goldSilverColorsArray;
   
    document.querySelector('.div-game-body').classList.add('goldBackground');
    starterColorForDisplayTheme = 'Silver and Gold';
    pauseAllSongs();
    backgroundSilverMusic.play();
});





document.querySelector('.btn-red-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();
  
    startingColors = redColorsArray;
   
    document.querySelector('.div-game-body').classList.add('redBackground');
    starterColorForDisplayTheme = 'Red';
   
    pauseAllSongs();
    BackgroundRedMusic.play();   
   
})

document.querySelector('.btn-creme-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();
 
    startingColors = cremeColorSchema;
    starterColorForDisplayTheme = 'Cream';
    document.querySelector('.div-game-body').classList.add('cremeBackground');
  
    pauseAllSongs();
    backgroundMusicCreme.play();
})

document.querySelector('.btn-halloween-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();
 
    startingColors = halloweenColorsArray;
    starterColorForDisplayTheme = 'Halloween';
    
    document.querySelector('.div-game-body').classList.add('halloweenBackground');

    pauseAllSongs();
   BackgroundHalloweenMusic.play();
})




document.querySelector('.btn-christmas-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();
  
    startingColors = christmasColorsArray;
    starterColorForDisplayTheme = 'Christmas';
    document.querySelector('.div-game-body').classList.add('christmasBackground');
     
      pauseAllSongs();
      BackgroundChristmasMusic.play();
})


document.querySelector('.btn-thanksgiving-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();

    startingColors = thanksgivingColorsArray;
    document.querySelector('.div-game-body').classList.add('thanksgivingBackground');
  
     starterColorForDisplayTheme = 'Thanksgiving';
       pauseAllSongs();
       BackgroundThanksgivingMusic.play();
})



document.querySelector('.btn-medieval-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();
   
    startingColors = medievalFantasyColorsArray;

    document.querySelector('.div-game-body').classList.add('medevilBackground');
     starterColorForDisplayTheme = 'Medieval';
       pauseAllSongs();
    
     BackgroundMedievalMusic.play()
})

document.querySelector('.btn-underwater-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();

    startingColors = underWaterSeaColors;
    document.querySelector('.div-game-body').classList.add('undertheseaBackground');

     starterColorForDisplayTheme = 'Under the Sea';
     pauseAllSongs();
     backgroundUnderTheSeaMusic.play();
})




document.querySelector('.btn-cosmic-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();
   
    startingColors = cosmicThemedColors;
    document.querySelector('.div-game-body').classList.add('cosmicBackground');
  
    pauseAllSongs();
    BackgroundCosmicMusic.play();
  
     starterColorForDisplayTheme = 'Cosmic';
})


document.querySelector('.btn-alien-invasion-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();
  
    startingColors = alienInvasionColors;
    document.querySelector('.div-game-body').classList.add('alienInvasionBackground');
 
    starterColorForDisplayTheme = 'Alien Invasion';
     pauseAllSongs();
     backgroundAlienInvasionMusic.play();
})

document.querySelector('.btn-unique-color-scheme').addEventListener('click', ()=>{
        removeAllBackgroundFromLevelOne();
   
    startingColors = uniquePalette;
    document.querySelector('.div-game-body').classList.add('uniqueBackground');

     starterColorForDisplayTheme = 'Unique';
     pauseAllSongs();
    BackgroundUniqueMusic.play();
    
})





document.querySelector('.btn-clouds-theme').addEventListener('click', ()=>{
    startingColors = blackWhiteGrayColorsArray;
    choiceForColor = true;
     starterColorForDisplayTheme = 'Clouds';
     document.querySelector('.div-game-body').classList.add('cloudBackground');

     pauseAllSongs();
     backgroundCloudMusic.play();
  
 });

