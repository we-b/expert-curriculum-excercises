require 'question03'

describe Mathematics do
  describe '#addition' do
    it 'returns the summation of two numbers given' do
      math = Mathematics.new
      expect(math.addition(2, 3)).to eq 5
    end
  end

  describe '#subtraction' do
    it 'returns the difference of two numbers given' do
      math = Mathematics.new
      expect(math.subtraction(10, 7)).to eq 3
    end
  end

  describe '#multiplication' do
    it 'returns the product of two numbers given' do
      math = Mathematics.new
      expect(math.multiplication(3, 9)).to eq 27
    end
  end

  describe '#division' do
    it 'returns the quotient of two numbers given' do
      math = Mathematics.new
      expect(math.division(30, 5)).to eq 6
    end
  end

end
