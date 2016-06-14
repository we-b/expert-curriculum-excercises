require 'question06'

describe Name do
  describe '#full_name' do
    context 'when a username is Tech Taro' do
      it 'is valid' do
        user = Name.new('Tech', 'Taro')
        expect(user.full_name).to eq('Tech Taro')
      end
    end

    context 'when a username is not Tech Taro' do
      it 'is not valid' do
        user = Name.new('Tech', 'Jiro')
        expect(user.full_name).not_to eq('Tech Taro')
      end
    end
  end
end
