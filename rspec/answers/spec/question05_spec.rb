require 'question05'

describe User do
  describe '#match_user?' do
    let(:user) { User.new(name) }
    context '名前がTaroの場合' do
      let(:name) { 'Taro' }
      it '真を返すこと' do
        expect(user.match_user?).to be_truthy
      end
    end

    context '名前がTaroでない場合' do
      let(:name) { 'Jiro' }
      it '偽を返すこと' do
        expect(user.match_user?).to be_falsey
      end
    end
  end
end
