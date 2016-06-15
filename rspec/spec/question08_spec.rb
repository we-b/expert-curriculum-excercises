require 'question08'

describe Fruit do
  describe '#my_fruits' do
    context 'フルーツがりんごを含む場合' do
      it '正しいこと' do
        fruit = build(:fruit)
        expect(fruit.my_fruits).to include('apple')
      end
    end

    context 'フルーツがりんごを含まない場合' do
      it '正しくないこと' do
        fruit = build(:fruit, first_fruit: 'banana')
        expect(fruit.my_fruits).not_to include('apple')
      end
    end
  end
end
