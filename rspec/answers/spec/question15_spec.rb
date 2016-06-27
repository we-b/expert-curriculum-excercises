require 'question15'

describe Review do
  describe '#self.get_review_count' do
    it 'レビューの数を返すこと' do
      review = build_list(:review, 5)
      expect(Review.get_review_count).to eq 5
    end
  end

  describe '#write_review(genre, impression)' do
    it 'ジャンルと感想を配列で返すこと' do
      review = build(:review)
      expect(review.write_review('アニメ', '面白い！')).to match(['アニメ', '面白い！'])
    end
  end

  describe '#show_review' do
    it 'レビューを返すこと' do
      review = build(:full_review)
      expect(review.show_review).to eq 'ジャンル : マンガ, タイトル : 君に届け, 感想 : 泣ける'
    end
  end
end
