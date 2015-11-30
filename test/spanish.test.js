var testLanguage = require('./language');

testLanguage('spanish', 32, {
  // Single elimination
  rounds: {
    1: 'Ronda de 32',
    2: 'Octavos de final',
    3: 'Cuartos de final',
    4: 'Semifinal',
    5: 'Gran final'
  },
  bronzeFinal: 'Partido del tercer lugar',
  // Double elimination names
  winnerRounds: {
    1: 'Ganadores Ronda de 32',
    2: 'Ganadores Octavos de final',
    3: 'Ganadores Cuartos de final',
    4: 'Ganadores Semifinal',
    5: 'Ganadores Final'
  },
  loserRounds: {
    1: 'Repesca Ronda de 16',
    2: 'Repesca Ronda Decisiva de 16',
    3: 'Repesca Ronda de 8',
    4: 'Repesca Ronda Decisiva de 8',
    5: 'Repesca Ronda de 4',
    6: 'Repesca Ronda Decisiva de 4',
    // special rounds
    7: 'Partido del cuarto lugar',
    8: 'Partido del tercer lugar',
    9: 'Final',
    10: 'Gran final'
  }
});
