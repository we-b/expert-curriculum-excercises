require 'question15'

describe ___ do
  describe '#self.get_review_count' do
    it 'レビューの数を返すこと' do
      review = build_list(:review, 5)
      expect(___.___).to ___(5)
    end
  end

  describe '#write_review(genre, impression)' do
    it 'ジャンルと感想を配列で返すこと' do
      review = build(___)
      expect(review.___('アニメ', '面白い！')).to match(['アニメ', '面白い！'])
    end
  end

  describe ___ do
    it 'レビューを返すこと' do
      review = build(___)
      expect(___.show_review).to ___('ジャンル : マンガ, タイトル : 君に届け, 感想 : 泣ける')
    end
  end
end
