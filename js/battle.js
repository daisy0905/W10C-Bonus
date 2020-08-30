
//building functionality for pokemon characters
//the attributes of attack sets: [name, max of attack point, min of attack point, range of randomized damage, healing point]  

var pkmList = [
    {
        name: 'Charizard', 
        maxHP: 550,
        attackSets: [
            ['Flamethrower', 40, 20, Math.floor(Math.random() * 20),0],
            ['DragonClaw', 30, 10, Math.floor(Math.random() * 20), 0],
            ['LifeLink',20, 20, 0, 10],
            ['Normal', 20, 20, 0, 0]
        ]
    }, 
    {
        name: 'Blastoise', 
        maxHP: 1000,
        attackSets: [
            ['Surf', 20, 10, Math.floor(Math.random() * 10),0],
            ['Crunch', 10, 5, Math.floor(Math.random() * 5), 0],
            ['LifeLink',20, 20, 0, 10],
            ['Normal', 20, 20, 0, 0]
        ]
    }, 
    {
        name: 'Venusaur', 
        maxHP: 200,
        attackSets: [
            ['Blizzard', 200, 150, Math.floor(Math.random() * 50),0],
            ['Bomb', 150, 100, Math.floor(Math.random() * 50), 0],
            ['LifeLink',20, 20, 0, 10],
            ['Normal', 20, 20, 0, 0]
        ]
    }]        
            

//defining user-player's attack buttons
var userSelection = Cookies.get('pkmSelection');
selection = document.getElementById('selection-container');
var userHealth = Cookies.get('userHP');
var computerHealth = Cookies.get('computerHP');

if(userSelection == 'charizard') {
    selection.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/en/1/1f/Pok%C3%A9mon_Charizard_art.png' alt='Charizard'>";
    for(i=0; i<4; i++) {
        document.getElementById('m'+i).value = pkmList[0].attackSets[i];
    }
    var userMaxHP = 550;
    var maxAttack1 = 40;
    var minAttack1 = 20;
    var maxAttack2 = 10;
    var minAttack2 = 5;
    var maxAttack3 = 20;
    var minAttack3 = 20;
    var maxAttack4 = 20;
    var minAttack4 = 20;
} else if(userSelection == 'blastoise') {
    selection.innerHTML = "<img src='https://images.gameinfo.io/pokemon/256/009-00.png' alt='Blastoise'>";
    for(i=0; i<4; i++) {
        document.getElementById('m'+i).value = pkmList[1].attackSets[i];
    }
    var userMaxHP = 1000;
} else if(userSelection == 'venusaur') {
    selection.innerHTML = "<img src='https://images.gameinfo.io/pokemon/256/003-01.png' alt='Venusaur'>";
    for(i=0; i<4; i++) {
        document.getElementById('m'+i).value = pkmList[2].attackSets[i];
    }
    var userMaxHP = 200;
} else {
    selection.innerHTML = "<p>Invalid Choice!</p>";
}

var userCurrentHP = userMaxHP;
var computerMaxHP = 1000;
var computerCurrentHP = computerMaxHP;

if(userHealth == undefined) {
    userCurrentHP = userMaxHP;
    computerCurrentHP = computerMaxHP;
} else {
    userCurrentHP = parseInt(userHealth);
    computerCurrentHP = parseInt(computerHealth);
}

document.getElementById('hp1').innerHTML = '<p>HP:' + userCurrentHP + '/' + userMaxHP + '</p>';
document.getElementById('hp2').innerHTML = '<p>HP:' + computerCurrentHP + '/' + computerMaxHP + '</p>';

function attackOne() {
    var damagePoint =  Math.floor(Math.random() * (maxAttack1-minAttack1));
    computerCurrentHP = computerCurrentHP - damagePoint;
    userCurrentHP = userCurrentHP - Math.floor(Math.random()*11);
    document.getElementById('hp1').innerHTML = '<p>HP:' + userCurrentHP + '/' + userMaxHP + '</p>';
    document.getElementById('hp2').innerHTML = '<p>HP:' + computerCurrentHP + '/' + computerMaxHP + '</p>';
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