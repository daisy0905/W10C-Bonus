function select(userSelection) {
    Cookies.set('pkmSelection', userSelection);
    window.open('pages/battle.html', '_self');
}