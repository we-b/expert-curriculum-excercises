describe("第4章 オブジェクトの仕組みを理解しよう ", function () {

  describe("プロパティについて", function () {
    var mentor;

    beforeEach(function () {
       mentor = { mentor1: "Abe", mentor2: "Shinbo" };
    });

    it("19: 「プロパティの呼び出し」", function () {
      expect(mentor.mentor1).toBe("Abe");
    });

    it("20: 「プロパティ名の大文字と小文字」", function () {
      expect(mentor.mentor2).toBe("Shinbo");
      expect(mentor.Mentor2).toBe();
    });
  });

  describe("'in'について", function () {
    var megalomaniac;
    beforeEach(function () {
      megalomaniac = {
        mastermind: "The Monarch",
        henchwoman: "Dr Girlfriend",
        theBomb: true
      };
    });

    it("21: 「'in'の使い方①」", function () {

      var hasBomb = "theBomb" in megalomaniac;

      expect(hasBomb).toBe(true);
    });

    it("22: 「'in'の使い方②」", function () {

      var hasDetonator = "theDetonator" in megalomaniac;

      expect(hasDetonator).toBe(false);
    });
  });

  it("23: 「メソッド」", function () {
    var students = {
      student1 : "satou",
      student2 : "tanaka",
      callStudents: function (numSatou) {
        return "They are " + this.student2 + " and the" +
          Array(numSatou + 1).join(" " + this.student1);
      }
    };

    var watchStudents = students.callStudents(4);
    expect("They are tanaka and satou satou satou satou").toMatch(callStudents);
  });

  it("24: 「'this'の使い方」", function () {
    var currentDate = new Date();
    var currentYear = (currentDate.getFullYear());
    var megalomaniac = {
      mastermind: "James Wood",
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function () {
        return currentYear - this.birthYear;
      }
    };

    expect(currentYear).toBe(2016);
    expect(megalomaniac.calculateAge()).toBe(46);
  });

  it("25: 「プロパティの追加/削除」", function () { //should know that properties can be added and deleted
    var megalomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

    expect("secretary" in megalomaniac).toBe(false);

    megalomaniac.secretary = "Agent Smith";
    expect("secretary" in megalomaniac).toBe(true);

    delete megalomaniac.henchman;
    expect("henchman" in megalomaniac).toBe(false);
  });


  it("26: 「プロトタイプチェーン」", function () { //should use prototype to add to all objects
      function Circle(radius)
      {
        this.radius = radius;
      }

      var simpleCircle = new Circle(10);
      var coloredCircle = new Circle(5);
      coloredCircle.color = "red";

      expect(simpleCircle.color).toBe();
      expect(coloredCircle.color).toBe('red');

      Circle.prototype.describe = function () {
        return "This circle has a radius of: " + this.radius;
      };

      expect(simpleCircle.describe()).toBe('This circle has a radius of: 10');
      expect(coloredCircle.describe()).toBe('This circle has a radius of: 5');
  });
});
