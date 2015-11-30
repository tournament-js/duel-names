var $ = require('interlude')
  , Duel = require('duel')
  , duelNames = require(process.env.DUEL_NAMES_COV ? '../duel_names-cov.js' : '../');

Duel.attachNames(duelNames(require('../portuguese.js')));

exports.single = function (t) {
  var d = new Duel(32, { last: Duel.WB }) // using bronze final
    , gs = d.matches;

  var rounds = $.nub(gs.map($.get('id', 'r'))).sort($.compare());
  // to prove we covered all the bases
  t.deepEqual(rounds, [1, 2, 3, 4, 5], "5 rounds in a 32 player SE tournament");

  var checkMatch = function (m) {
    var r = m.id.r;
    var name = d.roundName(m.id);
    if (m.id.s === 2) {
      t.equal(name, "Disputa do terceiro Lugar", "Round 1 LB name");
    }
    else {
      var wbRoundNames = {
        1: "Rodada de 32",
        2: "Rodada de 16",
        3: "Quartas de final",
        4: "Semifinal",
        5: "Grande final"
      };
      t.ok(wbRoundNames[r], "not in a weird round");
      t.equal(name, wbRoundNames[r], "Rodada " + r + " WB name");
    }
  };

  gs.forEach(checkMatch);
  t.done();
};

exports.double = function (t) {
  var d = new Duel(32, { last: Duel.LB }) // using double final
    , gs = d.matches;
  // should be 2*p === LB rounds === 2*5 = 10
  var checkLb = function (r, name) {
    var lbRoundNames = {
      1: "Repescagem Rodada de 16",
      2: "Repescagem Rodada Decisiva de 16",
      3: "Repescagem Rodada de 8",
      4: "Repescagem Rodada Decisiva de 8",
      5: "Repescagem Rodada de 4",
      6: "Repescagem Rodada Decisiva de 4",
      // special rounds
      7: "Repescagem Disputa do quarto lugar",
      8: "Repescagem Disputa do terceiro lugar",
      9: "Final",
      10: "Grande final"
    };
    t.ok(lbRoundNames[r], "not in a weird round");
    t.equal(name, lbRoundNames[r], "Rodada " + r + " LB name");
  };
  var checkWb = function (r, name) {
    var wbRoundNames = {
      1: "Vencedores Rodada de 32",
      2: "Vencedores Rodada de 16",
      3: "Vencedores Quartas de final",
      4: "Vencedores Semifinal",
      5: "Vencedores Final"
    };
    t.ok(wbRoundNames[r], "not in a weird round");
    t.equal(name, wbRoundNames[r], "Rodada " + r + " WB name");
  };

  gs.forEach(function (m) {
    var r = m.id.r;
    var name = d.roundName(m.id);
    if (m.id.s === 2) {
      checkLb(r, name);
    }
    else {
      checkWb(r, name);
    }
  });

  t.done();
};
