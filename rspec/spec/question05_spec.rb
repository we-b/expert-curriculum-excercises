require 'question05'

describe User do
  describe '#match_user?' do
    context 'when a username is Taro' do
      it 'returns true' do
        user = User.new('Taro')
        expect(user.match_user?).to be_truthy
      end
    end

    context 'when a username is not Taro' do
      it 'returns false' do
        user = User.new('Jiro')
        expect(user.match_user?).to be_falsey
      end
    end
  end
end

