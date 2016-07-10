var _; //globals

describe("最終章 「総復習」", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("48: given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            //productsのcontainNutsのプロパティがfalseだった場合
            hasMushrooms = false;
            //
            for (j = 0; j < products[i].ingredients.length; j+=1) {
              //productsのingredientsの値の配列の要素の数だけ繰り返す
               if (products[i].ingredients[j] === "mushrooms") {
                  //もし、ingredientsの値にmushroomsが入っていたら
                  hasMushrooms = true;
                  //
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
            //もしhasMushroomsの値が空だった場合、productsIcaneatの配列に、そのproductsを格納していく。
        }
    }
    //productsICanEatの中身はnutsもmushroomも入っていないもの
    expect(productsICanEat.length).toBe(FILL_ME_IN);//1
  });

  it("49: given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */
      //49行目で空にしている。
      expect(productsICanEat.length).toBe(FILL_ME_IN);//0
  });

  /*********************************************************************************/

  it("50: should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
        //1 ~ 1000までの間で3と5で割り切れる数をひたすら足している。
      }
    }

    expect(sum).toBe(FILL_ME_IN);//233168
  });

  it("51: should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

    var sum = _.range(1000).reduce(function(sum, a){
      //reduceアクションによって、繰り返し処理を簡単に書く事ができた。第二引数に渡す方が配列の頭から順番に入っていくもの、第一引数に渡すものがどんどん変化していくもの。
      if (a % 3 === 0 || a % 5 === 0) {
        sum += a;
      }
      return sum} );    /* try chaining range() and reduce() */

    expect(FILL_ME_IN).toBe(sum);
  });

  /*********************************************************************************/
   it("52: should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };
    //javascriptでは、ハッシュのキーにスペースが入っていても問題ない。

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            //それぞれのproductsの中のingredientの数だけ繰り返している。
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
            //ingredientCount[素材の名前]の値は0のように数字が入っている。今回出てきたものは初めての場合、0に一が代入される。
        }
    }
//ingredientCount['mushrooms']
    expect(FILL_ME_IN).toBe(2);//
  });

  it("53: should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(FILL_ME_IN);
  });
});
