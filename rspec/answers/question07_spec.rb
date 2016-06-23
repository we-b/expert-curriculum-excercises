require 'question06'

describe Name do
  describe '#full_name' do
    it 'フルネームを返すこと' do
      user = build(:name)
      expect(user.full_name).to eq('Tech Taro')
    end
  end
end
