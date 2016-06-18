# エキスパートコースのRspecカリキュラム

## ファイル構成

```
rspec/
  |- spec/
       |- factories/
       |- support/
       |- spec_helper.rb
       |- question xx_spec.rb
  |- lib/
       |- question xx.rb
  |- .bundle/
       |- config
  |- Gemfile
  |- Gemfile.lock
```

## 設定

### rspecの導入・設定
```
cd rspec
gem install rspec
rspec --init
echo '--format documentation' >> .rspec
```

### Gemfileの作成
```
cd rspec
touch Gemfile
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
mkdir support
cd support
touch factory_girl.rb
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

## テストの実行
```
cd rspec
bundle exec rspec
```
