require 'question06'

describe Name do
  describe '#full_name' do
    context 'when a username is Tech Taro (using factory)' do
      it 'is valid' do
        user = build(:name)
        expect(user.full_name).to eq('Tech Taro')
      end
    end

    context 'when a username is not Tech Taro (using factory)' do
      it 'is not valid' do
        user = build(:name, first_name: 'Tech', last_name: 'Jiro')
        expect(user.full_name).not_to eq('Tech Taro')
      end
    end
  end
end
