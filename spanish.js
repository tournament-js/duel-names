var appendRoundNum = function (str) {
  return function (num) {
    return str + " de " + num;
  };
};
var constant = function (str) {
  return function () {
    return str;
  };
};

exports.single = [
  // bronze final is a special case and must be the first entry
  constant("Partido del tercer lugar"),
  // remaining entries are rounds in descending order of importance
  constant("Gran final"),
  constant("Semifinal"),
  constant("Cuartos de final"),
  appendRoundNum("Ronda")
];

exports.doubleWinners = [
  constant("Ganadores Final"),
  constant("Ganadores Semifinal"),
  constant("Ganadores Cuartos de final"),
  appendRoundNum("Ganadores Ronda")
];

exports.doubleLosers = [
  constant("Gran final"),                     // Strong grand final (no prefix lest we spoil)
  constant("Final"),                          // Potentially last game
  constant("Partido del tercer lugar"),       // 3rd place decider
  constant("Partido del cuarto lugar"),       // 4th place decider
  appendRoundNum("Repesca Ronda Decisiva"),   // last time there's X in LB
  appendRoundNum("Repesca Ronda")             // first time there's X in LB
];
