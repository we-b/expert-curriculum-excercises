var _; //globals

/* This section uses a functional extension known as Underscore.js - http://documentcloud.github.com/underscore/
     "Underscore is a utility-belt library for JavaScript that provides a lot of the functional programming support
      that you would expect in Prototype.js (or Ruby), but without extending any of the built-in JavaScript objects.
      It's the tie to go along with jQuery's tux."
 */
describe('第6章 高階関数を理解しよう', function () {

  it("31: 「filterメソッドで配列から条件に一致した要素を取り出す」", function () {
    var numbers = [1,2,3];
    var odd = _(numbers).filter(function (x) { return x % 2 !== 0 });
    //filterメソッドは、各要素に対して指定した条件をクリアしているものだけそ返すメソッド
    //filter(function (x) { return x % 2 !== 0 })この場合、渡している配列の中身を一時的に変数xの中に入れ、そのxに対して2で割り切れなかったもの（条件がtrueになったものだけをreturnしている。

    expect(odd).toEqual(FILL_ME_IN);//1,3
    expect(odd.length).toBe(FILL_ME_IN);//2
    expect(numbers.length).toBe(FILL_ME_IN);//3
  });

  it("32: 「mapメソッドで配列内の要素を代入&処理」", function () {
    var numbers = [1, 2, 3];
    //mapメソッドは、配列の各要素に対して指定した捜査を適用させたものを返す。
    //今回は配列の中身を一時的な変数雨xに一個づつ順番に代入し、x + 1の処理を行った後結果を返している。
    var numbersPlus1 = _(numbers).map(function(x) { return x + 1 });

    expect(numbersPlus1).toEqual(FILL_ME_IN);//[2,3,4]
    expect(numbers).toEqual(FILL_ME_IN);//[1,2,3]
  });

  it("33: 「reduceメソッドで繰り返し処理を行い、numbersの配列と同じ結果を出力しよう」", function () {
    var numbers = [1, 2, 3];
    //reduceメソッドは、引数に2つ変数を用意し、一つ目は返す変数、二つ目は配列の中身を順番に取り出して入れておく変数を用意する。
    //今回は、memoが返す変数であり、memoに対して順番に配列の中身xを足している。
    var reduction = _(numbers).reduce(
            function(/* result from last call */ memo, /* current */ x) { return memo + x }, /* initial */ 0);

    expect(reduction).toBe(FILL_ME_IN);//memo = 1 + 2 + 3 = 6
    expect(numbers).toEqual(FILL_ME_IN);//[1,2,3]
  });

  it("34: 「forEach文を使った繰り返し処理」", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };
    //forEachは配列のすべての要素に対して引数で渡したメソッドを使用する。
    //今回の場合はnumbersの各要素一つ一つに対してメソッドisEvenを行う。
    //各要素を順番に取り出し、itemの変数の中に格納して処理を行う。msg += (item % 2) === 0は、条件式(item % 2) === 0の結果(true or false)をmsgに代入させる。
    _(numbers).forEach(isEven);

    expect(msg).toEqual(FILL_ME_IN);//falsetruefalse
    expect(numbers).toEqual(FILL_ME_IN);//[1,2,3]
  });

  it("37: 「allメソッド」", function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };
    //allメソッドは、与えられた条件がすべてtrueの時は、trueを返す。
    //対比されるのはanyメソッド。
    expect(_(onlyEven).all(isEven)).toBe(FILL_ME_IN);//true
    expect(_(mixedBag).all(isEven)).toBe(FILL_ME_IN);//false
  });

  it("38: 「anyメソッド」" , function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];
    //anyメソッドは、allメソッドと対比で、一つでも与えれた条件にtrueがあればtrueを返す。
    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).any(isEven)).toBe(FILL_ME_IN);//true
    expect(_(mixedBag).any(isEven)).toBe(FILL_ME_IN);//true
  });

  it("39: 「_.rangeを使った配列の生成」", function() {
      //_.rangeは、第一引数に指定した数から第二引数に指定された数までの配列を作る。第二引数は0から始まった数字となる。引数を3つとれば、3つ目の数をとばした配列を作る事もできる。
      expect(_.range(3)).toEqual(FILL_ME_IN);//[0,1,2]
      expect(_.range(1, 4)).toEqual(FILL_ME_IN);//[1,2,3]
      expect(_.range(0, -4, -1)).toEqual(FILL_ME_IN);//引数が二つしかない場合、デフォルトで第三引数に1が入っているような状態になる。そのため、引数が0,-4だけなら0から-3までの配列となり、0から1飛ばしの2,3といった先にゴールである-3はないため、空の配列が返される。
      //引数が3つある時は、その数分だけ飛ばした数の配列ができる。また第三引数に負の数を指定すれば、後ろに指定した数だけ下がっていく。
      //今回は引数を(0,-4,-1)としたので、0から-3までの-1飛ばしの配列が返され、[0,-1,-2,-3]の配列が帰ってきた。
  });

  it("40: 「flattenメソッドで配列を展開」", function() {
      //flattenメソッドは配列の中の配列を展開するメソッド。
      expect(_([ [1, 2], [3, 4] ]).flatten()).toEqual(FILL_ME_IN);//[1,2,3,4]
  });

  it("41: 「高階関数」", function() { //should use chain() ... .value() to use multiple higher order functions
      var result = _([ [0, 1], 2 ]).chain()
                       .flatten()//配列の中の配列を展開=>[0,1,2]
                       .map(function(x) { return x+1 } )//mapメソッドは配列の巣別の要素に順番に処理を行わせ、新たな配列を作り出す。
                       .reduce(function (sum, x) { return sum + x })//reduceメソッドは隣り合う 2 つの配列要素に対して（左から右へ）同時に関数を適用し、単一の値にする。
                       .value();//中身を表示=>6

      expect(result).toEqual(FILL_ME_IN);//6
  });

});

