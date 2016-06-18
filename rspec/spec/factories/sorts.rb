FactoryGirl.define do

  factory :sort do
    numbers [9, 2, 6, 0, 1]

    initialize_with { new numbers }
  end

end
