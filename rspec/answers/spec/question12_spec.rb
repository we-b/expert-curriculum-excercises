require 'question11'

describe Profile do
  describe 'male_o_type ファクトリ' do
    it '性別と血液型が、それぞれ male と o_type であること' do
      profile =  build(:male_o_type)
      expect(profile.gender_blood_type).to eq('male, o_type')
    end
  end

  describe 'female_right ファクトリ' do
    it '性別と利き手が、それぞれ female と right であること' do
      profile =  build(:female_right)
      expect(profile.gender_handedness).to eq('female, right')
    end
  end

  describe 'male_ab_type_left ファクトリ' do
    it '性別と血液型と利き手が、それぞれ male と ab_type と right であること' do
      profile =  build(:male_ab_type_left)
      expect(profile.gender_blood_type_handedness).to eq('male, ab_type, left')
    end
  end
end
