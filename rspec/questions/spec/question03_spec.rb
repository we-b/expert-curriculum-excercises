require 'question03'

describe Mathematics do
  let(:math) { Mathematics.new }
  describe '#addition' do
    it '2つの値の和を返すこと' do
      expect(math.addition(2, 3)).to eq ___
    end
  end

  describe '#subtraction' do
    it '2つの値の差を返すこと' do
      expect(math.___(10, 7)).to eq 3
    end
  end

  describe '#multiplication' do
    ___ '2つの値の積を返すこと' do
      ___(math.multiplication(3, 9)).to eq 27
    end
  end

  ___ '#division' do
    it '2つの値の商を返すこと' do
      expect(___(30, 5)).to ___ 6
    end
  end
end
