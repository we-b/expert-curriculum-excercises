# Javascript問題

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
JavaScript Koans/
├── KoansRunner.html
├── answers
│   ├── AboutApplyingWhatWeHaveLearnt.js
│   ├── AboutArrays.js
│   ├── AboutExpects.js
│   ├── AboutFunctions.js
│   ├── AboutHigherOrderFunctions.js
│   ├── AboutInheritance.js
│   ├── AboutMutability.js
│   └── AboutObjects.js
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
KoansRunner.htmlをブラウザ上で表示します。

Koansを起動すると、赤いボックスが1つ表示されています。
また、ボックスの左上部分には章のタイトル、問題番号・名が表示されています。

JavaScript Koansでは、Sublime Textでその章のJSファイルを編集し、ビューで正解かどうかをチェックします。

修正する部分は、"FILL_ME_IN"と書かれた部分を、解答に書き換えるだけです。

ボックスが赤い場合不正解、緑の場合正解です。
全53問の解答が終わりましたら提出してください。

解いていく問題の順番は以下の通りです。

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

正解はanswersディレクトリに同じファイル名で格納されていますので解き終わったら確認してください。


## 参考サイト
問題を解いていく上で、以下のサイトが参考になるので、分からない箇所があればチェックしましょう。

- [Javascriptのオブジェクト指向についての基本まとめ](http://qiita.com/katsunory/items/3b07b924280f18b11040)
- [Arrayの基礎知識と各メソッドの使用方法](http://qiita.com/sh19910711/items/3c0776fd8cc1797f955d)
- [unshift, shift, pop, pushが混乱するので、絵で整理した](http://maeharin.hatenablog.com/entry/20130122/unshift_shift_pop_push)
