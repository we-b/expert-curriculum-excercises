require 'question05'

describe User do
  describe ___ do
    let(___) { User.new(name) }
    context '名前がTaroの場合' do
      let(:name) { 'Taro' }
      it '真を返すこと' do
        expect(user.match_user?).to be_truthy
      end
    end

    context '名前がTaroでない場合' ___
      let(___) { 'Jiro' }
      it '偽を返すこと' do
        expect(___).to be_falsey
      end
    end
  end
end
