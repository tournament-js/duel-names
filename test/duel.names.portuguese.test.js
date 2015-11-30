var testLanguage = require('./language');

testLanguage('portuguese', 32, {
  // Single elimination
  rounds: {
    1: 'Rodada de 32',
    2: 'Oitavas de final',
    3: 'Quartas de final',
    4: 'Semifinal',
    5: 'Grande final'
  },
  bronzeFinal: 'Disputa do terceiro Lugar',
  // Double elimination names
  winnerRounds: {
    1: 'Vencedores Rodada de 32',
    2: 'Vencedores Oitavas de final',
    3: 'Vencedores Quartas de final',
    4: 'Vencedores Semifinal',
    5: 'Vencedores Final'
  },
  loserRounds: {
    1: 'Repescagem Rodada de 16',
    2: 'Repescagem Rodada Decisiva de 16',
    3: 'Repescagem Rodada de 8',
    4: 'Repescagem Rodada Decisiva de 8',
    5: 'Repescagem Rodada de 4',
    6: 'Repescagem Rodada Decisiva de 4',
    // special rounds
    7: 'Repescagem Disputa do quarto lugar',
    8: 'Repescagem Disputa do terceiro lugar',
    9: 'Final',
    10: 'Grande final'
  }
});
