# risk-combat

A simulator for resolving big combats in the board game "RISK".

In the game, a combat always involves five armies at maximum and each combat involves rolling dice. This can become
very tedious especially in late game if both the attacking and defending side have dozens of armies involved.

This simulator makes the computer simulate the combat results to speed things up. The attacker can pause the attack based on
the number of troops left or just fight 'till the bitter end.

Under the hood, the combats are resolved by the rules of the game and each combat roll is logged.