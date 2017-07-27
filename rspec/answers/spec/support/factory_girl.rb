RSpec.configure do |config|
  require 'factory_girl'
  config.include FactoryGirl::Syntax::Methods

  config.before(:suite) do
    FactoryGirl.find_definitions
  end
end
