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
  //このモジュール内において、他のメソッドが呼び出される前にthis.muppetメソッド、this.swedishメソッドが呼び出される。
  beforeEach(function(){
    this.muppet = new Muppet(2, "coding");
	this.swedishChef = new SwedishChef(2, "cooking", "chillin");
  });

  it("40: 「メソッドによる派生オブジェクトの呼び出し」", function() {
    expect(this.swedishChef.cook()).toEqual(FILL_ME_IN);//Mmmm soup!
    //まず、beforeeachメソッドにより、この関数が実行される前にthis.swedishChef = new SwedishChefメソッドが呼ばれる。
    //SwedishChefクラスのプロパティにアクセスし、返り値として"Mmmm soup"が帰ってくる。
  });

  it("41: 「メソッドによる基底オブジェクトの呼び出し」", function() {
    expect(this.swedishChef.answerNanny()).toEqual(FILL_ME_IN);//"Everything's cool!"
    //answeNannyメソッドはMuooetクラスのメソッドだが、SwedishChefはMuppetクラスをprototypeメソッドによって追加しているので、使う事ができます。（継承しているような状態)
  });

  it("42: 「基底オブジェクトのプロパティ」", function() {
    //SwedishChefクラスのインスタンスが作られた時に引数で2、"cooking"を渡しているのでageプロパティは2、hobyプロパティは"cooking"
    expect(this.swedishChef.age).toEqual(FILL_ME_IN);//2
    expect(this.swedishChef.hobby).toEqual(FILL_ME_IN);//"cooking"
  });

  it("43: 「派生オブジェクトのプロパティ」", function() {
    expect(this.swedishChef.mood).toEqual(FILL_ME_IN);//"chillin"
  });
});

// http://javascript.crockford.com/prototypal.html
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

//no longer need to call the Muppet (base type) constructor
Gonzo.prototype = Muppet.prototype.beget();

describe("第8章 「ダグラス・クロックフォード流のクラスの継承を理解しよう」", function() {
  beforeEach(function(){
  this.gonzo = new Gonzo(3, "daredevil performer", "eat a tire");
  });

  it("44: 「メソッドによる派生オブジェクトの呼び出し」", function() {
    expect(this.gonzo.doTrick()).toEqual(FILL_ME_IN);//"eat a tire"
  });

  it("45: 「メソッドによる基底オブジェクトの呼び出し」", function() {
    //gonzoも同じくMuooetを追加しているのでMupetオブジェクトのプロパティにアクセスできる。
    expect(this.gonzo.answerNanny()).toEqual(FILL_ME_IN);//"Everything's cool!"
  });

  it("46: 「基底オブジェクトのプロパティ」", function() {
    expect(this.gonzo.age).toEqual(FILL_ME_IN);//3
    expect(this.gonzo.hobby).toEqual(FILL_ME_IN);//"daredevil performer"
  });

  it("47: 「派生オブジェクトのプロパティ」", function() {
    expect(this.gonzo.trick).toEqual(FILL_ME_IN);//"eat a tire"
  });
});
