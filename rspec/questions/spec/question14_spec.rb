require 'question14'

describe Game do
  describe '#challenge' do
    context 'destiny_numberが1の場合' do
      it '返り値があること' do
        game = build(___, :destiny_number_one)
        expect(___).to be_truthy
      end
    end

    ___ 'destiny_numberが0の場合' do
      it '返り値があること' do
        ___ = build(:game, ___)
        expect(game).to be_truthy
      end
    end
  end

  let(:game) { build(:game, status: status) }
  describe ___ do
    context 'statusが5の場合' do
      let(___) { 5 }
      it '王国を支配すること' do
        expect(game.happy_moment).to ___ 'あなたは王国を支配することに成功しました！おめでとうございます！'
      end
    end

    ___ 'statusが0以上、5未満の場合' do
      ___(:status) { 3 }
      it 'ランクがアップすること' do
        expect{ ___.happy_moment }.to change{ game.status }.by(1)
      end
    end
  end

  describe ___ do
    context 'statusが0の場合' do
      let(:status) { ___ }
      ___ '王国から追い出されること' do
        expect(game.sad_moment).to eq 'あなたは王国から追い出されました...'
      end
    end

    context 'statusが1以上、5未満の場合' do
      let(___) { 3 }
      it 'ランクが下がること' do
        expect{ game.sad_moment }.to ___{ game.status }.___(-1)
      end
    end
  end
end
