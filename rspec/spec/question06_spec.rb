require 'question06'

describe Name do
  describe '#full_name' do
    context '名前がTech Taroの場合' do
      it '正しい名前であること' do
        user = Name.new('Tech', 'Taro', 'Tech-Taro@gmail.com', 'div')
        expect(user.full_name).to eq('Tech Taro')
      end
    end

    context '名前がTech Taroでない場合' do
      it '正しくない名前であること' do
        user = Name.new('Tech', 'Jiro', 'Tech-Jiro@gmail.com', 'div')
        expect(user.full_name).not_to eq('Tech Taro')
      end
    end
  end
end
