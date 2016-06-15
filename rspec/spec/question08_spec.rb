require 'question08'

describe Fruit do
  describe '#my_fruits' do
    context 'when my fruits contain apple' do
      it 'is valid' do
        fruit = build(:fruit)
        expect(fruit.my_fruits).to include('apple')
      end
    end

    context 'when my fruits does not contain apple' do
      it 'is not valid' do
        fruit = build(:fruit, first_fruit: 'banana')
        expect(fruit.my_fruits).not_to include('apple')
      end
    end
  end
end
