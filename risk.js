let combatLog = "";

function simulateCasualties (attackers, defenders){

    attackers = Math.min(attackers, 3);
    defenders = Math.min(defenders, 2);

    let attackerCasualties = 0;
    let defenderCasualties = 0;

    const dice = {
        attacker: [],
        defender: []
    };

    rollDice(attackers, defenders, dice);

    for (let i = 0; i < defenders; i++){
        attackerCasualties += (dice.defender[i] >= dice.attacker[i]);
        defenderCasualties += (dice.defender[i]) < dice.attacker[i];
    }

    combatLog += `Attacker dice: ${dice.attacker}<br>`;
    combatLog += `Defender dice: ${dice.defender}<br>`;
    combatLog += `${attackerCasualties} attacker(s) and ${defenderCasualties} defender(s) died<br>`
    
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

function simulateCombat(){
    let attackers = parseInt(document.getElementById("attackerCount").value);
    let defenders = parseInt(document.getElementById("defenderCount").value);

    let combatResult = "";
    combatLog = "";
    let attackerTreshold = 0;
    const tresholdSelect = document.querySelectorAll('input[name="tresholdSelect"]');

    if (tresholdSelect[1].checked)
        attackerTreshold = parseInt(document.getElementById("attackerTreshold").value);
    else if (tresholdSelect[2].checked)
        attackerTreshold = attackers * parseInt(document.getElementById("attackerPercent").value)/100.0


    while(attackers > attackerTreshold && defenders > 0){
        let casualties = simulateCasualties(attackers, defenders);
        attackers -= casualties[0];
        defenders -= casualties[1];
        combatLog += `${attackers} attacker(s) and ${defenders} defender(s) left.<br><br>`
    }

    if (defenders == 0)
        combatResult = `Attacker wins!<br>Attacker was left with ${attackers} armies.`
    else if (attackers == 0)
        combatResult = `Defender wins!<br>Defender was left with ${defenders} armies.`
    else
        combatResult = `Attack stopped.<br>Attacker has ${attackers} armies left.<br>
        Defender has ${defenders} armies left.`

    document.getElementById("combatResult").innerHTML = combatResult;
    document.getElementById("combatLog").innerHTML = combatLog;

}

function showLogs(){
    logVisbility = document.getElementById("logContainer").style.display;

    if (logVisbility == "block")
        logVisbility = "none";
    else
        logVisbility = "block";

    document.getElementById("logContainer").style.display = logVisbility;
}
