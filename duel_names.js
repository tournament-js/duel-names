var names = require('./english');

var roundNameSingle = function (T, last, p, br, r) {
  if (br === T.LB) {
    return names.single[0]();
  }
  return names.single[(r + 3 > p) ? p - r + 1 : 4](Math.pow(2, p - r + 1));
};

var roundNameDouble = function (T, last, p, br, r) {
  if (br === T.WB) {
    return names.doubleWinners[(r + 3 > p) ? p - r : 3](Math.pow(2, p - r + 1));
  }
  // gf rounds or lb final first, else treat like (strong?) round of X (idx 4 or 5)
  var lbIdx = (r >= 2*p - 3) ? 2*p - r : (4 + r%2);

  // round number 2n always has same number as 2n-1 because of feeding
  return names.doubleLosers[lbIdx](Math.pow(2, p -  Math.floor((r+1)/2)));
};


// can take a partial id where everything but the match number is left out
// T is a constants object injected by Duel along with last bracket and Duel power.
module.exports = function (T, last, p, partialId) {
  var br = partialId.s
    , r = partialId.r;

  // sanity
  if (!Number.isFinite(r) || r < 1 || [T.WB, T.LB].indexOf(br) < 0) {
    throw new Error("invalid partial id for roundName: " + partialId);
  }
  var invWB = (br === T.WB && r > p)
    , invSeLB = (last === T.WB && br >= T.LB && r !== 1)
    , invDeLB = (last === T.LB && r > 2*p);

  if (invWB || invSeLB || invDeLB) {
    var str = "br=" + br + ", last=" + last;
    throw new Error("invalid round number " + r + " given for elimination: " + str);
  }

  var fn = (last === T.WB) ? roundNameSingle : roundNameDouble;
  return fn(T, last, p, br, r);
};
