# エキスパートコースのRspecカリキュラム

## 目次
  1. [ファイル構成](#file_formation)
  2. [ファイル設定](#configuration)
  3. [テストの実行](#run_test)
  4. [進め方](#how_to_answer)
  5. [テストが通るときのターミナル上での表示](#terminal)
  6. [解説](#explanation)

<h2 id="file_formation">1. ファイル構成</h2>

```
questions/
  |- spec/
       |- factories/
       |- support/
       |- spec_helper.rb
       |- question01_spec.rb ~ question15_spec.rb
  |- lib/
       |- question03.rb ~ question15.rb
  |- .bundle/
       |- config
  |- Gemfile
  |- Gemfile.lock
```

<h2 id="configuration">2. ファイル設定</h2>

### rspecの導入・設定
```
$ cd questions
$ gem install rspec
$ rspec --init
$ echo '--format documentation' >> .rspec
```

### Gemfileの作成
```
$ cd questions
$ touch Gemfile
```

### Gemの導入
```
#Gemfileに以下を追加して、bundle installを実行

source 'https://rubygems.org'

gem 'rspec'
gem 'factory_girl'
gem 'faker'
gem 'pry-rails'
```

### spec_helper.rbの編集
```
#以下を追加

require 'support/factory_girl'
require 'faker'
require 'pry-rails'
```
### factory_girl.rbの作成
```
$ cd questions/spec
$ mkdir support
$ cd support
$ touch factory_girl.rb
```

### factory_girl.rbの編集
```
#以下の設定を追加

RSpec.configure do |config|
  require 'factory_girl'
  config.include FactoryGirl::Syntax::Methods

  config.before(:suite) do
    FactoryGirl.find_definitions
  end
end
```

<h2 id="run_test">3. テストの実行</h2>

```
$ cd questions
$ bundle exec rspec ファイル名
```

<h2 id="how_to_answer">4. 進め方</h2>
スペックファイル（questions/spec以下のファイル）と、テスト対象のファイル（questions/lib以下のファイル）を穴埋め形式で解いていきます。
全部で15のファイルを編集していきます。順番は、以下の通りです。
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
$ cd questions
$ bundle exec rspec spec/question01_spec.rb
```

<h2 id="terminal">5. テストが通るときのターミナル上での表示</h2>

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
    返り値にりんごを含むこと

1 example, 0 failures
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

<h2 id="explanation">6. 解説</h2>
ここでは、各問題のポイントを解説していきます。`answers/spec/ファイル`を見ながら、確認していきましょう。

### question01_spec.rb
この問題では、テストにおける最も重要なエクスペくテーションを理解することがポイントになります。

エクスペくテーションは、`expect(X).to eq Y`という形で書きます。`Xをした結果、得られるものがYとなる`、という意味になります。今回は、`1 + 1`を計算した結果が`2`になります。

### question02_spec.rb
この問題では、テストにおける最も重要なエクスペくテーションを理解することと、`describe`をネストすることによるグループ化がポイントになります。

このSpecファイルでは、足し算・引き算・掛け算・割り算をそれぞれテストしていますが、それらを`四則演算`というグループにまとめてあげることで、各テストに対して、とあるグループ内のテストであるということを明示しています。

テストする項目が多くなってくると、それぞれのテストの関係性が分かりづらくなるので、積極的にグループ化することを心がけましょう。

### question03_spec.rb
この問題では、テスト対象となるファイルやファイル内のメソッドの呼び出し方と、`let`の使い方を理解することがポイントになります。

まず1行目の`require 'question03'`という記述で、テスト対象となるファイルを明示しています。次に、3行目の`describe Mathematics do`という記述により、Mathematicsクラスをテストするという宣言をします。クラス名は文字列にしないように気をつけましょう。クラス内の各メソッドは、慣習として`#メソッド名`と記述します。

`let`は、複数回使用する記述をまとめる際に使います。今回は、Mathematicsクラスのインスタンスに対して定義した4つのメソッドを呼び出すので、`Mathematics.new`という記述に対してletを使用しています。`let(:hoge) {fuga}`のように記述することで、`hoge`と書くと`fuga`を呼び出すことが可能です。今回は各テストで`math`と書くことで、`Mathematics.new`を呼び出しています。また、`let`は`it ~~ do`のexample外で定義しないといけないということを覚えて下さい。

### question04_spec.rb
この問題では、より高度な`let`の使い方と、`context`の使い方を理解することがポイントになります。

    let(:money) { Money.new(change) }
    context 'おつりが1000未満の場合' do
      let(:change) { 500 }
      it '小銭で返すこと' do
        expect(money.change_in?).to eq 'coins'
      end
    end

上記のテストにおけるエクスペくテーションの部分で、`money.change_in?`と記述することによって、何が起こっているのかを考えます。まず`money`という記述により、`let(:money) { Money.new(change) }`で定義した`Money.new(change)`が呼び出されます。次に`change`という記述により、`let(:change) { 500 }`で定義した`500`が呼び出されます。結果的に、`money.change_in?`という記述によって、`Money.new(500)`を呼び出したことになり、これに対して`change_in?`メソッドを呼び出しています。

`context`は`describe`と同じく、グループ化する際に使います。機能的には全く同じですが、慣習として条件分岐をする際に使うことが多いです。今回は、`change_in?`メソッド内で条件分岐をしているので、各条件を`context`を使ってグループ化しています。

### question05_spec.rb
この問題では、メソッドが真偽値を返すときに使う`be_truthy`マッチャと`be_falsey`マッチャを理解することがポイントになります。

`match_user?`メソッドは`@user`が`Taro`であれば`true`を返し、そうでなければ`false`を返します。このように、`true`/`false`を返すメソッドは、`be_truthy`と`be_falsey`マッチャで検証することが可能です。

### question06_spec.rb
この問題では、新しいことは導入していませんが次につながっていく問題なので、しっかりとやっていることを理解しましょう。今までのテストが理解できていれば、スラスラと書けるのではないでしょうか？

### question07_spec.rb
この問題では、テストコードを書く上で非常に重要な`factory_girl`の最も基本的な使い方を理解することがポイントになります。

今回使う`factory`ファイルは`factories/names.rb`になります。`factory`ファイルは、作成したインスタンスの複数形のファイル名で作成します。`factory`ファイルに

    FactoryGirl.define do
    
      factory :name do
        first_name 'Tech'
        last_name  'Taro'
        email      'Tech-Taro@gmail.com'
        company    'div'
    
        initialize_with { new first_name, last_name, email, company }
      end
      
    end

と記述してあります。ここでは、インスタンスのそれぞれの属性に、属性値を与えています。`initialize_with`は、インスタンス生成時に与える属性を定義する箇所になります。上記のように`factory`ファイルを作成することで、`question06_spec.rb`で記述した`user = Name.new('Tech', 'Taro', 'Tech-Taro@gmail.com', 'div')`を、`user = build(:name)`とするだけで記述することが可能です。

### lib/question08.rb
この問題では、引き続き`factory_girl`の基本的な使い方と、`be_instance_of`マッチャと`include`マッチャを理解することがポイントになります。

`my_fruits`メソッドの返り値は、`@my_fruits`という配列になっています。`be_instance_of`マッチャは、返り値の型を検証することが可能です。引数に配列クラスである`Array`と記述することで、返り値が配列であるかを検証しています。

`include`マッチャは、配列に`include`マッチャの引数に指定した要素が含まれているかを検証することが可能です。今回は`fruits`ファクトリファイルで、インスタンスに`apple`という属性値を持たせており、この属性値を含んだ配列が返り値となります。これを検証することをできるのが`include`メソッドになります。

### question09_spec.rb
この問題では、`factory_girl`の応用的な使い方である継承と、Fakerの基本的な使い方、また属性の上書きを理解することがポイントになります。

    FactoryGirl.define do
    
      factory :name do
        first_name 'Tech'
        last_name  'Taro'
        email      'Tech-Taro@gmail.com'
        company    'div'
    
        factory :email do
          email { Faker::Internet.free_email }
        end
    
        factory :company do
          company { Faker::Company.name }
        end
    
        initialize_with { new first_name, last_name, email, company }
      end
    
    end
  
上記の子ファクトリ`factory :email do`と`factory :company do`は、親ファクトリである`factory :name do`にネストされた形で定義されています。これをファクトリの継承と言い、子ファクトリは、親ファクトリとの差分のみを再定義することが可能です。よって、`user = build(:email)`と記述することで、親ファクトリで与えた`email = 'Tech-Taro@gmail.com'`という属性は、`email = { Faker::Internet.free_email }`という属性に変わります。

Fakerは、ダミーデータを作成することができるGemになります。中括弧で囲う必要があることに注意しましょう。Fakerはダミーデータとして様々なものを作成することができるので、何らかの属性を与える時は、適切なFakerがないか確認してみましょう。

スペックファイルには、`user = build(:email, email: 'Tech-Taro@gmail.com')`という記述があります。これは、`email ファクトリ`で作成されたインスタンスのemail属性に、`Tech-Taro@gmail.com`という値を上書きしています。ファクトリはあくまでダミーデータなので、実際にメソッドをテストをする際には、上記のように値を上書きして使います。


### lib/question10.rb
この問題では、`match`マッチャを理解することがポイントになります。

`sort_numbers`メソッドは、配列の要素を昇順にソートしています。配列に対して`match`マッチャを使用すると、配列の要素数と、順番が正しいかを検証することが可能です。

### question11_spec.rb
この問題では、`factory_girl`の応用的な使い方で、属性をグループ化して使い分けることができる`trait`を理解することがポイントになります。

    FactoryGirl.define do
    
      factory :profile do
        name       { Faker::Name.name }
        gender     'male'
        blood_type 'a_type'
        handedness 'right'
    
        trait :female do
          gender :female
        end
        
        initialize_with { new name, gender, blood_type, handedness }
      end
      
    end

上記の記述を例に見てみましょう。`profile`という親ファクトリに対して、`trait :female do`という形でネストされています。これは`female`のグループで、`gender`という属性に対して`female`という属性値を与えています。

スペックファイルでは、`profile =  build(:profile, :female)`という形で、親ファクトリである`profile`に続けて`trait`で設定した名前を記述することにより、属性が上書きされます。具体的には、`profile`ファクトリを使用する際にセットされた`male`という`gender`の属性値に、`female`という値を上書きしています。

特定の属性をグループ化できる場合は、積極的に使っていきましょう。

### question12_spec.rb
この問題では、`factory_girl`の応用的な使い方で、子ファクトリと`traits`を組み合わせた属性の上書きを理解することがポイントになります。

    FactoryGirl.define do
    
      factory :profile do
        name       { Faker::Name.name }
        gender     'male'
        blood_type 'a_type'
        handedness 'right'
    
        trait :female do
          gender :female
        end
  
        trait :right do
          handedness :right
        end
  
        factory :female_right, traits: [:female, :right]
  
        initialize_with { new name, gender, blood_type, handedness }
      end
      
    end

上記の記述を例に見てみましょう。`profile`という親ファクトリに対してネストされた形で`factory :female_right`という子ファクトリが記述されています。これは、`question09_spec.rb`で学習した、親ファクトリの属性を上書きするものです。ただし、違いとしては`factory :female_right, traits: [:female, :right]`という形で`traits`も使われています。`trait`ではなく、`traits`と書くことに注意して下さい。このようにすることで、`female`と`right`グループが動き、それぞれの`trait`で設定した属性値を上書きしています。

スペックファイルでは、`question09_spec.rb`で学習したときと同様に、`profile =  build(:female_right)`という形で、子ファクトリの名前を記述します。

子ファクトリを使う際に、複数の属性をグループ化して使いたい際は、このような記述をしてみましょう。

### lib/question13.rb
この問題では、`factory_girl`の応用的な使い方であるコールバックと、スペックファイルにおいて複数のインスタンスを作成する方法を理解することがポイントになります。



### question14_spec.rb
この問題では、テストにおける最も重要なエクスペくテーションを理解することがポイントになります。

### question15_spec.rb
この問題では、テストにおける最も重要なエクスペくテーションを理解することがポイントになります。
