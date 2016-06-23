FactoryGirl.define do

  factory :review do
    title { Faker::Name.title }

    factory :full_review do
      title '君に届け'

      after(:build) { |review| review.write_review('マンガ', '泣ける') }
    end

    initialize_with { new title }
  end

end
