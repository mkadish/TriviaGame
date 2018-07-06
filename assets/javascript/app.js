var titles = ['The World Math Quiz','British Math', 'British Math', 'Roman Math', 'Roman Math', 'French math', 'French math', 'Arabic math', 'Arabic math', 'Game Over'];
var questions = ["OK, look, this quiz is exceptionally nerdy, and way too much effort was put into this...here goes...", "An older British gentleman explains to you that his county's national debt was 1.78 billion pounds at the beginning of the year, and is now 2.05 billion pounds.  How much has it gone up?", 	"It's B, .28 trillion pounds.  In America, what we call 'one trillion,' $1,000,000,000,000, is called 'one billion' in Britain.  Our billions are their milliards.  Perhaps that's why Dr. Evil always got confused.", 
"You probably remember your Roman numerals, but just in case, here's a chart.  Meanwhile, what's…", 	"It's hard to multiply and divide Roman numerals, a lot of people simply can't, but it's 4.", 
"French numbers are a little strange.  What is…", 	"Yeah, in French,'cinquante' is fifty,  'soixante' is 'sixty,' but seventy is 'soixante-dix,' or 'sixty-ten,' and 'eighty' is 'quatre-vingts,' or 'four-twenties.'", 
"The numbers that we use are called 'Arabic numbers,' but they don't look like the numerals used in Arabic-speaking countries.  It's still base ten, but's it's like a different font. So…", 	"The 1s, 9s, and 0s look similar, but everything else is different.", "Ok, you got " +o+ " out of " + h-1 + "..."]
var rightLetters = ["a", "B", "B", "C", "C", "E", "E", "A", "A", "A"];
var answers = [280000000000, 280000000000, 280000000000, 4, 4, 72, 72, 531, 531, 531];
var range = [10, 100, 100, 100, 100, 10, 10, 1000, 1000, 10];
var toppics = ["nerdy.gif", "blank.gif", "blank.gif", "romannumeral.jpg", "romannumeral.jpg", "french.gif", "french.gif", "arabic.jpg", "arabic.jpg", "blank.gif"];
var allNumbers = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200 ], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200 ], ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", "XXX", "XXXI", "XXXII", "XXXIII", "XXXIV", "XXXV", "XXXVI", "XXXVII", "XXXVIII", "XXXIX", "XL", "XLI", "XLII", "XLIII", "XLIV", "XLV", "XLVI", "XLVII", "XLVIII", "XLIX", "L", "LI", "LII", "LIII", "LIV", "LV", "LVI", "LVII", "LVIII", "LIX", "LX", "LXI", "LXII", "LXIII", "LXIV", "LXV", "LXVI", "LXVII", "LXVIII", "LXIX", "LXX", "LXXI", "LXXII", "LXXIII", "LXXIV", "LXXV", "LXXVI", "LXXVII", "LXXVIII", "LXXIX", "LXXX", "LXXXI", "LXXXII", "LXXXIII", "LXXXIV", "LXXXV", "LXXXVI", "LXXXVII", "LXXXVIII", "LXXXIX", "XC", "XCI", "XCII", "XCIII", "XCIV", "XCV", "XCVI", "XCVII", "XCVIII", "XCIX", "C", "CI", "CII", "CIII", "CIV", "CV", "CVI", "CVII", "CVIII", "CIX", "CX", "CXI", "CXII", "CXIII", "CXIV", "CXV", "CXVI", "CXVII", "CXVIII", "CXIX", "CXX", "CXXI", "CXXII", "CXXIII", "CXXIV", "CXXV", "CXXVI", "CXXVII", "CXXVIII", "CXXIX", "CXXX", "CXXXI", "CXXXII", "CXXXIII", "CXXXIV", "CXXXV", "CXXXVI", "CXXXVII", "CXXXVIII", "CXXXIX", "CXL", "CXLI", "CXLII", "CXLIII", "CXLIV", "CXLV", "CXLVI", "CXLVII", "CXLVIII", "CXLIX", "CL", "CLI", "CLII", "CLIII", "CLIV", "CLV", "CLVI", "CLVII", "CLVIII", "CLIX", "CLX", "CLXI", "CLXII", "CLXIII", "CLXIV", "CLXV", "CLXVI", "CLXVII", "CLXVIII", "CLXIX", "CLXX", "CLXXI", "CLXXII", "CLXXIII", "CLXXIV", "CLXXV", "CLXXVI", "CLXXVII", "CLXXVIII", "CLXXIX", "CLXXX", "CLXXXI", "CLXXXII", "CLXXXIII", "CLXXXIV", "CLXXXV", "CLXXXVI", "CLXXXVII", "CLXXXVIII", "CLXXXIX", "CXC", "CXCI", "CXCII", "CXCIII", "CXCIV", "CXCV", "CXCVI", "CXCVII", "CXCVIII", "CXCIX", "CC"], ["cero", "Un", "Deux", "Trois", "quatre", "cinq", "six", "Sept", "huit", "neuf", "Dix", "Onze", "Douze", "treize", "Quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf", "vingt", "vingt et un", "vingt-deux", "vingt trois", "vingt quatre", "vingt cinq", "vingt-six", "vingt sept", "vingt-huit", "vingt-neuf", "trente", "trente et un", "trente deux", "trente trois", "trente quatre", "trente cinq", "trente-six", "trente sept", "trente-huit", "trente neuf", "quarante", "quarante-et-un", "quarante-deux", "quarante trois", "quarante-quatre", "quarante cinq", "quarante-six", "quarante-sept", "quarante huit", "quarante-neuf", "cinquante", "cinquante et un", "cinquante-deux", "cinquante trois", "cinquante quatre", "cinquante cinq", "cinquante six", "cinquante sept", "cinquante huit", "cinquante neuf", "soixante", "soixante-et-un", "soixante-deux", "soixante trois", "soixante-quatre", "soixante-cinq", "soixante six", "soixante-sept", "soixante-huit", "soixante neuf", "soixante-dix", "soixante et onze", "soixante-douze", "soixante-treize", "soixante quatorze", "soixante-quinze", "soixante seize", "soixante-dix sept", "soixante dix huit", "soixante-dix-neuf", "quatre-vingts", "quatre vingt un", "quatre-vingt deux", "quatre vingt trois", "quatre-vingt-quatre", "quatre-vingt-cinq", "quatre-vingt six", "quatre-vingt sept", "quatre vingt huit", "quatre vingt neuf", "quatre vingt dix", "quatre vingt onze", "quatre-vingt douze", "quatre vingt treize", "quatre-vingt quatorze", "quatre vingt quinze", "quatre vingt seize", "quatre-vingt-dix-sept", "quatre-vingt-dix-huit", "quatre-vingt-dix-neuf", "Cent", "Cent un", "Cent deux", "Cent trois", "Cent quatre", "Cent cinq", "Cent six", "Cent sept", "Cent huit", "Cent neuf", "Cent dix", "Cent onze", "Cent douze", "Cent treize", "Cent quatorze", "Cent quinze", "Cent seize", "Cent dix sept", "Cent dix-huit", "Cent dix-neuf", "Cent vingt", "Cent vingt et un", "Cent vingt deux", "Cent vingt-trois", "Cent vingt-quatre", "Cent vingt cinq", "Cent vingt six", "Cent vingt-sept", "Cent vingt-huit", "Cent vingt-neuf", "Cent trente", "Cent trente et un", "Cent trente-deux", "Cent trente-trois", "Cent trente-quatre", "Cent trente cinq", "Cent trente-six", "Cent trente-sept", "Cent trente-huit", "Cent trente-neuf", "Cent quarante", "Cent quarante et un", "Cent quarante-deux", "Cent quarante-trois", "Cent quarante-quatre", "Cent quarante-cinq", "Cent quarante-six", "Cent quarante-sept", "Cent quarante-huit", "Cent quarante-neuf", "Cent cinquante", "Cent cinquante et un", "Cent cinquante-deux", "Cent cinquante-trois", "Cent cinquante-quatre", "Cent cinquante cinq", "Cent cinquante-six", "Cent cinquante-sept", "Cent cinquante-huit", "Cent cinquante-neuf", "Cent soixante", "Cent soixante et un", "Cent soixante-deux", "Cent soixante-trois", "Cent soixante-quatre", "Cent soixante-cinq", "Cent soixante-six", "Cent soixante-sept", "Cent soixante-huit", "Cent soixante-neuf", "Cent soixante dix", "Cent soixante et onze", "Cent soixante-douze", "Cent soixante-treize", "Cent soixante-quatorze", "Cent soixante-quinze", "Cent soixante-seize", "Cent soixante-dix-sept", "Cent soixante-dix-huit", "Cent soixante-dix-neuf", "Cent quatre-vingts", "Cent quatre-vingt-un", "Cent quatre-vingt-deux", "Cent quatre-vingt-trois", "Cent quatre-vingt-quatre", "Cent quatre-vingt-cinq", "Cent quatre-vingt-six", "Cent quatre-vingt-sept", "Cent quatre-vingt-huit", "Cent quatre-vingt-neuf", "Cent quatre-vingt dix", "Cent quatre-vingt-onze", "Cent quatre-vingt-douze", "Cent quatre-vingt-treize", "Cent quatre-vingt-quatorze", "Cent quatre-vingt-quinze", "Cent quatre-vingt-seize", "Cent quatre-vingt-dix-sept", "Cent quatre-vingt-dix-huit", "Cent quatre vingt dix-neuf", "Deux cent"], ["	٠	", "	١	", "	٢	", "	٣	", "	٤	", "	٥	", "	٦	", "	٧	", "	٨	", "	٩	", "	١٠	", "	١١	", "	١٢	", "	١٣	", "	١٤	", "	١٥	", "	١٦	", "	١٧	", "	١٨	", "	١٩	", "	٢٠	", "	٢١	", "	٢٢	", "	٢٣	", "	٢٤	", "	٢٥	", "	٢٦	", "	٢٧	", "	٢٨	", "	٢٩	", "	٣٠	", "	٣١	", "	٣٢	", "	٣٣	", "	٣٤	", "	٣٥	", "	٣٦	", "	٣٧	", "	٣٨	", "	٣٩	", "	٤٠	", "	٤١	", "	٤٢	", "	٤٣	", "	٤٤	", "	٤٥	", "	٤٦	", "	٤٧	", "	٤٨	", " ٤٩	", "	٥٠	", "	٥١	", "	٥٢	", "	٥٣	", "	٥٤	", "	٥٥	", "	٥٦	", "	٥٧	", "	٥٨	", "	٥٩	", "	٦٠	", "	٦١	", "	٦٢	", "	٦٣	", "	٦٤	", "	٦٥	", "	٦٦	", "	٦٧	", "	٦٨	", "	٦٩	", "	٧٠	", "	٧١	", "	٧٢	", "	٧٣	", "	٧٤	", "	٧٥	", "	٧٦	", "	٧٧	", "	٧٨ ", "	٧٩	", "	٨٠	", "	٨١	", "	٨٢	", "	٨٣	", "	٨٤	", "	٨٥	", "	٨٦	", "	٨٧	", "	٨٨	", "	٨٩	", "	٩٠	", "	٩١	", "	٩٢	", "	٩٣	", "	٩٤	", "	٩٥	", "	٩٦	", "	٩٧	", "	٩٨	", "	٩٩	", "	١٠٠	", "	١٠١	", "	١٠٢	", "	١٠٣	", "	١٠٤	", "	١٠٥	", "	١٠٦ ", "	١٠٧	", "	١٠٨	", "	١٠٩	", "	١١٠	", "	١١١	", "	١١٢	", "	١١٣	", "	١١٤	", "	١١٥	", "	١١٦	", "	١١٧	", "	١١٨	", "	١١٩	", "	١٢٠	", "	١٢١	", "	١٢٢	", "	١٢٣	", "	١٢٤	", "	١٢٥	", "	١٢٦	", "	١٢٧	", "	١٢٨	", "	١٢٩	", "	١٣٠	", " ١٣١	", "	١٣٢	", "	١٣٣	", "	١٣٤	", "	١٣٥	", "	١٣٦	", "	١٣٧	", "	١٣٨	", "	١٣٩	", "	١٤٠	", "	١٤١	", "	١٤٢	", "	١٤٣	", "	١٤٤	", "	١٤٥	", "	١٤٦	", "	١٤٧	", "	١٤٨	", "	١٤٩	", "	١٥٠	", "	١٥١	", "	١٥٢	", "	١٥٣	", "	١٥٤	", "	١٥٥	", "	١٥٦	", "	١٥٧	", "	١٥٨	", "	١٥٩	", "	١٦٠	", "	١٦١	", "	١٦٢	", "	١٦٣	", "	١٦٤	", "	١٦٥	", "	١٦٦	", "	١٦٧	", "	١٦٨	", "	١٦٩	", "	١٧٠	", "	١٧١	", "	١٧٢	", "	١٧٣	", "	١٧٤	", "	١٧٥	", "	١٧٦	", "	١٧٧	", "	١٧٨	", "	١٧٩	", "	١٨٠ ", "	١٨١	", "	١٨٢	", "	١٨٣	", "	١٨٤	", "	١٨٥	", "	١٨٦	", "	١٨٧	", "	١٨٨	", "	١٨٩	", "	١٩٠	", "	١٩١	", "	١٩٢	", "	١٩٣	", "	١٩٤	", "	١٩٥	", "	١٩٦	", "	١٩٧	", "	١٩٨	", "	١٩٩	", "	٢٠٠	"],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37]]
var choices = [["A) £280,000,000", "B) £280,000,000,000"], ["A) £280,000,000", "B) £280,000,000,000", "C) £280,000,000,000,000", "D) £280,000", "E) £280"], 	["A) £280,000,000", "B) £280,000,000,000", "C) £280,000,000,000,000", "D) £280,000", "E) £280"], 
["A) X", "B) XXXVIII", "C) IV", "D) LXIV", "E) XI"], 	["A) X", "B) XXXVIII", "C) IV", "D) LXIV", "E) XI"], 
["A) Ninety", "B) Ten", "C) One Hundred", "D) Six Hundred Sixty-Six", "E) Sixty-Twelve"], 	["A) Ninety", "B) Ten", "C) One Hundred", "D) Six Hundred Sixty-Six", "E) Sixty-Twelve"], 
["A) ٥٣١", "B) ٨٩", "C) ٨٦٦", "D)٢٢٣", "E) ٥٦٦"], 	["A) ٥٣١", "B) ٨٩", "C) ٨٦٦", "D)٢٢٣", "E) ٥٦٦"]]
var mainImages = ['blank.gif', "british.gif", 	"drevil.gif", "roman.jpg", 	"lifeofbrian.gif", "french.jpg", 	"french2.gif", "arabicproblem.jpg", 	"arabicanswer.jpg", "blank.gif"]
var timer = [10, 20, 20, 60, 60, 40, 40, 90, 90, 10]
var responses = [["cheers", "sorry mate"], ["cheers", "sorry mate"], 	["cheers", "sorry mate"], ["euge!", "Paenitet…"], 	["euge!", "Paenitet…"], ["très bien", "Non je suis désolé."], 	["très bien", "Non je suis désolé."], ["jayid jiddaan", "la 'ana asaf"], ["jayid jiddaan", "la 'ana asaf"], ["cheers", "sorry mate"]]


var a;
var b;
var c;
var d;
var e = 4;
var f = 50;
var g = 50;
var h = 0;
var i = 0;
var j = timer[h];
var k = 0;
var l = 0;
var m = 0;
var n = 0;
var o = 0;
var dalet = [];
var score = 0;
var turns = 0;
var bonus = 0;
 var rand = [];
 var posneg = 0;
var endgame = 0;
var gamestart = 0;
var clockrun = 0;
var clockstop = 0;


//function rando(f,g){
  //rand = [];
//  for (var i=0; rand.length <4; i++){
//  posneg = ((Math.floor(Math.random()*2))-.5)*2;
//  i = posneg*Math.floor(Math.random()*f)+g;
//  if (!(rand.includes(i))){
//    if( i>0){
//        rand.push(i);
//    }
//    a = rand[0];
//     b = rand[1];
 //   c = rand[2];
 //   d = rand[3];
//dalet = [a,b,c,d]
//}
//}
//console.log(rand);
//console.log(dalet);/
//}

function clock(){
 clockrun = setInterval(function() {
    //setTimeout(game,10000)
    if (j > 0  && h < timer.length-1) {
        countdown(h,j)
        j--
        console.log(h,j)
        }else{
        console.log(j, h, "whew");
clockstop = clearInterval(clock())};
        }
          ,950)};      

function countdown(h,j){
$("#timer").text(allNumbers[h][j]);
console.log("dogsog")
};
    

function runner(){
//rando(answers[h],range[h]);
$("#timer").html("");
$("#turtle").text(titles[h]);
$("#topimage").html("<img src='assets/images/" + toppics[h] + "'>");
$("#questions").text(questions[h]);
console.log(h, "modulo is", h%2);
$("#choice-A").text("");
$("#choice-B").text("");
$("#choice-C").text("");
$("#choice-D").text("");
$("#choice-E").text("");
$("#compliment").text("");
clock();
if (m == rightLetters [h]){
    n = 0;
    o++}
    else {n = 1};

if (h%2 == 0){
    console.log(m, rightLetters [h]);
   $("#compliment").html(responses[h][n])};
if (h%2 == 1) {
    $("#choice-A").html("<input type='radio' class='questions' name='questions' id='choiceA' value='A'>"+ choices[h][0] +"</input><br>");
    $("#choice-B").html("<input type='radio' class='questions' name='questions' id='choiceE' value='B'>"+ choices[h][1] +"</input><br>");
    $("#choice-C").html("<input type='radio' class='questions' name='questions' id='choiceB' value='C'>"+ choices[h][2] +"</input><br>");
    $("#choice-D").html("<input type='radio' class='questions' name='questions' id='choiceC' value='D'>"+ choices[h][3] +"</input><br>");
    $("#choice-E").html("<input type='radio' class='questions' name='questions' id='choiceD' value='E'>"+ choices[h][4] +"</input><br>")};

$("#mainimage").html("<img src='assets/images/" + mainImages[h] + "'>");
$('.questions').on("click", function() {
    
    m = ($(this).attr("value"))
    console.log(m)
j = timer[h];
console.log ("Time", h, "Number", j);
})}

//$('input[id="choices"]:checked').val();    
//console.log($('input[id="choices"]:checked').val());



//answer = setTimeout("document.choices.submit()",10000);

        
//setTimeout(function() {

function game(){
    setInterval(function() {
        //setTimeout(game,10000)
        if (h < timer.length-1) {
        runner();
        
    //setTimeout(game,10000)
            
            console.log("Time", h, "Number", j);
            h++;
    //document.getElementById('choices').submit();
   }else{
   endgame = clearInterval(game())
    }
   },j*1000)}

game()