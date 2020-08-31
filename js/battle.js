//define the attributes of user-player's attack modes: [name, max of attack point, min of attack point, and healing point]  

var pkmList = [
    {
        name: 'Charizard', 
        maxHP: 550,
        attackSets: [
            ['Flamethrower', 80, 40,0],
            ['DragonClaw', 60, 30, 0],
            ['Normal', 50, 50, 0],
            ['LifeLink', 50, 50, 30]
        ]
    }, 
    {
        name: 'Blastoise', 
        maxHP: 1000,
        attackSets: [
            ['Surf', 50, 30, 0],
            ['Crunch', 40, 20, 0],
            ['Normal', 30, 30, 0],
            ['LifeLink', 30, 30, 15]
        ]
    }, 
    {
        name: 'Venusaur', 
        maxHP: 200,
        attackSets: [
            ['Blizzard', 200, 150, 0],
            ['Bomb', 150, 100, 0],
            ['Normal', 100, 100, 0],
            ['LifeLink', 100, 100, 50],
        ]
    }]         

//pick between 3 different Pokemon from homepage, set cookie for the selection and read the cookie in the battle page
var userSelection = Cookies.get('pkmSelection');
selection = document.getElementById('selection-container');
var userHealth = Cookies.get('userHP');
var computerHealth = Cookies.get('computerHP');

if(userSelection == 'charizard') {
    selection.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/en/1/1f/Pok%C3%A9mon_Charizard_art.png' alt='Charizard'>";
    for(i=0; i<4; i++) {
        document.getElementById('m'+i).value = pkmList[0].attackSets[i];
    }
    var userMaxHP = pkmList[0].maxHP;
    var maxAttack1 = pkmList[0].attackSets[0][1];
    var minAttack1 = pkmList[0].attackSets[0][2];
    var maxAttack2 = pkmList[0].attackSets[1][1];
    var minAttack2 = pkmList[0].attackSets[1][2];
    var maxAttack3 = pkmList[0].attackSets[2][1];
    var minAttack3 = pkmList[0].attackSets[2][2];
    var maxAttack4 = pkmList[0].attackSets[3][1];
    var minAttack4 = pkmList[0].attackSets[3][2];
    var healingPoint4 = pkmList[0].attackSets[3][3];

} else if(userSelection == 'blastoise') {
    selection.innerHTML = "<img src='https://images.gameinfo.io/pokemon/256/009-00.png' alt='Blastoise'>";
    for(i=0; i<4; i++) {
        document.getElementById('m'+i).value = pkmList[1].attackSets[i];
    }
    var userMaxHP = pkmList[1].maxHP;
    var maxAttack1 = pkmList[1].attackSets[0][1];
    var minAttack1 = pkmList[1].attackSets[0][2];
    var maxAttack2 = pkmList[1].attackSets[1][1];
    var minAttack2 = pkmList[1].attackSets[1][2];
    var maxAttack3 = pkmList[1].attackSets[2][1];
    var minAttack3 = pkmList[1].attackSets[2][2];
    var maxAttack4 = pkmList[1].attackSets[3][1];
    var minAttack4 = pkmList[1].attackSets[3][2];
    var healingPoint4 = pkmList[1].attackSets[3][3];

} else if(userSelection == 'venusaur') {
    selection.innerHTML = "<img src='https://images.gameinfo.io/pokemon/256/003-01.png' alt='Venusaur'>";
    for(i=0; i<4; i++) {
        document.getElementById('m'+i).value = pkmList[2].attackSets[i];
    }
    var userMaxHP = pkmList[2].maxHP;
    var maxAttack1 = pkmList[2].attackSets[0][1];
    var minAttack1 = pkmList[2].attackSets[0][2];
    var maxAttack2 = pkmList[2].attackSets[1][1];
    var minAttack2 = pkmList[2].attackSets[1][2];
    var maxAttack3 = pkmList[2].attackSets[2][1];
    var minAttack3 = pkmList[2].attackSets[2][2];
    var maxAttack4 = pkmList[2].attackSets[3][1];
    var minAttack4 = pkmList[2].attackSets[3][2];
    var healingPoint4 = pkmList[2].attackSets[3][3];

} else {
    selection.innerHTML = "<p>Invalid Choice!</p>";
}

var userCurrentHP = userMaxHP;
var computerMaxHP = 1000;
var computerCurrentHP = computerMaxHP;

//define computer-player's attributes
//set Blastoise as computer-player's character
var compMaxAttack1 = pkmList[1].attackSets[0][1];
var compMinAttack1 = pkmList[1].attackSets[0][2];
var compMaxAttack2 = pkmList[1].attackSets[1][1];
var compMinAttack2 = pkmList[1].attackSets[1][2];
var compMaxAttack3 = pkmList[1].attackSets[2][1];
var compMinAttack3 = pkmList[1].attackSets[2][2];
var compMaxAttack4 = pkmList[1].attackSets[3][1];
var compMinAttack4 = pkmList[1].attackSets[3][2];
var compHealingPoint4 = pkmList[1].attackSets[3][3]; 

if(userHealth == undefined) {
    userCurrentHP = userMaxHP;
    computerCurrentHP = computerMaxHP;
} else {
    userCurrentHP = parseInt(userHealth);
    computerCurrentHP = parseInt(computerHealth);
}

document.getElementById('hp1').innerHTML = '<p>HP:' + userCurrentHP + '/' + userMaxHP + '</p>';
document.getElementById('hp2').innerHTML = '<p>HP:' + computerCurrentHP + '/' + computerMaxHP + '</p>';

//define functions for four attack modes
//The user-player select an attack, and the computer player attack after with four attack modes at random
function attackOne() {
    var compDamagePoint1 =  Math.floor(Math.random() * (maxAttack1-minAttack1+1)) + minAttack1;
    computerCurrentHP = computerCurrentHP - compDamagePoint1;
    document.getElementById('hp2').innerHTML = '<p>HP:' + computerCurrentHP + '/' + computerMaxHP + '</p>';
    console.log(compDamagePoint1);
    console.log(computerCurrentHP);

    checkWinner();

    var compAttackSet = pkmList[1].attackSets[Math.floor(Math.random()*4)];
    if(compAttackSet = pkmList[1].attackSets[0]){
        var userDamagePoint1 = Math.floor(Math.random() * (compMaxAttack1-compMinAttack1+1)) + compMinAttack1;
        userCurrentHP = userCurrentHP - userDamagePoint1;
    } else if(compAttackSet = pkmList[1].attackSets[1]){
        var userDamagePoint2 = Math.floor(Math.random() * (compMaxAttack2-compMinAttack2+1)) + compMinAttack2;
        userCurrentHP = userCurrentHP - userDamagePoint2;
    } else if(compAttackSet = pkmList[1].attackSets[2]) {
        var userDamagePoint3 = compMaxAttack3;
        userCurrentHP = userCurrentHP - userDamagePoint3;
    } else if(compAttackSet = pkmList[1].attackSets[3]) {
        var userDamagePoint4 = compMaxAttack4;
        userCurrentHP = userCurrentHP - userDamagePoint4;
        computerCurrentHP = computerCurrentHP + compHealingPoint4;
    } 
    console.log(userCurrentHP);

    document.getElementById('hp1').innerHTML = '<p>HP:' + userCurrentHP + '/' + userMaxHP + '</p>';
    
    Cookies.set('userHP', userCurrentHP);
    Cookies.set('computerHP', computerCurrentHP);

    checkWinner();
}

function attackTwo() {
    var compDamagePoint2 =  Math.floor(Math.random() * (maxAttack2-minAttack2+1)) + minAttack2;
    computerCurrentHP = computerCurrentHP - compDamagePoint2;
    document.getElementById('hp2').innerHTML = '<p>HP:' + computerCurrentHP + '/' + computerMaxHP + '</p>';
    console.log(compDamagePoint2);
    console.log(computerCurrentHP);

    checkWinner();

    var compAttackSet = pkmList[1].attackSets[Math.floor(Math.random()*4)];
    if(compAttackSet = pkmList[1].attackSets[0]){
        var userDamagePoint1 = Math.floor(Math.random() * (compMaxAttack1-compMinAttack1+1)) + compMinAttack1;
        userCurrentHP = userCurrentHP - userDamagePoint1;
    } else if(compAttackSet = pkmList[1].attackSets[1]){
        var userDamagePoint2 = Math.floor(Math.random() * (compMaxAttack2-compMinAttack2+1)) + compMinAttack2;
        userCurrentHP = userCurrentHP - userDamagePoint2;
    } else if(compAttackSet = pkmList[1].attackSets[2]) {
        var userDamagePoint3 = compMaxAttack3;
        userCurrentHP = userCurrentHP - userDamagePoint3;
    } else if(compAttackSet = pkmList[1].attackSets[3]) {
        var userDamagePoint4 = compMaxAttack4;
        userCurrentHP = userCurrentHP - userDamagePoint4;
        computerCurrentHP = computerCurrentHP + compHealingPoint4;
    } 
    console.log(userCurrentHP);

    document.getElementById('hp1').innerHTML = '<p>HP:' + userCurrentHP + '/' + userMaxHP + '</p>';
    
    Cookies.set('userHP', userCurrentHP);
    Cookies.set('computerHP', computerCurrentHP);

    checkWinner();
}

function attackThree() {
    var compDamagePoint3 = maxAttack3;
    computerCurrentHP = computerCurrentHP - compDamagePoint3;
    document.getElementById('hp2').innerHTML = '<p>HP:' + computerCurrentHP + '/' + computerMaxHP + '</p>';
    console.log(compDamagePoint3);
    console.log(computerCurrentHP);

    checkWinner();
    var compAttackSet = pkmList[1].attackSets[Math.floor(Math.random()*4)];
    if(compAttackSet = pkmList[1].attackSets[0]){
        var userDamagePoint1 = Math.floor(Math.random() * (compMaxAttack1-compMinAttack1+1)) + compMinAttack1;
        userCurrentHP = userCurrentHP - userDamagePoint1;
    } else if(compAttackSet = pkmList[1].attackSets[1]){
        var userDamagePoint2 = Math.floor(Math.random() * (compMaxAttack2-compMinAttack2+1)) + compMinAttack2;
        userCurrentHP = userCurrentHP - userDamagePoint2;
    } else if(compAttackSet = pkmList[1].attackSets[2]) {
        var userDamagePoint3 = compMaxAttack3;
        userCurrentHP = userCurrentHP - userDamagePoint3;
    } else if(compAttackSet = pkmList[1].attackSets[3]) {
        var userDamagePoint4 = compMaxAttack4;
        userCurrentHP = userCurrentHP - userDamagePoint4;
        computerCurrentHP = computerCurrentHP + compHealingPoint4;
    } 
    console.log(userCurrentHP);

    document.getElementById('hp1').innerHTML = '<p>HP:' + userCurrentHP + '/' + userMaxHP + '</p>';
    
    Cookies.set('userHP', userCurrentHP);
    Cookies.set('computerHP', computerCurrentHP);

    checkWinner();
}

function attackFour() {
    var compDamagePoint4 = maxAttack4;
    computerCurrentHP = computerCurrentHP - compDamagePoint4;
    userCurrentHP = userCurrentHP + healingPoint4;
    document.getElementById('hp2').innerHTML = '<p>HP:' + computerCurrentHP + '/' + computerMaxHP + '</p>';
    console.log(compDamagePoint4);
    console.log(computerCurrentHP);

    checkWinner();

    var compAttackSet = pkmList[1].attackSets[Math.floor(Math.random()*4)];
    if(compAttackSet = pkmList[1].attackSets[0]){
        var userDamagePoint1 = Math.floor(Math.random() * (compMaxAttack1-compMinAttack1+1)) + compMinAttack1;
        userCurrentHP = userCurrentHP - userDamagePoint1;
    } else if(compAttackSet = pkmList[1].attackSets[1]){
        var userDamagePoint2 = Math.floor(Math.random() * (compMaxAttack2-compMinAttack2+1)) + compMinAttack2;
        userCurrentHP = userCurrentHP - userDamagePoint2;
    } else if(compAttackSet = pkmList[1].attackSets[2]) {
        var userDamagePoint3 = compMaxAttack3;
        userCurrentHP = userCurrentHP - userDamagePoint3;
    } else if(compAttackSet = pkmList[1].attackSets[3]) {
        var userDamagePoint4 = compMaxAttack4;
        userCurrentHP = userCurrentHP - userDamagePoint4;
        computerCurrentHP = computerCurrentHP + compHealingPoint4;
    } 
    console.log(userCurrentHP);

    document.getElementById('hp1').innerHTML = '<p>HP:' + userCurrentHP + '/' + userMaxHP + '</p>';
    
    Cookies.set('userHP', userCurrentHP);
    Cookies.set('computerHP', computerCurrentHP);

    checkWinner();
}

function checkWinner() {
    if(userCurrentHP<=0) {
        alert('<p>GAME OVER: computer wins!</p>');
        document.getElementById('hp1').innerHTML = '<p>HP: 0/' + userMaxHP + '</p>';
    } else if(computerCurrentHP<=0) {
        alert('<p>GAME OVER: user wins!</p>');
        document.getElementById('hp2').innerHTML = '<p>HP: 0/' + computerMaxHP + '</p>';
    }
}