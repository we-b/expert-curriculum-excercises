require 'question04'

describe Money do
  describe '#change_in?' do
    let(___) { Money.new(change) }
    context 'おつりが1000未満の場合' do
      let(:change) { 500 }
      it '小銭で返すこと' do
        expect(money.change_in?).to eq ___
      end
    end

    context 'おつりが1000以上の場合' do
      let(___) { 6000 }
      it 'お札で返すこと' do
        expect(___).to eq 'bill'
      end
    end
  end
end
