// create object containing language data

// english array
// greeting
// intro
// bio
// country
// description


//push random array item to object

//push object properties to HTML


var english = [
  //english
  [
    "Hello!",
    "My name is",
    "I am a web developer and designer.",
    ["britain", "usa", "australia"]
  ],
 ];

var nonEnglish = [
  //spanish languageIndex 0
  [
    "¡Hola!",
    "Me llamo",
    "Soy desarrollador web y diseñador.",
    [ 
      "argentina",
      "bolivia",
      "chile",
      "colombia",
      "costa_rica",
      "cuba",
      "dominican_republic",
      "ecuador",
      "el_salvador",
      "equatorial_guinea",
      "guatemala",
      "honduras",
      "mexico",
      "nicaragua",
      "panama",
      "paraguay",
      "peru",
      "spain",
      "uruguay",
      "venezuela"
    ]
  ],
  //french languageIndex 1
  [
    "Bonjour!",
    "Mon nom est",
    "Je suis développeur et designer web.",
    [
      "canada", 
      "france", 
      "benin", 
      "burkina", 
      "congo", 
      "drc", 
      "ivoire", 
      "gabon"
    ]
  ],
  //italian languageIndex 2
  [
    "Bongiorno!",
    "Mi chiamo",
    "Sono uno sviluppatore web e designer.",
    [
      "italy"
    ]
  ],
  //Japanese languageIndex 3
  [
    "こんにちは",
    "私の名前は",
    "私はウェブサイトの開発者およびデザイナーです。",
    [
      "honshu", 
      "hokkaido",
      "kyushu",
      "shikoku"
    ]
  ],
  //chinese languageIndex 4
  [
    "你好",
    "我的名字是",
    "我是网站开发人员和设计师。",
    [
      "china",
      "malaysia",
      "taiwan",
    ]
  ]
];

// === finds random language and country within the array

function chooseLanguageAndCountry(array) {
  var languageIndex = Math.floor(Math.random() * array.length);
  var randomCountryIndex = Math.floor(Math.random() * array[languageIndex][3].length);
  var countryId = array[languageIndex][3][randomCountryIndex];
  return [languageIndex, countryId];
};

// === changes language and highlights country === 

function changeLanguageAndHighlightCountry(array) {
  randomizedArray = chooseLanguageAndCountry(array);
  // languageIndex will be at randomizedArray[0]
  var languageIndex = randomizedArray[0];
  // countryId will be at randomizedArray[1]
  var countryId = randomizedArray[1];
  var greeting = document.getElementById("greeting");
  var intro =  document.getElementById("intro");
  var bio = document.getElementById("bio");
    greeting.innerHTML = array[languageIndex][0];
    intro.innerHTML = array[languageIndex][1];
    bio.innerHTML = array[languageIndex][2];
    console.log(languageIndex, countryId)
    document.getElementById(countryId).setAttribute("style", "fill: blue; opacity: 50%" )
      setTimeout (function() {
        document.getElementById(countryId).setAttribute("style", "fill: black; opacity: 100%")

    }, 4500);
};

// === alternate english and random nonEnglish ===

function cycleLanguages(array1, array2, timer) {
  setInterval(function(){
    setTimeout(function(){    
      changeLanguageAndHighlightCountry(array1);
      setTimeout(function(){
        changeLanguageAndHighlightCountry(array2);
      }, timer);
    }, timer);
  }, timer * 2);
}

//wait for page to load to run
window.addEventListener('load', function(){
cycleLanguages(english, nonEnglish, 5000);
});

