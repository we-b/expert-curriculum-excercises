require 'question06'

describe Name do
  describe '#full_name' do
    it 'フルネームでを返すこと' do
      user = Name.new('Tech', 'Taro', 'Tech-Taro@gmail.com', 'div')
      expect(user.full_name).to eq 'Tech Taro'
    end
  end
end
