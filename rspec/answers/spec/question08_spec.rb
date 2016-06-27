require 'question08'

describe Fruit do
  describe '#my_fruits' do
    it '返り値が配列であること' do
      fruit = build(:fruit)
      expect(fruit.my_fruits).to be_an_instance_of Array
    end

    it '返り値にりんごを含むこと' do
      fruit = build(:fruit)
      expect(fruit.my_fruits).to include 'apple'
    end
  end
end
