describe('第1章 チュートリアル', function() {

  it('1: 「Koansの使い方」', function() {
    expect(true).toBeTruthy();
  });

  it('2: 「厳密演算子」', function() {
    var expectedValue = 1 + 1;
    var actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  // Some ways of asserting equality are better than others.
  it('3: 「変数の一致①」', function() {
    var expectedValue = 2;
    var actualValue = 1 + 1;

    expect(actualValue).toEqual(expectedValue);
  });

  it('4: 「変数の一致②」', function() {
    var expectedValue = '2';
    var actualValue = (1 + 1).toString();

    expect(actualValue).toBe(expectedValue);
  });

  it('5: 「値の一致」', function() {
    expect(1 + 1).toEqual(2);
  });
});
