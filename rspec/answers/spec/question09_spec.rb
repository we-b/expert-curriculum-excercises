require 'question06'

describe Name do
  describe '#my_email' do
    it 'Tech-Taro@gmail.comを返すこと' do
      user = build(:email, email: 'Tech-Taro@gmail.com')
      expect(user.email).to eq('Tech-Taro@gmail.com')
    end
  end

  describe '#my_company' do
    it 'divを返すこと' do
      user = build(:company, company: 'div')
      expect(user.company).to eq('div')
    end
  end
end
