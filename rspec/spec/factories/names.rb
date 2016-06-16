FactoryGirl.define do

  factory :name do
    first_name 'Tech'
    last_name 'Taro'
    email 'Tech-Taro@gmail.com'
    company 'div'

    factory :email do
      email { Faker::Internet.free_email }
    end

    factory :company do
      company { Faker::Company.name }
    end

    initialize_with { new(first_name, last_name, email, company) }
  end

end
