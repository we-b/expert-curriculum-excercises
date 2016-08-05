describe("第3章 関数を実践しながら理解しよう", function() {

  it("13: 「関数の定義」", function() {

    function add(a, b) {
    return a + b;
    }

    expect(add(1, 2)).toBe(3);
  });

  it("14: 「ローカル変数とグローバル変数」", function () {//should know internal variables override outer variables
    var message = "Hello!";

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      var message = "こんにちは!";
      return message;
    }

    expect(getMessage()).toBe("Hello");
    expect(overrideMessage()).toBe("こんにちは");
    expect(message).toBe('Hello');
  });

  it("15: 「レキシカルスコープ」", function () {//should have lexical scoping
    var variable = "top-level";
    function parentfunction() {
      var variable = "local";
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toBe('local');
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

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(23);
  });

  it("17: 「ローカル変数」", function () {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).toBe("first", "second", "third");

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg("only give first arg")).toBe();

    function returnAllArgs() {
      var argsArray = [];
      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }

    expect(returnAllArgs("first", "second", "third")).toBe("first, second, third");
  });

  it("「18: 「関数と変数」", function () {

    var appendRules = function (name) {
      return name + " rules!";
    };

    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe('John rules!');

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe('Mary totally rules!');

  });
});
