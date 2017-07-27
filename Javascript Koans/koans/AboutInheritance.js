function Muppet(age, hobby) {
  this.age = age;
  this.hobby = hobby;

  this.answerNanny = function(){
	return "Everything's cool!";
  }
}

function SwedishChef(age, hobby, mood) {
  Muppet.call(this, age, hobby);
  this.mood = mood;

  this.cook = function() {
    return "Mmmm soup!";
  }
}

SwedishChef.prototype = new Muppet();

describe("第7章 「クラスの継承」", function() {
  beforeEach(function(){
    this.muppet = new Muppet(2, "coding");
	this.swedishChef = new SwedishChef(2, "cooking", "chillin");
  });

  it("40: 「メソッドによる派生オブジェクトの呼び出し」", function() {
    expect(this.swedishChef.cook()).toEqual(FILL_ME_IN);
  });

  it("41: 「メソッドによる基底オブジェクトの呼び出し」", function() {
    expect(this.swedishChef.answerNanny()).toEqual(FILL_ME_IN);
  });

  it("42: 「基底オブジェクトのプロパティ」", function() {
    expect(this.swedishChef.age).toEqual(FILL_ME_IN);
    expect(this.swedishChef.hobby).toEqual(FILL_ME_IN);
  });

  it("43: 「派生オブジェクトのプロパティ」", function() {
    expect(this.swedishChef.mood).toEqual(FILL_ME_IN);
  });
});

Object.prototype.beget = function () {
  function F() {}
  F.prototype = this;
  return new F();
}

function Gonzo(age, hobby, trick) {
  Muppet.call(this, age, hobby);
  this.trick = trick;

  this.doTrick = function() {
    return this.trick;
  }
}

Gonzo.prototype = Muppet.prototype.beget();

describe("第8章 「ダグラス・クロックフォード流のクラスの継承を理解しよう」", function() {
  beforeEach(function(){
  this.gonzo = new Gonzo(3, "daredevil performer", "eat a tire");
  });

  it("44: 「メソッドによる派生オブジェクトの呼び出し」", function() {
    expect(this.gonzo.doTrick()).toEqual(FILL_ME_IN);
  });

  it("45: 「メソッドによる基底オブジェクトの呼び出し」", function() {
    expect(this.gonzo.answerNanny()).toEqual(FILL_ME_IN);  });

  it("46: 「基底オブジェクトのプロパティ」", function() {
    expect(this.gonzo.age).toEqual(FILL_ME_IN);
    expect(this.gonzo.hobby).toEqual(FILL_ME_IN);
  });

  it("47: 「派生オブジェクトのプロパティ」", function() {
    expect(this.gonzo.trick).toEqual(FILL_ME_IN);
  });
});
