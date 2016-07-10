describe("第5章 「変数を理解しよう」", function() {

  it("27: 「変数として扱うプロパティ」", function () { // should expect object properties to be public and mutable
    var aPerson = {firstname: "John", lastname: "Smith" };
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toBe(FILL_ME_IN);
  });

  it("28: 「コンストラクタとして扱うプロパティ」", function () { //should understand that constructed properties are public and mutable
    function Person(firstname, lastname)
    {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    var aPerson = new Person ("John", "Smith");
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toBe(FILL_ME_IN);
  });

  it("29: 「プロトタイプチェーンを使用した変数」", function () { //should expect prototype properties to be public and mutable
    function Person(firstname, lastname)
    {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    Person.prototype.getFullName = function () {
      return this.firstname + " " + this.lastname;
    };

    var aPerson = new Person ("John", "Smith");
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);

    aPerson.getFullName = function () {
      return this.lastname + ", " + this.firstname;
    };

    expect(aPerson.getFullName()).toBe(FILL_ME_IN);
  });

  it("30: 「コンストラクタの二重構造」", function () { //should know that variables inside a constructor and constructor args are private
    function Person(firstname, lastname)
    {
      var fullName = firstname + " " + lastname;

      this.getFirstName = function () { return firstname; };
      this.getLastName = function () { return lastname; };
      this.getFullName = function () { return fullName; };
    }
    var aPerson = new Person ("John", "Smith");

    aPerson.firstname = "Penny";
    aPerson.lastname = "Andrews";
    aPerson.fullName = "Penny Andrews";

    expect(aPerson.getFirstName()).toBe(FILL_ME_IN);
    expect(aPerson.getLastName()).toBe(FILL_ME_IN);
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);

    aPerson.getFullName = function () {
      return aPerson.lastname + ", " + aPerson.firstname;
    };

    expect(aPerson.getFullName()).toBe(FILL_ME_IN);
  });

});
