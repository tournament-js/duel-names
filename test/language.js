var $ = require('interlude')
  , Duel = require('duel')
  , duelNames = require('..')
  , test = require('bandage');

module.exports = function testLanguage(language, np, opts) {
  var locfile = require('../' + language);

  test(language + ' ' + np, function *(mt) {
    mt.ok(locfile, 'have localization file');
    mt.ok(opts.bronzeFinal, 'have bronzeFinal');
    mt.ok(opts.rounds, 'have rounds');
    mt.eq(typeof opts.rounds, 'object','rounds is an obj');

    mt.ok(opts.winnerRounds, 'have winnerRounds');
    mt.eq(typeof opts.winnerRounds, 'object','winnerRounds is an obj');
    mt.ok(opts.loserRounds, 'have loserRounds');
    mt.eq(typeof opts.loserRounds, 'object','loserRounds is an obj');
    mt.equal(
      Object.keys(opts.loserRounds).length,
      Object.keys(opts.winnerRounds).length*2,
      'double the number of loserRounds passed in as winnerRounds'
    );

    Duel.attachNames(duelNames(locfile));
    mt.ok(Duel.prototype.roundName, 'attached roundName member');

    yield mt.test('single', function *(t) {
      var d = new Duel(np, { last: Duel.WB }) // using bronze final
      , gs = d.matches;

      var rnds = $.nub(gs.map($.get('id', 'r'))).sort($.compare());
      // prove we covered all the expected bases
      t.deepEqual(rnds,
        Object.keys(opts.rounds).map(Number),
        'number of rounds match passed in'
      );

      gs.forEach(function (m) {
        var r = m.id.r;
        var name = d.roundName(m.id);
        if (m.id.s === Duel.LB) {
          t.equal(name, opts.bronzeFinal, 'LB match has bronze final name');
        }
        else {
          t.equal(name, opts.rounds[r], 'Round ' + r + ' name is ' + opts.rounds[r]);
        }
      });
    });

    yield mt.test('double', function *(t) {
      var d = new Duel(np, { last: Duel.LB }) // using double final
        , gs = d.matches;
      // twice the amount of LB rounds as wb rounds
      var wbr = $.nub(d.findMatches({s: 1}).map($.get('id', 'r'))).sort($.compare());
      var lbr = $.nub(d.findMatches({s: 2}).map($.get('id', 'r'))).sort($.compare());

      t.equal(wbr.length*2, lbr.length, 'twice as many lb rounds');
      t.deepEqual(wbr,
        Object.keys(opts.winnerRounds).map(Number),
        'right number of wb rounds'
      );
      t.deepEqual(lbr,
        Object.keys(opts.loserRounds).map(Number),
        'right number of lb rounds'
      );

      gs.forEach(function (m) {
        var r = m.id.r;
        var name = d.roundName(m.id);
        if (m.id.s === Duel.LB) {
          t.equal(name, opts.loserRounds[r],
            'Round ' + r + ' LB name is ' + opts.loserRounds[r]
          );
        }
        else {
          t.equal(name, opts.winnerRounds[r],
            'Round ' + r + ' WB name is ' + opts.winnerRounds[r]
          );
        }
      });
    });
  });
};


