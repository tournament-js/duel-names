var $ = require('interlude')
  , Duel = require('duel')
  , duelNames = require(process.env.DUEL_NAMES_COV ? '../duel_names-cov.js' : '../');

Duel.attachNames(duelNames(require('../norwegian.js')));

exports.singleNorwegian = function (t) {
  var d = new Duel(32, { last: Duel.WB }) // using bronze final
    , gs = d.matches;

  var rounds = $.nub(gs.map($.get('id', 'r'))).sort($.compare());
  // to prove we covered all the bases
  t.deepEqual(rounds, [1,2,3,4, 5], "5 rounds in a 32 player SE tournament");

  var checkMatch = function (m) {
    var r = m.id.r;
    var name = d.roundName(m.id);
    if (m.id.s === 2) {
      t.equal(name, "Bronsefinale", "Round 1 LB name");
    }
    else {
      var wbRoundNames = {
        1: "Sekstendelsfinaler",
        2: "Åttendelsfinaler",
        3: "Kvartfinaler",
        4: "Semifinaler",
        5: "Finale"
      };
      t.ok(wbRoundNames[r], "not in a weird round");
      t.equal(name, wbRoundNames[r], "Round " + r + " WB name");
    }
  };

  gs.forEach(checkMatch);
  t.done();
};

exports.doubleNorwegian = function (t) {
  var d = new Duel(32, { last: Duel.LB }) // using double final
    , gs = d.matches;
  // should be 2*p === LB rounds === 2*5 = 10
  var checkLb = function (r, name) {
    var lbRoundNames = {
      1: "Tapernes åttendelsfinaler",
      2: "Tapernes siste åttendelsfinaler",
      3: "Tapernes kvartfinaler",
      4: "Tapernes siste kvartfinaler",
      5: "Tapernes semifinaler",
      6: "Tapernes siste semifinaler",
      // special rounds
      7: "Tapernes finale",
      8: "Tapernes storfinale",
      9: "Storfinale",
      10: "Storfinale"
    };
    t.ok(lbRoundNames[r], "not in a weird round");
    t.equal(name, lbRoundNames[r], "Round " + r + " LB name");
  };
  var checkWb = function (r, name) {
    var wbRoundNames = {
      1: "Sekstendelsfinaler",
      2: "Åttendelsfinaler",
      3: "Kvartfinaler",
      4: "Semifinaler",
      5: "Finale"
    };
    t.ok(wbRoundNames[r], "not in a weird round");
    t.equal(name, wbRoundNames[r], "Round " + r + " WB name");
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
