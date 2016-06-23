require 'question06'

describe Name do
  describe '#email' do
    it 'Tech-Taro@gmail.comを返すこと' do
      ___ = build(:email, email: 'Tech-Taro@gmail.com')
      expect(user.email).to eq(___)
    end
  end

  describe '#company' do
    it 'divを返すこと' do
      user = build(:company, company: ___)
      expect(___).to eq('div')
    end
  end
end
