FactoryGirl.define do

  factory :profile do
    name       { Faker::Name.name }
    gender     'male'
    blood_type 'a_type'
    handedness 'right'

    trait :male do
      gender :male
    end

    trait :female do
      gender :female
    end

    trait :a_type do
      blood_type :a_type
    end

    trait :b_type do
      blood_type :b_type
    end

    trait :o_type do
      blood_type :o_type
    end

    trait :ab_type do
      blood_type :ab_type
    end

    trait :right do
      handedness :right
    end

    trait :left do
      handedness :left
    end

    factory :male_o_type,       traits: [:male, :o_type]
    factory :female_right,      traits: [:female, :right]
    factory :male_ab_type_left, traits: [:male, :ab_type, :left]

    initialize_with { new name, gender, blood_type, handedness }
  end

end
