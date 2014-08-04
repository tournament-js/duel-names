var appendRoundNum = function (str) {
  return function (num) {
    return str + " of " + num;
  };
};
var constant = function (str) {
  return function () {
    return str;
  };
};

exports.single = [
  // bronze final is a special case and must be the first entry
  constant("Bronze final"), // bronze final match may be part of the 'finals' round
  // remaining entries are rounds in descending order of importance
  constant("Grand final"),  // often called just the 'Final'
  constant("Semi-finals"),
  constant("Quarter-finals"),
  appendRoundNum("Round")
];

// when in double elimination we use these 2
exports.doubleWinners = [
  constant("WB Final"),
  constant("WB Semi-finals"),
  constant("WB Quarter-finals"),
  appendRoundNum("WB Round")
];

exports.doubleLosers = [
  constant("Grand final"),          // Strong grand final (no prefix lest we spoil)
  constant("Grand final"),          // Potentially last game
  constant("LB Strong final"),      // 3rd place decider
  constant("LB Final"),             // 4th place decider
  appendRoundNum("LB Round"),       // first time there's X in LB
  appendRoundNum("LB Strong Round") // last time there's X in LB
];
