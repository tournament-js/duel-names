var appendRoundNum = function (str) {
  return function (num) {
    return str + ' de ' + num;
  };
};
var constant = function (str) {
  return function () {
    return str;
  };
};

exports.single = [
  // bronze final is a special case and must be the first entry
  constant('Disputa do terceiro Lugar'),
  // remaining entries are rounds in descending order of importance
  constant('Grande final'),
  constant('Semifinal'),
  constant('Quartas de final'),
  constant('Oitavas de final'),
  appendRoundNum('Rodada')
];

exports.doubleWinners = [
  constant('Vencedores Final'),
  constant('Vencedores Semifinal'),
  constant('Vencedores Quartas de final'),
  constant('Vencedores Oitavas de final'),
  appendRoundNum('Vencedores Rodada')
];

exports.doubleLosers = [
  constant('Grande final'),                                 // Strong grand final (no prefix lest we spoil)
  constant('Final'),                                        // Potentially last game
  constant('Repescagem Disputa do terceiro lugar'),         // 3rd place decider
  constant('Repescagem Disputa do quarto lugar'),           // 4th place decider
  appendRoundNum('Repescagem Rodada Decisiva'),             // last time there's X in LB
  appendRoundNum('Repescagem Rodada')                       // first time there's X in LB
];
