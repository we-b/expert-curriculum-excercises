require 'question11'

describe Profile do
  describe '#all_profile' do
    it '全てのデフォルトプロフィールを返すこと' do
      profile =  build(:profile, name: 'Tech Taro')
      expect(profile.all_profile).to eq 'Tech Taro, male, a_type, right'
    end
  end

  describe '#name_gender' do
    it '指定した名前と性別を返すこと' do
      profile =  build(:profile, :female, name: 'Tech Taro')
      expect(profile.name_gender).to eq 'Tech Taro, female'
    end
  end

  describe '#name_gender_blood_type' do
    it '指定した名前と性別と血液型を返すこと' do
      profile =  build(:profile, :male, :ab_type, name: 'Tech Taro')
      expect(profile.name_gender_blood_type).to eq 'Tech Taro, male, ab_type'
    end
  end

  describe '#name_gender_handedness' do
    it '指定した名前と性別と利き手を返すこと' do
      profile =  build(:profile, :female, :left, name: 'Tech Taro')
      expect(profile.name_gender_handedness).to eq 'Tech Taro, female, left'
    end
  end
end
