FactoryGirl.define do

  factory :fruit do
    first_fruit  'apple'
    second_fruit 'orange'
    third_fruit  'pineapple'

    initialize_with { new first_fruit, second_fruit, third_fruit }
  end

end
