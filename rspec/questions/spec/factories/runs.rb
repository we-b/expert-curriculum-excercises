FactoryGirl.define do

  factory :run do
    name { Faker::Name.name }

    factory :with_four_people do
      after(:build) { |bicycle| bicycle.distance(6) }
    end

    initialize_with { new name }
  end

end
