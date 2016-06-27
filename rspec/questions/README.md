# エキスパートコースのRspecカリキュラム

## 目次
  1. [ファイル構成](#file_formation)
  2. [ファイル設定](#configuration)
  3. [テストの実行](#run_test)
  4. [進め方](#how_to_answer)
  5. [参考サイト](#references)
  6. [テストが通るときのターミナル上での表示](#terminal)

<h2 id="file_formation">1. ファイル構成</h2>

```
questions/
  |- spec/
       |- factories/
             |- factory files
       |- support/
             |- factory_girl.rb
       |- spec_helper.rb
       |- question01_spec.rb ~ question15_spec.rb
  |- lib/
       |- question03.rb ~ question15.rb
  |- .bundle/
       |- config
  |- .rspec
  |- Gemfile
  |- Gemfile.lock
  |- README.md
```

<h2 id="configuration">2. ファイル設定</h2>

### rspecの導入・設定
```
ジップ形式でダウンロードする
$ cd expert-curriculum-excercises-rspec/rspec/questions
$ bundle install
```

<h2 id="run_test">3. テストの実行</h2>

```
$ bundle exec rspec ファイル名
```

<h2 id="how_to_answer">4. 進め方</h2>
スペックファイル（questions/spec以下のファイル）と、テスト対象のファイル（questions/lib以下のファイル）を穴埋め形式で解いていきます。
全部で以下の15のファイルを編集していきます。順番は、以下の通りです。
  1. spec/question01_spec.rb
  2. spec/question02_spec.rb
  3. spec/question03_spec.rb
  4. spec/question04_spec.rb
  5. spec/question05_spec.rb
  6. spec/question06_spec.rb
  7. spec/question07_spec.rb
  8. lib/question08.rb
  9. spec/question09_spec.rb
  10. lib/question10.rb
  11. spec/question11_spec.rb
  12. spec/question12_spec.rb
  13. lib/question13.rb
  14. spec/question14_spec.rb
  15. spec/question15_spec.rb

各単体のファイルを実行していき、テストが無事に通ったら次に進みましょう！
ファイルの実行例：
```
$ bundle exec rspec spec/question01_spec.rb
```

テストが通らない際は、binding.pryを使用して、デバッグを行いましょう。

<h2 id="references">5. 参考サイト</h2>
問題を解いていく上で、以下のサイトが参考になるので、分からない箇所があれば参考にしてみましょう。

[使えるRSpec入門・その1「RSpecの基本的な構文や便利な機能を理解する」](http://qiita.com/jnchito/items/42193d066bd61c740612)

[使えるRSpec入門・その2「使用頻度の高いマッチャを使いこなす」](http://qiita.com/jnchito/items/2e79a1abe7cd8214caa5)

[RSpecにおけるFactoryGirlの使い方まとめ](http://qiita.com/muran001/items/436fd07eba1db18ed622)

[Faker](http://www.rubydoc.info/github/stympy/faker/master/frames)


<h2 id="terminal">6. テストが通るときのターミナル上での表示</h2>

### question01_spec.rb
```
$ bundle exec rspec spec/question01_spec.rb

足し算
  1 + 1 は 2 になること
  
1 example, 0 failures
```

### question02_spec.rb
```
$ bundle exec rspec spec/question02_spec.rb

四則演算
  足し算
    3 + 5 は 8 になること
  引き算
    10 - 1 は 9 になること
  掛け算
    5 * 4 は 20 になること
  割り算
    40 / 8 は 5 になること

4 examples, 0 failures
```

### question03_spec.rb
```
$ bundle exec rspec spec/question03_spec.rb

Mathematics
  #addition
    2つの値の和を返すこと
  #subtraction
    2つの値の差を返すこと
  #multiplication
    2つの値の積を返すこと
  #division
    2つの値の商を返すこと

4 examples, 0 failures
```

### question04_spec.rb
```
$ bundle exec rspec spec/question04_spec.rb

Money
  #change_in?
    おつりが1000未満の場合
      小銭で返すこと
    おつりが1000以上の場合
      お札で返すこと

2 examples, 0 failures
```

### question05_spec.rb
```
$ bundle exec rspec spec/question05_spec.rb

User
  #match_user?
    名前がTaroの場合
      真を返すこと
    名前がTaroでない場合
      偽を返すこと

2 examples, 0 failures
```

### question06_spec.rb
```
$ bundle exec rspec spec/question06_spec.rb

Name
  #full_name
    フルネームでを返すこと

1 example, 0 failures
```

### question07_spec.rb
```
$ bundle exec rspec spec/question07_spec.rb

Name
  #full_name
    フルネームを返すこと

1 example, 0 failures
```

### question08_spec.rb
```
$ bundle exec rspec spec/question08_spec.rb

Fruit
  #my_fruits
    返り値が配列であること
    返り値にりんごを含むこと

2 example, 0 failures
```

### question09_spec.rb
```
$ bundle exec rspec spec/question09_spec.rb

Name
  #my_email
    Tech-Taro@gmail.comを返すこと
  #my_company
    divを返すこと

2 examples, 0 failures
```

### question10_spec.rb
```
$ bundle exec rspec spec/question10_spec.rb

Sort
  #self.sort_numbers
    昇順にソートされた配列になること

1 example, 0 failures
```

### question11_spec.rb
```
$ bundle exec rspec spec/question11_spec.rb

Profile
  #all_profile
    全てのデフォルトプロフィールを返すこと
  #name_gender
    指定した名前と性別を返すこと
  #name_gender_blood_type
    指定した名前と性別と血液型を返すこと
  #name_gender_handedness
    指定した名前と性別と利き手を返すこと

4 examples, 0 failures
```

### question12_spec.rb
```
$ bundle exec rspec spec/question12_spec.rb

Profile
  male_o_type ファクトリ
    性別と血液型が、それぞれ male と o_type であること
  female_right ファクトリ
    性別と利き手が、それぞれ female と right であること
  male_ab_type_left ファクトリ
    性別と血液型と利き手が、それぞれ male と ab_type と right であること

3 examples, 0 failures
```

### question13_spec.rb
```
$ bundle exec rspec spec/question13_spec.rb

Run
  #self.count
    走った人数を返すこと
  #self.total_distance
    走った距離を返すこと
  #result
    結果を返すこと
  #distance(distance)
    Tech Taroが走った距離を返すこと

4 examples, 0 failures
```

### question14_spec.rb
```
$ bundle exec rspec spec/question14_spec.rb

Game
  #challenge
    destiny_numberが1の場合
      返り値があること
    destiny_numberが0の場合
      返り値があること
  #happy_moment
    statusが5の場合
      王国を支配すること
    statusが0以上、5未満の場合
      ランクがアップすること
  #sad_moment
    statusが0の場合
      王国から追い出されること
    statusが1以上、5未満の場合
      ランクが下がること

6 examples, 0 failures
```

### question15_spec.rb
```
$ bundle exec rspec spec/question15_spec.rb

Review
  #self.get_review_count
    レビューの数を返すこと
  #write_review(genre, impression)
    ジャンルと感想を配列で返すこと
  #show_review
    レビューを返すこと

3 examples, 0 failures
```
