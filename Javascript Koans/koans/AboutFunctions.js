describe("第3章 関数を実践しながら理解しよう", function() {

  it("13: 「関数の定義」", function() {

    function add(a, b) {
    return a + b;
    }

    expect(add(1, 2)).toBe(FILL_ME_IN);
  });

  it("14: 「ローカル変数とグローバル変数」", function () {
    var message = "Hello!";

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      var message = "こんにちは!";
      return message;
    }

    expect(getMessage()).toBe(FILL_ME_IN);
    expect(overrideMessage()).toBe(FILL_ME_IN);
    expect(message).toBe(FILL_ME_IN);
  });

  it("15: 「レキシカルスコープ」", function () {
    var variable = "top-level";
    function parentfunction() {
      var variable = "local";
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toBe(FILL_ME_IN);
  });



  it("16: 「レキシカルスコープと関数」", function () {

    function makeMysteryFunction(makerValue)
    {
      var newFunction = function doMysteriousThing(param)
      {
        return makerValue + param;
      };
      return newFunction;
    }

    var mysteryFunction3 = makeMysteryFunction(3);
    var mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(FILL_ME_IN);
  });

  it("17: 「ローカル変数」", function () {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).toBe(FILL_ME_IN);

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg("only give first arg")).toBe(FILL_ME_IN);

    function returnAllArgs() {
      var argsArray = [];
      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }

    expect(returnAllArgs("first", "second", "third")).toBe(FILL_ME_IN);
  });

  it("「18: 「関数と変数」", function () {

    var appendRules = function (name) {
      return name + " rules!";
    };

    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe(FILL_ME_IN);

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe(FILL_ME_IN);

  });
});
