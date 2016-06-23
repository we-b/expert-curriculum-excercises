require 'question06'

describe Name do
  describe '#full_name' do
    it 'フルネームを返すこと' do
      user = build(:name)
      expect(___).to eq('Tech Taro')
    end
  end
end
