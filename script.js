// All functions use the code in this page. 
// The functions run in this script are essential to the program working as working correctly.

//Global Variables
let endGame = null;
let totalScore = 0;
let starterColorForDisplayTheme = 0;
let currentColor = null;
let stage1 = false;
let stage2 = false;
let misloads = 0;
let totalWeight = 0;
let totalPackagesSorted = 0;
let isPaused =true; //changed to true to work on intro page without running all the game stuff
let totalBoxesOnTrack = 0;
let level = 'Easy';
let intervalSpeedForBoxesOnTrack = 0;
let scoreTrackerForIntervalSpeedIncrease = 10
let intervalSpeed = 5000;
let easyMode = false;
let mediumMode = false;
let hardMode = false;
let boxesSorted = 0;
let credits = 0;
let waterRecoveryAmount = 5;
let numOfAllowedBoxes = 10;
let stackWeight = 0;
let packageHeld = false;
let currentPackage = null;
let fatigueRecovery = 1000;
let bossLevel = false;
let timePlayed = 0;
let upgradeCounter = 0;
// Sound code
let misloadSound = new Audio('./sounds/misloadSound.wav');
let rightLoad = new Audio('./sounds/rightLoad.wav');
let pickUpPackage = new Audio('./sounds/pickUpPackage.wav');
// End of sound code
// Music code
let initialGameMusic = new Audio('./sounds/initialGameMusic.mp3')
let BackgroundCosmicMusic = new Audio('./sounds/BackgroundCosmicMusic.mp3')
let BackgroundMedievalMusic = new Audio('./sounds/BackgroundMedievalMusic.mp3')
let BackgroundBossLevelMusic = new Audio('./sounds/BackgroundbossLevelMusic.mp3')
let BackgroundRedMusic = new Audio('./sounds/BackgroundRedMusic.mp3')
let BackgroundUniqueMusic = new Audio('./sounds/BackgroundUniqueBackground.wav')
let BackgroundPurpleMusic =  new Audio('./sounds/BackgroundPurpleMusic.mp3')
let BackgroundHalloweenMusic =  new Audio('./sounds/halloweenBackgroundMusic.mp3')
let BackgroundChristmasMusic =  new Audio('./sounds/BackgroundChristmasMusic.mp3')
let BackgroundThanksgivingMusic =  new Audio('./sounds/BackgroundThanksgivingMusic.mp3')
let backgroundMusicCreme =  new Audio('./sounds/backgroundMusicCreme.mp3')//
let backgroundBlueMusic =  new Audio('./sounds/backgroundBlueMusic.mp3')
let backgroundAlienInvasionMusic =  new Audio('./sounds/backgroundAlienInvasionMusic.mp3')
let backgroundSilverMusic =  new Audio('./sounds/backgroundSilverMusic.mp3')
let backgroundCloudMusic =  new Audio('./sounds/backgroundCloudMusic.mp3')
let backgroundRandomMusic =  new Audio('./sounds/backgroundRandomMusic.mp3')
let backgroundCustomMusic =  new Audio('./sounds/backgroundCustomMusic.mp3')
let backgroundUnderTheSeaMusic = new Audio('./sounds/backgroundUnderTheSeaMusic.mp3')
let backgroundPinkMusic = new Audio('./sounds/backgroundPinkMusic.mp3')
let backgroundGradientsMusic = new Audio('./sounds/backgroundGradientsMusic.mp3')

// all must be loop = true or else the song will stop when it is done playing.
BackgroundMedievalMusic.loop = true; 
BackgroundCosmicMusic.loop = true;
BackgroundBossLevelMusic.loop = true;
initialGameMusic.loop = true;
BackgroundRedMusic.loop = true;
BackgroundUniqueMusic.loop = true;
BackgroundPurpleMusic.loop = true;
BackgroundChristmasMusic.loop = true;
BackgroundThanksgivingMusic.loop = true;
backgroundUnderTheSeaMusic.loop = true;
backgroundCloudMusic.loop = true;
backgroundAlienInvasionMusic.loop = true;
backgroundRandomMusic.loop = true;
backgroundCustomMusic.loop = true;
backgroundBlueMusic.loop = true;
backgroundMusicCreme.loop = true;
backgroundGradientsMusic.loop = true;
backgroundPinkMusic.loop = true;

function pauseAllSongs(){
    BackgroundRedMusic.pause();  
    initialGameMusic.pause();
    BackgroundCosmicMusic.pause();
    BackgroundMedievalMusic.pause()
    BackgroundPurpleMusic.pause();
    BackgroundUniqueMusic.pause();
    BackgroundHalloweenMusic.pause();
    BackgroundChristmasMusic.pause();
    backgroundUnderTheSeaMusic.pause();
    backgroundCloudMusic.pause();
backgroundAlienInvasionMusic.pause();
backgroundRandomMusic.pause();
backgroundCustomMusic.pause();
backgroundBlueMusic.pause();
backgroundMusicCreme.pause();
BackgroundThanksgivingMusic.pause();
backgroundSilverMusic.pause();
backgroundCustomMusic.pause();
backgroundGradientsMusic.pause();
backgroundPinkMusic.pause();
}


// End of music
let startingColors = randomGradientsArray;
let choiceForColor = false;
let characterStrength = 150;
let hunger = 0;
let levelThree = false;

// Arrays
// Giving the inpackageidual routes their values from the arrays odd and even arrays
let oddPackages = [];
let evenPackages = [];
let topPallets = [];
let bottomPallets = [];
let topSecondPallets = [];
let bottomSecondPallets = [];
// End of first level
// Start of second level
let midFirstPallets = [];
let midSecondPallets = [];
let midThirdPallets = [];
let midFourthPallets = [];
let oddPackages2ndLevel1Top = [];
let evenPackages2ndLevel2Top = [];
let oddPackages2ndLevelBot1 = [];
let evenPackages2ndLevelBot2 = [];
let oddPackages2ndLevelLeft1 = [];
let evenPackages2ndLevelLeft2 = [];
let oddPackages2ndLevelRight1 = [];
let evenPackages2ndLevelRight2 = [];
// End of second level
// Start of third level
let evenPackagesRingOne  = [];
let oddPackagesRingTwo = [];
let evenPackagesRingThree = [];
let oddPackagesRingFour = [];
let evenPalletsLevelThree = [];
let oddPalletsLevelThree = [];
// End of third level
// Start of boss stage
let oddPalletsBossStageLeft = [];
let evenPalletsBossStageRight = [];
let oddPalletsBossStageLeft2 = [];
let evenPalletsBossStageRight2 = [];
let bossTrack1 = [];
let bossTrack2 = [];
let bossTrack3 = [];
let bossTrack4 = [];
let bossTrack5 = [];
// End of boss stage

// Global Elements

let packagesTop = document.querySelectorAll('.package-track-top');
let packagesBot = document.querySelectorAll('.package-track-bottom');
// Global constant elements
const topTrack = document.querySelector('.package-track-top')
const botTrack = document.querySelector('.package-track-bottom')
// Objects
let stamina = {stamina:100, maxStamina:100};
let fatigue = {fatigue:0, fatigueRecoveryRate:1000};
let stackCount = {stackCount: 0, stackWeight: 0};
//Creating the array of odd and even numbers
let oddPackageNumbers = createArrayOfOddOrEvenNumbersWithinARange('odd', 99)
let evenPackageNumbers = createArrayOfOddOrEvenNumbersWithinARange('even', 99)
// Grabbing an odd or even number for each of the routes

let oddRoute3 = grabRandomNumFromArray(oddPackageNumbers);
let oddRoute4= grabRandomNumFromArray(oddPackageNumbers);
let oddRoute5= grabRandomNumFromArray(oddPackageNumbers);
let oddRoute6= grabRandomNumFromArray(oddPackageNumbers);
let oddRoute7 = grabRandomNumFromArray(oddPackageNumbers);
let oddRoute8 = grabRandomNumFromArray(oddPackageNumbers);
let oddRoute9 = grabRandomNumFromArray(oddPackageNumbers);
let oddRoute10= grabRandomNumFromArray(oddPackageNumbers);



let evenRoute3 = grabRandomNumFromArray(evenPackageNumbers);
let evenRoute4 = grabRandomNumFromArray(evenPackageNumbers);
let evenRoute5 = grabRandomNumFromArray(evenPackageNumbers);
let evenRoute6 = grabRandomNumFromArray(evenPackageNumbers);
let evenRoute7 = grabRandomNumFromArray(evenPackageNumbers);
let evenRoute8 = grabRandomNumFromArray(evenPackageNumbers);
let evenRoute9 = grabRandomNumFromArray(evenPackageNumbers);
let evenRoute10 = grabRandomNumFromArray(evenPackageNumbers);

// Putting the routes in a data structure
let evenNumberRoutes = [evenRoute3,evenRoute4,evenRoute5, evenRoute6, evenRoute7,evenRoute8,evenRoute9,evenRoute10];
let oddNumberRoutes = [oddRoute3,oddRoute4,oddRoute5, oddRoute6, oddRoute7,oddRoute8,oddRoute9,oddRoute10];


// Changing the color pallete during game
let allPackages = null;
// Random gradients theme

let allColorSchemes = [pinkRetroSteamPink, purpleColorsArray, 
    blueColorsArray,  goldSilverColorsArray, redColorsArray, cremeColorSchema, halloweenColorsArray , christmasColorsArray,
    thanksgivingColorsArray, medievalFantasyColorsArray, underWaterSeaColors, cosmicThemedColors, alienInvasionColors, uniquePalette
];




// Making the storyline functions that will bring the character to the outside world which will ->
// consist of the gym to gain strength, home to rest, and the cafeteria to fix hunger. Once the rest button is hit at home, ->
// the player will be be sent back to the game after a small cutscene
updatePackageCountOnTracker();





    // Custom color picking
    let allColors = [];

    function extractAllColorsIntoArray(allColors, colorsToBeExtracted){
        colorsToBeExtracted.forEach((color)=>{
            allColors.push(color);
        })
     
    }
  
extractAllColorsIntoArray(allColors, redColorsArray);
extractAllColorsIntoArray(allColors, blueColorsArray);
extractAllColorsIntoArray(allColors, purpleColorsArray);
extractAllColorsIntoArray(allColors, pinkRetroSteamPink);
extractAllColorsIntoArray(allColors, goldSilverColorsArray);
extractAllColorsIntoArray(allColors, pinkRetroSteamPink);
extractAllColorsIntoArray(allColors, cremeColorSchema)
extractAllColorsIntoArray(allColors, halloweenColorsArray)
extractAllColorsIntoArray(allColors, christmasColorsArray)
extractAllColorsIntoArray(allColors, thanksgivingColorsArray)
extractAllColorsIntoArray(allColors, medievalFantasyColorsArray)
extractAllColorsIntoArray(allColors, underWaterSeaColors)
extractAllColorsIntoArray(allColors, cosmicThemedColors)
extractAllColorsIntoArray(allColors, alienInvasionColors)
extractAllColorsIntoArray(allColors, retroSteamPunk)
// extractAllColorsIntoArray(allColors, blackWhiteGrayColorsArray)


let lastIndexBeforeColorRemoval = null;
let indexForColor = 0;
let customColorChoices = [];
// Left off at making it so when a color is picked it is added to the color selection at the top.
let divForCustomColors = document.querySelectorAll('.div-selection-color')
let pAllNamesForAllColors = document.querySelectorAll('.p-all-names-for-custom-selection')
let pAllNamesForCustomColors = document.querySelectorAll('.div-selection-custom-colors .p-custom-color-selection-name');
let answer = null;
let currentColorNames = [];


  



function boxLimitReturnForLevel2(arr, num){
if(arr.length >= num){
    return true;
}
}

let levelOne = false;
let levelTwo = false;










