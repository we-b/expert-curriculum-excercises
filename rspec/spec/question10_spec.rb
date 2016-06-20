require 'question10'

describe Sort do
  describe '#self.sort_numbers' do
    let(:numbers_in_an_array) { build(:sort) }
    it '昇順にソートされた配列になること' do
      expect(numbers_in_an_array.sort_numbers).to match([0, 1, 2, 6, 9])
    end
  end
end
