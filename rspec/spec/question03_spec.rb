require 'question03'

describe Mathematics do
  let(:math) { Mathematics.new }
  describe '#addition' do
    it '2つの値の和を返すこと' do
      expect(math.addition(2, 3)).to eq 5
    end
  end

  describe '#subtraction' do
    it '2つの値の差を返すこと' do
      expect(math.subtraction(10, 7)).to eq 3
    end
  end

  describe '#multiplication' do
    it '2つの値の積を返すこと' do
      expect(math.multiplication(3, 9)).to eq 27
    end
  end

  describe '#division' do
    it '2つの値の商を返すこと' do
      expect(math.division(30, 5)).to eq 6
    end
  end

end
