require 'question05'

describe User do
  describe '#match_user?' do
    context '名前がTaroの場合' do
      it '真を返すこと' do
        user = User.new('Taro')
        expect(user.match_user?).to be_truthy
      end
    end

    context '名前がTaroでない場合' do
      it '偽を返すこと' do
        user = User.new('Jiro')
        expect(user.match_user?).to be_falsey
      end
    end
  end
end

