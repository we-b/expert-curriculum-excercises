require 'question14'

describe Game do
  describe '#challenge' do
    context 'destiny_numberが1の場合' do
      it '返り値があること' do
        game = build(:game, :destiny_number_one)
        expect(game).to be_truthy
      end
    end

    context 'destiny_numberが0の場合' do
      it '返り値があること' do
        game = build(:game, :destiny_number_zero)
        expect(game).to be_truthy
      end
    end
  end

  let(:game) { build(:game, status: status) }
  describe '#happy_moment' do
    context 'statusが5の場合' do
      let(:status) { 5 }
      it '王国を支配すること' do
        expect(game.happy_moment).to eq 'あなたは王国を支配することに成功しました！おめでとうございます！'
      end
    end

    context 'statusが0以上、5未満の場合' do
      let(:status) { 3 }
      it 'ランクがアップすること' do
        expect{ game.happy_moment }.to change{ game.status }.by(1)
      end
    end
  end

  describe '#sad_moment' do
    context 'statusが0の場合' do
      let(:status) { 0 }
      it '王国から追い出されること' do
        expect(game.sad_moment).to eq 'あなたは王国から追い出されました...'
      end
    end

    context 'statusが1以上、5未満の場合' do
      let(:status) { 3 }
      it 'ランクが下がること' do
        expect{ game.sad_moment }.to change{ game.status }.by(-1)
      end
    end
  end
end
