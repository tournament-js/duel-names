var testLanguage = require('./language');

testLanguage('english', 64, {
  // Single elimination
  rounds: {
    1: 'Round of 64',
    2: 'Round of 32',
    3: 'Round of 16',
    4: 'Quarter-finals',
    5: 'Semi-finals',
    6: 'Grand final'
  },
  bronzeFinal: 'Bronze final',
  // Double elimination names
  winnerRounds: {
    1: 'WB Round of 64',
    2: 'WB Round of 32',
    3: 'WB Round of 16',
    4: 'WB Quarter-finals',
    5: 'WB Semi-finals',
    6: 'WB Final'
  },
  loserRounds: {
    1: 'LB Round of 32',
    2: 'LB Strong Round of 32',
    3: 'LB Round of 16',
    4: 'LB Strong Round of 16',
    5: 'LB Round of 8',
    6: 'LB Strong Round of 8',
    7: 'LB Round of 4',
    8: 'LB Strong Round of 4',
    // special rounds
    9: 'LB Final',
    10: 'LB Strong final',
    11: 'Grand final',
    12: 'Grand final'
  }
});

testLanguage('english', 8, {
  // Single elimination
  rounds: {
    1: 'Quarter-finals',
    2: 'Semi-finals',
    3: 'Grand final'
  },
  bronzeFinal: 'Bronze final',
  // Double elimination names
  winnerRounds: {
    1: 'WB Quarter-finals',
    2: 'WB Semi-finals',
    3: 'WB Final'
  },
  loserRounds: {
    1: 'LB Round of 4',
    2: 'LB Strong Round of 4',
    // special rounds
    3: 'LB Final',
    4: 'LB Strong final',
    5: 'Grand final',
    6: 'Grand final'
  }
});
testLanguage('english', 4, {
  // Single elimination
  rounds: {
    1: 'Semi-finals',
    2: 'Grand final'
  },
  bronzeFinal: 'Bronze final',
  // Double elimination names
  winnerRounds: {
    1: 'WB Semi-finals',
    2: 'WB Final'
  },
  loserRounds: {
    // special rounds
    1: 'LB Final',
    2: 'LB Strong final',
    3: 'Grand final',
    4: 'Grand final'
  }
});
