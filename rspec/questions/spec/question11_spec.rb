require 'question11'

describe ___ do
  describe '#all_profile' do
    it '全てのデフォルトプロフィールを返すこと' do
      profile =  build(___, name: 'Tech Taro')
      expect(profile.___).to eq('Tech Taro, male, a_type, right')
    end
  end

  describe ___ do
    it '指定した名前と性別を返すこと' do
      profile =  build(:profile, :female, name: ___)
      ___(profile.name_gender).to eq('Tech Taro, female')
    end
  end

  describe '#name_gender_blood_type' do
    it '指定した名前と性別と血液型を返すこと' do
      ___ =  build(:profile, :male, ___, name: 'Tech Taro')
      expect(profile.name_gender_blood_type).to ___('Tech Taro, male, ab_type')
    end
  end

  describe ___ do
    it '指定した名前と性別と利き手を返すこと' do
      profile =  build(:profile, ___, ___, name: 'Tech Taro')
      expect(___.name_gender_handedness).to eq('Tech Taro, female, left')
    end
  end
end
