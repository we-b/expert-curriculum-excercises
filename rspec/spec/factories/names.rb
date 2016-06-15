FactoryGirl.define do

  factory :name do
    first_name 'Tech'
    last_name 'Taro'

    initialize_with { new(first_name, last_name) }
  end

end
