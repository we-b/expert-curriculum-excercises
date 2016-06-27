# エキスパートコースのRspecカリキュラム

## 目次
  * [解説](#explanation)

<h2 id="explanation">■ 解説</h2>
ここでは、各問題のポイントを解説していきます。該当するファイルを見ながら、確認していきましょう。

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

今回使う`factory`ファイルは`factories/names.rb`になります。`factory`ファイルは、生成したインスタンスの複数形のファイル名で作成します。`factory`ファイルに

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

### question08_spec.rb
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

Fakerは、ダミーデータを生成することができるGemになります。中括弧で囲う必要があることに注意しましょう。Fakerはダミーデータとして様々なものを生成することができるので、何らかの属性を与える時は、適切なFakerがないか確認してみましょう。

スペックファイルには、`user = build(:email, email: 'Tech-Taro@gmail.com')`という記述があります。これは、`email ファクトリ`で生成されたインスタンスのemail属性に、`Tech-Taro@gmail.com`という値を上書きしています。ファクトリはあくまでダミーデータなので、実際にメソッドをテストをする際には、上記のように値を上書きして使います。


### question10_spec.rb
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

### question13_spec.rb
この問題では、`factory_girl`の応用的な使い方であるコールバックと、スペックファイルにおいて複数のインスタンスを生成する方法を理解することがポイントになります。

    run = build_list(:with_four_people, 5)

スペックファイル内では、上記の`build_list`というメソッドを使用し、さらにファクトリ名の後に`5`と記述することにとによって、`with_five_people`というファクトリに基づいた5つのインスタンスを生成することが可能です。一度に複数のインスタンスを生成したい際に便利なので、是非使い方を覚えておきましょう。

    FactoryGirl.define do

      factory :run do
        name { Faker::Name.name }

        factory :with_four_people do
          after(:build) { |bicycle| bicycle.distance(6) }
        end

        initialize_with { new name }
      end

    end

上記のファクトリファイル内では、`after (:build)`という`コールバック`と呼ばれるものを使用しています。コールバックとは、何らかの処理をする前後で、特定の処理をする際に使うものです。例えば親インスタンス生成後に、それに紐付ける形で子インスタンスを生成したいときなどに使用します。

今回は、`run`ファクトリを継承する形で`with_five_people`ファクトリに基づくインスタンスを生成した直後に、それぞれのインスタンスを`bicycle`という名前で扱い、`distance()`メソッドを適用しています。よってスペックファイルでは以下のように、`build_list(:with_five_people, 5)`と記述するだけで、ファクトリファイル内でそれぞれのインスタンスに対して`distance(distance)`メソッドが適用され、`Run.count`と記述するだけで生成されたインスタンスの数が返って来ます。

    it '走った人数を返すこと' do
      build_list(:with_four_people, 5)
      expect(Run.count).to eq(5)
    end

### question14_spec.rb
この問題では、`change{ hoge }.by(fuga)`というマッチャを理解することがポイントとなります。また、今までに学習した内容が多く含まれているので、良い復習になったのではないでしょうか。

今回のテスト対象になるファイルでは、`happy_moment`メソッド内はで`@status`が`5`でなければ`@status`の値が一つ増えて, `sad_moment`メソッド内はで`@status`が`0`でなければ`@status`の値が一つ減るようになっています。即ちメソッドを実行すると、`@status`の値が増減します。このようなメソッドの振る舞いをテストするマッチャが`change{ hoge }.by(fuga)`というマッチャです。

`expect{ X }.to change{ Y }.by(A)`の意味を訳すと、`XをするとYがAだけ変化する`という意味になります。なので、例えば今回実際に使っている`expect{ game.happy_moment }.to change{ game.status }.by(1)`という記述考えると、`game`インスタンスに対して`happy_moment`メソッドを使うと、`game`インスタンスの`@status`属性値が`1`増えるという意味になります。

### question15_spec.rb
この問題では、特に新しい内容はありません。今までに学習したことを復習しつつ解くことができれば、しっかりとテストの基礎・応用を理解したと言えるでしょう！
