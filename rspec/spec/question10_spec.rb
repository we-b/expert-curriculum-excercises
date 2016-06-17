require 'question10'

describe Sort do
  describe '#self.sort_numbers' do
    let(:numbers_in_an_array) { build(:sort) }
    context 'sort_numbersが正しい場合' do
      it '昇順にソートされた配列になること' do
        expect(numbers_in_an_array.sort_numbers).to match([0, 1, 2, 6, 9])
      end
    end
    context 'sort_numbersが正しくない場合' do
      it '昇順にソートされた配列にならないこと' do
        expect(numbers_in_an_array.sort_numbers).not_to match([9, 6, 2, 1, 0])
      end
    end
  end
end
