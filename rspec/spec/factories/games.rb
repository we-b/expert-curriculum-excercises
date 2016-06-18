FactoryGirl.define do

  factory :game do
    name { Faker::Name.name }
    status { Faker::Number.between(0, 5) }

    trait :destiny_number_one do
      after(:build) { |game| game.challenge(1) }
    end

    trait :destiny_number_zero do
      after(:build) { |game| game.challenge(0) }
    end

    initialize_with { new name, status }
  end

end
