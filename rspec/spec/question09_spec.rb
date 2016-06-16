require 'question06'

describe Name do
  describe '#my_email' do
    context 'emailが正しい場合' do
      it 'Tech-Taro@gmail.comであること' do
        user = build(:email, email: 'Tech-Taro@gmail.com')
        expect(user.my_email).to eq('Tech-Taro@gmail.com')
      end
    end

    context 'emailが正しく無い場合' do
      it 'Tech-Taro@gmail.comでないこと' do
        user = build(:email)
        expect(user.my_email).not_to eq('Tech-Taro@gmail.com')
      end
    end
  end

  describe '#my_company' do
    context 'companyが正しい場合' do
      it 'divであること' do
        user = build(:company, company: 'div')
        expect(user.my_company).to eq('div')
      end
    end

    context 'companyが正しく無い場合' do
      it 'divではないこと' do
        user = build(:company)
        expect(user.my_email).not_to eq('div')
      end
    end
  end
end
