describe("第4章 オブジェクトの仕組みを理解しよう ", function () {

  describe("プロパティについて", function () {
    var mentor;

    beforeEach(function () {
       mentor = { mentor1: "Abe", mentor2: "Shinbo" };
    });

    it("19: 「プロパティの呼び出し」", function () {
      expect(mentor.mentor1).toBe(FILL_ME_IN);
    });

    it("20: 「プロパティ名の大文字と小文字」", function () {
      expect(mentor.mentor2).toBe(FILL_ME_IN);
      expect(mentor.Mentor2).toBe(FILL_ME_IN);
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

    it("21: 「'in'の使い方②」", function () {

      var hasBomb = "theBomb" in megalomaniac;

      expect(hasBomb).toBe(FILL_ME_IN);
    });

    it("22: 「'in'の使い方③」", function () {

      var hasDetonator = "theDetonator" in megalomaniac;

      expect(hasDetonator).toBe(FILL_ME_IN);
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
    expect(FILL_ME_IN).toMatch(watchStudents);
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

    expect(currentYear).toBe(FILL_ME_IN);
    expect(megalomaniac.calculateAge()).toBe(FILL_ME_IN);
  });

  it("25: 「プロパティの追加/削除」", function () {
    var megalomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

    expect("secretary" in megalomaniac).toBe(FILL_ME_IN);

    megalomaniac.secretary = "Agent Smith";
    expect("secretary" in megalomaniac).toBe(FILL_ME_IN);

    delete megalomaniac.henchman;
    expect("henchman" in megalomaniac).toBe(FILL_ME_IN);
  });


  it("26: 「プロトタイプチェーン」", function () {
      function Circle(radius)
      {
        this.radius = radius;
      }

      var simpleCircle = new Circle(10);
      var coloredCircle = new Circle(5);
      coloredCircle.color = "red";

      expect(simpleCircle.color).toBe(FILL_ME_IN);
      expect(coloredCircle.color).toBe(FILL_ME_IN);

      Circle.prototype.describe = function () {
        return "This circle has a radius of: " + this.radius;
      };

      expect(simpleCircle.describe()).toBe(FILL_ME_IN);
      expect(coloredCircle.describe()).toBe(FILL_ME_IN);
  });
});
