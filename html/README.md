# エキスパートコースのhtml/cssカリキュラムに使用する題材

## ファイル構成

```
projects/
  |-  index.html
  |-  style.css
  |-  stylesheets/
        |-  style.scss
        |-  base/
        |-  config/
        |-  mixin/
        |-  modulels/
        |-  layouts/
        |-  utilities/
        |-  vendor/
        |-  override/
```

ファイル/フォルダ名 | 役割
:-:                 | :-:
index.html          | ページのhtmlを記述
style.css           | 最終的にhtmlに読み込まれるcss
stylesheets         | sassファイルを管理
style.scss          | sassファイル群をまとめて読み込むルートファイル
base                | htmlのスタイルの初期化をするsassファイル管理
config              | サイト内で使用する値の設定ファイルを管理
mixin               | サイト内全体で使用するmixinを管理
modules             | モジュールを管理
layouts             | レイアウトに関するファイルを管理
utilities           | ユーティリティクラスを管理
vendor              | 外部ライブラリを管理
override            | 外部ライブラリを上書きするファイルを管理

## 参考url

https://github.com/we-b/expert-curriculum-excercises/wiki/html-css%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E4%BD%9C%E6%88%90%E3%81%A7%E5%8F%82%E8%80%83%E3%81%AB%E3%81%AA%E3%82%8BURL#start-of-content
