function casualties (attackers, defenders){

    attackers = Math.min(attackers, 3);
    defenders = Math.min(defenders, 2);

    let attackerCasualties = 0;
    let defenderCasualties = 0;

    const dice = {
        attacker: [],
        defender: []
    };

    rollDice(attackers, defenders, dice);
    console.log(dice.attacker);
    console.log(dice.defender);

    for (let i = 0; i < defenders; i++){
        attackerCasualties += (dice.defender[i] >= dice.attacker[i]);
        defenderCasualties += (dice.defender[i]) < dice.attacker[i];
    }
    
    return [attackerCasualties, defenderCasualties];
}

function rollDice(attackers, defenders, dice){

    for (let i = 0; i < attackers; i++)
        dice.attacker[i] = Math.floor(Math.random() * 6) + 1;
    
    for (let i = 0; i < defenders; i++)
        dice.defender[i] = Math.floor(Math.random() * 6) + 1;

        dice.attacker.sort(function(a, b){return b - a});
        dice.defender.sort(function(a, b){return b - a});

}

console.log(casualties(12,1));
