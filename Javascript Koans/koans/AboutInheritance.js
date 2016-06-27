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

describe("About inheritance", function() {
  //このモジュール内において、他のメソッドが呼び出される前にthis.muppetメソッド、this.swedishメソッドが呼び出される。
  beforeEach(function(){
    this.muppet = new Muppet(2, "coding");
	this.swedishChef = new SwedishChef(2, "cooking", "chillin");
  });

  it("should be able to call a method on the derived object", function() {
    expect(this.swedishChef.cook()).toEqual(FILL_ME_IN);//Mmmm soup!
    //まず、beforeeachメソッドにより、この関数が実行される前にthis.swedishChef = new SwedishChefメソッドが呼ばれる。
    //SwedishChefクラスのプロパティにアクセスし、返り値として"Mmmm soup"が帰ってくる。
  });

  it("should be able to call a method on the base object", function() {
    expect(this.swedishChef.answerNanny()).toEqual(FILL_ME_IN);//"Everything's cool!"
    //answeNannyメソッドはMuooetクラスのメソッドだが、SwedishChefはMuppetクラスをprototypeメソッドによって追加しているので、使う事ができます。（継承しているような状態)
  });

  it("should set constructor parameters on the base object", function() {
    //SwedishChefクラスのインスタンスが作られた時に引数で2、"cooking"を渡しているのでageプロパティは2、hobyプロパティは"cooking"
    expect(this.swedishChef.age).toEqual(FILL_ME_IN);//2
    expect(this.swedishChef.hobby).toEqual(FILL_ME_IN);//"cooking"
  });

  it("should set constructor parameters on the derived object", function() {
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

describe("About Crockford's inheritance improvement", function() {
  beforeEach(function(){
  this.gonzo = new Gonzo(3, "daredevil performer", "eat a tire");
  });

  it("should be able to call a method on the derived object", function() {
    expect(this.gonzo.doTrick()).toEqual(FILL_ME_IN);//"eat a tire"
  });

  it("should be able to call a method on the base object", function() {
    //gonzoも同じくMuooetを追加しているのでMupetオブジェクトのプロパティにアクセスできる。
    expect(this.gonzo.answerNanny()).toEqual(FILL_ME_IN);//"Everything's cool!"
  });

  it("should set constructor parameters on the base object", function() {
    expect(this.gonzo.age).toEqual(FILL_ME_IN);//3
    expect(this.gonzo.hobby).toEqual(FILL_ME_IN);//"daredevil performer"
  });

  it("should set constructor parameters on the derived object", function() {
    expect(this.gonzo.trick).toEqual(FILL_ME_IN);//"eat a tire"
  });
});
