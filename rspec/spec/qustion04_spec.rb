require 'question04'

describe Money do
  describe '#change?' do
    context 'less than 1000 yen' do
      it 'returns in coins' do
        money = Money.new(change: 500)
        expect(money.change_in?).to eq 'coins'
      end
    end

    context 'more than 1000 yen' do
      it 'returns in bill' do
        money = Money.new(change: 6000)
        expect(money.change_in?).to eq 'bill'
      end
    end
  end
end

describe Money do
  describe '#change?' do

    let(:money) { Money.new(params) }
    let(:params) { { change: change } }

    context 'less than 1000 yen' do
      let(:change) { 500 }
      it 'returns in coins' do
        expect(money.change_in?).to eq 'coins'
      end
    end

    context 'more than 1000 yen' do
      let(:change) { 6000 }
      it 'returns in bill' do
        expect(money.change_in?).to eq 'bill'
      end
    end
  end
end
