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
