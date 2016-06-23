require 'question13'

describe Run do
  describe '#self.count' do
    it '走った人数を返すこと' do
      run = build_list(:with_four_people, 5)
      expect(Run.count).to eq(5)
    end
  end

  describe '#self.total_distance' do
    it '走った距離を返すこと' do
      expect(Run.total_distance).to eq(30)
    end
  end

  describe '#result' do
    it '結果を返すこと' do
      expect(Run.result).to eq('5人で、合計30 km 走りました。')
    end
  end

  describe '#distance(distance)' do
    it 'Tech Taroが走った距離を返すこと' do
      run = build(:run, name: 'Tech Taro')
      expect(run.distance(6)).to eq('Tech Taroさんは 6 km 走りました。')
    end
  end
end
