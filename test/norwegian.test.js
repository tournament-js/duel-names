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

testLanguage('norwegian', 512, {
  // Single elimination
  rounds: {
    1: '256-delsfinaler',
    2: 'Hundreogtjueåttedelsfinaler',
    3: 'Sekstifiredelsfinaler',
    4: 'Trettitodelsfinaler',
    5: 'Sekstendelsfinaler',
    6: 'Åttendelsfinaler',
    7: 'Kvartfinaler',
    8: 'Semifinaler',
    9: 'Finale'
  },
  bronzeFinal: 'Bronsefinale',
  // Double elimination names
  winnerRounds: {
    1: '256-delsfinaler',
    2: 'Hundreogtjueåttedelsfinaler',
    3: 'Sekstifiredelsfinaler',
    4: 'Trettitodelsfinaler',
    5: 'Sekstendelsfinaler',
    6: 'Åttendelsfinaler',
    7: 'Kvartfinaler',
    8: 'Semifinaler',
    9: 'Finale'
  },
  loserRounds: {
    1: 'Tapernes hundreogtjueåttedelsfinaler',
    2: 'Tapernes siste hundreogtjueåttedelsfinaler',
    3: 'Tapernes sekstifiredelsfinaler',
    4: 'Tapernes siste sekstifiredelsfinaler',
    5: 'Tapernes trettitodelsfinaler',
    6: 'Tapernes siste trettitodelsfinaler',
    7: 'Tapernes sekstendelsfinaler',
    8: 'Tapernes siste sekstendelsfinaler',
    9: 'Tapernes åttendelsfinaler',
    10: 'Tapernes siste åttendelsfinaler',
    11: 'Tapernes kvartfinaler',
    12: 'Tapernes siste kvartfinaler',
    13: 'Tapernes semifinaler',
    14: 'Tapernes siste semifinaler',
    // special rounds
    15: 'Tapernes finale',
    16: 'Tapernes storfinale',
    17: 'Storfinale',
    18: 'Storfinale'
  }
});
