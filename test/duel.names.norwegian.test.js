var testLanguage = require('./language');

testLanguage('norwegian', 32, {
  // Single elimination
  rounds: {
    1: 'Sekstendelsfinaler',
    2: 'Åttendelsfinaler',
    3: 'Kvartfinaler',
    4: 'Semifinaler',
    5: 'Finale'
  },
  bronzeFinal: 'Bronsefinale',
  // Double elimination names
  winnerRounds: {
    1: 'Sekstendelsfinaler',
    2: 'Åttendelsfinaler',
    3: 'Kvartfinaler',
    4: 'Semifinaler',
    5: 'Finale'
  },
  loserRounds: {
    1: 'Tapernes åttendelsfinaler',
    2: 'Tapernes siste åttendelsfinaler',
    3: 'Tapernes kvartfinaler',
    4: 'Tapernes siste kvartfinaler',
    5: 'Tapernes semifinaler',
    6: 'Tapernes siste semifinaler',
    // special rounds
    7: 'Tapernes finale',
    8: 'Tapernes storfinale',
    9: 'Storfinale',
    10: 'Storfinale'
  }
});
