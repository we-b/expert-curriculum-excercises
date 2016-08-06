describe('第6章 高階関数を理解しよう', function () {

  it("31: 「filterメソッドで配列から条件に一致した要素を取り出す」", function () {
    var numbers = [1,2,3];
    var odd = _(numbers).filter(function (x) { return x % 2 !== 0 });

    expect(odd).toEqual(FILL_ME_IN);
    expect(odd.length).toBe(FILL_ME_IN);
    expect(numbers.length).toBe(FILL_ME_IN);
  });

  it("32: 「mapメソッドで配列内の要素を代入&処理」", function () {
    var numbers = [1, 2, 3];
    var numbersPlus1 = _(numbers).map(function(x) { return x + 1 });

    expect(numbersPlus1).toEqual(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("33: 「reduceメソッドで繰り返し処理を行い、numbersの配列と同じ結果を出力しよう」", function () {
    var numbers = [1, 2, 3];
    var reduction = _(numbers).reduce(
            function(/* result from last call */ memo, /* current */ x) { return memo + x }, /* initial */ 0);

    expect(reduction).toBe(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("34: 「forEach文を使った繰り返し処理」", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };
    _(numbers).forEach(isEven);

    expect(msg).toEqual(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("35: 「allメソッド」", function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };
    expect(_(onlyEven).all(isEven)).toBe(FILL_ME_IN);
    expect(_(mixedBag).all(isEven)).toBe(FILL_ME_IN);
  });

  it("36: 「anyメソッド」" , function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];
    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).any(isEven)).toBe(FILL_ME_IN);
    expect(_(mixedBag).any(isEven)).toBe(FILL_ME_IN);
  });

  it("37: 「_.rangeを使った配列の生成」", function() {
      expect(_.range(3)).toEqual(FILL_ME_IN);
      expect(_.range(1, 4)).toEqual(FILL_ME_IN);
      expect(_.range(0, -4, -1)).toEqual(FILL_ME_IN);
  });

  it("38: 「flattenメソッドで配列を展開」", function() {
      expect(_([ [1, 2], [3, 4] ]).flatten()).toEqual(FILL_ME_IN);
  });

  it("39: 「高階関数」", function() {
      var result = _([ [0, 1], 2 ]).chain()
                       .flatten()
                       .map(function(x) { return x+1 } )
                       .reduce(function (sum, x) { return sum + x })
                       .value();

      expect(result).toEqual(FILL_ME_IN);
  });

});

