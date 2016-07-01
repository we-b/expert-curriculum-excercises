# EXPERT curriculium excercises

## 学習の目標

JavaScript Koansを通じてJavaScriptの基礎的なアルゴリズムを身につけます。

## Koansとは

Koansという言葉は、あの「禅」に出てくる「公案」を意味しています。
禅とプログラミングに一体何の関係があるのか、と考えてしまいますよね。

最近では海外プログラマーの間でこういったKoans(公案)、Kata(空手のカタ)、Dojo(道場)など海外で有名な言葉、方法論を用いてプログラミングスキル向上に取り組もうというのが流行しています。

Koansの例として代表的に挙げられるのが「RubyKoans」です。

コンテンツをダウンロードしてターミナル上で実行すると、「あなたはまだ悟りには到達していない。次のコードについて瞑想せよ」のような表現でエラーメッセージが次々と表示されます。

ユーザーはこれらのエラー全てを解決することで見事悟りを開けるか、というのがプログラミングの禅です。

この章ではRubyKoansをリスペクトした「JavaScript Koans」のドリル問題を解いていきます。

## JavaScript Koansを学ぶ理由

JavaScript Koansで使用される言語は生のJavaScript(plain JavaScript)です。
最近では簡略化されたjQueryを使用するのが主流であるため、JavaScript自体に触れる機会が少なくなっているのが現状です。
しかし、エキスパートコースを受講している皆さんには、是非この機会にJavaScriptのアルゴリズムを学んでいただきたい為、Koansを通じて実践的に学びましょう！


## ディレクトリ構造

```
Javascript Koans/
│
├── KoansRunner.html
├── jasmine
│   └── runner_specs
│       ├── TestJSKoansRunner.html
│       └── suites
│           └── KoansRunnerSpec.js
├── koans
│   ├── AboutApplyingWhatWeHaveLearnt.js
│   ├── AboutArrays.js
│   ├── AboutExpects.js
│   ├── AboutFunctions.js
│   ├── AboutHigherOrderFunctions.js
│   ├── AboutInheritance.js
│   ├── AboutMutability.js
│   └── AboutObjects.js
└── lib
    ├── FILL_ME_IN.js
    ├── jasmine
    │   ├── jasmine-html.js
    │   ├── jasmine.css
    │   ├── jasmine.js
    │   ├── jskoans-jasmine-html.js
    │   └── jskoans-jasmine.css
    ├── jsTestDriver
    │   ├── JsTestDriver.jar
    │   ├── capture_browser.sh
    │   ├── jsTestDriver.conf
    │   └── run_all_koans.sh
    └── underscore-min.js
```

### Jasmineとは？

RubyのRSpecと同様に、JavaScriptのテストを実行する際Jasmineというフレームワークを使用します。

## Koansの進め方

リンクからKoansをダウンロードします。(一応記述)
Runner.htmlをブラウザ上で表示します。

すると、エラーが大量に発生しているのが分かります。
赤い部分が不正解の部分、緑の場合その問題が正解です。

穴埋め問題のように、テストケースに記述されている(FILL_ME_IN)を、解答と書き換えます。
全53問の解答が終わりましたら提出してください。


## 解いていく問題の順

1. AboutExpects.js
1. AboutArrays.js
1. AboutFunctions.js
1. AboutObjects.js
1. AboutMutability.js
1. AboutHigherOrderFunctions.js
1. AboutInheriance.js
1. AboutApplyingWhatWeHaveLearnt.js


## 問題の解き方

まずAboutExpects.jsの問題から解き始めます。
解答のヒントはコメントアウトで書いてありますので参考にしながら問いてください。
