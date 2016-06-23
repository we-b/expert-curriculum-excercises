require 'question11'

describe ___ do
  describe ___ do
    it '性別と血液型が、それぞれ male と o_type であること' do
      profile =  build(:male_o_type)
      expect(___.gender_blood_type).to eq('male, o_type')
    end
  end

  ___ '#gender_handedness' do
    it '性別と利き手が、それぞれ female と right であること' do
      profile =  build(___)
      expect(profile.gender_handedness).to eq(___)
    end
  end

  describe '#gender_blood_type_handedness' ___
    ___ '性別と血液型と利き手が、それぞれ male と ab_type と right であること' ___
      profile =  build(:male_ab_type_left)
      expect(___.___).to eq('male, ab_type, left')
    end
  end
end
