/*eslint-env browser*/

var meCount = 0; //count for Learning Mass example questions

var convAns=[]; //Array used to hold answers
var num = 1; //Used to generate multiple of 2 of each question in practiceConv()

//for mConvCheckAns()
var globalAmt = 0;
var convCount = 0;
var convScore = 0;


var same = 0; //Used to compare if answers entered are the same
var globalAns = 1;

//Generate unique number for Practice conversion exercise
var rArr1=[];
while (rArr1.length < 8)
{
    var r = Math.floor(Math.random()*9) + 1;
    if(rArr1.indexOf(r) === -1) rArr1.push(r);
}

var rArr2=[];
while (rArr2.length < 8)
{
    var s = Math.floor((Math.random() * (39 - 4 + 1) ) + 4)*25;
    if(rArr2.indexOf(s) === -1) rArr2.push(s);
}

var rArr3=[];
while (rArr3.length < 8)
{
    var t = Math.floor((Math.random()*9) + 1)*1000;
    if(rArr3.indexOf(t) === -1) rArr3.push(t);
}




//Practice Mass - Assigning Units Variables

//Images
var pics=[
    "../../img/anchorButter.png",
    "../../img/schoolDesk.jpg",
    "../../img/pencils.jpeg",
    "../../img/tennisball.jpeg",
    "../../img/suitcase.jpg",
    "../../img/orange.jpg",
    "../../img/crayons.jpg",
    "../../img/person.png",
    "../../img/strawberries2.jpg",
    "../../img/apple.jpg",
    "../../img/stepladder.jpg",
    "../../img/potatoes.jpg",
    "../../img/football.jpg",
    "../../img/fridge.jpg",
    "../../img/watermelon.jpg",
    "../../img/microwave.png",
    "../../img/calculator.jpeg",
    "../../img/chicken.jpg",
    "../../img/tv.jpg",
    "../../img/vacuum.jpeg",
    "../../img/couch.jpeg",
    "../../img/lettuce.jpeg",
];

//Description of images
var picsDesc=[
    "Butter",
    "School Desk",
    "Pencils",
    "Tennis Ball",
    "Suitcase",
    "Orange",
    "Crayons",
    "Person",
    "Strawberries",
    "Apple",
    "Step Ladder",
    "Sack of Potatoes",
    "Football",
    "Fridge",
    "Large Watermelon",
    "Microwave",
    "Calculator",
    "Whole Chicken",
    "TV Screen",
    "Vacuum",
    "Couch",
    "Lettuce"
];

//Answers for correct unit for images (1=grams, 2=kilograms)
var picsAns=[
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    2,
    1,
    2,
    2,
    2,
    2,
    1
];

//create array of unique numbers, used to randomly pull from list of images
var numa=[];
    while (numa.length < 21)
    {
        var na = Math.floor(Math.random() * (20 - 0 + 1) ) + 0;
        if(numa.indexOf(na) === -1) numa.push(na);
    }


var cc=1; //Count for Assigning unit

var wqScore=0; //Score for worded questions
var score = 0; //Score used for 





//Practice Mass - Worded Questions

//worded questions
var wqs=[
    'Michael bought 15 oranges from the store. Each orange weighed 20 g.<br>How much did the oranges weigh all together?',
    
    'A bag of potatoes weighs 28.3 kg and a bag of onions weighs 16.9 kg.<br>What is the difference in their weight?',
    
    'Daniella has a bag of rice which weighs 2.6 Kg.<br>How much short of 5 kg is this weight?',
    
    'What weight must be added to 727 g to make 1.5 kg?',
    
    'A vendor had 5 crates of apples. If each box of apples weighed 12 kg,<br>what was the total weight of the 5 crates of apples?',
    
    '210 kg of marbles were put in 8 bags. If each bag contained the same weight of marbles,<br>what is the weight of each bag?',
    
    'A box contains 74 kg of sugar.<br>How many packets each holding 2 kg can be filled from it?',
    
    'What is the total weight of 3 packages which weigh 4kg 150g, 2kg 525g and 5kg 725g?',
    
    'Brandon wants to send a crate of pears by mail. It cannot weigh more than 9 Kg. If each pear weighs 50 g, how many can he send?',
    
    'If 12 bags of salt wieghed 132 Kg in total. How much does one bag weigh?',
    
    'Camron bought a TV weighing 120 Kg. His table can only hold 89 Kg. How many grams too heavy is the TV for the table?',
    
    'Thomas caught a fish weighing 2.7 Kg. How many grams is that?'
];

//answers
var wqa=[
    300,
    11.4,
    2400,
    773,
    60,
    1680,
    37,
    12400,
    180,
    11,
    31,
    2700
];

//units used
var wqu=[
    'g',
    'Kg',
    'g',
    'g',
    'Kg',
    'g',
    'packets',
    'Kg',
    'pears',
    'Kg',
    'Kg',
    'g'
];

//create array of unique numbers, used to randomly pull from list of questions
var rn4wq=[];
while (rn4wq.length < 8)
    {
        var wqct = Math.floor(Math.random() * (7 - 0 + 1) ) + 0;
        if(rn4wq.indexOf(wqct) === -1) rn4wq.push(wqct);
    }
var wqInc = 0;








//Learning Mass - Compare example
//function massCompare1() 
//{
//    document.getElementById("first").style.display = "none";
//    document.getElementById("second").style.display = "block";
//    
//    document.getElementById('massImg').src = '../../img/pencil.jpeg';
//    document.getElementById('desc').innerHTML = "Pencil";
//    
//}
//function massCompare2() 
//{
//    document.getElementById("second").style.display = "none";
//    document.getElementById("third").style.display = "block";
//    
//    document.getElementById('massImg').src = '../../img/schoolDesk.jpg';
//    document.getElementById('desc').innerHTML = "School Desk";
//}




//Learning Mass - Example Conversion Questions
function btn1(numConversion)
{
    if (numConversion == 1)
        {
            if(document.getElementById('LMeg1').value == 4)
            {
                document.getElementById('first').classList.add("text-success", "border-success");
                document.getElementById('lmc1').style.display = "block";
                document.getElementById('lmc1').classList.add('bounce-top');
                
                document.getElementById('LMegBtn1').innerHTML = 'CORRECT!';
                document.getElementById('LMegBtn1').disabled = 'true';
                
                document.getElementById("typeAns").style.display = "none";
                
                document.getElementById('first').classList.add('slide-out-left2');
                setTimeout(function(){
                    document.getElementById('first').style.display = "none";
                },2500);
                document.getElementById('second').classList.add("slide-in-top");
                setTimeout(function(){
                    document.getElementById('second').style.display = "block";
                },2500);
                document.getElementById('lmh1').style.display = 'none';
                document.getElementById('lmh1a').style.display = 'none';
                document.getElementById('lma1').style.display = 'none';
                document.getElementById('lmta1').style.display = 'none';
                meCount = 0;
            }
            else if (meCount == 0)
                {
                    if (document.getElementById("LMeg1").value == "")
                        {
                            document.getElementById("lmta1").style.display = "block";
                        }
                    else if (document.getElementById("LMeg1").value != "")
                        {
                            same = document.getElementById("LMeg1").value;
                            document.getElementById("lmh1").style.display = "block";
                            document.getElementById("typeAns").style.display = "none";
                            document.getElementById("lmta1").style.display = "none";
                            meCount++;
                        }
                    
                }
            else if (meCount == 1)
                {
                    if (document.getElementById("LMeg1").value == same)
                        {
                            document.getElementById("lmh1a").style.display = "block";
                        }
                    else
                        {
                            document.getElementById("lma1").style.display = "block";
                            same = document.getElementById("LMeg1").value;
                            document.getElementById('lmh1a').style.display = 'none';
                            meCount++;
                            
                        }
                }
        }
    else if (numConversion == 2)
        {
            if(document.getElementById('LMeg2').value == 7)
            {
                document.getElementById('second').classList.add("text-success", "border-success");
                document.getElementById('lmc2').style.display = "block";
                document.getElementById('lmc2').classList.add('bounce-top');
                
                document.getElementById('LMeg2').classList.add('text-success');
                document.getElementById('LMegBtn2').classList.add("btn-success");
                document.getElementById('LMegBtn2').innerHTML = 'CORRECT!';
                document.getElementById('LMegBtn2').disabled = 'true';
                
                document.getElementById("typeAns").style.display = "none";
                
                document.getElementById('second').classList.remove('slide-in-top');
                document.getElementById('second').classList.add('slide-out-left2');
                setTimeout(function(){
                    document.getElementById('second').style.display = "none";
                },2500);
                document.getElementById('third').classList.add("slide-in-top");
                setTimeout(function(){
                    document.getElementById('third').style.display = "block";
                },2500);
                document.getElementById('lmh2').style.display = 'none';
                document.getElementById('lmh2a').style.display = 'none';
                document.getElementById('lma2').style.display = 'none';
                document.getElementById('lmta2').style.display = 'none';
                meCount = 0;
            }
            else if (meCount == 0)
                {
                    if (document.getElementById("LMeg2").value == "")
                        {
                            document.getElementById("typeAns").style.display = "block";
                        }
                    else if (document.getElementById("LMeg2").value != "")
                        {
                            document.getElementById("lmh2").style.display = "block";
                            document.getElementById("typeAns").style.display = "none";
                            same = document.getElementById("LMeg2").value;
                            document.getElementById("lmta1").style.display = "none";
                            meCount++;
                        }
                }
            else if (meCount == 1)
                {
                    if (document.getElementById("LMeg2").value == same)
                        {
                            document.getElementById("lmh2a").style.display = "block";
                        }
                    else
                        {
                            document.getElementById("lma2").style.display = "block";
                            same = document.getElementById("LMeg2").value;
                            document.getElementById('lmh2a').style.display = 'none';
                            meCount++;
                        }
                }
        }
    else if (numConversion == 3)
        {
            if(document.getElementById('LMeg3').value == 6000)
            {
                document.getElementById('third').classList.add("text-success", "border-success");
                document.getElementById('lmc3').style.display = "block";
                document.getElementById('lmc3').classList.add('bounce-top');
                
                document.getElementById('LMeg3').classList.add('text-success');
                document.getElementById('LMegBtn3').classList.add("btn-success");
                document.getElementById('LMegBtn3').innerHTML = 'CORRECT!';
                document.getElementById('LMegBtn3').disabled = 'true';
                
                document.getElementById("typeAns").style.display = "none";
                
                //document.getElementById('fourth').style.visibility = 'visible';
                document.getElementById('third').classList.remove('slide-in-top');
                document.getElementById('third').classList.add('slide-out-left2');
                setTimeout(function(){
                    document.getElementById('third').style.display = "none";
                },2500);
                document.getElementById('fourth').classList.add("slide-in-top");
                setTimeout(function(){
                    document.getElementById('fourth').style.display = "block";
                },2500);
                document.getElementById('lmh3').style.display = 'none';
                document.getElementById('lmh3a').style.display = 'none';
                document.getElementById('lma3').style.display = 'none';
                document.getElementById('lmta3').style.display = 'none';
                meCount = 0;
            }
            else if (meCount == 0)
                {
                    if (document.getElementById("LMeg3").value == "")
                        {
                            document.getElementById("typeAns").style.display = "block";
                        }
                    else if (document.getElementById("LMeg3").value != "")
                        {
                            document.getElementById("lmh3").style.display = "block";
                            document.getElementById("typeAns").style.display = "none";
                            same = document.getElementById("LMeg3").value;
                            document.getElementById("lmta1").style.display = "none";
                            meCount++;
                        }
                }
            else if (meCount == 1)
                {
                    if (document.getElementById("LMeg3").value == same)
                        {
                            document.getElementById("lmh3a").style.display = "block";
                        }
                    else
                        {
                            document.getElementById("lma3").style.display = "block";
                            same = document.getElementById("LMeg3").value;
                            document.getElementById('lmh3a').style.display = 'none';
                            meCount++;
                        }
                }
        }
    else if (numConversion == 4)
        {
            if(document.getElementById('LMeg4').value == 9000)
            {
                document.getElementById('fourth').classList.add("text-success", "border-success");
                document.getElementById('lmc4').style.display = "block";
                document.getElementById('lmc4').classList.add('bounce-top');
                
                document.getElementById('LMeg4').classList.add('text-success');
                document.getElementById('LMegBtn4').classList.add("btn-success");
                document.getElementById('LMegBtn4').innerHTML = 'CORRECT!';
                document.getElementById('LMegBtn4').disabled = 'true';
                
                document.getElementById("typeAns").style.display = "none";
                
                document.getElementById('LMegBtnNext').style.visibility = 'visible';
                meCount++;
                
                document.getElementById('lmh4').style.display = 'none';
                document.getElementById('lmh4a').style.display = 'none';
                document.getElementById('lma4').style.display = 'none';
                document.getElementById('lmta4').style.display = 'none';
                meCount = 0;
            }
            else if (meCount == 0)
                {
                    if (document.getElementById("LMeg4").value == "")
                        {
                            document.getElementById("typeAns").style.display = "block";
                        }
                    else if (document.getElementById("LMeg4").value != "")
                        {
                            document.getElementById("lmh4").style.display = "block";
                            document.getElementById("typeAns").style.display = "none";
                            same = document.getElementById("LMeg4").value;
                            document.getElementById("lmta1").style.display = "none";
                            meCount++;
                        }
                }
            else if (meCount == 1)
                {
                    if (document.getElementById("LMeg4").value == same)
                        {
                            document.getElementById("lmh4a").style.display = "block";
                        }
                    else
                        {
                            document.getElementById("lma4").style.display = "block";
                            same = document.getElementById("LMeg4").value;
                            document.getElementById('lmh4a').style.display = 'none';
                            meCount++;
                        }
                }
        }
}





//Mass exercise questions

//NEW CONVERSION
function practiceConv(amt) 
{
    
    document.getElementById("h1").style.display = "none";
    convScore = 0;
    globalAmt = amt;
    
    var textCard = "";
    var b = 1;
    var bEnd = b + 2;
    var check = Math.floor(Math.random() * (3 - 2 + 1) ) + 2;
    check = check%2;
    
    var ra = 0;
    var rb = 0;
    
    document.getElementById('massConvertNumQs').style.display = "none";
    document.getElementById('title').style.display = "block";
    
    

    while (num < amt)
            {
                if (check == 0)
                {
                    while (b < bEnd)
                    {//kg to g
                        convAns.push(rArr1[ra] + "" + rArr2[ra]);
                        textCard = '<div id="q'+b+'"><span id="a'+b+'"  class="invis">'+check+'</span><div id="card'+b+'" class="card shadow-lg p-2 mb-2 rounded lato" style="background-color: LightSeaGreen; font-size: 40px;"><div class="card-body text-center"><p><span id="num'+b+'">'+rArr1[ra]+'</span> <span id="testforhint'+b+'">Kg</span> <span id="num'+b+'">'+rArr2[ra]+'</span> g = <input type="number" id="'+b+'" maxlength="4" size="4"> g</p><div id="test'+b+'"><button type="button" id="mConvCheckAns'+b+'" class="btn btn-primary mx-auto btn-lg" onclick="mConvAns('+b+')">Check Answer</button> <button type="button" class="btn mx-auto btn-lg" onclick="convHint()" style="background-color: gold;">Hint</button></div><div id="nextQ'+b+'" class="hide"><button type="button" class="btn btn-primary mx-auto btn-lg" onclick="nextConvQ('+b+')">Next Question</button></div><br><h1 id="pmc'+b+'" class="display-2 hide" style="color: DarkGreen;"><b>&#10003;</b></h1><p id="note'+b+'" class=""></p></div></div></div>';
                        document.getElementById('c' + b).innerHTML = textCard;
                        ra++;
                        b++;
                    }
                    num = num + 2;
                    bEnd = bEnd + 2;
                    check = 1;
                }
                else if (check == 1)
                {
                    
                    while (b < bEnd)
                    {//g to kg
                        convAns.push(rArr3[rb]/1000);
                        textCard = '<div id="q'+b+'"><span id="a'+b+'"  class="invis">'+check+'</span><div id="card'+b+'" class="card shadow-lg p-2 mb-3 rounded lato" style="background-color: LightSeaGreen; font-size: 40px;"><div class="card-body text-center"><p><span id="num'+b+'">'+rArr3[rb]+'</span> <span id="testforhint'+b+'">g</span> = <input type="number" id="'+b+'" maxlength="4" size="4"> Kg</p><div id="test'+b+'"><button type="button" id="mConvCheckAns'+b+'" class="btn btn-primary mx-auto btn-lg" onclick="mConvAns('+b+')">Check Answer</button> <button type="button" class="btn mx-auto btn-lg" onclick="convHint()" style="background-color: gold;">Hint</button></div><div id="nextQ'+b+'" class="hide"><button type="button" class="btn btn-primary mx-auto btn-lg" onclick="nextConvQ('+b+')">Next Question</button></div><br><h1 id="pmc'+b+'" class="display-2 hide" style="color: DarkGreen;"><b>&#10003;</b></h1><p id="note'+b+'" class=""></p></div></div></div>';
                        document.getElementById('c' + b).innerHTML = textCard;
                        rb++;
                        b++;
                    }
                    num = num + 2;
                    bEnd = bEnd + 2;
                    check = 0;
                }
                
            }
    
    document.getElementById("c1").style.display = "block";
    

}   

function mConvAns(ansNo)
{    
    var ansNo2 = ansNo-1;
    
    if (document.getElementById(ansNo).value == convAns[ansNo2])
        {//ANSWER CORRECT
            document.getElementById(ansNo).disabled = "true";
            document.getElementById("test" + ansNo).style.display = "none";
            document.getElementById("nextQ" + ansNo).style.display = "block";
            document.getElementById('pmc' + ansNo).style.display = "block";
            document.getElementById('pmc' + ansNo).classList.add('bounce-top');
            
            document.getElementById('q' + ansNo).classList.add('wobble-hor-bottom');
            
            document.getElementById('bg-whole').classList.add('fade-in-bg'); //, 'bg-success'
            document.getElementById('bg-whole').style.background = "yellow";
            document.getElementById('title').classList.remove('text-primary');
                        
            document.getElementById("h1").style.display = "none";
            document.getElementById("h2").style.display = "none";
            document.getElementById("h3").style.display = "none";
            document.getElementById("note" + ansNo).innerHTML = "";
            
            document.getElementById('h1').classList.remove('swing-in-top-fwd-hint');
            document.getElementById('h2').classList.remove('swing-in-top-fwd-hint');
            document.getElementById('h3').classList.remove('swing-in-top-fwd-hint');
            
            same = 0;
            globalAns++;
            convScore++;
            convCount = 0;
        }
    else if (document.getElementById(ansNo).value == "")
        {//NO ANSWER
            document.getElementById("note" + ansNo).innerHTML = "you need to type an answer";
        }
    else if (document.getElementById(ansNo).value != convAns[ansNo2])
        {
            document.getElementById(ansNo).disabled = "true";
            document.getElementById("test" + ansNo).style.display = "none";
            document.getElementById("nextQ" + ansNo).style.display = "block";
            document.getElementById("note" + ansNo).innerHTML = "The correct answer is: " + convAns[ansNo2] + ' <span id="correctUnit'+ansNo+'"></span>';
            if (convAns[ansNo2] < 11)
                {
                    document.getElementById('correctUnit' + ansNo).innerHTML = 'Kg';
                }
            else if (convAns[ansNo2] > 11)
                {
                    document.getElementById('correctUnit' + ansNo).innerHTML = 'g';
                }
            document.getElementById('note' + ansNo).classList.add('text-danger');
            
            if (document.getElementById('testforhint' + ansNo).innerHTML == 'Kg' && document.getElementById(ansNo).value < 1000)
                {
                    document.getElementById('feedback').innerHTML = 'Remember, <span style="color: yellow;">MULTIPLY</span> <span style="color: Green;">kilograms</span> by <span style="color: yellow;">1000</span> to get <span style="color: Green;">grams</span><br> and then <span style="color: yellow;">total</span> the GRAMS together';
                }
            else if (document.getElementById('testforhint' + ansNo).innerHTML == 'g' && document.getElementById(ansNo).value > 10)
                {
                    document.getElementById('feedback').innerHTML = 'Remember, <span style="color: mediumorchid;">DIVIDE</span> <span style="color: Green;">grams</span> by <span style="color: mediumorchid;">1000</span> to get <span style="color: Green;">kilograms</span>';
                }
            
            document.getElementById("h1").style.display = "none";
            document.getElementById("h2").style.display = "none";
            document.getElementById("h3").style.display = "none";
            
            document.getElementById('h1').classList.remove('swing-in-top-fwd-hint');
            document.getElementById('h2').classList.remove('swing-in-top-fwd-hint');
            document.getElementById('h3').classList.remove('swing-in-top-fwd-hint');
            
            convCount = 0;
        }
}

function convHint() 
{    
    var globalAns2 = globalAns-1;
    if (convCount == 0) 
        {
            if (document.getElementById("a"+globalAns).innerHTML == 0)
                {
                    document.getElementById('h1').classList.add('swing-in-top-fwd-hint');
                    document.getElementById("h1a").innerHTML = 1;
                    document.getElementById("h1au").innerHTML = "Kg";
                    document.getElementById("h1b").innerHTML = 1000;
                    document.getElementById("h1bu").innerHTML = "g";
                    
                    document.getElementById('h2').classList.add('swing-in-top-fwd-hint');
                    if (Math.floor(convAns[globalAns2]/1000) == 3 || convAns[globalAns2] == 3000) {
                        document.getElementById("h2a").innerHTML = 3+2;
                    } else {
                        document.getElementById("h2a").innerHTML = 3;
                    }
                    document.getElementById("h2au").innerHTML = "Kg";
                    document.getElementById("h2b").innerHTML = document.getElementById("h2a").innerHTML * 1000;
                    document.getElementById("h2bu").innerHTML = "g";
                }
            else if (document.getElementById("a"+globalAns).innerHTML == 1)
                {
                    document.getElementById('h1').classList.add('swing-in-top-fwd-hint');
                    document.getElementById("h1a").innerHTML = "1000";
                    document.getElementById("h1au").innerHTML = "g";
                    document.getElementById("h1b").innerHTML = "1";
                    document.getElementById("h1bu").innerHTML = "Kg";
                    
                    document.getElementById('h2').classList.add('swing-in-top-fwd-hint');
                    if (Math.floor(convAns[globalAns2]) == 3000) {
                        document.getElementById("h2a").innerHTML = 3000+2000;
                    } else {
                        document.getElementById("h2a").innerHTML = 3000;
                    }
                    document.getElementById("h2au").innerHTML = "g";
                    document.getElementById("h2b").innerHTML = document.getElementById("h2a").innerHTML / 1000;
                    document.getElementById("h2bu").innerHTML = "Kg";
                }
            
            document.getElementById("h1").style.display = "block";
            document.getElementById("h2").style.display = "block";
            same = document.getElementById(globalAns).value;
            //convCount++; 
            
        } 
    else if (convCount == 1) 
        {
            if (document.getElementById(globalAns).value == "")
                {
                    document.getElementById("note" + globalAns).innerHTML = "you need to type an answer";
                }
            else if (same == document.getElementById(globalAns).value)
                {
                    document.getElementById("note" + globalAns).innerHTML = "that's the same answer as before";
                }
            else
                {
                    if (document.getElementById("a"+globalAns).innerHTML == 0)
                        {
                            document.getElementById('h2').classList.add('swing-in-top-fwd-hint');
                            if (Math.floor(convAns[globalAns2]/1000) == 3 || convAns[globalAns2] == 3000) {
                                document.getElementById("h2a").innerHTML = 3+2;
                            } else {
                                document.getElementById("h2a").innerHTML = 3;
                            }
                            document.getElementById("h2au").innerHTML = "Kg";
                            document.getElementById("h2b").innerHTML = document.getElementById("h2a").innerHTML * 1000;
                            document.getElementById("h2bu").innerHTML = "g";
                        }
                    else if (document.getElementById("a"+globalAns).innerHTML == 1)
                        {
                            document.getElementById('h2').classList.add('swing-in-top-fwd-hint');
                            if (Math.floor(convAns[globalAns2]) == 3000) {
                                document.getElementById("h2a").innerHTML = 3000+2000;
                            } else {
                                document.getElementById("h2a").innerHTML = 3000;
                            }
                            document.getElementById("h2au").innerHTML = "g";
                            document.getElementById("h2b").innerHTML = document.getElementById("h2a").innerHTML / 1000;
                            document.getElementById("h2bu").innerHTML = "Kg";
                        }
                    
                    document.getElementById("note" + globalAns).innerHTML = "";
                    document.getElementById("h2").style.display = "block";
                    same = document.getElementById(globalAns).value;
                    convCount++;
                }
            
        } 
    else if (convCount == 2) 
        {
            if (document.getElementById(globalAns).value == "")
                {
                    document.getElementById("note" + globalAns).innerHTML = "you need to type an answer";
                }
            else if (same == document.getElementById(globalAns).value)
                {
                    document.getElementById("note" + globalAns).innerHTML = "that's the same answer as before";
                }
            else
                {
                    if (document.getElementById("a"+globalAns).innerHTML == 0)
                        {
                            document.getElementById('h3').classList.add('swing-in-top-fwd-hint');
                            document.getElementById("h3a").innerHTML = Math.floor(convAns[globalAns2]/1000);
                            document.getElementById("h3au").innerHTML = "Kg";
                            document.getElementById("h3b").innerHTML = convAns[globalAns2] - (Math.floor(convAns[globalAns2]/1000) * 1000);
                            document.getElementById("h3bu").innerHTML = "g";
                            
                            document.getElementById("note" + globalAns).innerHTML = "";
                            document.getElementById("h3").style.display = "block";
                            same = 0;
                            convCount++;
                        }
                    else if (document.getElementById("a"+globalAns).innerHTML == 1)
                        {
                            document.getElementById("note" + globalAns).innerHTML = "No More Hints";
                        }
                    
                    
                }
        }
    else if (convCount > 2)
        {
            document.getElementById("note" + globalAns).innerHTML = "No More Hints";
        }
}

function nextConvQ(ansNo)
{
    if (ansNo+1 > globalAmt)
        {
            document.getElementById("title").style.display = "none";
            document.getElementById("c" + ansNo).style.display = "none";
            document.getElementById("h1").style.display = "none";
            document.getElementById("h2").style.display = "none";
            document.getElementById("h3").style.display = "none";
            document.getElementById('feedback').innerHTML = "";
            
            document.getElementById("bg-whole").classList.add("bg-success");
            document.getElementById("bg-whole").style.opacity = "1";
            document.getElementById("backBtn").classList.add("hide");
            document.getElementById("convEnd").style.display = "block";
            document.getElementById("convScore").innerHTML = convScore;
            document.getElementById("convScoreTotal").innerHTML = globalAmt;
        }
    else
        {
            document.getElementById('feedback').innerHTML = "";
            document.getElementById("c" + ansNo).style.display = "none";
            document.getElementById('bg-whole').classList.remove('fade-in-bg', 'bg-success');
            document.getElementById('title').classList.add('text-primary');
            
            ansNo++;
            document.getElementById("c" + ansNo).style.display = "block";
            document.getElementById("c" + ansNo).classList.add("slide-in-left2");
            document.getElementById("h1").style.display = "none";
            document.getElementById("h2").style.display = "none";
            document.getElementById("h3").style.display = "none";
            document.getElementById("note" + ansNo).innerHTML = "";
            
        }
}




// WORDED QUESTIONS

function practiceWorded()
{
    var t = 0;
    document.getElementById('massWordedTitle').style.display = 'none';
    for (t = 0; t<8; t++)
        {
            var text = '<div class="card mb-5" style="background-color: Tomato;"><div class="card-body"><p id="wq' + wqInc + '" class="text-center"><b>' + wqs[rn4wq[wqInc]] + '</b></p>\
            <h1 id="correct'+wqInc+'" class="display-2 text-center hide" style="color: DarkGreen;"><b>&#10003;</b></h1>\
            <p id="note'+wqInc+'" class="text-center" style="color: yellow;"></p></div></div>\
            <input type="number" id="'+wqInc+'" class="text-center" style="width: 80%;"> <span id="unit"'+wqInc+'"><b>'+wqu[rn4wq[wqInc]]+'</b></span> \
            <div id="ans' + wqInc + '" class="hide">' + wqa[rn4wq[wqInc]] + '</div><br>\
            <button type="button" id="CheckAns'+wqInc+'" class="btn btn-lg btn-block text-white mt-3" onclick="checkWq('+wqInc+')" style="background-color: fuchsia; width: 100%;">Check Answer</button>\
            <div id="nextQ'+wqInc+'" class="hide"><button type="button" class="btn btn-success mx-auto btn-lg btn-block" onclick="nextWq('+wqInc+')">Next Question</button></div>';
            document.getElementById('c' + wqInc).innerHTML = text;
            wqInc++;
        }
    document.getElementById('title').style.display = "block";
    document.getElementById('c' + 0).style.display = "block";
}

function checkWq(no)
{
    if (document.getElementById(no).value == document.getElementById('ans' + no).innerHTML)
        {
            document.getElementById('correct' + no).style.display = "block";
            document.getElementById('correct' + no).classList.add('bounce-top');
            
            document.getElementById('note' + no).innerHTML = "";
            
            document.getElementById('bg-whole').classList.add('fade-in-bg'); //, 'bg-success'
            document.getElementById('bg-whole').classList.add = "bg-success";
            
            document.getElementById('CheckAns' + no).style.display = "none";
            document.getElementById('nextQ' + no).style.display = "block";
            
            wqScore++;
        }
    else if (document.getElementById(no).value != document.getElementById('ans' + no).innerHTML)
        {
            document.getElementById('note' + no).innerHTML = "The correct answer is: " + document.getElementById('ans' + no).innerHTML;
            document.getElementById('CheckAns' + no).style.display = "none";
            document.getElementById('nextQ' + no).style.display = "block";
        }
}

function nextWq(no)
{
    if (no+1 > 7)
        {
            document.getElementById('title').style.display = "none";
            document.getElementById("c" + no).style.display = "none";
            
            document.getElementById("bg-whole").classList.add("bg-success");
            document.getElementById("bg-whole").style.opacity = "1";
            document.getElementById("backBtn").classList.add("hide");
            document.getElementById("wordQEnd").style.display = "block";
            document.getElementById("wordScore").innerHTML = wqScore;
        }
    else
        {
            document.getElementById("c" + no).style.display = "none";
            //document.getElementById('bg-whole').classList.remove('fade-in-bg'); //, 'bg-success'
            //document.getElementById('bg-whole').classList.remove = "bg-success";
            
            no++;
            document.getElementById("c" + no).style.display = "block";
            document.getElementById("c" + no).classList.add("slide-in-left2");
            document.getElementById("note" + no).innerHTML = "";
        }
}



//CHOOSE UNIT
//start the exercise
function strt()
{
    document.getElementById("begin").style.display = "none";
    document.getElementById("choosePg").style.display = "block";
    document.getElementById("massImg").src = pics[numa[0]];
    document.getElementById("desc").innerHTML = picsDesc[numa[0]];
    document.getElementById("chooseAns").innerHTML = picsAns[numa[0]];
}

//Check if chosen unit is correct
function check(no)
{
    var chooseChk = document.getElementById("chooseAns").innerHTML;

    if (no == chooseChk)
        {
            document.getElementById('correct').style.display = "block";
            document.getElementById('buttns').style.display = "none";
            
            setTimeout(function(){
                if (cc > 6) 
                    {
                        document.getElementById("choosePg").style.display = "none";
                        document.getElementById("score").innerHTML = score;
                        document.getElementById("again").style.display = "block";
                    }
                else
                    {
                        document.getElementById("massImg").src = pics[numa[cc]];
                        document.getElementById("desc").innerHTML = picsDesc[numa[cc]];
                        document.getElementById("chooseAns").innerHTML = picsAns[numa[cc]];
                        document.getElementById('correct').style.display = "none";
                        document.getElementById('buttns').style.display = "block";
                    }
                cc++;
            },2000);
            score++;
        }
    else if (no != chooseChk)
        {
            document.getElementById('incorrect').style.display = "block";
            document.getElementById('buttns').style.display = "none";
            
            setTimeout(function(){
            if (cc > 6) 
                    {
                        document.getElementById("choosePg").style.display = "none";
                        document.getElementById("score").innerHTML = score;
                        document.getElementById("again").style.display = "block";
                    } 
                else
                    {
                        document.getElementById("massImg").src = pics[numa[cc]];
                        document.getElementById("desc").innerHTML = picsDesc[numa[cc]];
                        document.getElementById("chooseAns").innerHTML = picsAns[numa[cc]];
                        document.getElementById('incorrect').style.display = "none";
                        document.getElementById('buttns').style.display = "block";
                    }
            cc++;
            },2000);
        }
}

