require 'question08'

describe Fruit do
  describe '#my_fruits' do
    it '返り値にりんごを含むこと' do
      fruit = build(:fruit)
      expect(fruit.my_fruits).to include('apple')
    end
  end
end
