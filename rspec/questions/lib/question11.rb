class Profile

  def initialize(name, gender, blood_type, handedness)
    @name = name
    @gender = gender
    @blood_type = blood_type
    @handedness = handedness
  end

  def all_profile
    "#{@name}, #{@gender}, #{@blood_type}, #{@handedness}"
  end

  def name_gender
    "#{@name}, #{@gender}"
  end

  def name_gender_blood_type
    "#{@name}, #{@gender}, #{@blood_type}"
  end

  def name_gender_handedness
    "#{@name}, #{@gender}, #{@handedness}"
  end

  def gender_blood_type
    "#{@gender}, #{@blood_type}"
  end

  def gender_handedness
    "#{@gender}, #{@handedness}"
  end

  def gender_blood_type_handedness
    "#{@gender}, #{@blood_type}, #{@handedness}"
  end

end
