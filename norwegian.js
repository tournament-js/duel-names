var specials = {
  '4': 'Semi',
  '8': 'Kvart',
  '16': 'Åttendels',
  '32': 'Sekstendels',
  '64': 'Trettitodels',
  '128': 'Sekstifiredels',
  '256': 'Hundreogtjueåttedels'
};

var ordinals = function (num) {
  return (num in specials) ? specials[num] : num/2 + '-dels';
};

var prependLosersThenOrdinal = function (losers, str) {
  return function (num) {
    return losers + ordinals(num).toLowerCase() + str;
  };
};

var prependOrdinal = function (str) {
  return function (num) {
    return ordinals(num) + str;
  };
};
var constant = function (str) {
  return function () {
    return str;
  };
};

exports.single = [
  constant('Bronsefinale'),
  constant('Finale'),
  prependOrdinal('finaler')
];

exports.doubleWinners = [
  constant('Finale'),
  prependOrdinal('finaler')
];

exports.doubleLosers = [
  constant('Storfinale'),
  constant('Storfinale'),
  constant('Tapernes storfinale'),
  constant('Tapernes finale'),
  prependLosersThenOrdinal('Tapernes siste ', 'finaler'),
  prependLosersThenOrdinal('Tapernes ', 'finaler')
];
