var $ = require('interlude')
  , Duel = require('duel')
  , duelNames = require('../')
  , language = require('../spanish.js')
  , test = require('bandage');

test('spanish', function *(mt) {
  Duel.attachNames(duelNames(language));

  yield mt.test('single', function *(t) {
    var d = new Duel(32, { last: Duel.WB }) // using bronze final
      , gs = d.matches;

    var rounds = $.nub(gs.map($.get('id', 'r'))).sort($.compare());
    // to prove we covered all the bases
    t.deepEqual(rounds, [1, 2, 3, 4, 5], '5 rounds in a 32 player SE tournament');

    var checkMatch = function (m) {
      var r = m.id.r;
      var name = d.roundName(m.id);
      if (m.id.s === 2) {
        t.equal(name, 'Partido del tercer lugar', 'Round 1 LB name');
      }
      else {
        var wbRoundNames = {
          1: 'Ronda de 32',
          2: 'Octavos de final',
          3: 'Cuartos de final',
          4: 'Semifinal',
          5: 'Gran final'
        };
        t.ok(wbRoundNames[r], 'not in a weird round');
        t.equal(name, wbRoundNames[r], 'Ronda ' + r + ' WB name');
      }
    };

    gs.forEach(checkMatch);
  });

  yield mt.test('double', function *(t) {
    Duel.attachNames(duelNames(language));
    var d = new Duel(32, { last: Duel.LB }) // using double final
      , gs = d.matches;
    // should be 2*p === LB rounds === 2*5 = 10
    var checkLb = function (r, name) {
      var lbRoundNames = {
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
      };
      t.ok(lbRoundNames[r], 'not in a weird round');
      t.equal(name, lbRoundNames[r], 'Ronda ' + r + ' LB name');
    };
    var checkWb = function (r, name) {
      var wbRoundNames = {
        1: 'Ganadores Ronda de 32',
        2: 'Ganadores Octavos de final',
        3: 'Ganadores Cuartos de final',
        4: 'Ganadores Semifinal',
        5: 'Ganadores Final'
      };
      t.ok(wbRoundNames[r], 'not in a weird round');
      t.equal(name, wbRoundNames[r], 'Ronda ' + r + ' WB name');
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
  });
});
