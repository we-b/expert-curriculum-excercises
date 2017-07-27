class Fruit

  attr_accessor :my_fruits

  def initialize(first_fruit, second_fruit, third_fruit)
    @my_fruits = []
    @my_fruits.push(first_fruit, second_fruit, third_fruit)
  end

end
